document.addEventListener("DOMContentLoaded", () =>{
    const formSubmit = document.querySelector("#login-form");
    formSubmit.addEventListener("submit", (event) => {
        event.preventDefault();
        //input data 
        let userEmail = document.getElementById("user_email").value;
        let userPassword = document.getElementById("user_password").value;
           alert(userEmail+" "+userPassword);
    });
});
