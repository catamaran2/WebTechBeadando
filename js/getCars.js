$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
        var table =$("#carsTable");
        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var nameCell = $('<td>'+value.name+'</td>');
            var consumptionCell = $('<td>'+value.consumption+'</td>');
            var colorCell = $('<td>'+value.color+'</td>');
            var manufacturerCell = $('<td>'+value.manufacturer+'</td>');
            var avaiableCell = $('<td>'+value.avaiable+'</td>');
            var yearCell = $('<td>'+value.year+'</td>');
            var horsepowerCell = $('<td>'+value.horsepower+'</td>');
            var deletButtonCell=$('<td><button onClick="deleteCar(\'' + value._id + '\')">Törlés</button></td>');
            $(row).append(nameCell);
            $(row).append(consumptionCell);
            $(row).append(colorCell);
            $(row).append(manufacturerCell);
            $(row).append(avaiableCell);
            $(row).append(yearCell);
            $(row).append(horsepowerCell);
            $(row).append(deletButtonCell);

            $(table).append(row);
        })
    })

})

function deleteCar(carId){
    $.ajax({
        type: "DELETE",
        url: 'https://webtechcars.herokuapp.com/api/cars/'+carId,
    })
};