"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var SERVER_PORT = 3004;
app.get('/status', function (request, response) {
    return response.json({ status: 'ONLINE' });
});
app.listen(SERVER_PORT);
