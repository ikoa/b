// import { Client } from 'pg';
// const client = new Client({
//     host: '[データベースのホスト]',
//     database: '[データベース名]',
//     user: '[ユーザーID]',
//     password: '[パスワード]'
// });
// client.connect();

const pg = require('pg');
const databaseInfo = {connectionString: process.env.DATABASE_URL, ssh: true};


module.exports = {
    teiji: (name) => {
        return isSuccess() ?
            ":sexygirl1: < 成功！　　" + " `" + name + "の勝率:" + 0 +"勝" + 0 + "敗`":
            ":sexygirl1: < 失敗・・・" + " `" + name + "の勝率:" + 0 +"勝" + 0 + "敗`";
    }
};

module.exports = {
    test: (arg) => {
	return dbTest();
    }
};

const isSuccess = () => {
    return Math.floor(Math.random()*4) === 0; // 0 ~ 4
};

const dbTest = async () => {
    const client = new pg.Client(databaseInfo);
    await client.connect();
    const res = await client.query('SELECT * from member_detail where id == 1;');
    console.log(res.rows);
    await client.end();

    return res;
};
