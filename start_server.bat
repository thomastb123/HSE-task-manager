@echo off
title HSE Task Manager Central Server
echo Starting HSE Task Manager Central Network Server...
cd /d "%~dp0"
node server.js
pause
