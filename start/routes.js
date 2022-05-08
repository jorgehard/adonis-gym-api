"use strict";

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
//is = roles
// can = permissions
// Route.get("/users", 'UserController.index');
// Route.get("/users/:id", 'UserController.show');
// Route.post("/users", 'UserController.store');
// Route.put("/users/:id", 'UserController.update');
// Route.delete("/users/:id", 'UserController.destroy');

Route.resource("users", "UserController")
  .apiOnly()
  .validator(
    new Map([
      [["users.store"], ["User"]],
      [["users.update"], ["User"]],
    ])
  )
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("clients", "ClientController").apiOnly().middleware("auth:jwt");

Route.resource("exercises", "ExerciseController")
  .apiOnly()
  .middleware(["auth:jwt", "can:gerenc_exercises"]);

Route.resource("trainings", "TrainingController")
  .apiOnly()
  .middleware("auth:jwt");

Route.resource("permissions", "PermissionController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("roles", "RoleController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.post("/sessions", "SessionController.create");
Route.put("/sessions", "SessionController.refreshToken");
