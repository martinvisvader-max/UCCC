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

### Spustenie lokálne

1. Otvor terminál v priečinku projektu
2. Spusti HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
3. Otvor prehliadač a choď na: `http://localhost:8000`

### Alebo jednoducho otvor `index.html` priamo v prehliadači

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
