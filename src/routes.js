import Home from "./Home";
import About from "./About";
import Models from "./Models";

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/models",
        element: <Models />
    }
]

export default routes