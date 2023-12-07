
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

    const car1 = new Carro({
        marca: "Honda",
        modeloCar: "Civic",
        ano: 2023,
        preco: 124000,
        usado_novo: "Novo"

    });

    const car2 = new Carro({
        marca: "Fiat",
        modeloCar:"Uno",
        ano: 1970,
        preco: 10000,
        usado_novo: "Usado"
    })
    
    await Carro.deleteOne({marca: "Fiat"});
    

    const carro = await (mongoose.model('carro', CarSchema)).find();
    console.log(carro)
}