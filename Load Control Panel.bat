@echo off
cd /d "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
start powershell -NoExit -Command "node control-panel-server.js"
timeout /t 3 /nobreak >nul
start "" "http://localhost:3010/control-panel"
