import express from "express";
import handlebars from "express-handlebars";
import productRouter from "./routers/products.routers.js";
import cartRouter from "./routers/carts.routers.js";
import path from "path";

import { __dirname } from './utils.js';
import indexRouter from './routers/index.routers.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/', indexRouter);

app.use((error, req, res, next) => {
    const message = `Ha ocurrido un error desconocido: ${error.message}`;
    console.error(message);
    res.status(500).json({ message });
});

app.use("/api", productRouter);
app.use("/api", cartRouter);


export default app;