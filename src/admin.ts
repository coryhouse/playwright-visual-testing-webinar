import { useEffect, useState } from "react";

export function useIcon(){
  const [showIcon, setShowIcon] = useState(false);
  function getRoute(window: any) {
    const hostname = window.location.hostname.split('.')[0]
    return `/api/storage/?hostname=${hostname}`
  }
  useEffect(() => {
    const fetchIconModeState = async () => {
      try {
        const response = await (
          await fetch(getRoute(window))
        ).text();
        setShowIcon((+response) % 2 === 0);
      } catch (error) {
        console.error('Error fetching settings state:', error);
      }
    };

    fetchIconModeState();
  }, []);

  const toggleIcon = async () => {
    try {
      await fetch(getRoute(window), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: ''
        }).then(() => setShowIcon(!showIcon));
    } catch (error) {
      console.error('Error persisting settings state:', error);
    }
  };

  return {showIcon, toggleIcon};
}
