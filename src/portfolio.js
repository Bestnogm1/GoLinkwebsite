import bookImg from "./image/booksimg.jpg";
import issueTracker from "./image/Image 12-2-22 at 2.41 PM.jpg";
import mutantGamesimg from "./image/mutantGames.jpg";
import resume from "./documents/koffiresume.pdf";

const header = {
  homepage: "/",
  title: "KH.",
};

const about = {
  name: "Koffi Hessou",
  role: "Front End Engineer",
  description:
    "I am a junior software developer. I will ensure the best results through intuitive programming, efficient functionalities, and proper diagnoses of issues in order to ensure swift resolution of problems.",
  resume: resume,
  social: {
    linkedin: "https://www.linkedin.com/in/koffi-hessou-1b532b212/",
    github: "https://github.com/Bestnogm1",
  },
};

const projects = [
  {
    name: "Book Library",
    picture: bookImg,
    description:
      "This application is a virtual Book Library, in this application users are able to search for any book using the google books API and create a bookshelf of all the books they want to read and are even able to see what others are reading as well.",
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "Google Book API",
      "JWT AUTH",
      "Express",
      "Bootstrap",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Bestnogm1/Book-Library",
    livePreview: "https://astounding-raindrop-a52436.netlify.app/",
  },
  {
    name: "Muttant Games",
    picture: mutantGamesimg,
    description:
      "Worked on a team of 4 engineers, where we built a full MERN stack application for creating and joining video game lobbies, and worked as the git “master” managing and reviewing 7-8 incoming git pull requests daily.",
    stack: [
      "React",
      "Node.js",
      "Google Book API",
      "JWT AUTH",
      "Express",
      "Bootstrap",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Team-Mutant/Mutant-games-front-end",
    livePreview: "https://superb-faun-c00519.netlify.app/",
  },
  {
    name: "Issue Tracker ",
    picture: issueTracker,
    description:
      "Built a complete CRUD application where users are able to log in Through JWT AUTH, the application also lets users create tickets where other users can share their thoughts on how to solve the tickets and lets you drag the ticket to another section to determine its status this application also uses AWS s3 bucket to store user images",
    stack: [
      "React",
      "Node.js",
      "Select.js",
      "Modal.js",
      "JWT AUTH",
      "Express",
      "Material UI",
      "MongoDB",
    ],
    sourceCode: "https://github.com/Bestnogm1/Issue-Tracker",
    livePreview: "https://scintillating-sherbet-a5313a.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Node",
  "SASS",
  "Material UI",
  "BootStrap",
  "Git",
  "Mongo",
  "Mongooses",
  "Python",
  "SQL",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
];

const contact = {
  email: "koffiarielhessou@gmail.com",
};

export { header, about, projects, skills, contact };
