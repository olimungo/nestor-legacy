import manual, wifi

class ManualPage(object):
	def __init__(self, probe, heater, gui):
		self.manualPage = manual.Page(probe, heater, gui)
		
class WifiPage(object):
	def __init__(self, gui):
		self.wifi = wifi.Page(gui)
