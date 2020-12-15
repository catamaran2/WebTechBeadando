function myFunctionManufacturer() {

    var manufacturerName = document.getElementById("manufacturerNameId").value;
    var country = document.getElementById("manufacturerCountryId").value;
    var founded = document.getElementById("manufacturerDateId").value;

    const manufacturerResponse = {
        "name": manufacturerName,
        "country": country,
        "founded": founded

    }

    $.ajax
    ({
        type: "POST",
        url: 'https://webtechcars.herokuapp.com/api/manufacturers',
        dataType: 'json',
        async: false,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(manufacturerResponse),
    })

}