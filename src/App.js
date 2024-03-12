import React from 'react'
import { Header } from './components/header';
import { Footer } from './components/footer';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div>
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  )
}

export default App;