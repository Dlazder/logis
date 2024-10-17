import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

import { createRoot } from 'react-dom/client'
import './index.css'

const router = createRouter({routeTree, basepath: '/logis/'})
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
