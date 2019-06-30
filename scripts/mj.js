// mz 11~19 
// sz 21~29
// pz 31~39
// sg 41, 42, 43
// kz 51, 52, 53, 54

module.exports = {
    tenho: () => {
        const tsumo = createTehai();
	const sortedTsumo = sortTsumo(tsumo);
	console.log("result = " + sortedTsumo);
    }
};

const createTehai = () => {
    let tsumo = new Array();
    for(let i = 0; i < 14; i++) {
	const kind = dicideKind();
	let hai;
	
	if (kind <= 40) { // 数牌
	    hai = kind*10 + dicideNumByShuHai();
	} else if (kind <= 50) { // 三元牌
	    hai = kind*10 + dicideNumBySangenHai();
	} else { //風牌
	    hai = kind*10 + dicideNumByKazeHai();
	}

	tsumo[i] = hai;
	console.log(i + " " + tsumo[i]);
    }

    console.log("created" + tsumo);
    return tsumo;
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
