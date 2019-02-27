var chartData;

// Get data
//https://www.fusioncharts.com/dev/using-with-server-side-languages/tutorials/php-mysql-charts
$(function(){
  $.ajax({
    url: 'http://localhost/chart_data.php',
    type: 'GET',
    success : function(data) {
      getCostOfElectricity("San Francisco");
      chartData = data;
      calculateIntegral(chartData);
      var chartProperties = 
      {
        "caption": "Kilowatts over Time",
        "subCaption": "Taken in 1 minute intervals",
        "theme": "zune",
        "showhovereffect": "1",
        "xAxisName": "1 minute intervals (starting at t=0)",
        "yAxisName": "Kilowatts (actual wattage divided by factor of 100,000,000)",
        "showValues": "0",
        "drawCrossLine": "1",
        "crossLineAlpha": "100",
        "crossLineColor": "#cc3300"
      };
      var apiChart = new FusionCharts({
        type: 'area2d',
        renderAt: 'chart-container',
        width: '100%',
        height: '500',
        dataFormat: 'json',
        dataSource: {
          "chart": chartProperties,
          "data": chartData
        }
      });
      apiChart.render();
    }
  });
});

/**
On button click.
**/
function changeLocation()
{
  getCostOfElectricity($("#location_input").val())
  document.getElementById("location_input").value = ""
}

/**
Find the cost of residential electricity in kilowatts/hour of place.
**/
function getCostOfElectricity(place)
{
  // Send request to the database for electricity prices
  const Http = new XMLHttpRequest();
  const url = "https://developer.nrel.gov/api/utility_rates/v3.json?api_key=PqtRy4F6eyIGksgqlPrVS2K7o5ZKkp796XN8WFtC&address="+place;
  Http.open("GET", url, true);
  Http.send();

  // On recieving response
  Http.onreadystatechange=(e)=>{
    e.preventDefault();
    var response = JSON.parse(Http.responseText); // Parses the rspoonse
    if(response.outputs.utility_name != "no data" && response.outputs.utility_name != undefined)
    {
      // Valid input
      document.getElementById("cost_of_electrcity").innerHTML = "Cost of Electricity: $" + response.outputs.residential + " per kilowatt hour for " + response.outputs.utility_name;
      document.getElementById("money_saved").innerHTML = "Total Money Saved: $" + Math.round((parseFloat(response.outputs.residential) * calculateIntegral()) * 100) / 100;
    }
  };
}

/**
Calculates the integral under the curve of kilowatts over time to calculate power.
**/
function calculateIntegral()
{
  var list = JSON.parse(JSON.stringify(chartData));
  var total = 0;

  for(var i = 1; i < list.length - 1; i++) {
    var y2 = parseFloat(list[i].value);
    var y1 = parseFloat(list[i-1].value);
    if(y2 > y1) {
      total += (y2-y1)/120 + (y1/60);
    }
    else if(y2 < y1)
    {
      total += (y1-y2)/10+(y2/60);
    }
    else
    {
      total += y1/60;
    }
  }

  total = Math.round((total*100)) / 100;
  document.getElementById("power_display").innerHTML = " Total Kilowatt Hrs Generated: " + total + " kilowatt hours";
  return total;
}

