class Probe():
	def __init__(self):
		print "ok"
		
	def getTemperature(self):
		probeFile = open('temperature-mock-up.txt', 'r')
		return float(probeFile.read())
		
