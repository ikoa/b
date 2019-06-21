import { teiji } from './service';

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
            msg.send(teiji(msg.message.username));
        });

    };
}).call(this);

