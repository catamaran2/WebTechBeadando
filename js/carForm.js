$(document).ready(function(){

    let manufacturerNames = []

    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        $.each(data, function (key, value){
            manufacturerNames.push(value.name)
        })

        for(var man of manufacturerNames) {
            $("#carManufacturerId").append('<option>' + man + '</option>');
        }
        console.log(manufacturerNames+ "manufactureNames");
    })

    $("#carManufacturerId").empty();

})



function myFunctionCar() {


    var carName = document.getElementById("carNameId").value;
    var consumption = document.getElementById("consumptionId").value;
    var color = document.getElementById("colorId").value;
    var carManufacturer = document.getElementById("carManufacturerId").value;
    var avaiable = document.getElementById("avaiableId").value;
    var year = document.getElementById("yearId").value;
    var horsepower = document.getElementById("horsepowerId").value;

    const response = {
        "name": carName,
        "consumption": consumption,
        "color": color,
        "manufacturer": carManufacturer,
        "avaiable": avaiable,
        "year": year,
        "horsepower": horsepower
    }

    $.ajax
    ({
        type: "POST",
        url: 'https://webtechcars.herokuapp.com/api/cars',
        dataType: 'json',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(response),
    })

}