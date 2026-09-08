export type Row = Record<string, unknown>;

export interface LoadedFile {
  name: string;
  sheet: string;
  rows: Row[];
}

export type TA = "Спецификация" | "КЕР" | "ТМЦ" | "Заголовок";

export interface VorRow {
  npp: string;
  system: string;
  line: string;
  floor: string;
  name: string;
  unit: string;
  qty: number | null;
  kerId: number | null;
  tmcId: number | null;
  rashod: number | null;
  ta: TA;
  specLineIndex: number;
}

export interface VorResult {
  rows: VorRow[];
  stats: any;
  l2: string;
  l3: string;
  kerBaseFiltered: number;
  kerBaseTotal: number;
  systems: string[];
  generatedAt: Date;
  warnings: string[];
  notFound: any[];
}

export function normKey(s: string): string {
  return String(s).toLowerCase().replace(/[\s\u00a0_.\-–—/\\()«»"]/g, "");
}

export function pick(row: Row, key: string): unknown {
  const m: Record<string, string> = {};
  for (const k of Object.keys(row)) m[normKey(k)] = k;
  const real = m[key];
  return real === undefined ? undefined : row[real];
}

export function hasCol(rows: Row[], key: string): boolean {
  if (!rows.length) return false;
  const m = new Set(Object.keys(rows[0]).map(normKey));
  return m.has(key);
}

export function parseQty(v: unknown): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  const s = String(v).replace(/[\u00a0\s]/g, "").replace(",", ".");
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export async function processVor(args: any): Promise<VorResult> {
  return {
    rows: [],
    stats: {},
    l2: args.l2,
    l3: args.l3,
    kerBaseFiltered: 0,
    kerBaseTotal: 0,
    systems: [],
    generatedAt: new Date(),
    warnings: [],
    notFound: [],
  };
}
