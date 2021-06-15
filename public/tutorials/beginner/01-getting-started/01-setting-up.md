# Setting up

Getting the programs you need to develop with NodeJS and Javascript isn't hard. It isn't like c++ where you have to install old programs ported from linux when using windows. NodeJS is pretty easy.

## Windows

Windows is what I use when developing my projects. It has some good and bad things for developers but so does Linux and macOS.

On Windows it is as simple as a single installer. You can get it here <https://nodejs.org/en/download/>.

**However**, if you plan on using NodeJS all the time, you should skip that download and use NVM (node version manager). There is a Windows version here <https://github.com/coreybutler/nvm-windows/releases>.
**Please note**: GitHub releases are notoriously unsecure. Please make sure you compare hashes with your downloaded executable to make sure no hackers have replaced the file with a keylogger. You can do this with <https://www.virustotal.com/gui/home/upload> (if multiple engines detect it is malicious, wait a few hours and try again.)

If you installed nvm, just run `nvm install <version> && nvm use <version>` (in this series I will be using the latest `current` version to test the code.)

Once you have installed node, there are a few things you need to do to make sure it works on Windows.
1. Install python 3.8 (I'm not sure if 3.9 works)
2. Run `npm install build-tools -g` which will install a version of Visual Studio 2017 Build Tools that includes all of the programs required to build "native modules" which I will explain more in detail later in this series.

There is also a checkbox that you can check to make the node installer automatically do that 2nd step and install chocolatey/other useful software to help your experience.

## Linux

If you are using linux, you should be pretty used to installing things. If not, scroll down on this page <https://nodejs.org/en/download/> or if your linux distro has a package manager use <https://nodejs.org/en/download/package-manager/>

It is also recommended to install nvm which is native to linux and is a quick google away to find out how to install.

## macOS

You have two options, if you already have XCode or the XCode command line tools installed and homebrew, you can use `brew install node` or if you want an older version like 14 or 12 you can use `brew install node@14` etc

You can also use nvm on linux or macOS, I don't recommend installing nvm via homebrew as it is a faf to add to path however nvm provides an install script you can run in your terminal which will install it and put it in path for you

Nvm works pretty much the same on windows, linux, and mac
