import { createServer } from 'http';
import { enableCors } from './utils.js';
import proxy from "./proxy.js";

const server = createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        enableCors(req, res);
        res.writeHead(200);
        res.end();
        return;
    }
    proxy.web(req, res, {
        changeOrigin: true,
        target: process.env.TARGET,
    });
});

export const startProxyServer = () => {
    const proxyPort = process.env.PROXY_PORT || 8000;
    server.listen(proxyPort, () => {
        console.log(`proxy server listening on port ${proxyPort}`)
    });
}
