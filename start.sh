#!/bin/bash

# Accept EULA automatically
echo "eula=true" > eula.txt

# Start the server
java -Xmx1024M -Xms1024M -jar paper-1.20.2.jar nogui
