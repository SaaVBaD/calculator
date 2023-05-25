let display = document.querySelector(".display");

let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;

            case "=":
                display.innerText = eval(display.innerText);
                break;

            case "+/-":
                display.innerText = "-";
                break;

            case "%":
                let percent = display.innerText + "/100";
                display.innerText = eval(percent);
                break;

            default:
                if(display.innerText === "0" && e.target.innerText !== ",") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});