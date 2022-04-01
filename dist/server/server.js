"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.set('views', 'dist/views');
app.set('view engine', 'ejs');
app.use(express_1.default.static('dist'));
app.use('css', express_1.default.static(__dirname + 'public/css'));
app.use('js', express_1.default.static(__dirname + 'code'));
app.use('json', express_1.default.static(__dirname + 'public/json'));
app.use('img', express_1.default.static(__dirname + 'public/images'));
app.get('/', (req, res) => {
    res.render('Pages/Index');
});
if (port !== undefined && port !== null) {
    app.listen(port, () => {
        console.info(`
+/--------------------------------------
Server Msg: On and On
Server Status: 200
LocalPort: ${port}
+/--------------------------------------
`);
    });
}
else {
    console.info(`
    +/--------------------------------------
Server Msg: Port Doesn't Got into Server, and it received as Null or Undefined
Server Status: 500
LocalPort: ${port} /##Error
+/--------------------------------------
    `);
}
