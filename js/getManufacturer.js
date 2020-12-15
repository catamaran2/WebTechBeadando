$(document).ready(function() {
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        var table =$("#manufacturerTable");
        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var nameCell = $('<td>'+value.name+'</td>');
            var countryCell = $('<td>'+value.country+'</td>');
            var foundedCell = $('<td>'+value.founded+'</td>');
            var deleteButtonCell=$('<td><button onClick="deleteManufacturer(\'' + value._id + '\')">Törlés</button></td>');
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(foundedCell);
            $(row).append(deleteButtonCell);

            $(table).append(row);
        })
    })

})

function deleteManufacturer(manufacturerId){
    $.ajax({
        type: "DELETE",
        url: 'https://webtechcars.herokuapp.com/api/manufacturers/'+manufacturerId,
    })
};