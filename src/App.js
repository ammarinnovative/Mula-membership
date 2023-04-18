import { LoginPage } from './Views/LoginPage/LoginPage';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { Home } from './Views/Home/Home';
import { Router } from './routes/routes';
import store from './app/store';
import { Provider } from 'react-redux';




function App() {
  return (
    <Provider store={store}>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
    </Provider>
  )
}

export default App;
