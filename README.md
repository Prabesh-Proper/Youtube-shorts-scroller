

## Features
- **Smart Detection**: Detects the actual end of a video using the video completion event.
- **Human-like Scrolling**: Smoothly transitions to the next Short with a slight natural delay.
- **Interaction Aware**: Automatically pauses auto-scroll if you manually interact (scroll, click, keypress) with the page.
- **Privacy Focused**: Runs entirely locally (content script). No network requests, no tracking.

## Installation Instructions

1.  **Open Extensions Management**:
    *   In Chrome/Brave/Edge, go to `chrome://extensions`.
2.  **Enable Developer Mode**:
    *   Toggle the "Developer mode" switch in the top right corner.
3.  **Load Unpacked**:
    *   Click the "Load unpacked" button.
    *   Select the directory containing this project (e.g., `d:\cet`).
4.  **Enjoy**:
    *   Go to [YouTube Shorts](https://www.youtube.com/shorts) and start watching!

## Requirements
- Browser: Chrome, Brave, Edge, or any Chromium-based browser.
- Manifest Version: 3

## Files
- `manifest.json`: Extension configuration.
- `content.js`: Core logic for detection and scrolling.
- `icons/`: Extension icons.
