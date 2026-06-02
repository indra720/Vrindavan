$filePath = "src\pages\HomePage.jsx"
$content = Get-Content $filePath -Raw
$newContent = $content -replace 'import CountUp from "react-countup";', 'import { default as CountUp } from "react-countup";'
$newContent | Out-File -FilePath $filePath -Encoding UTF8 -Force
Write-Host "Import statement fixed"
