import time, pygame, sys
from pygame.locals import *

class Page(object):
	def __init__(self, probe, heater, gui):
		self.probe = probe
		self.heater = heater
		self.gui = gui
		self.currentTemperature = 0
		self.targetTemperature = 18
		self.dirtyDisplay = True
		self.stayOnPage = True
		
		self.drawComponents()
		
		self.mainLoop()
		
	def mainLoop(self):
		while self.stayOnPage:
			time.sleep(.1)
			
			events = pygame.event.get()
			for event in events:
				if event.type == pygame.MOUSEBUTTONUP:
					if self.buttonUp.rect.collidepoint(event.pos):
						self.dirtyDisplay = True
						self.targetTemperature = self.targetTemperature + .5
						
					elif self.buttonDown.rect.collidepoint(event.pos):
						if self.targetTemperature > 0:
							self.dirtyDisplay = True
							self.targetTemperature = self.targetTemperature - .5
					elif self.menu.rect.collidepoint(event.pos):
						self.stayOnPage = False
							
				if hasattr(event, 'key') and event.key == K_ESCAPE:
					sys.exit(0)
					
			self.getTemperature()

			
			self.checkDirtyDisplay()

	
	def drawComponents(self):
		self.gui.Temperature((60, 35), 45, self.currentTemperature)
		self.gui.Text((60, 57), 13, "CURRENT")
		
		self.gui.Temperature((170, 130), 70, self.targetTemperature)
		self.gui.Text((170, 158), 18, "TARGET")
		
		self.buttonUp = self.gui.ButtonUp((170, 70))
		self.buttonDown = self.gui.ButtonDown((170, 195))
		
		self.menu = self.gui.Menu((280, 40))
		
	def getTemperature(self):
		temperature = self.probe.getTemperature()
		
		if temperature <> self.currentTemperature:
			self.dirtyDisplay = True
			self.currentTemperature = temperature
	
	def checkDirtyDisplay(self):
		if self.dirtyDisplay:
			self.dirtyDisplay = False
			
			if self.currentTemperature < self.targetTemperature and self.heater.isOff():
				self.heater.on()
			elif self.currentTemperature >= self.targetTemperature and self.heater.isOn():
				self.heater.off()
	
			self.gui.eraseScreen(self.heater.isOn())
			self.drawComponents()
			self.gui.updateScreen()
