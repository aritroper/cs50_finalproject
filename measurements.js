// Get data
// https://www.fusioncharts.com/dev/using-with-server-side-languages/tutorials/php-mysql-charts
$(function(){
  $.ajax({
    url: 'http://localhost/table_data.php',
    type: 'GET',
    success : function(data) {
      createTableByJqueryEach(data);
    }
  });
});

/**
Creates table dynamically from data.
https://www.codexpedia.com/php/create-html-table-by-jquery-ajax-php/
**/
function createTableByJqueryEach(data)
{
  var eTable="<table class='table'><thead><tr><th scope='col'>Measurement</th><th scope='col'>Time Stamp</th><th scope='col'>Voltage (volts)</th><th scope='col'>Current (amps)</th><th scope='col'>Wattage (watts)</th></tr></thead>";
   eTable += "<tbody>";
  $.each(data,function(index, row){
    eTable += "<tr>";
    $.each(row,function(key,value){
      eTable += "<td>"+value+"</td>";
    });
    eTable += "</tr>";
  });
  eTable += "</tbody></table>";
  $('#eachTable').html(eTable);
}