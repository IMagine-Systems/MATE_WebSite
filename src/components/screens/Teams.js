import React, { useState } from "react";
import styles from "../../Teams.module.css";
import Button from "../Button";
import TeamContent from "../TeamContent";

export default function Teams() {
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
            <div style={{width: "100%"}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 181, marginBottom: 263}}>
                    <h1 style={{marginBottom: 55, fontSize: "40px"}}>지원 방법</h1>
                    <div style={{display: 'flex' }}>
                        <div style={{backgroundColor:"#ECECEC", width: 384, height: 267, marginRight: 43, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 23, fontSize: "25px", fontWeight: 600}}>모집 기간</span>
                            <span style={{fontWeight: 400, fontSize: "25px"}}>상사모집!</span>
                        </div>
                        <div style={{backgroundColor:"#ECECEC", width: 384, height: 267, marginRight: 43, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 23, fontSize: "25px", fontWeight: 600}}>지원 자격</span>
                            <span style={{fontWeight: 400, fontSize: "25px"}}>1~4주 단위의 프로젝트<br></br>참가 가능자</span>
                            <span style={{display: 'block', marginTop: 19, fontWeight: 400, fontSize: "25px"}}>매 스프린트 후에는<br></br>포트폴리오 작성 및 정비 기간</span>
                        </div>
                        <div style={{backgroundColor:"#ECECEC", width: 384, height: 267, borderRadius: "43px", paddingTop: 27, paddingLeft: 34}}>
                            <span style={{display: 'block', marginBottom: 23, fontSize: "25px", fontWeight: 600}}>지원 방법</span>
                            <span style={{fontWeight: 400, fontSize: "25px"}}>1차 서류<br></br><span style={{fontSize: "22px", color: '#656565'}}>지원서 작성 및 포트폴리오</span></span>
                            <span style={{display: 'block', marginTop: 20, fontWeight: 400, fontSize: "25px"}}>2차 회의</span>
                            <span style={{display: 'block', marginTop: 20, fontWeight: 400, fontSize: "25px"}}>3차 단기 협업 후 최종 합류</span>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 181, marginBottom: 217}}>
                    <h1 style={{marginBottom: 55, fontSize: "40px"}}>합류 여정</h1>
                    <div style={{display: 'flex' }}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"#ECECEC", width: 288, height: 187, marginRight: 29, borderRadius: "43px",}}>
                            <span style={{alignItems: 'center', fontSize: "25px", fontWeight: 600}}>서류 지원</span>                            
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 288, height: 187, marginRight: 29, borderRadius: "43px",}}>
                            <span style={{fontSize: "25px", fontWeight: 600}}>온라인 화상 회의</span>                        
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 288, height: 187, marginRight: 29, borderRadius: "43px",}}>
                            <span style={{fontSize: "25px", fontWeight: 600}}>1주 협업</span>                           
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"#ECECEC", width: 288, height: 187, borderRadius: "43px",}}>
                            <span style={{fontSize: "25px", fontWeight: 600}}>최종 합류</span>                           
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
                    <h1 style={{fontSize: "40px"}}>모집 분야</h1>
                    <div className={styles.selector}>
                        <div className={select === "PO" ? styles.selector__team__select : styles.selector__team__nomal} onClick={onClickSelectTeams}>PO</div>
                        <div className={select === "Design" ? styles.selector__team__select : styles.selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Design</div>
                        <div className={select === "Front-end" ? styles.selector__team__select : styles.selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Front-end</div>
                        <div className={select === "Back-end" ? styles.selector__team__select : styles.selector__team__nomal} onClick={onClickSelectTeams} onClick={onClickSelectTeams}>Back-end</div>
                    </div>
                </div>                
                <TeamContent team={select}/>
                <div style={{marginBottom: 254 }}>                                        
                    <Button title="함께하기"/>
                </div>
                <span style={{textAlign: 'center', display: 'flex', justifyContent: 'center', fontSize: "25px", color: "#315EFF", marginBottom: 148}}>*궁금한 점들은 아래 CONTACT로 통해 편하게 물어봐 주세요.<br></br>실력보다 열정이 중요하다고 생각하기에 언제나 기다리고 있습니다.</span>
            </div>
        </section>
    );
    
}