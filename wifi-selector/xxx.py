import pygame, time
from subprocess import check_output

result = check_output(["sh", "scan_wifi.sh"])

for line in result.splitlines():
	if line is not "":
		print(line)

WHITE = (255,255,255)

pygame.init()
pygame.mouse.set_visible(False)
lcd = pygame.display.set_mode((320, 240))
lcd.fill((0,0,0))
pygame.display.update()
 
font_big = pygame.font.Font(None, 20)

touch_buttons = {result:(80,60), '4 on':(240,60), '17 off':(80,180), '4 off':(240,180)}
 
for k,v in touch_buttons.items():
    text_surface = font_big.render('%s'%k, True, WHITE)
    rect = text_surface.get_rect(center=v)
    lcd.blit(text_surface, rect)

pygame.display.update()

while True:
	time.sleep(0.1)
