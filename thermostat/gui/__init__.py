import pygame
import colors

DEGREE = u"\u00b0"

pygame.init()
pygame.mouse.set_visible(False)
screen = pygame.display.set_mode((320, 240))

def eraseScreen(heaterIsOn):
	color = colors.BACKGROUND_HEATER_OFF
	
	if heaterIsOn:
		color = colors.BACKGROUND_HEATER_ON
		
	screen.fill(color)
	
def updateScreen():
	pygame.display.update()
	
	
class Temperature(object):
	def __init__(self, coords, fontSize, temperature):
		text = pygame.font.Font(None, fontSize).render("%s"%temperature + "%s"%DEGREE, True, colors.TEXT)
		self.rect = text.get_rect(center=coords)
		screen.blit(text, self.rect)
		
class Text(object):
	def __init__(self, coords, fontSize, label):
		text = pygame.font.Font(None, fontSize).render("%s"%label, True, colors.TEXT_ACCENT)
		rect = text.get_rect(center=coords)
		screen.blit(text, rect)
	
class Button(object):
	def __init__(self, direction, coords):
		x = 10
		y = 6
		
		if direction == 'down':
			x = -x
			y = -y
			
		polygon = [[ coords[0] - x, coords[1] + y ], [ coords[0], coords[1] - x ], [ coords[0] + x, coords[1] + y ]]
			
		self.rect = pygame.draw.circle(screen, colors.SECONDARY, coords, 20, 0)
		pygame.draw.polygon(screen, colors.SECONDARY_ACCENT, polygon)	

class ButtonUp(Button):
	def __init__(self, coords):
		Button.__init__(self, "up", coords)
		

class ButtonDown(Button):
	def __init__(self, coords):
		Button.__init__(self, "down", coords)

class Menu(object):
	def __init__(self, coords):
		self.rect = pygame.draw.circle(screen, colors.SECONDARY, coords, 20, 0)
