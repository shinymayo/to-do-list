function addNewTask() {
    // needs to show a pop-up box to fill in
    const overlay = document.getElementById("popupOverlay");
    overlay.classList.toggle("show");

    alert("clicked!");
}

export default addNewTask;