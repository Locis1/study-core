# Study Core – Angular mit C-Backend und Java-Backend

## Ziel

Eine Lern-App für Mathe und Informatik.

Wichtig:

> Ein Angular-Frontend spricht mit zwei Backends.

```text
Angular Frontend
│
├── C-Backend       # C-Grundlagen, Algorithmen, Mathe-Kerne
│
└── Java-Backend    # OOP, Spring Boot, Studien-/Backend-Struktur
```

Dashboard, Design und schöne Startseite kommen erst später.

Erst muss laufen:

1. C-Backend erreichbar
2. Angular ruft C-Backend auf
3. Java-Backend erreichbar
4. Angular ruft Java-Backend auf
5. Danach Mathe-Funktionen einbauen

---

# 1. Projektstruktur

```text
study-core/
│
├── frontend-angular/
│   └── Angular App
│
├── backend-c/
│   └── C HTTP API
│
├── backend-java/
│   └── Java Spring Boot API
│
└── docs/
    └── roadmap.md
```

---

# 2. Ports und Schnittstellen

## Angular

```text
http://localhost:4200
```

## Java-Backend

```text
http://localhost:8080
```

## C-Backend

```text
http://localhost:9090
```

---

# 3. Start-Regel

Nicht mit Dashboard anfangen.

Nicht mit Login anfangen.

Nicht mit Datenbank anfangen.

Nicht mit schönem Design anfangen.

Erst Verbindung bauen.

---

# 4. Was als Erstes programmiert wird

## Schritt 1: C-Backend minimal

Ziel:

- C-Programm startet als kleiner HTTP-Server
- Angular kann es später aufrufen

Erste Endpunkte:

```text
GET /api/c/health
GET /api/c/add?a=3&b=4
```

Erwartung:

```text
/api/c/health → C backend running
/api/c/add?a=3&b=4 → 7
```

Warum zuerst?

Weil das die schwierigste Verbindung ist.

Wenn Angular einmal mit C sprechen kann, kannst du danach jedes C-Mathe-Modul einbauen.

---

## Schritt 2: Angular ruft C-Backend auf

Im Angular-Frontend erstmal nur eine Testseite.

Kein Dashboard.

Nur:

```text
[Button] Test C Backend

Ergebnis:
C backend running
```

Angular-Service:

```text
c-api.service.ts
```

Aufgabe:

- [ ] HTTP GET auf `/api/c/health`
- [ ] Ergebnis anzeigen
- [ ] HTTP GET auf `/api/c/add?a=3&b=4`
- [ ] Ergebnis anzeigen

---

## Schritt 3: Erstes C-Mathe-Modul

Erstes echtes Modul:

```text
Aussagenlogik in C
```

Endpunkt:

```text
GET /api/c/logic/and?a=true&b=false
```

Danach:

```text
GET /api/c/logic/truth-table
```

Frontend zeigt:

- Eingabe A/B
- UND
- ODER
- NICHT
- Wahrheitstabelle

---

## Schritt 4: Java-Backend minimal

Erst wenn C-Verbindung läuft.

Erste Endpunkte:

```text
GET /api/java/health
GET /api/java/add?a=3&b=4
```

Erwartung:

```text
/api/java/health → Java backend running
/api/java/add?a=3&b=4 → 7
```

---

## Schritt 5: Angular ruft Java-Backend auf

Angular-Service:

```text
java-api.service.ts
```

Aufgabe:

- [ ] HTTP GET auf `/api/java/health`
- [ ] Ergebnis anzeigen
- [ ] HTTP GET auf `/api/java/add?a=3&b=4`
- [ ] Ergebnis anzeigen

---

# 5. Technische Entscheidung für C-Backend

Für den Anfang:

```text
C + kleiner HTTP-Server
```

Praktische Option:

```text
Mongoose C Library
```

Warum?

- nur wenige Dateien
- C-kompatibel
- gut für kleine HTTP APIs
- reicht für lokale Lern-App

Nicht am Anfang:

- JNI
- WebAssembly
- Docker
- Datenbank
- Microservice-Komplexität
- perfekte Architektur

---

# 6. Angular-Struktur am Anfang

Minimal halten.

```text
frontend-angular/
└── src/app/
    ├── services/
    │   ├── c-api.service.ts
    │   └── java-api.service.ts
    │
    ├── pages/
    │   ├── c-test/
    │   ├── java-test/
    │   ├── logic-c/
    │   └── sets-java/
    │
    └── app.routes.ts
```

