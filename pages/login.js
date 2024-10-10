// /pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function Login() {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // 로그인 후 쿠키에 학번과 이름을 저장
    Cookies.set('studentId', studentId);
    Cookies.set('name', name);
    router.push('/'); // 로그인 후 홈으로 이동
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>학번:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>이름:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
