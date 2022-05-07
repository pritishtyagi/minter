"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//------------------------------------------------------imports-----------------------------------------------------
//Loads .env file contents into process.env.
dotenv_1.default.config();
//Creates an Express application. The express() function is a top-level function exported by the express module.
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get("/", (req, res, next) => {
    res.json({
        message: "Server App"
    });
});
app.listen(port, () => {
    console.log(`Listening on the port number ${port}.`);
});
