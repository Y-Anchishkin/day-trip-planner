import { Link } from 'react-router'

export default function NewTripScreen() {
  return (
    <main className="screen">
      <h1>New trip</h1>
      <p>The trip setup form will go here.</p>
      <Link to="/trip/plan" className="button">
        Create plan
      </Link>
    </main>
  )
}