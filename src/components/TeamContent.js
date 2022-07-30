import React from "react";

export default function TeamContent({team}) {
    if (team === "PO") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>
                            디자이너, 개발자와 함께 6개월 간 프로젝트를 수행합니다.<br></br>
                            서비스의 기획에 대한 아이디어를 수집, 제시하며<br></br>
                            서비스 런칭을 목표로 프로젝트를 주도적으로 관리하고 진행합니다.
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 기획자를 찾습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>
                        1. 새로운 서비스에 대한 아이디어가 있으신 분<br></br>
                        2. 서비스 아이디어를 시각적으로 구현하여 전달할 수 있는 분<br></br>
                        3. 프로젝트 일정과 진행 상황을 주체적으로 관리할 수 있으신 분<br></br>
                        4. 타 직군과 원활한 커뮤니케이션을 할 수 있는 분
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 경험이 있으면 더 좋습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                    
                            1. 디자이너, 개발 직군과의 프로젝트 경험<br></br>
                            2. 프리젠테이션 발표 경험<br></br>
                            3. UX 설계(기획~와이어프레임) 경험
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Design") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                            
                            기획자, 개발자와 함께 6개월 간 프로젝트를 수행합니다.<br></br>
                            기획을 바탕으로 개별 팀의 아이디어에 따라<br></br>
                            UX/UI/GUI 디자인을 담당합니다.
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 기획자를 찾습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                             
                            1. UX/UI 디자인에 관심이 있고, UX/UI 디자인을 경험해보신 분<br></br>
                            2. 서비스 아이디어를 시각적으로 표현하실 수 있는 분<br></br>
                            3. 열린 자세로 다른 직군과 소통하실 수 있는 분
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 경험이 있으면 더 좋습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                                
                            1. 기획자, 개발 직군과의 프로젝트 경험<br></br>
                            2. 프리젠테이션 발표 경험<br></br>
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Front-end") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                                        
                            팀 내에서 iOS 클라이언트 개발을 담당합니다.<br></br>
                            Back-End, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br></br>
                            원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 기획자를 찾습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                             
                            1. 학교 과제 외 프로젝트 진행 경험이 있는 분<br></br>
                            2. Swift 문법을 알고 있으며 실제 개발에 적용해 보신 분<br></br>
                            3. 아이폰에 **Hello World**를 띄워 보신 분<br></br>
                            4. 성실한 자세로 열심히 배우며 프로젝트에 끝까지 참여할 수 있는 분
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 경험이 있으면 더 좋습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                                                            
                            1. 디자이너와의 프로젝트 경험<br></br>
                            2. MVC, MVP 등 아키텍쳐 패턴과 iOS Platform Architecture에 이해<br></br>
                            3. GitHub / GitLab 등의 VCS(Version Control System) 경험<br></br>
                            4. Slack 등 협업 도구를 사용 경험<br></br>
                            5. REST API를 다뤄본 경험
                        </span>
                    </div>
                </div>
            </div>
        );
    } else if (team === "Back-end") {
        return (
            <div style={{width: "100%", display: 'flex', flexDirection:'column', alignItems: 'center', marginBottom: 95}}>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>다음과 같은 활동을 합니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                                        
                            팀 내에서 iOS 클라이언트 개발을 담당합니다.<br></br>
                            Back-End, 기획, 디자인분들과 함께 프로젝트를 진행하며,<br></br>
                            원할 경우 팀 내에서 세미나를 열 수도 있으며 스터디를 진행할 수도 있습니다.
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 기획자를 찾습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                             
                            1. 학교 과제 외 프로젝트 진행 경험이 있는 분<br></br>
                            2. Swift 문법을 알고 있으며 실제 개발에 적용해 보신 분<br></br>
                            3. 아이폰에 **Hello World**를 띄워 보신 분<br></br>
                            4. 성실한 자세로 열심히 배우며 프로젝트에 끝까지 참여할 수 있는 분
                        </span>
                    </div>
                </div>
                <div style={{width: 820, height: 150, borderRadius:25 ,backgroundColor:"#f4f7fa", display: 'flex', marginTop: 30, marginBottom: 30, position: 'relative'}}>
                    <div style={{paddingLeft: 100, paddingTop: 40}}>
                        <span>이런 경험이 있으면 더 좋습니다</span>
                    </div>
                    <div style={{position: "absolute", left: "40%", top: 40}}>
                        <span>                                                                            
                            1. 디자이너와의 프로젝트 경험<br></br>
                            2. MVC, MVP 등 아키텍쳐 패턴과 iOS Platform Architecture에 이해<br></br>
                            3. GitHub / GitLab 등의 VCS(Version Control System) 경험<br></br>
                            4. Slack 등 협업 도구를 사용 경험<br></br>
                            5. REST API를 다뤄본 경험
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}