Keine große Startseite.

Keine unnötige UI.

Nur Funktionsseiten.

---

# 7. Welche Mathe-Themen mit C?

C nutze ich für Themen, bei denen ich Grundlagen und Algorithmen wirklich verstehen will.

## 7.1 Aussagenlogik

C-Backend:

```text
/api/c/logic/and
/api/c/logic/or
/api/c/logic/not
/api/c/logic/xor
/api/c/logic/implication
/api/c/logic/truth-table
```

Frontend:

- Wahrheitstabelle anzeigen
- true/false farblich markieren
- später Logik-Gatter visualisieren

Warum C?

- Bedingungen
- Boolean-Logik
- Schleifen
- Tabellen-Ausgabe

---

## 7.2 Zahlentheorie

C-Backend:

```text
/api/c/numbers/is-prime
/api/c/numbers/gcd
/api/c/numbers/lcm
/api/c/numbers/factorial
/api/c/numbers/power
```

Frontend:

- Eingabe von Zahlen
- Ergebnis anzeigen
- Rechenschritte anzeigen
- Teiler grafisch/listenartig anzeigen

Warum C?

- Schleifen
- Funktionen
- Integer-Rechnung
- algorithmisches Denken

---

## 7.3 Folgen und Rekursion

C-Backend:

```text
/api/c/sequences/fibonacci
/api/c/sequences/factorial-recursive
/api/c/sequences/arithmetic
/api/c/sequences/geometric
```

Frontend:

- Wertetabelle anzeigen
- Folge als Punkte/Graph visualisieren
- iterativ vs. rekursiv vergleichen

Warum C?

- Rekursion
- Stack-Verständnis
- Laufzeitgefühl

---

## 7.4 Vektoren

C-Backend:

```text
/api/c/vectors/add
/api/c/vectors/subtract
/api/c/vectors/dot-product
/api/c/vectors/length
```

Frontend:

- Vektor als Pfeil zeichnen
- Addition als Pfeil-an-Pfeil zeigen
- Winkel später ergänzen

Warum C?

- Arrays
- Schleifen
- mathematische Funktionen

---

## 7.5 Matrizen

C-Backend:

```text
/api/c/matrices/add
/api/c/matrices/multiply
/api/c/matrices/transpose
/api/c/matrices/gauss
```

Frontend:

- Matrix als Tabelle anzeigen
- aktuelle Rechenoperation markieren
- Gauß-Schritte sichtbar machen

Warum C?

- 2D-Arrays
- Schleifen
- Algorithmen
- Speicherverständnis

---

## 7.6 Suchen und Sortieren

C-Backend:

```text
/api/c/algorithms/linear-search
/api/c/algorithms/binary-search
/api/c/algorithms/bubble-sort
/api/c/algorithms/selection-sort
```

Frontend:

- Array anzeigen
- aktuelles Element markieren
- Sortierschritte visualisieren

Warum C?

- Arrays
- Laufzeit
- Algorithmus wirklich sehen

---

# 8. Welche Themen mit Java?

Java nutze ich für saubere Modelle, OOP und Backend-Struktur.

## 8.1 Mengenlehre

Java-Backend:

```text
/api/java/sets/intersection
/api/java/sets/union
/api/java/sets/difference
/api/java/sets/is-subset
```

Frontend:

- zwei Mengen eingeben
- Ergebnis anzeigen
- Venn-Diagramm visualisieren

Warum Java?

- `Set`
- Collections
- saubere Datenmodelle
- gute Backend-Übung

---

## 8.2 Gleichungen

Java-Backend:

```text
/api/java/equations/linear
/api/java/equations/quadratic
```

Frontend:

- Gleichung eingeben
- Ergebnis anzeigen
- Rechenschritte anzeigen
- Gerade/Parabel visualisieren

Warum Java?

- Klassen
- Ergebnisobjekte
- Rechenschritte als Liste
- gute OOP-Übung

---

## 8.3 Funktionen

Java-Backend:

```text
/api/java/functions/linear
/api/java/functions/quadratic
/api/java/functions/exponential
/api/java/functions/logarithmic
```

Frontend:

- Wertetabelle anzeigen
- Graph zeichnen
- Parameter verändern

Warum Java?

