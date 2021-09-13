const sweform = document.querySelector('#sweBody');
const engForm = document.querySelector("#engBody");

const name = document.querySelector('#namn');
const tel = document.querySelector('#nr');
const type = document.querySelector('#aktivitet');
const datum = document.querySelector('#datum');
const antal = document.querySelector('#antal');




const namen = document.querySelector("#namnEn");
const telen = document.querySelector("#nrEn");
const typeen = document.querySelector("#aktivtetEn");
const datumen = document.querySelector("#datumEn");
const antalen = document.querySelector("#antalEn");

function getFormInfo(event){
    let lang = localStorage.getItem("lang")
    console.log(lang)
    if(lang=="eng"){
        console.log("lang = eng")
        let varName = namen.value;
        let varTel = telen.value;
        let varType = typeen.value;
        let varDatum = datumen.value;
        let varAntal = antalen.value;
        document.getElementById("resultName").textContent = "Thank you "+varName+" for you booking request";
        document.getElementById("resultTel").textContent = "We will contact you via "+varTel+" to confirm your booking";
        document.getElementById("resultBokning").textContent = "You have Booked "+varType+" - "+varDatum+" - for "+varAntal+" people(s)"



        document.getElementById("engBody").style.display ="none";



        event.preventDefault();
    }
    else{
        console.log("lang != eng")
        let varName = name.value;
        let varTel = tel.value;
        let varType = type.value;
        let varDatum = datum.value;
        let varAntal = antal.value;

        document.getElementById("resultName").textContent = "Tack "+varName+" för din bokning";
        document.getElementById("resultTel").textContent = "Vi kommer kontakta dig på "+varTel+" för att bekräfta din bokning";
        document.getElementById("resultBokning").textContent = "Du har bokat "+varType+" - "+varDatum+" - för "+varAntal+" Person(er)"



    document.getElementById("sweBody").style.display ="none";



    event.preventDefault();
    }

}

sweform.addEventListener('submit', getFormInfo, false)
engForm.addEventListener('submit', getFormInfo, false)
