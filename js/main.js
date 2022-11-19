const url = "https://v3.football.api-sports.io/"
const headers = {'X-RapidAPI-Key': '61bcc57fdf85870e4db8f81f6f916c19'}

var apiKey = "61bcc57fdf85870e4db8f81f6f916c19"
var queryUrl= " https://v3.football.api-sports.io/"
var queryIshouldMake = " https://v3.football.api-sports.io/teams?country=mexico&league=262&season=2022"

var request = new XMLHttpRequest();

request.open('GET', 'https://v3.football.api-sports.io/teams?country=mexico&league=262&season=2022');

request.setRequestHeader('x-rapidapi-key', '61bcc57fdf85870e4db8f81f6f916c19');

request.send();

request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      //console.log('Body:', this.responseText);
      jsonData = JSON.parse(this.responseText);

      for (var i = 0; i < jsonData.response.length; i++) {
        team = jsonData.response[i];
        createBtn(team.team["name"])

        // console.log("Team " + i, team);
        // console.log(team.team["id"]);
        // var newBtn = document.createElement("buttton");
        // var newContent = document.createTextNode(team.team["name"]);
        // newBtn.appendChild(newContent); //añade texto al div creado.
        // newBtn.onclick = function() {
        //     console.log("I click it", newContent)
        // };

        // añade el elemento creado y su contenido al DOM
        // var currentDiv = document.getElementById("div1");
        // document.body.insertBefore(newBtn, currentDiv);
    }
     
    }
    
  };

  function createBtn(buttonId){
    const btn = document.createElement('button');
    btn.setAttribute("class", "btn-event btn p-2 text-light");
    btn.setAttribute("style", "background:#072146")
    btn.setAttribute("type", "submit")
    btn.setAttribute("id",buttonId)
    btn.innerHTML = buttonId;
    btn.onclick = function() {
        savePronostico(buttonId)
        };
    var currentDiv = document.getElementById("div1");
    currentDiv.appendChild(btn)
    return btn
  }

  function savePronostico(buttonId){
    const fd = new FormData();
    var buttonId=buttonId
    var correo = document.getElementById("correo").value;

    fd.append("buttonId", buttonId); 
    fd.append("correo", correo );
    fetch("savePronostico.php", {body:fd, method:"POST"}).then(r => r.text()).then(r => {

        alert("Registro exitiso");
  })

}

// var newDiv = document.createElement("div");
// var newContent = document.createTextNode("Hola!¿Qué tal?");
// newDiv.appendChild(newContent); //añade texto al div creado.

// // añade el elemento creado y su contenido al DOM
// var currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);



//fetch(queryIshouldMake)