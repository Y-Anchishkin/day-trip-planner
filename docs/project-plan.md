# Day Trip Planner — Project Plan

## Goal
Practise the full flow of building a real app: idea → requirements → code → tests → deploy.
Web app, mobile-first. App Store / Google Play is out of scope for this project.

## How we work
- Split: Claude writes most code and explains key concepts; Zhenya directs, reviews, tests, and writes small parts.
- Rule: never commit code you don't understand at a basic level.
- Rule: test every feature against the user stories (docs/2026-10-19-user-stories.md).
- Delivery: start by pasting code into Codespaces (Option 1); later Claude pushes to the repo directly (Option 2).
- Commits: one logical change per commit, with a clear message.

## Steps
1. [x] Requirements — user stories and NFRs
2. [x] Setup — Codespaces, Vite + React + TypeScript, Oxlint, GitHub
3. [x] Playwright setup — 3 profiles, smoke test
4. [ ] Screens with fake data + E2E tests per screen
   - [ ] 4.1 Routing, mobile layout, empty screens
   - [ ] Design phase
     - [x] D1 Visual direction: clean, minimal, tropical; light mode only; polished mockups (no wireframes)
     - [ ] D2 Design system (colours, type, spacing, components)
     - [ ] D3 Mockups: Preferences, New trip, Trip plan + validation error, "no plan fits", desktop view
     - [ ] D4 Review mockups against user stories
     - [ ] D5 Handoff: design tokens → CSS variables, components → React components
   - [ ] 4.2 Preferences screen + browser storage
   - [ ] 4.3 New trip screen
   - [ ] 4.4 Trip plan screen with fake plan
5. [ ] Trip logic with hand-made Valencia places + Vitest unit tests
6. [ ] AI and real data
7. [ ] Deploy the website
8. [ ] Login and database

## Testing strategy
- Unit tests (Vitest): planning logic, time calculations. Many, fast.
- E2E tests (Playwright): user flows in real browsers. Fewer, slower.
- Browsers: Chromium covers Chrome + Brave; WebKit approximates Safari (check on a real iPhone sometimes).

## Later / parked
- CI: run tests automatically on GitHub on every push (small separate step).
- Free-text addresses, weather, trip history, budget filters.