const service = require('./service');

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
            msg.send(service.teiji(msg.message.user.display.name));
        });

        robot.respond(/test/, (msg) => {
            msg.send(msg.message.user.id);
        });

	robot.respond(/t2st/, (msg) => {
            msg.send(service.test("hoge"));
        });

    };
}).call(this);
