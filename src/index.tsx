import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root')
if (!container) {
  throw new Error("Element with id 'root' not found in the document.")
}
const root = ReactDOM.createRoot(container)

root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
)

reportWebVitals()
