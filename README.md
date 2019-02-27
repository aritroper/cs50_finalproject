FILES WE MADE:
app.py,
chart_data.php,
table_data.php,
index.html,
measurements.html,
savings.js,
measurements.js,
DESIGN.md,
README.md,
Tracker.sql

*all other files in /implementation are libraries/frameworks that are necessary to running the site but are not ours.

Hello there!

Welcome to Solar50 (https://www.mysolarpanel.info/saving). Here, we have created a website that monitors the voltage, current, and wattage from a
solar cell. We made this project in order to demonstrate how a user could view their solar panel's production
on the web, so that they can access it from any remote location. Furthermore, we wanted to show to users how much
money they are saving by using their solar panel to create electricity instead of buying electricity. To do this,
we connected to an API that holds the average annual cost of electricity of different areas.

So, if one were to implement this project on their own, they would have to start with the hardware. Although we only
had one solar cell, an individual could technically use any array of solar cells that they desired (although their sensor
circuit would have to be changed based on the output of the panel). In our case, we had a single solar cell with the
specifications of 5 Volts and 0.5 amps. As a result, we used the INA219 chip to connect to the solar cell and two LEDs
in order to measure their current, voltage, and wattage.
WE
Next, the INA219 chip was connected to the raspberry pi as according to specifications. The Python file was written to
take measurements of the data values and send them to an already made online database via MySQL. To do this, the user
must enter the name of the database, the username of the user that has access to the database, the password of the database,
and the host of the database. Our actual database included the following columns: Measurement (which was self-incrementing),
Time (automatic via Timestamp), Voltage, Current, and Wattage. So, the Python script sends measurements of voltage, current,
and wattage of the cell every minute to the online database. This completes the device side of the project.

In order to actually access the information, html, php, jquery, and javascript were used on our website. The website is called
mysolarpanel.info. Once the user enters the website, they are greeted by a couple of sentences. Upon clicking "Find My Electricity
Savings" the user is directed to a page that shows a graph of the power of the cell over time. We only ran our cell for a short period
of time, as can be seen in the graph, because there we had to use a computer hotspot as a wifi source as HarvardSecure did not work.

The graph, however, generates the power over time for all entries in the online database. Then, a script that we wrote calculates
the area underneath the graph to calculate the total kilowatt-hours since the device started being monitored. The user then can input
their location, click go, and the amount of money that they have saved since they started monitoring the device will be shown
(this is found by contacting an API with average costs of electricity per region). In this way, the page shows the user both how much
electrcity their solar cell has outputted, and how much money they have saved. In order to actually show a value for kilowatt-hours and
money saved on the website, we multiplied our watts by a very large number, in order to account for the small size of the solar cell,
the extremely short time that we monitored the cell for, and the very cheap price of electricity per kilowatt-hour. It is important
to note that since the measurements are taken every minute, these calculations are simply approximations of how much the solar cell actually
outputted.

If the user wants to see the raw data sent from the cell, they can click on the page "My Device Measurements", where a simple
table displays all of the entries in the online database for the solar cell.

There you go! Now, if you have a solar cell connected to a raspberry pi and circuit, and you have our script that is modified to upload
to an already created MySQL database, our website pages could be easily edited to dispay your data as well. Here's to saving money and the
environment! But if you're just looking at our data, simply peruse the website as much as you want! Unfortunately it is not updating real
time because the pi is not consistently connected to the internet.
