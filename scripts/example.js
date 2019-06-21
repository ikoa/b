import { Service } from './service';

(function() {
    module.exports = function(robot) {

        const service = new Service();

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
            msg.send(service.teiji("hoge"));
        });

    };
}).call(this);

