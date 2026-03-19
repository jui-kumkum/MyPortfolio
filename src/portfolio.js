/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kumkum Akter",
  title: "Hi, I'm Kumkum",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 passionate about building scalable web applications using Python and React."
  ),
  resumeLink: "local",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jui-kumkum",
  linkedin: "https://www.linkedin.com/in/kumkum-akter/",
  gmail: "kumkumakterjui30@gmail.com",
  facebook: "https://www.facebook.com/kumkum.jui",
  //medium: "",
  //stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Software developer focused on backend systems, APIs, and full stack web applications",
  skills: [
    "⚡ Design and implement full stack applications with modern web technologies",
    "⚡ Develop REST APIs with Python",
    "⚡ Work with React and modern frontend tools",
    "⚡ Experience with SQL and databases",
    "⚡ Use Git and GitHub for version control",
    "⚡ Apply data analysis and machine learning tools for data-driven solutions"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
      
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
      
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
      
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
       
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
        
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      
    },
    
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
     
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fas fa-database",
      
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Calgary",
      logo: require("./assets/images/ucLogo.png"),
      subHeader: "Master of Engineering in Electrical and Computer Engineering",
      duration: "Alberta, Canada",
      //desc: "Participated in the research of XXX and published 3 papers.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
    {
      schoolName: "Southeast University",
      logo: require("./assets/images/seuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "Dhaka, Bangladesh",
      //desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};



// Work experience section

const workExperiences = {
  display: true,
  experience: [
    
    {
      role: "Web Application Developer Intern",
      company: "Aaajhat.com",
      date: "Dhaka, Bangladesh",
      desc:
        "Developed backend features for e-commerce systems using Laravel. Implemented CRUD operations, database management, and API integrations while building responsive frontend interfaces."
    },

    {
      role: "Research Intern",
      company: "Time Research and Innovation",
      date: "Dhaka, Bangladesh",
      desc:
        "Conducted machine learning experiments using deep learning models and supported research documentation and validation."
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Software engineering and research projects",
  projects: [

       {
      projectName: "Integrating Smart Traffic Management and Electric Energy Generation at an Intersection",
      projectDesc:
        "IoT-based system integrating traffic optimization and energy generation using piezoelectric sensors, Arduino, and real time monitoring via ThingSpeak.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/jui-kumkum/ENEL-687-Graduate-Project"
        }
      ]
    },

    {
      projectName: "Employee Management System",
      projectDesc:
        "Full stack system with REST APIs built using Java Spring Boot and MySQL. Designed relational database schema and implemented efficient CRUD operations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/jui-kumkum/SpringBootPractice"
        }
      ]
    },


    {
      projectName: "Educational Quiz Platform",
      projectDesc:
        "Interactive quiz platform with user authentication, quiz timer, leaderboard ranking, and real time scoring system.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/MohaiminShoron/Seng-696-gr2"
        }
      ]
    },

    
    {
      projectName: "Purchase Requisition and Medicine Management System",
      projectDesc:
        "Web application built with Laravel, PHP, MySQL, and JavaScript for managing purchase orders and medicine inventory with automated sales reports.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/jui-kumkum/pharmacyManagement"
        }
      ]
    },

 
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS CLoud Basics",
      subtitle:
        "Udemi",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        
      ]
    },
    {
      title: "National Cyber Drill - BGD e-GOV CIRT",
      subtitle:
        "Participated in national cyber drill organized by BGD e-GOV CIRT.",
      image: require("./assets/images/cyber.png"),
      imageAlt: "Cyber Drill Logo",
      footerLink: [
        {
          name: "View Cyber Drill Details",
          url: "https://bgd-e-gov-cirt.org/cyber-drill"
        }
      ]
    },

    {
      title: "JavaScript, Bootstrap & PHP Development Certificate",
      subtitle: "Udemy",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: ""},
      
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 587-966-5010",
  email_address: "kumkumakterjui30@gmail.com"
};



const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
