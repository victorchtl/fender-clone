import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import { Home } from './pages/Home';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: '#D52B1E'
    },
    text: {
      secondary: '#888'
    }
  },
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: 'white',
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
