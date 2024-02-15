import { useEffect, useState } from "react";

export function useEnableFadeTransition() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return { pageLoaded: loaded };
}
