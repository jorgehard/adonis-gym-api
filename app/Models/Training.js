"use strict";

const Model = use("Model");

class Training extends Model {
  exercises() {
    this.belongsToMany("App/Models/Exercise");
  }
}

module.exports = Training;
