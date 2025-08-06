// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';

import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Experience Section Logo's
import ieeeLogo from './assets/education_logo/ieee.jpeg';
// Education Section Logo's
import viitLogo from './assets/education_logo/viit.png';
import HscLogo from './assets/education_logo/hsc.jpg';
import SscLogo from './assets/education_logo/ssc.png';


// Project Section Logo's
import portfolioLogo from './assets/work_logo/portfolio.png';
import collageLogo from './assets/work_logo/collageweb.png';
import tradingLogo from './assets/work_logo/trading.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: ieeeLogo,
      role: "Technical Team Associate",
      company: "IEEE VIIT Pune",
      date: "April 2024 - Present",
      desc: "Contributed to the development of technical solutions as a Technical Team Associate, focusing on building and maintaining full-stack applications. Collaborated with team members to implement responsive UIs, integrate RESTful APIs, and troubleshoot issues in real-time. Gained hands-on experience with version control, and modern development tools.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Presentation",
        "Soft skills",
        "Communication",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: viitLogo,
      school: "Vishwakarma Institute of Information Technology , Pune",
      date: "june 2023 - July 2027",
      grade: "8.88 CGPA",
      desc: "I completed my B.Tech in Artificial Intelligence and Data Science from VIIT , Pune, where I gained a solid foundation in machine learning, data analytics, and software development. Alongside my core AI studies, I developed strong skills in Full Stack Development, Java, REST APIs, HTML, CSS, JavaScript,MongoDb , and MySQL.I also worked on practical projects that enhanced my problem-solving and application-building abilities.",
      degree: "Bachelor of Technology ,B-Tech",
    },
    {
      id: 1,
      img: HscLogo,
      school: "Late GP Junier collage , Nanded",
      date: "june 2022 - july 2023",
      grade: "62.33%",
      desc: "I completed my 12th grade (Senior Secondary Education) from Late GP Junier collage , Nanded, affiliated with State Board, with a focus on the Science stream. During this time, I developed a strong foundation in subjects such as Mathematics, Physics, and Computer Science, which sparked my interest in technology and programming. This academic experience laid the groundwork for my future studies in Computer Science and helped me build logical thinking and problem-solving skills.",
      degree: "HSC ",
    },
    {
      id: 2,
      img: SscLogo,
      school: "Late BP High-school , Dongarkada Hingoli",
      date: "june 2021 - july 2022",
      grade: "90.40%",
      desc: "I completed my 10th grade (Secondary Education) from Late BP High-school , Dongarkada Hingoli, affiliated with State Board. During this period, I built a strong academic foundation across core subjects like Mathematics, Science, and English. This stage played a key role in shaping my curiosity and discipline, ultimately motivating me to pursue a career in the field of technology.",
      degree: "SSC ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Personal Portfolio Website (Frontend)",
      description:
        "A clean and responsive personal portfolio built with React.js to showcase my projects, skills, and experience. It highlights my work, provides contact information, and serves as an online resume for recruiters and collaborators.",
      image: portfolioLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind css"],
      github: "https://github.com/rushikeshade2005/My-Personal-Portfolio-Website",
      webapp: "",
    },
    {
      id: 1,
      title: "Collage Club Website (Full Stack)",
      description:
        " The College Club Website is a dynamic platform designed to showcase and manage various student clubs and events within a college. It allows users to explore clubs, view upcoming events, and participate through a clean, interactive interface. Built using HTML, CSS, JavaScript, Node.js, and MongoDB, it streamlines student engagement and club coordination",
      image: collageLogo,
      tags: ["EJS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Bootstrap"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Stock Trading PlatForm (Frontend)",
      description:
        " The Stock Trading Platform (Frontend) is a responsive web interface for simulating stock trading activities. It includes features like stock charts, order placement, and portfolio tracking. Built using HTML, CSS, JavaScript, React.js, and Bootstrap, it offers a sleek and user-friendly experience across devices.",
      image: tradingLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "BootStrap"],
      github: "",
      webapp: "",
    },
  ];  