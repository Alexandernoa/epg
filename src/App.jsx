import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Provider } from 'react-redux'
import store from "./store"
import EpgPage from "./routes/EpgPage"
import HomePage from "./routes/HomePage"
import TvPage from "./routes/TvPage"
import ReplayPage from "./routes/ReplayPage"
import ProgramPage from "./routes/ProgramPage"
import BookPage from "./routes/BookPage"
import Header from "./components/Header"
import BottomMenu from "./components/BottomMenu"

const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<EpgPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/replay" element={<ReplayPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/program/:programId" element={<ProgramPage />} />
        </Routes>

        <BottomMenu />
      </BrowserRouter>
    </Provider>
  )
}

export default App
