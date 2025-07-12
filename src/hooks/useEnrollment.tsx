import { useEffect, useState } from 'react';

export default function useEnrollment() {
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    try {
      const val = localStorage.getItem('enrolled');
      if (val === 'true') setEnrolled(true);
    } catch {
      /* ignore */
    }
  }, []);

  function enroll() {
    try {
      localStorage.setItem('enrolled', 'true');
    } catch {
      /* ignore */
    }
    setEnrolled(true);
  }

  return { enrolled, enroll };
}

