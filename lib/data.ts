import dragonRushImg from '@/public/DragonRush_Screenshot.png'
import weathairIng from '@/public/WeathAir_Screenshot.png'
import aniCornerImg from '@/public/Anicorner_Screenshot.png'

export const links = [
    {
        name: "Home",
        route: "#home"
    },
    {
        name: "A propos",
        route: "#about"
    },
    {
        name: "Mes Projets",
        route: "#mesprojets"
    },
    {
        name: "Contact",
        route: "#contact"
    },
] as const;

export const projectsData = [
    {
        title: "Dragon Rush",
        description: "Ceci est un mini-jeu type mini-clicker",
        tags: ["HTML", "CSS", "Javascript"],
        imageUrl: dragonRushImg,
        githubRepo: "https://github.com/MarcOlivier91/DragonRush"
    },
    {
        title: "AniCorner",
        description: "Ceci est un site rassemblant les dernières nouveautés et sorties des animes et mangas.",
        tags: ["React", "Next.js","Tailwind CSS", "Mongo DB", "Express"],
        imageUrl: aniCornerImg,
        githubRepo: "https://github.com/MarcOlivier91/Anicorner"
    },

    {
        title: "WeathAir (WIP)",
        description: "Ceci est une application mobile à venir donnant des informations sur la météo et les prévisions météorologiques.",
        tags: ["Mobile", "Flutter"],
        imageUrl: weathairIng,
        githubRepo: "https://github.com/MarcOlivier91/Weathair"
    },
] as const;

export const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "Typescript",
    "React",
    "Flutter",
    "Next.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PHP",
    "Python",
    "Git"
] as const;