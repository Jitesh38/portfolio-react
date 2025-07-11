//html
import todoApp from "../assets/projects/hcj/todoApp.png";
import Temprature from "../assets/projects/hcj/Temprature.png";
import tellJoke from "../assets/projects/hcj/tellJoke.png";
//python
import textUtils from "../assets/projects/python/textUtils.png";
import Bblogs from "../assets/projects/python/Bblogs.png";
import Etech from "../assets/projects/python/Etech.png";
//react
import password_generator from "../assets/projects/react/password_generator.png";
import currency_converter from "../assets/projects/react/currency_converter.png";
import expense_tracker from "../assets/projects/react/expense_tracker.png";

//mern stack
import videotube from "../assets/projects/mern/videoTube.png"

import cLogo from "../assets/svg/C.svg";
import pythonLogo from "../assets/svg/python.svg";
import jsLogo from "../assets/svg/js.svg";
import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import bootstrapLogo from "../assets/svg/bootstrap.svg";
import tailwindLogo from "../assets/svg/tailwind.svg";
import reactLogo from "../assets/svg/react.svg";
import djangoLogo from "../assets/svg/django.svg";
import reduxLogo from "../assets/svg/redux.svg";
import gitLogo from "../assets/svg/git.svg";
import vscodeLogo from "../assets/svg/vscode.svg";
import postmanLogo from "../assets/svg/postman.svg";
import appwriteLogo from "../assets/svg/appwrite.svg";
import nodeLogo from "../assets/svg/node.svg"
import expressLogo from "../assets/svg/express.svg"
import mongoLogo from "../assets/svg/mongodb.svg"
import sqlLogo from "../assets/svg/sql.svg"




const project = [
    {
        id: 1,
        img: todoApp,
        title: "TODO App",
        content: "A simple and efficient To-Do application built with JavaScript, utilizing LocalStorage to save tasks. Includes features like adding, editing, and deleting tasks.",
        link: "https://jitesh38.github.io/TodoApp/",
        technologies: [
            {
                name: "HTML",
                logo: htmlLogo,
                color: "bg-red-200 text-red-600"
            },
            {
                name: "CSS",
                logo: cssLogo,
                color: "bg-sky-200 text-sky-600"
            },
            {
                name: "JavaScript",
                logo: jsLogo,
                color: "bg-yellow-200 text-yellow-600"
            },
        ],
        category: "Frontend"
    },
    {
        id: 2,
        img: Temprature,
        title: "Weather App",
        content: "A dynamic Weather App built using JavaScript and the Fetch API to retrieve real-time weather data from an external API. Users can search for any location and get up-to-date weather details.",
        link: "https://jitesh38.github.io/Weather/",
        technologies: [
            {
                name: "HTML",
                logo: htmlLogo,
                color: "bg-red-200 text-red-600"
            },
            {
                name: "CSS",
                logo: cssLogo,
                color: "bg-sky-200 text-sky-600"
            },
            {
                name: "JavaScript",
                logo: jsLogo,
                color: "bg-yellow-200 text-yellow-600"
            },
        ],
        category: "Frontend"
    },
    {
        id: 3,
        img: tellJoke,
        title: "Tell me a Joke!",
        content: "A fun and interactive joke generator built with JavaScript, displaying random jokes using the Math.random() function. Refreshes with a new joke each time for endless entertainment.",
        link: "https://jitesh38.github.io/tell-me-joke/",
        technologies: [
            {
                name: "HTML",
                logo: htmlLogo,
                color: "bg-red-200 text-red-600"
            },
            {
                name: "CSS",
                logo: cssLogo,
                color: "bg-sky-200 text-sky-600"
            },
            {
                name: "JavaScript",
                logo: jsLogo,
                color: "bg-yellow-200 text-yellow-600"
            },
        ],
        category: "Frontend"
    },


    {
        id: 4,
        img: textUtils,
        title: "TextUtils",
        content: "A text analysis tool built with Django that allows users to manipulate text by counting characters, removing punctuation, eliminating new lines, and capitalizing text.",
        link: "https://github.com/Jitesh38/TextUtils",
        technologies: [
            {
                name: "Python",
                logo: pythonLogo,
                color: "bg-yellow-200 text-yellow-600"
            },
            {
                name: "Django",
                logo: djangoLogo,
                color: "bg-green-200 text-green-600"
            },
        ],
        category: "Backend"
    },
    {
        id: 5,
        img: Bblogs,
        title: "Bblogs",
        content: "A blog website built with Django, implementing full CRUD functionality and user authentication. Users can create, read, update, and delete blog posts while managing secure login and registration.",
        link: "https://github.com/Jitesh38/Bblog",
        technologies: [{
            name: "Python",
            logo: pythonLogo,
            color: "bg-yellow-200 text-yellow-600"
        },
        {
            name: "Django",
            logo: djangoLogo,
            color: "bg-green-200 text-green-600"
        },],
        category: "Backend"
    },
    {
        id: 6,
        img: Etech,
        title: "Etech Bazzar",
        content: "A feature-rich e-commerce platform developed as a college group project using Django. Allows users to browse products, add items to the cart, and choose from multiple payment methods for a seamless shopping experience.",
        link: "https://www.youtube.com/watch?v=Jupmtl_ogV8",
        technologies: [{
            name: "Python",
            logo: pythonLogo,
            color: "bg-yellow-200 text-yellow-600"
        },
        {
            name: "Django",
            logo: djangoLogo,
            color: "bg-green-200 text-green-600"
        },],
        category: "Backend"
    },


    {
        id: 7,
        img: password_generator,
        title: "Password Generator",
        content: "A secure and customizable password generator built with React, utilizing useState and useEffect hooks. Allows users to generate strong passwords with adjustable length and character options",
        link: "https://voluble-cranachan-dc8fa5.netlify.app/",
        technologies: [{
            name: "React",
            logo: reactLogo,
            color: "bg-blue-200 text-blue-600"
        }
        ],
        category: "Frontend"
    },
    {
        id: 8,
        img: currency_converter,
        title: "Currency Converter",
        content: "A real-time currency converter built with React, allowing users to convert between different currencies using live exchange rates. Provides a seamless and interactive experience.",
        link: "https://currency-converter-jitesh-prajapatis-projects-9615268f.vercel.app/",
        technologies: [{
            name: "React",
            logo: reactLogo,
            color: "bg-blue-200 text-blue-600"
        }],
        category: "Frontend"
    },
    {
        id: 9,
        img: expense_tracker,
        title: "Expense Tracker",
        content: "A React-based Expense Tracker that helps users manage their finances by adding and visualizing expenses. Integrated with Chart.js for insightful data visualization.",
        link: "https://jitesh38.github.io/expense-tracker/",
        technologies: [{
            name: "React",
            logo: reactLogo,
            color: "bg-blue-200 text-blue-600"
        }],
        category: "Frontend"
    },
    {
        id: 10,
        img: videotube,
        title: "VideoTube",
        content: "Developed a YouTube-like video-sharing platform with user authentication, video uploads, likes,comments, playlists, and subscriptions using React, Node.js, Express, and MongoDB.",
        link: "https://github.com/Jitesh38/VideoTube",
        technologies: [
            {
                name: "React",
                logo: reactLogo,
                color: "bg-blue-200 text-blue-600"
            },
            {
                name: "Node",
                logo: nodeLogo,
                color: "bg-gray-200 text-slate-600"
            },
            {
                name: "MongoDB",
                logo: mongoLogo,
                color: "bg-lime-200 text-slate-600"
            },
        ],
        category: "Backend"
    },
]


export default project