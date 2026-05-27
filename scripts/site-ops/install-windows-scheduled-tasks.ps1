$ErrorActionPreference = "Stop"

$repo = "C:\Users\andyg\Desktop\cursor\mrmallorcagolf-real"
$dailyScript = Join-Path $repo "scripts\site-ops\run-all-daily.ps1"
$weeklyScript = Join-Path $repo "scripts\site-ops\run-all-weekly.ps1"
$monthlyScript = Join-Path $repo "scripts\site-ops\run-all-monthly.ps1"

function Register-OrReplaceTask {
  param (
    [string]$TaskName,
    [object]$Trigger,
    [string]$ScriptPath
  )

  $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$ScriptPath`""
  $principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited
  $settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -StartWhenAvailable

  if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
  }

  try {
    Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $Trigger -Principal $principal -Settings $settings | Out-Null
    Write-Host "Registered task: $TaskName"
  } catch {
    Write-Warning "Register-ScheduledTask failed for $TaskName. Trying schtasks fallback..."
    $scheduleType = "DAILY"
    $modifier = ""
    $day = ""
    $time = "07:00"
    if ($TaskName -eq "MMG-Weekly-SEO-Performance") {
      $scheduleType = "WEEKLY"
      $day = "/D MON"
      $time = "08:00"
    } elseif ($TaskName -eq "MMG-Monthly-Technical-Audit") {
      $scheduleType = "WEEKLY"
      $day = "/D SUN"
      $modifier = "/MO 4"
      $time = "09:00"
    }
    $cmd = "schtasks /Create /F /TN `"$TaskName`" /TR `"powershell.exe -NoProfile -ExecutionPolicy Bypass -File '$ScriptPath'`" /SC $scheduleType $day $modifier /ST $time"
    cmd /c $cmd | Out-Null
    Write-Host "Registered task via schtasks: $TaskName"
  }
}

$dailyTrigger = New-ScheduledTaskTrigger -Daily -At 7:00AM
$weeklyTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday -At 8:00AM
$monthlyTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Sunday -WeeksInterval 4 -At 9:00AM

Register-OrReplaceTask -TaskName "MMG-Daily-Health-Check" -Trigger $dailyTrigger -ScriptPath $dailyScript
Register-OrReplaceTask -TaskName "MMG-Weekly-SEO-Performance" -Trigger $weeklyTrigger -ScriptPath $weeklyScript
Register-OrReplaceTask -TaskName "MMG-Monthly-Technical-Audit" -Trigger $monthlyTrigger -ScriptPath $monthlyScript

Write-Host "All MMG site-ops scheduled tasks are installed."
