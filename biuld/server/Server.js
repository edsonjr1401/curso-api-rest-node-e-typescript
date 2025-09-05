"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const routes_1 = require("./routes");
const Server = (0, express_1.default)();
exports.Server = Server;
Server.use(express_1.default.json());
Server.use(routes_1.router);
//# sourceMappingURL=Server.js.map