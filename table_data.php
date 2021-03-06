<?php
    $servername = "mysolarpanel.info";
    $username = "mysolar7_user1";
    $password = "Arimei123*";
    $dbname = "mysolar7_Tracker";

    // Connect to Database
    $connection = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Get all rows
    $sql = "SELECT * FROM Tracker";
    $result = mysqli_query($connection, $sql);
    
    $jsonArray = array();
    
    // Create array with all rows
    while($row = mysqli_fetch_array($result))
    {
        $jsonArrayItem = array();
        $jsonArrayItem["measurement"] = $row["Measurement"];
        $jsonArrayItem["time"] = $row["Time"];
        $jsonArrayItem["voltage"] = $row["Voltage"];
        $jsonArrayItem["current"] = $row["Current"];
        $jsonArrayItem["wattage"] = $row["Wattage"];
        array_push($jsonArray, $jsonArrayItem);
    }
    
    // Close connection
    mysqli_close($connection);
    header('Content-type: application/json');
    
    // Create JSON object
    echo json_encode($jsonArray);
    
    //https://www.fusioncharts.com/dev/using-with-server-side-languages/tutorials/php-mysql-charts
?>