- Interfaces
- Polymorphismus
- Funktionsklassen

---

## 8.4 Objektorientierte Vektoren und Matrizen

Java-Backend:

```text
/api/java/vectors
/api/java/matrices
```

Frontend:

- Vergleich zur C-Version
- gleiche Aufgabe, aber mit Java-Modell
- Ergebnis und Rechenweg anzeigen

Warum Java?

- Klassen `Vector`
- Klassen `Matrix`
- Methoden
- Tests
- saubere Struktur

---

## 8.5 Graphentheorie

Java-Backend:

```text
/api/java/graphs/bfs
/api/java/graphs/dfs
/api/java/graphs/dijkstra
```

Frontend:

- Knoten und Kanten zeichnen
- besuchte Knoten markieren
- kürzesten Weg hervorheben

Warum Java?

- Klassen `Node`, `Edge`, `Graph`
- Collections
- Algorithmen auf Objektstrukturen

---

# 9. Konkrete Reihenfolge

## Phase 1: C-Verbindung

- [ ] `backend-c` Ordner erstellen
- [ ] C-Projekt starten
- [ ] kleinen HTTP-Server starten
- [ ] `/api/c/health` bauen
- [ ] `/api/c/add` bauen
- [ ] C-Backend lokal auf Port 9090 starten

Fertig, wenn:

```text
Browser zeigt:
http://localhost:9090/api/c/health
```

---

## Phase 2: Angular zu C

- [ ] Angular-Projekt erstellen
- [ ] `c-api.service.ts` erstellen
- [ ] C-Testseite erstellen
- [ ] Button ruft `/api/c/health` auf
- [ ] Button ruft `/api/c/add` auf
- [ ] Ergebnis im Frontend anzeigen

Fertig, wenn:

```text
Angular zeigt Ergebnis aus C-Backend.
```

---

## Phase 3: Erstes echtes C-Modul

- [ ] C: AND-Funktion
- [ ] C: OR-Funktion
- [ ] C: NOT-Funktion
- [ ] C: Wahrheitstabelle erzeugen
- [ ] Angular: Wahrheitstabelle anzeigen
- [ ] Angular: true/false sichtbar machen

Fertig, wenn:

```text
Aussagenlogik läuft über Angular → C-Backend → Angular.
```

---

## Phase 4: Java-Verbindung

- [ ] `backend-java` Ordner erstellen
- [ ] Spring Boot starten
- [ ] `/api/java/health` bauen
- [ ] `/api/java/add` bauen
- [ ] Java-Backend lokal auf Port 8080 starten

Fertig, wenn:

```text
Browser zeigt:
http://localhost:8080/api/java/health
```

---

## Phase 5: Angular zu Java

- [ ] `java-api.service.ts` erstellen
- [ ] Java-Testseite erstellen
- [ ] Button ruft `/api/java/health` auf
- [ ] Button ruft `/api/java/add` auf
- [ ] Ergebnis im Frontend anzeigen

Fertig, wenn:

```text
Angular zeigt Ergebnis aus Java-Backend.
```

---

## Phase 6: Erstes Java-Modul

- [ ] Mengenlehre in Java
- [ ] Schnittmenge
- [ ] Vereinigung
- [ ] Differenz
- [ ] Teilmenge prüfen
- [ ] Angular-Seite für Mengenlehre
- [ ] Venn-Diagramm später ergänzen

Fertig, wenn:

```text
Mengenlehre läuft über Angular → Java-Backend → Angular.
```

---

# 10. MVP

Der erste echte MVP ist nicht schön, aber technisch richtig.

## Muss laufen

- [ ] Angular läuft auf Port 4200
- [ ] C-Backend läuft auf Port 9090
- [ ] Java-Backend läuft auf Port 8080
- [ ] Angular kann C aufrufen
- [ ] Angular kann Java aufrufen
- [ ] C-Modul Aussagenlogik funktioniert
- [ ] Java-Modul Mengenlehre funktioniert

## Muss noch nicht sein

- [ ] Dashboard
- [ ] Login
- [ ] Datenbank
- [ ] Docker
- [ ] perfektes Design
- [ ] Benutzerverwaltung
- [ ] Deployment

---

# 11. Merksatz

> Erst Schnittstellen.  
> Dann Mathe.  
> Dann Visualisierung.  
> Dann schöne Oberfläche.
