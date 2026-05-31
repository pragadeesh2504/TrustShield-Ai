import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import UrlScanner from "./pages/UrlScanner";
import QRScanner from "./pages/QRScanner";
import CallAnalyzer from "./pages/CallAnalyzer";
import ScreenshotAnalyzer from "./pages/ScreenshotAnalyzer";
import ThreatAnalytics from "./pages/ThreatAnalytics";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>

      {/* LOGIN */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* DASHBOARD LAYOUT */}

      <Route
        path="/"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/url-scanner"
        element={
          <MainLayout>
            <UrlScanner />
          </MainLayout>
        }
      />

      <Route
        path="/qr-scanner"
        element={
          <MainLayout>
            <QRScanner />
          </MainLayout>
        }
      />

      <Route
        path="/call-analyzer"
        element={
          <MainLayout>
            <CallAnalyzer />
          </MainLayout>
        }
      />

      <Route
        path="/screenshot-analyzer"
        element={
          <MainLayout>
            <ScreenshotAnalyzer />
          </MainLayout>
        }
      />

      <Route
        path="/threat-analytics"
        element={
          <MainLayout>
            <ThreatAnalytics />
          </MainLayout>
        }
      />

      <Route
        path="/notifications"
        element={
          <MainLayout>
            <Notifications />
          </MainLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <MainLayout>
            <Settings />
          </MainLayout>
        }
      />

    </Routes>
  );
}

export default App;