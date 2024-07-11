let input = "#myInput"
let table = "#myTable tr"

$(document).ready(function(){
    $(input).on("keyup", function() {
        let searchValue = $(this).val().toLowerCase();
        $(table).filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1)
        });
    });
    loadXMLDoc();
});



function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            loadTable(this);
        }
    }
    xmlhttp.open("GET", "cd_catalog.xml", true);
    xmlhttp.send();
}

function loadTable(xml) {
    let xmlDoc = xml.responseXML;
    let cdTable = "<tr> <th>Artist</th> <th>Album Title</th> </tr>";
    let list = xmlDoc.getElementsByTagName("CD");

    for(let i = 0; i < list.length; i++){
        cdTable += "<tr><td>" +
        list[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" +
        list[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("myTable").innerHTML = cdTable;


}

