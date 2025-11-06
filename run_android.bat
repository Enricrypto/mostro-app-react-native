@echo off
set ANDROID_HOME=C:\android
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator
npx expo run:android --device emulator-5554 --clear
