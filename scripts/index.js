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
    return res.rows[0];
}



const teiji = async (msg, userId) => {
    const user = await getName(msg.message.user.id);
    console.log("username:" + user.name);
    const isSuccess = Math.floor(Math.random() * 3) === 0; //await isSuccess();
    const result = isSuccess ?
	  ":sexygirl1: < 成功！　　"
	  + " `" + user.name + "の勝率:" + user.success_count + "勝" + user.failure_count + "敗`":
	  ":sexygirl1: < 失敗・・・" +
	  " `" + user.name + "の勝率:" + user.success_count + "勝" + user.failure_count + "敗`";
    
    msg.send(result);
};

const isSuccess = async () => {
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
