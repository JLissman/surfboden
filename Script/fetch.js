


function fetchActivities() {
    const sweList = document.querySelector("#sweList");
    const engList = document.querySelector("#engList");

    console.log("fechar aktiviteter")
    fetch("JSON/aktiviteter.json")
        .then(res => res.json())
        .then(aktiviteter => {
            aktiviteter.forEach(function (aktivitet) {
                console.log(aktivitet["name"])
                let htmlString = "<li><b>" + aktivitet["name"] + "</b> - " + aktivitet["pris"] + "<br><br>" + aktivitet["description"] + "<br><br></li>"

                sweList.innerHTML += htmlString;


            });
        })
    console.log("feching activitiees")
    fetch("JSON/aktiviteterEN.json")
        .then(res => res.json())
        .then(aktiviteter => {
            aktiviteter.forEach(function (aktivitet) {
                console.log(aktivitet["name"])
                let htmlString = "<li><b>" + aktivitet["name"] + "</b> - " + aktivitet["pris"] + "<br><br>" + aktivitet["description"] + "<br><br></li>"

                engList.innerHTML += htmlString;


            });
        })





}