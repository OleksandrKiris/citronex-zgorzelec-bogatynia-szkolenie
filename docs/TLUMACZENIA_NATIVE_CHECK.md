# Kontrola tlumaczen az / fil / id / ne

Status techniczny:
- wszystkie aktywne obiekty tlumaczen maja komplet jezykow: `pl`, `en`, `ua`, `ru`, `az`, `es`, `fil`, `id`, `ne`;
- sprawdzono brak pustych tekstow, `undefined`, `NaN`, blednych tekstow technicznych i uszkodzonych znakow;
- render krytycznych ekranow zostal sprawdzony w przegladarce.

Do szybkiej kontroli przez native speakera:
- `az` - czy zdania sa naturalne dla pracownika z Azerbejdzanu;
- `fil` - czy komunikaty sa proste dla pracownika z Filipin;
- `id` - czy instrukcje sa jasne dla pracownika z Indonezji;
- `ne` - czy komunikaty sa zrozumiale dla pracownika z Nepalu.

Najwazniejsze ekrany do kontroli:
- Start;
- Mapa;
- Magazyn;
- Tablet;
- Szklarnia;
- Reader;
- Lekarz;
- Kontakty;
- Grupy;
- Miasto / urzad / banki;
- Slownik;
- Powiedz po polsku;
- Zakazy;
- Test.

Zasada kontroli:
Tekst ma byc prosty, krotki i zrozumialy dla nowej osoby. Nie poprawiamy logiki instrukcji, tylko naturalnosc jezyka.
