require('dotenv').config();

test = () => {
    console.log(process.env.infuraAPI);
    console.log(process.env.mnemonic);
}

test();