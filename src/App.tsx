import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage } from "./routes";
import { PublicLayout } from "./layouts/public-layout";
import ProtectedRoute from "./layouts/protected-route";
import MainLayout from "./layouts/main-layout";
import { Generate } from "./views/generate";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import { ContactPage } from "./routes/ContactPage";
import { AboutPage } from "./routes/AboutPage";
import { ServicesPage } from "./routes/ServicesPage";
import { ComingSoonPage } from "./components/ComingSoonPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          <Route path="/services/career-coaching" element={<ComingSoonPage />} />
          <Route path="/services/resume-building" element={<ComingSoonPage />} />
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/generate" element={<Generate />}>
            <Route index element={<Dashboard />} />
            {/* create route */}
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};
