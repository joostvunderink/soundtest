# Phaser 3 / Capacitor iOS Sound test

# Testing steps

npm i
npm run watch

# This will open a browser on http://localhost:10001 where you will see an image of a green face.
# Clicking on it should generate an explosion sound.
# Press ^C in the terminal to continue with the next steps.

npx cap add ios
npx cap copy ios
npx cap open ios

# This will open Xcode.
# In the top bar, just right of the play/pause buttons, there is a dropdown with devices.
# Pick a device, e.g. iPhone 8, and click the play icon.
# This will open a Simulator, where the sound test is opened as an app.

# For some reason, clicking the green face does not give any sounds.

# If you look at the console log in Xcode, you will see something like this:

# Error: There is no audio asset with key "boom" in the audio cache
# ⚡️  URL: capacitor://localhost/game.js

# So the code could find the image asset (the green face), but not the sound asset (the boom sound). Why?
