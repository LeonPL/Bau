var pname;
var database;
var data;
var ref;




function connect(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzm94W_BXjCQVwpF3y1c54r6BXIuonhqA",
    authDomain: "build-c992f.firebaseapp.com",
    databaseURL: "https://build-c992f.firebaseio.com",
    projectId: "build-c992f",
    storageBucket: "build-c992f.appspot.com",
    messagingSenderId: "728930746192"
  };
  firebase.initializeApp(config);
  database = firebase.database();

    ref = database.ref('Projekt');
  ref.on('value', errData);
}


function errData(err) {
  console.log('Error!');
  console.log(err);
}


function input() {
 pname= "";
 pname = document.getElementById("pname").value;
 }



function save(){
 input();

  data = {
  Projektname: pname,
};

ref = database.ref('Projekt');
ref.push(data);

  document.getElementById("pname").value="";

}
