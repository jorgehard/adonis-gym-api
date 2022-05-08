"use strict";

const Training = use("App/Models/Training");

class TrainingController {
  async index() {
    return await Training.all();
  }

  async show({ params }) {
    const training = await Training.findOrFail(params.id);
    await training.load("exercises");
    return training;
  }

  async store({ request }) {
    const { exercises, ...data } = request.only([
      "client_id",
      "name",
      "obs",
      "exercises",
    ]);

    return await Training.create(data);
  }

  async update({ params, request }) {
    
  }

  async destroy({ params }) {
    const training = await Training.findOrFail(params.id);
    return await training.delete();
  }
}

module.exports = TrainingController;
