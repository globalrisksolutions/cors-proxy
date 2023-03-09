import httpProxy from 'http-proxy';
import { enableCors } from './utils.js';

const proxy = httpProxy.createProxyServer();

proxy.on('error', e => {
    console.log('proxy server', 'error', e);
});

proxy.on('proxyRes', (_, req, res) => {
    enableCors(req, res);
});

export default proxy;