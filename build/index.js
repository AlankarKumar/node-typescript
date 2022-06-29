"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes");
const listener = (req, res) => {
    (0, routes_1.requestHandler)(req, res);
};
const server = http_1.default.createServer(listener);
server.listen(5000);
