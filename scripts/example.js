const service = require('./service');
const fetch = require('node-fetch');

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
            const username = robot.brain.userForName(msg.message.user.name);
            msg.send(service.teiji(username));
        });

    };
}).call(this);


fetch('/iron-lung', {method: 'GET'})
	  .then(res => console.log(res)).catch(err => console.log(err));

fetch('/')
    .then((res) => res.text("hello world"));
