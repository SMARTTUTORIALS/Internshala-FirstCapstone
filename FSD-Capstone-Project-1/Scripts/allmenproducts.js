
function initializeSectional() {
    let sectionVisibleID = localStorage.getItem("sectionId");

    const dressSection = document.getElementById("dress-section").classList;
    const shirtsSection = document.getElementById("shirts-section").classList;
    const hoodiesSection = document.getElementById("hoodie-section").classList;

    if (sectionVisibleID === "dress") {
        shirtsSection.add("visually-hidden");
        hoodiesSection.add("visually-hidden");

    } else if (sectionVisibleID === "shirts") {
        dressSection.add("visually-hidden");
        hoodiesSection.add("visually-hidden");

    } else if (sectionVisibleID === "hoodies") {
        dressSection.add("visually-hidden");
        shirtsSection.add("visually-hidden");
    } else{

        dressSection.add("visually-hidden");
        shirtsSection.add("visually-hidden");
        hoodiesSection.add("visually-hidden");

        dressSection.remove("visually-hidden");
        shirtsSection.remove("visually-hidden");
        hoodiesSection.remove("visually-hidden");

    }
    

    console.log(sectionVisibleID);
}
