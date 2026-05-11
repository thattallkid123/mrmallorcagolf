# MMG Font Installer - Run as Administrator for best results
$fontFolder = Split-Path -Parent $MyInvocation.MyCommand.Path
$fonts = Get-ChildItem -Path $fontFolder -Filter "*.ttf"

foreach ($font in $fonts) {
    $fontName = $font.Name
    $dest = "C:\Windows\Fonts\$fontName"
    if (!(Test-Path $dest)) {
        Copy-Item $font.FullName $dest
        $regPath = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts"
        $displayName = $fontName -replace "\.ttf$", " (TrueType)"
        New-ItemProperty -Path $regPath -Name $displayName -Value $fontName -PropertyType String -Force | Out-Null
        Write-Host "Installed: $fontName"
    } else {
        Write-Host "Already installed: $fontName"
    }
}
Write-Host "Done. Restart PowerPoint if it was open."
