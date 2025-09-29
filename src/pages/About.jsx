export default function About() {
  return (
    <section id="about" className="about">
      <h1>Hi again, this is Joey!</h1>
      <img
        src="/assets/images/profile_pic.jpg"
        className="profile-picture"
        alt="Joey Wong portrait"
      />

      <Intro />
      <CurrentFocus />
      <Acknowledgements />
    </section>
  );
}

function Intro() {
  return (
    <>
      <h2>Thanks for dropping by my site!</h2>
      <p>
        I'm a passionate full-stack developer with a love for creating
        beautiful, functional web applications. With experience in both frontend
        and backend development, I enjoy tackling complex problems and turning
        them into elegant solutions.
      </p>
      <p>
        Outside of work, I love cooking, making coffee, and exploring new cafés,
        even if it means paying a little too much for that perfect cold brew. I
        enjoy finding creativity in everyday things, whether experimenting in
        the kitchen or discovering a cozy spot to unwind with a good brew.
      </p>
      <p>
        I believe the small passions in life fuel the big ones. Cooking teaches
        me patience and creativity, while coffee (besides keeping me awake)
        reminds me to slow down and enjoy the process.
      </p>
    </>
  );
}

function CurrentFocus() {
  return (
    <>
      <h2>Current Focus</h2>
      <p>
        I'm currently focused on developing{" "}
        <span className="highlight">
          a mobile app for English speakers to learn Cantonese
        </span>
        . This project combines my love for language learning with my technical
        skills to create an engaging educational tool.
      </p>
      <p>
        I'm always excited to take on new challenges and collaborate with others
        on interesting projects. Whether it's building innovative applications
        or exploring new technologies, I'm constantly seeking opportunities to
        grow and make an impact.
      </p>
    </>
  );
}

function Acknowledgements() {
  return (
    <>
      <h2>Special Thanks</h2>
      <p>
        Special thanks to <strong>Ash</strong>, who gave me my first real
        opportunity in the field through the <strong>FanTipper project</strong>{" "}
        while I was still at university. That experience sparked the journey I’m
        on today.
      </p>
    </>
  );
}
