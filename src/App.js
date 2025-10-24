import './App.css';
import pawLogo from "./images/paw.png";
import dog from "./images/dog.png";
import cat from "./images/cat.png";

function App() {
  return (
    <main>
      <div id="all-buttons">
        <button className="btn" id="dog">
          <img src={dog} className="icon" alt="pixel-dog" />
        </button>
        <button className="btn" id="cat">
          <img src={cat} className="icon" alt="pixel-cat" />
        </button>
        <button className="btn" id="surprise">?</button>
      </div>
      <div id="frame">
        <div className="animal-pic" id="dog-div">
          <div className="pic-header">
            <button className="close-btn" id="dog-close">x</button>
          </div>
          <img src="" alt="" id="dog-pic" />
        </div>
        <div className="animal-pic" id="cat-div">
          <div className="pic-header">
            <button className="close-btn" id="cat-close">x</button>
          </div>
          <img src="" alt="" id="cat-pic" />
        </div>
        <div className="animal-pic" id="fox-div">
          <div className="pic-header">
            <button className="close-btn" id="fox-close">x</button>
          </div>
          <img src="" alt="" id="fox-pic" />
        </div>
      </div>
      <footer>
        <img src={pawLogo} alt="paw-logo" id="paw-icon" />
        <h1 id="title">Pet PC</h1>
        <h2 className="h2" id="current-task">Select a pet and say "aaaaw!"</h2>
        <h2 className="h2" id="adult-task">Important work and other adult stuff</h2>
      </footer>
    </main>
  );
}

export default App;
