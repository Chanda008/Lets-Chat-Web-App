var firebaseConfig = {
    apiKey: "AIzaSyByCv6BhyVO4DlZF7wRYEUZrn6g-2hlQQs",
    authDomain: "kwitter1-14625.firebaseapp.com",
    databaseURL: "https://kwitter1-14625-default-rtdb.firebaseio.com",
    projectId: "kwitter1-14625",
    storageBucket: "kwitter1-14625.appspot.com",
    messagingSenderId: "659586209307",
    appId: "1:659586209307:web:541d192ed4f137c2db8abe"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + ":";

  function addRoom(){
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("room name -" + Room_names);
    row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;

    
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "index.html";
}