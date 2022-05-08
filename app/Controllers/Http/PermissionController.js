"use strict";
const Permission = use("Permission");

class PermissionController {
  async index() {
    return await Permission.all();
  }
  async show({ params }) {
    return await Permission.findOrFail(params.id);
  }
  async store({ request }) {
    const data = request.only(["name", "slug", "description"]);
    return await Permission.create(data);
  }
  async update({ params, request }) {
    const data = request.only(["name", "slug", "description"]);
    const permission = await Permission.findOrFail(params.id);
    permission.merge(data);
    return await permission.save();
  }
  async destroy({ params }) {
    const permission = await Permission.findOrFail(params.id);
    return await permission.delete();
  }
}

module.exports = PermissionController;
