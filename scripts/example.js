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
            msg.send(Service.teiji("hoge"));
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
