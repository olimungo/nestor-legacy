# -*- coding: utf-8 -*-

import time, sys
import probe, heater, gui, pages

class App(object):
	def __init__(self):	
		self.controlManualPage = pages.ManualPage(probe.ProbeMockUp(), heater.Heater(), gui)
		self.wifi = pages.WifiPage(gui)

App()
