import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <h1>Dark Mode Toggle Feature</h1>
          <p className="intro-text">
            Click the toggle button in the header to switch between light and dark modes.
            Your preference will be saved automatically.
          </p>

          <section className="feature-section">
            <h2>Features</h2>
            <ul>
              <li>🌓 Toggle between light and dark modes</li>
              <li>💾 Theme preference persists across sessions</li>
              <li>⌨️ Fully keyboard accessible</li>
              <li>♿ Screen reader compatible</li>
              <li>🎨 Smooth transitions and animations</li>
            </ul>
          </section>

          <section className="accessibility-section">
            <h2>Accessibility</h2>
            <p>
              This feature is built with accessibility in mind:
            </p>
            <ul>
              <li>WCAG AA compliant color contrast (4.5:1 minimum)</li>
              <li>Keyboard navigation support (Tab to focus)</li>
              <li>ARIA labels for screen readers</li>
              <li>Focus indicators for better visibility</li>
            </ul>
          </section>

          <section className="browser-support-section">
            <h2>Browser Support</h2>
            <p>Tested and working on:</p>
            <ul>
              <li>✅ Chrome (latest 2 versions)</li>
              <li>✅ Firefox</li>
              <li>✅ Safari</li>
              <li>✅ Edge</li>
            </ul>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
