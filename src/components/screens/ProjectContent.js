import mate_1 from "../../../src/mate_6 1.png";
import mate_2 from "../../../src/mate_6 2.png";
import mate_3 from "../../../src/mate_7 1.png";
import mate_4 from "../../../src/mate_7 2.png";
import mate_5 from "../../../src/mate_8 1.png";
import mate_6 from "../../../src/mate_8 2.png";

export default function ProjectContent() {
    return (
        <section>
            <div style={{display: "flex", flexDirection: 'column', justifyContent: 'space-around'}}>
                <div style={{display: 'flex', width: "100%", justifyContent: 'center', marginTop: 168, alignItems: 'flex-end'}}>
                    <div style={{position: 'relative', width: 526}}>
                        <img src={mate_1} style={{ position:'relative', width: 326, height: 580, display: "block", zIndex: 9}}/>
                        <img src={mate_2} style={{width: 276, height: 491, display: "block", position: 'absolute', top: 83, left: 180, zIndex: 1}}/>
                    </div>
                    <div style={{ marginBottom: 90}}>
                        <span style={{fontSize: "40px", fontWeight: 700}}>MATE 6.0</span>
                        <p style={{fontSize: "30px", fontWeight: 400}}>
                            카풀 서비스 기간:
                            &nbsp;6개월 소요
                        </p>
                        <p style={{fontSize: "28px", fontWeight: 400}}>대학교의 교통 불편함을<br></br>‘자차’ 보유 학생들과<br></br>같은 지역에 자취하는 학생들을 함께<br></br>연결한다는 가설을 검증 후 App으로 제작</p>
                    </div>
                </div>
                <div style={{display: 'flex', width: "100%", justifyContent: 'center', marginTop: 64, alignItems: 'flex-end'}}>
                    <div style={{position: 'relative', width: 526}}>
                        <img src={mate_3} style={{ position:'relative', width: 326, height: 580, display: "block", zIndex: 9}}/>
                        <img src={mate_4} style={{width: 276, height: 491, display: "block", position: 'absolute', top: 83, left: 180, zIndex: 1}}/>
                    </div>
                    <div style={{marginBottom: 90}}>
                        <span style={{fontSize: "40px", fontWeight: 700}}>MATE 7.0</span>
                        <p style={{fontSize: "30px", fontWeight: 400}}>
                            시험 후기 서비스 
                            <br></br>기간: 3주 소요                
                        </p>
                        <p style={{fontSize: "28px", fontWeight: 400}}>
                            ‘에브리타임’을 통해<br></br>
                            강의 & 시험 후기 기능이 사용 불가한<br></br>
                            대학교들을 중점으로 ‘강의, 시험 후기’를<br></br>
                            작성할 수 있는 APP을 제작
                        </p>                   
                    </div>
                </div>
                <div style={{display: 'flex', width: "100%", justifyContent: 'center', marginTop: 64, alignItems: 'flex-end' }}>
                    <div style={{ position: 'relative', width: 526}}>
                        <img src={mate_5} style={{ position:'relative', marginLeft: -60, width: 420, height:780, display: "block", zIndex: 9}}/>
                        <img src={mate_6} style={{width: 296, height: 635, display: "block", position: 'absolute', top: 83, left: 140, zIndex: 1}}/>
                    </div>
                    <div style={{marginBottom: 200}}>
                        <span style={{fontSize: "40px", fontWeight: 700}}>MATE 8.0</span>
                        <p style={{fontSize: "30px", fontWeight: 400}}>
                            현지 가이드 서비스 IR 피칭
                            <br></br>기간: 2주 소요
                        </p>
                        <p style={{fontSize: "28px", fontWeight: 400}}>
                            코로나 이후의 여행 트렌드로<br></br>
                            ‘혼행’과 ‘현지’를 함께 느낄 수 있는<br></br>
                            현지인과 여행자를 매칭 시켜주는 여행<br></br>                            
                            서비스를 APP으로 제작
                        </p>
                    </div>
                </div>
                <div style={{display: 'flex', width: "100%", justifyContent: 'center', alignItems: 'center', marginTop: 130}}>
                    <span style={{color: '#315EFF', fontSize: '25px'}}>*자세한 내용은 계속 추가될꺼에요!</span>
                </div>
                <div style={{display: 'flex', width: "100%", justifyContent: 'center', marginTop: 148, marginBottom: 50,}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: 671, height: 130, backgroundColor: "#D9D9D9", borderRadius: "60px"}}>
                        <span style={{fontSize: "33px", fontWeight: 700}}>깜짝 놀랄 서비스를 함께<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;만들어보아요</span>
                    </div>
                </div>
            </div>
        </section>
    );
    
}