const deleteAllPermissionFromRoleById = {
  id: "ehh-per-pro-dmn-one",
  name: "Remove Permission From a specific Role by id",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
      _id: {
        type: "string",
      },
    }
  },
  actions: ["delete"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { deleteAllPermissionFromRoleById };
