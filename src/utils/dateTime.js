const moment = require("moment");

const now = moment();
const now1 = moment().utc().format("HH:mm:ss"); // Время по гринвичу
const now2 = moment().utcOffset(); // смещение от utc в минутах
const now3 = moment().utc(180).format("HH:mm:ss"); // время с учетом смещения
console.log(now1);
console.log(now2);
console.log(now3);
