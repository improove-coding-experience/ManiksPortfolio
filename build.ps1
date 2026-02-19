# Custom build script to handle OneDrive symlink issues
Write-Host "Cleaning .next directory..." -ForegroundColor Yellow

# Try multiple methods to clean .next
$methods = @(
    { Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue },
    { cmd /c "rd /s /q .next 2>nul" },
    { Start-Sleep -Seconds 1; Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue }
)

foreach ($method in $methods) {
    try {
        & $method
        if (-not (Test-Path ".next")) {
            Write-Host ".next directory cleaned successfully" -ForegroundColor Green
            break
        }
    } catch {
        Write-Host "Cleanup method failed, trying next..." -ForegroundColor Yellow
    }
}

Write-Host "Starting Next.js build..." -ForegroundColor Yellow
npm run build
