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

const dbTest = () => {
    const client = new pg.Client(databaseInfo);
    client.connect();
    const res = client.query('SELECT * from test;');
    console.log(res.rows);
    client.end();

    return res;
};
