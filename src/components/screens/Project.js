import Navbar from "../Navbar";
import first from "../../../src/fist.png";
import second from "../../../src/second.png";
import third from "../../../src/third.png";
import Title from "../Title";
import { useEffect } from "react";

function Project() {
    
    useEffect(() => {
        const titleElement = document.querySelector("title");
        titleElement.innerHTML = "MATE – Project";

    }, []);
    
  return (
      <div>
          <Navbar />
          <Title />

          <section>
              <img src={second} style={{width: "100%", height: "100%", display: "block"}}/>
          </section>
          <section style={{backgroundColor: "red"}}>
              <img src={third} style={{width: "100%", height: "100%", display: "block"}}/>
          </section>
          <footer>
            <div style={{backgroundColor: "#07090b", display: "flex", justifyContent: "center", height: 30, alignItems: 'center'}}>
                <span style={{color:"#FFFFFF"}}>Copylight & MATE</span>
            </div>
          </footer>
      </div>
      
    );
}

export default Project;
