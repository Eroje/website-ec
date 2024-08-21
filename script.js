

function myFunction () {
    document.getElementById("test").innerHTML = 
    "Heading Changed - EROMOY CONTRACTPRS LIMITED";
  };

function changeTag() {
    // Get the existing heading element
    var heading = document.getElementById("heading");
    // Create a new paragraph element
    var newParagraph = document.createElement("p");
    // Set the content of the paragraph
    newParagraph.textContent = "This is a new paragraph created dynamically.";
    // Replace the existing heading with the new paragraph
    heading.parentNode.replaceChild(newParagraph, heading);
};

document.addEventListener("DOMContentLoaded", function () {
    var image = document.getElementById("myImage");

    // Change image source on "Enter" key press

    document.addEventListener("keydown", function (event) {
        if (event.key === "a") {
            image.src = "image/img4.jpg";
        }
    });
});

// Javascript for Canvas







/* const checkElement =  document.getElementById("check");
const visaBtnElement = document.getElementById("visaBtn");
const mastercardBtnElement = document.getElementById("mastercardBtn");
const paypalBtnElement = document.getElementById("paypalBtn");
const submitButtonElement = document.getElementById("submit");
const subResultElement = document.getElementById("subResult");
const paymentMethodElement = document.getElementById("paymentMethod");

submitButtonElement.onclick = function () {
    if (checkElement.checked) {
        subResultElement.textContent = `You are a Subscriber`;
    } else {
        subResultElement.textContent = `You are not a Subscriber`;
    }
    if (visaBtn.checked) {
        paymentMethodElement.textContent = "You are paying with VISA";
    } else if (mastercardBtn.checked) {
        paymentMethodElement.textContent = "You are paying with MASTERCARD";
    } else if (paypalBtn.checked) {
        paymentMethodElement.textContent = "You are paying with PAYPAL";
    } else {
        paymentMethodElement.textContent = "You must enter payment method";
    }
}; 
*/

