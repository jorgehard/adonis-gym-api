"use strict";
const DB = use("App/Models/Exercise");
class ExerciseController {
  async index() {
    return await DB.all();
  }

  async show({ params }) {
    const exercise = await DB.findOrFail(params.id);
    return exercise;
  }

  async store({ request }) {
    const data = request.only(["name", "obs", "series", "wating_time"]);
    return await DB.create(data);
  }

  async update({ params, request }) {
    const response = await DB.findOrFail(params.id);
    const data = request.only(["name", "obs", "series", "wating_time"]);
    //
    response.merge(data); // Atualiza a informação
    await response.save(); // Salva no banco
    return response;
  }
  async destroy({ params }) {
    const response = await DB.findOrFail(params.id);
    return await response.delete();
  }
}

module.exports = ExerciseController;
