const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect('YOUR_DB_CONNECTION_STRING');
        console.log('Conectado ao Banco.');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

module.exports = main