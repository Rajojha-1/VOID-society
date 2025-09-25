import React, { useEffect, useRef } from 'react';
import Navbar from '../components/navbar';
import './../index.css';
import Footer from "./../components/footer";
import { Link } from 'react-router-dom';
import Suryansh from './../assets/Members/Suryansh.png'
// Custom Hook for observing elements and adding a 'visible' class
const useAnimateOnScroll = (options) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
};

const FeatureCard = ({ icon, title, description }) => {
  const ref = useAnimateOnScroll({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="feature-card fade-in-up">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const TeamMemberCard = ({ name, role, imageUrl }) => {
    const ref = useAnimateOnScroll({ threshold: 0.3, triggerOnce: true });
    return (
        <div ref={ref} className="team-member-card fade-in-up">
            <img src={imageUrl} alt={name} className="team-member-img" />
            <h4 className="team-member-name">{name}</h4>
            <p className="team-member-role">{role}</p>
        </div>
    );
};

export default function AboutUs() {
  const heroRef = useAnimateOnScroll({ threshold: 0.5, triggerOnce: true });
  const philosophyRef = useAnimateOnScroll({ threshold: 0.4, triggerOnce: true });
  const featuresHeaderRef = useAnimateOnScroll({ threshold: 0.5, triggerOnce: true });
  const teamHeaderRef = useAnimateOnScroll({ threshold: 0.5, triggerOnce: true });
  const joinRef = useAnimateOnScroll({ threshold: 0.5, triggerOnce: true });

  const features = [
    { icon: '🚀', title: 'CTF Challenges', description: 'Engage in real-world scenarios and sharpen your offensive and defensive security skills.' },
    { icon: '🔧', title: 'Workshops & Training', description: 'Learn from industry experts through hands-on workshops on the latest tools and techniques.' },
    { icon: '🌐', title: 'Community & Networking', description: 'Connect with peers, mentors, and professionals in the cybersecurity field.' }
  ];

  const founder = { name: 'Suryansh Deshwal', role: 'Founder & Lead', imageUrl: Suryansh };

  const teamMembers = [
    { name: 'Ambar Chakravartty', role: 'President', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Kanishka', role: 'President', imageUrl: 'https://via.placeholder.com/150' },
  ];
  const coreMembers = [
    { name: 'Arjun Sharma', role: 'Vice President', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Priya Singh', role: 'Secretary', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Rahul Verma', role: 'Technical Lead', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Sneha Patel', role: 'Event Coordinator', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Vikash Kumar', role: 'Research Head', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Ananya Gupta', role: 'Marketing Lead', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Rohit Mehta', role: 'Security Analyst', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Kavya Reddy', role: 'Network Specialist', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <>
      <Navbar />
      <div className="about-us-page">
        <section ref={heroRef} className="about-hero fade-in">
          <h1 className="about-hero-title">We are the architects of the digital frontier.</h1>
          <p className="about-hero-subtitle">Exploring the depths of cyberspace to build a more secure future.</p>
        </section>

        <section ref={philosophyRef} className="about-section fade-in-up">
          <h2 className="section-title">Our Philosophy</h2>
          <p className="section-content">
        VOID Society, under the Centre of Excellence, is our institute’s dedicated cybersecurity club driven entirely by students. We go beyond textbooks by teaching and exploring real-world skills such as Linux, networking, ethical hacking, OSINT, penetration testing, and digital forensics. Our members learn through hands-on bootcamps, capture-the-flag challenges, workshops, and awareness campaigns, making cybersecurity both practical and exciting. We also host Null Chapter meetups and collaborate with industry professionals, creating direct pathways for internships and jobs. At VOID, students build, break, secure, and grow together as part of an active, ever-learning cybersecurity community.
          </p>
        </section>

        <section className="about-section">
          <h2 ref={featuresHeaderRef} className="section-title fade-in-up">What We Do</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="about-section">
          
          {/* Founder - Biggest, Center */}
          <div className="founder-container">
            <div className="founder-card">
              <img src={founder.imageUrl} alt={founder.name} className="founder-image" />
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-title">{founder.role}</p>
            </div>
          </div>

          {/* Presidents */}
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
          <h2 ref={teamHeaderRef} className="section-title fade-in-up">Meet The Team</h2>

          {/* Core Members */}
          <div className="core-members-container">
            <div className="core-members-scroll">
              {coreMembers.map((member, index) => (
                <div key={index} className="core-member-simple">
                  <img src={member.imageUrl} alt={member.name} className="core-member-image" />
                  <h4 className="core-member-name">{member.name}</h4>
                  <p className="core-member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={joinRef} className="about-join-us fade-in">
          <h2 className="section-title">Ready to Enter the Void?</h2>
          <p className="section-content">Become part of a community that challenges the status quo.</p>
          <Link to="/contact-us" className="join-us-button">Join Us</Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
