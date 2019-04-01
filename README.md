# ![deFlex](https://deidee.com/logo.png?str=deFlex)

Stramien voor stijlbladen van deidee. Op basis van het flexboxmodel.

## Breekpunten

deFlex kent maar liefst zeven breekpunten (die natuurlijk niet allemaal te hoeven worden gebruikt):

| aanduiding | breekpunt | vanaf |
| ---------- | --------- | ----- |
| `xs` | extra klein (standaard) | `0` |
| `s` | klein | `300px` |
| `m` | gemiddeld | `600px` |
| `l` | groot | `900px` |
| `xl` | extra groot | `1200px` |
| `xxl` | extra extra groot | `1500px` |
| `3xl` | grootst | `1800px` |

De aanduiding ``xs`` wordt alleen in de _Sass_-broncode gebruikt. In de uiteindelijke HTML en CSS wordt de aanduiding voor het kleinste breekpunt (dus vanaf 0) weggelaten.

## Implementatie

Het stijlblad kan eenvoudig aan een webpagina worden toegekend door de volgende regel toe te voegen aan de  ``head``:

```HTML
<link rel="stylesheet" href="https://hetcdn.nl/deidee/css/deflex.min.css">
```

## Gebruik

deFlex kan worden gebruikt door specifieke ``class``es toe te voegen aan elementen binnen de `body` van een webpagina.

### Containers

Een container is het buitenste deel van deFlex. De breedte ervan wordt (deels) bepaald door het breekpunt. 

| breekpunt | maximale breedte |
| --------- | ---------------- |
| ≤ `xs` | `100%` |
| `m` | `576px` |
| `l` | `864px` |
| ≥ `xl` | `1176px` |

Een container wordt gecreërd door ``container`` als `class` aan een blokelement toe te voegen. Dit is vaak een `div`, maar dat hoeft niet.

### Rijen

Een rij kan worden gecreërd door ``row`` als `class` toe te voegen aan een blokelement. In de praktijk is dit vaak een `div`, maar dat hoeft niet. Een rij wordt altijd direct in een container óf in een kolom geplaatst:

```HTML
<div class="container">
    <div class="row">
        <div class="col">
            <div class="row">
                <div class="col"></div>
            </div>
        </div>
    </div>
</div>
```

### Kolommen

Kolommen zijn waar de magie van deFlex huist. Net als met containers en met rijen worden kolommen gecreërd door een `class` aan een blokelement toe te voegen. Kolommen zijn er echter in vele (lees: honderden) smaken.

Voor elke teller van alle noemers van 1 tot en met 16 (met een unieke uitkomst) is er een kolom gedefinieerd en dat ook nog eens voor alle breekpunten. Zo kun je met deFlex bijvoorbeeld zeggen:

> Vanaf breekpunt ``l`` (900 pixels), wil ik 9 uit 16 kolommen (56.25% breedte).

De ``class`` voor dit specifieke voorbeeld is `col-l-9o16`. Hierin staat `col` voor *column* (oftewel kolom), is `l` de aanduiding van het breekpunt, is `9` de teller, staat `o` voor *of* (oftewel van) en is `16` de noemer.

Een dergelijke ``class`` leest dus als:

> kolom streepje *breekpunt* streepje *teller* van *noemer*.

Om bytes te besparen zijn alleen de meest eenvoudige breuken gebruikt om de kolommen te definiëren. Zo zijn `col-2o4` en `col-8o16` bijvoorbeeld **niet** beschikbaar omdat deze dezelfde uitkomst als `col-1o2` (namelijk 50%) zouden hebben.

Zoals eerder aangegeven wordt de aanduiding van het breekpunt bij het kleinste breekpunt (``xs``) tevens weggelaten. Hierdoor is `col-1o2` een valide `class` die werkt op alle resoluties.

## Integreren

deFlex kan worden geïntegreerd in een ander stijlblad met behulp van ``gulp-sass``.

### Installeren pakket

```Shell
npm i @deidee/deflex -s
```

### Toevoegen aan *Sass*

```Scss
@import "../node_modules/@deidee/deflex/scss/deflex";
```

## Uitbreiden

Om wijzigingen aan te brengen in de broncode kan de repository worden gecloned en vervolgens de juiste pakketten worden geïnstalleerd. Dat gebeurt als volgt: 

```Shell
git clone git@github.com:deidee/deflex.git
npm i
```

## Publiceren

Het pakket publiceren gebeurt alleen door deIdee en wel op de volgende manier:

```Shell
npm publish --access public
```
