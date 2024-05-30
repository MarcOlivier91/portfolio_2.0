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
    },
    {
        title: "AniCorner",
        description: "Ceci est un site rassemblant les dernières nouveautés et sorties des animes et mangas.",
        tags: ["React", "Next.js","Tailwind CSS", "Mongo DB", "Express"],
        imageUrl: aniCornerImg,
    },

    {
        title: "WeathAir (WIP)",
        description: "Ceci est une application mobile à venir donnant des informations sur la météo.",
        tags: ["Mobile", "Flutter"],
        imageUrl: weathairIng,
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
    "Mongo DB",
    "Git"
] as const;