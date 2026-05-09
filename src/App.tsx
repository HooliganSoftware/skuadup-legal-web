import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CommunityGuidelines from './pages/CommunityGuidelines';
import Home from './pages/Home';
import LocationPolicy from './pages/LocationPolicy';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/location-policy" element={<LocationPolicy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
