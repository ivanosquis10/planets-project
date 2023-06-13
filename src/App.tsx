import { Route } from 'wouter'
import { Home } from './pages/Home'
import { PlanetDetail } from './pages/PlanetDetail'

function App() {
  return (
    <>
      <main className=''>
        <Route path='/' component={Home} />
        <Route path='/planets/:id' component={PlanetDetail} />
      </main>
    </>
  )
}

export default App
