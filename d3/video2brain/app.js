var myFirebaseRef;
var chart;
var charData=[];
$(function(){
    myFirebaseRef = new Firebase("https://votaciones-8a021.firebaseio.com/");
    requestData();
});

requestData = function(){
    myFirebaseRef.on('value', function(data){
        var comidas = data.val();
        console.log(comidas);
    })
}