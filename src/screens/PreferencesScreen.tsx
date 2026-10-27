import { Link } from 'react-router'

export default function PreferencesScreen() {
  return (
    <main className="screen">
      <h1>Your preferences</h1>
      <p>The preferences form will go here.</p>
      <Link to="/trip/new" className="button">
        Save and continue
      </Link>
    </main>
  )
}