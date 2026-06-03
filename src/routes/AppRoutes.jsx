import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProjectsPage from '../pages/ProjectsPage'
import PropertyDetailsPage from '../pages/PropertyDetailsPage'
import BlogPage from '../pages/BlogPage'
import BlogDetailsPage from '../pages/BlogDetailsPage'
import EventsPage from '../pages/EventsPage'
import ContactPage from '../pages/ContactPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/property/:slug" element={<PropertyDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<div className="px-4 py-24 text-center text-dark">404 - Page not found</div>} />
    </Routes>
  )
}

