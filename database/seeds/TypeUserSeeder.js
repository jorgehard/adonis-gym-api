"use strict";

const Database = use("Database");

class TypeUserSeeder {
  async run() {
    await Database.table("type_users").insert({
      name: "Administrador",
    });
    await Database.table("type_users").insert({
      name: "Corretor",
    });
  }
}

module.exports = TypeUserSeeder;
