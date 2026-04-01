'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    // 전체 배경을 사장님이 주신 그 보라색(#71247C)으로 설정!
    <div className="flex flex-col w-full font-sans bg-[#71247C]">
      
      {/* [섹션 1] Hero 섹션: 사장님이 정해주신 보라색 그라데이션 */}
      <section className="h-screen bg-gradient-to-b from-[#71247C] to-[#4a1752] flex flex-col items-center justify-center text-center px-6">
        <div data-aos="fade-up">
          <p className="text-yellow-300 font-bold text-lg mb-2">프리미엄 반찬 편집샵</p>
          <h1 className="text-4xl font-black text-white leading-tight mb-8">
            오밀당과 함께라면<br/>
            성공 창업, 꿈이 아닙니다!
          </h1>
          {/* 본사 느낌 노란색 버튼 */}
          <a href="#apply" className="bg-[#FFD700] text-[#71247C] px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform inline-block">
            무료 상담 신청하기
          </a>
        </div>
      </section>

     {/* [섹션 2] 오밀당 프랜차이즈 경쟁력 (3단 콤보) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto space-y-32"> {/* 섹션 사이 간격을 넉넉히 주어 몰입감 업! */}
          
          {/* 타이틀 영역 */}
          <div data-aos="fade-up" className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#71247C] mb-4">
              오밀당의 <span className="text-yellow-500 underline decoration-wavy">확실한 성공 포인트</span>
            </h2>
            <p className="text-gray-500 text-lg">이미 검증된 데이터가 성공을 증명합니다.</p>
          </div>

          {/* 포인트 1: 왼쪽 이미지, 오른쪽 글 */}
          <div className="flex flex-col md:flex-row items-center gap-12 group">
            <div data-aos="fade-right" className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="/sc2_bg01.png" alt="경쟁력1" className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
              {/* 이미지 위 보라색 영역에 글자를 코딩으로 얹고 싶다면 아래처럼 추가 가능합니다. */}
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex-1 space-y-6">
              <span className="text-6xl font-black text-[#71247C]/10 block">01</span>
              <h3 className="text-3xl font-bold text-[#71247C]">독보적인 메뉴 퀄리티</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                단순한 반찬이 아닙니다. 본사 셰프들이 연구한 <br/>
                <span className="text-[#71247C] font-bold">프리미엄 레시피</span>로 고객의 입맛을 사로잡습니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• HACCP 인증 시설 생산</li>
                <li>• 시즌별 신메뉴 지속 출시</li>
              </ul>
            </div>
          </div>

          {/* 포인트 2: 오른쪽 이미지, 왼쪽 글 (지그재그) */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 group">
            <div data-aos="fade-up" data-aos-delay="200" className="flex-1 space-y-6 text-right">
              <span className="text-6xl font-black text-[#71247C]/10 block">02</span>
              <h3 className="text-3xl font-bold text-[#71247C]">인건비 절감 시스템</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                주방장 없는 매장 운영, 꿈이 아닙니다. <br/>
                <span className="text-[#71247C] font-bold">완제품 배송 시스템</span>으로 운영 난이도를 낮췄습니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 1인 운영 가능 시스템</li>
                <li>• 식재료 로스율 제로 도전</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="/sc2_bg02.png" alt="경쟁력2" className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>

          {/* 포인트 3: 다시 왼쪽 이미지, 오른쪽 글 */}
          <div className="flex flex-col md:flex-row items-center gap-12 group">
            <div data-aos="fade-right" className="flex-1 relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="/sc2_bg03.png" alt="경쟁력3" className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex-1 space-y-6">
              <span className="text-6xl font-black text-[#71247C]/10 block">03</span>
              <h3 className="text-3xl font-bold text-[#71247C]">밀착 마케팅 지원</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                오픈만 하면 끝? 아닙니다. <br/>
                <span className="text-[#71247C] font-bold">지역 상권 맞춤형 마케팅</span>으로 단골을 만들어 드립니다.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• SNS 홍보 및 지역 광고 지원</li>
                <li>• 정기적 슈퍼바이저 매장 방문</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* [섹션 3] 가맹 문의 폼: 다시 보라색 포인트 */}
      <section id="apply" className="py-20 bg-[#f9f9f9] px-6">
        {/* 1. 흰색 카드 컨테이너 (그림자와 보라색 상단 테두리) */}
        <div data-aos="zoom-in" className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(113,36,124,0.15)] border-t-8 border-[#71247C]">
          
          <h2 className="text-2xl font-extrabold text-center mb-8 text-[#71247C]">가맹 문의 신청</h2>
          
          {/* 2. 실제 작동하는 폼 시작 */}
          <form method="post" action="https://gon-land.co.kr/api/analytics/submit" name="form1" id="landing-form" className="space-y-6">
            
            {/* 이름 입력 필드 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">이름</label>
              <input type="text" name="userName" placeholder="성함을 입력해주세요" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#71247C] focus:ring-2 focus:ring-[#71247C]/20 outline-none transition-all text-black" 
                maxLength={10} required />
            </div>

            {/* 연락처 필드 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">연락처</label>
              <div className="flex gap-2 items-center">
                <input type="text" name="phone1" value="010" readOnly 
                  className="w-16 px-2 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 text-center font-semibold" />
                <span className="text-gray-400">-</span>
                <input type="tel" name="phone2" placeholder="0000" required 
                  className="flex-1 px-3 py-3 rounded-xl border border-gray-200 focus:border-[#71247C] outline-none text-center text-black" 
                  maxLength={4} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
                <span className="text-gray-400">-</span>
                <input type="tel" name="phone3" placeholder="0000" required 
                  className="flex-1 px-3 py-3 rounded-xl border border-gray-200 focus:border-[#71247C] outline-none text-center text-black" 
                  maxLength={4} onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} />
              </div>
            </div>

            {/* 창업 유형 (라디오 버튼 리모델링) */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">창업 유형</label>
              <div className="flex gap-3">
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="userData1" value="업종변경" defaultChecked className="hidden peer" />
                  <div className="py-3 text-center rounded-xl border border-gray-200 peer-checked:bg-[#71247C] peer-checked:text-white peer-checked:border-[#71247C] transition-all font-medium text-gray-600">
                    업종변경
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <input type="radio" name="userData1" value="신규" className="hidden peer" />
                  <div className="py-3 text-center rounded-xl border border-gray-200 peer-checked:bg-[#71247C] peer-checked:text-white peer-checked:border-[#71247C] transition-all font-medium text-gray-600">
                    신규창업
                  </div>
                </label>
              </div>
            </div>

            {/* 희망지역 선택 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">희망지역</label>
              <select name="userData2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#71247C] outline-none bg-white text-black">
                {['서울', '인천', '경기', '부산', '광주', '대전', '울산', '세종', '제주', '충북', '충남', '강원', '대구', '경북', '경남', '전북', '전남'].map(area => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* 요청사항 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 ml-1">상담 요청사항</label>
              <textarea name="userData5" placeholder="예) 오후 2시 이후 연락 가능합니다." 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#71247C] outline-none min-h-[100px] resize-none text-black" />
            </div>

            {/* 동의 체크박스 영역 */}
            <div className="space-y-3 py-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" required defaultChecked className="accent-[#71247C] w-4 h-4" />
                  <span>개인정보처리방침 동의 (필수)</span>
                </label>
                <a href="https://future-news.co.kr/resources/common/agreements/privacy_agreement1.html" target="_blank" className="underline">보기</a>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" required defaultChecked className="accent-[#71247C] w-4 h-4" />
                  <span>제 3자제공 활용 동의 (필수)</span>
                </label>
                <a href="https://future-news.co.kr/resources/common/agreements/privacy_agreement3.html" target="_blank" className="underline">보기</a>
              </div>
            </div>

            {/* 제출 버튼 */}
            <button type="submit" className="w-full bg-[#FFD700] hover:bg-[#FFC000] text-[#71247C] font-black py-5 rounded-2xl text-xl shadow-xl transition-all active:scale-95">
              무료 창업상담 신청하기
            </button>

            {/* 원본 소스에 있던 Hidden Input들 (데이터 전송용) */}
            <input type="hidden" name="pgUri" value="francken" />
            <input type="hidden" name="land_pg_idx" value="15964" />
            <input type="hidden" name="land_ptn_idx" value="2373" />
            <input type="hidden" name="land_empno" value="89" />
            <input type="hidden" name="mb_deptno" value="11" />
          </form>
        </div>
      </section>

      {/* 하단 푸터 */}
      <footer className="py-10 bg-[#71247C] text-white/60 text-center text-sm">
        © 2026 오밀당 랜딩페이지 Project. All rights reserved.
      </footer>
    </div>
  )
}