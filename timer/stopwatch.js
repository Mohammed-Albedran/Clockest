var timeContainer2 = document.querySelector("#timeContainer");
var buttons = document.querySelector(".buttons");
var back = document.querySelector(".back");


function addTheme2(){
    document.body.classList.add("bodyTheme2")
    timeContainer2.classList.add("timeContainerTheme2");
    buttons.classList.add("buttons2");
    back.classList.add("back2");
}
function addTheme3(){
    document.body.classList.add("bodyTheme3")
    timeContainer2.classList.add("timeContainerTheme3");
    buttons.classList.add("buttons3");
    back.classList.add("back3");
}
function addTheme4t(){
    document.body.classList.add("bodyTheme4")
    timeContainer2.classList.add("timeContainerTheme4");
    buttons.classList.add("buttons4");
    back.classList.add("back4");
}
function addTheme5(){
    document.body.classList.add("bodyTheme5")
    timeContainer2.classList.add("timeContainerTheme5");
    buttons.classList.add("buttons5");
    back.classList.add("back5");
}


back.onclick = ()=>{
    history.back();
}
if (localStorage.getItem("currentTheme") == null) {

}else if (localStorage.getItem("currentTheme") == "theme2") {
    addTheme2();
}else if (localStorage.getItem("currentTheme") == "theme3") {
    addTheme3();
}else if (localStorage.getItem("currentTheme") == "theme4") {
    addTheme4t();
}else if (localStorage.getItem("currentTheme") == "theme5") {
    addTheme5();
}



        var hours = document.getElementById("hours");
        var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");
        var pauseButton = document.getElementById("pause");
        var resetButton = document.getElementById("reset");
        var playButton = document.getElementById("play");
        var title = document.getElementById("title");
        var counterH = 0;
        var counterM = 0;
        var counterS = 0;
        
        function test2(){
            var time = setInterval(test3,1000);
            stopTime(time);
            testTimeStopping(time);
        }
        playButton.onclick = ()=>{
            test2();
            pauseButton.style.display = "inline-block";
            playButton.style.display = "none";
            pauseButton.style.width = "50px";
            pauseButton.style.height = "50px";
        }
        function test3(){
            counterS++;
            if(counterS >59){
                counterS = 0;
                minutesF();
            }
            counterS = (counterS<10) ? "0" + counterS : counterS;
            seconds.innerHTML = counterS;
            
        }
        function stopTime(ttt){
            pauseButton.onclick = ()=>{
                clearInterval(ttt);
                playButton.style.display = "inline-block";
                playButton.style.width = "50px";
                playButton.style.height = "50px";
                pauseButton.style.display = "none";
            }
        }
        function minutesF(){
            counterM++;
            if(counterM>59){
                counterM = 0;
                counterH++;
                counterH = (counterH<10) ? "0" +   counterH : counterH;
                hours.innerHTML = counterH;
            }
            counterM = (counterM<10) ? "0" + counterM : counterM;
            minutes.innerHTML = counterM;
        }
        function testTimeStopping(sss){
            resetButton.onclick = ()=>{
                playButton.style.display = "inline-block";
                pauseButton.style.display = "none";
                clearInterval(sss);
                hours = document.getElementById("hours");
                minutes = document.getElementById("minutes");
                seconds = document.getElementById("seconds");
                counterH = 0;
                counterM = 0;
                counterS = 0;
                seconds.innerHTML = "00";
                minutes.innerHTML = "00";
                hours.innerHTML = "00";
            }
                
        }