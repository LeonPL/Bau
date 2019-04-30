var database;
var data;
var ref;
var uname;
var upass;
var usname;
var uspass;
var keys;
var logi;

function connect() {
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

  ref = database.ref('Konten');
ref.on('value',gotData, errData);
}
function input() {
uname= "";
upass= "";
 uname = document.getElementById("uname").value;
 upass = document.getElementById("upass").value;
 }

function save() {
  input();

   data = {
  Username: uname,
  Password: upass
  };

  ref = database.ref('Konten');
  ref.push(data);

   document.getElementById("uname").value="";
   document.getElementById("upass").value="";

}

function errData(err) {
  console.log('Error!');
  console.log(err);
}

function gotData(data) {
  console.log('hi');
  logi = 0;
usname = document.getElementById("uname").value;
uspass = document.getElementById("upass").value;
  console.log(usname,uspass);
  var Konten = data.val();
  keys = Object.keys(Konten);
  console.log(keys,uname,upass);
  for (var i = 0; i < keys.length; i++) {
    k = keys[i];
    if (usname ==  Konten[k].uname || uspass == Konten[k].upass) {
      logi = 1;
    }
  }
  if (logi == 1) {
    alert('Anmeldung erfolgreich');


  }
  if (logi == 0) {
    alert('Anmeldung fehlgeschlagen');
  }

}
