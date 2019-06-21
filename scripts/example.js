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

async function getName2(userId) {
    const client = new pg.Client(databaseInfo);
    client.connect();
    console.log("userId ===> " + userId)
    //const queryString = "select name from member_detail where user_id =='" + userId + "';";
    const queryString = "SELECT name, user_id FROM member_detail WHERE user_id = 'UE1QC057Z';";
    const res = await client.query(queryString);
    console.log(res.rows[0].name);
    const name = res.rows[0].name;
    return name;
}

const teiji = (userId) => {
    const userName = getName2(userId);
    console.log("username:" + userName);
    return isSuccess() ?
        ":sexygirl1: < 成功！　　" + " `" + userName + "の勝率:" + 0 + "勝" + 0 + "敗`" :
        ":sexygirl1: < 失敗・・・" + " `" + userName + "の勝率:" + 0 + "勝" + 0 + "敗`";
};

const isSuccess = () => {
    return Math.floor(Math.random() * 3) === 0; // 0 or 1, 2
};
