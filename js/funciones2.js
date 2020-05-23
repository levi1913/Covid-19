
var info = document.querySelector(".info");

var infect=document.querySelector("#infectados");
var muertos=document.querySelector("#muertos");
var recuperados=document.querySelector("#recuperados");
var nuevos=document.querySelector("#nuevos");
var n_m=document.querySelector("#n_muertos");



total();
llamar();
llamar_mexico();

function total(){
    
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "d423a8bdcfmshf99ab32e0573f48p1df31cjsnf607a14c0a34"
	}
    })
    .then(data => data.json())
    .then(data => {
        alert("Errores solucionados gracias a un usuario :)")
       document.querySelector(".cargando").style.display = "none";
       document.querySelector(".cargando1").style.display = "none";
       document.querySelector(".cargando2").style.display = "none";
       document.querySelector(".cargando3").style.display = "none";
       document.querySelector(".cargando4").style.display = "none";
       totales_info(data)
    })
    .catch(err => {
        console.log(err);
});
}
function totales_info(data){
   
    
    infect.innerHTML +='<p>'+ data.total_cases + '</p>'
    muertos.innerHTML +='<p>'+ data.total_deaths + '</p>'
    recuperados.innerHTML +='<p>'+ data.total_recovered + '</p>'
    nuevos.innerHTML +='<p>'+ data.new_cases + '</p>'
    n_m.innerHTML +='<p>'+ data.new_deaths + '</p>'

}

function llamar(){
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "d423a8bdcfmshf99ab32e0573f48p1df31cjsnf607a14c0a34"
        }
    })
    .then(response => response.json())
    .then(response => {
       
        totales_lista(response);
        
    })
    .catch(err => {
        console.log(err);
    });  
}

function totales_lista(response){
    for(let i = 0; i<response.countries_stat.length;i++ ){
        info.innerHTML += '<tr>'+
                          '<td>'+ response.countries_stat[i].country_name + '</td>'+
                          '<td>'+ response.countries_stat[i].cases + '</td>' +
                          '<td>'+ response.countries_stat[i].deaths + '</td>' +
                          '<td>'+ response.countries_stat[i].total_recovered + '</td>'
                          '</tr>'; 
    }
}

function llamar_mexico(){
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Mexico", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "d423a8bdcfmshf99ab32e0573f48p1df31cjsnf607a14c0a34"
        }
    })
    .then(response => response.json())
    .then(response => {
       
        mexico(response);
    })
    .catch(err => {
        console.log(err);
    });

}

function mexico(response){
    
    let mexico = document.getElementById("mexico");

    mexico.innerHTML += '<tr>'+
                        '<td>'+ response.latest_stat_by_country[0].total_cases + '</td>'+
                        '<td>'+ response.latest_stat_by_country[0].active_cases + '</td>'+
                        '<td>'+ response.latest_stat_by_country[0].total_deaths + '</td>'+
                        '<td>'+ response.latest_stat_by_country[0].total_recovered + '</td>'+
                        '</tr>' 

    
}
    