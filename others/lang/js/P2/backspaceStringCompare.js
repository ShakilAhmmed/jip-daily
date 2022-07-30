const s = "ab#z";
const t = "az#z";

const buildString = (string) => {
    let result = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== "#") {
            result.push(string[i]);
        } else {
            result.pop();
        }
    }

    return result;

}

const backSpaceStringCompare = (s, t) => {
    const finalS = buildString(s);
    const finalT = buildString(t);
    if (finalS.length !== finalT.length) {
        return false;
    }
    for (let counter = 0; counter < finalS.length; counter++) {
        if (finalS[counter] !== finalT[counter]) {
            return false;
        }
    }

    return true;
};

console.log(backSpaceStringCompare(s, t));