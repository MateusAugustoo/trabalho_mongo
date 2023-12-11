
const mongoose = require('mongoose');

main().catch(err => { console.log(err)});

async function main() {
    await mongoose.connect('mongodb://localhost:27017/locadora');

    const CarSchema = new mongoose.Schema({
        marca: String,
        modeloCar: String,
        ano: Number,
        preco: Number,
        usado_novo: String
    }); 
    const Carro = mongoose.model('carro', CarSchema);

        const carro1 = new Carro({
            marca: 'Honda',
            modeloCar: 'Civic',
            ano: 2024,
            preco: 174000,
            usado_novo: 'Novo'
        });

        // Adicionando!!
        // await carro1.save();

        // Excluindo!!
        // await Carro.deleteOne({marca: 'Fiat'});

        // Atualizando!!
        // await Carro.updateOne({marca: 'Honda'}, {modeloCar: 'HGV - 1'});

        // Listando!!
        const carro = await (mongoose.model('carro', CarSchema)).find();
        console.log(carro);
}