import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const QrScanner = dynamic(() => import('react-qr-scanner'), { ssr: false });

export default function Home() {
  const [scanResult, setScanResult] = useState('');
  const router = useRouter();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text); // QR 스캔 결과
      router.push('/login');
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <h1>QR 코드를 스캔하세요</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
      {scanResult && <p>스캔 결과: {scanResult}</p>}
    </div>
  );
}
