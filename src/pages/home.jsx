import React from "react";
import kali from "./../assets/web.svg";
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import { useRef } from "react";
import breach from "./../assets/achievements/Breacheverse.jpg";
import nullkiet from "./../assets/achievements/Null-Ghaziabad.jpg";
import nullmeetup from "./../assets/achievements/Null-meetup.jpg";
import school from "./../assets/achievements/School.jpg"
import LinuxBootcamp from "./../assets/achievements/LinuxBootcamp.jpg"
function GlowingButton() {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // update CSS variables dynamically
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      ref={btnRef}
      className="about-button mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      onMouseMove={handleMouseMove}
    >
      Get Started
    </button>
  );
}

const AchievementCard = ({ title, description, imageUrl }) => (
  <div className="achievement-card">
    <img src={imageUrl} alt={title} className="achievement-image" />
    <div className="achievement-content">
      <h3 className="achievement-title">{title}</h3>
      <p className="achievement-description">{description}</p>
    </div>
  </div>
);
export default function VoidPage() {
  return (
    
    <div className="">
      <Navbar />
      {/* About Description */}
<div className="about_desc z-30">
  <div className="about-club ">
    <h1 className="about-club-h1 ">
      Enter into the Cyber Arena with VOID
    </h1>
    <p className="text-sm text-white  max-w-[60ch] ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      nemo soluta totam commodi atque quod! Culpa quo consectetur quae
      ipsam.
    </p>
        {/* glowing button */}
       <GlowingButton />
  </div>
</div>



{/* testing tailwind */}
{/* <div className="bg-blue-500 text-green-500 p-4 m-4 rounded-lg shadow-lg">
  This div should have a blue background, white text, padding, margin, rounded corners, and a shadow if Tailwind is working correctly.
</div> */}




      {/* Kali SVG */}
      <div className="kali_svg_div">
      <img src={kali} alt="kali" className="kali_svg" />
      </div>
      {/* Spotlight */}
      <div className="spotlight">
        <img
          className="spotlight-svg-top"
          src="/assets/0f9e183a12bee7af6da9f9a175c71d3a.svg"
          alt=""
        />
        <img
          className="spotlight-svg-bottom"
          src="/assets/e4c3a7bd600393b1420b0ffef056534d.svg"
          alt=""
        />
        <div className="spotlight_chupao"></div>
      </div>


{/* IRC Section */}
<div className="irc-section">
  <div className="irc-panel-container" style={{ width: "100%", height: "500px" }}>
    <iframe
      src="https://web.libera.chat/#void-society"
      title="IRC Chat"
      className="irc-panel"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "8px",
      }}
    ></iframe>
  </div>
  <div className="irc-text-container">
    <h2 className="irc-heading">Join our IRC Channel</h2>
    <p className="irc-description">
      And be part of our vibrant community. Connect, collaborate, and share your
      passion for cybersecurity with like-minded individuals.
    </p>
  </div>
</div>

      {/* Achievements Section */}
      <section className="achievements-section">
        <h2 className="section-title">Our Achievements</h2>
        <p className="section-subtitle">Recognized for excellence and innovation in cybersecurity solutions.</p>
        <div className="achievements-grid">
          <AchievementCard
            title="Null – Ghaziabad Chapter at KIET"
            description=" Null is India’s largest open security community, and we are proud to operate its Ghaziabad Chapter in collaboration with our Centre of Excellence (COE). The chapter serves as a vibrant platform that connects students, faculty, and industry professionals through regular meetups and interactive sessions. These gatherings focus on the latest cybersecurity trends, real-world case studies, and occasionally even discussions on recently discovered CVEs, ensuring participants stay updated with industry practices.
The initiative has created a valuable bridge between academia and industry, opening doors for internships and job opportunities for our students while fostering collaboration across the cybersecurity community. With its strong emphasis on knowledge-sharing and networking, the chapter has quickly become a hub for aspiring and experienced professionals alike.
The very first event of the Null Ghaziabad Chapter was a resounding success, attracting more than 100 participants from outside the college. This overwhelming response highlights the growing relevance of cybersecurity and the chapter’s role in shaping a community-driven ecosystem for learning and professional growth."
            imageUrl={nullkiet}
          />
          <AchievementCard
            title="Null Meetup 2024–25"
            description=" As part of the 2024–25 session, we successfully hosted the next Null Meetup under the Ghaziabad Chapter. The event featured insightful sessions by Dr. D3 and Youghal Pathak, two highly respected figures in the Indian cybersecurity space and contributors to the Government of India’s cybersecurity initiatives. Their expertise and real-world perspectives provided participants with valuable knowledge on evolving threats and defensive strategies.
