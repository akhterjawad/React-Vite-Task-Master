import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Config/Redux/Store/store.js'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
  </Provider>
)