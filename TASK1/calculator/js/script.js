let str = "";
let buttons = document.querySelectorAll(".btn");
let prev = document.getElementById("prev-input");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.innerHTML == "Enter" || btn.innerHTML == "ans" || btn.innerHTML == "=") {
            try {
                prev.style.display = "block";
                prev.innerHTML = str;
                str = eval(str);
                document.getElementById("expr").value= str;
            }catch(e) {
                document.getElementById("expr").value = "invalid expression";
                str = "";
            }
        }
        else if(btn.innerHTML == "clear") {
            str = "";
            prev.style.display = "none";

            document.getElementById("expr").value = str;
        }
        else if(btn.innerHTML == "del") {
            let newS = str.substring(0, str.length-1);
            str = newS;
            document.getElementById("expr").value = str;
        }
        else {
            str += btn.innerHTML;
            document.getElementById("expr").value = str;
        }
    })
})
