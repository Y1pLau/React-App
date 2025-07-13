import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import store from './app/store';
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
