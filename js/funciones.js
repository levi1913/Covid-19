var resultados = document.querySelector(".resultados")
var info = document.querySelector(".info")

fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "d423a8bdcfmshf99ab32e0573f48p1df31cjsnf607a14c0a34"
	}
})
.then(response => response.json())
.then(response => {
    tabla(response);
})
.catch(err => {
	console.log(err);
});

function tabla(response){
    info.innerHTML = ''
    for(let i = 0; i < response.data.covid19Stats.length; i++){
        console.log(response.data.covid19Stats[i]);
        info.innerHTML += '<tr>'+
                          '<td>'+ response.data.covid19Stats[i].country+ '</td>' +
                          '<td>'+ response.data.covid19Stats[i].province+ '</td>' +
                          '<td>'+ response.data.covid19Stats[i].confirmed + '</td>' +
                          '<td>'+ response.data.covid19Stats[i].deaths + '</td>' +
                          '<td>'+ response.data.covid19Stats[i].recovered + '</td>'
                          '</tr>'; 
    }
  
}

               