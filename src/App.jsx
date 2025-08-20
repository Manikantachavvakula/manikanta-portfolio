import React, { Component, Suspense, lazy } from 'react';

// Core sections - keep these immediately loaded
import ThemeToggle from './components/nav/ThemeToggle';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import About from './components/about/About';

// Lazy load heavy components for better performance
const Experience = lazy(() => 
  import('./components/experience/Experience').then(module => ({
    default: module.default
  }))
);
const Services = lazy(() => 
  import('./components/services/Services').then(module => ({
    default: module.default
  }))
);
const Portfolio = lazy(() => 
  import('./components/portfolio/Portfolio').then(module => ({
    default: module.default
  }))
);
const Contact = lazy(() => 
  import('./components/contact/Contact').then(module => ({
    default: module.default
  }))
);
const Footer = lazy(() => 
  import('./components/footer/Footer').then(module => ({
    default: module.default
  }))
);

// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console for debugging
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <div className="error-content">
            <h2>🚫 Oops! Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Mode)</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo.componentStack && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
            
            <div className="error-actions">
              <button onClick={this.handleReset} className="btn btn-primary">
                Try Again
              </button>
              <button onClick={this.handleReload} className="btn">
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Optimized Loading component with skeleton
const LoadingFallback = React.memo(({ sectionName }) => (
  <div className="loading-fallback">
    <div className="loading-content">
      <div className="loading-spinner"></div>
      <p>Loading {sectionName}...</p>
    </div>
  </div>
));

// Optimized intersection observer hook
const useIntersectionObserver = (targetRef, options = {}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once visible
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const current = targetRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, [targetRef, options]);

  return isVisible;
};

// Optimized Section wrapper for lazy loading
const LazySection = React.memo(({ children, fallback, threshold = 0.1, sectionName }) => {
  const sectionRef = React.useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold });

  return (
    <div ref={sectionRef}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback || <LoadingFallback sectionName={sectionName} />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      ) : (
        <div style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="skeleton" style={{ width: '80%', height: '200px' }}></div>
        </div>
      )}
    </div>
  );
});

const App = () => {
// Find this useEffect in your App.jsx file and replace it with this updated version:

React.useEffect(() => {
  // ALWAYS set technical theme as default - ignore any previous preferences
  document.body.className = 'technical';
  console.log('App: Set theme to technical (always default)');
  
  // Clear any theme preferences from localStorage to prevent override
  try {
    localStorage.removeItem('theme');
    localStorage.removeItem('selectedTheme');
    localStorage.removeItem('themePreference');
  } catch (error) {
    // Handle cases where localStorage is not available
    console.log('Could not clear localStorage theme preferences');
  }
  
  // Add skip link for accessibility
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Skip to main content';
  skipLink.setAttribute('aria-label', 'Skip to main content');
  document.body.insertBefore(skipLink, document.body.firstChild);

  // Performance monitoring (only in development)
  if (process.env.NODE_ENV === 'development' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('Performance metrics:', {
        loadTime: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
        domContentLoaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
        totalTime: Math.round(perfData.loadEventEnd - perfData.fetchStart)
      });
    });
  }

  // Cleanup function
  return () => {
    // Any cleanup if needed
  };
}, []);

  const floatingLinks = React.useMemo(() => [
    {
      href: "https://linkedin.com/in/manikanta-chavvakula",
      label: "LinkedIn Profile",
      icon: "💼",
      className: "linkedin"
    },
    {
      href: "https://github.com/manikanta-chavvakula",
      label: "GitHub Profile", 
      icon: "👨‍💻",
      className: "github"
    },
    {
      href: "https://medium.com/@manikantaa.dev",
      label: "Medium Blog",
      icon: "📝", 
      className: "medium"
    }
  ], []);

  return (
    <ErrorBoundary>
      <div className="app">
        {/* Fixed elements - always loaded */}
        <ThemeToggle />
        <Nav />
        
        {/* Main content with skip target */}
        <main id="main-content">
          {/* Hero section with id="home" */}
          <section id="home">
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
          </section>
          
          <section id="about">
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
          </section>

          {/* Below-the-fold content - lazy loaded */}
          <section id="experience">
            <LazySection 
              sectionName="Experience"
              threshold={0.2}
            >
              <Experience />
            </LazySection>
          </section>

          <section id="services">
            <LazySection 
              sectionName="Services"
              threshold={0.2}
            >
              <Services />
            </LazySection>
          </section>

          <section id="portfolio">
            <LazySection 
              sectionName="Portfolio"
              threshold={0.2}
            >
              <Portfolio />
            </LazySection>
          </section>

          <section id="contact">
            <LazySection 
              sectionName="Contact"
              threshold={0.2}
            >
              <Contact />
            </LazySection>
          </section>

          <LazySection 
            sectionName="Footer"
            threshold={0.1}
          >
            <Footer />
          </LazySection>
        </main>

        {/* 🔗 Professional Links - Optimized */}
        <ErrorBoundary>
          <div className="floating-links">
            {floatingLinks.map(({ href, label, icon, className }) => (
              <a
                key={className}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`floating-link ${className}`}
                aria-label={label}
              >
                <span className="link-icon">{icon}</span>
              </a>
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;