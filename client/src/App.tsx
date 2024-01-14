import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainRout from './component/views/routes/MainRout';
import PersonRout from './component/views/routes/PersonRout';

const query:QueryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    }
  }
});

const router = createBrowserRouter([
  {
    path:'/',
    element:<Outlet />,
    children:[
      {
        index:true,
        element:<MainRout />
      },
      {
        path:'/:id',
        element:<PersonRout />
      }
    ]
  }
]);

function App():JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={query}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
