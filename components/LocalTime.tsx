"use client";

import { useEffect, useState } from "react";

// Aktuelle Uhrzeit in Köln, wird erst im Browser gesetzt.
export default function LocalTime() {
  const [zeit, setZeit] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Berlin",
    });
    const tick = () => setZeit(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  return <span suppressHydrationWarning>{zeit || "--:--"}</span>;
}
