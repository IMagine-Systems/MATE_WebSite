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
import CellContent from "./CellContent";
import CellContentMobile from "./mobile/CellContentMobile";
import kakao_icon from "../../kakao_icon.png";
import insta_icon from "../../insta_icon.png";
import gmail_icon from "../../gmail_icon.png";

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
                <CellContent />
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
                <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: 561, backgroundColor: '#ECECEC'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center', fontSize: "40px", fontWeight: 800, marginBottom: 83}}>
                            <span>CONTACT</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <a href={"https://open.kakao.com/o/smLBiP1c"}><img style={{marginRight: 56}} src={kakao_icon} /></a>
                            <a href={"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrwxddWhMFTLwBlgSWgcHLMlfWkZHDppGsmfpHsKbcJCmTBWdTSbKcdkBGTBVTSstFDvV"}><img style={{marginRight: 56}}src={gmail_icon} /></a>
                            <a href={"https://instagram.com/mate_offical.kr?igshid=YmMyMTA2M2Y="}><img src={insta_icon} /></a>
                        </div>
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
                <CellContentMobile />
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
                <footer style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECECEC'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex',justifyContent: 'center', fontSize: "25px", marginTop: 35, fontWeight: 800, marginBottom: 83}}>
                            <span>CONTACT</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: 35}}>
                            <a href={"https://open.kakao.com/o/smLBiP1c"}><img style={{ width: "40px", height: "40px", marginRight: 56}} src={kakao_icon} /></a>
                            <a href={"https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwrwxddWhMFTLwBlgSWgcHLMlfWkZHDppGsmfpHsKbcJCmTBWdTSbKcdkBGTBVTSstFDvV"}><img style={{ width: "40px", height: "40px", marginRight: 56}}src={gmail_icon} /></a>
                            <a href={"https://instagram.com/mate_offical.kr?igshid=YmMyMTA2M2Y="}><img style={{width: "40px", height: "40px"}} src={insta_icon} /></a>
                        </div>
                    </div>
                </footer>
            </Mobile>
        </div>
    </>
      
    );
}

export default Home;
