import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('NodeAPI', {
  update: (count: number) => ipcRenderer.send('update-title', count),
});
