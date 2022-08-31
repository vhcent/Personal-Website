import sorting from "../../assets/sorting-algorithm-visualizer.png";
import pathfinding from "../../assets/pathfinding-algorithm-visualizer.png";
import personalWebsite from "../../assets/personal-website.png";

export const ProjectsData = [
    {
        title: "Personal Website",
        icon: personalWebsite,
        link: "",
        github: "https://github.com/vhcent/Personal-Website",
        description:
            "A personal portfolio made from HTML, CSS, JavaScript, React, and EmailJS which displays my information, skills, and experience.",
    },
    {
        title: "Pathfinding Algorithm Visualizer",
        icon: pathfinding,
        link: "https://pathfindingalgovisual.herokuapp.com/",
        github: "https://github.com/vhcent/Pathfinding-Algorithm-Visualizer",
        description:
            "An algorithm visualizer build from HTML, CSS, JavaScript, and React that showcases various graph algorithms such as Dijkstra's algorithm, Breadth First Search, and Depth First Search. Includes options for adjusting terrain, adding weights, changing speeds, among many.",
    },
    {
        title: "Sorting Algorithm Visualizer",
        icon: sorting,
        link: "https://sortingalgovisual.herokuapp.com/",
        github: "https://github.com/AroopBiswal/Sorting-Algorithm-Visualizer",
        description:
            "An algorithm visualizer which depicts classic sorting algorithms made from HTML, CSS, JavaScript, and React. Displays classic algorithms such as merge sort, quick sort, heap sort, etc. Provides options for visualization speed and element size.",
    },
];
