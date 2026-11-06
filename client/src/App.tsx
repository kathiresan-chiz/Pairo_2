import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Solution from './pages/Solution'
import ParrotAI from './pages/ParrotAI'
import HealthCheck from './pages/HealthCheck'
import Compliance from './pages/Compliance'
import Pricing from './pages/Pricing'
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
          <Route path="services/:key" element={<Solution />} />
          <Route path="parrot-ai" element={<ParrotAI />} />
          <Route path="health-check" element={<HealthCheck />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:category" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SmoothScroll>
  )
}
