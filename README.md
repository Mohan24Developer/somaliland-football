# Somaliland Football — prototype

Bilingual responsive web prototype for Somaliland football fixtures, competitions and standings.

## Preview locally

Open `index.html` in a browser, or start a static server in this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Service workers and install prompts require HTTPS or localhost.

## Current status

- Responsive, Somali/English interface for phone and desktop.
- PWA manifest, app icon and offline app-shell caching for compatible browsers.
- Demo fixtures and competitions are sample data, not official results.
- The demo add-match form saves to the current browser's local storage only. It is not a shared admin system.
- No production admin login, shared database, live scores, or native Android/iOS store packages are connected yet.

## To launch for real

The next required production work is a secure shared backend/database, admin authentication and permissions, validation/audit history, real verified competition/team data, testing, HTTPS hosting, and Android/iOS packaging and store submission. Do not enter sensitive information into this demo.
