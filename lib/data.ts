export const links = [
    {
        name: "Home",
        route: "#home"
    },
    {
        name: "Intro",
        route: "#intro"
    },
    {
        name: "Projets",
        route: "#projets"
    },
    {
        name: "Contact",
        route: "#contact"
    },
] as const;

export const projectsData = [
    {
        title: "AniCorner",
        description: "Ceci est un site rassemblant les dernières nouveautés et sorties des animes et mangas.",
        tags: ["React", "Next.js", "MongoDB", "Express.js"],
        //imageUrl: aniCornerImg,
    },

    {
        title: "WeathAir",
        description: "Ceci est une application mobile donnant des informations sur la météo.",
        tags: ["Flutter"],
        //imageUrl: weathairIng,
    },
] as const;

export const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Python",
    "PHP",
    "Git"
] as const;