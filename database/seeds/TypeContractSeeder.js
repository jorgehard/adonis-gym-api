"use strict";

const TypeContract = use("App/Models/TypeContract");
const Factory = use("Factory");

class TypeContractSeeder {
  async run() {
    await TypeContract.createMany([
      {
        descricao: "Venda",
      },
      {
        descricao: "Locação",
      },
      {
        descricao: "Temporada",
      },
      {
        descricao: "Arrendamento",
      },
    ]);
  }
}

module.exports = TypeContractSeeder;
