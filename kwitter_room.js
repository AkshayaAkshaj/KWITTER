
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCOV_G7nGoWYZkJ64Dc-aOwH1OwCtQcqfM",
      authDomain: "kwitter-e5529.firebaseapp.com",
      databaseURL: "https://kwitter-e5529-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5529",
      storageBucket: "kwitter-e5529.appspot.com",
      messagingSenderId: "780267206450",
      appId: "1:780267206450:web:878799c8dd8a129774492b"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room names-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function add_room(){
  room_name=document.getElementById("room_name").value ;
  localStorage.setItem("room_name",room_name);
  
  firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
  });
  window.location="kwitter_page.html";

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}



