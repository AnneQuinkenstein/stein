import "./App.css";

const App = () => {
  return (
    <>
     
        <div className="links">
          <tr>
            <td>
              <h2>Beschaffenheit Steine</h2>
            </td>
            <br />
            <td>
              <a href="https://www.obernkirchener-sandstein.de/de/farben">
                Obernkirchener Sandstein
              </a>
            </td>
            <br />
            <td>
              <a href="https://www.obernkirchener-sandstein.de/de/bearbeitete-oberflaechen">
                Oberflächenbearbeitungen
              </a>
            </td>
          </tr>
        </div>
        <div className="links">
          <h2>Schrift</h2>
          <div className="imgcontainer">
            <img src="/img/font1.jpg" alt="Schrift Counterplaning Buch" />
            <img src="/img/font2.jpg" alt="Schrift Kitchen Buch" />
            <img src="/img/steinarchitekt.jpg" alt="Schrift Nachbargrabstein" />
            <img src="/img/Schrift_Grabstein.png" alt="Schrift Grabstein" />
          </div>
          <p>
            Die Schrift Noah habe ich nicht kostenfrei herunterladen können.{" "}
      Ich habe eine ähnliche gefunden, Aron Grotesque. 
            Sie hat nur einen komischen Schnörkel beim st, den ihr euch
            wegdenken müsst.
          </p>
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
      {/* <h1>Kartons eher hinten </h1>
      <div className="App">
        <img src="/img/kartons011.jpg" alt="Kartonsanordnung 1" />
        <img src="/img/kartons012.jpg" alt="Kartonsanordnung 1" />
        <img src="/img/kartons013.jpg" alt="Kartonsanordnung 1" />
      </div> */}
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
