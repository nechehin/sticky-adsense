# sticky-adsense
Use amp-sticky-ad for create sticky adsense banner

## Simple example

```html
<div class="sticky-adsense"
     data-ad-client="ca-pub-XXXXXXXXXXX"
     data-ad-slot="NNNNNNNNNN"
></div>
<script async='async' src="https://cdn.jsdelivr.net/gh/nechehin/sticky-adsense@latest/sticky-adsense.min.js"></script>
```

## Available attibutes
- data-ad-client (required)
- data-ad-slot (required)
- data-width - adsense banner width, default 320
- data-height - adsense banner height, default 100

## Full example
```html
<div class="sticky-adsense"
     data-width="320"
     data-height="100"
     data-ad-client="ca-pub-XXXXXXXXXXX"
     data-ad-slot="NNNNNNNNNN"
></div>
<script async='async' src="https://cdn.jsdelivr.net/gh/nechehin/sticky-adsense@latest/sticky-adsense.min.js"></script>
```