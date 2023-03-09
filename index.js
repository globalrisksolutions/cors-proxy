import * as dotenv from 'dotenv'
dotenv.config()
import { startProxyServer } from './src/proxy-server.js';
import { startMasterServer } from './src/master-server.js';

startProxyServer()
startMasterServer()
