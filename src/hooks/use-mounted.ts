// borrowed fom https://github.com/shadcn-ui/ui/blob/main/apps/www/hooks/use-mounted.ts
import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
