# Day Trip Planner — Requirements (v1)

## Scope
- Web app, mobile-first. Desktop shows the mobile layout centred, same functionality.
- Single user, no login (login is a later step).
- City: Valencia. Places come from a hand-made list (AI and real data later).

## User stories

### US-1: Set up my global preferences
As a first-time user, I want to tell the app what I like once, so that every trip plan fits me.
- On first open, I see the preferences setup, not the trip form.
- I can choose 1+ interests (nature, beach, history, food, museums, viewpoints).
- I can choose 1+ transport modes (walking, metro/bus, bike, car).
- I can choose a pace: relaxed or packed.
- I can set a default start point: pick from a list or "Use my current location".
- I can't save until at least 1 interest and 1 transport mode are selected.
- Preferences are still there after closing and reopening the browser.

### US-2: Create a new trip
As a user, I want to enter today's conditions, so that the plan fits this specific day.
- Duration 2–8 h (30-minute steps) and a start time.
- Indoor, outdoor, or no preference.
- Companions: solo, partner, friends, kids.
- Start point and transport are pre-filled from global preferences and can be changed for this trip only.
- Duration below 2 h or above 8 h is not accepted.

### US-3: Get a plan that fits my time
As a user, I want a plan that really fits my hours, so that I don't run late or get bored.
- Activities + travel time ≤ chosen duration.
- Activities + travel time ≥ 75% of chosen duration.
- Each stop shows: name, short description, time spent, travel time from the previous stop.
- Relaxed pace has fewer stops than packed pace for the same duration.

### US-4: Plan respects my conditions
As a user, I want the plan to follow my choices, so that I don't get suggestions I can't or won't do.
- "Indoor" → no outdoor-only places.
- No car → no car-only places.
- "Kids" → no places marked "not for kids".
- At least half of the stops match my interests.
- If no plan fits, the app says so and suggests what to relax. Never an empty or broken plan.

### US-5: Adjust the plan
As a user, I want to change a plan I don't fully like, so that I don't start over.
- I can regenerate; the new plan differs by at least 1 stop.
- I can replace one stop; the result still respects US-3 and US-4.
- I can go back and edit trip settings without losing them.

## Non-functional requirements
- NFR-1: All user stories pass in current Safari, Chrome and Brave.
  Primary: mobile (360–430 px wide). Secondary: desktop (centred mobile layout).

## Decisions
- Start point v1: list of fixed points (Ciutat Vella, Ruzafa, Benimaclet, Estació del Nord, Malvarrosa) + "Use my current location". Free-text address later.
- Travel time v1: estimated from distance between coordinates and an average speed per transport mode.

## Backlog (not in v1)
- Edit global preferences later, trip history, weather, food/budget filters, login, free-text addresses.