## Raspberry ##
Download NOOBS  
Format SD card  
Uncompress NOOBS  
Copy content of NOOBS onto SD card  

Connect the Pi to Monitor, mouse and keyboard  
Power on the Pi with the SD Card and install Raspbian  
After rebooting set keybard layout  
Connect to Wifi  
Shutdown the Pi  

**From here, the Pi may be disconnected from the monitor, the mouse and the keyboard as it is now possible to access it through an ssh connection.**

## Update the Pi ##
`sudo apt-get update`  
`sudo apt-get upgrade`

## Install a vnc server ##
`sudo apt-get install x11vnc`  

### Select a password ###
`x11vnc -storepasswd`

### Generate a script file to start up a X-server ###
`x11vnc -forever -bg -usepw -httpdir /usr/share/vnc-java/ -httpport 5901 -display :0`  
`chmod +x ~/x11vnc.sh`  

### Start a X-server ###
`./x11vnc.sh`  

### Stop the X-server ###
`pgrep x11vnc`  
`kill XXXX` 

**From here, the Pi Desktop UI is accessible from other computers on the local network using VNC.**

## Node, npm and nvm ##
### Install npm ###
`sudo apt-get install npm`  

### Install nvm ####
`git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout v0.25.4`  
`sudo nano ~/.bashrc`` and add at then end ``source ~/.nvm/nvm.sh`  
`sudo nano ~/.profile`` and add at then end ``source ~/.nvm/nvm.sh`  
`sudo reboot`  

### Install NodeJs 4.4.1 ###
`nvm install 4.4.1`  
`npm update -g npm` 

## Install project Nestor ##
`cd`  
`mkdir Projects`  
`git clone https://github.com/olimungo/nestor.git`  

### Start back-end ###
`cd nestor/back-end`  
`npm install`  
`npm start`  

### Start front-end ###
`cd nestor/front-end`  
`npm install`  
`npm start` (on Mac or Windows)  
`npm run pi` (on Pi)  


