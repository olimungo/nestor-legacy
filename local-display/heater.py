class Heater(object):
	def __init__(self):
		self.status = "off"
	
	def isOn(self):
		return self.status == "on"
		
	def isOff(self):
		return self.status == "off"
	
	def on(self):
		self.status = "on"
		print self.status
		
	def off(self):
		self.status = "off"
		print self.status
