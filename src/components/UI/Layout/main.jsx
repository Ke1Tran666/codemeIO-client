import Content from "./Content";
import Navbar from "./navbar";

const Main = () => {
    return (
        <main className="grid grid-cols-1 pt-8 xl:pt-0 xl:w-[calc(100%-300px)] ml-auto lg:min-h-screen relative items-start">
            <Navbar />
            <Content />
        </main>
    )
}

export default Main;