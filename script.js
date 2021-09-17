var options = document.querySelector(".options");
var menu = document.querySelector(".menu");
var activation = "true";
options.onclick = () => {
    if (activation == "false") {
        menu.style.display = "none";
        activation = "true";
    } else if (activation == "true") {
        menu.style.display = "block";
        activation = "false";
    }

}

var settingsButton = document.querySelector(".settingsButton");
var settings = document.querySelector(".settings");
var settingsExit = document.querySelector(".settingsExit");
settingsButton.onclick = () => {
    settings.style.display = "block";
    menu.style.display = "none";
    activation = "true";
}
settingsExit.onclick = () => {
    settings.style.display = "none";
}

var alertsButton = document.querySelector(".alertsButton");
var alerts = document.querySelector(".alerts");
var alertsExit = document.querySelector(".closeAlerts");
alertsButton.onclick = () => {
    alerts.style.display = "block";
    menu.style.display = "none";
    activation = "true";
}
alertsExit.onclick = () => {
    alerts.style.display = "none";
}
var aboutButton = document.querySelector(".aboutButton");
var about = document.querySelector(".about");
var aboutExit = document.querySelector(".aboutExit");
aboutButton.onclick = () => {
    about.style.display = "block";
    menu.style.display = "none";
    activation = "true";
}
aboutExit.onclick = () => {
    about.style.display = "none";
}

function openTimerTab(){
    location.assign("timer/stopwatch.html");
}

var body = document.body;
var timeContainer = document.getElementById("timeContainer");
var icons = document.querySelectorAll(".icons");
var lang = document.querySelectorAll(".languageButton");
var font = document.querySelectorAll(".fontButton");
var alert = document.querySelectorAll(".alert");
var newAlertTheme = document.querySelector(".newAlert");
var emailIcon = document.querySelector(".emailIcon");
var clockSystemButton = document.querySelectorAll(".clockSystemButton");
// theme1.onclick = ()=>{
//     document.body.classList.remove("bodyTheme2");
// }
function addTheme2() {
    body.classList.add("bodyTheme2");
    timeContainer.classList.add("timeContainerTheme2");
    newAlertTheme.classList.add("newAlertTheme2");
    options.classList.add("optionsTheme2");
    menu.classList.add("menuTheme2");
    settings.classList.add("settingsTheme2");
    alerts.classList.add("alertsTheme2");
    about.classList.add("aboutTheme2");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.add("iconsTheme2")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.add("alertTheme2")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.add("lang2")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.add("font2")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.add("clockSystemButton2")
    }
}


function deleteTheme2() {
    body.classList.remove("bodyTheme2");
    timeContainer.classList.remove("timeContainerTheme2");
    newAlertTheme.classList.remove("newAlertTheme2");
    options.classList.remove("optionsTheme2");
    menu.classList.remove("menuTheme2");
    settings.classList.remove("settingsTheme2");
    alerts.classList.remove("alertsTheme2");
    about.classList.remove("aboutTheme2");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.remove("iconsTheme2")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.remove("alertTheme2")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.remove("lang2")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.remove("font2")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.remove("clockSystemButton2")
    }
}

function addTheme3() {
    body.classList.add("bodyTheme3");
    newAlertTheme.classList.add("newAlertTheme3");
    timeContainer.classList.add("timeContainerTheme3");
    options.classList.add("optionsTheme3");
    menu.classList.add("menuTheme3");
    settings.classList.add("settingsTheme3");
    alerts.classList.add("alertsTheme3");
    about.classList.add("aboutTheme3");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.add("iconsTheme3")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.add("alertTheme3")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.add("lang3")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.add("font3")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.add("clockSystemButton3")
    }
}

