const crypto = require('crypto')
let thisArray = [8, 16, 24, 32, 40, 48]

const ex1c_obj = { title: "6 Secure Randoms", randoms: [{ length: "", random: "" }] };

function makeSecureRandomList(array) {
    return new Promise((resolve, reject) => {
        array.forEach((number) => {
            crypto.randomBytes(number, function (err, buffer) {
                let secureHex = buffer.toString("hex");
                let obj = { length: number, random: secureHex };
                ex1c_obj.randoms.push(obj);
            });
        });
        setTimeout(() => {
            resolve(ex1c_obj);
        }, 1000);
    })

}

module.exports.getSecureRandoms = makeSecureRandomList

makeSecureRandomList(thisArray).then(randoms => console.log(randoms))