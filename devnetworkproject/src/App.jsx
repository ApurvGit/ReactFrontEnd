import React from 'react'
import NavBar from './Common/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Provider } from 'react-redux';
import appStore from './utils/app.Store'
import Feed from './Components/Feed'
import Connections from './Components/Connections'
import Requests from './Components/Requests'
export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={<div><NavBar /></div>}>
              <Route path='/' element={<div><Feed /></div>} />
              <Route path="/login" element={<div><Login /></div>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}
