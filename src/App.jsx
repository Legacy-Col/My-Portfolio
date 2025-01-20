import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="overflow-x-hidden text-stone-300 antialiased">
        <div className="relative h-full w-full bg-black">
          <div className="container mx-auto px-8">
              <Navbar />
              <Hero />
              <Technologies />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App