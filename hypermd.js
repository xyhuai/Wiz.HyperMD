var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objDocument = objWindow.CurrentDocument;



var pluginPath = objApp.GetPluginPathByScriptFileName("hypermd.js");
var editorFileName = pluginPath+"docs/examples/ai1.html" + "?guid=" + objDocument.GUID + "&kbguid=" + objDocument.Database.KbGUID;
objWindow.ViewHtml(editorFileName, true);