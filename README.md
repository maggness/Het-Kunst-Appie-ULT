# Progressive Web Apps @cmda-minor-web · 2021/22

Voor mijn minor web maak ik met de API van het Rijksmuseam een applicatie waar je kan zoeken naar verschillende objecten uit deze API.

Je kan dit niet via github pages bekijken, dit moet je local runnen

![Front-end frontpage image](https://user-images.githubusercontent.com/30145681/157264964-a8900826-9802-4eb3-a5a7-f0be3a5e7089.png)

### User story

As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown [Rijksmuseum - RijksData API](https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/rijksmuseum.md)

## How to use

Met deze app kan je zoeken naar objecten uit de database van het Rijksmuseum. Je kan op de kunstwerken drukken en zo kom je op een detail pagina met wat langere informatie over dat kunstwerk. Ook kan je inzoomen op het kunstwerk. Als je op mobiel kijkt en je het scherm naar landscape modus brengt gaat de UI weg en zie je het kunstwerk nog beter, ook hier kun je inzoomen.

## Install the project

Om dit te runnen moet je node & npm hebben geinstalleerd.

Om dit project local te laten draaien kun je dit project clone met: `gh repo clone maggness/Het-Kunst-Appie-ULT`. Draai de code op een local server, anders werken de modules niet.

Vergeet niet `npm install` te gebruiken om de node modules te installeren.

Ook moet je de API key veranderen naar je eigen key. die staat in de URL na `key=`

Run de applicatie op je localhost:6969, dit kan je doen met `npm start`.

## Install the app

Je kan de app op je telefoon of desktop installeren, doe dit via deze link: https://het-kunst-appie.herokuapp.com/
 

## Activity Diagram

![Activity Diagram](https://user-images.githubusercontent.com/30145681/162433702-7b9e2509-9ff7-4fca-95f8-14fe86fcd5dc.png)

## Snelheid vergelijking WAFS/PWA

### WAFS Snelheid

(WAFS) Snelheid van de het kunst appie op mobiel: 

![image](https://user-images.githubusercontent.com/30145681/161752912-dc3fa21d-e44a-4fdf-9dbf-e94b4bdd0f7f.png)

(WAFS) Snelheid van de het kunst appie op desktop: 

![image](https://user-images.githubusercontent.com/30145681/161753076-278046a9-297c-48c1-b48b-8bb84db3bd2a.png)

### PWA Snelheid

(PWA) Snelheid van de het kunst appie ULT op mobiel: 

![image](https://user-images.githubusercontent.com/30145681/161752352-74b4eab9-02ac-41cb-a6b7-406d33a42e1c.png)

(PWA) Snelheid van de het kunst appie ULT op desktop:

![image](https://user-images.githubusercontent.com/30145681/161754275-bec15155-12ae-483e-ba4b-30d639cc3f3b.png)


### Snelheid detail

![image](https://user-images.githubusercontent.com/30145681/161754026-3a83f2d6-3a52-4d8c-969e-feb917388870.png)

De performace bij de detail pagina is alleen wat minder, dit komt omdat ik een hele grote afbelding inlaad. Dit doe ik omdat je in kan zoomen op de foto om het kunstwerk in meer detail te bekijken.

### App netwerk loading
![netwerk loading](https://user-images.githubusercontent.com/30145681/162408131-77c8e5be-24a5-44b2-a4fc-682493063a50.png)

## Service worker

De service worker slaat de `CORE_ASSETS` bestanden op in de cache onder de naam die gegeven is in `CORE_CACHE_VERSION`. Hier haalt hij offline de styling, js, offline pagina &  2 foto's op. Ook slaat hij appart de html pagina's op waar je op komt, zo kan je de pagina's die je al bezocht heb offline bekijken. Als je offline op een pagina komt die je nog niet heb bekeken kom je op de offline versie, dan staat er dat je offline bent en de pagina niet kunt zien.

## Optimalisaties

Om de images op de home pagina sneller in te laten laden heb ik de images met `slice(0,-3)+"=s1000"` aangeroepen. Zo stel je in hoeveel pixels de foto zal hebben. Dit heb ik bij de detail pagina niet gedaan omdat je hier op de foto's kunt inzoomen. In een latere versie van de app wil ik eerst de foto's met lage pixels inladen en dan de grote foto's renderen. 

De pagina's worden gecached zodat deze grote foto's sneller geladen zijn als je ze al een keer geladen heb.

De client javascript heeft `defer` in de script tag zo moet de css niet wachten op de js om in te laden, hierdoor zie je de styling sneller.

## API 

De Rijks Data API is vrij te gebruiken en op https://data.rijksmuseum.nl/object-metadata/api/ te vinden. Meer informatie over deze API is te vinden op: https://data.rijksmuseum.nl/

## Future features

- Loadmore button om meer dan 10 items te laten zien.
- Hinting search om het zoeken nog makkelijker & beter te maken.
- Zoom functie verbeteren
- Improved UI
- Improve Error/Loading state

## Licence

Dit project is voorzien van een MIT licence. Zie de pagina LICENCE voor meer informatie.

## Resources

Rijks Data API: https://data.rijksmuseum.nl/object-metadata/api/

Lessen & leraren

W3 Schools
