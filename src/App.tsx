import { Routes, Route, Navigate } from 'react-router'
import PreferencesScreen from './screens/PreferencesScreen'
import NewTripScreen from './screens/NewTripScreen'
import TripPlanScreen from './screens/TripPlanScreen'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">Day Trip Planner</header>
      <Routes>
        <Route path="/" element={<Navigate to="/preferences" replace />} />
        <Route path="/preferences" element={<PreferencesScreen />} />
        <Route path="/trip/new" element={<NewTripScreen />} />
        <Route path="/trip/plan" element={<TripPlanScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}