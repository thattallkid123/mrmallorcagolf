# Windows Settings Migration — Andy's PC

This document captures your current Windows settings. On the new PC, paste it to Claude and say:
**"Apply my Windows settings from this document."**

---

## Current Settings Summary

| Setting | Value |
|---|---|
| Taskbar auto-hide | **OFF** (always visible) |
| Taskbar icon size | Normal (large icons) |
| Taskbar button grouping | Always combine |
| Taskbar alignment | **Left** |
| Taskbar locked | Yes |
| Task View button | Hidden |
| Search box mode | Default (not captured — set manually if needed) |
| Theme | **Light** (apps + system) |
| Transparency effects | Enabled |
| Accent colour on taskbar | Off |
| Display DPI / scaling | **100%** (96 DPI) |
| File extensions hidden | Yes (Windows default) |
| Hidden files shown | No (Windows default) |
| Explorer opens to | Quick Access (default) |
| Mouse speed | 1 |
| Mouse sensitivity | 10/20 |
| Mouse buttons swapped | No |
| Date format | dd/MM/yyyy |
| Time format | HH:mm:ss (24-hour) |
| Language | English |
| Power scheme | HP Recommended (balanced) |

---

## PowerShell Script — Apply These Settings on New PC

Open **PowerShell as Administrator** and run the block below, or ask Claude to run it for you.

```powershell
# ── TASKBAR ──────────────────────────────────────────────────────────────────
$adv = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced'

# Taskbar alignment: 0 = Left (Windows 11 default is 1 = Centre)
Set-ItemProperty -Path $adv -Name TaskbarAl -Value 0

# Large icons (0 = large, 1 = small)
Set-ItemProperty -Path $adv -Name TaskbarSmallIcons -Value 0

# Always combine taskbar buttons (0 = always, 1 = when full, 2 = never)
Set-ItemProperty -Path $adv -Name TaskbarGlomLevel -Value 0

# Hide Task View button
Set-ItemProperty -Path $adv -Name ShowTaskViewButton -Value 0

# Lock taskbar (0 = locked)
Set-ItemProperty -Path $adv -Name TaskbarSizeMove -Value 0

# Taskbar auto-hide OFF
# StuckRects3 byte 8: bit 0 = auto-hide. Value 2 = visible (no auto-hide).
$tbPath = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\StuckRects3'
if (Test-Path $tbPath) {
    $tbData = (Get-ItemProperty $tbPath).Settings
    $tbData[8] = 2   # 2 = always visible, 3 = auto-hide
    Set-ItemProperty -Path $tbPath -Name Settings -Value $tbData
}

# ── THEME ────────────────────────────────────────────────────────────────────
$theme = 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize'
Set-ItemProperty -Path $theme -Name AppsUseLightTheme      -Value 1
Set-ItemProperty -Path $theme -Name SystemUsesLightTheme   -Value 1
Set-ItemProperty -Path $theme -Name EnableTransparency     -Value 1
Set-ItemProperty -Path $theme -Name ColorPrevalence        -Value 0  # accent on taskbar off

# ── DISPLAY SCALING ──────────────────────────────────────────────────────────
# 100% scaling = 96 DPI. Change to 120 for 125%, 144 for 150%.
Set-ItemProperty -Path 'HKCU:\Control Panel\Desktop' -Name LogPixels -Value 96

# ── EXPLORER ─────────────────────────────────────────────────────────────────
Set-ItemProperty -Path $adv -Name HideFileExt -Value 1  # hide extensions (Windows default)
Set-ItemProperty -Path $adv -Name Hidden      -Value 2  # don't show hidden files

# ── MOUSE ────────────────────────────────────────────────────────────────────
$mouse = 'HKCU:\Control Panel\Mouse'
Set-ItemProperty -Path $mouse -Name MouseSpeed       -Value 1
Set-ItemProperty -Path $mouse -Name MouseSensitivity -Value 10
Set-ItemProperty -Path $mouse -Name SwapMouseButtons -Value 0

# ── DATE / TIME FORMAT ───────────────────────────────────────────────────────
$intl = 'HKCU:\Control Panel\International'
Set-ItemProperty -Path $intl -Name sShortDate  -Value 'dd/MM/yyyy'
Set-ItemProperty -Path $intl -Name sLongDate   -Value 'dd MMMM yyyy'
Set-ItemProperty -Path $intl -Name sTimeFormat -Value 'HH:mm:ss'

# ── RESTART EXPLORER to apply taskbar changes ────────────────────────────────
Stop-Process -Name explorer -Force
Start-Sleep -Seconds 2
Start-Process explorer
```

---

## Manual Steps (can't be scripted easily)

These need to be done by hand in Settings after running the script:

- **Taskbar — pinned apps**: Re-pin your apps manually (Start → right-click → Pin to taskbar).
- **Default browser**: Settings → Apps → Default apps → set Chrome/Edge as preferred.
- **Night Light**: Settings → System → Display → Night Light (enable if you use it).
- **Snap layouts**: Settings → System → Multitasking — re-enable if you use snap groups.
- **Power plan**: If the new PC doesn't have "HP Recommended", use **Balanced** as the equivalent.
- **Notification / Focus Assist**: Settings → System → Notifications — re-configure as preferred.
- **Startup apps**: Settings → Apps → Startup — re-enable apps you want at login.

---

## Notes

- Script must run in **PowerShell** (not CMD). Admin rights needed for some DPI changes.
- Taskbar auto-hide setting requires an Explorer restart to take effect — the script does this automatically.
- If the new PC is Windows 11, the taskbar alignment setting (`TaskbarAl = 0`) will move icons to the left.

*Generated 2026-05-29 from Andy's current machine.*
