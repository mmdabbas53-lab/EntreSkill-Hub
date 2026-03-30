function generateIdea() {
    let skill = document.getElementById("skill").value.toLowerCase();

    // Save skill also
    localStorage.setItem("skill", skill);

    if (skill === "cooking") {
        localStorage.setItem("idea", "Start a home food delivery business");
    } 
    else if (skill === "photography") {
        localStorage.setItem("idea", "Start a photography service");
    } 
    else if (skill === "teaching") {
        localStorage.setItem("idea", "Start online tuition classes");
    } 
    else {
        localStorage.setItem("idea", "Start freelancing using your skill");
    }

    window.location.href = "result.html";
}