import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './stories/Button';
import { Card } from './stories/Card';
//import { Dropdown } from './stories/Dropdown';
//import { HeroImage } from './stories/Hero Image';
import { Img } from './stories/Img';
import { Table } from './stories/Table';
import profileImage from './Image.jpeg';
//import prImage from './manne.jpg';
import galImage from './gal.png';
import hmn from './hmn.png';
import nebula from './nebula.png';
import astarr from './astarr.png';
import ghuman from './ghuman.png';


const AppContainer = styled.div`
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: orange;
  color: black;
`;

const Header = styled.header`
  background: #36393f;
  color: white;
  padding: 3rem 2rem 4rem;
  text-align: left;
  position: relative;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 8px solid #36393f;
  margin: 0;
  overflow: hidden;
  box-shadow: none;
  position: relative;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 24px;
    height: 24px;
    background: #3ba55c;
    border: 4px solid #36393f;
    border-radius: 50%;
  }
`;

const NameTitle = styled.div`
  margin-bottom: 0;
  flex: 1;
  padding-top: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
  letter-spacing: normal;
  color: #ffffff;
`;

const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 400;
  color: #b9bbbe;
  margin: 0 0 1rem 0;
`;

const DiscordBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #4f545c;
  color: #dcddde;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.5rem;
  
  &::before {
    content: '🎮';
    font-size: 1rem;
  }
`;

const DiscordStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #b9bbbe;
  font-size: 0.875rem;
  
  .icon {
    width: 16px;
    height: 16px;
    background: #7289da;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: white;
  }
  
  .label {
    color: #8e9297;
  }
  
  .value {
    color: #ffffff;
    font-weight: 500;
  }
