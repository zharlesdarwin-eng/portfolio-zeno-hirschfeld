Add-Type -AssemblyName System.Drawing

$p1 = 'C:\Users\Gebruiker\.gemini\antigravity\brain\b749dda0-e8b8-4693-beb8-226870d1d2f3\browser_sandbox\screenshots\step_4_shot_1.png'
$p2 = 'C:\Users\Gebruiker\.gemini\antigravity\brain\b749dda0-e8b8-4693-beb8-226870d1d2f3\browser_sandbox\screenshots\step_10_shot_2.png'

$outPath = 'public\images\projects\jrproductions-showcase.png'

$width = 750
$height = 1022

$canvas = [System.Drawing.Bitmap]::new($width, $height)
$g = [System.Drawing.Graphics]::FromImage($canvas)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Background fill with studio navy/dark grey gradient tone
$bgBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(18, 22, 28))
$g.FillRectangle($bgBrush, 0, 0, $width, $height)
$bgBrush.Dispose()

# Subtle geometric background highlights
$gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(30, 40, 112, 148), 1)
for ($x = 0; $x -lt $width; $x += 40) {
    $g.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -lt $height; $y += 40) {
    $g.DrawLine($gridPen, 0, $y, $width, $y)
}
$gridPen.Dispose()

# Load source images
$img1 = [System.Drawing.Image]::FromFile($p1)
$img2 = [System.Drawing.Image]::FromFile($p2)

# Helper function to draw browser-styled card with shadow
function Draw-WindowCard($gfx, $sourceImg, [int]$srcX, [int]$srcY, [int]$srcW, [int]$srcH, [int]$dstX, [int]$dstY, [int]$dstW, [int]$dstH, [string]$title) {
    # Drop shadow
    $shadowBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(100, 0, 0, 0))
    $gfx.FillRectangle($shadowBrush, ($dstX + 8), ($dstY + 12), $dstW, $dstH)
    $shadowBrush.Dispose()

    # Window header bar
    $headerH = 34
    $headerBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(34, 39, 48))
    $gfx.FillRectangle($headerBrush, $dstX, $dstY, $dstW, $headerH)
    $headerBrush.Dispose()

    # Window dots (mac style)
    $dotRed = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(239, 68, 68))
    $dotYellow = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(245, 158, 11))
    $dotGreen = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(34, 197, 94))
    $gfx.FillEllipse($dotRed, ($dstX + 14), ($dstY + 11), 12, 12)
    $gfx.FillEllipse($dotYellow, ($dstX + 32), ($dstY + 11), 12, 12)
    $gfx.FillEllipse($dotGreen, ($dstX + 50), ($dstY + 11), 12, 12)
    $dotRed.Dispose()
    $dotYellow.Dispose()
    $dotGreen.Dispose()

    # URL / Title in header
    $font = [System.Drawing.Font]::new("Arial", [float]10.0)
    $textBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(170, 180, 195))
    $gfx.DrawString($title, $font, $textBrush, [float]($dstX + 74), [float]($dstY + 8))
    $font.Dispose()
    $textBrush.Dispose()

    # Source and Destination rectangles for image
    $srcRect = [System.Drawing.Rectangle]::new($srcX, $srcY, $srcW, $srcH)
    $imgH = $dstH - $headerH
    $imgDestRect = [System.Drawing.Rectangle]::new($dstX, ($dstY + $headerH), $dstW, $imgH)
    $gfx.DrawImage($sourceImg, $imgDestRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

    # Window border
    $borderPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(80, 255, 255, 255), 2)
    $gfx.DrawRectangle($borderPen, $dstX, $dstY, $dstW, $dstH)
    $borderPen.Dispose()
}

# 1. Secondary layer (Card 2: SoundCloud Pop Playlist / Music Projects)
Draw-WindowCard $g $img2 0 40 $img2.Width 780 45 490 660 460 "j-rproductions.nl/music-pop-playlist"

# 2. Hero layer (Card 1: Jay RP - Rudi Jansen Hero Homepage)
Draw-WindowCard $g $img1 0 0 $img1.Width 780 40 45 670 420 "https://www.j-rproductions.nl"

# Subtle brand accent ribbon at bottom
$accentBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(235, 35, 97, 127))
$g.FillRectangle($accentBrush, 45, 960, 360, 44)
$accentBrush.Dispose()

$badgeFont = [System.Drawing.Font]::new("Arial", [float]11.0, [System.Drawing.FontStyle]::Bold)
$badgeTextBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::White)
$g.DrawString("CMS WEBSITE SHOWCASE", $badgeFont, $badgeTextBrush, [float]60, [float]972)
$badgeFont.Dispose()
$badgeTextBrush.Dispose()

# Save final collage
$canvas.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$img1.Dispose()
$img2.Dispose()
$g.Dispose()
$canvas.Dispose()

Write-Host "Collage generated successfully at $outPath. Size: $((Get-Item $outPath).Length) bytes"
