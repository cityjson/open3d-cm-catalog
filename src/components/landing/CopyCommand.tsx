import { useRef, useState } from "react";

const COMMAND = [
  "cargo install --git ssh://git@github.com/HideBa/city3d-stac-tool.git --bin city3dstac",
  "city3dstac collection --config collections/rotterdam.yaml --dry-run",
].join("\n");

/**
 * The "terminal" card from the Contribute section. Static markup lives in the
 * parent Astro component; only the copy button needs client-side state, so this
 * island renders just the button and writes the command to the clipboard.
 */
export function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = () => {
    try {
      navigator.clipboard?.writeText(COMMAND);
    } catch {
      // clipboard unavailable — keep the visual feedback anyway
    }
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="cursor-pointer border-0 bg-transparent font-mono text-[11px] text-[#34c3f0]"
    >
      {copied ? "copied" : "copy"}
    </button>
  );
}
