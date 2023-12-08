import Home from "./Home";
import About from "./About";
import Models from "./Models";
import Create from "./Create";

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
    {
        path: "/create",
        element: <Create />
    }
]

export default routes