import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import { createRoot } from 'react-dom/client'
import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createRouter({routeTree})
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>
//   },
//   {
//     path: '/catalog',
//     element: <CatalogPage/>
//   }
// ])
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
