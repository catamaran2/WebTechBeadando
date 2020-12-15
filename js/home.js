$(document).ready(function (){
    $("#content").load("carList.html")


    $.each($(".menuButton"), function(mbIndex, mbValue){
        $(mbValue).click(function(event){
            event.preventDefault()
            if($(this).find('a').attr("href")=="home.html"){
                open("home.html", "_self")
            } else {
                $("#content").load($(this).find('a').attr("href"));
            }

        })
    })
})