Adding to the significance of the meetup, the founders of Hackitise Labs were also present, creating an excellent opportunity for students and professionals to interact directly with leading innovators in the field. Beyond technical learning, the event served as a powerful networking platform, enabling participants to connect with experts and peers, exchange ideas, and explore future opportunities in the cybersecurity domain.
"
            imageUrl={nullmeetup}
          />
          <AchievementCard
            title="Breachverse Bootcamp"
            description="The Breachverse Bootcamp was a successfully organized paid program focused on introducing first-year students to the world of Ethical Hacking. With over 50 enthusiastic participants, the bootcamp provided a strong foundation in real-world hacking techniques, delivered through practical and hands-on demonstrations. The sessions were conducted by the Coordinator of our Centre of Excellence, ensuring that students received expert guidance and exposure to industry-relevant practices. This initiative not only built technical awareness but also created a platform for young learners to explore cybersecurity in a structured and engaging manner. The overwhelming response and participation highlighted the growing interest in cybersecurity and made the bootcamp a remarkable achievement for our team.
"
            imageUrl={breach}
          />
          <AchievementCard
            title="Linux Bootcamp – September 2024"
            description="In September 2024, we organized a Linux Bootcamp designed to take participants from the basics to advanced concepts in system usage and administration. The bootcamp was conducted by the Coordinators of our Centre of Excellence, ensuring expert guidance and a structured learning experience. With 50 registered participants, the program offered hands-on exposure to essential Linux commands, shell scripting, system management, and advanced features that are vital for both developers and cybersecurity enthusiasts. This paid initiative received an excellent response, reflecting the strong demand for practical Linux skills and the effectiveness of our applied learning approach.
"
            imageUrl={LinuxBootcamp}
          />
          <AchievementCard
            title="Ethical Hacking Bootcamp – June 2025"
            description="As part of the CyberSecureX event organized by the CSE Department, our Centre of Excellence successfully conducted an Ethical Hacking Bootcamp in June 2025. What made this initiative unique was that it was entirely managed by students, showcasing their organizational and technical capabilities. The bootcamp received an overwhelming response with 100+ paid registrations, making it one of our most impactful training events. Participants gained practical exposure to real-world hacking techniques, security tools, and hands-on demonstrations, strengthening their understanding of modern cybersecurity practices. This achievement reflects both the enthusiasm of our students and the growing demand for structured cybersecurity learning opportunities."
            imageUrl="https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Bug+Bounty"
          />
          <AchievementCard
            title="Awareness Campaign – 5 Schools"
            description="Our Centre of Excellence conducted a Cyber Awareness Campaign across five schools in the region, reaching out to over 200+ students.. The sessions were designed to be interactive and age-appropriate, covering essential topics such as safe internet practices, protection against cyberbullying, responsible use of social media, and recognizing online scams. To make the learning engaging, we included live demonstrations, visual handouts, and relatable real-life examples. The initiative not only educated young students on digital safety but also sparked curiosity about cybersecurity as a career path, leaving a lasting impact on both students and faculty."
            imageUrl= {school}
          />
        </div>
      </section>

      {/* Alumni Network Section */}
      <section className="alumni-section">
        <h2 className="section-title">Our Alumni Network</h2>
        <p className="section-subtitle">
          From VOID to leading roles in the cybersecurity industry, our alumni are making an impact.
        </p>
        <div className="alumni-content">
          <div className="alumni-photo-container">
            <img src="https://via.placeholder.com/800x500/1a1a1a/3b82f6?text=VOID+Alumni" alt="VOID Alumni Network" className="alumni-group-photo" />
          </div>
          <div className="alumni-text-container">
            <h3 className="alumni-subheading">Pioneering the Future of Cyber Defense</h3>
            <p className="alumni-description">
              Our alumni are a testament to the practical skills and deep knowledge gained at VOID. They have secured positions at top tech companies, cybersecurity firms, and government agencies, where they lead, innovate, and protect. They remain an active part of our community, mentoring current students and creating pathways for the next generation of cyber defenders.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
