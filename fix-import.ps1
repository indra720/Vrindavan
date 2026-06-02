$content = Get-Content src\pages\HomePage.jsx -Raw
$content = $content -replace 'import CountUp from "react-countup";', 'import { default as CountUp } from "react-countup";'
Set-Content src\pages\HomePage.jsx -Value $content
Write-Host "Import statement fixed"
