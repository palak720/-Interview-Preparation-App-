import {Provider} from "@/components/ui/provider"

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from "./redux/store";
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
