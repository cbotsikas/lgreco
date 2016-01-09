# lgreco
lgreco.eu Jekyll implementation

# How to setup dev environment

Download and install ruby (2.2.3 x64 was currently available) from http://rubyinstaller.org/downloads/
Make sure you add the binaries to the path (there is an option in the installation)

Download the Development KIT (DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe) from the same location.
Run it to extract it somewhere (c:\Ruby22-x64\devkit\). 
Then cd to it, run 
```
ruby dk.rb init 
ruby dk.rb install
```
to bind it to ruby installations in your path.

Update Install.bat and Update.bat files to match your devkit location.

Open a command prompt and run the Install.bat in the root of the gh-pages branch. If you have network issues and you get ETIMEDOUT errors, issue the following command until you get all the gems
```
bundle install
```

# How to develop

Open a command prompt and run the Update.bat in the root of the gh-pages branch to update the packages.
Then use the Local.bat file to run the server.

Navigate to http://localhost:4000 to see your local site. 