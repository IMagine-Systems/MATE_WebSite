import Title from "../Title";
import { useEffect } from "react";
import Project from "./Project";
import ProjectContent from "./ProjectContent";
import Teams from "./Teams";
import { Mobile, PC } from "../media/MediaQuery";
import TitleMobile from "./mobile/TitleMobile";
import ProjectMobile from "./mobile/ProjectMobile";
import ProjectContentMobile from "./mobile/ProjectContentMobile";
import TeamsMobile from "./mobile/TeamsMobile";

function Home() {
    useEffect(() => {
        const titleElement = document.querySelector("title");
        titleElement.innerHTML = "MATE – Home";

    }, []);
  return (
    <>
        <div>
            <PC>
                <Title />
                <Project />
                <ProjectContent />
                <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 634, backgroundColor: '#315EFFF2'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center'}}>
                            <span className="section2__title">CELL</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="section2__project__Paragraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로젝트를 빠르게 진행하여 시장에서<br></br>
                            실패할 아이템이 아닌 성공할 아이템을 찾아요
                            </p>
                        </div>
                    </div>
                </section>
                <section style={{width: "100%", height: 1016, display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: 114}}>
                        <div style={{width: 199, height: 199, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "50px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: 91}}>
                        <div style={{width: 199, height: 199, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "50px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center',  marginTop: 91}}>
                        <div style={{width: 199, height: 199, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "50px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                </section>
                <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 634, backgroundColor: '#315EFFF2'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center'}}>
                            <span className="section2__title">MATING</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="section2__project__Paragraph">
                            우리 함께 깜짝 놀랄 서비스를 <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            만들어 보아요
                            </p>
                        </div>
                    </div>
                </section>
                <Teams />
                <footer>
                    <div style={{backgroundColor: "#07090b", width: "100%", display: "flex", justifyContent: "center", height: 50, alignItems: 'center'}}>
                        <span style={{color:"#FFFFFF", fontSize: 33}}>Copylight & MATE</span>
                    </div>
                </footer>
            </PC>
        </div>
        <div>
            <Mobile>
                <TitleMobile />
                <ProjectMobile />
                <ProjectContentMobile />
                <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 334, backgroundColor: '#315EFFF2'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center'}}>
                            <span className="mobile_section2__title">CELL</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="mobile_section2__project__Paragraph">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로젝트를 빠르게 진행하여 시장에서<br></br>
                            실패할 아이템이 아닌 성공할 아이템을 찾아요
                            </p>
                        </div>
                    </div>
                </section>
                <section style={{width: "100%", height: 716, display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: 114}}>
                        <div style={{width: 89, height: 89, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "15px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: 91}}>
                        <div style={{width: 89, height: 89, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "15px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center',  marginTop: 91}}>
                        <div style={{width: 89, height: 89, borderRadius: "100%", backgroundColor: '#ECECEC'}}>
                        </div>
                        <span style={{ marginLeft: 59, fontSize: "15px"}}>매주 같은 Cell 팀원들과 회의</span>
                    </div>
                </section>
                <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 334, backgroundColor: '#315EFFF2'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center'}}>
                            <span className="mobile_section2__title">MATING</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <p className="mobile_section2__project__Paragraph">
                            우리 함께 깜짝 놀랄 서비스를 <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            만들어 보아요
                            </p>
                        </div>
                    </div>
                </section>
                <TeamsMobile />
                <footer>
                    <div style={{backgroundColor: "#07090b", width: "100%", display: "flex", justifyContent: "center", height: 50, alignItems: 'center'}}>
                        <span style={{color:"#FFFFFF", fontSize: 33}}>Copylight & MATE</span>
                    </div>
                </footer>
            </Mobile>
        </div>
    </>
      
    );
}

export default Home;
