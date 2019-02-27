from time import sleep
from ina219 import INA219
from datetime import datetime

# https://www.youtube.com/watch?v=BgShCD7xT_A
# https://www.w3schools.com/python/python_mysql_insert.asp
# Connect to Database
mydb = mysql.connector.connect(
	host="mysolarpanel.info"
	user="mysolar7_user1"
	passwd="Arimei123*"
	database="mysolar7_Tracker"
)

mycursor = mydb.cursor()

# Configure INA
ina = INA219(shunt_ohms=0.1, max_espected_amps=0.6,address=0x40)
ina.configure(voltage_range=ina.RANGE_16V, gain=ina.GAIN_AUTO, 
	bus_adc=ina.ADC_128SAMP,shunt_adc=ina.ADC_128SAMP)

try:
	# Repeat Forever
	while 1:
		v = ina.voltage() # Read in voltage
		i = ina.current() # Read in current
		p = ina.power() # Read in kilowatts
		sql = "INSERT INTO Tracker (Time, Voltage, Current, Wattage) VALUES (%s, %s, %s, %s)" # Insert into DB
		val = (str(datetime.now()), str(v), str(i), str(p/1000))
		mycursor.execute(sql, val)
		mydb.commit()
		print("record inserted.")
		sleep(50)
# If Ctrl + C hit
except KeyboardInterrupt:
	print("\nExiting...")