
//behöver ju göra 2st valideringar för de olika formulären TLDR:INTE RÄTT SÄTT ATT GÖRA EN ENGELSK VERSION



function basicValidation(value){
    if(isNaN(value)){
        console.log("NaN")
    if (value.length > 0){
        return true;
    }
    else {
        return false;
    }}else{
        if(value > 0){
            return true;
        }
        else{
            return false;
        }
    }

}


function validateTelephoneNumber(num){
    let regexPattern = /^[0-9]{2,5}-*[0-9]{4,7}$/;
    let regexMatch = regexPattern.exec(num);

    if(regexMatch != null) {
        return true;
    }
    else{
        return false;
    }
}

function validateEmail(email){
    let atPosition = email.indexOf("@");
    let dotPosition = email.indexOf(".")
    if(atPosition < 1 || (dotPosition - atPosition < 2)){

        return false;
    }
    else{
        return true;
    }
}

function validateDate(date){
    let datePattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    let dateMatch = datePattern.exec(date);

    if(dateMatch != null){
        return true;
    }else{
        return false;
    }
}


function validate(lang){
    console.log("kör validering")
    let name;
    let nr;
    let date;
    let antal;

    let errors=0;
    if (lang =="swe"){
        console.log("langsweValidator")
        name = document.querySelector("#namn").value;
        nr = document.querySelector("#nr").value;
        date = document.querySelector("#datum").value;
        antal = document.querySelector("#antal").value;

        nameValid = basicValidation(name);
        if(nameValid == false){
            document.getElementById("namnRT").textContent ="Fyll i ditt namn";
            errors+=1;
        }
        nrValid = validateTelephoneNumber(nr);
        console.log("validate tel "+nrValid)
        if(nrValid == false){
            document.getElementById("nrRT").textContent = "Fyll i ditt telefonnummer";
            errors+=1;
        }
        dateValid = validateDate(date);
        if(dateValid == false){
            document.getElementById("dateRT").textContent = "Välj ditt datum";
            errors+=1;
        }
        antalValid = basicValidation(antal);
        console.log("ANTAL "+antalValid)
        if(antalValid == false){
            document.getElementById("antalRT").textContent = "Välj antal personer";
            errors+=1;
        }

        if (errors > 0){
            console.log("errors"+errors)
            return false;
        }
        else{
            console.log("errors"+errors)
            return true;
        }
    }else{
        console.log("langeng validator")
        name = document.querySelector("#namnEn").value;
        nr = document.querySelector("#nrEn").value;
        date = document.querySelector("#datumEn").value;
        antal = document.querySelector("#antalEn").value;
        nameValid = basicValidation(name);
        if(nameValid == false){
            document.getElementById("namnEnRT").textContent ="Enter your name";
            errors+=1;
        }
        nrValid = validateTelephoneNumber(nr);
        if(nrValid == false){
            document.getElementById("nrEnRT").textContent = "Enter your phone number";
            errors+=1;
        }
        dateValid = validateDate(date);
        if(dateValid == false){
            document.getElementById("dateEnRT").textContent = "Pick a date";
            errors+=1;
        }
        antalValid = basicValidation(antal);
        console.log("ANTALVALID "+antalValid)
        if(antalValid == false){
            document.getElementById("antalEnRT").textContent = "Choose how many people";
            errors+=1;
        }
        if (errors > 0){
            return false;
        }
        else{
            return true;
        }


    }


}