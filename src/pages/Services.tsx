import './Services.css';

interface ServicesProps {
  darkMode: boolean;
}

const Services = ({ darkMode }: ServicesProps) => {
  const services = [
    {
      title: 'Consulting',
      description: 'IT strategy planning, unified communications transformation, and cloud readiness assessments.',
      benefits: [
        'Strategic IT roadmap development',
        'Technology assessment and recommendations',
        'Digital transformation guidance',
        'ROI optimization strategies',
      ],
    },
    {
      title: 'Implementation',
      description: 'Deployment of network systems, voice integrations, and data center infrastructure tailored to your business.',
      benefits: [
        'End-to-end project management',
        'Seamless system integration',
        'Minimal business disruption',
        'Quality assurance and testing',
      ],
    },
    {
      title: 'Managed Services',
      description: '24/7 proactive monitoring, NOC/SOC management, and SLA-driven support services.',
      benefits: [
        'Round-the-clock monitoring',
        'Proactive issue resolution',
        'Performance optimization',
        'Dedicated support team',
      ],
    },
    {
      title: 'Training',
      description: 'Corporate workshops and customized technical training programs to empower your teams.',
      benefits: [
        'Hands-on technical training',
        'Customized curriculum',
        'Certification preparation',
        'Knowledge transfer programs',
      ],
    },
  ];

  return (
    <div className={`services ${darkMode ? 'dark' : 'light'}`}>
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            End-to-end services to support your technology journey
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-benefits">
                  <h4 className="benefits-title">Key Benefits:</h4>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <span className="benefit-icon"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
