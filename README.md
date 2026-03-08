EPFL IC Boost Day: "Open Source" talk
===

These are the slides for the 2026-03-11 talk entitled "Open Source", given to the IC faculty at EPFL.

## Abstract

_Open source is more than just publicly available code: it's a model for collaboration and innovation at global scale. We'll explore how open source projects are built, governed, and sustained, from small community-driven libraries to large foundations powering critical infrastructure. We'll discuss licensing, community dynamics and maintainership challenges. Finally, you'll discover how you can leverage open source to advance your career._

## Running the presentation

This presentation uses the [RevealJS](https://revealjs.com/) platform.

First install the dependencies (you will need Node 20+):
```shell
npm ci
```

Then you can spawn a development environment with:
```shell
npm run dev
```

This will open a webserver at: http://localhost:5173/icbd/ (actual port may vary)

To print the slides, append [`?print-pdf`](http://localhost:5173/icbd/?print-pdf) to the URL, and then your browser built-in printing feature.

To hosts the slides, you may run:
```shell
npm run build
```

You can find the assets generated in the directory `dist/`.

## Disclaimer

The content presented here includes both factual information and personal opinions.
Every effort is made to ensure that factual statements are accurate and based on reliable sources when available.
Any opinions expressed are subjective interpretations or personal perspectives and should not be considered universally accepted views.
These opinions are my own and do not reflect or represent the views, positions, or opinions of my organization, or the host university.

## Copyright

**Warning**:
For commodity reasons this repository hosts a copy of copyrighted images, although efforts have been made to reduce such dependence to a minimum and to only mainly media compatible with the below license.
Credit for those images is given on the slides themselves.

All the remaining content falls under the [MIT license](LICENSE).

If you intend to modify those slides, please do not associate my name with your changes.
