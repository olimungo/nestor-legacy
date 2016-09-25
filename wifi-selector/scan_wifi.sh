sudo iwlist wlan0 scan | grep "ESSID" | cut -d: -d\" -f2
