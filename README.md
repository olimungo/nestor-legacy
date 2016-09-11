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

## Update the Pi
`sudo apt-get update`  
`sudo apt-get upgrade`

## Install a vnc server
`sudo apt-get install x11vnc`  

### Select a password
`x11vnc -storepasswd`

### Generate a script file to start up a X-server
`x11vnc -forever -bg -usepw -httpdir /usr/share/vnc-java/ -httpport 5901 -display :0`  
`chmod +x ~/x11vnc.sh`  

### Start a X-server
`./x11vnc.sh`  

### Stop the X-server (if needed)
`pgrep x11vnc`  
`kill XXXX`

### Start the X-server when booting the Pi

Edit the file _/boot/config.txt_ and uncomment the following lines:

`framebuffer_width=1280`  
`framebuffer_height=720`  

These lines are needed because when the hdmi cable is not plugged, the Pi cannot determine the screen resolution and so selects the smallest one (640x480).

If it doesn't exist, create the folder _/home/pi/.config/autostart_.
Now, create a file named _x11server.desktop_, edit it and add the following lines:

```
[Desktop Entry]
Type=Application
Name=x11server
Exec=/usr/bin/x11vnc -forever -bg -usepw -httpdir /usr/share/vnc-java/ -httpport 5901 -display :0
StartupNotify=false
```

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

### Setup the gpio on the Pi

Edit the file _/boot/config.txt_ and add the following line

`dtoverlay=w1-gpio`  

Reboot the Pi and type the following commands:

`sudo modprobe w1-gpio`  
`sudo modprobe w1-therm`

Check that the sensor is correctly loaded:  

`ll /sys/bus/w1/devices`  
`cat /sys/bus/w1/devices/device/w1_slave`

Replace *device* by the name of the folder starting with _28-_.

The output should be something like this:

```
91 01 4b 46 7f ff 0f 10 25 : crc=25 YES  
91 01 4b 46 7f ff 0f 10 25 t=25062
```

### Start back-end ###
`cd nestor/back-end`  
`npm install`  
`npm start`  

### Start front-end ###
`cd nestor/front-end`  
`npm install`  
`npm start` (on Mac or Windows)  
`npm run pi` (on Pi)  


