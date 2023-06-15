import { Route } from 'wouter'
import { PlanetDetail, Home } from './pages'

function App() {
  return (
    <main>
      <Route path='/' component={Home} />
      <Route path='/planets/:id' component={PlanetDetail} />
    </main>
  )
}

export default App
