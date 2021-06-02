 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyClsheF9zaQYULFznlX3heW_EcSS-9KXyA",
      authDomain: "meglio-19ae9.firebaseapp.com",
      databaseURL: "https://meglio-19ae9-default-rtdb.firebaseio.com",
      projectId: "meglio-19ae9",
      storageBucket: "meglio-19ae9.appspot.com",
      messagingSenderId: "61500854730",
      appId: "1:61500854730:web:21eff260e36f6387b97f33"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("welcome_name").innerHTML = "Welcome " + user_name + "!";   
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function out()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function addRoom() 
{
      room_store = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_store).update({
            purpose : "adding room name"
        });
      
      localStorage.setItem("room_name", room_store);
      window.location = "kwitter_page.html";
}

function redirect(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}