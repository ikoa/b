const service = require('./service');

(function() {
    module.exports = function(robot) {

        // hello world
        robot.hear(/helo/i, (res) => {
            res.send("world");
        });

        // sushi
        robot.hear(/sushi/i, (res) => {
            res.send(":sushi: SUSHIRO↑ SUSHIRO↓");
        });

        // 定時退社
        robot.hear(/定時退社/i, (res) => {
            res.send(service.teiji(res.message.username));
        });

    };
}).call(this);

