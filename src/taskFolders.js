function createTaskFolders() {
    //Home
    const home = document.createElement("div");
    home.textContent = "Home";
    //today
    const today = document.createElement("div");
    today.textContent = "Today";
    //next 7 days
    const sevenDays = document.createElement("div");
    sevenDays.textContent = "7 days";
    // projects
    const projects = document.createElement("div");
    projects.textContent = "Projects";
}

export default createTaskFolders;