// vanilla javascript
//var xmlhttp = new XMLHttpRequest();
//xmlhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        var myObj = JSON.parse(this.responseText);
//        document.getElementById('icon').innerHTML = myObj.weather[0].icon;
//        document.getElementById("name").innerHTML = myObj.name;
//        document.getElementById('city').innerHTML = myObj.main.temp;
//        document.getElementById('weather').innerHTML = myObj.weather[0].description
//    }
//};
//xmlhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Oklahoma,%20Oklahoma%20city&units=imperial&APPID=71baf7e436d5f64edb9036bb3dacff3e");
//xmlhttp.send();
var info = 'oklahoma';
$('#input').keypress(function(e){
    if(e.which === 13){
    return false;
    }
})
$('#click').on('click',function(){
    info = $('#input').val();
     $.get("http://api.openweathermap.org/data/2.5/weather?q="+info+"&units=imperial&APPID=71baf7e436d5f64edb9036bb3dacff3e", function(obj){
    var iconCode = obj.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/"+iconCode+".png";
    $('#image').attr('src', iconUrl);     
         
         
    $('#title').text(obj.name)
    $('#temp').text(obj.main.temp+' F') 
    $('#low').text(obj.main.temp_min+' F')
    $('#high').text(obj.main.temp_max+' F')
    $('#report').text(obj.weather[0].description)     
})
})

 $.get("http://api.openweathermap.org/data/2.5/weather?q="+info+"&units=imperial&APPID=71baf7e436d5f64edb9036bb3dacff3e", function(obj){
     var iconCode = obj.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/"+iconCode+".png";
    $('#image').attr('src', iconUrl); 
     
    $('#title').text(obj.name)
    $('#temp').text(obj.main.temp) 
    $('#low').text(obj.main.temp_min)
    $('#high').text(obj.main.temp_max)
    $('#report').text(obj.weather[0].description)
})
     