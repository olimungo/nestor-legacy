# -*- coding: utf-8 -*-

import time, pygame
import gui
from heater import Heater
from probeMockUp import Probe

probe = Probe()
heater = Heater()
currentTemperature = 0
targetTemperature = 18
dirtyDisplay = True
	
def drawComponents(currentTemperature, targetTemperature):
	gui.Temperature((60, 35), 45, currentTemperature)
	gui.Text((60, 57), 13, "CURRENT")
	
	gui.Temperature((210, 130), 70, targetTemperature)
	gui.Text((210, 158), 18, "TARGET")
	
	buttonUp = gui.ButtonUp((210, 70))
	buttonDown = gui.ButtonDown((210, 195))
	
	return buttonUp, buttonDown


buttonUp, buttonDown = drawComponents(currentTemperature, targetTemperature);

while True:
	time.sleep(.1)
	
	events = pygame.event.get()
	for event in events:
		if event.type == pygame.MOUSEBUTTONUP:
			if buttonUp.rect.collidepoint(event.pos):
				dirtyDisplay = True
				targetTemperature = targetTemperature + .5
			elif buttonDown.rect.collidepoint(event.pos):
				if targetTemperature > 0:
					dirtyDisplay = True
					targetTemperature = targetTemperature - .5

	temperature = probe.getTemperature()
	
	if temperature <> currentTemperature:
		dirtyDisplay = True
		currentTemperature = temperature
			
	if dirtyDisplay:
		dirtyDisplay = False
		
		if currentTemperature < targetTemperature and heater.isOff():
			heater.on()
		elif currentTemperature >= targetTemperature and heater.isOn():
			heater.off()

		gui.eraseScreen(heater.isOn())
		buttonUp, buttonDown = drawComponents(currentTemperature, targetTemperature);
		gui.updateScreen()
