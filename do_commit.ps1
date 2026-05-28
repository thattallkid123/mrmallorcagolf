$env:GIT_EDITOR = "cmd /c exit"
$env:GIT_TERMINAL_PROMPT = "0"
Set-Location "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
git add -A
"fix: mobile layout" | Set-Content -Path "C:\tmp_msg.txt" -Encoding utf8
git commit -F "C:\tmp_msg.txt"
git push
Remove-Item "C:\tmp_msg.txt" -ErrorAction SilentlyContinue
Remove-Item "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real\do_commit.ps1" -ErrorAction SilentlyContinue
