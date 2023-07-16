const deleteManyMilstoneById ={
    id: "ehh-ent-pro-dmn-m",
  name: "Delete Many milstones by id ",
  description: "",
  model: {
    type: "object",
    properties: {
      _id: {
        type: "Array",
      },
    },
  },
  actions: ["delete","deleteMany"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export {deleteManyMilstoneById};