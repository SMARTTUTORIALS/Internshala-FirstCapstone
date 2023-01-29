
let emailDivClassList;
let passwordDivClassList;

let emailID;
let password;

let alertDangerClassList;
let alertSuccessClassList;

let dismissAlertSuccess;
let dismissAlertDanger;

function initialize() {
    const emailDiv = document.getElementById("email-validate");
    const passwordDiv = document.getElementById("password-validate");

    emailID = document.getElementById("email-id");
    password = document.getElementById("password-input");

    const alertDanger = document.getElementById("danger-alert");
    const alertSuccess = document.getElementById("success-alert");

    dismissAlertSuccess = document.getElementById("dismiss-success-alert");
    dismissAlertDanger = document.getElementById("dismiss-danger-alert");

    emailDivClassList = emailDiv.classList;
    passwordDivClassList = passwordDiv.classList;

    alertDangerClassList = alertDanger.classList;
    alertSuccessClassList = alertSuccess.classList;


    dismissAlertSuccess.addEventListener("click", () => {
        alertSuccessClassList.add("visually-hidden");
    });

    dismissAlertDanger.addEventListener("click", () => {
        alertDangerClassList.add("visually-hidden");
    });


}


function validateLogin() {


    if (emailID.value === "admin@admin.com" && password.value === "123456") {
        alertSuccessClassList.remove("visually-hidden");
        alertDangerClassList.add("visually-hidden");

        emailDivClassList.remove("is-invalid");
        emailID.classList.remove("is-invalid");
        emailDivClassList.add("is-valid");
        emailID.classList.add("is-valid");

        passwordDivClassList.remove("is-invalid");
        password.classList.remove("is-invalid");
        passwordDivClassList.add("is-valid");
        password.classList.add("is-valid");
        redirectToHome();

    } else if (emailID.value === "") {

        emailDivClassList.add("is-invalid");
        emailID.classList.add("is-invalid");
        passwordDivClassList.remove("is-invalid");
        password.classList.remove("is-invalid");

        alertSuccessClassList.add("visually-hidden");
        alertDangerClassList.add("visually-hidden");

    } else if (password.value === "") {

        emailDivClassList.remove("is-invalid");
        emailID.classList.remove("is-invalid");
        passwordDivClassList.add("is-invalid");
        password.classList.add("is-invalid");

        alertSuccessClassList.add("visually-hidden");
        alertDangerClassList.add("visually-hidden");
    }
    else {
        alertSuccessClassList.add("visually-hidden");
        alertDangerClassList.remove("visually-hidden");
    }
}

function redirectToHome() {
    console.log("redirecting to home.html");
    delay(1000).then(() => {
        window.location.replace("home.html");
    });
    

}


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

