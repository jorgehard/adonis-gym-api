"use strict";

const TypeProperty = use("App/Models/TypeProperty");
const Factory = use("Factory");

class TypePropertySeeder {
  async run() {
    await TypeProperty.createMany([
      {
        descricao: "Apartamento",
      },
      {
        descricao: "Cobertura",
      },
      {
        descricao: "Casa",
      },
      {
        descricao: "Sobrado",
      },
      {
        descricao: "Terreno",
      },
      {
        descricao: "Area",
      },
      {
        descricao: "Chacara",
      },
    ]);
  }
}

module.exports = TypePropertySeeder;
