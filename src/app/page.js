"use client";
// 1. 필요한 도구(이미지 태그, 상태 관리) 가져오기
import Image from 'next/image';
import { useState } from 'react';
import { submitApplication } from './actions'

export default function Home() {
  // 2. 입력값을 저장할 공간 (Java의 DTO 객체 역할)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '', // 지역 정보
  });

  // 3. 입력값이 바뀔 때 실행되는 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // 기존 데이터 복사 (매우 중요!)
      [name]: value, // 바뀐 부분만 업데이트
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await submitApplication(formData);
    
    try {
      if (result.success) {
        alert(`감사합니다 ${formData.name} 사장님, 성공적으로 접수되었습니다! 곧 연락드릴게요! 🍱`);
      } else {
        console.error("Server Logic Error:", result.error);
        alert("앗, 잠시 오류가 났어요. 다시 시도해주시겠어요?");
      }
    } catch (error) {
      console.error("Network/Runtime Error:", error);
      alert("연결이 원활하지 않습니다. 네트워크를 확인해주세요.");
    } finally {
      // 4. 성공하든 실패하든 버튼은 다시 활성화
      setIsSubmitting(false);
    }

  };



  return (
    // 5. 전체 배경 및 레이아웃 (Tailwind CSS 사용)
    <div className="min-h-screen bg-orange-50 font-sans text-gray-900">
      
      {/* 6. 헤더 (상단 바) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* [수정 필요] 여기에 사장님 로고 이미지가 있다면 파일명을 바꿔주세요 */}
            {/* <Image src="/logo.jpg" alt="오밀당 로고" width={40} height={40} /> */}
            <span className="text-3xl font-extrabold text-orange-600">오밀당</span>
          </div>
          <button className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors">
            입점 문의
          </button>
        </nav>
      </header>

      {/* 7. 메인 섹션 (이미지와 글씨) */}
      <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* 왼쪽: 글씨 */}
        <div className="space-y-6">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            우리 동네 반찬 맛집 플랫폼
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-950">
            맛있는 반찬, <br />
            <span className="text-orange-600">집 앞까지</span> 배달 완료
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            오직 우리 동네 맛집 반찬만 모았습니다. <br />
            매일 아침 새로 만든 신선함을 '오밀당'에서 만나보세요.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 shadow-lg transition-transform hover:-translate-y-0.5">
              지금 주문하기
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold border-2 border-gray-200 hover:bg-gray-100">
              더 알아보기
            </button>
          </div>
        </div>

        {/* 오른쪽: 이미지 */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform md:rotate-2">
          {/* [수정 필요] /public 폴더에 넣은 이미지 파일명으로 바꿔주세요! (예: /food.jpg) */}
          <Image 
            src="/food.jpg" // 여기에 이미지 파일명!
            alt="맛있는 오밀당 반찬들" 
            fill // 부모 박스를 꽉 채웁니다.
            className="object-cover" // 이미지 비율 유지하며 자르기
            priority // 이 이미지는 중요하므로 빨리 로딩!
          />
        </div>
      </main>

      {/* 8. 입점 문의 폼 섹션 (사장님이 원하신 기능!) */}
      <section className="bg-white py-20 mt-16 shadow-inner">
        <div className="max-w-3xl mx-auto px-6 bg-orange-50 p-12 rounded-3xl border border-orange-100 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-950">반찬 가게 사장님, 환영합니다!</h2>
            <p className="text-lg text-gray-700 mt-4">오밀당과 함께 우리 동네 단골손님을 만들어보세요.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 이름 (필수) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">사장님 성함 <span className="text-red-500">*</span></label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="안지훈" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none" />
              </div>
              {/* 전화번호 (필수) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">연락처 <span className="text-red-500">*</span></label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="010-1234-5678" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none" />
              </div>
            </div>
            
            {/* 지역 기반 정보 (가게 위치) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">가게 위치 (동/읍/면)</label>
              <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="인천시 서구 당하동" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none" />
              <p className="text-xs text-gray-500 mt-1.5">* 정확한 주소는 나중에 입력하셔도 됩니다.</p>
            </div>
            
            <div className="pt-6">
              <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-orange-700 transition-colors shadow-md">
                입점 신청 완료하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 9. 푸터 */}
      <footer className="bg-gray-950 text-gray-300 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold text-white mb-4">오밀당</p>
          <p className="text-sm">© 2026 Omildang. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-500">인천광역시 서구 이음2로 우미린파크뷰 2단지 207동 1701호</p>
        </div>
      </footer>
    </div>
  );
}