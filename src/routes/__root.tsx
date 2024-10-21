import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '../widgets/Header/Header'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header/>
      <Outlet />
      <TanStackRouterDevtools/>
    </>
  )
})