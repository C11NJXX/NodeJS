function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function greeting(name) {
    return `Hi ${name}!`;
}

//module.exports = generateRandomNumber;
module.exports = {
    generateRandomNumber,
    greeting
};