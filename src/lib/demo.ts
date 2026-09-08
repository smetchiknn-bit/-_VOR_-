import type { LoadedFile } from "./vor";

const specRows: Record<string, unknown>[] = [
  { Файл: "CO Вентиляция С1", Лист: "!Спецификация ВЫТЯЖКА ВБ-а", Система: "ВБа-1.1", Этаж: "", Наименование: "СИСТЕМА ВЫТЯЖНОЙ ВЕНТИЛЯЦИИ ВБа-1.1", Артикул: "", Производитель: "", ЕИ: "", "Кол-во": "", Масса: "", Примечания: "", Строка: "Строка 1" },
];

export function getDemoFiles(): Array<{ key: "spec" | "ker" | "tmc"; file: LoadedFile }> {
  return [
    { key: "spec", file: { name: "Спецификация.xlsx (демо)", sheet: "Спецификация", rows: specRows } },
  ];
}
