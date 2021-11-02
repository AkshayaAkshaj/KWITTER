

function add_user(){
    user_name=document.getElementById("user_name").value ;
    
    window.location="kwitter_room.html";
    localStorage.setItem("user_name",user_name);
    

}