var cases = /*input the number of cases*/;
var recovered = /*input the number of recovered student*/;
setInterval(function(){
	if(cases > 0){
		cases--;
    	recovered++;
    	stringCases = cases.toString();
    	stringRecovered = recovered.toString();
    	var newCases = (((((((stringCases.charAt(0).concat(",")).concat(stringCases.charAt(1))).concat(stringCases.charAt(2))).concat(stringCases.charAt(3))).concat(",")).concat(stringCases.charAt(4)).concat(stringCases.charAt(5))).concat(stringCases.charAt(6))).concat(stringCases.charAt(7));
    	var newRecovered = (((((((stringRecovered.charAt(0).concat(",")).concat(stringRecovered.charAt(1))).concat(stringRecovered.charAt(2))).concat(stringRecovered.charAt(3))).concat(",")).concat(stringRecovered.charAt(4)).concat(stringRecovered.charAt(5))).concat(stringRecovered.charAt(6))).concat(stringRecovered.charAt(7));
    	document.getElementById("cases").innerHTML = newCases;
    	document.getElementById("recovered").innerHTML = newRecovered;
		}
});