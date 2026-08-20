import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { router } from './components/router'
import ChildApp from './components/contextReceiver'

const App = ()=> {
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
}
export default App;
