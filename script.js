let tg = window.Telegram.WebApp;
let send = document.getElementById("send");
send.addEventListener("click",()=>{
    document.getElementById("kar").value=tg.initDataUnsafe.firstname
});
function collectData() {
var input1 = document.getElementById('kar').value; 
            var input2 = document.getElementById('lac').value;
            var input3 = document.getElementById('vic').value;

            var data = "Данные:\n" +
                       "Поле 1: " + input1 + "\n" +
                       "Поле 2: " + input2 + "\n" +
                       "Поле 3: " + input3;

            alert(data);
            tg.sendData(JSON.stringify(data))
        }