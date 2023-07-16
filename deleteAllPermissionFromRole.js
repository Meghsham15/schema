const deleteAllPermissionFromRole= {
  id: "ehh-per-pro-dal",
  name: "Remove Permission From Role In Ticket Schema",
  description: "",
  authentication: true,
  model: {},
  actions: ["deleteAll"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { deleteAllPermissionFromRole };
