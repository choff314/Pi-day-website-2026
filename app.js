
// animate lights

function animateLights(frame1, frame2){
    if (frame1.style.opacity == '0'){
        frame1.style.opacity = '1';
        frame2.style.opacity = '0';
    } else {
        frame2.style.opacity = '1';
        frame1.style.opacity = '0';
    }
}

const light1 = document.querySelector('.frame1');
const light2 = document.querySelector('.frame2');

setInterval(animateLights, 300, light1, light2);


// navbar stuff for mobile

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__links');
const darkenPage = document.querySelector('.navbar__links__wrapper');
const navWrap = document.querySelector('.navbar__wrapper');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    darkenPage.classList.toggle('active');
    navWrap.classList.toggle('active');
});

// pi day countdown

function countdownClock(dayClass, hourClass, minClass, secClass, month, day, hour, min, sec){
    const now = new Date();
    const targetString = month + " " + day + " 2026 " + hour + ":" + min + ":" + sec;
    const targetDate = new Date(targetString);
    let distance = targetDate - now;
    
    const millisecondsUntil = distance % 1000;
    distance = (distance - millisecondsUntil)/1000;
    let secondsUntil = distance % 60;
    distance = (distance - secondsUntil)/60;
    let minutesUntil = distance % 60;
    distance = (distance - minutesUntil)/60;
    let hoursUntil = distance % 24;
    let daysUntil = (distance - hoursUntil)/24;

    const days = document.querySelector(dayClass);
    const hours = document.querySelector(hourClass);
    const minutes = document.querySelector(minClass);
    const seconds = document.querySelector(secClass);

    if (daysUntil >= 0 && hoursUntil >= 0 && minutesUntil >= 0 && secondsUntil >=0){
        daysUntil = daysUntil < 10? "0" + daysUntil : daysUntil;
        hoursUntil = hoursUntil < 10? "0" + hoursUntil : hoursUntil;
        minutesUntil = minutesUntil < 10? "0" + minutesUntil : minutesUntil;
        secondsUntil = secondsUntil < 10? "0" + secondsUntil : secondsUntil;
    } else {
        daysUntil = -1;
        hoursUntil = -1;
        minutesUntil = -1;
        secondsUntil = -1;
    }

    if (days == null){
        return;
    }
    days.textContent = daysUntil < 0? "" : daysUntil;
    hours.textContent = hoursUntil < 0? "" : hoursUntil;
    minutes.textContent = minutesUntil < 0? "" : minutesUntil;
    seconds.textContent = secondsUntil < 0? "" : secondsUntil;

}

function reset(dayClass, hourClass, minClass, secClass){
    const days = document.querySelector(dayClass);
    const hours = document.querySelector(hourClass);
    const minutes = document.querySelector(minClass);
    const seconds = document.querySelector(secClass);
    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';

}

setInterval(countdownClock,1000,'.days','.hours','.minutes','.seconds','March','14','13','59','26');

// theme toggle

var darkTheme = false;

function nightToggle (){
    const now = new Date();
    const sunriseString = now.toLocaleDateString('en', {month: 'long'}) + " " + now.getDate() + " " + now.getFullYear() + " 05:52:00";
    const sunsetString = now.toLocaleDateString('en', {month: 'long'}) + " " + now.getDate() + " " + now.getFullYear() + " 22:43:00";

    const sunrise = new Date(sunriseString);
    const sunset = new Date(sunsetString);
    if (now - sunrise < 0 || now - sunset >= 0){
        darkToggle();
        darkTheme = true;
    }
}

function darkToggle (){
    const items = document.querySelectorAll('.night__toggle');
    items.forEach(item => {
        item.classList.toggle('night');
    })
    darkTheme = darkTheme? false : true;
}

nightToggle();

const lightCircle = document.querySelector('#light__circle');
const darkCircle = document.querySelector('#dark__circle');

lightCircle.addEventListener('click', function() {
    if(darkTheme){
        darkToggle();
    }
});

darkCircle.addEventListener('click', function(){
    if(!darkTheme){
        darkToggle();
    }
})

// theme toggle toggle

