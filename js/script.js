
// nav

const navBar = document.querySelector("#navBar");
const icon = document.querySelector("#icon");

icon.addEventListener("click", ()=>{
    icon.classList.toggle("fa-xmark");
    navBar.classList.toggle("expand");
});

//open and close modal

document.querySelector("#button").addEventListener("click", ()=>{
    document.querySelector("#modal").classList.add("active");
});

document.querySelector("#close").addEventListener("click", ()=>{
    document.querySelector("#modal").classList.remove("active");
});

document.querySelector("#selectReward1").addEventListener("click", ()=>{
    document.querySelector("#modal").classList.add("active");
    document.querySelector("#radio-2").setAttribute("checked", "true");
    myFunction();
});

document.querySelector("#selectReward2").addEventListener("click", ()=>{
    document.querySelector("#modal").classList.add("active");
    document.querySelector("#radio-3").setAttribute("checked", "true");
    myFunction();
});

// Selected pledge

document.querySelector("#radio-1").addEventListener("click", myFunction);
document.querySelector("#radio-2").addEventListener("click", myFunction);
document.querySelector("#radio-3").addEventListener("click", myFunction);

function myFunction() {
    const radio1 = document.querySelector("#radio-1");
    const radio2 = document.querySelector("#radio-2");
    const radio3 = document.querySelector("#radio-3");
    const modal__button = document.querySelector(".modal__container-button");
    const modal__selected = document.querySelector(".modal__selected");
    const modal__selected2 = document.querySelector(".modal__selected-2");
    const option1 = document.querySelector("#option1");
    const option2 = document.querySelector("#option2");
    const option3 = document.querySelector("#option3");


    if (radio1.checked == true){
        modal__button.style.display = "block";
        option1.classList.add("border");
    } else {
        modal__button.style.display = "none";
        option1.classList.remove("border");

    }

    if (radio2.checked == true){
        modal__selected.style.display = "block";
        option2.classList.add("border");
    } else {
        modal__selected.style.display = "none";
        option2.classList.remove("border");
    }

    if (radio3.checked == true){
        modal__selected2.style.display = "block";
        option3.classList.add("border");
    } else {
        modal__selected2.style.display = "none";
        option3.classList.remove("border");
    }
}

// success Modal

document.querySelector("#continue").addEventListener("click", ()=>{
    document.querySelector("#modal").classList.remove("active");
    document.querySelector("#modal-completed").classList.add("success");
});

document.querySelector("#gotIt").addEventListener("click", ()=>{
    document.querySelector("#modal-completed").classList.remove("success");
});


document.querySelector("#button-25").addEventListener("click", ()=>{
    const pledge25 = document.querySelector("#pledge25");

    if (pledge25.value >= 25){
            document.querySelector("#modal").classList.remove("active");document.querySelector("#modal-completed").classList.add("success");
    } else {
        document.querySelector("#error1").innerHTML = "Pledge $25 or more!";
        setTimeout(() => {
            document.querySelector("#error1").innerHTML = "";
        }, 2500);
    }
});

document.querySelector("#button-75").addEventListener("click", ()=>{
    const pledge75 = document.querySelector("#pledge75");

    if (pledge75.value >= 75){
            document.querySelector("#modal").classList.remove("active");document.querySelector("#modal-completed").classList.add("success");
    } else {
        document.querySelector("#error2").innerHTML = "Pledge $75 or more!";
        setTimeout(() => {
            document.querySelector("#error2").innerHTML = "";
        }, 2500);
    }
});