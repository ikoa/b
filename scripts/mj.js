// mz 11~19 
// sz 21~29
// pz 31~39
// sg 41, 42, 43
// kz 51, 52, 53, 54

module.exports = {
    tenho: () => {
        const tsumo = createTehai();
	const sortedTsumo = sortTsumo(tsumo);
	const convertedEmoji = convertEmoji(sortedTsumo);
	console.log("result = " + convertedEmoji);

	console.log(convertedEmoji);
	return convertedEmoji;
    }
};

const createTehai = () => {
    let tsumo = new Array();
    for(let i = 0; i < 14; i++) {
	const kind = dicideKind();
	let hai;
	
	if (kind < 4) { // 数牌
	    hai = kind*10 + dicideNumByShuHai();
	} else if (kind < 5) { // 三元牌
	    hai = kind*10 + dicideNumBySangenHai();
	    console.log(hai);
	} else { //風牌
	    console.log(hai);
	    hai = kind*10 + dicideNumByKazeHai();
	}

	tsumo[i] = hai;
	console.log(i + " " + tsumo[i]);
    }

    console.log("created" + tsumo);
    return tsumo;
};

const convertEmoji = (tsumo) => {
    let result = "";
    for(let i = 0; i < 14; i++) {
	console.log("tsumo" + i +" =>" + tsumo[i]);
	if(tsumo[i] < 20) { // マンズ
	    result += convertMz(tsumo[i]);
	} else if(tsumo[i] < 30) { // ソウズ
	    result += convertSz(tsumo[i]);
	} else if(tsumo[i] < 40) { // ピンズ
	    result += convertPz(tsumo[i]);
	} else if(tsumo[i] < 50) { // 三元牌
	    result += convertSg(tsumo[i]);
	} else if(tsumo[i] < 60) { // 風牌
	    result += convertKz(tsumo[i]);
	}
    }

    return result;
};

const convertMz = (hai) => {
    const num = hai - 10;
    console.log("hai" + hai + " num" + num);
    const mz = ":mz"+ num.toString() + ": ";
    console.log(mz);
    return mz;
};

const convertSz = (hai) => {
    const num = hai - 20;
    console.log("hai" + hai + " num" + num);
    const sz =  ":sz"+ num.toString() + ": ";
    return sz;
};

const convertPz = (hai) => {
    const num = hai - 30;
    console.log("hai" + hai + " num" + num);
    const pz = ":pz"+ num.toString() + ": ";
    return pz;
};

const convertSg = (hai) => {
    const num = hai - 40;
    console.log("hai" + hai + " num" + num);
    const sg =  ":sg"+ num.toString() + ": ";
    return sg;
};

const convertKz = (hai) => {
    const num = hai - 50;
    console.log("hai" + hai + " num" + num);
    const kz = ":kz"+ num.toString() + ": ";
    return kz;
};

const sortTsumo = (tsumo) => {
    return tsumo.sort();
};

const dicideKind = () => {
    return Math.floor(Math.random() * 5) + 1;
};

const dicideNumByShuHai = () => {
    return Math.floor(Math.random() * 9) + 1;
};

const dicideNumBySangenHai = () => {
    return Math.floor(Math.random() * 3) + 1;
};

const dicideNumByKazeHai = () => {
    return Math.floor(Math.random() * 4) + 1;
};
