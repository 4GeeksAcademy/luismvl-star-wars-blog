import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './component/scrollToTop'
import injectContext from './store/appContext'

import Home from './views/Home.jsx'
import Details from './views/Details.jsx'
import Navbar from './component/Navbar.jsx'

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || ''

  return (
    <div style={{ position: 'relative' }}>
      <div className='bg'></div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/character/:uid'
              element={<Details type='character' />}
            />
            <Route path='/planet/:uid' element={<Details type='planet' />} />
            <Route path='/vehicle/:uid' element={<Details type='vehicle' />} />
            <Route path='*' element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default injectContext(Layout)
