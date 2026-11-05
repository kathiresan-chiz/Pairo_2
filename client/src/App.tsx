import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
// import Pricing from './pages/Pricing' // Pricing page switched off for now
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <SmoothScroll>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="pricing" element={<Pricing />} /> */}
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:category" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SmoothScroll>
  )
}
