import App from "./App";

import * as bodyParser from 'body-parser';
import morgan from 'morgan';

import HomeController from "./controllers/HomeController";

import myMiddleware from "./middlewares/log.middleware.js";

const app = new App({
    port: 3000,
    middlewares: [
        morgan('dev'),
        bodyParser.urlencoded({extended: true}),
        bodyParser.json(),
        myMiddleware
    ],
    controllers: [
        new HomeController(),
    ]
});

app.listen();