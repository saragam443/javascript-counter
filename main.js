// set initial value

let count = 0;

// select value and button

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", currentBtn);
});

function currentBtn(e) {
    const currentClass = e.currentTarget.classList;
    if (currentClass.contains("decrease")) {
        count--;
    } else if (currentClass.contains("increase")) {
        count++;
    } else {
        count = 0;
    }

    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style. color = "red";
    } else {
        value.style. color = "";
    }

    // value.innerText = count;
    value.textContent = count;
}