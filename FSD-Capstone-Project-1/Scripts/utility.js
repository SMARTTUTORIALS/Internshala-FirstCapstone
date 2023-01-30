
function redirectPage(url, sectionID) {

    localStorage.setItem("sectionId", sectionID);
    /*
        console.log(url);
        console.log(sectionID);
        */
    /*
        delay(1000).then(() => {
            */
    window.location.replace(url);
    /*
});
*/
}

/*
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
*/