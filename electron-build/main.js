// electron-main/index.ts
import {app, BrowserWindow} from 'electron';
import path from 'path';

const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, '../electron-preload/index.js'),
        },
    });
    if (app.isPackaged) {
        win.loadFile(path.join(__dirname, '../index.html'));
    } else {
        // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
        const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`;
        win.loadURL(url);
    }
};
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
//# sourceMappingURL=index.js.map
