import React from "react";
import data_sheet from "../../data_sheet.png";

export default function CellContent() {
    return (
        <section>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{display: 'flex', marginTop: 163}}>
                    <sapn style={{fontSize: "30px", fontWeight: 700}}>1 MONTH PMF 찾기</sapn>
                </div>
                <div style={{display: "flex", border: "solid 2px black", borderRadius: "45px", paddingTop: 53, paddingBottom: 53, marginTop: 22}}>
                    <div style={{width: 179, height: 180, borderRadius: "100%", backgroundColor: '#315EFFF2', marginLeft: 68, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><span style={{fontSize: "30px", fontWeight: 600, color: "#FFFFFF"}}>문제 정의</span></div>
                    <div style={{width: 179, height: 180, borderRadius: "100%", backgroundColor: '#315EFFF2', marginLeft: 127, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><span style={{fontSize: "30px", fontWeight: 600, color: "#FFFFFF"}}>가설 수립</span></div>
                    <div style={{width: 179, height: 180, borderRadius: "100%", backgroundColor: '#315EFFF2', marginLeft: 127, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><span style={{fontSize: "30px", fontWeight: 600, color: "#FFFFFF"}}>빠른 검증</span></div>
                    <div style={{width: 179, height: 180, borderRadius: "100%", backgroundColor: '#315EFFF2', marginLeft: 127, marginRight: 71, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><span style={{fontSize: "30px", fontWeight: 600, color: "#FFFFFF"}}>데이터 분석</span></div>
                </div>
                <div style={{marginTop: 79, textAlign: 'center', fontSize: "30px"}}>
                    <span>
                        PMF를 위해 <strong> 짧은 시간동안 빠르게</strong> 여러 아이템들의 시장 검증을 진행해요.<br></br>
                        한달 후 데이터를 바탕으로 <strong>가장 시장성이 높은 아이템</strong>으로 <strong>MVP</strong> 제작에 들어가요.
                    </span>                            
                </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{display: 'flex', marginTop: 153}}>
                    <sapn style={{fontSize: "30px", fontWeight: 700}}>2 MONTH MVP 제작</sapn>
                </div>
                <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{display: "flex", border: "solid 2px black", borderRadius: "45px", paddingTop: 53, paddingBottom: 53, marginTop: 22}}>
                        <img src={data_sheet} style={{width: 134, height: 187, marginLeft: 172}}/>
                        <div style={{width: 179, height: 180, borderRadius: "100%", backgroundColor: '#315EFFF2', marginLeft: 213, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><span style={{fontSize: "30px", fontWeight: 600, color: "#FFFFFF"}}>MVP 제작</span></div>
                        <div style={{width: 129, height: 170, backgroundColor: '#315EFFF2', marginLeft: 213, marginRight: 172, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 103, textAlign: 'center', fontSize: "30px", marginBottom: 229}}>
                    <span>
                        우리는 처음부터 <strong>데이터를 바탕</strong>으로 MVP를 설계해요.<br></br><br></br>
                        필수 문서만 작성 후 디자인과 개발을 진행하고 1~2주 단위의 <strong>스프린트 방식</strong>을 통해<br></br> 유의미한 결과를 도출하고 시장 혹은 고객의 반응을 통해 수정해요.<br></br><br></br>
                        최종적으로 이러한 과정에서 데이터 기반의 판단을 통해 제품 설계 제작을 포트폴리오로 작성해요.
                    </span>                            
                </div>
            </div>
        </section>
    )
}