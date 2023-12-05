import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/App.css'

// Router
import{ createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './home.jsx';
import Produtos from './Produtos.jsx';
import TrabalheConosco from './trabalheConosco.jsx';
import DemonstrativoForms from './DemonstrativoForms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/produtos",
    element: <Produtos />
  },
  {
    path: "/formulario",
    element: <TrabalheConosco />
  },
  {
    path: "/envio",
    element: <DemonstrativoForms nome="Joaquim Levandovisk" />
  }    
])

// Router
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
