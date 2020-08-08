/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sughosh Dixit",
  title: "Namaste _/|\\_ I'm Sughosh!",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Flask  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/141eJK4hM0YueDS8sSW6eMzIo89YKYHQv/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "http://github.com/invincible0809",
  linkedin: "https://www.linkedin.com/in/sughosh-dixit",
  gmail: "sughoshpdixit@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  instagram: "https://www.instagram.com/sughoshdixit/",
  twitter: "https://twitter.com/PSughosh",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "CRAZY LIVERPOOL F.C FAN WHO WANTS TO EXPLORE EVERY TECH STACK AND DO SOME EXCITING PROJECTS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Want to go to ANFIELD one day!"),
    emoji("⚡ If you think you have an exiting idea to work on, PING ME!!!"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Intern",
      company: "Printalytix",
      companylogo: require("./assets/images/logo.png"),
      date: "July 2K18 - September 2K18",
      desc:
        "Worked as a design intern, participated as a guide along with senior colleagues at the aforementioned company, at Workbench Projects,Bangalore in a national level innovation competition organized by Niti-Ayog.",
      descBullets: [
        "Contributed in designing BPMN (Business Process Modelling and Notation) for various different scenarios. ",
        "Learnt how to operate an FDM 3-D printer, learnt their working to produce some prototypes.",
      ],
    },
    {
      role: "Web Development Intern",
      company: "Printalytix",
      companylogo: require("./assets/images/logo.png"),
      date: "Jan 2K20 – Feb 2K20",
      desc: "Worked on Web Platform Development",
    },
    {
      role: "Developer Intern",
      company: "Siemens A G",
      companylogo: require("./assets/images/siemens.png"),
      date: "Feb 2K20 – May 2K20",
      desc: "Worked on a Live Lead Gen Project",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      link: "https://printalytix.com/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Top 25 Exciting Idea at PANIIT All India Hackathon",
      subtitle:
        "The project Alphers was an Early Age Education Monitoring Application",
      image: require("./assets/images/paniit.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
        {
          name: "Project Link",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
        },
      ],
    },
    {
      title: "Rakathon 2.0",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/Rakuten.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
      ],
    },

    {
      title: "IRJET Publication",
      subtitle:
        "A Manuscript based on my team's Final Year Engineering Project",
      image: require("./assets/images/IRJET.jpg"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "With Passion for Developing cool stuff, I'd love to write blogs!",

  blogs: [
    {
      url:
        "https://sughoshdixit.blogspot.com/p/being-ardent-liverpool-fan-i-can-tell.html",
      title: "WHY SUPPORT LIVERPOOL F.C",
      description:
        "#YNWA Read why Liverpool F.C is such a great club to support and why I support it!",
    },
    {
      url: "https://sughoshdixit.blogspot.com/2019/09/netsparker-tool.html",
      title: "Netsparker",
      description: "Hands on with Netsparker tool ",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "APP",
  subtitle: emoji("My pitch on our first android app 😅"),

  talks: [
    {
      title: "Quaratine For Sure",
      subtitle:
        "An app to monitor and guide Quarantined Individuals during COVID-19",
      slides_url: "#",
      event_url: "https://www.youtube.com/watch?v=UWUO_3lW8zE&t=4s",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("My Song 🎙️"),
  subtitle: "I love to sing some good Hindi Songs!!",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/sughosh-p-dixit/embed/episodes/My-first-try-on-a-Coke-Studio-song-ehrh02",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8310080859",
  email_address: "sughoshpdixit@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "PSughosh", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
