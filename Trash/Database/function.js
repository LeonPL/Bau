
var fra, ant;
var database;
var data;
var ref;
var keys;
var keis;
var k;
var k2;
var ein = [];
var aus = [];
var eingabe;
var ausgabe;



function connect(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYIEH50J9WhKEnUvc_PjoCRImNFKQKQ-o",
    authDomain: "artificial-intelligence-fd6fa.firebaseapp.com",
    databaseURL: "https://artificial-intelligence-fd6fa.firebaseio.com",
    projectId: "artificial-intelligence-fd6fa",
    storageBucket: "artificial-intelligence-fd6fa.appspot.com",
    messagingSenderId: "975974492201"
  };
  firebase.initializeApp(config);
  database = firebase.database();

    ref = database.ref('inhalt');
  ref.on('value', gotData, errData);
}




function gotData(data) {

  document.getElementById("question").innerHTML ="";
  document.getElementById("answer").innerHTML ="";
  var inhalt = data.val();
  keys = Object.keys(inhalt);
  console.log(keys,fra,ant);
  for (var i = 0; i < keys.length; i++) {
    k = keys[i];
    var frage = inhalt[k].frage;
    var antwort = inhalt[k].antwort;
     ein.push(frage);
     aus.push(antwort);
    //console.log(Fragen, Antworten);
document.getElementById("question").innerHTML += "Frage: "+frage+"<br>";
document.getElementById("answer").innerHTML += "Antwort: "+antwort+"<br>";
  }

}


function errData(err) {
  console.log('Error!');
  console.log(err);
}


function input() {
fra= "";
ant= "";
 fra = document.getElementById("fra").value;
 ant = document.getElementById("ant").value;
 }



function save(){
 input();

  data = {
  frage: fra,
  antwort: ant
};

ref = database.ref('inhalt');
ref.push(data);

  document.getElementById("fra").value="";
  document.getElementById("ant").value="";

}

function getInfo() {
eingabe = document.getElementById("ai").value;
var gut = 0;


for (var i = 0; i <= ein.length; i++) {

  if (eingabe == ein[i]){
 ausgabe = aus[i];
 gut = 1;

  }
}
if (gut == 0){
  ausgabe = "Keine Treffer";
}
document.getElementById("aia").innerHTML = ausgabe;
}
