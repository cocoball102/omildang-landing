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
      
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#71247C] px-6 py-12 flex flex-col justify-between items-center text-center">
        
        {/* 압도적인 배경 이미지 (public/hero-bg.jpg) - PC에서만 보이게 처리 */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000 md:block hidden scale-105"
          style={{ 
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'left top'
          }}
        >
          {/* 이미지 위에 진한 보라색 오버레이 (PC만) */}
          <div className="absolute inset-0 bg-[#71247C]/70 md:bg-transparent"></div>
        </div>

        {/* 텍스트 컨텐츠 영역 (모바일/PC 공통 레이아웃 잡기) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center gap-6 md:gap-10">
          
          {/* 오밀당 로고 (정중앙 배치) */}
          <div className="animate-fade-in-up md:w-56 w-48 mb-6 mx-auto">
            <img src="/omildang-logo.png" alt="오밀당 로고" className="w-full h-auto drop-shadow-lg" />
          </div>

          {/* 1. 상단 강력 카피 (모바일 가독성 업!) */}
          <p 
            className="animate-fade-in-up text-yellow-400 font-bold text-lg md:text-2xl tracking-tighter break-keep mx-auto"
            style={{ animationDelay: '0.3s' }}
          >
            지금까지 없었던 <br className="md:hidden" /> 프리미엄 반찬 편집샵 창업
          </p>

          {/* 2. 메인 타이틀 (폰트Var 적용, 모바일 줄바꿈 해결) */}
          <h1 
            data-aos="fade-up" 
            data-aos-delay="600"
            className="text-4xl md:text-7xl font-bold text-white leading-[1.2] break-keep drop-shadow-xl tracking-tight"
          >
            성공 법칙, <br className="hidden md:block"/>
            <span className="text-yellow-300">오밀당이</span> <br className="md:hidden" /> 증명합니다.
          </h1>

          {/* 3. 서브 카피 (모바일 가독성 고려) */}
          <p 
            className="animate-fade-in-up text-lg md:text-2xl text-white font-medium leading-relaxed max-w-lg break-keep mx-auto"
            style={{ animationDelay: '0.9s' }}
          >
            경험이 없어도 괜찮습니다. 확실한 매니아층으로 <br className="hidden md:block" />
            매출이 보장되는 매장 운영을 약속합니다.
          </p>

          {/* 4. 최종 버튼 (은은하게 등장 + 깜빡임 효과) */}
          <div 
            className="animate-fade-in-up pt-8 w-full md:w-auto"
            style={{ animationDelay: '1.2s' }}
          >
            <a 
              href="#apply" 
              className="bg-[#FFD700] text-[#71247C] px-12 py-5 rounded-full font-black text-2xl shadow-[0_15px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform animate-pulse inline-block w-full md:w-auto text-center"
            >
              무료 상담 신청하기
            </a>
          </div>
        </div>

        {/* 아래로 가라는 화살표 표시 (은은하게 깜빡임) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
          </svg>
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
      <section className="py-24 bg-white px-6 rounded-[40px] shadow-inner mt-[-20px] relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* 타이틀 및 강력한 광고 카피 */}
          <div data-aos="fade-up" className="text-center mb-16 space-y-3">
            <p className="text-yellow-500 font-bold text-lg md:text-xl">고민은 상권만 놓칠 뿐!</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#71247C] leading-tight">
              오밀당 <span className="underline decoration-[#FFD700] decoration-wavy">개설비용</span> 안내
            </h2>
            <p className="text-gray-500 pt-3">가장 합리적인 비용으로 프리미엄 창업을 제안합니다.</p>
          </div>

          {/* 비용 합계 강조 박스 (광고 카피 포인트!) */}
          <div data-aos="zoom-in" data-aos-delay="200" className="bg-[#71247C] rounded-3xl p-8 md:p-12 mb-16 text-center shadow-[0_20px_60px_rgba(113,36,124,0.3)]">
            <p className="text-white opacity-80 text-xl md:text-2xl font-medium">실속형 10평 창업, 지금 시작하세요!</p>
            <h3 className="text-white text-5xl md:text-7xl font-black pt-4 break-keep">
              필수 창업비용,<br className="md:hidden" />
              <span className="text-yellow-300">단돈 2,200만 원대!</span>
            </h3>
            <p className="text-white/70 pt-6 text-sm">* 인테리어 및 별도공사 제외 | 부가세 별도</p>
          </div>

          {/* 상세 비용 표 (모바일 대응) */}
          <div data-aos="fade-up" data-aos-delay="400" className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl">
            <h4 className="text-xl md:text-2xl font-bold text-[#71247C] mb-8 text-center md:text-left">
              상세 개설 비용 내역 (10평 기준)
            </h4>
            
            {/* PC 버전 표 */}
            <table className="w-full text-left hidden md:table border-collapse">
              <thead className="border-b-2 border-[#71247C]/20">
                <tr>
                  <th className="py-4 text-gray-500 font-medium">목록</th>
                  <th className="py-4 text-[#71247C] font-extrabold text-center">10평 기준 (33.3m²)</th>
                  <th className="py-4 text-gray-500 font-medium pl-6">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-black">
                {[
                  { list: '가맹비', cost: '400만원', note: '' },
                  { list: '교육비', cost: '면제', note: '본사지원' },
                  { list: '시설비', cost: '1,400만원', note: '평수에 따라 협의' },
                  { list: '시스템', cost: '250만원', note: '무인키오스크 일체, 포스(임대)' },
                  { list: '오픈홍보비', cost: '150만원', note: '오픈홍보물, 판촉물 일체' },
                  { list: '인테리어 / 간판', cost: '실측 후 협의', note: '바닥·천장, 전면채널간판 일체' },
                ].map((item, idx) => (
                  <tr key={idx} className={`${item.cost === '면제' ? 'bg-[#71247C]/5' : ''}`}>
                    <td className="py-5 font-bold">{item.list}</td>
                    <td className="py-5 text-center font-black text-xl text-black">{item.cost}</td>
                    <td className="py-5 pl-6 text-sm text-gray-500 break-keep">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 모바일 버전 표 (카드 리스트 형식) */}
            <div className="md:hidden space-y-4 text-black">
              {[
                { list: '가맹비', cost: '400만원', note: '' },
                { list: '교육비', cost: '면제', note: '본사지원' },
                { list: '시설비', cost: '1,400만원', note: '평수에 따라 협의' },
                { list: '시스템', cost: '250만원', note: '무인키오스크 일체, 포스(임대)' },
                { list: '오픈홍보비', cost: '150만원', note: '오픈홍보물, 판촉물 일체' },
                { list: '인테리어 / 간판', cost: '실측 후 협의', note: '바닥·천장, 전면채널간판 일체' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">{item.list}</span>
                    <span className="font-black text-lg text-black">{item.cost}</span>
                  </div>
                  {item.note && <p className="text-xs text-gray-500 break-keep">{item.note}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* 하단 유의사항 */}
          <div data-aos="fade-up" className="mt-12 text-gray-400 text-xs md:text-sm space-y-1.5 px-2">
            <p>• 철거 및 외부 공사, 전기 승압 등 별도공사 및 사이즈에 따라서 변동 될 수 있습니다.</p>
            <p>• 로열티 20만원, 계약이행보증금 100만원</p>
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