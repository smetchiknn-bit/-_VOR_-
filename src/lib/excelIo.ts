import * as XLSX from "xlsx";
import ExcelJS from "exceljs";
import { normKey, type LoadedFile, type Row, type VorResult } from "./vor";
import type { PromptState } from "./prompt";

export async function loadExcel(file: File, kind: "spec" | "ker" | "tmc"): Promise<LoadedFile> {
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const wanted = kind === "spec" ? "спецификация" : kind === "ker" ? "выгрузка" : "тмц";
  let sheet = wb.SheetNames.find((n) => normKey(n) === wanted) ?? wb.SheetNames[0];
  const ws = wb.Sheets[sheet];
  let rows = XLSX.utils.sheet_to_json<Row>(ws, { defval: "" });
  return { name: file.name, sheet, rows };
}

export async function vorBlob(res: VorResult, prompt: PromptState): Promise<Blob> {
  const workbook = new ExcelJS.Workbook();
  const wsVor = workbook.addWorksheet("ВОР");
  const buffer = await workbook.xlsx.writeBuffer();
  return new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

export function csvBlob(res: VorResult): Blob {
  return new Blob([""], { type: "text/csv;charset=utf-8" });
}

export function textBlob(text: string, mime: string): Blob {
  return new Blob([text], { type: mime });
}
