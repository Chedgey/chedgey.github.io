const setTheme = theme => document.documentElement.className = theme;

window.onload = () => {
    let transition_ele = document.querySelector('.transition')
    setTimeout(() => {
        transition_ele.classList.remove("is-active")
    }, 500);   
}

function validateForm(event) {
    event.preventDefault();
    let myForm = document.querySelector("#name-form");
    console.log("Form submitted!");
    if(myForm.name.value == ""){
        myForm.name.style.backgroundColor = "orange";
        alert("Please enter something");
    }
    else if (!/^[a-zA-Z]*$/.test(myForm.name.value)) {
        myForm.name.style.backgroundColor = "orange";
        alert("Please enter only letters");
    }
    else{
        myForm.submit();
    }
}

document.addEventListener("DOMContentLoaded", function(event){
let myForm = document.querySelector("#name-form");
myForm.addEventListener("submit", validateForm);
});

 



