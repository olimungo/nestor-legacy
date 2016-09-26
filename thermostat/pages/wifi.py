import time, pygame, sys
from pygame.locals import *

class Page(object):
	def __init__(self, gui):
		self.gui = gui
		self.dirtyDisplay = True
		self.stayOnPage = True
		
		self.drawComponents()
		
		self.mainLoop()
		
	def mainLoop(self):
		while self.stayOnPage:
			time.sleep(.1)
			
			self.checkDirtyDisplay()

	def drawComponents(self):
		self.gui.Text((170, 158), 18, "WIFI")
	
	def checkDirtyDisplay(self):
		if self.dirtyDisplay:
			self.dirtyDisplay = False
	
			self.gui.eraseScreen(False)
			self.drawComponents()
			self.gui.updateScreen()

