const getAllPermissionOfARole = {
  id: "ehh-per-pro-gal-pr",
  name: "Get All Permission of a role",
  description: "",
  authentication: true,
  model: {},
  actions: ["getAll"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { getAllPermissionOfARole };
