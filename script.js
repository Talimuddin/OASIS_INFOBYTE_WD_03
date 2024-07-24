function convert() {
	var temp = document.getElementById("temp").value;
	var unit = document.getElementById("unit").value;
	var result;
	
	if (unit == "C") {
		result = (temp * 9/5) + 32;
		document.getElementById("result").innerHTML = temp + "°C is equal to " + result + "°F";
	} else {
		result = (temp - 32) * 5/9;
		document.getElementById("result").innerHTML = temp + "°F is equal to " + result + "°C";
	}
}
