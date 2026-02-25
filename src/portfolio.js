/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Felipe's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Felipe Martinez Portfolio",
    type: "website",
    url: "http://Felipehathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Felipe Martinez",
  logo_name: "FelipeMartinez",
  nickname: "super_felipe",
  subTitle:
    "Senior Full-Stack Engineer with 5+ years of experience building secure, scalable web applications as a Frontend & Backend specialist. I lead end-to-end development for web apps, from system design and implementation to deployment and optimization.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository:
    "https://github.com/felipemartinez0605/developer_portfolio",
  githubProfile: "https://github.com/felipemartinez0605",
  whatsappnumber: "+56 9 2950 8025",
  telegramID: "@superfelipeM",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Github",
    link: "https://github.com/felipemartinez0605",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/felipe-ignacio-martinez-artigas/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:felipemartinez4824@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#E3211FF",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/Felipe_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@Felipe391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad de Aconcagua",
      subtitle: "Bachelor Degree. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "UAC",
      duration: "2019 - 2023",
      descriptions: [
        "Grade: 8.7/10",
        "⚡ Graduated with a strong focus on software architecture, data structures, and system design.",
        "⚡ While participating in various events and club activities at university, I gained practical experience developing microservice-based applications and RESTful APIs.",
        "⚡ Built solid full-stack development skills, including experience with relational databases and embedded systems.",
      ],
      website_link: "https://uac.cl/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Engineer",
      subtitle: "HackerRank",
      logo_path: "cert_se_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/8d83b11e8916",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Go Programming Language",
      subtitle: "HackerRank",
      logo_path: "cert_go_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/e38d234ace45",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I lead end-to-end development for web apps, from system design and implementation to deployment and optimization. My background includes microservices architecture, modern JavaScript frameworks, and API-driven systems. I actively manage DevOps workflows, including CI/CD pipelines and cloud infrastructure, to ensure reliable and maintainable platforms. I value clean code, performance, collaboration, and continuous improvement.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Full Stack Engineer",
          company: "BetterWorld Technology",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2024 - Present",
          location: "Verginia, USA",
          description:
            "Designed, developed, and maintained a high-performance e-commerce platform supporting scalable growth, secure transactions, and seamless user experience across web and mobile devices.",
          bullets: [
            "Developed full stack features for product catalog, shopping cart, checkout, and order management systems.",
            "Built scalable backend services and RESTful APIs to support high transaction volumes.",
            "Collaborated with product managers, designers, and QA teams in Agile development cycles.",
            "Monitored application performance and implemented optimizations to ensure high availability.",
          ],
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company: "Healthware System Company",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2023 - Apr 2024",
          location: "Elgin, USA",
          description:
            "Contributed to a web-based healthcare platform by building dashboards, role-based access control, automated document workflows, AI-driven document generation, EHR integration, and secure CI/CD processes.",
          bullets: [
            "Supported development and maintenance of a web-based healthcare platform for medical staff and administrators.",
            "Designed responsive dashboards to improve operational visibility and reduce manual status checks.",
            "Built role-based access control for staff, enhancing data security and access accuracy.",
            "Developed automated document verification and notification workflows to speed up processing.",
            "Introduced an AI system to generate required document lists for treatments, boosting efficiency.",
            "Integrated hospital EHR data and maintained secure access logging with CI/CD pipelines.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Backend Engineer Intern",
          company: "ZeroFox Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "Feb 2021 - May 2023",
          location: "Santiago, Chile",
          description:
            "Delivered improvements across multiple security domains by enhancing secure coding practices, automating CI/CD security checks, strengthening cloud infrastructure security, and collaborating within Agile teams to boost alignment and delivery efficiency.",
          bullets: [
            "Improved multiple security domains, strengthening production systems.",
            "Reduced production vulnerabilities by 30–40% through secure coding and threat-focused design.",
            "Automated CI/CD security checks, reducing manual review effort by 45–55% and accelerating releases by ~25%.",
            "Enhanced cloud security, improving configuration compliance and monitoring coverage by 35–45%.",
            "Collaborated in Agile teams to boost security alignment and delivery efficiency, improving sprint-level task completion and team velocity by 20–30%.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_felipe.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.Felipehathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Lazo 1252, 8920102 San Miguel, Región Metropolitana, Chile",
    locality: "San Miguel",
    country: "Chile",
    region: "Metropolitan",
    postalCode: "8920102",
    streetAddress: "Avenida Lazo 1252",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/o2DTJZKTwiAkyPAy7",
  },
  phoneSection: [
    {
      title: "WhatsApp",
      subtitle: "+56 9 2950 8025",
    },
    {
      title: "Telegram",
      subtitle: "@superFelipeM",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
