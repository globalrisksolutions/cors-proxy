import { createServer } from 'http';
import { enableCors } from './utils.js';
import proxy from "./proxy.js";

const masterServer = createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        enableCors(req, res);
        res.writeHead(200);
        res.end();
        return;
    }
    proxy.web(req, res, {
        changeOrigin: true,
        target: `http://localhost:${process.env.PROXY_PORT || 8000}/`,
    });
});

export const startMasterServer = () => {
    const masterPort = process.env.SERVER_PORT || 4000
    masterServer.listen(masterPort, () => {
        console.log(`master server listening on port ${masterPort}`)
    });
}