function deleteTheme3() {
    body.classList.remove("bodyTheme3");
    newAlertTheme.classList.remove("newAlertTheme3");
    timeContainer.classList.remove("timeContainerTheme3");
    options.classList.remove("optionsTheme3");
    menu.classList.remove("menuTheme3");
    settings.classList.remove("settingsTheme3");
    alerts.classList.remove("alertsTheme3");
    about.classList.remove("aboutTheme3");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.remove("iconsTheme3")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.remove("alertTheme3")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.remove("lang3")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.remove("font3")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.remove("clockSystemButton3")
    }
}

function addTheme4() {
    body.classList.add("bodyTheme4");
    newAlertTheme.classList.add("newAlertTheme4");
    timeContainer.classList.add("timeContainerTheme4");
    options.classList.add("optionsTheme4");
    menu.classList.add("menuTheme4");
    settings.classList.add("settingsTheme4");
    alerts.classList.add("alertsTheme4");
    about.classList.add("aboutTheme4");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.add("iconsTheme4")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.add("alertTheme4")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.add("lang4")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.add("font4")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.add("clockSystemButton4")
    }
}

function deleteTheme4() {
    body.classList.remove("bodyTheme4");
    newAlertTheme.classList.remove("newAlertTheme4");
    timeContainer.classList.remove("timeContainerTheme4");
    options.classList.remove("optionsTheme4");
    menu.classList.remove("menuTheme4");
    settings.classList.remove("settingsTheme4");
    alerts.classList.remove("alertsTheme4");
    about.classList.remove("aboutTheme4");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.remove("iconsTheme4")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.remove("alertTheme4")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.remove("lang4")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.remove("font4")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.remove("clockSystemButton4")
    }
}

function addTheme5() {
    body.classList.add("bodyTheme5");
    newAlertTheme.classList.add("newAlertTheme5");
    timeContainer.classList.add("timeContainerTheme5");
    options.classList.add("optionsTheme5");
    menu.classList.add("menuTheme5");
    settings.classList.add("settingsTheme5");
    alerts.classList.add("alertsTheme5");
    about.classList.add("aboutTheme5");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.add("iconsTheme5")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.add("alertTheme5")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.add("lang5")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.add("font5")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.add("clockSystemButton5")
    }
}

function deleteTheme5() {
    body.classList.remove("bodyTheme5");
    newAlertTheme.classList.remove("newAlertTheme5");
    timeContainer.classList.remove("timeContainerTheme5");
    options.classList.remove("optionsTheme5");
    menu.classList.remove("menuTheme5");
    settings.classList.remove("settingsTheme5");
    alerts.classList.remove("alertsTheme5");
    about.classList.remove("aboutTheme5");
    for (var i = 0; i < icons.length; ++i) {
        icons[i].classList.remove("iconsTheme5")
    }
    var alert = document.querySelectorAll(".alert");
    for (var i = 0; i < alert.length; ++i) {
        alert[i].classList.remove("alertTheme5")
    }
    for (var i = 0; i < lang.length; ++i) {
        lang[i].classList.remove("lang5")
    }
    for (var i = 0; i < font.length; ++i) {
        font[i].classList.remove("font5")
    }
    for (var i = 0; i < clockSystemButton.length; ++i) {
        clockSystemButton[i].classList.remove("clockSystemButton5")
    }
}

function deleteThemes() {
    if (localStorage.getItem("currentTheme") == null) {

    }else if (localStorage.getItem("currentTheme") == "theme2") {
        deleteTheme2();
    }else if (localStorage.getItem("currentTheme") == "theme3") {
        deleteTheme3();
    }else if (localStorage.getItem("currentTheme") == "theme4") {
        deleteTheme4();
    }else if (localStorage.getItem("currentTheme") == "theme5") {
        deleteTheme5();
    }
}
function activateAllThemes(){
    if (localStorage.getItem("currentTheme") == null) {

}else if (localStorage.getItem("currentTheme") == "theme2") {
    addTheme2();
}else if (localStorage.getItem("currentTheme") == "theme3") {
    addTheme3();
}else if (localStorage.getItem("currentTheme") == "theme4") {
    addTheme4();
}else if (localStorage.getItem("currentTheme") == "theme5") {
    addTheme5();
}
}
activateAllThemes();


