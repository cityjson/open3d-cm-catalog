import { useState } from "react";

import { Button } from "@/components/ui/button";

/**
 * A small interactive island used to verify React client-side hydration works.
 * Replace with real registry data once the catalog wiring is in place.
 */
export function CatalogCount() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Button variant="outline" onClick={() => setExpanded((value) => !value)}>
      {expanded ? "Hydration works — click to collapse" : "Click to test interactivity"}
    </Button>
  );
}
