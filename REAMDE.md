# Connect Four - Dokumentacja

## Opis Projektu
Connect Four to klasyczna gra planszowa dla dwóch graczy, zaimplementowana w Pythonie z użyciem WebSocketów. Aplikacja działa w czasie rzeczywistym i umożliwia:
- Rozpoczęcie nowej gry.
- Dołączenie drugiego gracza do już istniejącej gry.
- Obserwowanie rozgrywki przez widzów.

Projekt zawiera serwer napisany w Pythonie oraz frontend w HTML i JavaScript.

---


## Wymagania Systemowe
- Python 3.8 lub nowszy.
- Zainstalowane zależności z pliku `requirements.txt`.

---

## Instalacja

### Krok 1: Pobranie projektu
Sklonuj repozytorium na swoje urządzenie:
```bash
git clone <URL_REPOZYTORIUM>
cd <NAZWA_FOLDERU_PROJEKTU>
```


### Krok 2: Instalacja zależności
Aby zainstalować wymagane moduły, wykonaj poniższą komendę w terminalu:
```bash
pip install -r requirements.txt
```

### Krok 3: Uruchomienie serwera

Aby uruchomić serwer lokalnie, wykonaj poniższą komendę w terminalu:  
```bash
python app.py
```
Po uruchomieniu serwera będzie on nasłuchiwał na porcie 8001.
Otwórz przeglądarkę i przejdź pod adres:
```
http://localhost:8001
```
Tak powinien wyglądać widok po poprawnym uruchomieniu:
![Widok gry](https://media.discordapp.net/attachments/838172772534190101/1313785143474786357/connect4.png?ex=67516543&is=675013c3&hm=3f2bf487e2bb684aaf62960cefb2ffe04e34d12a0b4db9279e07b345b3043890&=&format=webp&quality=lossless&width=885&height=437)

## Zasady Gry

Connect Four to gra logiczna dla dwóch graczy. Celem jest ustawienie czterech żetonów w linii (poziomo, pionowo lub ukośnie). Gracze na zmianę wrzucają żetony do kolumn, a żetony spadają na najniższe wolne miejsce. 

Gra kończy się, gdy któryś z graczy ustawi cztery żetony w linii lub gdy plansza zostanie zapełniona (remis). Można rozpocząć nową grę, dołączyć do istniejącej lub oglądać ją jako widz.

## Jak Dołączyć do Gry

1. **Utwórz nową grę**: Pierwszy gracz klika opcję `New` na stronie głównej. Po utworzeniu gry generowane są dwa linki:
   - **Join**: Dołączenie jako drugi gracz.
   - **Watch**: Oglądanie gry jako widz.
     
Linki uzyskuje się przez skopiowanie po najechaniu na odpowiedni przycisk.

2. **Udostępnij link**: Pierwszy gracz wysyła link z opcją `Join` drugiemu graczowi.

3. **Dołącz do gry**: Drugi gracz otwiera link `Join`, aby połączyć się z istniejącą grą i rozpocząć rywalizację.

4. **Oglądaj grę**: Dowolny użytkownik może otworzyć link `Watch`, aby oglądać postępy rozgrywki w czasie rzeczywistym.

Jeśli gra została zakończona lub link jest nieważny, pojawi się odpowiedni komunikat o błędzie.
