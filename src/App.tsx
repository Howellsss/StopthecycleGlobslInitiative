import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { SummitPage } from '@/pages/SummitPage';
import { EventsPage } from '@/pages/EventsPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { JoinPage } from '@/pages/JoinPage';
import { GetInvolvedPage } from '@/pages/GetInvolvedPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { FounderSnippetsPage } from '@/pages/FounderSnippetsPage';
import { NotFound } from '@/components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="programs" element={<ProgramsPage />} />
          <Route path="summits" element={<SummitPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="events/register" element={<RegistrationPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="founder-snippets" element={<FounderSnippetsPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="intake" element={<GetInvolvedPage />} />
          <Route path="partnerships" element={<GetInvolvedPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
