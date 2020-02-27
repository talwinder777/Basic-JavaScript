alert("I am here");
var database = [
    {
        userName: "talli",
        password: "talli"
    },

    {
        userName: "sandy",
        password: "talli"
    },
    {
        userName: "sandy",
        password: "sandy"
    }
];
var newsFeed = [
    {
        userName: "varun",
        feed: "chakllo"
    },
    {
        userName: "Sandyy",
        feed: "so chukka hain"
    }
];

var user = prompt("what's your user name");
var pass = prompt("type in your password");

function isUserValid(username, password){
    for(var i = 0; i < database.length; i++){
        if(database[i].userName === username && database[i].password === password)
            return true;
    }
    return false;
}
function signIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsFeed);
    }
    else{
        console.log("wrong userName or password!! Try again");
    }
}
signIn(user, pass);