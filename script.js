let tg = window.Telegram.WebApp;
let send = document.getElementById("send");
send.addEventListener("click",()=>{
    document.getElementById("kar").value=tg.initDataUnsafe.firstname
});
function collectData() {
var input1 = document.getElementById('kar').value; 
            var input2 = document.getElementById('lac').value;
            var input3 = document.getElementById('vic').value;

            var data = {name:input1, email:input2, phone:input3};

            
            tg.sendData(JSON.stringify(data))
        }