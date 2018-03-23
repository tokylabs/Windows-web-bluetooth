var electron = require('electron');
var app = electron.app;

var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;
//var http = require('http');
var path = require("path");
//var mkdirp = require('mkdirp');
var ipcMain = electron.ipcMain;
var mainWindow = null;
var dialog = electron.dialog;
//var fs = require("fs-extra");
var os = require('os');

var clipboard = electron.clipboard;
function templateMenu(){
    return [{label: "Application", submenu: [{ label: "DevTools", accelerator: "CmdOrCtrl+Alt+I", click: function() { BrowserWindow.getFocusedWindow().toggleDevTools(); }},{ label: "Close window", accelerator: "CmdOrCtrl+W", click: function() { BrowserWindow.getFocusedWindow().close(); }}, { label: "Quit", accelerator: "CmdOrCtrl+Q", click: function() { app.quit(); }} ]}, {label: "Edit", submenu: [{ label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" }, { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" }, { type: "separator" }, { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:", role: "cut"}, { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:", role: "copy" }, { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" , role: "paste"} ]} ]; 
}

app.on("ready", function () {
    var template = templateMenu();
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 1000 , 
        "min-width": 550,
        "min-height": 300
    });
    mainWindow.loadURL("https://create.tokylabs.com");

    app.on("activate-with-no-open-windows",function(){
        mainWindow = new BrowserWindow({
            width: 1000,
            height: 1000 , 
            "min-width": 550,
            "min-height": 300
        });
        mainWindow.loadURL("https://create.tokylabs.com");

        mainWindow.on("closed", function () {
            mainWindow =  null;
        });
    });

    app.on('window-all-closed', function() {
      if (process.platform != 'darwin') {
        app.quit();
      }
    });

});
