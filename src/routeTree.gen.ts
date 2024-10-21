/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsProductIdImport } from './routes/products/$productId'

// Create Virtual Routes

const ProductsIndexLazyImport = createFileRoute('/products/')()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexLazyRoute = ProductsIndexLazyImport.update({
  path: '/products/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/products/index.lazy').then((d) => d.Route),
)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  path: '/products/$productId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      id: '/products/$productId'
      path: '/products/$productId'
      fullPath: '/products/$productId'
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      id: '/products/'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products': typeof ProductsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products': typeof ProductsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/products/$productId': typeof ProductsProductIdRoute
  '/products/': typeof ProductsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/products/$productId' | '/products'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products/$productId' | '/products'
  id: '__root__' | '/' | '/products/$productId' | '/products/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductsProductIdRoute: typeof ProductsProductIdRoute
  ProductsIndexLazyRoute: typeof ProductsIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductsProductIdRoute: ProductsProductIdRoute,
  ProductsIndexLazyRoute: ProductsIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products/$productId",
        "/products/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products/$productId": {
      "filePath": "products/$productId.tsx"
    },
    "/products/": {
      "filePath": "products/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */