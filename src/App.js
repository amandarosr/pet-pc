import "./App.css";
import { useState } from "react";
import pawLogo from "./images/paw.png";
import dog from "./images/dog.png";
import cat from "./images/cat.png";
import Swal from "sweetalert2";

function App() {
  const [dogPic, setDogPic] = useState(null);
  const [catPic, setCatPic] = useState(null);
  const [foxPic, setFoxPic] = useState(null);

  const showDogPic = async () => {
    const dogAPI = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await dogAPI.json();
    const { message } = data;
    setDogPic(message);
  };

  const showCatPic = async () => {
    const catAPI = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await catAPI.json();
    const { url } = data[0];
    setCatPic(url);
  };

  const showSurprise = async () => {
    const foxAPI = await fetch("https://randomfox.ca/floof/?ref=public_apis&utm_medium=website");
    const data = await foxAPI.json();
    const { image } = data;
    setFoxPic(image);
  };

  const noWorkAlert = () => {
    Swal.fire({
        title: "Not right now... Look at some cute pets!",
        width: "350px",
      });
  }

  return (
    <main>
      <div id="all-buttons">
        <button onClick={() => showDogPic()} className="btn" id="dog">
          <img src={dog} className="icon" alt="pixel-dog" />
        </button>
        <button onClick={() => showCatPic()} className="btn" id="cat">
          <img src={cat} className="icon" alt="pixel-cat" />
        </button>
        <button onClick={() => showSurprise()} className="btn">
          <h1 id="surprise">?</h1>
        </button>
      </div>
      <div id="frame">
        {dogPic && (
          <div className="animal-pic" id="dog-div">
            <div className="pic-header">
              <button className="close-btn" id="dog-close">
                x
              </button>
            </div>
            <img src={dogPic} alt="dog" id="dog-pic" />
          </div>
        )}
        {catPic && (
          <div className="animal-pic" id="cat-div">
            <div className="pic-header">
              <button className="close-btn" id="cat-close">
                x
              </button>
            </div>
            <img src={catPic} alt="cat" id="cat-pic" />
          </div>
        )}
        {foxPic && (
          <div className="animal-pic" id="fox-div">
            <div className="pic-header">
              <button className="close-btn" id="fox-close">
                x
              </button>
            </div>
            <img src={foxPic} alt="?" id="fox-pic" />
          </div>
        )}
      </div>
      <footer>
        <img src={pawLogo} alt="paw-logo" id="paw-icon" />
        <h1 id="title">Pet PC</h1>
        <h2 className="h2" id="current-task">
          Select a pet and say "aaaaw!"
        </h2>
        <h2 onClick={() => noWorkAlert()} className="h2" id="adult-task">
          Important work and other adult stuff
        </h2>
      </footer>
    </main>
  );
}

export default App;