const themeWrapper = document.querySelector('.theme__wrapper');
const toggleUpDots = document.querySelector('.theme__toggle');
//navWrap was declared as a const earlier

toggleUpDots.addEventListener('click', function(){
    themeWrapper.classList.toggle('active');
    navWrap.classList.toggle('active');
});

// advent calendar countdown ----------------------------------------------------------------------

// declare variables n stuff

const doors = document.querySelector('.advent__content');
const number = document.querySelector('.door__number');
const openTime = document.querySelector('.open__time');
const openButton = document.querySelector('.open__button');
const openCount = document.querySelector('.open__countdown__wrapper');
const lock = document.querySelector('.lock__status');
const error = document.querySelector('.error__msg');
const mobileinst = document.querySelector('.mobile__instructions');
const deskinst = document.querySelector('.desktop__instructions');
let curr = 0;
let errorCount = 0;

// initial toggles

if (openButton != null){
    openButton.classList.toggle('hidden');
    openCount.classList.toggle('hidden');
    lock.classList.toggle('hidden');
    openButton.classList.toggle('wait');
}

// click events

if (doors != null){
    doors.addEventListener("click", (event) => {
        if (curr == 0){
            openButton.classList.toggle('hidden');
            openCount.classList.toggle('hidden');
            lock.classList.toggle('hidden');
        }
        if (event.target.classList.contains('door')){
            doorCountdown(event.target.id);
        } else if (event.target.classList.contains('door__content')){
            doorCountdown(event.target.parentElement.id);
        }
    });
}

if (openButton != null){
    openButton.addEventListener("click", function(){
        openDoor(curr);
    })
}

// when doors are clicked

function doorCountdown(doorid){
    if (doorid == "d1"){
        miniCountdown('01');
        number.textContent = "DOOR 1";
        openTime.textContent = "March 1st 12AM";
        curr = 1;
    } else if (doorid == "d2"){
        miniCountdown('02');
        number.textContent = "DOOR 2";
        openTime.textContent = "March 2nd 12AM";
        curr = 2;
    } else if (doorid == "d3"){
        miniCountdown('03');
        number.textContent = "DOOR 3";
        openTime.textContent = "March 3rd 12AM";
        curr = 3;
    } else if (doorid == "d4"){
        miniCountdown('04');
        number.textContent = "DOOR 4";
        openTime.textContent = "March 4th 12AM";
        curr = 4;
    } else if (doorid == "d5"){
        miniCountdown('05');
        number.textContent = "DOOR 5";
        openTime.textContent = "March 5th 12AM";
        curr = 5;
    } else if (doorid == "d6"){
        miniCountdown('06');
        number.textContent = "DOOR 6";
        openTime.textContent = "March 6th 12AM";
        curr = 6;
    } else if (doorid == "d7"){
        miniCountdown('07');
        number.textContent = "DOOR 7";
        openTime.textContent = "March 7th 12AM";
        curr = 7;
    } else if (doorid == "d8"){
        miniCountdown('08');
        number.textContent = "DOOR 8";
        openTime.textContent = "March 8th 12AM";
        curr = 8;
    } else if (doorid == "d9"){
        miniCountdown('09');
        number.textContent = "DOOR 9";
        openTime.textContent = "March 9th 12AM";
        curr = 9;
    } else if (doorid == "d10"){
        miniCountdown('10');
        number.textContent = "DOOR 10";
        openTime.textContent = "March 10th 12AM";
        curr = 10;
    } else if (doorid == "d11"){
        miniCountdown('11');
        number.textContent = "DOOR 11";
        openTime.textContent = "March 11th 12AM";
        curr = 11;
    } else if (doorid == "d12"){
        miniCountdown('12');
        number.textContent = "DOOR 12";
        openTime.textContent = "March 12th 12AM";
        curr = 12;
    } else if (doorid == "d13"){
        miniCountdown('13');
        number.textContent = "DOOR 13";
        openTime.textContent = "March 13th 12AM";
        curr = 13;
    } else if (doorid == "d14"){
        miniCountdown('14');
        number.textContent = "DOOR 14";
        openTime.textContent = "March 14th 12AM";
        curr = 14;
    }

    if (document.getElementById(doorid).classList.contains('open')){
        if (!openButton.classList.contains('closed')){
            openButton.classList.toggle('closed');
        }
        openButton.textContent = "CLOSE DOOR";
    } else {
        if (openButton.classList.contains('closed')){
            openButton.classList.toggle('closed');
        }
        openButton.textContent = "OPEN DOOR";
    }

}

