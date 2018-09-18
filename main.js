const {app, BrowserWindow, Menu, Tray} = require('electron')

  let win

  function createWindow () {
    win = new BrowserWindow({width: 1200, height: 700, icon: './assets/icon.png'});
    win.loadFile('./public/index.html');
    //Menu.setApplicationMenu(null);
    win.on('closed', () => {
        win = null
    });
  }

  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });
