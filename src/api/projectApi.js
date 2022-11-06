export const getProjectDetails = () => {
  const json = localStorage.getItem("project-data");

  if (!json) {
    
    const json = {
      project_category: "Software",
      project_description:
        "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
      project_name: "JIRA Clone",
      project_url: "https://ajaltand.github.io/JIRA-Clone/",
    };
    setProjectDetails(json);
  }

  return JSON.parse(json);
};

export const setProjectDetails = (data) => {
  localStorage.setItem("project-data", JSON.stringify(data));
};