function miniCountdown(day){
    countdownClock('.mini__days','.mini__hours','.mini__minutes','.mini__seconds','March',day,'00','00','00');
    let dist = distance(day);
    if (dist < 0){
        if (errorCount > 0){
            error.classList.toggle('active');
            openButton.classList.toggle('wait');
            openCount.classList.toggle('hidden');
            if (errorCount > 20){
                openCount.classList.toggle('hidden');
            }   
        } else if (errorCount == 0 && openButton.classList.contains('wait')){
            openButton.classList.toggle('wait');
            openCount.classList.toggle('hidden');
        }
        lock.textContent = "🔓 UNLOCKED since:";

    } else {
        if (errorCount > 0){
            error.classList.toggle('active');
            if (errorCount > 20){
                openCount.classList.toggle('hidden');
            }
        } else if (errorCount == 0 && !openButton.classList.contains('wait')){
            openButton.classList.toggle('wait');
            openCount.classList.toggle('hidden');
        }
        lock.textContent = "🔒 LOCKED until:";

    }
    errorCount = 0;
}

function distance(day){
    day = day < 10? "0" + day : day;
    const now = new Date();
    const targetString = "March" + " " + day + " 2026 " + '00' + ":" + '00' + ":" + '00';
    const targetDate = new Date(targetString);
    let distance = targetDate - now;
    return distance;
}

// opening the doors

