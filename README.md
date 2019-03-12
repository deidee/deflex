# ![deflex](https://deidee.com/logo.png?str=deflex)

Stramien voor stijlbladen van deidee. Op basis van het flexboxmodel.

## Onderdelen

* Containers
* Rijen
* Kolommen

## Gebruik

In de ``head``:

```HTML
<link rel="stylesheet" href="https://hetcdn.nl/deidee/css/deflex.min.css">
```

In de ``body``:

```HTML
<div class="container">
    <div class="row">
        <div class="col-1o2"></div>
        <div class="col-1o2"></div>
    </div>
</div>
```

# Installeren

```Shell
git clone git@github.com:deidee/hetcanvas.git
npm install
```

## Publiceren

```Shell
npm publish --access public
```
