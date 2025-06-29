import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gtag } from 'gtag';

const GA_MEASUREMENT_ID = 'G-M7CJYD64B3';

// Initialize Google Analytics
export const initGA = () => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url, title) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track events (like button clicks, downloads, etc.)
export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Component to automatically track page views
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    const url = window.location.origin + location.pathname + location.search;
    const title = document.title;
    trackPageView(url, title);
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics; 