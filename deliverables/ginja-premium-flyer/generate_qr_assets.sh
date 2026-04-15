#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
ASSETS_DIR="$ROOT_DIR/assets"
mkdir -p "$ASSETS_DIR"

cat > "$ASSETS_DIR/qr_ios.tex" <<'TEX'
\documentclass[border=0pt]{standalone}
\usepackage{qrcode}
\begin{document}
\qrcode[height=9cm]{https://apps.apple.com/us/app/ginja-app/id6752789324}
\end{document}
TEX

cat > "$ASSETS_DIR/qr_android.tex" <<'TEX'
\documentclass[border=0pt]{standalone}
\usepackage{qrcode}
\begin{document}
\qrcode[height=9cm]{https://play.google.com/store/apps/details?id=com.ginjaapp.ginja&pcampaignid=web_share}
\end{document}
TEX

pdflatex -interaction=nonstopmode -halt-on-error -output-directory "$ASSETS_DIR" "$ASSETS_DIR/qr_ios.tex" >/dev/null
pdflatex -interaction=nonstopmode -halt-on-error -output-directory "$ASSETS_DIR" "$ASSETS_DIR/qr_android.tex" >/dev/null

gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pngalpha -r600 -o "$ASSETS_DIR/qr-ios.png" "$ASSETS_DIR/qr_ios.pdf" >/dev/null
gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pngalpha -r600 -o "$ASSETS_DIR/qr-android.png" "$ASSETS_DIR/qr_android.pdf" >/dev/null

rm -f "$ASSETS_DIR"/*.aux "$ASSETS_DIR"/*.log "$ASSETS_DIR"/*.pdf "$ASSETS_DIR"/*.tex

echo "QR assets regenerated in $ASSETS_DIR"
