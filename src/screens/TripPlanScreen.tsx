import { Link } from 'react-router'

export default function TripPlanScreen() {
  return (
    <main className="screen">
      <h1>Your trip plan</h1>
      <p>The plan will go here.</p>
      <Link to="/trip/new" className="button">
        Plan another trip
      </Link>
    </main>
  )
}