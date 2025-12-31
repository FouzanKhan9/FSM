import './About.css';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const milestones = [
    { year: '2009', event: 'FSM Global Solutions founded in Hyderabad' },
    { year: '2012', event: 'Expanded to enterprise IT infrastructure services' },
    { year: '2015', event: 'Became Cisco and Microsoft certified partner' },
    { year: '2018', event: 'Launched unified communications practice' },
    { year: '2020', event: 'Reached 100+ enterprise clients milestone' },
    { year: '2022', event: 'Expanded cloud services portfolio' },
    { year: '2024', event: 'Serving 200+ clients with 500+ projects delivered' },
  ];

  return (
    <div className={`about ${darkMode ? 'dark' : 'light'}`}>
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About FSM Global Solutions</h1>
          <p className="page-subtitle">
            Leading the way in IT infrastructure and enterprise communications since inception
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2 className="content-title">Our Story</h2>
              <p className="content-text">
                FSM Global Solutions Pvt Ltd has been at the forefront of IT infrastructure and enterprise communications since its inception. We have evolved alongside technology, consistently delivering innovative solutions that empower organizations to thrive in the digital age.
              </p>
            </div>

            <div className="content-block">
              <h2 className="content-title">Our Mission</h2>
              <p className="content-text">
                Our mission is to deliver reliable, future-ready IT infrastructure solutions that empower organizations to evolve digitally. We bridge the gap between business objectives and technology implementation, ensuring seamless transformation.
              </p>
            </div>

            <div className="content-block">
              <h2 className="content-title">Our Values</h2>
              <p className="content-text">
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
    </div>
  );
};

export default About;
