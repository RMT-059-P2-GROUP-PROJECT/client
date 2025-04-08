import { BrowserRouter, Route, Routes } from "react-router"
import LandingPage from "./components/pages/LandingPage"
import LoginPage from "./components/pages/LoginPage"
import AboutPage from "./components/pages/AboutPage"
import RegisterPage from "./components/pages/RegisterPage"
import HomePage from "./components/pages/HomePage"

function IndexLayout() {

}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<HomePage />} />


        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} /> */}


        {/* <Route element={<IndexLayout />}> */}

        {/* Redirect root path '/' to '/courses' */}
        {/* <Route path="/" element={<Navigate to="/courses" replace />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:courseId' element={<DetailCourse />} />
        <Route path='/kanji/' element={<KanjiPage />} />
      </Route> */}
      </Routes>
    </BrowserRouter >
  )
}

export default App
