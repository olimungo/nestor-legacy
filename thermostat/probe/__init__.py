class ProbeMockUp(object):
	def getTemperature(self):
		probeFile = open('/home/pi/Projects/nestor/thermostat/probe/probeMockUp.txt', 'r')
		return float(probeFile.read())
		
class Probe(object):
	def __init(self):
		print "Real Probe to be implemented!"
