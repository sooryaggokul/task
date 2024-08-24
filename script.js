


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("callbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        //  form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("name").value;
        var pincode = document.getElementById("email").value;
        var state = document.getElementById("state").value;
        var program = document.getElementById("program").value;
        var message = document.getElementById("message").value;

        // Get the alert box and message container
        var customAlert = document.getElementById("customAlert");
        var customAlertMessage = document.getElementById("customAlertMessage");

        //  validations
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        if (email === "") {
            alert("Please enter your email.");
            return;
        }
        if (mobile === "") {
            alert("Please enter your mobile.");
            return;
        }
        if (pincode === "") {
            alert("Please enter your pincode.");
            return;
        }
        if (state === "") {
            alert("Please select your state.");
            return;
        }
        if (program === "") {
            alert("Please select your program interest.");
            return;
        }
        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        //  alert box for submission

        customAlert.style.display = "flex";
        customAlertMessage.textContent = "Form successfully submitted!";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("pincode").value = "";
        document.getElementById("state").value = "";
        document.getElementById("program").value = "";
        document.getElementById("message").value = "";

        //  event listener - close button
        
        document.getElementById("closeAlert").addEventListener("click", function() {
            customAlert.style.display = "none";
        });
    });
});
