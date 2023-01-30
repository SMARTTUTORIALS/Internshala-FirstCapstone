let alertSuccess;
let alertDanger;

let formContainer;

let messageText;
let emailID;
let nameInput;
let phoneNo;

function initialize() {
    const alertSuccessDiv = document.getElementById("success-alert");
    const alertDangerDiv = document.getElementById("danger-alert");

    formContainer = document.getElementById("form-container");

    messageText = document.getElementById("message-text");
    emailID = document.getElementById("email-id");
    nameInput = document.getElementById("name-input");
    phoneNo = document.getElementById("contact-no");

    alertSuccess = alertSuccessDiv.classList;
    alertDanger = alertDangerDiv.classList;

    alertSuccess.add("visually-hidden");
    alertDanger.add("visually-hidden");
}

function submitMessage() {

    
    if (phoneNo.value === "" || nameInput === "" || emailID.value === "" || messageText.value === "") {


        alertDanger.remove("visually-hidden");
        alertSuccess.add("visually-hidden");

    } else {
     

        alertSuccess.remove("visually-hidden");
        alertDanger.add("visually-hidden");
    }
}

function dismissAlert(alertId) {
    if (alertId === "success-alert") {

        alertSuccess.add("visually-hidden");
    
    } else if (alertId === "danger-alert") {
    
        alertDanger.add("visually-hidden");
    
    }
}
