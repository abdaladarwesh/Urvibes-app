import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import Dashboard from "./Pages/Dashboard.tsx"
import ErrorPage from './Pages/404.tsx'

const router = createBrowserRouter([
  {path : "/", element : <Dashboard/>},
  {path: "*", element : <ErrorPage/>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
