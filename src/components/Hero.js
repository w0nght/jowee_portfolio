export default function Hero() {
    return (
        <section id="home" className="hero">
            <h1>Hi, I’m Joey!</h1>
            <h2>
                A <span className="highlight">Software Engineer</span> passionate about
                building clean, interactive, and accessible web experiences.
            </h2>
            <p>Frontend-focused, full-stack capable. Turning ideas into helpful tools.</p>
            <div className="hero-buttons">
                <a href="/#projects"><button>View Projects</button></a>
                <a href="/Joey Wong CV 2025.pdf" download><button>Download CV</button></a>
            </div>
        </section>
    );
}