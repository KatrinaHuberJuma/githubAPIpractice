$(document).ready(function(){
    $("button").click(function(){
        $.get("https://api.github.com/users/katrinahuberjuma", displayName)
    });
    
});

function displayName(data){
    $("<h1>"+data.name+"</h1>").replaceAll("#target");	
}