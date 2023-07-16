const assignActorARoleInProject = {
  id: "ehh-act-pro-a-ac",
  name: "Assign actor a role in a project",
  description: "To assign actor to the role in the project",
  
  model: {
    type: "object",
    properties: {
      userId: {
        type: "string",
      },
      projectId: {
        type: "strrig",
      },
      roleId: {
        type: "strrig",
      },
    },
  },
  actions: ["insertOne"],
  
      resource: {
        resourceType: "externalApi",
        host: "http://localhost:4000",
      },
};

export { assignActorARoleInProject };