`;

const AboutSection = styled.div`
  background: #2f3136;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
  
  .title {
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 0.02em;
  }
  
  .content {
    color: #dcddde;
    font-size: 0.875rem;
    line-height: 1.4;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: -3rem auto 0;
  padding: 0 2rem 4rem;
  position: relative;
`;

const NavTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 0.375rem;
  box-shadow: 
    0 15px 35px rgba(0,0,0,0.15),
    inset 0 1px 0 rgba(255,255,255,0.4);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(102, 126, 234, 0.2) 50%, 
      transparent 100%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }
  
  
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    top: -50px;
    left: -50px;
    animation: float 6s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(200px, -20px) rotate(120deg); }
    66% { transform: translate(400px, 10px) rotate(240deg); }
  }
  
  /* Style for your Button components */
  button {
    background: rgba(255,255,255,0.6);
    color: #4a5568;
    border: 1px solid rgba(102, 126, 234, 0.2);
    padding: 0.875rem 2rem;
    border-radius: 16px;
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    min-width: 120px;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      opacity: 0;
      transition: all 0.3s ease;
      z-index: -1;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      border-radius: 50%;
      transition: all 0.3s ease;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    
    &:hover {
      transform: translateY(-2px);
      color: #2d3748;
      background: rgba(255,255,255,0.9);
      border-color: rgba(102, 126, 234, 0.4);
      
      &::after {
        width: 100px;
        height: 100px;
      }
    }
    
    /* Active state */
    &.active,
    &[style*="background-color: green"],
    &[style*="background: green"] {
      background: transparent !important;
      color: #ffffff !important;
      transform: translateY(-3px);
      box-shadow: 
        0 10px 25px rgba(102, 126, 234, 0.4),
        0 5px 15px rgba(118, 75, 162, 0.3);
      
      &::before {
        opacity: 1;
      }
      
      &::after {
        width: 120px;
        height: 120px;
        background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
      }
    }
  }
`;

const Section = styled.section`
  background: white;
  border-radius: 1px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: #1e293b;
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #3b82f6;
    border-radius: 3px;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCardContent = styled.div`
  padding: 1.5rem;

  h4 {
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
    color: #1e293b;
  }

  p {
    color: #64748b;
    margin: 0 0 1rem;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;



const App = () => {
  const [activeTab, setActiveTab] = useState('projects');



 
  const projects = [
    {
      id: '1',
      title: 'Galaxy Link Transport Management System',
      description: 'Built comprehensive landing page using React and Node.js with MySQL database integration, Did everything myself from scratch.',
      technologies: ['React', 'Node.js', 'MySQL', 'REST API'],
      imageUrl: galImage,
      link: 'https://www.galaxylinktransport.com/' 
    },
    {
      id: '2',
      title: 'Productivity Task Manager',
      description: 'Created web-based task management tool using PHP and MySQL that included progress tracking and SMART Goal setting features. Currently performing really well.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      imageUrl: hmn,
      link: 'https://astarr.ca/'
    },
    {
      id: '3',
      title: 'Nebula Space Enthusiast Portal',
      description: 'Developed interactive space exploration website with NASA API integration and community features.',
      technologies: ['PHP', 'MySQL', 'NASA API', 'JavaScript'],
      imageUrl: nebula,
      link: 'https://lime-gazelle-529446.hostingersite.com/'
    },
    {
      id: '4',
      title: 'Astarr E-Commerce Platform',
      description: 'Designed and developed full-featured e-commerce website for iPhone cases using Ruby on Rails with payment integration.',
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Active Storage'],
      imageUrl: astarr,
      link: 'in-progress'
    },
    {
      id: '5',
      title: 'Ghuman Constructions Portal',
      description: 'Project management solution with React frontend and PostgreSQL database for construction data management.',
      technologies: ['React', 'PHP', 'PostgreSQL', 'Bootstrap'],
      imageUrl: ghuman,
      link: 'in-progress'
    }
  ];

 
  const skills = [
    ['Category', 'Skills'],
    ['Languages', 'JavaScript, PHP, Python, Ruby, HTML5, CSS3'],
    ['Frontend', 'React, Next.js, Redux, Bootstrap, Tailwind CSS'],
    ['Backend', 'Node.js, Express, Ruby on Rails, REST APIs'],
    ['Databases', 'MySQL, PostgreSQL, MongoDB'],
    ['Tools', 'Git, GitHub, Docker, Jest, Storybook'],
    ['Methodologies', 'Agile, OOP, SDLC, CI/CD']
  ];


  const experience = [
    ['Role', 'Company', 'Period', 'Role description'],
    [
      'Software Developer Intern', 
      'Physics Wallah', 
      'Feb 2024 - Aug 2024', 
      'Developed interactive learning modules using Python/JavaScript, participated in Agile development cycles'
    ],
    [
      'Sales Associate', 
      'Safeway', 
      'Nov 2024 - Present', 
      'Delivered exceptional customer service, managed inventory, developed leadership skills'
    ]
  ];

  
  const education = [
    ['Program', 'Institution', 'Period', 'Description'],
    [
      'Diploma in Full Stack Web Development', 
      'Red River College Polytechnic', 
      'Aug 2024 - Dec 2025', 
      'React, Node.js, Databases, Agile Methodologies'
    ],
    [
      'Higher Secondary School', 
      'Kendriya Vidyalaya, Chandigarh', 
      'March 2021 - May 2023', 
      'Data Structures, Algorithms, Software Engineering'
    ]
  ];

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <ProfileImage>
            <img src={profileImage} alt="Harmandeep Singh" />
          </ProfileImage>
          <NameTitle>
            <Name>Harmandeep Singh</Name>
            <Title></Title>
            <DiscordBadge>
              Full Stack Developer
            </DiscordBadge>
            
            <AboutSection>
              <div className="title">About Me</div>
              <div className="content">
                I’m a passionate Full Stack Web Developer who enjoys building clean, dynamic, and user-friendly applications. With experience across front-end (React, Next.js, JavaScript, CSS) and back-end (Node.js, Express, PHP, Ruby on Rails, MySQL, MongoDB), I specialize in creating responsive web solutions that are both visually appealing and technically solid.
                I love taking an idea from scratch and turning it into a fully functional product — from designing UI components and structuring databases to deploying applications. My focus is always on performance, scalability, and delivering value through code.
                Outside of coding, I’m continuously exploring new technologies and refining my skills to stay ahead in this fast-moving tech world. My goal is to craft digital experiences that solve real problems while leaving a lasting impact.
              </div>
            </AboutSection>
            
            <DiscordStats>
              <StatItem>
                <span className="icon">💼</span>
                <span className="label">Projects:</span>
                <span className="value">5+</span>
              </StatItem>
              <StatItem>
                <span className="icon">👥</span>
                <span className="label">Connections:</span>
                <span className="value">56</span>
              </StatItem>
            </DiscordStats>
          </NameTitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <NavTabs>
          <Button 
            label="Resources" 
            bgColor={activeTab === 'projects' ? 'green' : 'transparent'}
            textColor={activeTab === 'projects' ? 'white' : '#64748b'}
            onClick={() => setActiveTab('projects')}
            
          />
          <Button 
            label="Skills" 
            bgColor={activeTab === 'skills' ? 'green' : 'transparent'}
            textColor={activeTab === 'skills' ? 'white' : '#64748b'}
            onClick={() => setActiveTab('skills')}
            
          />
          <Button 
            label="Work" 
            bgColor={activeTab === 'experience' ? 'green' : 'transparent'}
            textColor={activeTab === 'experience' ? 'white' : '#64748b'}
            onClick={() => setActiveTab('experience')}
            
          />
        </NavTabs>

        {activeTab === 'projects' && (
          <Section>
            <SectionTitle>Personal Projects</SectionTitle>
            <ProjectGrid>
              {projects.map(project => (
                <Card key={project.id} backgroundColor="#ffffff">
                  <Img 
                    src={project.imageUrl} 
                    alt={project.title}
                    width="100%"
                  />
                  <ProjectCardContent>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <TechStack>
                      {project.technologies.map(tech => (
                        <Button 
                          key={tech} 
                          label={tech} 
                          bgColor="#e2e8f0" 
                          textColor="#334155"
                          
                        />
                      ))}
                    </TechStack>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <Button 
                        label="View Project" 
                        bgColor="#3b82f6"
                        textColor="white"
                          onClick={() => {
                                          if (project.link === "in-progress") {
                                            alert("🚧 This project is still in progress!");
                                          } else {
                                            window.open(project.link, "_blank");
                                          }
                                        }}
                      />
                    </div>
                  </ProjectCardContent>
                </Card>
              ))}
            </ProjectGrid>
          </Section>
        )}

        {activeTab === 'skills' && (
          <>
            <Section>
              <SectionTitle>Technical Skills</SectionTitle>
              <Table 
                headers={skills[0]}
                data={skills.slice(1)}
              />
            </Section>
            <Section>
              <SectionTitle>Education</SectionTitle>
              <Table 
                headers={education[0]}
                data={education.slice(1)}
              />
            </Section>
          </>
        )}

        {activeTab === 'experience' && (
          <Section>
            <SectionTitle>Professional Experience</SectionTitle>
            <Table 
              headers={experience[0]}
              data={experience.slice(1)}
            />
          </Section>
        )}
      </MainContent>


    </AppContainer>
  );
};

export default App;