function check() {
    // Retrieve values from input fields
    var a = parseInt(document.getElementById("n1").value) ;
    var b = parseInt(document.getElementById("n2").value) ;
    var c = parseInt(document.getElementById("n3").value) ;
    var d = parseInt(document.getElementById("n4").value) ;
    // Calculate total and percentage
    var total = a + b + c + d;
    var perc = (total * 100) / 400;

    // Display total marks and percentage
    document.getElementById("data").innerHTML = "Total Marks = " + total;
    document.getElementById("data1").innerHTML = "Percentage = " + perc + "%";

    // Display division or failure message
    if (perc >= 60) {
        document.getElementById("data2").innerHTML = "Congrats! You got First Division";
    } else if (perc >= 45) {
        document.getElementById("data2").innerHTML = "Congrats! You got Second Division";
    } else if (perc >= 33) {
        document.getElementById("data2").innerHTML = "Congrats! You got Third Division";
    } else {
        document.getElementById("data2").innerHTML = "YOU ARE FAIL!";
    }
}



