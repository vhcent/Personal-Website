import sorting from "../../assets/sorting-algorithm-visualizer.png";
import pathfinding from "../../assets/pathfinding-algorithm-visualizer.png";
import personalWebsite from "../../assets/personal-website.png";
import recipeKeeper from "../../assets/recipe-keeper.png";

export const ProjectsData = [
    {
        title: "Recipe Keeper",
        icon: recipeKeeper,
        link: "https://play.google.com/store/apps/details?id=com.recipeKeeper",
        github: "https://github.com/vhcent/Recipe-Keeper",
        description:
            "A full-stack mobile app made from React Native, Node.js, AWS, MySQL, and Auth0 which features the searching of recipes based on pantry ingredients using the Spoonacular Recipe API. Built a multi-endpoint HTTP API with input validation and authorization using JWT tokens and a MySQL database to store user and recipe info using Amazon Web services such as Lambda, API Gateway, and RDS. Used OAuth from Auth0 to support a login user system which secured API endpoints.",
    },
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
        link: "http://pathfinding-algorithm-visualizer.s3-website-us-west-1.amazonaws.com/",
        github: "https://github.com/vhcent/Pathfinding-Algorithm-Visualizer",
        description:
            "An algorithm visualizer build from HTML, CSS, JavaScript, and React that showcases various graph algorithms such as Dijkstra's algorithm, Breadth First Search, and Depth First Search. Includes options for adjusting terrain, adding weights, changing speeds, among many.",
    },
    {
        title: "Sorting Algorithm Visualizer",
        icon: sorting,
        link: "http://sorting-algorithm-visualizer.s3-website-us-west-1.amazonaws.com/",
        github: "https://github.com/AroopBiswal/Sorting-Algorithm-Visualizer",
        description:
            "An algorithm visualizer which depicts classic sorting algorithms made from HTML, CSS, JavaScript, and React. Displays classic algorithms such as merge sort, quick sort, heap sort, etc. Provides options for visualization speed and element size.",
    },
];