var theme1 = document.querySelector(".theme1");
var theme2 = document.querySelector(".theme2");
var theme3 = document.querySelector(".theme3");
var theme4 = document.querySelector(".theme4");
var theme5 = document.querySelector(".theme5");

theme1.onclick = ()=>{
    deleteThemes();
    if(localStorage.getItem("currentTheme") !== null){
        localStorage.removeItem("currentTheme");
    }
}
theme2.onclick = ()=>{
    deleteThemes();
    addTheme2();
    localStorage.setItem("currentTheme","theme2");
}
theme3.onclick = ()=>{
    deleteThemes();
    addTheme3();
    localStorage.setItem("currentTheme","theme3");
}
theme4.onclick = ()=>{
    deleteThemes();
    addTheme4();
    localStorage.setItem("currentTheme","theme4");
}
theme5.onclick = ()=>{
    deleteThemes();
    addTheme5();
    localStorage.setItem("currentTheme","theme5");
}


var timeValue = document.getElementById("timeValue");
var dateValue = document.getElementById("dateValue");

var fontB1 = document.querySelector(".fontB1");
var fontB2 = document.querySelector(".fontB2");
var fontB3 = document.querySelector(".fontB3");
var fontB4 = document.querySelector(".fontB4");


function deleteFonts(){
    if(localStorage.getItem("currentFont") == null){

}else if(localStorage.getItem("currentFont") == "font2"){
    timeValue.classList.remove("clockFont2","h1Font2");
    dateValue.classList.remove("clockFont2");
}else if(localStorage.getItem("currentFont") == "font3"){
    timeValue.classList.remove("clockFont3","h1Font3");
    dateValue.classList.remove("clockFont3");
}else if(localStorage.getItem("currentFont") == "font4"){
    timeValue.classList.remove("clockFont4");
    dateValue.classList.remove("clockFont4");
    timeValue.classList.remove("h1Font4");
}
}

fontB1.onclick = ()=>{
    deleteFonts();
    if(localStorage.getItem("currentFont") !== null){
        localStorage.removeItem("currentFont")
    }
}
fontB2.onclick = ()=>{
    deleteFonts();
    timeValue.classList.add("clockFont2","h1Font2");
    dateValue.classList.add("clockFont2");
    localStorage.setItem("currentFont","font2");
}
fontB3.onclick = ()=>{
    deleteFonts();
    timeValue.classList.add("clockFont3","h1Font3");
    dateValue.classList.add("clockFont3");
    localStorage.setItem("currentFont","font3");
}
fontB4.onclick = ()=>{
    deleteFonts();
    timeValue.classList.add("clockFont4");
    timeValue.classList.add("h1Font4");
    dateValue.classList.add("clockFont4");
    localStorage.setItem("currentFont","font4");
}

if(localStorage.getItem("currentFont") == null){

}else if(localStorage.getItem("currentFont") == "font2"){
    timeValue.classList.add("clockFont2","h1Font2");
    dateValue.classList.add("clockFont2");
}else if(localStorage.getItem("currentFont") == "font3"){
    timeValue.classList.add("clockFont3");
    dateValue.classList.add("clockFont3");
}else if(localStorage.getItem("currentFont") == "font4"){
    timeValue.classList.add("clockFont4");
    timeValue.classList.add("h1Font4");
    dateValue.classList.add("clockFont4");
}



//THE CLOCK SECTION


//alert function
function showAlarm(){

}

var hour24 = document.querySelector(".hour24");
var hour12 = document.querySelector(".hour12");

