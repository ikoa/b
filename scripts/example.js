const pg = require('pg');
const databaseInfo = {connectionString: process.env.DATABASE_URL, ssh: true};

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
            msg.send(teiji(msg.message.user.id));
        });

    };
}).call(this);


const teiji = (name) => {
    return isSuccess() ?
        ":sexygirl1: < 成功！　　" + " `" + name + "の勝率:" + 0 + "勝" + 0 + "敗`" :
        ":sexygirl1: < 失敗・・・" + " `" + name + "の勝率:" + 0 + "勝" + 0 + "敗`";
};

const isSuccess = () => {
    return Math.floor(Math.random() * 3) === 0; // 0 or 1, 2
};
