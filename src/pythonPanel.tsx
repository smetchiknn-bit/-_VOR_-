import { useEffect, useRef, useState } from "react";
import { APP_PY, README_MD, REQUIREMENTS_TXT } from "../lib/streamlit";
import { textBlob } from "../lib/excelIo";
import { IconDownload, IconCopy, IconCheck, IconTerminal } from "./ui";

export function PythonMenuButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 border border-ink-900/30 px-3 py-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-800">
        <IconTerminal className="h-3.5 w-3.5" />
        Python-версия · Streamlit
      </button>
    </div>
  );
}
