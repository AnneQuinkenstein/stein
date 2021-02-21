import "./App.css";
import Video from "./image/kartons021.mp4";

const App = () => {
  return (
    <div className="App">
      <img src="/img/00_grab.jpg" alt="image" />
      <img src="/img/kartons02.jpg" alt="image" />
      <img src="/img/kartons022.jpg" alt="image" />
      <img src="/img/kartons023.jpg" alt="image" />
      <img src="/img/kartons024.jpg" alt="image" />
      <img src="/img/kartons025.jpg" alt="image" />
      <img src="/img/kartons026.jpg" alt="image" />
      <img src="/img/kartons027.jpg" alt="image" />
      <img src="/img/kartons021.mp4" alt="image" />
      <video controls autostart autoPlay src={Video} type="video/mp4" />
      <img src="/img/kartons011.jpg" alt="image" />
      <img src="/img/kartons012.jpg" alt="image" />
      <img src="/img/kartons013.jpg" alt="image" />
      <img src="/img/kartons014.jpg" alt="image" />
      
    </div>
  );
}

export default App;
