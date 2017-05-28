var a = prompt('Wpisz wartosc a'), 
	b = prompt('Wpisz wartosc b'), 
	value = (a * a) + (2 * a * b) - (b * b);

console.log("wynik to " + value)


if ( value < 0) {
alert("wynik ujemny")
}	
else if ( value == 0) {
alert("wynik równy zero!")
}
else {
alert("wynik dodatni")
}
