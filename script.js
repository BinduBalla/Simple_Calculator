let display = document.querySelector("#input");
let buttons = document.querySelectorAll('button');


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === "=") {
            if((eval(display.value))== NaN){
                console.log("e");
            }
            else{
                display.value = eval(display.value);
            }
        } else if (btn.id === "C") {
            display.value = "";
        } else if (btn.id == "DE") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})

