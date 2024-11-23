import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
	  </Provider>
  </StrictMode>
  </BrowserRouter>
)
