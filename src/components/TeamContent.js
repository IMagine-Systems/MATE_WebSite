import React from "react";

export default function TeamContent({team}) {
    if (team === "PO") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>PO/디자이너/개발자 3~6명의 팀으로 이루어진 Cell(제품팀)에서 팀원들과 함께 새로운프로젝트를 만들고 빠르게 시장 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;검증을 해요.</li>
                            <br></br>
                            <li>스타트업으로 가기 위해서는 스타트업을 만들어 봐야 한다는 마인드를 가지고 있어요.</li>
                            <br></br>
                            <li>지금 당장은 체계보다 빠른 실행을 통해 진행한 프로젝트를 정리하고 회고하며 학습을 통해다음 아이템의 성공 가능성을 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;높혀가고 있어요.</li>
                        </span>
                    </div>
                </div>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>합류하면 함께 할 업무에요</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>좋은 문제 정의와 유효한 가설을 수립하고, 실험을 통해 도출된 Data Insight를 기반으로 가설을 검증하며, <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;끊임없는 Iteration을 통해 PMF를 찾아 제품을 고도화해요.</li>
                            <br></br>
                            <li>PMF를 찾기 위해 여러 아이템을 생각하고 찾아 완벽한 제품보다 빠른 시장 검증을 진행하고 서비스의 생애 주기를 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;오롯이 담당하며 제품의 성장을 드라이브하는 역할이에요.</li>
                            <br></br>
                            <li>직접 부딪혀서 해결해야 하는 문제를 정의하고, 다양한 액션을 통해 성공과 실패를 경험해요.</li>
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Design") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>UX 설계, UI 디자인, Prototype을 통해 유저에게 가치를 전달하는 모든 설계과정에 관여하며, 고객이 바라보는 제품 및 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서비스의 경험을 결정해요.</li>
                            <br></br>
                            <li>마케팅을 위한 앱/웹 광고 디자인 및 기획을 담당해요.</li>
                            <br></br>
                            <li>서비스 아이디어를 시각적으로 표현해요.</li>
                        </span>
                    </div>
                </div>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>합류하면 함께 할 업무에요</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>디자인에 관심이 있고 디자인 경험을 해보신 분이면 좋아요.</li>
                            <br></br>
                            <li>서비스 아이디어를 시각적으로 표현할 수 있는 분을 원해요.</li>
                            <br></br>
                            <li>열린 자세로 다른 직군과 소통할 수 있는 분이 좋아요.</li>
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Front-end") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>Cell에서 정한 새로운 아이템 혹은 프로젝트를 진행하며 자신의 분야에 맞는 웹 서비스 혹은앱 서비스를 개발해요.</li>
                            <br></br>
                            <li>당장은 완벽한 서비스보다 빠른 MVP 개발에 집중을 해요.</li>
                            <br></br>
                            <li>개발을 진행하며 DOC(개발 통합 문서)를 작성하며 자신에게 맞는 프로세스와 협업 방식을추진할 수 있어요.</li>
                        </span>
                    </div>
                </div>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>합류하면 함께 할 업무에요</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>React, ReactNative, Flutter, ios/Android 개발, HTML, CSS, JavaScript 해봤거나 해보고 싶으면 누구나 가능해요.</li>
                            <br></br>
                            <li>프로그래밍 재밌다고 느끼는 개발자, 매우 중요해요.</li>
                            <br></br>
                            <li>업툴(git, notion 등)을 이용해 혼자 개발이 아닌 팀원들과 함께 개발을 하고 문서와 개인 기술 블로그를 작성하고 싶은 <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분이면 가능해요.</li>
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Back-end") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>Cell에서 정한 새로운 아이템 혹은 프로젝트를 진행하며 자신의 분야에 맞는 웹 서비스 혹은앱 서비스를 개발해요.</li>
                            <br></br>
                            <li>당장은 완벽한 서비스보다 빠른 MVP 개발에 집중을 해요.</li>
                            <br></br>
                            <li>개발을 진행하며 DOC(개발 통합 문서)를 작성하며 자신에게 맞는 프로세스와 협업 방식을추진할 수 있어요.</li>
                        </span>
                    </div>
                </div>
                <div style={{ width: 830, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30}}>
                    <div style={{marginLeft: 35, marginTop: 35, marginBottom:23, fontSize: "28px", fontWeight: 600}}>
                        <span>합류하면 함께 할 업무에요</span>
                    </div>
                    <div style={{marginLeft: 35, marginBottom: 35, marginRight: 35}}>
                        <span>
                            <li>Java, NodeJs, Spring, AWS 등 서버에 관련한 언어, 프레임워크 혹은 지식이 있거나 배우고 싶은 분 누구나 가능해요.</li>
                            <br></br>
                            <li>프로그래밍 재밌다고 느끼는 개발자, 매우 중요해요.</li>
                            <br></br>
                            <li>업툴(git, notion 등)을 이용해 혼자 개발이 아닌 팀원들과 함께 개발을 하고 문서와 개인 기술 블로그를 작성하고 싶은 <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분이면 가능해요.</li>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}