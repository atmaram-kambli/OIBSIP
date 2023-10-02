let str = "";

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML == "Enter") {
            str = eval(str);
            document.getElementById("expr").value= str;
            str = "";
        }
        else if(btn.innerHTML == "clear") {
            str = "";
            document.getElementById("expr").value = str;
        }
        else {
            str += btn.innerHTML;
            document.getElementById("expr").value = str;
        }
    })
})
