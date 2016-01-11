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

Make sure you save the files using UTF-8 without signature (otherwise jenkyll won't understand the header to parse the file).

## On the translation topic

We are going to use [Html Iso language for each post](http://www.w3schools.com/tags/ref_language_codes.asp).
We will follow a technique similar to https://www.sylvaindurand.org/making-jekyll-multilingual/.
We have placed all greek content in the el folder. Note that the name of the page is the same as the one from the english content.
If you want to add support for more languages, search for the page.lang usages as some parts are hardcoded to el and en values.
If you want to use values in the include files you can add them in the config file under the t structure.

## Online services

### Formspree

We have used http://formspree.io/ in order to email the contact form. In order to make it work, you will have to submit a contact form and approve the sending of emails from the specific location. Don't forget both languages.

### Shareaholic

We have added shareaholic support. Create an account at https://shareaholic.com and get your site id. Place that in the _config.yml. Create an Inline App for your sharing buttons and set in the config the app id from the code snippet:
```
<div class='shareaholic-canvas' data-app='share_buttons' data-app-id='23126307'></div>
```

### Google custom search

Go to https://cse.google.com/cse/ and create a custom search engine. In the look and feel pick the "Two page" layout. Then in the setup tab, click on the "Search engine ID" button and copy the displayed id in your config file.