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

// Login JWT
Route.post("/sessions", "SessionController.create");
Route.put("/sessions", "SessionController.refreshToken");

//Permissions and Roles
Route.resource("permissions", "PermissionController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

Route.resource("roles", "RoleController")
  .apiOnly()
  .middleware(["auth:jwt", "is:manager"]);

// Users
Route.resource("users", "UserController")
  .apiOnly()
  .validator(
    new Map([
      [["users.store"], ["User"]],
      [["users.update"], ["User"]],
    ])
  )
  .middleware(["auth:jwt", "is:manager"]);
