import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from "@store"

export const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
      <ToastContainer />
    </>
  )
}