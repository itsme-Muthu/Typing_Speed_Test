const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
timing = document.querySelector(".time span");
timeTag = document.querySelector(".time span b"),
mistakeTag = document.querySelector(".mistake span"),
wpmTag = document.querySelector(".wpm span"),
cpmTag = document.querySelector(".cpm span"),
tryAgainBtn = document.querySelector(".content-box button");
result = document.querySelector("#msg");
message = document.querySelector(".msg-container");
typed_result = document.querySelector("#typed-result");
type_result = document.querySelector(".type-result")
let timer,
maxTime = 60,
timeLeft = maxTime,
charIndex = mistakes = isTyping = wpm = cpm = totalmistakes = 0;

function randomParagraph(){
    // fetching random number and it'll always be always less than the total number of paragraphs present.
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";

    // getting random item from the paragraphs array, splitting all characters of it, adding each character inside span and then adding
    // this span inside p tag
    paragraphs[randomIndex].split("").forEach(span=>{
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    });

    typingText.querySelectorAll("span")[0].classList.add("active");
    // focusing input field on keydown or click event
    document.addEventListener("keydown",() => inpField.focus());
    typingText.addEventListener("click",() => inpField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if(charIndex < characters.length -1 && timeLeft>0){

        if(timeLeft<=10){
            timing.classList.add("time-up");
        }
            // once timer is start, it won't restart again on every key clicked.
        if(!isTyping){
            timer = setInterval(initTimer,1000);
            isTyping = true;
        }
        // if user hasn't entered any character or pressed backspace
        if(typedChar == null){
            // decrement the character index value when the user presses backspace.
            charIndex--;
            // decrement mistakes if viewer presses backspace/undos
            // (decrements mistakes only if the charIndex span contains incorrect class)
            if(characters[charIndex].classList.contains("incorrect")){
                mistakes--;
            }
            characters[charIndex].classList.remove("correct","incorrect");
        } else{
            if(characters[charIndex].innerText === typedChar){
                // if user typed character and shown character matched then add the correct class 
                // else increment the mistakes and add the incorrect class
                characters[charIndex].classList.add("correct");
            } else{
                mistakes++;
                totalmistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++; // increment charIndex either user typed correct or incorrect character
        }

        
        //removing the active class from the already typed out characters
        characters.forEach(span => span.classList.remove("active"));
        //adding the active class to the next characters.
        characters[charIndex].classList.add("active");

        // to get WPM, first, substracting total mistakes from the total typed characters then dividing it by 5 and again dividing 
        // this output by substracting timeLeft from maxTime and last multiplying the output with 60.
        // -> 5 means assuming 5 characters = 1 word.   (Typing.com follows the same methodology for calculations)

        // if wpm value is -, empty, or infinity the setting it's value as 0
        wpm = wpm < 0 || !wpm || wpm === Infinity? 0: wpm;

        mistakeTag.innerText = mistakes;
        // wpmTag.innerText = wpm;  
        // cpm - characters per minute -> does not count mistakes.
        cpmTag.innerText = charIndex - mistakes; 
        cpm = charIndex - mistakes;
    } else{
        // print the overall mistakes made on the console after the timer reaches 0
        // overall mistakes are important to calculate the accuracy
        // accuracy = totalmistakes/cpm
        message.classList.remove("hide");
        console.log("total-mistakes=",totalmistakes);
        totalchar = cpm+totalmistakes;
        accuracy = Math.round((cpm/totalchar)*100);
        raw = Math.round(((totalchar/5)/(maxTime - timeLeft))*60);
        result.innerText = "Accuracy: "+accuracy+" | | "+" Raw: "+raw;
        console.log("cpm:"+cpm);
        console.log("totalchar:"+totalchar);
        console.log("charindex:"+charIndex);
        console.log("raw: "+raw)
        console.log("accuracy: "+accuracy);
        console.log("WPM: "+wpm);
        inpField.value = "";
        clearInterval(timer);

        // print the result text for each typing test based on the WPM of the user.
        if(wpm<=10){
            typed_result.innerHTML = "Learn the proper typing technique and practice to improve your speed😭";
        } else if(wpm<=20){
            typed_result.innerHTML = "Focus and technique and keep practicing🥲";
        } else if(wpm<=30){
            typed_result.innerHTML = "Better, but still below average. Keep practicing to improve your speed and accurace.😌";
        } else if(wpm<=40){
            typed_result.innerHTML = "You are now an average typist. You still have significant room for improvement.😃";
        } else if(wpm<=50){
            typed_result.innerHTML = "Congratulations!  You're above average.😊";
        } else if(wpm<=60){
            typed_result.innerHTML = "This is the speed required for most jobs. You can now be a professional typist✌️";
        } else if(wpm<=70){
            if(accuracy>=95){
                typed_result.innerHTML = "You are way above average and would qualify for any typing job, maintain your accuracy high.🤞";
            } else{
                typed_result.innerHTML = "You are way above average and would qualify for any typing job, work on your accuracy.👌";
            }
        } else if(wpm<=80){
            typed_result.innerHTML = "You're a catch! Any employer looking for a typist would love to have you.🫡";
        } else if(wpm<=90){
            typed_result.innerHTML = "At this speed, you're probably a gamer, coder, or genius. You're doing great!😉";
        } else if(wpm>90){
            typed_result.innerHTML = "You are in the top 1% of typists! Congratulations!😎";
        }

        type_result.classList.remove("hide");

    }
}

function initTimer(){
    // if timeLeft is greater than 0, then decrement the timeLeft else clear the timer.
    // if(timeLeft == 1){
    //     console.log("Total mistakes = ",totalmistakes);
    // }
    if(timeLeft > 0){
        timeLeft--;

        // updating the wpm and wpm-tage in the timer because the wpm gets adjusted accordingly even if the user does not type.
        wpm = Math.round((((charIndex-mistakes)/5)/(maxTime - timeLeft))*60);
        wpmTag.innerText = wpm; 
        timeTag.innerText = timeLeft;
    } 
    else{
        // console.log(totalmistakes);
        clearInterval(timer);
    }
}

function resetGame(){
    
    // calling loadParagraph function and 
    // resetting each variables and elements value to default.
    message.classList.add("hide");
    type_result.classList.add("hide");
    timing.classList.remove("time-up");
    randomParagraph();
    inpField.value = "";
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft;
    mistakeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}

randomParagraph();

inpField.addEventListener("input",initTyping);
tryAgainBtn.addEventListener("click",resetGame);