hour24.onclick = ()=>{
    if(localStorage.getItem("clockSystem") !== null){
        localStorage.removeItem("clockSystem");
    }
    timeSet();
}
hour12.onclick = ()=>{
    localStorage.setItem("clockSystem","12Hours");
    timeSet();
}
var activationN = "true";
function addadd(title,time,content){
    if(activationN == "true"){
        //
        var alarmContainer = document.querySelector(".alarmContainer");
        // document.body.innerHTML += '<article class="alert alarm">' + elel + '</article>';
        activationN = "false";
        //alarmContainer.innerHTML += '<article class="alert alarm">' + elel + "</article>";
        alarmContainer.innerHTML += '<article class="alert alarm">'+'<div onclick="remove(this.parentElement);activateTheN();" class="deleteAlert "><a >&times;</a></div><header class="alertHeader "><h3>'+ title +'</h3>' + '<h4>('+ time +')</h4></header><div class="content "><p>'+ content +'</p></div></article>';
        //console.log('<article class="alert alarm">' + elel + "</article>");
        activateAllThemes();
    }
}
function activateTheN(){
    activationN = "true";
}
function timeSet(){
    if(localStorage.getItem("clockSystem") == "12Hours"){
    var time1 = new Date();
    var hours = time1.getHours();
    var minutes = time1.getMinutes();
    var seconds = time1.getSeconds();
    var session = "AM";
     
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;

    

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
    timeValue.innerHTML = hours + ":" + minutes + ":" + seconds + " " + session;
    dateValue.innerHTML = time1.getDate() + " - " + months[time1.getMonth()] + " - " + time1.getFullYear();

    var hoursA = time1.getHours();
    var minutesA = time1.getMinutes();
    var secondsA = time1.getSeconds();
    hoursA = (hoursA<10) ? "0" + hoursA : hoursA;
    minutesA = (minutesA<10) ? "0" + minutesA : minutesA;
    secondsA = (secondsA<10) ? "0" + secondsA : secondsA;
    var alarmHour = hoursA + ":" + minutesA;
    var alert2 = document.querySelectorAll(".alert");
    
    if(alert2.length>0){
        for(var i = 0;i<alert2.length;i++) {
            if(alert2[i].children[1].children[1].innerHTML != alarmHour){
                
            }else{
                remove(alert2[i]);//alert2[i].children[1].parentElement.innerHTML
               addadd(alert2[i].children[1].children[0].innerHTML,alert2[i].children[1].children[1].innerHTML,alert2[i].children[2].children[0].innerHTML)
               remove(alert2[i]);
                // document.body.innerHTML += alert2[i].children[1].parentElement.innerHTML;
            }
        }
    }

    }else if(localStorage.getItem("clockSystem") == null){
 var time1 = new Date();
    var hours = time1.getHours();
    var minutes = time1.getMinutes();
    var seconds = time1.getSeconds();

    
    


    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    seconds = (seconds<10) ? "0" + seconds : seconds;

    var alarmHour = hours + ":" + minutes;
    var alert2 = document.querySelectorAll(".alert");

    if(alert2.length>0){
        for(var i = 0;i<alert2.length;i++) {
            if(alert2[i].children[1].children[1].innerHTML != alarmHour){
                
            }else{
                remove(alert2[i]);//alert2[i].children[1].parentElement.innerHTML
               addadd(alert2[i].children[1].children[0].innerHTML,alert2[i].children[1].children[1].innerHTML,alert2[i].children[2].children[0].innerHTML)
               remove(alert2[i]);
               document.getElementById("sound").play();
            }
        }
    }

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
    timeValue.innerHTML = hours + ":" + minutes + ":" + seconds;
    dateValue.innerHTML = time1.getDate() + " - " + months[time1.getMonth()] + " - " + time1.getFullYear();
    }
    
}
setInterval(timeSet,100);
onload = timeSet();

//ALERTS
var closeAddAlert = document.querySelector(".closeAddAlert");
var newAlert = document.querySelector(".newAlert");
var addAlert = document.querySelector(".addAlert");
var alertTitle = document.querySelector(".alertTitle");
var alertContent = document.querySelector(".alertContent");

var mainAlerts = document.querySelector(".mainAlerts");
var alertTime = document.querySelector(".alertTime");
closeAddAlert.onclick = ()=>{
    newAlert.style.display = "none";
}
addAlert.onclick = ()=>{
    newAlert.style.display = "block";
}


