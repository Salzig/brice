var search_data = {"index":{"searchIndex":["brice","colours","colour","pp","tokenizer","config","packageconfig","dsl","history","tee","shortcuts","objectshortcuts","version","irb","context","%()","+()","-()","[]()","[]()","_tee_delete()","aorta()","brice()","brice_load()","brice_require()","brice_rescue()","brice_run_cmd()","cgrep()","clear()","colourize()","colourize_string()","colours()","colours=()","config=()","custom_extensions()","define_irb_method()","disable()","disable_irb()","disable_pp()","each()","empty?()","enable_irb()","enable_pp()","escape()","evaluate()","exclude()","extend_history()","extended()","finalize_irb_rc!()","find_rc_files()","have?()","have?()","include()","include?()","include?()","init()","init()","init()","init()","init_history()","init_object()","init_ri()","inspect_value_with_colour()","irb_def()","irb_rc()","load_custom_extensions()","load_history()","load_rc_files()","method_missing()","mgrep()","new()","new()","only()","opt()","output_value_with_colour()","po()","poc()","pp_with_colour()","push_m_with_tee()","push_with_tee()","rc_files()","read_history()","ri()","ri!()","save_history()","singleline_pp_with_colour()","tee()","tee!()","to_a()","to_s()","tokenize()","copying","changelog","readme"],"longSearchIndex":["brice","brice::colours","brice::colours::colour","brice::colours::pp","brice::colours::tokenizer","brice::config","brice::config::packageconfig","brice::dsl","brice::history","brice::history::tee","brice::shortcuts","brice::shortcuts::objectshortcuts","brice::version","irb","irb::context","brice::config#%()","brice::config#+()","brice::config#-()","brice::colours::colour#[]()","brice::config#[]()","brice::history::tee#_tee_delete()","brice::shortcuts::objectshortcuts#aorta()","brice::dsl#brice()","brice::dsl#brice_load()","brice::dsl#brice_require()","brice::dsl#brice_rescue()","brice::dsl#brice_run_cmd()","brice::shortcuts::objectshortcuts#cgrep()","brice::config#clear()","brice::colours#colourize()","brice::colours#colourize_string()","brice::colours#colours()","brice::colours#colours=()","brice#config=()","brice#custom_extensions()","brice::dsl#define_irb_method()","brice::colours#disable()","brice::colours#disable_irb()","brice::colours#disable_pp()","brice::config::packageconfig#each()","brice::config::packageconfig#empty?()","brice::colours#enable_irb()","brice::colours#enable_pp()","brice::colours::colour#escape()","irb::context#evaluate()","brice::config#exclude()","brice::history#extend_history()","brice::history::tee::extended()","brice#finalize_irb_rc!()","brice#find_rc_files()","brice#have?()","brice::config#have?()","brice::config#include()","brice#include?()","brice::config#include?()","brice#init()","brice::colours#init()","brice::history::init()","brice::shortcuts#init()","brice::history#init_history()","brice::shortcuts#init_object()","brice::shortcuts#init_ri()","brice::colours#inspect_value_with_colour()","brice::dsl#irb_def()","brice::dsl#irb_rc()","brice#load_custom_extensions()","brice::history#load_history()","brice#load_rc_files()","brice::config#method_missing()","brice::shortcuts::objectshortcuts#mgrep()","brice::config::new()","brice::history::new()","brice::config#only()","brice#opt()","brice::colours#output_value_with_colour()","brice::shortcuts::objectshortcuts#po()","brice::shortcuts::objectshortcuts#poc()","brice::colours::pp::pp_with_colour()","brice::history::tee#push_m_with_tee()","brice::history::tee#push_with_tee()","brice#rc_files()","brice::history#read_history()","brice::shortcuts#ri()","brice::shortcuts#ri!()","brice::history#save_history()","brice::colours::pp::singleline_pp_with_colour()","brice::history::tee#tee()","brice::history::tee#tee!()","brice::version::to_a()","brice::version::to_s()","brice::colours::tokenizer#tokenize()","","",""],"info":[["Brice","","Brice.html","",""],["Brice::Colours","","Brice/Colours.html","","<p>Add colour support to IRb.\n<p>Set your own colours with <code>config.colours.opt = { :colours =&gt; { ...\n} }</code> or …\n"],["Brice::Colours::Colour","","Brice/Colours/Colour.html","","<p>Terminal escape codes for colours.\n"],["Brice::Colours::PP","","Brice/Colours/PP.html","",""],["Brice::Colours::Tokenizer","","Brice/Colours/Tokenizer.html","","<p>Tokenize an inspection string.\n"],["Brice::Config","","Brice/Config.html","","<p>Exclude unwanted packages:\n\n<pre>config.exclude 'foo', 'bar'\nBrice.config -= %w[quix quux]</pre>\n<p>Include non-default …\n"],["Brice::Config::PackageConfig","","Brice/Config/PackageConfig.html","",""],["Brice::DSL","","Brice/DSL.html","","<p>Certain global helper methods for use inside IRb extensions. Also available\ninside the IRb session.\n"],["Brice::History","","Brice/History.html","","<p>IRb history support.\n<p>Configure with <code>config.history.opt = { ... }</code>, where the\nfollowing keys are recognized …\n"],["Brice::History::Tee","","Brice/History/Tee.html","",""],["Brice::Shortcuts","","Brice/Shortcuts.html","","<p>Convenient shortcut methods.\n<p>Set <code>config.shortcuts.opt = { :object =&gt; false }</code> to disable\nObjectShortcuts …\n"],["Brice::Shortcuts::ObjectShortcuts","","Brice/Shortcuts/ObjectShortcuts.html","",""],["Brice::Version","","Brice/Version.html","",""],["IRB","","IRB.html","",""],["IRB::Context","","IRB/Context.html","",""],["%","Brice::Config","Brice/Config.html#method-i-25","(*packages)",""],["+","Brice::Config","Brice/Config.html#method-i-2B","(*packages)",""],["-","Brice::Config","Brice/Config.html#method-i-2D","(*packages)",""],["[]","Brice::Colours::Colour","Brice/Colours/Colour.html#method-i-5B-5D","(key)",""],["[]","Brice::Config","Brice/Config.html#method-i-5B-5D","(package)","<p>Accessor for package <code>package</code>.\n"],["_tee_delete","Brice::History::Tee","Brice/History/Tee.html#method-i-_tee_delete","(*args)",""],["aorta","Brice::Shortcuts::ObjectShortcuts","Brice/Shortcuts/ObjectShortcuts.html#method-i-aorta","(obj = self, editor = nil)","<p>Cf. &lt;rubyforge.org/snippet/detail.php?type=snippet&id=22&gt;\n"],["brice","Brice::DSL","Brice/DSL.html#method-i-brice","(package)","<p>Declare package <code>package</code>. Optionally load given libraries (see\nbelow) and configure the package if it …\n"],["brice_load","Brice::DSL","Brice/DSL.html#method-i-brice_load","(filename, wrap = false, quiet = Brice.quiet, &block)","<p>Kernel#load the file named <code>filename</code> with argument\n<code>wrap</code> and optionally execute the block in case of success. …\n"],["brice_require","Brice::DSL","Brice/DSL.html#method-i-brice_require","(string, quiet = Brice.quiet, &block)","<p>Kernel#require the library named <code>string</code> and optionally execute\nthe block in case of success. Doesn’t …\n"],["brice_rescue","Brice::DSL","Brice/DSL.html#method-i-brice_rescue","(what, args = [], error = Exception, quiet = Brice.quiet)","<p>Call <code>what</code> with <code>args</code> and rescue potential\n<code>error</code>, optionally executing block in case of success. Gives …\n"],["brice_run_cmd","Brice::DSL","Brice/DSL.html#method-i-brice_run_cmd","(cmd, env = {})","<p>Runs <code>cmd</code> with ENV modified according to <code>env</code>.\n"],["cgrep","Brice::Shortcuts::ObjectShortcuts","Brice/Shortcuts/ObjectShortcuts.html#method-i-cgrep","(needle)",""],["clear","Brice::Config","Brice/Config.html#method-i-clear","()","<p>Clear all packages.\n"],["colourize","Brice::Colours","Brice/Colours.html#method-i-colourize","(str)","<p>Colourize the results of inspect\n"],["colourize_string","Brice::Colours","Brice/Colours.html#method-i-colourize_string","(str, colour)","<p>Return a string with the given colour.\n"],["colours","Brice::Colours","Brice/Colours.html#method-i-colours","()","<p>Get current colour map\n"],["colours=","Brice::Colours","Brice/Colours.html#method-i-colours-3D","(hash)","<p>Set colour map to hash\n"],["config=","Brice","Brice.html#method-i-config-3D","(config)","<p>Set config to <code>config</code>. Raises a TypeError if\n<code>config</code> is not a Brice::Config.\n"],["custom_extensions","Brice","Brice.html#method-i-custom_extensions","()","<p>Get the custom extension files.\n"],["define_irb_method","Brice::DSL","Brice/DSL.html#method-i-define_irb_method","(symbol, method = nil, &block)",""],["disable","Brice::Colours","Brice/Colours.html#method-i-disable","()",""],["disable_irb","Brice::Colours","Brice/Colours.html#method-i-disable_irb","()","<p>Disable colourized IRb results.\n"],["disable_pp","Brice::Colours","Brice/Colours.html#method-i-disable_pp","()",""],["each","Brice::Config::PackageConfig","Brice/Config/PackageConfig.html#method-i-each","()","<p>Iterates over all entries in <code>pkgconfig</code>. Returns\n<code>pkgconfig</code>.\n"],["empty?","Brice::Config::PackageConfig","Brice/Config/PackageConfig.html#method-i-empty-3F","()","<p>Checks whether <code>pkgconfig</code> is empty?\n"],["enable_irb","Brice::Colours","Brice/Colours.html#method-i-enable_irb","()","<p>Enable colourized IRb results.\n"],["enable_pp","Brice::Colours","Brice/Colours.html#method-i-enable_pp","()",""],["escape","Brice::Colours::Colour","Brice/Colours/Colour.html#method-i-escape","(key)","<p>Return the escape code for a given colour.\n"],["evaluate","IRB::Context","IRB/Context.html#method-i-evaluate","(*args)","<p>Capture execution time\n"],["exclude","Brice::Config","Brice/Config.html#method-i-exclude","(*packages)","<p>Disable/exclude packages <code>packages</code>.\n"],["extend_history","Brice::History","Brice/History.html#method-i-extend_history","()",""],["extended","Brice::History::Tee","Brice/History/Tee.html#method-c-extended","(base)",""],["finalize_irb_rc!","Brice","Brice.html#method-i-finalize_irb_rc-21","()","<p>Generate proc for IRB_RC from all added procs.\n"],["find_rc_files","Brice","Brice.html#method-i-find_rc_files","(dir = RC_DIR)","<p>Find the actual extension files in <code>dir</code>.\n"],["have?","Brice","Brice.html#method-i-have-3F","(package)",""],["have?","Brice::Config","Brice/Config.html#method-i-have-3F","(package)",""],["include","Brice::Config","Brice/Config.html#method-i-include","(*packages)","<p>Enable/include packages <code>packages</code>.\n"],["include?","Brice","Brice.html#method-i-include-3F","(package)","<p>See whether package <code>package</code> is enabled/included.\n"],["include?","Brice::Config","Brice/Config.html#method-i-include-3F","(package)","<p>See whether package <code>package</code> is enabled/included.\n"],["init","Brice","Brice.html#method-i-init","(options = {})","<p>Initialize Brice and optionally configure any packages.\n"],["init","Brice::Colours","Brice/Colours.html#method-i-init","(opt = {})",""],["init","Brice::History","Brice/History.html#method-c-init","(opt = {})",""],["init","Brice::Shortcuts","Brice/Shortcuts.html#method-i-init","(opt = {})",""],["init_history","Brice::History","Brice/History.html#method-i-init_history","(history)",""],["init_object","Brice::Shortcuts","Brice/Shortcuts.html#method-i-init_object","()",""],["init_ri","Brice::Shortcuts","Brice/Shortcuts.html#method-i-init_ri","()",""],["inspect_value_with_colour","Brice::Colours","Brice/Colours.html#method-i-inspect_value_with_colour","(value)",""],["irb_def","Brice::DSL","Brice/DSL.html#method-i-irb_def","(symbol, method = nil, &block)","<p>Define a method for use inside the IRb session.\n"],["irb_rc","Brice::DSL","Brice/DSL.html#method-i-irb_rc","(&block)","<p>Add IRB_RC proc (to be executed whenever a (sub-)session is started).\n"],["load_custom_extensions","Brice","Brice.html#method-i-load_custom_extensions","()","<p>Load the custom extension files.\n"],["load_history","Brice::History","Brice/History.html#method-i-load_history","(history = @history)",""],["load_rc_files","Brice","Brice.html#method-i-load_rc_files","(include_custom_extensions = false)","<p>Load the extension files, optionally including custom extensions if\n<code>include_custom_extensions</code> is true. …\n"],["method_missing","Brice::Config","Brice/Config.html#method-i-method_missing","(method, *args)","<p>Convenience accessors to individual package configurations.\n"],["mgrep","Brice::Shortcuts::ObjectShortcuts","Brice/Shortcuts/ObjectShortcuts.html#method-i-mgrep","(needle)",""],["new","Brice::Config","Brice/Config.html#method-c-new","(packages = [])",""],["new","Brice::History","Brice/History.html#method-c-new","(opt = {}, history = defined?(Readline::HISTORY) && Readline::HISTORY)",""],["only","Brice::Config","Brice/Config.html#method-i-only","(*packages)","<p>Enable/include <strong>only</strong> packages <code>packages</code>,\ndisable/exclude everything else.\n"],["opt","Brice","Brice.html#method-i-opt","(opt, key, default = true)","<p>Returns the value of <code>opt</code> at <code>key</code> if present, or\n<code>default</code> otherwise.\n"],["output_value_with_colour","Brice::Colours","Brice/Colours.html#method-i-output_value_with_colour","()",""],["po","Brice::Shortcuts::ObjectShortcuts","Brice/Shortcuts/ObjectShortcuts.html#method-i-po","(obj = self)","<p>Print object methods, sorted by name. (excluding methods that exist in the\nclass Object)\n"],["poc","Brice::Shortcuts::ObjectShortcuts","Brice/Shortcuts/ObjectShortcuts.html#method-i-poc","(obj = self)","<p>Print object constants, sorted by name.\n"],["pp_with_colour","Brice::Colours::PP","Brice/Colours/PP.html#method-c-pp_with_colour","(obj, out = $>, width = 79)",""],["push_m_with_tee","Brice::History::Tee","Brice/History/Tee.html#method-i-push_m_with_tee","(*args)",""],["push_with_tee","Brice::History::Tee","Brice/History/Tee.html#method-i-push_with_tee","(arg)",""],["rc_files","Brice","Brice.html#method-i-rc_files","(include_custom_extensions = false)","<p>Get the extension files, optionally including custom extensions if\n<code>include_custom_extensions</code> is true. …\n"],["read_history","Brice::History","Brice/History.html#method-i-read_history","()",""],["ri","Brice::Shortcuts","Brice/Shortcuts.html#method-i-ri","(*args)",""],["ri!","Brice::Shortcuts","Brice/Shortcuts.html#method-i-ri-21","(*args)",""],["save_history","Brice::History","Brice/History.html#method-i-save_history","()",""],["singleline_pp_with_colour","Brice::Colours::PP","Brice/Colours/PP.html#method-c-singleline_pp_with_colour","(obj, out = $>)",""],["tee","Brice::History::Tee","Brice/History/Tee.html#method-i-tee","()",""],["tee!","Brice::History::Tee","Brice/History/Tee.html#method-i-tee-21","()",""],["to_a","Brice::Version","Brice/Version.html#method-c-to_a","()","<p>Returns array representation.\n"],["to_s","Brice::Version","Brice/Version.html#method-c-to_s","()","<p>Short-cut for version string.\n"],["tokenize","Brice::Colours::Tokenizer","Brice/Colours/Tokenizer.html#method-i-tokenize","(str)",""],["COPYING","","COPYING.html","","<p>License for brice\n\n<pre>                    GNU AFFERO GENERAL PUBLIC LICENSE\n                       Version ...</pre>\n"],["ChangeLog","","ChangeLog.html","","<p>Revision history for brice\n<p>0.0.1 [2008-11-14]\n<p>Birthday :-)\n"],["README","","README.html","","<p>brice - Extra cool IRb goodness for the masses\n<p>VERSION\n<p>This documentation refers to brice version 0.2.4 …\n"]]}}