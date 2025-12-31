import './Home.css';

interface HomeProps {
  darkMode: boolean;
}

const Home = ({ darkMode }: HomeProps) => {
  const specialties = [
    'IT Infrastructure & Network Data',
    'Unified Communications (Microsoft Teams, Zoom, Webex DI & Calling)',
    'Cyber Security & Compliance',
    'Cloud Solutions (AWS, Azure, Google)',
    'Training, Consulting, Solutions & Managed Services',
  ];

  const partners = [
    'Cisco', 'Microsoft', 'Zoom', 'Webex', 'Sprinklr',
    'Genesys', 'NICE CXOne', 'AWS', 'Azure', 'Google'
  ];

  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Enterprise Clients Served', value: '200+' },
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Uptime Guarantee', value: '99.99%' },
  ];

  const milestones = [
    { year: '2009', event: 'FSM Global Solutions founded in Hyderabad' },
    { year: '2012', event: 'Expanded to enterprise IT infrastructure services' },
    { year: '2015', event: 'Became Cisco and Microsoft certified partner' },
    { year: '2018', event: 'Launched unified communications practice' },
    { year: '2020', event: 'Reached 100+ enterprise clients milestone' },
    { year: '2022', event: 'Expanded cloud services portfolio' },
    { year: '2024', event: 'Serving 200+ clients with 500+ projects delivered' },
  ];

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

  const industries = [
    {
      name: 'Telecom',
      description: 'Enhancing connectivity and communication infrastructure for leading telecom operators.',
      solutions: [
        'Network infrastructure optimization',
        'VoIP and unified communications',
        'Customer experience platforms',
        'IoT connectivity solutions',
      ],
    },
    {
      name: 'Finance',
      description: 'Ensuring secure and compliant IT infrastructure for financial institutions.',
      solutions: [
        'Secure data center design',
        'Compliance and audit support',
        'High-availability systems',
        'Disaster recovery planning',
      ],
    },
    {
      name: 'Education',
      description: 'Supporting digital transformation in education through collaborative solutions.',
      solutions: [
        'Virtual classroom infrastructure',
        'Campus-wide wireless connectivity',
        'Learning management systems',
        'Student collaboration tools',
      ],
    },
    {
      name: 'Government',
      description: 'Delivering scalable IT frameworks that meet strict government compliance standards.',
      solutions: [
        'Secure government networks',
        'Citizen service portals',
        'Data sovereignty compliance',
        'Inter-agency communication',
      ],
    },
    {
      name: 'Healthcare',
      description: 'Providing secure and reliable communications and data solutions for healthcare providers.',
      solutions: [
        'HIPAA-compliant infrastructure',
        'Telemedicine platforms',
        'Electronic health records',
        'Medical device integration',
      ],
    },
  ];

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content container">
          <h1 className="hero-headline">
            Empowering Digital Infrastructure and Intelligent Communication
          </h1>
          <p className="hero-subheadline">
            Reliable IT infrastructure, unified communications, and cloud solutions tailored for enterprises worldwide.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a Consultation
            </a>
            <a href="#contact" className="btn btn-secondary">
              Talk to Our Experts
            </a>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2 className="section-title">Our Specialties</h2>
          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div key={index} className="specialty-card">
                <div className="specialty-icon"></div>
                <p className="specialty-text">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About FSM Global Solutions</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3 className="about-subtitle">Our Story</h3>
              <p className="about-text">
                FSM Global Solutions Pvt Ltd has been at the forefront of IT infrastructure and enterprise communications since its inception. We have evolved alongside technology, consistently delivering innovative solutions that empower organizations to thrive in the digital age.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-subtitle">Our Mission</h3>
              <p className="about-text">
                Our mission is to deliver reliable, future-ready IT infrastructure solutions that empower organizations to evolve digitally. We bridge the gap between business objectives and technology implementation, ensuring seamless transformation.
              </p>
            </div>

            <div className="about-card">
              <h3 className="about-subtitle">Our Values</h3>
              <p className="about-text">
                We value innovation, reliability, and partnership. Our commitment to client success drives us to provide expert leadership and cutting-edge technology solutions. We believe in building long-term relationships based on trust and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-event">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <h2 className="section-title">Our Solutions</h2>
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

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
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

      <section className="industries-section">
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon-wrapper">
                  <div className="industry-icon"></div>
                </div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-solutions">
                  <h4 className="solutions-heading">Our Solutions:</h4>
                  <ul className="solutions-list">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="solution-item">
                        <span className="solution-check"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="container">
          <h2 className="section-title">Technology Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card">
                <span className="partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
