

function onLoadSetLang(){
    let lang = localStorage.getItem("lang");
    if(lang == "eng"){
        document.getElementById("menu-outer-swe").style.display ="none";
        document.getElementById("sweBody").style.display = "none";

        document.getElementById("menu-outer-eng").style.display ="block";
        document.getElementById("engBody").style.display = "block";


    }else{
        document.getElementById("menu-outer-eng").style.display ="none";
        document.getElementById("engBody").style.display = "none";

        document.getElementById("menu-outer-swe").style.display ="block";
        document.getElementById("sweBody").style.display = "block";
    }

}


function changeToSwe(){
    document.getElementById("menu-outer-eng").style.display ="none";
    document.getElementById("engBody").style.display = "none";

    document.getElementById("menu-outer-swe").style.display ="block";
    document.getElementById("sweBody").style.display = "block";
    localStorage.clear()
    localStorage.setItem("lang","swe")
}

function changeToEng(){
    document.getElementById("menu-outer-swe").style.display ="none";
    document.getElementById("sweBody").style.display = "none";

    document.getElementById("menu-outer-eng").style.display ="block";
    document.getElementById("engBody").style.display = "block";
    localStorage.clear()
    localStorage.setItem("lang","eng")
}