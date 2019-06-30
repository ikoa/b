const pg = require('pg');
const databaseInfo = {connectionString: process.env.DATABASE_URL, ssh: true};

(function() {
    module.exports = async function(robot) {

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
	    const message = teiji(msg, msg.message.user.id);
	    //console.log("teiji => " + message);
//            msg.send(message);
        });

    };
}).call(this);

async function getName(userId) {
    const client = new pg.Client(databaseInfo);
    client.connect();
    console.log("userId ===> " + userId);
    //const queryString = "select name from member_detail where user_id =='" + userId + "';";
    const queryString =
	  "SELECT name, success_count, failure_count, user_id FROM member_detail WHERE user_id = '" + userId + "';";
    const res = await client.query(queryString).catch(err => {
        console.log(err.message);
        return Promise.reject(new Error('throw from await/catch'));
      })
      .catch(err => {
          console.log("ERROR!!:" + err.message);
      });
    
    console.log(res.rows[0].name);
    const name = res.rows[0].name;
    return name;
}



const teiji = async (msg, userId) => {
    const userName = await getName(msg.message.user.id);
    console.log("username:" + userName);
    const isSuccess = isSuccess();
    const result = isSuccess ?
	  ":sexygirl1: < 成功！　　" + " `" + userName + "の勝率:" + 0 + "勝" + 0 + "敗`":
	  ":sexygirl1: < 失敗・・・" + " `" + userName + "の勝率:" + 0 + "勝" + 0 + "敗`";
    
    return isSuccess ? msg.send(result1) : msg.send(result2);
};

const isSuccess = () => {
    console.log("called isSuccess()");
    const result = Math.floor(Math.random() * 3) === 0; // 0 or 1, 2
    console.log("isSuccess => " + result);
    return result;
};

async function saveRate(userId, isSuccess) {
    const client = new pg.Client(databaseInfo);
    client.connect();
    console.log("called saveRate");
    const queryString =  isSuccess ?
	  "UPDATE member_detail SET success_count = success_count + 1 WHERE user_id = '" + userId + "';" :
	  "UPDATE member_detail SET failure_count = failure_count + 1 WHERE user_id = '" + userId + "';" ;
	  
    const res = await client.query(queryString).catch(err => {
        console.log(err.message);
        return Promise.reject(new Error('throw from await/catch'));
      })
      .catch(err => {
          console.log("ERROR!!:" + err.message);
      });
}
