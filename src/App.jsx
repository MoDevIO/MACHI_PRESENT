import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const btn = document.getElementById("create-button");
    const el = document.getElementById("cg-text");

    btn.addEventListener(
      "click",
      () => {
        document.getElementById("cg-description").style.opacity = 0;
        el.innerText = "";
        setTimeout(() => {
          el.innerText = "C";
          setTimeout(() => {
            el.innerText = "Cr";
            setTimeout(() => {
              el.innerText = "Cr";
              setTimeout(() => {
                el.innerText = "Cre";
                setTimeout(() => {
                  el.innerText = "Crea";
                  setTimeout(() => {
                    el.innerText = "Creat";
                    setTimeout(() => {
                      el.innerText = "Creati";
                      setTimeout(() => {
                        el.innerText = "Creatin";
                        setTimeout(() => {
                          el.innerText = "Creating";
                          setTimeout(() => {
                            el.innerText = "Creating G";
                            setTimeout(() => {
                              el.innerText = "Creating Ga";
                              setTimeout(() => {
                                el.innerText = "Creating Gam";
                                setTimeout(() => {
                                  el.innerText = "Creating Game";
                                  setTimeout(() => {
                                    el.innerText = "Creating Game.";
                                    setTimeout(() => {
                                      el.innerText = "Creating Game..";
                                      setTimeout(() => {
                                        el.innerText = "Creating Game...";
                                        setTimeout(() => {
                                          document.getElementById(
                                            "cg-description"
                                          ).style.opacity = 1;
                                        }, 200);
                                      }, 200);
                                    }, 200);
                                  }, 100);
                                }, 100);
                              }, 100);
                            }, 100);
                          }, 100);
                        }, 100);
                      }, 100);
                    }, 100);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      },
      []
    ); // run once after DOM renders
  }, []);

  return (
    <div className="wrapper">
      <img src="TITLESCREEN.png" alt="Title" />
      <div className="grid">
        <div id="create-button" />
      </div>
      <h1 id="cg-text"></h1>
      <p id="cg-description">during the Christmas holidays</p>
    </div>
  );
}

export default App;
