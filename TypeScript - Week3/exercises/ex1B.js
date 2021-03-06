const crypto = require("crypto");


const ex1b_obj = { title: "6 Secure Randoms", randoms: [] };

function makeSecureRandom(number) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(number, function (err, buffer) {
            let secureHex = buffer.toString("hex");
            let obj = { length: number, random: secureHex };
            resolve(obj)
        });

    })
}


Promise.all([makeSecureRandom(8), makeSecureRandom(16), makeSecureRandom(24), makeSecureRandom(32), makeSecureRandom(40)])
    .then(data => {
        ex1b_obj.randoms.push(data)
        console.log(ex1b_obj.randoms)
    })






