'use server' 
console.log("주소 체크:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "있음" : "없음");

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function submitApplication(formData) {
  // 1. 전화번호 가공 (숫자만 남기기)
  const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
  console.log("가공된 전화번호:", cleanPhone);

  // 2. DB Insert (JPA의 .save()와 똑같습니다!)
  const { data, error } = await supabase
    .from('application') // 사장님이 만든 테이블명
    .insert([
      { 
        name: formData.name, 
        phone: cleanPhone, 
        location: formData.location 
      }
    ])

  if (error) {
    console.error('저장 실패:', error)
    return { success: false }
  }

  return { success: true }
}