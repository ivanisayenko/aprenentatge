"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var App_1 = __importDefault(require("./App"));
var port = 3000;
App_1.default.set('port', port);
//create a server and pass our Express app to it.
var server = http.createServer(App_1.default);
server.listen(port);
server.on('listening', onListening);
//function to note that Express is listening
function onListening() {
    console.log("Listening on port " + port);
}
