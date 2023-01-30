function initializeSectional() {
    let sectionVisibleID = localStorage.getItem("sectionId");

    const dressSection = document.getElementById("dress-section").classList;
    const pantsSection = document.getElementById("pants-section").classList;
    const skirtsSection = document.getElementById("skirts-section").classList;

    if (sectionVisibleID === "dresses") {
        pantsSection.add("visually-hidden");
        skirtsSection.add("visually-hidden");

    } else if (sectionVisibleID === "pants") {
        dressSection.add("visually-hidden");
        skirtsSection.add("visually-hidden");

    } else if (sectionVisibleID === "skirts") {
        dressSection.add("visually-hidden");
        pantsSection.add("visually-hidden");
    } else{

        dressSection.add("visually-hidden");
        pantsSection.add("visually-hidden");
        skirtsSection.add("visually-hidden");

        dressSection.remove("visually-hidden");
        pantsSection.remove("visually-hidden");
        skirtsSection.remove("visually-hidden");

    }
    

    console.log(sectionVisibleID);
}

