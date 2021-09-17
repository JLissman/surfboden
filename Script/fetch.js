


function fetchActivities() {
    const sweList = document.querySelector("#sweList");
    const engList = document.querySelector("#engList");

    console.log("fechar aktiviteter")
    fetch("JSON/aktiviteter.json")
        .then(res => res.json())
        .then(aktiviteter => {
            aktiviteter.forEach(function (aktivitet) {
                console.log(aktivitet["name"])
                let htmlString = "<li><h1>" + aktivitet["name"] + "</h1><h3>" + aktivitet["pris"] + "</h3><article>" + aktivitet["description"] + "</article></li>"

                sweList.innerHTML += htmlString;


            });
        })
    console.log("feching activitiees")
    fetch("JSON/aktiviteterEN.json")
        .then(res => res.json())
        .then(aktiviteter => {
            aktiviteter.forEach(function (aktivitet) {
                console.log(aktivitet["name"])
                let htmlString = "<li><h1>" + aktivitet["name"] + "</h1><h3>" + aktivitet["pris"] + "</h3><article>" + aktivitet["description"] + "</article></li>"

                engList.innerHTML += htmlString;


            });
        })





}