const { app, BrowserWindow, Notification } = require('electron')
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 640,
    resizable: false,
    title: '番茄钟',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.setMenu(null)
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
