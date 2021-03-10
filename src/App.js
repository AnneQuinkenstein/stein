import "./App.css";

const App = () => {
  return (
    <>
      <div className="links">
        <div>
          <a href="https://www.obernkirchener-sandstein.de/de/farben">
            Obernkirchener Sandstein
          </a>
          <br />
          <a href="https://www.obernkirchener-sandstein.de/de/bearbeitete-oberflaechen">
            Oberflächenbearbeitungen
          </a>
        </div>
        <div>
          <p>Vieles bleibt offen.</p>
          <p>Feli - Architektin etc. </p>
        </div>
      </div>
      <h1>Kartons eher seitlich </h1>
      <div className="App">
        <img src="/img/kartons02.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons022.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons023.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons027.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons024.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons025.jpg" alt="Kartonsanordnung 2" />
        <img src="/img/kartons026.jpg" alt="Kartonsanordnung 2" />
        {/* <video controls autostart autoPlay src="https://app.box.com/s/rv1ek3chvh47w8gwn1jfc5c3869yszxe" type="video/mp4" /> */}
      </div>
      <h1>Kartons eher hinten </h1>
      <div className="App">
        <img src="/img/kartons011.jpg" alt="Kartonsanordnung 1" />
        <img src="/img/kartons012.jpg" alt="Kartonsanordnung 1" />
        <img src="/img/kartons013.jpg" alt="Kartonsanordnung 1" />
      </div>
      <h1> weitere </h1>
      <div className="App">
        <img src="/img/00_grab.jpg" alt="Grab" />
        <img src="/img/Sommer5.jpg" alt="Grab im Sommer" />
        <img src="/img/Sommer6.jpg" alt="Grab im Sommer" />
        <img src="/img/Sommer7.jpg" alt="Grab im Sommer" />
        <img src="/img/Grabstein-entwurf-2.jpg" alt="Grab im Sommer" />
        <img src="/img/Grabstein-entwurf-2b.jpg" alt="Grab im Sommer" />
        <img src="/img/steinanordnung.jpg" alt="Steine" />
      </div>
    </>
  );
};

export default App;
