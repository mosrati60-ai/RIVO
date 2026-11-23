# RIVO

RIVO is a web-based mobility and services platform prototype. This repository currently contains the first front-end prototype for the Moto Taxi service.

## Current prototype

- Responsive dark interface with orange RIVO accent
- Tunisian Arabic, Modern Standard Arabic, French, English, and Italian language selector
- Demo workspaces for customer, driver, and administrator
- Local demo ride requests, driver acceptance, completion, and cancellation
- Driver-assisted guest request flow with an explicit consent checkbox
- Demo service settings and ride statistics

## Run locally

No build step is required for this prototype.

1. Download or clone this repository.
2. Open `index.html` in a modern browser.

For local development, you may also use a simple static web server.

## Important limitations

This is a front-end prototype, not a production ride-hailing system.

- Data is stored in the current browser using `localStorage`.
- Customer, driver, and administrator role selection is demo-only and is **not secure authentication**.
- Different devices and browsers do not share ride data.
- No real-time GPS tracking, SMS, payments, fare calculation, or dispatch backend is connected.
- The administrator settings are local demo settings and are not protected by server-side permissions.

Do not use this prototype to handle real customer accounts, payments, or live trips.

## Project structure

```text
RIVO_GitHub_Project/
├── index.html
├── README.md
├── .gitignore
└── docs/
    └── ROADMAP.md
```

## Next development stages

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for the planned backend, security, database, and deployment work.

## Deployment note

GitHub Pages can host the static prototype. It cannot by itself provide the secure backend, shared database, authentication, or real-time dispatch required for production RIVO.
