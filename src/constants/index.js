import react from "../assets/icons/react.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import summiz from "../assets/icons/summiz.svg";
import threads from "../assets/icons/threads.svg";
import estate from "../assets/icons/estate.svg";
import contact from "../assets/icons/contact.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // Add more skills as needed
];

export const experiences = [
    {
        title: "Game Development IG Lead",
        company_name: "MuLearn",
        icon: react, // Placeholder
        iconBg: "#accbe1",
        date: "Present",
        points: [
            "Leading the Game Development Interest Group at MuLearn.",
            "Building games and automation tools.",
        ],
    },
    {
        title: "Technical Lead",
        company_name: "ISTE",
        icon: react, // Placeholder
        iconBg: "#fbc3bc",
        date: "Present",
        points: [
            "Technical lead at ISTE.",
        ],
    },
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Slang Translate',
        description: 'A web application that translates Malayalam slang between districts, helping users understand regional language variations.',
        link: 'https://github.com/nithin-nx/slangswap',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Black Panther',
        description: 'A Telegram auto-filter bot that delivers movies, series, animations, and study materials from a structured database.',
        link: 'https://github.com/nithin-nx/FILTER-BOT',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-blue',
        name: 'SpaceQuests',
        description: 'A 2D space-themed game featuring asteroid mechanics, designed and built using Unity.',
        link: 'https://github.com/nithin-nx/SpaceQuest',
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nithin-nx',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nithin-n-145527299/',
    }
];
