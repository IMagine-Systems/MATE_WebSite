import React, { useState } from "react";
import styles from "../../../TeamsMobile.module.css";
import TeamContentMobile from "./TeanContentMobile";
import ButtonMobile from "../../ButtonMobile";

export default function TeamsMobile() {
    const teamSelectElement = document.querySelector(".selector");
    const [ select, setSelect ] = useState("PO");

    function onClickSelectTeams(event) {
        //console.log(event.target);
        //console.log(event.target.innerText);

        const elemetnt = event.target;
        const selectTeam  = event.target.innerText;

        setSelect(selectTeam);

    }

    return (
        <section>
            <div style={{}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 181, marginBottom: 263}}>
                    <h1 style={{marginBottom: 55, fontSize: "25px"}}>지원 방법</h1>
                    <div style={{display: 'flex' }}>
                        <div style={{backgroundColor:"#ECECEC", width: 84, height: 167, marginRight: 13, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 13, fontSize: "15px", fontWeight: 600}}>모집 기간</span>
                            <span style={{fontWeight: 400, fontSize: "15px"}}>상사모집!</span>
                        </div>
                        <div style={{backgroundColor:"#ECECEC", width: 84, height: 167, marginRight: 13, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 13, fontSize: "10px", fontWeight: 600}}>지원 자격</span>
                            <span style={{fontWeight: 400, fontSize: "10px"}}>1~4주 단위의 프로젝트<br></br>참가 가능자</span>
                            <span style={{display: 'block', marginTop: 19, fontWeight: 400, fontSize: "10px"}}>매 스프린트 후에는<br></br>포트폴리오 작성 및 정비 기간</span>
                        </div>
                        <div style={{backgroundColor:"#ECECEC", width: 84, height: 167, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 13, fontSize: "10px", fontWeight: 600}}>지원 방법</span>
                            <span style={{fontWeight: 400, fontSize: "10px"}}>1차 서류<br></br><span style={{fontSize: "10px", color: '#656565'}}>지원서 작성 및 포트폴리오</span></span>
                            <span style={{display: 'block', marginTop: 20, fontWeight: 400, fontSize: "10px"}}>2차 회의</span>
                            <span style={{display: 'block', marginTop: 20, fontWeight: 400, fontSize: "10px"}}>3차 단기 협업 후 최종 합류</span>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 181, marginBottom: 217}}>
                    <h1 style={{marginBottom: 55, fontSize: "25px"}}>합류 여정</h1>
                    <div style={{display: 'flex' }}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"#ECECEC", width: 86, height: 85, marginRight: 9, borderRadius: "43px",}}>
                            <span style={{alignItems: 'center', fontSize: "10px", fontWeight: 600}}>서류 지원</span>                            
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 86, height: 85, marginRight: 9, borderRadius: "43px",}}>
                            <span style={{fontSize: "10px", fontWeight: 600}}>온라인 화상 회의</span>                        
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 86, height: 85, marginRight: 9, borderRadius: "43px",}}>
                            <span style={{fontSize: "10px", fontWeight: 600}}>1주 협업</span>                           
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 86, height: 85, borderRadius: "43px",}}>
                            <span style={{fontSize: "10px", fontWeight: 600}}>최종 합류</span>                           
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
                    <h1 style={{fontSize: "25px"}}>모집 분야</h1>
                    <div className={styles.mobile_selector}>
                        <div className={select === "PO" ? styles.mobile_selector__team__select : styles.mobile_selector__team__nomal} onClick={onClickSelectTeams}>PO</div>
                        <div className={select === "Design" ? styles.mobile_selector__team__select : styles.mobile_selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Design</div>
                        <div className={select === "Front-end" ? styles.mobile_selector__team__select : styles.mobile_selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Front-end</div>
                        <div className={select === "Back-end" ? styles.mobile_selector__team__select : styles.mobile_selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Back-end</div>
                    </div>
                </div>                
                <TeamContentMobile team={select} />
                <div style={{marginBottom: 254 }}>
                    <ButtonMobile title="함께하기" />                
                </div>
            </div>
        </section>
    );
    
}