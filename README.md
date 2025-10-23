# Use Case Calculator - 3-Krokova Webova Aplikacia

Webová aplikácia na výpočet potenciálneho príjmu z personalizačných e-mailových kampaní.

## Funkcie

### Krok 1: Výber Use Case
- Roletka s výberom z 14 rôznych use cases
- Zobrazenie popisu, primárneho cieľa a periódy

### Krok 2: Zadanie Metrík
- Dynamický formulár generovaný podľa vybraného use case
- Pre každú metriku je zobrazený popis a predvyplnená hodnota
- Validácia vstupov

### Krok 3: Výsledky
- Potenciálny príjem za periódu
- Počet očakávaných konverzií
- Ročný príjem (prepočítaný podľa periódy)
- Detailná slovná analýza s dosadením hodnôt

## Použitie

### Možnosť 1: Stiahnuť a spustiť lokálne

1. **Stiahni repozitár:**
   - Klikni na zelené tlačidlo "Code" na GitHube
   - Vyber "Download ZIP"
   - Rozbaľ ZIP súbor

2. **Otvor aplikáciu:**
   - Otvor súbor `index.html` v prehliadači (dvojklik na súbor)
   - Hotovo! Aplikácia by mala bežať

### Možnosť 2: Cez HTTP server (pre vývoj)

1. Otvor terminál v priečinku projektu
2. Spusti HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Otvor prehliadač a choď na: `http://localhost:8000`

### Možnosť 3: GitHub Pages (najjednoduchšie - live online)

1. Choď do repozitára na GitHube
2. Klikni na **Settings** (Nastavenia)
3. V ľavom menu klikni na **Pages**
4. Pod "Branch" vyber svoj branch (napr. `claude/create-multi-step-web-app-011CUQDQwgS1FSFfvTajMBYm`)
5. Klikni **Save**
6. Za pár sekúnd budeš mať link na živú aplikáciu (napr. `https://tvojemeno.github.io/UCCC/`)

## Súbory

- `index.html` - HTML štruktúra aplikácie
- `styles.css` - CSS štýly a dizajn
- `app.js` - JavaScript logika a výpočty
- `data.json` - Databáza use cases a metrík

## Technológie

- Čistý HTML5, CSS3, JavaScript (ES6+)
- Bez závislostí na externých knižniciach
- Plne responzívny dizajn
- Moderné animácie a prechody

## Use Cases

Aplikácia podporuje 14 use cases:

1. Personalized Abandoned Cart Email
2. Abandoned Cart Email with Recommendations
3. Abandoned Browse Flow
4. Welcome Flow
5. Post-Purchase Email With Recommendations
6. Post-Purchase NPS Flow
7. Birthday Campaign
8. Purchase Anniversary Recommendations
9. Reactivation Campaign for Lapsing/Lapsed Subscribers
10. Reactivation Campaign for Disengaged Email Subscribers
11. Automated Favorite Brand Newsletter With New Items
12. Automated Newsletter for New Items of Interest
13. Bi-Weekly Product Recommendation Newsletter
14. Retention Campaign for Repeat Purchasers

## Autor

Created with Claude Code
