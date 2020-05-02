const myForm = document.querySelector(".my-form");
const myEmail = document.querySelector(".my-email");
const myName = document.querySelector(".my-name");
const myUsers = document.querySelector(".users");
const myMsg = document.querySelector(".msg");




myForm.addEventListener("submit", function(event) {
    if(myEmail.value.length > 8 || myName.value === "") {
        event.preventDefault();
        myMsg.classList.add("error");
        myMsg.innerHTML = "Name Field is Empty or Invalid Email";

        setTimeout(function() {
            myMsg.remove();
        }, 3000);
    } 
    else {
        event.preventDefault();
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${myName.value} : ${myEmail.value}`));
        myUsers.classList.add("add");
        myUsers.appendChild(li);

        myName.value = "";
        myEmail.value = "";
    }
});

// function onSubmit(e) {
//     e.preventDefault();
//     console.log("hello");

    
//     if(myEmail.value === "" || myPassword === "") {
//         myMsg.classList.add("error");
//         myMsg.innerHTML = "Please Enter All Fields";
//     }
// }

