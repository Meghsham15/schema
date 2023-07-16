
const deleteOneProjectById = {
  id: "ehh-ent-proj-did",
  name: "Delete One Project By Id",
  description: "",
  
  model: {
    type: "object",
    properties: {
      _id:{
        type:"string"
      }
    },
    required: [],
  },
  actions: ["deleteOneById"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { deleteOneProjectById };
