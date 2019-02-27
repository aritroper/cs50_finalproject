When designing this project we used mySQL, php, HTML/CSS, JavaScript, and Python. Our python script lives on our raspberry pi and is
responsible for reading in measurements from the INA 219 in respects to voltage, current, and amps.
The python script sleeps for about a minute to get many data points over the course of the day. The python script then connects to our mySQL database and then INSERTS the data point into our database “Tracker.”
We are using the Bluehost web hosting platform because the Bluehost web hosting platform came as a package deal with a domain name, a file manager, and a database.
All of our php, HTML/CSS, JavaScript files live on the Bluehost web platform. In deciding how to “design” our website, we decided to keep our files separate from overlapping.
For example, you could write HTML in php, but for readability purposes, we didn’t want the php logic in the same document as our HTML. I
n the same vein, we didn’t want our HTML hierarchy in the same file as the JavaScript logic. This method of organizing files made it easier to read code and also pinpoint errors.
For example, if the link to the php file (i.e. https:www/mysolarpanel.info/table-data.php) returned proper JSON, but the graph didn’t show up on the website, then we could pinpoint the error to the JavaScript (the bridge between the php and the HTML).
In another example, if the HTML file showed a graph with missing data, then we could pinpoint the error to the php file. Basically, the way our hierarchy can be illustrated below:
The HTML file calls the JavaScript file which constructs a table or a graph based on the information it gets from the php file.
Only the php files communicate with the mySQL database. The JavaScript files had all the logic driving our website:
communicating with the php files, getting relevant information about the cost of electricity in a US city, and calculating the integral of the area under the graph showing kilowatts over time (kilowatt hours).
For the webpage and the graphs we used two well established frameworks: Bootstrap and Fusioncharts. From a design standpoint, we this because there was a lot of existing documentation and resources for these frameworks,
and also these frameworks offered really good-looking and adaptive UI.
To summarize, we used platforms such as Bluehost, Bootstrap, and Fusioncharts, because there was a lot of documentation on these platforms to help us code our project. Bluehost also offered us a
package deal with a domain name, database, and filemanager to host our php, Javascript, HTML/CSS files. We separated these files and were careful not to intersect these scripts to help readability and error-detection.
