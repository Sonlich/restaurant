import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Pages } from './pages'
import store from './store/store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  )
}

export default App