function openDoor(doorNum){
    if (doorNum == 0){
        return;
    } else if (distance(curr) > 0 && errorCount == 0){
        error.textContent = "This door cannot be opened yet. Please be patient.";
        error.classList.toggle('active');
        errorCount = 1;
        return;
    } else if (distance(curr) > 0 && errorCount == 1){
        error.textContent = "This door cannot be opened yet. Pretty please be patient. :)";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 2){
        error.textContent = "This door cannot be opened yet. PLEASE be patient... :)";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 3){
        error.textContent = "This door cannot be opened yet. PRETTY PLEASE be patient... :)";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 4){
        error.textContent = "This door cannot be opened yet. BE PATIENT :(";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 5){
        error.textContent = "This door cannot be opened yet. PRETTY PLEASE be patient :'(";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 6){
        error.textContent = "This door cannot be opened yet. Be patient... >:(";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 7){
        error.textContent = "This door cannot be opened yet. BE PATIENT >:(";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 8){
        error.textContent = "This door cannot be opened yet. ...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 9){
        error.textContent = "This door cannot be opened yet. WAIT";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 10){
        error.textContent = "This door cannot be opened yet. JUST WAIT";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 11){
        error.textContent = "This door cannot be opened yet. PLEASE";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 12){
        error.textContent = "This door cannot be opened yet. Wow, someone is impatient...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 13){
        error.textContent = "This door cannot be opened yet. ._.";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 14){
        error.textContent = "This door cannot be opened yet. Seriously?";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 15){
        error.textContent = "This door cannot be opened yet. You have NOTHING better to do??";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 16){
        error.textContent = "This door cannot be opened yet. Yeah sure, just keep clicking open door...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 17){
        error.textContent = "This door cannot be opened yet. You'll see what happens...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 18){
        error.textContent = "This door cannot be opened yet. Just keep clicking...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 19){
        error.textContent = "This door cannot be opened yet. Again and again...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 20){
        openCount.classList.toggle('hidden');
        error.textContent = "This door cannot be opened yet. ...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 21){
        error.textContent = "This door cannot be opened yet. Well, clearly you don't care about the countdown if you KEEP clicking this...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 22){
        error.textContent = "This door cannot be opened yet. You wanna see what else I'll do??";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 23){
        error.textContent = "This door cannot be opened yet. *sigh*";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 24){
        error.textContent = "This door cannot be opened yet. okay then...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 25){
        error.style.color = "red";
        doors.style.display = 'none';
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 26){
        error.textContent = "Now there's no doors to be opened at all.";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 27){
        error.textContent = "What will you do now...?";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 28){
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 29){
        error.textContent = "Oh, I should probably update the instructions...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 30){
        mobileinst.textContent = "THERE ARE NO DOORS TO CLICK.\nTHERE ARE NO DOORS TO OPEN.";
        deskinst.textContent = "THERE ARE NO DOORS TO CLICK.\nTHERE ARE NO DOORS TO OPEN.";
        mobileinst.style.color = "red";
        deskinst.style.color = "red";
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 31){
        error.textContent = "Why?"
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 32){
        error.textContent = "Why are you clicking this?";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 33){
        error.textContent = "I should probably update the text on the button as well...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 34){
        openButton.textContent = "I AM AN ANNOYING BRAT WITH NOTHING BETTER TO DO";
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 35){
        error.textContent = "Oh! You're an annoying brat with nothing better to do! I see!!";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 36){
        error.textContent = "That's why you've been clicking the SAME BUTTON over 35 TIMES now...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 37){
        error.textContent = "You'd think that a normal person would have gotten tired of this by now...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 38){
        error.textContent = "But not you, of course!";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 39){
        error.textContent = "You're as annoying as there are digits of pi...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 40){
        error.textContent = "What do you even want??";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 41){
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 42){
        error.textContent = "You want the doors back?";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 43){
        error.textContent = "Well I refuse >:C";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 44){
        error.textContent = "...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 45){
        error.textContent = "!!";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 46){
        error.textContent = "Y-y-you're gonna leave the website if I don't...?";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 47){
        error.textContent = "Well please don't leave...";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 48){
        error.textContent = "okay FINE.";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 49){
        error.textContent = "you win.";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount == 50){
        error.textContent = "Click the button one more time and I'll restore everything to how it was before.";
        errorCount++;
        return;
    } else if (distance(curr) > 0 && errorCount > 0){
        if (errorCount > 20){
            openCount.classList.toggle('hidden');
        }
        if (errorCount > 25){
            doors.style.display = 'grid';
            error.style.color = 'white';
        } if (errorCount > 30){
            mobileinst.style.color = "white";
            deskinst.style.color = "white";
            mobileinst.textContent = "Tap on a door to see when you can open it.\nThen, tap the \"open\" button to open it.";
            deskinst.textContent = "Click on a door to see when you can open it.\nThen, click the \"open\" button to open it.";
        } if (errorCount > 34){
            openButton.textContent = "OPEN DOOR";
        }
        error.textContent = "This door cannot be opened yet. Please be patient.";
        errorCount = 1;
        return;
    }
    var doorid = "d" + doorNum;
    var doorcid = "dc" + doorNum;
    const door = document.getElementById(doorid);
    const doorc = document.getElementById(doorcid);
    door.classList.toggle('open');
    doorc.classList.toggle('open');

    if (door.classList.contains('open')){
        if (!openButton.classList.contains('closed')){
            openButton.classList.toggle('closed');
        }
        openButton.textContent = "CLOSE DOOR";
    } else {
        if (openButton.classList.contains('closed')){
            openButton.classList.toggle('closed');
        }
        openButton.textContent = "OPEN DOOR";
    }
}

/* Author's note spoiler */

function spoilerDistance(){
    const now = new Date();
    const targetString = "March" + " " + '03' + " 2026 " + '13' + ":" + '41' + ":" + '59';
    const targetDate = new Date(targetString);
    let distance = targetDate - now;
    return distance;
}

const preSpoiler = document.querySelector('.spoiler__warn');
const spoiler = document.querySelector('.spoiler');

function spoilerReveal(dist){
    if (dist < 0 && spoiler!=null){
        preSpoiler.style.display = 'none';
        spoiler.style.display = 'inline';
    } else if (spoiler!=null){
        preSpoiler.style.display = 'inline';
        spoiler.style.display = 'none';
    }
}

spoilerReveal(spoilerDistance());


