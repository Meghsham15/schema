const updateOneProject = {
  id: "ehh-ent-pro-uon",
  name: "Update One project",
  description: "",
  
  model: {
    type: "object",
    properties: {
      _id:{
        type:"String"
      },
      organisationName: {
        type: "string",
        maxLength: 255,
      },
      content: {
        type: "string",
        maxLength: 255,
      },
      moto: {
        type: "string",
        maxLength: 255,
      },
      logo: {
        type: "string",
      },
    },
  },
  actions: ["updateOne"],
  resource: {
    resourceType: "externalApi",
    host: "http://localhost:4000",
  },
};

export { updateOneProject };
