const service = require('./service');
const fetch = require('node-fetch');
const express = require('express');
const app = express();

(function() {
    module.exports = function(robot) {

        // hello world
        robot.hear(/helo/i, (msg) => {
            msg.send("world");
        });

        // sushi
        robot.hear(/sushi/i, (msg) => {
            msg.send(":sushi: SUSHIRO↑ SUSHIRO↓");
        });

        // 定時退社
        robot.hear(/定時退社/i, (msg) => {
            msg.send(service.teiji(msg.message.user.name));
        });

        robot.respond(/test/, (msg) => {
            msg.send(msg.message.user.name);
        });

    };
}).call(this);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
    response.send('Hello World!');
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'));
});
