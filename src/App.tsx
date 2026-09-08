import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { loadExcel, vorBlob, csvBlob } from "./lib/excelIo";
import { hasCol, processVor, type VorResult, type LoadedFile } from "./lib/vor";
import { BUILTIN_PROMPT, type PromptState } from "./lib/prompt";
import { getDemoFiles } from "./lib/demo";
import { Results } from "./components/results";
import { Pipeline, RulesReference, TmcAlgo, FormatCard } from "./components/reference";
import { PythonMenuButton } from "./components/pythonPanel";
import {
  FileDrop,
  SectionTitle,
  IconAlert,
  IconCompass,
  IconStamp,
  IconCheck,
  IconGear,
  IconClose,
  IconFile,
  IconDownload,
} from "./components/ui";

export default function App() {
  return <div>App</div>;
}
