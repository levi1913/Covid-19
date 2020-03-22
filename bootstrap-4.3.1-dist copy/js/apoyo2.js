x=false;

$("#b-cambio").click(function(){
if (x==false){
	$("#cambio").replaceWith('<ul id=cambio><li>Jason Momoa</li><li>39 años</li><li>Estados Unidos</li><li>Aquaman</li></ul>');
				x=true;
} else {
    $("#cambio").replaceWith('<img id=cambio src="imagenes/jason.jpg" width="200" height="300">');
				x=false;
			}
    
});


y=false;

$("#b-cambio1").click(function(){
if (y==false){
	$("#cambio1").replaceWith('<ul id=cambio1><li>Amber Head</li><li>33 años</li><li>Estados Unidos</li><li>Mera</li></ul>');
				y=true;
} else {
    $("#cambio1").replaceWith('<img id=cambio src="imagenes/amber.jpg" width="200" height="300">');
				y=false;
			}
    
});

z=false;

$("#b-cambio2").click(function(){
if (z==false){
	$("#cambio2").replaceWith('<ul id=cambio2><li>Patrick Willson</li><li>45 años</li><li>Estados Unidos</li><li>Ocean Master</li></ul>');
				z=true;
} else {
    $("#cambio2").replaceWith('<img id=cambio src="imagenes/patrick.jpg" width="200" height="300">');
				z=false;
			}
    
});

w=false;

$("#b-cambio3").click(function(){
if (w==false){
	$("#cambio3").replaceWith('<ul id=cambio3><li>Willem Defoe</li><li>63 años</li><li>Estados Unidos</li><li>Vulko</li></ul>');
				w=true;
} else {
    $("#cambio3").replaceWith('<img id=cambio src="imagenes/william.jpg" width="200" height="300">');
				w=false;
			}
    
});



