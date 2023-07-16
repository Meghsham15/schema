
const CreateOneProject = {
  id: "ehh-ent-pro-crt",
  name: "Create One Project",
  description: "Create and insert a project into database",
  
  model: {
    type: "object",
    properties: {
      _id: {
        type: "string",
      },
      projectName: {
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
      owner: {
        type: "string",
        value: "$request.user.userId",
      },
    },
    
  },
  actions: ["insertOne"],
  resource: {
    resourceType: "externalApi",
        host: "http://localhost:4000",
  },
};

export { CreateOneProject };