document.querySelector(".addAlertButton").onclick = ()=>{
    if(alertTime.value.length <=2){

    }else{
      var alert = document.querySelectorAll(".alert");
    if(alert.length <= 0){
        var emptyAlerts = document.querySelector(".emptyAlerts");
        emptyAlerts.remove();
    }
    addNewAlert();  
    }
    
}


var alertsArray = [];
function addNewAlert(){
    mainAlerts.innerHTML += '<article class="alert ">'+'<div onclick="remove(this.parentElement)" class="deleteAlert "><a >&times;</a></div><header class="alertHeader "><h3>'+ alertTitle.value +'</h3>' + '<h4>'+ alertTime.value +'</h4></header><div class="content "><p>'+ alertContent.value +'</p></div></article>';
    controlingTheArray();
    activateAllThemes();
    newAlert.style.display = "none";
}
function controlingTheArray(){
    var alert2 = document.querySelectorAll(".alert");
    alertsArray = [];
    for(var i = 0;i<alert2.length;i++) {
        console.log(alert2[i]);
        var alertObject = {};
        alertObject.title = alert2[i].children[1].children[0].innerHTML;//
        alertObject.time = alert2[i].children[1].children[1].innerHTML;//
        alertObject.content = alert2[i].children[2].children[0].innerHTML;//
        alertsArray.push(alertObject);
    }
    localStorage.setItem("alertStorage",JSON.stringify(alertsArray));
}
function test5(){
    mainAlerts.innerHTML += '<article class="alert ">'+'<div class="deleteAlert "><a >&times;</a></div><header class="alertHeader "><h3>'+ alertTitle.value +'</h3>' + '<h4>'+ alertTime.value +'</h4></header><div class="content "><p>'+ alertContent.value +'</p></div></article>';
}
function test4(){
    for(var i = 0;i<alertsArray.length;i++){
        mainAlerts.innerHTML += '<article id="t" class="alert ">'+'<div class="deleteAlert "><a >&times;</a></div>'+'<header class="alertHeader "><h3>'+ alertsArray[i].title +'</h3><h4>'+ alertsArray[i].time +'</h4></header>'+'<div class="content "><p>'+ alertsArray[i].content +'</p></div>'+'</article>';
    }
    // document.body.innerHTML += "<button id='t'>test</button>";
}

if(localStorage.getItem("alertStorage") == null || localStorage.getItem("alertStorage") == '[]'){
    if(document.querySelectorAll(".alert").length <= 0){
        document.querySelector(".mainAlerts").innerHTML = '<div class="emptyAlerts"><ion-icon class="emptyIcon" name="file-tray-outline"></ion-icon><br><h3>' + "You don't have any alerts"+'</h3></div>';
    }
}else{
    var alertLocal = JSON.parse(localStorage.getItem('alertStorage'));
    mainAlerts.innerHTML = "";
    for(var i = 0;i<alertLocal.length;i++){
           mainAlerts.innerHTML += '<article id="t" class="alert ">'+'<div onclick="remove(this.parentElement)" class="deleteAlert "><a >&times;</a></div>'+'<header class="alertHeader "><h3>'+ alertLocal[i].title +'</h3><h4>'+ alertLocal[i].time +'</h4></header>'+'<div class="content "><p>'+ alertLocal[i].content +'</p></div>'+'</article>';
    }
    activateAllThemes();
}

function remove(el) {
    var element = el;
    element.style.filter = "opacity(2%)";
    element.style.marginTop = "20px";
    setTimeout(()=>{
        element.remove();
        controlingTheArray();
        if(document.querySelectorAll(".alert").length <= 0){
            document.querySelector(".mainAlerts").innerHTML = '<div class="emptyAlerts"><ion-icon class="emptyIcon" name="file-tray-outline"></ion-icon><br><h3>' + "You don't have any alerts"+'</h3></div>';
        }
    },350);
    
  }
