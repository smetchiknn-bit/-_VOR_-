export const APP_PY = `# -*- coding: utf-8 -*-
"""ГЕНЕРАТОР ВОР (Ведомость объёмов работ)"""
import io, re, os
from datetime import datetime
import numpy as np
import pandas as pd
import streamlit as st

PROMPT_TXT = """1. РОЛЬ И ЗАДАЧА
Ты — сметчик высшей квалификации. Главная задача — построчно привязать коды КЕР и коды ТМЦ к позициям спецификации."""

st.set_page_config(page_title="Генератор ВОР", page_icon="📐", layout="wide")

def _load_prompt():
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Промпт.txt")
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8-sig") as f:
                text = f.read()
            if text:
                return text, "Файл «Промпт.txt» рядом с app.py"
        except OSError:
            pass
    return PROMPT_TXT, "Встроенная константа"

active_prompt, prompt_source = _load_prompt()

st.title("Генератор ВОР (Ведомость объёмов работ)")
`;

export const REQUIREMENTS_TXT = `streamlit>=1.32
pandas>=2.0
openpyxl>=3.1
numpy>=1.24
`;

export const README_MD = `# Генератор ВОР (Ведомость объёмов работ)

Streamlit-приложение для автоматической привязки кодов **КЕР** и **ТМЦ** к позициям спецификации с тройной детализацией.

## Установка и запуск

\`\`\`bash
pip install -r requirements.txt
streamlit run app.py
\`\`\`
`;
