const deleteOne = {
  id: "ehh-ent-pro-don",
  name: "Delete One Project",
  description: "",
  authentication: true,
  model: {
    type: "object",
    properties: {
      name:{
        type:"String"
      }
    },
    required: [],
  },
  actions: ["deleteOne"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { deleteOne };
