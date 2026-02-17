# Skills Matrix Demo

This project is a simplified recreation of a **Skills/Competency matrix module** similar to what is used in learning and HR platforms (LXP).

The goal of this demo is to demonstrate frontend architecture, state handling, UI component composition and interaction with an API layer.

The original production system is significantly larger — this demo focuses only on the core functionality: displaying and updating user skill levels.

## Features

- User profile header (avatar, role, last update)
- Skill groups with expand/collapse behavior
- Skill level visualization (competency scale 0–5)
- Editable current skill level
- Required skill level indicators
- Legend for skill markers
- Mock API layer (simulates backend requests)
- Async loading with simulated network delay

## Tech Stack

- React + TypeScript
- Vite
- Styled-components
- rc-slider
- Mock API (in-memory data layer)

The project intentionally uses a separated API layer to mimic real production architecture.

## Architecture

The project is structured similarly to a real production frontend application:

- `api/` – API layer (simulated backend requests)
- `mocks/` – in-memory database
- `components/` – reusable UI components
- `pages/` – page-level components
- `utils/` – shared helpers and constants

The UI does not access mock data directly.  
All data is requested through the API module to replicate real client-server interaction.

## How It Works

1. Application loads user profile from the API
2. Skill groups are requested
3. User can expand/collapse groups
4. User can edit current skill level
5. Changes are saved through API and persisted in the in-memory database

Required skill levels are displayed as reference markers.

## Why This Project

I previously worked on a learning platform that included a complex Skills module.

This demo recreates a simplified vertical slice of that functionality:
- competency scale visualization
- grouped skills
- user skill editing
- reference required levels

The focus was not on building a large application, but on demonstrating understanding of real-world frontend patterns and UI logic.

## Run locally

```bash
npm install
npm run dev
