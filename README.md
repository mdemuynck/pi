SETUP
- sudo apt-get update
- sudo apt-get upgrade
- sudo apt-get install git
- sudo apt-get install npm
- git clone <this repository>
- go into directory
- npm install
- install lirc, see https://www.hackster.io/austin-stanton/creating-a-raspberry-pi-universal-remote-with-lirc-2fd581
  kernel updates, see: https://github.com/mtraver/rpi-ir-remote/blob/master/README.md
- copy the Philips config file: cp Philips.conf /etc/lirc/lircd.conf
- reboot 
- start the webserver. Goto the installdirectory and start app.js by node app.js 
