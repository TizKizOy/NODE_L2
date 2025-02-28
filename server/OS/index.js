require('dotenv').config();
const os = require('os');

function checkAccessMode() {
    return process.env.MODE === 'admin' || 'user';
}
function getInfoOs(){
    if(checkAccessMode()){
        console.log(os.platform)
        console.log(os.freemem()/ 1024 / 1024, `мб`)
        console.log(os.homedir())
        console.log(os.hostname())
        console.log(os.networkInterfaces())
    } else {
        console.log('Доступ запрещен. Требуется режим администратора.');
    }
}
function checkFreeMemory(){
    const memory = os.freemem()/ 1024 / 1024 / 1024
    return memory > 4;
}

getInfoOs()
console.log(`Свободно больше 4гб?`, checkFreeMemory())