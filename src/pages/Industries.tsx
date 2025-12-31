import './Industries.css';

interface IndustriesProps {
  darkMode: boolean;
}

const Industries = ({ darkMode }: IndustriesProps) => {
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
    <div className={`industries ${darkMode ? 'dark' : 'light'}`}>
      <section className="industries-hero">
        <div className="container">
          <h1 className="page-title">Industries We Serve</h1>
          <p className="page-subtitle">
            Tailored technology solutions across diverse sectors
          </p>
        </div>
      </section>

      <section className="industries-content">
        <div className="container">
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
    </div>
  );
};

export default Industries;
