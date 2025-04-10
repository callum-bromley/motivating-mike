import { createRoot } from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(

    <Auth0Provider
      domain='tohora-2025-joel.au.auth0.com'
      clientId='9hXYVo8dg47dfbDtM4vdDCSeJSTpKIv8'
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https//mm/api',
      }}
    >

      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>,
    </Auth0Provider>
  )
})
