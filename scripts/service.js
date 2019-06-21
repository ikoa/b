class Service {
    teiji(name) {
         return isSuccess() ?
        ":sexygirl1: < 成功！　　" + " `" + name + "の勝率:" + 0 + "勝" + 0 + "敗`" :
        ":sexygirl1: < 失敗・・・" + " `" + name + "の勝率:" + 0 + "勝" + 0 + "敗`";
    }

    isSuccess() {
        return Math.floor(Math.random()*2) === 0; // 0 or 1
    } 
}