#--
###############################################################################
#                                                                             #
# A component of brice, the extra cool IRb goodness donator                   #
#                                                                             #
# Copyright (C) 2008-2011 Jens Wille                                          #
#                                                                             #
# Authors:                                                                    #
#     Jens Wille <jens.wille@uni-koeln.de>                                    #
#                                                                             #
# brice is free software: you can redistribute it and/or modify it under the  #
# terms of the GNU Affero General Public License as published by the Free     #
# Software Foundation, either version 3 of the License, or (at your option)   #
# any later version.                                                          #
#                                                                             #
# brice is distributed in the hope that it will be useful, but WITHOUT ANY    #
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS   #
# FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for     #
# more details.                                                               #
#                                                                             #
# You should have received a copy of the GNU Affero General Public License    #
# along with brice. If not, see <http://www.gnu.org/licenses/>.               #
#                                                                             #
###############################################################################
#++

require 'brice'

module Brice

  # IRb history support.

  class History

    DEFAULTS = {
      :path   =>  ENV['IRB_HISTORY_FILE'] || File.join(ENV.user_home, '.irb_history'),
      :size   => (ENV['IRB_HISTORY_SIZE'] || 1000).to_i,
      :perms  => File::WRONLY | File::CREAT | File::TRUNC,
      :uniq   => :reverse,
      :merge  => true
    }

    def self.init(opt = {})
      new(opt)
    end

    def initialize(opt = {}, history = defined?(Readline::HISTORY) && Readline::HISTORY)
      DEFAULTS.each { |key, val|
        instance_variable_set("@#{key}", Brice.opt?(opt, key, val))
      }

      @path    = File.expand_path(@path)
      @reverse = @uniq.to_s == 'reverse'

      init_history(history) if history
    end

    private

    def init_history(history)
      @history = history

      load_history
      extend_history

      Kernel.at_exit { save_history }
    end

    def load_history(history = @history)
      File.foreach(@path) { |line|
        line.chomp!
        history << line
      } if File.readable?(@path)
    end

    def extend_history
      @history.extend(Tee) if @merge && class << @history; !include?(Tee); end
    end

    def save_history
      if @merge
        load_history(lines = [])
        @history.tee! { |t| lines.concat(t) }
      else
        lines = @history.to_a
      end

      lines.reverse! if @reverse
      lines.uniq!    if @uniq
      lines.reverse! if @reverse

      lines.slice!(0, lines.size - @size)

      File.open(@path, @perms) { |f| f.puts(lines) }
    end

    module Tee

      def self.extended(base)
        class << base
          alias_method :push_without_tee,   :<<
          alias_method :push_m_without_tee, :push

          alias_method :<<,   :push_with_tee
          alias_method :push, :push_m_with_tee
        end
      end

      def tee
        @tee ||= []
      end

      def tee!
        yield tee
      ensure
        tee.clear
      end

      def push_with_tee(arg)
        _tee_delete(arg)

        tee << arg
        push_without_tee(arg)
      end

      def push_m_with_tee(*args)
        _tee_delete(*args)

        tee.concat(args)
        push_m_without_tee(*args)
      end

      private

      def _tee_delete(*args)
        args.each { |arg| tee.delete(arg) }

        indexes = []

        each_with_index { |line, index|
          indexes << index if args.include?(line)
        }

        indexes.reverse_each { |index| delete_at(index) }
      end

    end

  end

end
