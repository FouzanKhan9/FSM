import './Solutions.css';

interface SolutionsProps {
  darkMode: boolean;
}

const Solutions = ({ darkMode }: SolutionsProps) => {
  const solutions = [
    {
      title: 'Network & Data Infrastructure',
      description: 'Design and deployment of robust network architecture to support scalable enterprise operations.',
      features: ['Enterprise Network Design', 'LAN/WAN Solutions', 'Network Security', 'Performance Optimization'],
    },
    {
      title: 'Unified Communications',
      description: 'Expert integration of Microsoft Teams, Zoom, Webex DI, and Webex Calling to streamline collaboration.',
      features: ['Microsoft Teams Integration', 'Zoom Deployment', 'Webex Solutions', 'Voice Infrastructure'],
    },
    {
      title: 'AI Contact Centers',
      description: 'Advanced contact center solutions leveraging Sprinklr, Genesys, and NICE CXOne platforms.',
      features: ['AI-Powered Routing', 'Omnichannel Support', 'Analytics & Reporting', 'Customer Experience'],
    },
    {
      title: 'Cyber Security & Compliance',
      description: 'Comprehensive cybersecurity strategies to protect data and ensure regulatory compliance.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    },
    {
      title: 'Wireless & Data Center Design',
      description: 'End-to-end design and implementation for wireless infrastructure and data center optimization.',
      features: ['Wireless Network Design', 'Data Center Architecture', 'Infrastructure Optimization', 'Capacity Planning'],
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Cloud migration and management services for AWS, Azure, and Google Cloud ecosystems.',
      features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Infrastructure as Code', 'Cloud Optimization'],
    },
  ];

  return (
    <div className={`solutions ${darkMode ? 'dark' : 'light'}`}>
      <section className="solutions-hero">
        <div className="container">
          <h1 className="page-title">Our Solutions</h1>
          <p className="page-subtitle">
            Comprehensive technology solutions designed to transform your enterprise
          </p>
        </div>
      </section>

      <section className="solutions-grid-section">
        <div className="container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon"></div>
                  <h3 className="solution-title">{solution.title}</h3>
                </div>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="solution-feature">
                      <span className="feature-bullet"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
