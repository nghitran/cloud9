({
    baseUrl: "./client",
    paths: {
        "text" : "../text", // plugin for pulling in text! files
        "ace": "empty:",//../support2/ace/lib/ace",
        "c9/ext" : "empty:",
        "debug" : "../support2/lib-v8debug/lib/v8debug",
        "treehugger" : "../support2/treehugger/lib/treehugger",
        "apf"     : "apf"
    },
    include: [
    "core/ide", "core/ext", "core/util", "core/settings",
    "debug/Breakpoint",
    "debug/ChromeDebugMessageStream",
    "debug/WSChromeDebugMessageStream",
    "debug/V8DebuggerService",
    "debug/DevToolsService",
    "debug/V8Debugger",
    "debug/StandaloneV8DebuggerService",
    "debug/WSV8DebuggerService",
    "treehugger/traverse",
    "treehugger/js/parse",
    "ext/filesystem/filesystem",
    "ext/settings/settings",
    "ext/editors/editors",
    //"ext/connect/connect",
    "ext/themes/themes",
    "ext/themes_default/themes_default",
    "ext/panels/panels",
    "ext/dockpanel/dockpanel",
    "ext/openfiles/openfiles",
    "ext/tree/tree",
    "ext/save/save",
    "ext/recentfiles/recentfiles",
    "ext/gotofile/gotofile",
    "ext/newresource/newresource",
    "ext/undo/undo",
    "ext/clipboard/clipboard",
    "ext/searchinfiles/searchinfiles",
    "ext/searchreplace/searchreplace",
    "ext/quickwatch/quickwatch",
    "ext/quicksearch/quicksearch",
    "ext/gotoline/gotoline",
    "ext/html/html",
    "ext/help/help",
    //"ext/ftp/ftp",
    "ext/code/code",
    "ext/statusbar/statusbar",
    "ext/imgview/imgview",
    //"ext/preview/preview",
    "ext/extmgr/extmgr",
    //"ext/run/run", //Add location rule
    "ext/runpanel/runpanel", //Add location rule
    "ext/debugger/debugger", //Add location rule
    "ext/noderunner/noderunner", //Add location rule
    "ext/console/console",
    "ext/consolehints/consolehints",
    "ext/tabbehaviors/tabbehaviors",
    "ext/tabsessions/tabsessions",
    "ext/keybindings/keybindings",
    "ext/keybindings_default/keybindings_default",
    "ext/watcher/watcher",
    "ext/dragdrop/dragdrop",
    "ext/beautify/beautify",
    "ext/offline/offline",
    "ext/stripws/stripws",
    "ext/testpanel/testpanel",
    "ext/nodeunit/nodeunit",
    "ext/zen/zen",
    "ext/codecomplete/codecomplete",
    //"ext/autosave/autosave",
    "ext/vim/vim",
    "ext/guidedtour/guidedtour",
    "ext/quickstart/quickstart",
    "ext/jslanguage/jslanguage",
    "ext/autotest/autotest",
    "ext/tabsessions/tabsessions",
    "ext/closeconfirmation/closeconfirmation",
    "ext/codetools/codetools",
    "ext/colorpicker/colorpicker",
    "ext/minimap/minimap"
    //"ext/acebugs/acebugs"
    ],
    out: "./client/ext/packed.js",
    inlineText: true,
    findNestedDependencies: true,
    optimizeAllPluginResources: false,
    useStrict: true,
    wrap: true,
    optimize: "none",
})