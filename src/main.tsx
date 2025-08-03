import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import Dashboard from "./Pages/Dashboard.tsx"
import ErrorPage from './Pages/404.tsx'
import Analaytics from './Pages/Analaytics.tsx'
import { Layout } from './Pages/Layout.tsx'

const router = createBrowserRouter([
  {path : "/", element : <Layout/>,
    children : [
      {index : true , element : <Dashboard/>},
      {path : "/analytics", element : <Analaytics/>},
      {path: "*", element : <ErrorPage/>}
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
