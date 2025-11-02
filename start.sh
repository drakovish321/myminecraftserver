#!/bin/bash

# Accept EULA
echo "eula=true" > eula.txt

# Start PaperMC server
java -Xmx1024M -Xms1024M -jar paper-1.20.2.jar nogui
