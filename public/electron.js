const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
      width: 1024,
      height: 768,
      webPreferences: {
        nodeIntegration: true,
        // preload: path.join(__dirname, 'preload.js')  // Only if you are using preload.js
      },
    });

  // Load your React app
//   win.loadURL('http://localhost:3000'); // If running in development mode

  // For production, use this:
  win.loadFile(path.join(__dirname, 'build', 'index.html')); // For production build
}

app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
