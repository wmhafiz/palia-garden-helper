Repository: vincentamante/palia-tools
Files analyzed: 212

Estimated tokens: 165.1k

Directory structure:
└── vincentamante-palia-tools/
├── README.md
├── app.vue
├── CONTRIBUTNG.md
├── eslint.config.mjs
├── LICENSE.md
├── nuxt.config.ts
├── package.json
├── robots.txt
├── sitemap.xml
├── tsconfig.json
├── vitest.config.ts
├── .eslintrc
├── .npmrc
├── @types/
│ └── dom-to-image-more.d.ts
├── **mocks**/
│ └── canvas.ts
├── assets/
│ ├── css/
│ │ └── main.css
│ └── scripts/
│ ├── garden-planner/
│ │ ├── cropList.ts
│ │ ├── fertiliserList.ts
│ │ ├── imports.ts
│ │ ├── save-handler.spec.ts
│ │ ├── save-handler.ts
│ │ ├── classes/
│ │ │ ├── crop.ts
│ │ │ ├── cropTiles.ts
│ │ │ ├── fertiliser.ts
│ │ │ ├── garden.ts
│ │ │ ├── harvester.ts
│ │ │ ├── plot.ts
│ │ │ ├── processor.ts
│ │ │ ├── tile.ts
│ │ │ ├── trackedInventory.ts
│ │ │ └── items/
│ │ │ └── item.ts
│ │ ├── enums/
│ │ │ ├── bonus.ts
│ │ │ ├── crop-size.ts
│ │ │ ├── cropCode.ts
│ │ │ ├── crops.ts
│ │ │ ├── direction.ts
│ │ │ ├── fertiliser.ts
│ │ │ └── fertilisercode.ts
│ │ ├── types/
│ │ │ └── plotStat.ts
│ │ └── utils/
│ │ └── garden-helpers.ts
│ ├── house-planner/
│ │ ├── imports.ts
│ │ ├── classes/
│ │ │ ├── building.ts
│ │ │ ├── House.ts
│ │ │ ├── buildings/
│ │ │ │ ├── BayWindow.ts
│ │ │ │ ├── Fireplace.ts
│ │ │ │ ├── Hallway.ts
│ │ │ │ ├── HarvestHouse.ts
│ │ │ │ ├── KilimaCourtyard.ts
│ │ │ │ ├── KilimaDoor.ts
│ │ │ │ ├── KilimaPorch.ts
│ │ │ │ ├── LargeHouse.ts
│ │ │ │ ├── MediumHouse.ts
│ │ │ │ ├── NullHouse.ts
│ │ │ │ └── SmallHouse.ts
│ │ │ ├── parts/
│ │ │ │ ├── CollisionBox.ts
│ │ │ │ ├── Image.ts
│ │ │ │ └── SnapBox.ts
│ │ │ └── utils/
│ │ │ └── helpers.ts
│ │ ├── enums/
│ │ │ ├── buildingType.ts
│ │ │ └── zLevel.ts
│ │ └── types/
│ │ ├── BuildingData.ts
│ │ └── ConfigOptions.ts
│ └── utils/
│ ├── imports.ts
│ ├── enums/
│ │ └── direction.ts
│ └── types/
│ ├── coordinates.ts
│ └── dimensions.ts
├── components/
│ ├── AppDivider.vue
│ ├── AppDividerAlt.vue
│ ├── ChangelogItem.vue
│ ├── CoverageStat.vue
│ ├── CreditName.vue
│ ├── CropButton.vue
│ ├── CropDetailButton.vue
│ ├── CropTile.vue
│ ├── FertiliserButton.vue
│ ├── GardenPlanner.vue
│ ├── GuideCard.vue
│ ├── HarvestCalculator.vue
│ ├── LayoutCreator.vue
│ ├── PGPFooter.vue
│ ├── PGPHeader.vue
│ ├── PGPModal.vue
│ ├── RoadmapCard.vue
│ ├── TimeDisplay.vue
│ ├── Toast.vue
│ ├── garden-planner/
│ │ ├── ExportModal.vue
│ │ ├── LoadModal.vue
│ │ ├── MenuBar.vue
│ │ ├── NewGardenDisplay.vue
│ │ ├── NewSettings.vue
│ │ ├── NewStatsDisplay.vue
│ │ ├── OutputDisplay.vue
│ │ ├── SaveLoadUtils.ts
│ │ ├── SaveModal.vue
│ │ ├── SettingsMinutesDisplay.vue
│ │ ├── StatsDisplay.vue
│ │ ├── UISettingsModal.vue
│ │ ├── HarvestCalculator/
│ │ │ ├── CropDisplay.vue
│ │ │ ├── CropDisplayAlt.vue
│ │ │ ├── HCDay.vue
│ │ │ ├── HCInfo.vue
│ │ │ ├── HCTags.vue
│ │ │ ├── HCTotal.vue
│ │ │ ├── ItemDisplay.vue
│ │ │ ├── ItemDisplayAlt.vue
│ │ │ ├── OptionCard.vue
│ │ │ └── TotalInventory.vue
│ │ ├── ItemSelector/
│ │ │ ├── CropModalButton.vue
│ │ │ ├── HoveredItemTooltip.vue
│ │ │ └── ItemSelector.vue
│ │ └── OutputDisplay/
│ │ ├── CropCrafterDataDisplay.vue
│ │ ├── CropDetailsDisplay.vue
│ │ ├── CropDetailsHarvest.vue
│ │ ├── CropDetailsOverallDisplay.vue
│ │ ├── InventoryRow.vue
│ │ └── OverallDisplay.vue
│ └── house-planner/
│ ├── BuildingButton.vue
│ ├── HouseGrid.vue
│ ├── HousePlanner.vue
│ └── HousingHeader.vue
├── layouts/
│ ├── compact.vue
│ ├── default.vue
│ └── housing.vue
├── pages/
│ ├── changelogs.vue
│ ├── compact.vue
│ ├── credits.vue
│ ├── index.vue
│ ├── roadmap.vue
│ └── house-planner/
│ └── index.vue
├── plugins/
│ ├── fontawesome.ts
│ └── vuekonva.ts
├── public/
│ ├── gold.webp
│ ├── housing-logo.webp
│ ├── logo.webp
│ ├── buildings/
│ │ └── icons/
│ │ ├── bay-window.webp
│ │ ├── fireplace.webp
│ │ ├── hallway.webp
│ │ ├── harvest-house.webp
│ │ ├── kilima-courtyard.webp
│ │ ├── kilima-door.webp
│ │ ├── kilima-porch.webp
│ │ ├── large-room.webp
│ │ ├── medium-room.webp
│ │ └── small-room.webp
│ ├── crafters/
│ │ ├── preserve-jar.webp
│ │ └── seeder.webp
│ ├── crops/
│ │ ├── apple.webp
│ │ ├── batterfly-bean.webp
│ │ ├── blueberry.webp
│ │ ├── bok-choy.webp
│ │ ├── carrot.webp
│ │ ├── corn.webp
│ │ ├── cotton.webp
│ │ ├── crop-pumpkin.webp
│ │ ├── napa-cabbage.webp
│ │ ├── onion.webp
│ │ ├── potato.webp
│ │ ├── rice.webp
│ │ ├── rockhopper-pumpkin.webp
│ │ ├── spicy-pepper.webp
│ │ ├── tomato.webp
│ │ └── wheat.webp
│ ├── externals/
│ │ ├── kofi.webp
│ │ └── palia-party.webp
│ ├── fertilisers/
│ │ ├── harvest-boost.webp
│ │ ├── hydrate-pro.webp
│ │ ├── quality-up.webp
│ │ ├── speedy-gro.webp
│ │ └── weed-block.webp
│ ├── items/
│ │ └── glass-pane.webp
│ ├── jars/
│ │ ├── apple.webp
│ │ ├── batterfly-bean.webp
│ │ ├── blueberry.webp
│ │ ├── bok-choy.webp
│ │ ├── carrot.webp
│ │ ├── corn.webp
│ │ ├── napa-cabbage.webp
│ │ ├── onion.webp
│ │ ├── potato.webp
│ │ ├── rockhopper-pumpkin.webp
│ │ ├── spicy-pepper.webp
│ │ └── tomato.webp
│ ├── seeds/
│ │ ├── apple.webp
│ │ ├── batterfly-bean.webp
│ │ ├── blueberry.webp
│ │ ├── bok-choy.webp
│ │ ├── carrot.webp
│ │ ├── corn.webp
│ │ ├── cotton.webp
│ │ ├── napa-cabbage.webp
│ │ ├── onion.webp
│ │ ├── potato.webp
│ │ ├── rice.webp
│ │ ├── rockhopper-pumpkin.webp
│ │ ├── spicy-pepper.webp
│ │ ├── tomato.webp
│ │ └── wheat.webp
│ └── ui/
├── server/
│ ├── tsconfig.json
│ └── api/
│ └── getPresets.ts
├── stores/
│ ├── useDragAndDrop.ts
│ ├── useGarden.ts
│ ├── useHarvester.ts
│ ├── useHousePlanConfig.ts
│ ├── useIsTakingScreenshot.ts
│ ├── usePlannerDisplayConfig.ts
│ ├── useProcessor.ts
│ ├── useSaveCode.ts
│ ├── useSelectedItem.ts
│ ├── useSettingsCode.ts
│ ├── useToasts.ts
│ └── useUiSettings.ts
└── utils/
└── formatters.ts

================================================
FILE: README.md
================================================

# Palia Garden Planner / Palia Tools

A fan-made Garden Planner for the game [Palia](https://palia.com).
Displays bonus coverage based on crops and fertilisers, and approximates the harvest value.
Made on Nuxt and Vue, hosted on Vercel.

[Link to Website](https://palia-garden-planner.vercel.app)

## License

This project is licensed under the [MIT License](https://github.com/VincentAmante/palia-tools/blob/main/LICENSE.md). **Note:** The license specified above applies exclusively to the source code, configuration files, and documentation created and maintained within this repository.

### Assets and Intellectual Property

This project may contain assets, media files, or intellectual property that are owned by other companies or individuals (such as Singularity 6). These assets are not covered by the open-source license mentioned above. I do not claim ownership or rights over these assets.

## Why is this called Palia Tools?

There were plans to add other tools once the planner is considered feature-complete, with everything on the Road Map being ticked off.

## Roadmap

Plans for the Planner are found here: [Roadmap Link](https://palia-garden-planner.vercel.app/roadmap)

## Contributing Guide

See the [CONTRIBUTING.md](https://github.com/VincentAmante/palia-tools/blob/main/CONTRIBUTNG.md) for info

## Project Setup

Made with the Nuxt minimal starter. Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Installation

```bash
# npm
npm install
# pnpm
pnpm install
# yarn
yarn install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
# pnpm
pnpm run dev
# yarn
yarn dev
```

================================================
FILE: app.vue
================================================

<script setup lang="ts">
useServerSeoMeta({
  ogTitle: 'Palia Garden Planner',
  ogDescription: 'A fan-made tool for planning out your garden. Displays crop and fertiliser bonuses, approximates harvest yield, and provides shareable save codes!',
  ogImage: 'https://palia-garden-planner.vercel.app/logo.webp',
  ogUrl: 'https://palia-garden-planner.vercel.app/',
  ogSiteName: 'Palia Garden Planner',
  ogType: 'website',
  ogLocale: 'en_UK',
  title: 'Palia Garden Planner',
  description: 'A fan-made tool for planning out your garden. Displays crop and fertiliser bonuses, approximates harvest yield, and provides shareable save codes!',
  themeColor: '#97AF51',
  twitterTitle: 'Palia Garden Planner',
  twitterCard: 'summary',
  twitterDescription: 'A fan-made tool for planning out your garden. Displays crop and fertiliser bonuses, approximates harvest yield, and provides shareable save codes!',
  twitterImage: 'https://palia-garden-planner.vercel.app/logo.webp',
})

// For Google Search Console
useHead({
  meta: [
    {
      name: 'google-site-verification',
      content: '9aAZNWLR6mEsKgyPLuQphHNC73YjhWXF5z6CMbJTyZA',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div>
    <NuxtLayout />
  </div>
</template>

================================================
FILE: CONTRIBUTNG.md
================================================

# How to Contribute

First off, thank you so much for deciding to contribute.
I still have a lot of learning left to do in development and as this is my first public project,
I'm highly open to receive critique and feedback of my work.

## Issues/Suggestions/Pull Request Instructions

### Issue

Found an issue? Feel free to check in the issues tab and see if it has already been reported.

- If an issue exists, see if you can provide more info that isn't brought up yet!
- Otherwise, create a new issue and I'll try and get to it as soon as I can
- For convenience, do tag your issue using the labels provided
- The two required types of tags for issues are [bug | optimisation | question] and [behaviour | ui/ux | typo/clarification | documentation]
- Good tagging helps me prioritise my focus better

### Suggestion

Have a suggestion? You can treat it the same as an issue and follow the same steps as above

- For suggestions, these should be tagged under [optimisation | feature-request] and [behaviour | ui/ux | typo/clarification | qol]
- Suggestions will be considered, and will be closed if either completed/denied

### Pull Requests

You can make pull requests to suggest code changes directly.
I will get around to it and test them when I can, and if merged, will be credited to you in the changelogs and credits section.

- Pull requests can be made and tagged the same as either issue/suggestion with extra tags for PR state such as [wip | ready to pull | help wanted].
- PRs to main could be denied if they have major conflicts with other branches or has issues that will not be fixed in the PR
- Ideally, PRs should be made to dev branch or to hotfix branch, depending on the type of change you want to make
- Hotfix branch is synced to main and for making immediate changes that need to be addressed (Game Patch parity, urgent bugs, etc.)
- Dev branch is for everything else, especially incomplete/experimental changes
- PRs to other branches are okay/welcome, as long as it is relevant to what those branches are for

## Things I need help with

### Code Improvements

A lot of the planner was written with me prioritising releasing changes/additions with the intent to optimise later.
This proved to be a less than ideal decision. As such I'm open to changes that break the files into smaller pieces,
which will hopefully make the planner easier to maintain/modify in the future.

In general I also welcome any improvements to the planner code.

### Behavioural Parity

Due to various reasons, I have not played the game in a while and cannot do my own field research.
Any contributions that can make the planner match in-game behaviour better is welcome and under heavy consideration

### QoL Improvements

Any way to improve the experience of using the planner is highly welcome,
and a section of the project that I would greatly appreciate as it allows me to focus on the major changes/free up time

### Feature Additions

The main roadmap involves things that I have plans for.
Pull requests that does the same thing will be considered,
but may be declined if I prefer the approach I had in mind.
This is not to discourage you from making those additions yourselves, but a warning that your efforts might not be properly rewarded.

Anything else though is still welcome, and is unlikely to have conflicts with my own changes.

================================================
FILE: eslint.config.mjs
================================================
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
{ files: ["**/*.{js,mjs,cjs,ts,vue}"], plugins: { js }, extends: ["js/recommended"] },
{ files: ["**/*.{js,mjs,cjs,ts,vue}"], languageOptions: { globals: globals.browser } },
tseslint.configs.recommended,
pluginVue.configs["flat/essential"],
{ files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]);

================================================
FILE: LICENSE.md
================================================

**NOTE**: The license specified applies exclusively to the source code, configuration files, and documentation created and maintained within this repository. See README.md for more details

# Released under MIT License

Copyright (c) 2023 Vincent Amante

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

================================================
FILE: nuxt.config.ts
================================================
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
css: [
'~/assets/css/main.css',
'@fortawesome/fontawesome-svg-core/styles.css',
],

devtools: {
enabled: true,
},
postcss: {
plugins: {
// tailwindcss: {},
// autoprefixer: {},
// '@tailwindcss/postcss': {}
},
},
nitro: {
static: true
},
modules: [
'@vueuse/nuxt',
'@nuxt/image',
'@pinia/nuxt',
'@nuxt/devtools',
'@nuxt/test-utils/module'
],

build: {
transpile: [
'@fortawesome/fontawesome-svg-core',
'@fortawesome/free-brands-svg-icons',
'@fortawesome/free-regular-svg-icons',
'@fortawesome/free-solid-svg-icons',
'@fortawesome/vue-fontawesome',
],
},

vite: {
plugins: [
tailwindcss()
]
},

typescript: {
shim: false,
},

plugins: [
{ src: '~/plugins/vuekonva', mode: 'client' },
],

app: {
head: {
charset: 'utf-8',
viewport: 'width=device-width, initial-scale=1',
},
layoutTransition: { name: 'layout', mode: 'out-in' },
pageTransition: { name: 'page', mode: 'out-in' },
},

compatibilityDate: '2024-09-20',
})

================================================
FILE: package.json
================================================
{
"name": "nuxt-app",
"private": true,
"scripts": {
"build": "nuxt build",
"dev": "nuxt dev",
"devhost": "nuxt dev --host",
"generate": "nuxt generate",
"preview": "nuxt preview",
"postinstall": "nuxt prepare",
"lint": "eslint .",
"lint:fix": "eslint . --fix"
},
"dependencies": {
"@fontsource-variable/merriweather": "^5.2.2",
"@fortawesome/fontawesome-svg-core": "^6.4.0",
"@fortawesome/free-brands-svg-icons": "^6.4.0",
"@fortawesome/free-regular-svg-icons": "^6.4.0",
"@fortawesome/free-solid-svg-icons": "^6.4.0",
"@fortawesome/vue-fontawesome": "^3.0.3",
"@pinia/nuxt": "^0.11.0",
"@tailwindcss/postcss": "^4.1.5",
"@tailwindcss/vite": "^4.1.5",
"dayjs": "^1.11.9",
"dom-to-image-more": "^3.1.6",
"downloadjs": "^1.4.7",
"konva": "^9.2.0",
"pinia": "^3.0.2",
"uniqid": "^5.4.0",
"virtua": "^0.41.2",
"vue-konva": "^3.0.2"
},
"devDependencies": {
"@eslint/js": "^9.25.1",
"@nuxt/devtools": "latest",
"@nuxt/image": "^1.0.0-rc.1",
"@nuxt/test-utils": "^3.19.0",
"@types/dom-to-image": "^2.6.4",
"@types/downloadjs": "^1.4.4",
"@types/node": "^18.17.3",
"@types/uniqid": "^5.3.2",
"@typescript-eslint/eslint-plugin": "^6.4.1",
"@vue/test-utils": "^2.4.6",
"@vueuse/core": "^13.1.0",
"@vueuse/nuxt": "^13.1.0",
"autoprefixer": "^10.4.15",
"canvas": "^3.1.0",
"daisyui": "^5.0.35",
"eslint": "^8.57.1",
"eslint-plugin-vue": "^10.0.1",
"globals": "^16.0.0",
"happy-dom": "^17.4.7",
"nuxt": "^3.17.2",
"playwright-core": "^1.52.0",
"postcss": "^8.4.28",
"tailwindcss": "^4.1.5",
"typescript": "^5.1.6",
"typescript-eslint": "^8.31.1",
"vitest": "^3.1.4"
},
"overrides": {
"vue": "latest"
}
}

================================================
FILE: robots.txt
================================================
User-agent: \*
Disallow:
Disallow: /cgi-bin/
Sitemap: https://palia-garden-planner.vercel.app

================================================
FILE: sitemap.xml
================================================

<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->

  <url>
    <loc>https://palia-garden-planner.vercel.app/</loc>
    <lastmod>2023-08-23T11:34:44+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://palia-garden-planner.vercel.app/roadmap</loc>
    <lastmod>2023-08-23T11:34:44+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://palia-garden-planner.vercel.app/changelogs</loc>
    <lastmod>2023-08-23T11:34:44+00:00</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>

================================================
FILE: tsconfig.json
================================================
{
// https://nuxt.com/docs/guide/concepts/typescript
"extends": "./.nuxt/tsconfig.json"
}

================================================
FILE: vitest.config.ts
================================================
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
test: {
include: ['**/*.{test,spec}.{js,ts}'],
environment: 'happy-dom', // or 'jsdom' for DOM testing
setupFiles: ['./__mocks__/canvas.ts']
}
})

================================================
FILE: .eslintrc
================================================
{
"extends": "@antfu"
}

================================================
FILE: .npmrc
================================================
shamefully-hoist=true
strict-peer-dependencies=false

================================================
FILE: @types/dom-to-image-more.d.ts
================================================
declare module 'dom-to-image-more' {
import domToImage = require('dom-to-image-more');
export = domToImage;
}

================================================
FILE: **mocks**/canvas.ts
================================================
export default {
createCanvas: () => ({
getContext: () => ({})
})
}

================================================
FILE: assets/css/main.css
================================================
@import '@fontsource-variable/merriweather';
body {
font-family: 'Merriweather Variable', serif;
font-display: swap;
}

@import 'tailwindcss';

@source inline("{xs:,sm:,lg:,}grid");
@plugin 'daisyui';
@plugin "daisyui/theme" {
name: "frnkrs";
default: true;
prefersdark: true;
color-scheme: light;

/_ Base colors _/
--color-base-100: oklch(41.04% 0.059 264.11); /_ #3A4A6B _/
--color-base-200: oklch(33.78% 0.047 264.32); /_ #2B3750 _/
--color-base-300: oklch(60.57% 0.025 73.93); /_ #8B8072 _/
--color-base-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

/_ Primary colors _/
--color-primary: oklch(83.90% 0.032 84.59); /_ #D4C9B3 _/
--color-primary-content: oklch(60.57% 0.025 73.93); /_ #8B8072 _/

/_ Secondary colors _/
--color-secondary: oklch(88.26% 0.025 81.12); /_ #E1D7C6 _/
--color-secondary-content: oklch(60.57% 0.025 73.93); /_ #8B8072 _/

/_ Accent colors _/
--color-accent: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/
--color-accent-content: oklch(56% 0.02 85); /_ #8B8072 _/

/_ Neutral colors _/
--color-neutral: oklch(28.42% 0.010 355.53); /_ #2e282a _/
--color-neutral-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

/_ State colors _/
--color-info: oklch(70.89% 0.064 220.07); /_ #73ABBD _/
--color-info-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

--color-success: oklch(71.54% 0.124 121.50); /_ #97AF51 _/
--color-success-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

--color-warning: oklch(74.23% 0.130 48.85); /_ #ED915E _/
--color-warning-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

--color-error: oklch(63.35% 0.157 33.73) /_ #D86046 _/
--color-error-content: oklch(91.97% 0.027 80.25); /_ #EEE3D1 _/

/_ Border radius _/
--radius-selector: 0.5rem;
--radius-field: 0.25rem;
--radius-box: 0.25rem;

/_ Base sizes _/
--size-selector: 0.25rem;
--size-field: 0.25rem;

/_ Border size _/
--border: 1px;

/_ Effects _/
--depth: 0;
--noise: 0;
}

/_ Custom button styles _/
[data-theme="frnkrs"] .btn-misc {
background-color: oklch(56% 0.02 85); /_ #8B8072 _/
color: oklch(92% 0.02 85); /_ #EEE3D1 _/
}

[data-theme="frnkrs"] .btn-misc:hover {
background-color: color-mix(in oklch, oklch(0% 0 0) 15%, transparent);
color: oklch(92% 0.02 85); /_ #EEE3D1 _/
}

@theme {
--color-\*: initial;

/_ Palia blues _/
--color-palia-blue: oklch(41.04% 0.059 264.11); /_ #3a4a6b _/
--color-palia-blue-dark: oklch(33.78% 0.047 264.32); /_ #2b3750 _/

/_ Misc colors _/
--color-misc: oklch(60.57% 0.025 73.93); /_ #8b8072 _/
--color-misc-dark: oklch(50.65% 0.023 69.70); /_ #6e6357 _/
--color-misc-saturated: oklch(72% 0.08 85); /_ #bfa178 _/
--color-misc-secondary: color-mix(in oklch, oklch(0% 0 0) 15%, transparent); /_ #00000025 _/

/_ Growth boost _/
--color-growth-boost: oklch(74.23% 0.130 48.85); /_ #ed915e _/
--color-growth-boost-dark: oklch(0.6656 0.18 38.34); /_ #EC6335 _/

/_ Quality colors _/
--color-quality-increase: oklch(77.06% 0.128 79.07); /_ #e0aa4a _/
--color-quality-increase-dark: oklch(67.68% 0.134 75.71); /_ #c68a1f _/
--color-quality-increase-light: oklch(85.19% 0.107 82.51); /_ #f1c87a _/

/_ Weed prevention _/
--color-weed-prevention: oklch(63.35% 0.157 33.73); /_ #d86046 _/
--color-error: var(--color-weed-prevention); /_ #D86046 _/

/_ Harvest boost _/
--color-harvest-boost: oklch(71.54% 0.124 121.50); /_ #97af51 _/
--color-harvest-boost-dark: oklch(60.24% 0.141 123.79); /_ #708e18 _/

/_ Water retain _/
--color-water-retain: oklch(70.89% 0.064 220.07); /_ #73abbd _/
--color-white: oklch(100% 0 0); /_ #fff _/

/_ Breakpoints _/
--breakpoint-\*: initial;
--breakpoint-xs: 475px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;

/_ Text sizes _/
--text-xxs: 0.625rem;
--text-xxs--line-height: 1rem;
}

/\*
The default border color has changed to `currentcolor` in Tailwind CSS v4,
so we've added these compatibility styles to make sure everything still
looks the same as it did with Tailwind CSS v3.

If we ever want to remove these styles, we need to add an explicit border
color utility to any element that depends on these defaults.
_/
@layer base {
_,
::after,
::before,
::backdrop,
::file-selector-button {
border-color: var(--color-misc, currentcolor);
}

button, input, select, optgroup, textarea, ::file-selector-button {
@apply bg-palia-blue-dark;
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button,
input[type='number'] {
-webkit-appearance: none;
margin: 0;
-moz-appearance: textfield !important;
}
}

@utility bg-gradient {
background: linear-gradient(180deg, #3a4a6b 43.75%, #467386 100%);
}

@utility scrollbar-primary {
&::-webkit-scrollbar {
@apply h-1 lg:h-0 lg:w-1 rounded-md;
}

&::-webkit-scrollbar-thumb {
@apply bg-palia-blue rounded-md;
}

&::-webkit-scrollbar-track {
@apply bg-accent rounded-md;
}
}

@utility scrollbar-primary-horizontal {
&::-webkit-scrollbar {
@apply w-1 lg:w-0 h-1 lg:h-[2px] rounded-md;
}

&::-webkit-scrollbar-thumb {
@apply bg-palia-blue rounded-md;
}

&::-webkit-scrollbar-track {
@apply bg-accent rounded-md h-1;
}
}

@utility scrollbar-invisible-horizontal {
&::-webkit-scrollbar {
@apply w-0 h-1 lg:h-[2px] rounded-md;
}

&::-webkit-scrollbar-thumb {
@apply bg-transparent rounded-md;
}

&::-webkit-scrollbar-track {
@apply bg-transparent rounded-md h-1;
}
}

@layer utilities {
.page-enter-active,
.page-leave-active {
transition: all 0.2s ease-in-out;
}
.page-enter,
.page-leave-active {
opacity: 0;
}
}

html {
::-webkit-scrollbar {
@apply h-1 lg:h-0 lg:w-1 rounded-md;
}

::-webkit-scrollbar-thumb {
@apply bg-palia-blue-dark rounded-md;
}

::-webkit-scrollbar-track {
@apply bg-palia-blue rounded-md;
}
}

body {
::-webkit-scrollbar {
@apply h-1 lg:h-0 lg:w-1 rounded-md;
}

::-webkit-scrollbar-thumb {
@apply bg-misc rounded-md;
}

::-webkit-scrollbar-track {
@apply bg-accent rounded-md;
}
}

- {

      box-sizing: border-box;

  }

.konvajs-content > canvas {
@apply rounded-md
}

================================================
FILE: assets/scripts/garden-planner/cropList.ts
================================================
import Crop from './classes/crop'
import CropType from './enums/crops'
import Bonus from './enums/bonus'
import CropCode from './enums/cropCode'
import CropSize from './enums/crop-size'

const TOMATO = new Crop(
CropType.Tomato,
Bonus.WaterRetain,
CropSize.Single,
'/crops/tomato.webp',
// Base Values
{
base: 2,
growthTime: 4,
isReharvestable: true,
reharvestCooldown: 2,
reharvestLimit: 3,
},

// Gold Values
{
crop: 23,
cropStar: 34,
seed: 40,
seedStar: 60,
hasPreserve: true,
preserve: 34,
preserveStar: 51,
},

// Conversion Info
{
cropsPerSeed: 3,
seedsPerConversion: 2,
cropsPerPreserve: 1,
seedProcessMinutes: 30,
preserveProcessMinutes: 27,
},
{
preserve: '/jars/tomato.webp',
seed: '/seeds/tomato.webp',
},
{
cropCode: CropCode.Tomato,
cropTooltip: 'Tomato: Water Retention',
cropBackgroundColor: 'bg-water-retain/20',
},
)

const POTATO = new Crop(
CropType.Potato,
Bonus.WaterRetain,
CropSize.Single,
'/crops/potato.webp',
{
base: 2,
growthTime: 5,
},
{
crop: 45,
cropStar: 67,
seed: 20,
seedStar: 30,
hasPreserve: true,
preserve: 68,
preserveStar: 102,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 84,
preserveProcessMinutes: 54,
},
{
preserve: '/jars/potato.webp',
seed: '/seeds/potato.webp',
},
{
cropCode: CropCode.Potato,
cropTooltip: 'Potato: Water Retention',
cropBackgroundColor: 'bg-water-retain/20',
},
)

const RICE = new Crop(
CropType.Rice,
Bonus.HarvestIncrease,
CropSize.Single,
'/crops/rice.webp',
{
base: 2,
growthTime: 3,
isReharvestable: true,
},
{
crop: 27,
cropStar: 40,
seed: 11,
seedStar: 16,
hasPreserve: false,
preserve: 0,
preserveStar: 0,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 0,
seedProcessMinutes: 42,
preserveProcessMinutes: 0,
},
{
preserve: '',
seed: '/seeds/rice.webp',
},
{
cropCode: CropCode.Rice,
cropTooltip: 'Rice: Harvest Increase',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const WHEAT = new Crop(
CropType.Wheat,
Bonus.HarvestIncrease,
CropSize.Single,
'/crops/wheat.webp',
{
base: 2,
growthTime: 4,
},
{
crop: 33,
cropStar: 49,
seed: 12,
seedStar: 18,
hasPreserve: false,
preserve: 0,
preserveStar: 0,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 0,
seedProcessMinutes: 42,
preserveProcessMinutes: 0,
},
{
preserve: '',
seed: '/seeds/wheat.webp',
},
{
cropCode: CropCode.Wheat,
cropTooltip: 'Wheat: Harvest Increase',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const CARROT = new Crop(
CropType.Carrot,
Bonus.WeedPrevention,
CropSize.Single,
'/crops/carrot.webp',
{
base: 2,
growthTime: 3,
},
{
crop: 23,
cropStar: 34,
seed: 7,
seedStar: 10,
hasPreserve: true,
preserve: 34,
preserveStar: 51,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 18,
preserveProcessMinutes: 27,
},
{
preserve: '/jars/carrot.webp',
seed: '/seeds/carrot.webp',
},
{
cropCode: CropCode.Carrot,
cropTooltip: 'Carrot: Weed Prevention',
cropBackgroundColor: 'bg-weed-prevention/20',
},
)

const ONION = new Crop(
CropType.Onion,
Bonus.WeedPrevention,
CropSize.Single,
'/crops/onion.webp',
{
base: 2,
growthTime: 4,
},
{
crop: 30,
cropStar: 45,
seed: 10,
seedStar: 15,
hasPreserve: true,
preserve: 45,
preserveStar: 67,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 24,
preserveProcessMinutes: 36,
},
{
preserve: '/jars/onion.webp',
seed: '/seeds/onion.webp',
},
{
cropCode: CropCode.Onion,
cropTooltip: 'Onion: Weed Prevention',
cropBackgroundColor: 'bg-weed-prevention/20',
},
)

const COTTON = new Crop(
CropType.Cotton,
Bonus.QualityIncrease,
CropSize.Single,
'/crops/cotton.webp',
{
base: 2,
growthTime: 5,
},
{
crop: 45,
cropStar: 67,
seed: 20,
seedStar: 30,
hasPreserve: false,
preserve: 0,
preserveStar: 0,
},
{
cropsPerSeed: 1,
seedsPerConversion: 3,
cropsPerPreserve: 0,
seedProcessMinutes: 36,
preserveProcessMinutes: 0,
},
{
preserve: '',
seed: '/seeds/cotton.webp',
},
{
cropCode: CropCode.Cotton,
cropTooltip: 'Cotton: Quality Increase',
cropBackgroundColor: 'bg-quality-increase/20',
},
)

const BLUEBERRY = new Crop(
CropType.Blueberry,
Bonus.HarvestIncrease,
CropSize.Bush,
'/crops/blueberry.webp',
{
base: 6,
growthTime: 9,
isReharvestable: true,
reharvestCooldown: 3,
reharvestLimit: 3,
},
{
crop: 39,
cropStar: 58,
seed: 112,
seedStar: 168,
hasPreserve: true,
preserve: 59,
preserveStar: 88,
},
{
cropsPerSeed: 4,
seedsPerConversion: 2,
cropsPerPreserve: 1,
seedProcessMinutes: 81,
preserveProcessMinutes: 47.25,
},
{
preserve: '/jars/blueberry.webp',
seed: '/seeds/blueberry.webp',
},
{
cropCode: CropCode.Blueberry,
cropTooltip: 'Berry Bush: Harvest Increase. 2x2, needs 2 of a bonus for the buff to activate',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const APPLE = new Crop(
CropType.Apple,
Bonus.HarvestIncrease,
CropSize.Tree,
'/crops/apple.webp',
{
base: 16,
growthTime: 12,
isReharvestable: true,
reharvestCooldown: 6,
reharvestLimit: 3,
},
{
crop: 64,
cropStar: 96,
seed: 700,
seedStar: 1050,
hasPreserve: true,
preserve: 96,
preserveStar: 144,
},
{
cropsPerSeed: 10,
seedsPerConversion: 1,
cropsPerPreserve: 1,
seedProcessMinutes: 142,
preserveProcessMinutes: 76,
},
{
preserve: '/jars/apple.webp',
seed: '/seeds/apple.webp',
},
{
cropCode: CropCode.Apple,
cropTooltip: 'Apple Tree: Harvest Increase. 3x3, needs 3 of a bonus for the buff to activate',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const CORN = new Crop(
CropType.Corn,
Bonus.HarvestIncrease,
CropSize.Single,
'/crops/corn.webp',
{
base: 2,
growthTime: 5,
},
{
crop: 40,
cropStar: 60,
seed: 15,
seedStar: 22,
hasPreserve: true,
preserve: 60,
preserveStar: 90,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 48,
preserveProcessMinutes: 48,
},
{
preserve: '/jars/corn.webp',
seed: '/seeds/corn.webp',
},
{
cropCode: CropCode.Corn,
cropTooltip: 'Corn: Harvest Increase',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const SPICY_PEPPER = new Crop(
CropType.SpicyPepper,
Bonus.QualityIncrease,
CropSize.Bush,
'/crops/spicy-pepper.webp',
{
base: 6,
growthTime: 6,
isReharvestable: true,
reharvestCooldown: 3,
reharvestLimit: 3,
},
{
crop: 32,
cropStar: 48,
seed: 85,
seedStar: 127,
hasPreserve: true,
preserve: 48,
preserveStar: 72,
},
{
cropsPerSeed: 4,
seedsPerConversion: 2,
cropsPerPreserve: 1,
seedProcessMinutes: 100,
preserveProcessMinutes: 38.5,
},
{
preserve: '/jars/spicy-pepper.webp',
seed: '/seeds/spicy-pepper.webp',
},
{
cropCode: CropCode.SpicyPepper,
cropTooltip: 'Spicy Pepper: Quality Increase. 2x2, needs 2 of a bonus for the buff to activate',
cropBackgroundColor: 'bg-quality-increase/20',
},
)

const NAPA_CABBAGE = new Crop(
CropType.NapaCabbage,
Bonus.WaterRetain,
CropSize.Single,
'/crops/napa-cabbage.webp',
{
base: 2,
growthTime: 6,
},
{
crop: 40,
cropStar: 60,
seed: 10,
seedStar: 15,
hasPreserve: true,
preserve: 60,
preserveStar: 90,
},
{
cropsPerSeed: 1,
seedsPerConversion: 6,
cropsPerPreserve: 1,
seedProcessMinutes: 48,
preserveProcessMinutes: 48,
},
{
preserve: '/jars/napa-cabbage.webp',
seed: '/seeds/napa-cabbage.webp',
},
{
cropCode: CropCode.NapaCabbage,
cropTooltip: 'Napa Cabbage: Water Retention',
cropBackgroundColor: 'bg-water-retain/20',
},
)

const BOK_CHOY = new Crop(
CropType.BokChoy,
Bonus.WeedPrevention,
CropSize.Single,
'/crops/bok-choy.webp',
{
base: 2,
growthTime: 3,
},
{
crop: 30,
cropStar: 45,
seed: 15,
seedStar: 22,
hasPreserve: true,
preserve: 45,
preserveStar: 67,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 72,
preserveProcessMinutes: 36,
},
{
preserve: '/jars/bok-choy.webp',
seed: '/seeds/bok-choy.webp',
},
{
cropCode: CropCode.BokChoy,
cropTooltip: 'Bok Choy: Weed Prevention',
cropBackgroundColor: 'bg-weed-prevention/20',
},
)

const BATTERFLY_BEAN = new Crop(
CropType.BatterflyBean,
Bonus.HarvestIncrease,
CropSize.Bush,
'/crops/batterfly-bean.webp',
{
base: 6,
growthTime: 6,
isReharvestable: true,
reharvestCooldown: 2,
reharvestLimit: 3,
},
{
crop: 23,
cropStar: 34,
seed: 90,
seedStar: 135,
hasPreserve: true,
preserve: 41,
preserveStar: 61,
},
{
cropsPerSeed: 1,
seedsPerConversion: 1,
cropsPerPreserve: 1,
seedProcessMinutes: 120,
preserveProcessMinutes: 33,
},
{
preserve: '/jars/batterfly-bean.webp',
seed: '/seeds/batterfly-bean.webp',
},
{
cropCode: CropCode.BatterflyBean,
cropTooltip: 'Batterfly Bean',
cropBackgroundColor: 'bg-harvest-boost/20',
},
)

const ROCKHOPPER_PUMPKIN = new Crop(
CropType.RockhopperPumpkin,
Bonus.QualityIncrease,
CropSize.Bush,
'/crops/rockhopper-pumpkin.webp',
{
base: 2,
growthTime: 9,
isReharvestable: true,
reharvestCooldown: 2,
reharvestLimit: 3,
},
{
crop: 88,
cropStar: 132,
seed: 25,
seedStar: 37,  
 hasPreserve: true,
preserve: 101,
preserveStar: 151,
},
{
cropsPerSeed: 1,
seedsPerConversion: 4,
cropsPerPreserve: 1,
seedProcessMinutes: 100,
preserveProcessMinutes: 31.5,
},
{
preserve: '/jars/rockhopper-pumpkin.webp',
seed: '/seeds/rockhopper-pumpkin.webp',
},
{
cropCode: CropCode.RockhopperPumpkin,
cropTooltip: 'Rockhopper Pumpkin',
cropBackgroundColor: 'bg-quality-increase/20',
},
)

const NULLCROP = new Crop(
CropType.None,
Bonus.None,
CropSize.Single,
'',
{
base: 0,
growthTime: 0,
},
{
crop: 0,
cropStar: 0,
seed: 0,
seedStar: 0,
hasPreserve: false,
preserve: 0,
preserveStar: 0,
},
{
cropsPerSeed: 0,
seedsPerConversion: 0,
cropsPerPreserve: 0,
seedProcessMinutes: 0,
preserveProcessMinutes: 0,
},
{
preserve: '',
seed: '',
},
{
cropCode: CropCode.None,
cropTooltip: '',
cropBackgroundColor: '',
},
)

// Helper functions to get crop data from the crop code
const crops = {
[CropType.Tomato]: TOMATO,
[CropType.Potato]: POTATO,
[CropType.Rice]: RICE,
[CropType.Wheat]: WHEAT,
[CropType.Carrot]: CARROT,
[CropType.Onion]: ONION,
[CropType.Cotton]: COTTON,
[CropType.Blueberry]: BLUEBERRY,
[CropType.Apple]: APPLE,
[CropType.Corn]: CORN,
[CropType.SpicyPepper]: SPICY_PEPPER,
[CropType.NapaCabbage]: NAPA_CABBAGE,
[CropType.BokChoy]: BOK_CHOY,
[CropType.RockhopperPumpkin]: ROCKHOPPER_PUMPKIN,
[CropType.BatterflyBean]: BATTERFLY_BEAN,
[CropType.None]: NULLCROP,
} as const

function getCropFromCode(code: CropCode): Crop {
switch (code) {
case CropCode.Tomato:
return crops[CropType.Tomato]
case CropCode.Potato:
return crops[CropType.Potato]
case CropCode.Rice:
return crops[CropType.Rice]
case CropCode.Wheat:
return crops[CropType.Wheat]
case CropCode.Carrot:
return crops[CropType.Carrot]
case CropCode.Onion:
return crops[CropType.Onion]
case CropCode.Cotton:
return crops[CropType.Cotton]
case CropCode.Blueberry:
return crops[CropType.Blueberry]
case CropCode.Apple:
return crops[CropType.Apple]
case CropCode.Corn:
return crops[CropType.Corn]
case CropCode.SpicyPepper:
return crops[CropType.SpicyPepper]
case CropCode.NapaCabbage:
return crops[CropType.NapaCabbage]
case CropCode.BokChoy:
return crops[CropType.BokChoy]
case CropCode.RockhopperPumpkin:
return crops[CropType.RockhopperPumpkin]
case CropCode.BatterflyBean:
return crops[CropType.BatterflyBean]
default:
return crops[CropType.None]
}
}

function getCodeFromCrop(crop: Crop): CropCode {
return crop.cropCode
}

function getCropFromType(type: CropType): Crop | null {
return crops[type]
}

export { getCropFromCode, getCodeFromCrop, getCropFromType }
export default crops

================================================
FILE: assets/scripts/garden-planner/fertiliserList.ts
================================================
import Fertiliser from './classes/fertiliser'
import FertiliserType from './enums/fertiliser'
import FertiliserCode from './enums/fertilisercode'
import Bonus from './enums/bonus'

const fertilisers = {
[FertiliserType.HarvestBoost]: new Fertiliser(
FertiliserType.HarvestBoost,
Bonus.HarvestIncrease,
'/fertilisers/harvest-boost.webp',
),
[FertiliserType.SpeedyGro]: new Fertiliser(
FertiliserType.SpeedyGro,
Bonus.SpeedIncrease,
'/fertilisers/speedy-gro.webp',
),
[FertiliserType.QualityUp]: new Fertiliser(
FertiliserType.QualityUp,
Bonus.QualityIncrease,
'/fertilisers/quality-up.webp',
),
[FertiliserType.HydratePro]: new Fertiliser(
FertiliserType.HydratePro,
Bonus.WaterRetain,
'/fertilisers/hydrate-pro.webp',
),
[FertiliserType.WeedBlock]: new Fertiliser(
FertiliserType.WeedBlock,
Bonus.WeedPrevention,
'/fertilisers/weed-block.webp',
),
[FertiliserType.None]: null,
}

function getFertiliserFromCode(code: FertiliserCode): Fertiliser | null {
switch (code) {
case FertiliserCode.QualityUp:
return fertilisers[FertiliserType.QualityUp]
case FertiliserCode.HarvestBoost:
return fertilisers[FertiliserType.HarvestBoost]
case FertiliserCode.WeedBlock:
return fertilisers[FertiliserType.WeedBlock]
case FertiliserCode.SpeedyGro:
return fertilisers[FertiliserType.SpeedyGro]
case FertiliserCode.HydratePro:
case 'Hp' as FertiliserCode.HydratePro:
return fertilisers[FertiliserType.HydratePro]
default:
return fertilisers[FertiliserType.None]
}
}

function getCodeFromFertiliser(fertiliser: Fertiliser): FertiliserCode {
switch (fertiliser.type) {
case FertiliserType.QualityUp:
return FertiliserCode.QualityUp
case FertiliserType.HarvestBoost:
return FertiliserCode.HarvestBoost
case FertiliserType.WeedBlock:
return FertiliserCode.WeedBlock
case FertiliserType.SpeedyGro:
return FertiliserCode.SpeedyGro
case FertiliserType.HydratePro:
return FertiliserCode.HydratePro
default:
return FertiliserCode.None
}
}

function getFertiliserFromType(type: FertiliserType): Fertiliser | null {
return fertilisers[type]
}

export { getFertiliserFromType, getFertiliserFromCode, getCodeFromFertiliser }
export default fertilisers

# Palia Garden Planner - Backward Compatibility Implementation

## Overview

This document describes the implementation of backward compatibility for save layout codes between the original Vue.js garden planner and the new React implementation. The system supports all save code versions from 0.1 to 0.4, ensuring that users can seamlessly migrate their garden layouts.

## Save Code Format Evolution

### Version 0.1 (Original)

- **Format**: `v0.1_DIM-{dimensions}_CROPS-{crops}`
- **Crop Codes**: Two-character codes (e.g., `Na`, `To`, `Po`)
- **Example**: `v0.1_DIM-111-111-111_CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo`

### Version 0.2

- **Format**: `v0.2_D-{dimensions}_CROPS-{crops}`
- **Crop Codes**: Shortened to single/double character codes (e.g., `N`, `T`, `P`)
- **Fertilizers**: Added support with dot notation (e.g., `T.Hp`)
- **Example**: `v0.2_D-111-111-111_CROPS-NNTNCTCCC-NNNTNCTCC`

### Version 0.3

- **Format**: `v0.3_D-{dimensions}_CR-{crops}_{settings}`
- **Changes**:
  - Crop prefix changed from `CROPS-` to `CR-`
  - Added settings section
  - Updated fertilizer codes (e.g., `Hp` → `Y`)
- **Example**: `v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb_D30NrNssL50Cr0.Bb.S7-BbS6`

### Version 0.4 (Current)

- **Format**: `v0.4_D-{dimensions}_CR-{crops}_{settings}`
- **Changes**:
  - Butterfly Bean code changed from `Bb` to `Bt`
  - Enhanced settings format
- **Example**: `v0.4_D-111-111-111_CR-PBkRTCTRBkP-BkPBkCTCBkRBk_L50Cr0.A.P-SP-BkS`

## Technical Implementation

### Core Components

#### 1. Save Handler (`apps/web/lib/garden-planner/save-handler.ts`)

The save handler provides the core backward compatibility functionality:

```typescript
// Main parsing function
export function parseSave(save: string): ParseSaveResult;

// Individual conversion functions
export function convertV0_1CodestoV0_2(save: string): string;
export function convertV_0_2Codesto_V_0_3(save: string): string;
export function convertV_0_3Codesto_V_0_4(save: string): string;
export function convertV_0_3SettingsToV_0_4Settings(settings: string): string;
```

**Key Features:**

- Iterative conversion from any version to v0.4
- Validation of dimension matrices
- Error handling for malformed codes
- Support for settings migration

#### 2. Garden Class Integration (`apps/web/lib/garden-planner/classes/garden.ts`)

The Garden class now includes methods to load and save layouts:

```typescript
class Garden {
  // Load from any version save code
  loadLayout(saveCode: string): boolean;

  // Save to v0.4 format
  saveLayout(settingsCode?: string): string;

  // Alias for Vue.js compatibility
  loadFromVueSave(saveCode: string): boolean;
}
```

#### 3. Store Integration (`apps/web/stores/useGarden.ts`)

The garden store provides import functionality:

```typescript
interface GardenState {
  importFromVueSaveCode: (saveCode: string) => boolean;
}
```

#### 4. UI Components

**Import Modal** (`apps/web/components/import-modal.tsx`):

- Detects Vue.js save codes automatically
- Shows format validation
- Supports both JSON and save code formats

**Load Modal** (`apps/web/components/load-modal.tsx`):

- Manages saved gardens
- Supports loading from browser storage

## Crop Code Mappings

### Version Evolution

| Crop            | v0.1 | v0.2 | v0.3 | v0.4   |
| --------------- | ---- | ---- | ---- | ------ |
| None            | Na   | N    | N    | N      |
| Tomato          | To   | T    | T    | T      |
| Potato          | Po   | P    | P    | P      |
| Rice            | Ri   | R    | R    | R      |
| Wheat           | Wh   | W    | W    | W      |
| Carrot          | Ca   | C    | C    | C      |
| Onion           | On   | O    | O    | O      |
| Cotton          | Co   | Co   | Co   | Co     |
| Blueberry       | Bl   | B    | B    | B      |
| Apple           | Ap   | A    | A    | A      |
| Corn            | Cr   | Cr   | Cr   | Cr     |
| Spicy Pepper    | Sp   | S    | S    | S      |
| Napa Cabbage    | Nc   | Cb   | Cb   | Cb     |
| Bok Choy        | Bc   | Bk   | Bk   | Bk     |
| Rockhop Pumpkin | Rp   | Pm   | Pm   | Pm     |
| Butterfly Bean  | Bb   | Bb   | Bb   | **Bt** |

### Fertilizer Code Mappings

| Fertilizer    | v0.2   | v0.3  | v0.4 |
| ------------- | ------ | ----- | ---- |
| None          | N      | N     | N    |
| Speedy Gro    | S      | S     | S    |
| Quality Up    | Q      | Q     | Q    |
| Weed Block    | W      | W     | W    |
| Harvest Boost | H      | H     | H    |
| Hydrate Pro   | **Hp** | **Y** | Y    |

## Conversion Process

### Automatic Migration Flow

1. **Version Detection**: Parse version from save code prefix
2. **Iterative Conversion**: Apply conversions sequentially until v0.4
3. **Validation**: Validate dimension matrix and crop codes
4. **Garden Loading**: Create new garden instance with converted data

```typescript
// Example conversion flow
v0.1 → convertV0_1CodestoV0_2() → v0.2
v0.2 → convertV_0_2Codesto_V_0_3() → v0.3
v0.3 → convertV_0_3Codesto_V_0_4() → v0.4
```

### Error Handling

- **Invalid Versions**: Throws error for unsupported versions
- **Malformed Codes**: Graceful handling with detailed error messages
- **Dimension Validation**: Ensures consistent plot matrix format
- **Crop Code Validation**: Validates crop and fertilizer codes

## Usage Examples

### Importing Vue.js Save Code

```typescript
import { useGarden } from "@/stores";

const { importFromVueSaveCode } = useGarden();

// Import any version save code
const success = importFromVueSaveCode("v0.3_D-111-111-111_CR-BbBbBb...");
```

### Manual Conversion

```typescript
import { parseSave } from "@/lib/garden-planner/save-handler";

const oldSave = "v0.1_DIM-111-111-111_CROPS-NaNaTo...";
const { version, dimensionInfo, cropInfo, settingsInfo } = parseSave(oldSave);
// Result: version = '0.4', with converted data
```

### Garden Loading

```typescript
import { Garden } from "@/lib/garden-planner/classes";

const garden = new Garden();
const success = garden.loadLayout("v0.3_D-111-111-111_CR-...");
```

## Testing

### Comprehensive Test Suite (`apps/web/lib/garden-planner/save-handler.test.ts`)

The test suite covers:

- **Full Save Conversion**: End-to-end conversion testing
- **Individual Functions**: Unit tests for each conversion function
- **Settings Migration**: Settings format conversion
- **Error Handling**: Invalid input handling
- **Edge Cases**: Minimal saves, empty sections, malformed data

### Test Examples

```typescript
// Test v0.3 to v0.4 conversion
it("should convert Butterfly Beans from Bb to Bt", () => {
  const v0_3Save = "v0.3_D-111-111-111_CR-BbBbBb...";
  const result = parseSave(v0_3Save);
  expect(result.cropInfo).toContain("BtBtBt");
});

// Test backward compatibility
it("should handle all versions", () => {
  const versions = ["v0.1", "v0.2", "v0.3", "v0.4"];
  versions.forEach((version) => {
    const save = `${version}_D-111_CR-N`;
    const result = parseSave(save);
    expect(result.version).toBe("0.4");
  });
});
```

## Migration Guide

### For Users

1. **Export from Vue.js App**: Copy save code from Vue.js garden planner
2. **Import to React App**: Use Import Modal or paste directly
3. **Automatic Conversion**: System handles version conversion automatically
4. **Verify Layout**: Check that crops and fertilizers are correctly placed

### For Developers

1. **Integration**: Import save handler functions
2. **Error Handling**: Implement proper error handling for failed conversions
3. **UI Updates**: Update import/export interfaces to support save codes
4. **Testing**: Add tests for specific use cases

## Performance Considerations

- **Lazy Loading**: Save handler is only loaded when needed
- **Efficient Parsing**: Regex-based parsing for optimal performance
- **Memory Management**: Minimal memory footprint for conversions
- **Error Recovery**: Graceful degradation for partial failures

## Future Enhancements

### Planned Features

1. **Bulk Import**: Support for importing multiple save codes
2. **Format Detection**: Automatic format detection without version prefix
3. **Export Options**: Export to different version formats
4. **Validation Tools**: Enhanced validation with detailed feedback

### Extensibility

The system is designed to be easily extensible:

- **New Versions**: Add new conversion functions for future versions
- **Custom Formats**: Support for custom save formats
- **Plugin System**: Modular conversion plugins
- **API Integration**: REST API for conversion services

## Troubleshooting

### Common Issues

1. **Invalid Save Code**: Check format and version prefix
2. **Conversion Failures**: Verify crop and fertilizer codes
3. **Dimension Errors**: Ensure plot matrix is valid (0s and 1s only)
4. **Settings Migration**: Check settings format for v0.3+ saves

### Debug Tools

```typescript
// Enable debug logging
console.log("Parsing save code...", save);
const result = parseSave(save);
console.log("Conversion result:", result);
```

## Conclusion

The backward compatibility implementation ensures seamless migration from the Vue.js garden planner to the React implementation. With support for all versions (0.1-0.4), comprehensive testing, and robust error handling, users can confidently migrate their garden layouts without data loss.

The modular design allows for easy maintenance and future enhancements while maintaining high performance and reliability.

================================================
FILE: assets/scripts/garden-planner/imports.ts
================================================
// File acts as a central import file for all classes and enums

import Crop from './classes/crop'
import CropType from './enums/crops'
import Plot from './classes/plot'
import Tile from './classes/tile'
import Direction from './enums/direction'
import Bonus from './enums/bonus'
import CropCode from './enums/cropCode'
import crops, { getCodeFromCrop, getCropFromCode, getCropFromType } from './cropList'
import Garden from './classes/garden'
import Fertiliser from './classes/fertiliser'
import FertiliserType from './enums/fertiliser'
import fertilisers, { getCodeFromFertiliser, getFertiliserFromCode, getFertiliserFromType } from './fertiliserList'
import type { ICalculateValueResult, ISimulateYieldResult } from './utils/garden-helpers'

import type { PlotStat } from './types/plotStat'

export {
Crop,
Plot,
Tile,
Direction,
Bonus,
CropType,
CropCode,
crops,
getCropFromCode,
getCodeFromCrop,
getCropFromType,
Garden,
Fertiliser,
FertiliserType,
fertilisers,
getFertiliserFromType,
getCodeFromFertiliser,
getFertiliserFromCode,
type ICalculateValueResult,
type ISimulateYieldResult,
}
export type { PlotStat }

================================================
FILE: assets/scripts/garden-planner/save-handler.spec.ts
================================================
import { describe, it, expect } from 'vitest'
import { convertV_0_1_to_V_0_2, convertV_0_2Codesto_V_0_3, convertV_0_3Codesto_V_0_4, convertV_0_3SettingsToV_0_4Settings, parseSave } from './save-handler'

describe('Save Handler', () => {
// sample 1 : 0.1 v0.1_DIM-111-111-111_CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo-ToNaNaCoToNaCoCoTo-ToBlBlToBlBlNaToCo-ApApApApApApApApAp-BlBlToBlBlToCoToNa-NaNaToWhNaNaRiWhNa-CoCoCoToCoToNaToNa-ToNaNaNaNaPoNaPoOn
// sample 2 : v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN_D30NrNssL50Cr0.Bb.S7-BbS6

describe('Full save code conversion', () => {
it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 1 - Batterfly Beans is converted)', () => {
const v0_3Save = 'v0.3_D-111-111-111_CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN_D30NrNssL50Cr0.Bb.S7-BbS6'
const expectedDimensionInfo = 'D-111-111-111'
const expectedCropsInfo = 'CR-BtBtBtBtBtBtBtBtBt-BtNBtBtNBtBtBtBt-BtBtBtBtBtBtBtBtN-BtBtBtBtBtBtBtBtBt-BtBtBtBtBtBtBtBtBt-BtBtNBtBtNBtBtN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
const expectedSettingsInfo = 'D30NrNssL50Cr0.Bt.S7-BtS6'

      const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

      expect(version).toBe('0.4')
      expect(dimensionInfo).toBe(expectedDimensionInfo)
      expect(cropInfo).toBe(expectedCropsInfo)
      expect(settingsInfo).toBe(expectedSettingsInfo)
    })

    it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 2 - No changes except for version expected)', () => {
      const v0_3Save = 'v0.3_D-111-111-111_CR-Cb.HP.HO.HBk.HSSO.HSS-BkCbPAAAAAA-OBkCb.HBBPBBO-PCbBkCrWOBkCbP-AAACrCb.YBkAAA-PCbBkOWCrBkCbP-OBBPBBCb.HBkO-AAAAAAPCbBk-SSO.HSSBk.HO.HP.HCb.H_D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'
      const expectedDimensionInfo = 'D-111-111-111'
      const expectedCropsInfo = 'CR-Cb.HP.HO.HBk.HSSO.HSS-BkCbPAAAAAA-OBkCb.HBBPBBO-PCbBkCrWOBkCbP-AAACrCb.YBkAAA-PCbBkOWCrBkCbP-OBBPBBCb.HBkO-AAAAAAPCbBk-SSO.HSSBk.HO.HP.HCb.H'
      const expectedSettingsInfo = 'D30L25Cr0.BkS-OP-WS-PS-CrP-CbP-SP-BP-AP'

      const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

      expect(version).toBe('0.4')
      expect(dimensionInfo).toBe(expectedDimensionInfo)
      expect(cropInfo).toBe(expectedCropsInfo)
      expect(settingsInfo).toBe(expectedSettingsInfo)
    })

    it('should fully convert a 0.3 save to 0.4 save in the expected format (Test 3 - Batterfly and Blueberries Mixed)', () => {
      const v0_3Save = 'v0.3_D-111-111-111_CR-BbBbBBbBbBBBB-BBbBbBBbBbBBB-BbBbNBbBbNBbBbN-BBBBBBBBB-BBBBBbBbBBbBb-BbBbNNNNNNN-BbBbBbBbBbBbNNN-BbBBBbBBNNN-NNNNNNNNN_Cr0.Bb.S3-BbS5-B.S4-BS7'
      const expectedDimensionInfo = 'D-111-111-111'
      const expectedCropsInfo = 'CR-BtBtBBtBtBBBB-BBtBtBBtBtBBB-BtBtNBtBtNBtBtN-BBBBBBBBB-BBBBBtBtBBtBt-BtBtNNNNNNN-BtBtBtBtBtBtNNN-BtBBBtBBNNN-NNNNNNNNN'
      const expectedSettingsInfo = 'Cr0.Bt.S3-BtS5-B.S4-BS7'

      const { dimensionInfo, version, cropInfo, settingsInfo } = parseSave(v0_3Save)

      expect(version).toBe('0.4')
      expect(dimensionInfo).toBe(expectedDimensionInfo)
      expect(cropInfo).toBe(expectedCropsInfo)
      expect(settingsInfo).toBe(expectedSettingsInfo)
    })

})

describe('Crop Setting Conversion Functions', () => {
it('should convert v0.3 settings to v0.4 settings (no harvest settings)', () => {
const v0_3Settings = 'Cr0.Bb.S7-BbS6'
const expectedV0_4Settings = 'Cr0.Bt.S7-BtS6'
expect(convertV_0_3SettingsToV_0_4Settings(v0_3Settings)).toBe(expectedV0_4Settings)
})

    it('should convert v0.3 settings to v0.4 settings (no processor settings)', () => {
      const v0_3Settings = 'D30NrNssL50'
      const expectedV0_4Settings = 'D30NrNssL50'
      expect(convertV_0_3SettingsToV_0_4Settings(v0_3Settings)).toBe(expectedV0_4Settings)
    })

    it('should convert v0.3 settings to v0.4 settings', () => {
      const v0_3Settings = 'D30NrNssL50Cr0.Bb.S7-BbS6'
      const expectedV0_4Settings = 'D30NrNssL50Cr0.Bt.S7-BtS6'
      expect(convertV_0_3SettingsToV_0_4Settings(v0_3Settings)).toBe(expectedV0_4Settings)
    })

})

describe('Crop Codes Conversion', () => {
it('should convert v0.1 crop codes to v0.2', () => {
const v0_1Save = 'CROPS-NaNaToNaToCoToCoCo-NaNaNaToNaToCoToCo-ToNaNaCoToNaCoCoTo-ToBlBlToBlBlNaToCo-ApApApApApApApApAp-BlBlToBlBlToCoToNa-NaNaToWhNaNaRiWhNa-CoCoCoToCoToNaToNa-ToNaNaNaNaPoNaPoOn'
const expectedV0_2Save = 'CROPS-NNTNTCrTCrCr-NNNTNTCrTCr-TNNCrTNCrCrT-TBBTBBNTCr-AAAAAAAAA-BBTBBTCrTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
expect(convertV_0_1_to_V_0_2(v0_1Save)).toBe(expectedV0_2Save)
})

    it('should convert v0.2 codes to v0.3', () => {
      const v0_2Save = 'CROPS-NNTNTCrTCrCr-NNNTNTCTCr-TNNCrTNCrCrT-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      const expectedV0_3Save = 'CR-NNTNTCrTCrCr-NNNTNTCTCr-TNNCrTNCrCrT-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      expect(convertV_0_2Codesto_V_0_3(v0_2Save)).toBe(expectedV0_3Save)
    })

    it('should convert v0.2 codes to v0.3 (with Fert)', () => {
      const v0_2Save = 'CROPS-NN.HpTNTCrTCrCr-NNNTNTCTCr.Hp-TNN.HpCrTNCrCrT.Hp-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      const expectedV0_3Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNN.YCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      expect(convertV_0_2Codesto_V_0_3(v0_2Save)).toBe(expectedV0_3Save)
    })

    it('should convert v0.3 codes to v0.4', () => {
      const v0_3Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNNCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      const expectedV0_4Save = 'CR-NN.YTNTCrTCrCr-NNNTNTCTCr.Y-TNNCrTNCrCrT.Y-TBBTBBNTCr-AAAAAAAAA-BBTBBTCTN-NNTWNNRWN-CrCrCrTCrTNTN-TNNNNPNPO'
      expect(convertV_0_3Codesto_V_0_4(v0_3Save)).toBe(expectedV0_4Save)
    })


    it('should convert v0.3 codes to v0.4 (Batterfly Beans Focus)', () => {
      const v0_3Save = 'CR-BbBbBbBbBbBbBbBbBb-BbNBbBbNBbBbBbBb-BbBbBbBbBbBbBbBbN-BbBbBbBbBbBbBbBbBb-BbBbBbBbBbBbBbBbBb-BbBbNBbBbNBbBbN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
      const expectedV0_4Save = 'CR-BtBtBtBtBtBtBtBtBt-BtNBtBtNBtBtBtBt-BtBtBtBtBtBtBtBtN-BtBtBtBtBtBtBtBtBt-BtBtBtBtBtBtBtBtBt-BtBtNBtBtNBtBtN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN'
      expect(convertV_0_3Codesto_V_0_4(v0_3Save)).toBe(expectedV0_4Save)
    })

})
})

================================================
FILE: assets/scripts/garden-planner/save-handler.ts
================================================
/\*\*

- File contains methods for converting saves to the latest version
  \*/

import CropCode from './enums/cropCode'
import type { IHarvesterOptions } from './classes/harvester'
import type { ProcessorSetting, ProcessorSettings } from './classes/processor'
import { parseCropId, type ICropNameWithGrowthDiff, encodeCropId, ItemType } from './utils/garden-helpers'
import { Crop, getCropFromCode } from './imports'
import FertiliserCode from './enums/fertilisercode'

/\*\*

- Gets the latest set of cropCodes, to be overriden by past iterations
- - This allows us to not have to update the whole thing everytime there's a new crop
    \*/
    function getCropCodes() {
    return Object.fromEntries(
    Object.values(CropCode).map((cropCode) => [cropCode, cropCode])
    ) as { [key in CropCode]: string }
    }

function getFertiliserCodes() {
return Object.fromEntries(
Object.values(FertiliserCode).map((cropCode) => [cropCode, cropCode])
) as { [key in FertiliserCode]: string }
}

const v0_1CropCodes: { [key in CropCode]: string } = {
...getCropCodes(),
[CropCode.None]: 'Na',
[CropCode.Tomato]: 'To',
[CropCode.Potato]: 'Po',
[CropCode.Rice]: 'Ri',
[CropCode.Wheat]: 'Wh',
[CropCode.Carrot]: 'Ca',
[CropCode.Onion]: 'On',
[CropCode.Cotton]: 'Co',
[CropCode.Blueberry]: 'Bl',
[CropCode.Apple]: 'Ap',
[CropCode.Corn]: 'Co',
}

const v0_2CropCodes: { [key in CropCode]: string } = {
...getCropCodes(),
[CropCode.None]: 'N',
[CropCode.Tomato]: 'T',
[CropCode.Potato]: 'P',
[CropCode.Rice]: 'R',
[CropCode.Wheat]: 'W',
[CropCode.Carrot]: 'C',
[CropCode.Onion]: 'O',
[CropCode.Cotton]: 'Co',
[CropCode.Blueberry]: 'B',
[CropCode.Apple]: 'A',
[CropCode.Corn]: 'Cr',
[CropCode.SpicyPepper]: 'Sp',
[CropCode.NapaCabbage]: 'Cb',
[CropCode.BokChoy]: 'Bk',
}

const v0_2FertCodes: { [key in FertiliserCode]: string } = {
...getFertiliserCodes(),
[FertiliserCode.None]: 'N',
[FertiliserCode.SpeedyGro]: 'S',
[FertiliserCode.QualityUp]: 'Q',
[FertiliserCode.WeedBlock]: 'W',
[FertiliserCode.HarvestBoost]: 'H',
[FertiliserCode.HydratePro]: 'Hp',
}

const v0_3CropCodes: { [key in CropCode]: string } = {
...getCropCodes(),
[CropCode.None]: 'N',
[CropCode.Tomato]: 'T',
[CropCode.Potato]: 'P',
[CropCode.Rice]: 'R',
[CropCode.Wheat]: 'W',
[CropCode.Carrot]: 'C',
[CropCode.Onion]: 'O',
[CropCode.Cotton]: 'Co',
[CropCode.Blueberry]: 'B',
[CropCode.Apple]: 'A',
[CropCode.Corn]: 'Cr',
[CropCode.SpicyPepper]: 'S',
[CropCode.NapaCabbage]: 'Cb',
[CropCode.BokChoy]: 'Bk',
[CropCode.RockhopperPumpkin]: 'Pm',
[CropCode.BatterflyBean]: 'Bb'
}

const v0_3FertCodes: { [key in FertiliserCode]: string } = {
...getFertiliserCodes(),
[FertiliserCode.None]: 'N',
[FertiliserCode.SpeedyGro]: 'S',
[FertiliserCode.QualityUp]: 'Q',
[FertiliserCode.WeedBlock]: 'W',
[FertiliserCode.HarvestBoost]: 'H',
[FertiliserCode.HydratePro]: 'Y',
}

const v0_4CropCodes: { [key in CropCode]: string } = {
...getCropCodes(),
[CropCode.None]: 'N',
[CropCode.Tomato]: 'T',
[CropCode.Potato]: 'P',
[CropCode.Rice]: 'R',
[CropCode.Wheat]: 'W',
[CropCode.Carrot]: 'C',
[CropCode.Onion]: 'O',
[CropCode.Cotton]: 'Co',
[CropCode.Blueberry]: 'B',
[CropCode.Apple]: 'A',
[CropCode.Corn]: 'Cr',
[CropCode.SpicyPepper]: 'S',
[CropCode.NapaCabbage]: 'Cb',
[CropCode.BokChoy]: 'Bk',
[CropCode.RockhopperPumpkin]: 'Pm',
[CropCode.BatterflyBean]: 'Bt'
}

function getCropCode(codeList: typeof v0_2CropCodes, codeToFind: string) {
return Object.keys(codeList).find(key => (codeList[key as CropCode] as string) === codeToFind);
}
function getFertCode(codeList: typeof v0_2FertCodes, codeToFind: string) {
return Object.keys(codeList).find(key => (codeList[key as FertiliserCode] as string) === codeToFind);
}

export function convertV0_1CodestoV0_2(save: string): string {
let newSave = save.replace("CROPS-", "");
for (const [key, value] of Object.entries(v0_1CropCodes))
newSave = newSave.replaceAll(value, v0_2CropCodes[key as CropCode])

return `CROPS-${newSave}`
}

export function convertV_0_2Codesto_V_0_3(save: string) {

// Remove the "CROPS-" prefix
const cropSection = save.replace("CROPS-", "");

const cropSections = cropSection.split('-')

// Regex to capture crop and optional fertiliser
const regex = /([A-Z][a-z]?)(?:\.([A-Z][a-z]?))?/g;

let match: RegExpExecArray | null;

let newCode = ''

for (let i = 0; i < cropSections.length; i++) {
let newSection = ''

    while ((match = regex.exec(cropSections[i])) !== null) {
      const crop = v0_3CropCodes[(getCropCode(v0_2CropCodes, match[1]) ?? CropCode.None) as CropCode];
      const fertiliser = v0_3FertCodes[(getFertCode(v0_2FertCodes, match[2]) ?? FertiliserCode.None) as FertiliserCode];

      newSection += `${crop}${(fertiliser && fertiliser !== FertiliserCode.None) ? '.' + fertiliser : ''}`;
    }

    if (i < cropSections.length - 1) {
      newSection += '-'
    }
    newCode += newSection

}

return `CR-${newCode}`
}

export function convertV_0_3Codesto_V_0_4(save: string) {
// Remove the prefix
const cropSections = save.split('-');
if (["CR", "CROPS"].includes(cropSections[0])) cropSections.shift();

// Regex to capture crop and optional fertiliser
const regex = /([A-Z][a-z]?)(?:\.([A-Z][a-z]?))?/g;

let match: RegExpExecArray | null;

let newCode = ''

for (let i = 0; i < cropSections.length; i++) {
let newSection = ''

    while ((match = regex.exec(cropSections[i])) !== null) {
      const crop = v0_4CropCodes[(getCropCode(v0_3CropCodes, match[1]) ?? CropCode.None) as CropCode];
      const fertiliser = match[2] as FertiliserCode ?? FertiliserCode.None;

      newSection += `${crop}${(fertiliser && fertiliser !== FertiliserCode.None) ? '.' + fertiliser : ''}`;
    }

    if (i < cropSections.length - 1) {
      newSection += '-'
    }
    newCode += newSection

}

// console.log(newCode)
return `CR-${newCode}`
}

export function convertV_0_3SettingsToV_0_4Settings(settings: string): string {
if (!settings)
return ''

const settingsSplit = settings.split('Cr0')

let convertedCropSettings = ''
let convertedSettings = ''

for (let setting of settingsSplit) {
if (setting.startsWith('.')) {
setting = setting.slice(1)

      const cropSettings = setting.split('-')
      for (const cropSetting of cropSettings) {

        if (cropSetting.length === 0) continue

        const codeMatch = cropSetting.match(/^([A-Z][a-z]?)(\.?)(~?)([PS]?)(\d*)/);


        if (!codeMatch) {
          throw new Error(`Invalid crop setting format: ${cropSetting}`)
        }

        const code = codeMatch[1] as CropCode
        const isStar = codeMatch[2] !== '.'
        const hasGrowthBoost = codeMatch[3] === '~'
        const processAs = codeMatch[4] === 'P' ? ItemType.Preserve : codeMatch[4] === 'S' ? ItemType.Seed : ItemType.Crop
        const crafters = codeMatch[5] ? parseInt(codeMatch[5], 10) : 1


        const cropConverted = v0_4CropCodes[(getCropCode(v0_3CropCodes, code) ?? CropCode.None) as CropCode];
        const newCode = `${cropConverted}${isStar ? '' : '.'}${hasGrowthBoost ? '~' : ''}${processAs === ItemType.Preserve ? 'P' : processAs === ItemType.Seed ? 'S' : ''}${crafters > 1 ? crafters : ''}`

        convertedCropSettings += `${newCode}-`
      }
    } else {
      convertedSettings = setting
    }

}

if (convertedCropSettings.length > 0) {
// remove the trailing dash

    convertedCropSettings = `Cr0.${convertedCropSettings.substring(0, convertedCropSettings.length - 1)}`
    // console.log('convertedCropSettings:', convertedCropSettings)

}

return `${convertedSettings}${convertedCropSettings}`
}

/\*\*

- Converts a save string to an object containing the save version, dimension info, and crop info of the latest version
- @param save a save code for the garden planner
  \*/
  export function parseSave(save: string) {
  const LATEST_VERSION = '0.4';

// console.log('Parsing save code...', save);

// \* This format makes it permanent that the first part of the save is the version number
const [version, ...rest] = save.split('\_')
let dimensionInfo = rest[0] || ''
let cropInfo = rest[1] || ''
let settingsInfo = rest[2] || ''
let strippedVersion = version.replace('v', '');

// Update the save version iteratively based on the version number
do {
if (strippedVersion === '') {
break
}

    switch (strippedVersion) {
      case '0.1':
        validatePlotMatrix(dimensionInfo)
        cropInfo = convertV0_1CodestoV0_2(cropInfo)
        strippedVersion = '0.2'
        // console.log('0.1 -> 0.2', cropInfo)
        break
      case '0.2':
        validatePlotMatrix(dimensionInfo)
        cropInfo = convertV_0_2Codesto_V_0_3(cropInfo)
        strippedVersion = '0.3'
        // console.log('0.2 -> 0.3', cropInfo)
        break
      case '0.3':
        validatePlotMatrix(dimensionInfo)
        cropInfo = convertV_0_3Codesto_V_0_4(cropInfo)
        settingsInfo = convertV_0_3SettingsToV_0_4Settings(settingsInfo)
        strippedVersion = '0.4'
        // console.log('0.3 -> 0.4', cropInfo, settingsInfo)
        break
      case '0.4':
        validatePlotMatrix(dimensionInfo)
        cropInfo = cropInfo
        settingsInfo = settingsInfo
        // console.log('0.4 -> Final')
        break
      default:
        throw new Error('Invalid save version')
    }

} while (strippedVersion !== LATEST_VERSION)

// console.log('Final stripped version:', strippedVersion)
// console.log('Final dimensionInfo:', dimensionInfo)
// console.log('Final cropInfo:', cropInfo)
// console.log('Final settingsInfo:', settingsInfo)

return { version: strippedVersion, dimensionInfo, cropInfo, settingsInfo }
}

/\*\*

- Validates dimension info for pre-rewrite saves
- @param dimensionInfo a string containing a 2d array of 0s and 1s (e.g. 111-010-111)
- @throws Error if the dimension info is invalid
  \*/
  function validatePlotMatrix(dimensionInfo: string) {
  const dimensions = dimensionInfo.split('-').splice(1)
  const rowSize = dimensions.length
  const colSize = dimensions[0].length

// Dimension info must be 0 or 1
for (let i = 0; i < rowSize; i++) {
for (let j = 0; j < colSize; j++) {
if (dimensions[i][j] !== '0' && dimensions[i][j] !== '1')
throw new Error('Invalid dimension info')
}
}

// \* Removed to allow illegal plot counts
// // Count the number of active plots
// const maxPlots = 9
// const activePlots = dimensions.flat().map((row) => {
// return row.split('').filter(col => col === '1').length
// }).reduce((acc, curr) => acc + curr)

// if (activePlots > maxPlots)
// throw new Error(`Too many active plots: ${activePlots} > ${maxPlots}`)
}

function encodeSettings(harvesterOptions: IHarvesterOptions, processorSettings: ProcessorSettings): string {
let settings = ''

if (harvesterOptions.days !== -1)
settings += `D${harvesterOptions.days}`

if (!harvesterOptions.includeReplant)
settings += 'Nr'

if (!harvesterOptions.includeReplantCost)
settings += 'Nrc'

if (harvesterOptions.useGrowthBoost)
settings += 'Gb'

if (!harvesterOptions.useStarSeeds)
settings += 'Nss'

if (processorSettings.goldAverageSetting === 'growthTick')
settings += 'Gt'

if (harvesterOptions.level !== 0)
settings += `L${harvesterOptions.level}`

let cropSettings = ''

for (const [cropId, setting] of processorSettings.cropSettings) {
if (setting.processAs === 'crop')
continue

    const cropIdData = parseCropId(cropId)

    // TODO: Convert to cropCode from IGrowthBoost
    cropSettings += cropIdData.code

    // `.` indicates that the crop is not a star seed.
    if (!setting.isStar)
      cropSettings += '.'

    if (cropIdData.hasGrowthBoost)
      cropSettings += '~'

    // P for preserve, S for seed
    cropSettings += `${setting.processAs[0].toUpperCase()}`

    // Number of crafters (default is 1)
    if (setting.crafters !== 1)
      cropSettings += `${setting.crafters}`

    // // Commented out due to not being used
    // if (setting.targetTime !== 0)
    //   settings += `Tt${setting.targetTime}`
    cropSettings += '-'

}

if (cropSettings.length > 0) {
settings += `Cr0.${cropSettings}`
}

// check for trailing underscore or trailing dash
if (settings[settings.length - 1] === '\_' || settings[settings.length - 1] === '-')
return settings.slice(0, -1)

return settings
}
function decodeSettings(settingsInfo: string): { harvesterOptions: IHarvesterOptions, processorSettings: ProcessorSettings } {
const harvesterOptions: IHarvesterOptions = {
days: -1,
includeReplant: true,
includeReplantCost: true,
level: 0,
useGrowthBoost: false,
useStarSeeds: true,
}

const processorSettings: ProcessorSettings = {
cropSettings: new Map(),
crafterSetting: 0,
goldAverageSetting: 'crafterTime'
}

const settings = settingsInfo.split('Cr0')

for (let setting of settings) {
if (setting.startsWith('.')) {
setting = setting.slice(1)

      const cropSettings = setting.split('-')
      for (const cropSetting of cropSettings) {

        if (cropSetting.length === 0) continue

        const codeMatch = cropSetting.match(/^([A-Z][a-z]?)(\.?)(~?)([PS]?)(\d*)/);


        if (!codeMatch) {
          throw new Error(`Invalid crop setting format: ${cropSetting}`)
        }

        const code = codeMatch[1] as CropCode
        const isStar = codeMatch[2] !== '.'
        const hasGrowthBoost = codeMatch[3] === '~'
        const processAs = codeMatch[4] === 'P' ? ItemType.Preserve : codeMatch[4] === 'S' ? ItemType.Seed : ItemType.Crop
        const crafters = codeMatch[5] ? parseInt(codeMatch[5], 10) : 1
        const type = getCropFromCode(code)!.type

        const cropId = encodeCropId({ type, isStar, hasGrowthBoost: hasGrowthBoost })

        const setting: ProcessorSetting = {
          count: 0,
          cropType: type,
          isStar,
          processAs,
          crafters,
          targetTime: 0,
          isActive: true,
          hasPreserve: processAs === 'preserve',
        }

        processorSettings.cropSettings.set(cropId, setting)
      }
    } else {
      const harvesterSettings = (setting.match(/[A-Z][a-z0-9]*/g) as string[]) || []
      const exactHandlers: Record<string, () => void> = {
        'Nr': () => { harvesterOptions.includeReplant = false; },
        'Nrc': () => { harvesterOptions.includeReplantCost = false; },
        'Nss': () => { harvesterOptions.useStarSeeds = false; },
        'Gb': () => { harvesterOptions.useGrowthBoost = true; },
        'Gt': () => { processorSettings.goldAverageSetting = 'growthTick' }
      };

      for (const harvesterSetting of harvesterSettings) {
        if (exactHandlers[harvesterSetting]) {
          exactHandlers[harvesterSetting]();
          continue;
        }

        const match = harvesterSetting.match(/^([A-Z])(\d+)$/);
        if (match) {
          const [, prefix, value] = match;
          const number = parseInt(value);

          switch (prefix) {
            case 'D':
              harvesterOptions.days = number;
              break;
            case 'L':
              harvesterOptions.level = number;
              break;
          }
        }
      }
    }

}

return { harvesterOptions, processorSettings }
}

export { convertV0_1CodestoV0_2 as convertV_0_1_to_V_0_2, encodeSettings, decodeSettings }

================================================
FILE: assets/scripts/garden-planner/classes/crop.ts
================================================
import type Bonus from '../enums/bonus'
import type CropType from '../enums/crops'
import type CropSize from '../enums/crop-size'
import { CropCode } from '../imports'

interface IProduceInfoOptions {
base: number
withBonus?: number
growthTime: number
isReharvestable?: boolean
reharvestCooldown?: number
reharvestLimit?: number
}

interface IProduceInfo extends IProduceInfoOptions {
// NOTE: withBonus is an override, I'm not sure if all crops follow the (1.5x) rule
withBonus: number
isReharvestable: boolean
reharvestCooldown: number
reharvestLimit: number // Amount of times the crop can be reharvested
}

interface IGoldValuesOptions {
crop: number
cropStar: number
seed: number
seedStar: number
preserve: number
preserveStar?: number
hasPreserve: boolean
}

interface IGoldValues extends IGoldValuesOptions {
preserveStar: number
}

export interface ICropConversions {
cropsPerSeed: number
seedsPerConversion: number
cropsPerPreserve: number
seedProcessMinutes: number
preserveProcessMinutes: number
}

interface IProductImages {
preserve: string
seed: string
}

interface ICropMetadata {
cropCode: CropCode
cropTooltip: string
cropBackgroundColor: string
}

class Crop {
private \_produceInfo: IProduceInfo
private \_goldValues: IGoldValues
private \_images: {
preserve: string
seed: string
}

private \_metadata: ICropMetadata

constructor(
public readonly type: CropType,
public readonly cropBonus: Bonus,
public readonly size: CropSize,
public readonly image: string,
produceInfoOptions: IProduceInfoOptions,
goldValuesOptions: IGoldValuesOptions,
public readonly conversionInfo: ICropConversions, // How much of each crop is required to make a seed/preserve
images: IProductImages = {
preserve: '',
seed: '',
},
metadata: ICropMetadata = {
cropCode: CropCode.None,
cropTooltip: 'Remove Crop',
cropBackgroundColor: '',
},
) {
this.\_images = images
this.\_metadata = metadata

    this._produceInfo = {
      ...produceInfoOptions,
      withBonus: produceInfoOptions.withBonus || produceInfoOptions.base * 1.5,
      isReharvestable: produceInfoOptions.isReharvestable || false,
      reharvestCooldown: produceInfoOptions.reharvestCooldown || 0,
      reharvestLimit: produceInfoOptions.reharvestLimit || 0,
    }

    this._goldValues = {
      ...goldValuesOptions,
      preserveStar: goldValuesOptions.preserveStar || goldValuesOptions.preserve * 1.5, // We want to assume the same 1.5x rule if not proivided
    }

}

get produceInfo(): IProduceInfo {
return this.\_produceInfo
}

get goldValues(): IGoldValues {
return this.\_goldValues
}

get cropImage(): string {
return this.image
}

get preserveImage(): string {
return this.\_images.preserve
}

get seedImage(): string {
return this.\_images.seed
}

get cropCode(): CropCode {
return this.\_metadata.cropCode
}

get cropTooltip(): string {
return this.\_metadata.cropTooltip
}

get cropBackgroundColor(): string {
return this.\_metadata.cropBackgroundColor
}

// Assumes player harvests on the day it is harvestable
isHarvestableOnDay(day: number, hasGrowthBoost: boolean = false) {
let { growthTime, reharvestCooldown, reharvestLimit } = this.\_produceInfo

    let newReharvestCooldown = reharvestCooldown

    let leftover = 0
    if (hasGrowthBoost) {
      leftover = growthTime % 3
      growthTime = Math.ceil((growthTime / 3) * 2)
      newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
    }

    const totalGrowthTime = this.getTotalGrowTime(hasGrowthBoost)

    const onLastHarvest = (day % totalGrowthTime) === 0
    const doReplant = onLastHarvest

    const harvestableDays = []
    harvestableDays.push(growthTime)
    let lastHarvestDay = harvestableDays[harvestableDays.length - 1]

    for (let i = 0; i < reharvestLimit; i++) {
      harvestableDays.push(Math.max(lastHarvestDay + newReharvestCooldown - leftover, 1))
      lastHarvestDay = harvestableDays[harvestableDays.length - 1]
      leftover = harvestableDays[harvestableDays.length - 1] - lastHarvestDay
    }

    if (onLastHarvest) {
      return {
        isHarvestable: true,
        doReplant,
      }
    }
    return {
      isHarvestable: harvestableDays.includes(day % totalGrowthTime),
      doReplant,
    }

}

getHarvestableDays(hasGrowthBoost: boolean = false): number[] {
let { growthTime, reharvestCooldown, reharvestLimit } = this.\_produceInfo

    let newReharvestCooldown = reharvestCooldown

    let leftover = 0
    if (hasGrowthBoost) {
      leftover = growthTime % 3
      growthTime = Math.ceil((growthTime / 3) * 2)
      newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
    }

    const harvestableDays = []
    harvestableDays.push(growthTime)
    let lastHarvestDay = harvestableDays[harvestableDays.length - 1]

    for (let i = 0; i < reharvestLimit; i++) {
      harvestableDays.push(Math.max(lastHarvestDay + newReharvestCooldown - leftover, 1))
      lastHarvestDay = harvestableDays[harvestableDays.length - 1]
      leftover = harvestableDays[harvestableDays.length - 1] - lastHarvestDay
    }

    return harvestableDays

}

getTotalGrowTime(hasGrowthBoost: boolean = false): number {
let { growthTime, reharvestCooldown, reharvestLimit } = this.\_produceInfo

    let newReharvestCooldown = reharvestCooldown

    let leftover = 0
    if (hasGrowthBoost) {
      leftover = growthTime % 3
      growthTime = Math.ceil((growthTime / 3) * 2)
      newReharvestCooldown = Math.ceil((reharvestCooldown / 3) * 2)
    }

    const harvestableDays = []
    harvestableDays.push(growthTime)
    let lastHarvestDay = harvestableDays[harvestableDays.length - 1]

    for (let i = 0; i < reharvestLimit; i++) {
      harvestableDays.push(Math.max(lastHarvestDay + newReharvestCooldown - leftover, 1))
      lastHarvestDay = harvestableDays[harvestableDays.length - 1]
      leftover = harvestableDays[harvestableDays.length - 1] - lastHarvestDay
    }

    return harvestableDays.reduce((acc, cur) => (acc) + (cur - acc), 0)

}

calculateGoldValue(
cropsCount: number,
type: 'crop' | 'seed' | 'preserve',
isStar: boolean = false,
) {
const goldValues = this.\_goldValues
const { cropsPerSeed, seedsPerConversion, cropsPerPreserve } = this.conversionInfo

    let goldValue = 0
    let remainder = 0
    if (type === 'crop') {
      goldValue = isStar ? cropsCount * goldValues.cropStar : cropsCount * goldValues.crop
    }
    else if (type === 'seed') {
      const cropsNotConverted = cropsCount % cropsPerSeed
      const processCount = ((cropsCount - cropsNotConverted) / cropsPerSeed) * seedsPerConversion

      goldValue = isStar
        ? processCount * goldValues.seedStar
        : processCount * goldValues.seed
      remainder = cropsNotConverted
    }
    else if (type === 'preserve') {
      // This whole section is written in preperation for the idea that more than 1 crop could be used to make a preserve

      if (!goldValues.hasPreserve) {
        console.error('Should not have reached this point')
        throw new Error(
          'Crop is attempting to be sold as a preserve, but it is not meant to be preserved',
        )
      }
      const cropsNotConverted = cropsCount % cropsPerPreserve
      const processCount = (cropsCount - cropsNotConverted) / cropsPerPreserve
      goldValue = isStar
        ? processCount * goldValues.preserveStar
        : processCount * goldValues.preserve

      remainder = cropsNotConverted
    }

    return {
      goldValue,
      remainder,
    }

}

convertCropToSeed(cropsCount: number): {
count: number
remainder: number
} {
const { cropsPerSeed, seedsPerConversion } = this.conversionInfo
const cropsNotConverted = cropsCount % cropsPerSeed
const processCount = ((cropsCount - cropsNotConverted) / cropsPerSeed) \* seedsPerConversion

    return {
      count: processCount,
      remainder: cropsNotConverted,
    }

}

convertCropToPreserve(cropsCount: number): {
count: number
remainder: number
} {
const { cropsPerPreserve } = this.conversionInfo
const cropsNotConverted = cropsCount % cropsPerPreserve
const processCount = (cropsCount - cropsNotConverted) / cropsPerPreserve
return {
count: processCount,
remainder: cropsNotConverted,
}
}
}

export default Crop
export type { IProduceInfo, IProduceInfoOptions }

================================================
FILE: assets/scripts/garden-planner/classes/cropTiles.ts
================================================
import CropType from '../enums/crops'
import FertiliserType from '../enums/fertiliser'
import Bonus from '../enums/bonus'
import type { TCropTiles, TUniqueTiles } from '../utils/garden-helpers'
import type Tile from './tile'
import type Plot from './plot'

// Stores information about the tiles
export default class CropTiles {
private \_individualCrops: TCropTiles
private \_fertiliserCount: Record<string, number>
private \_bonusCoverage: Record<string, number>
private \_cropTypeCount: Record<string, number>

// Unique crops have the same crop type and bonuses
private \_uniqueTiles: TUniqueTiles

constructor() {
this.\_individualCrops = new Map()
this.\_fertiliserCount = Object.fromEntries(
Object.values(FertiliserType).map(fertiliserType => [fertiliserType, 0]),
)
this.\_bonusCoverage = Object.fromEntries(
Object.values(Bonus).map(bonus => [bonus, 0]),
)
this.\_cropTypeCount = Object.fromEntries(
Object.values(CropType).map(cropType => [cropType, 0]),
)
this.\_uniqueTiles = new Map()
}

updateTiles(layout: Plot[][]) {
// Reset the values
this.\_individualCrops = new Map<string, Tile>()
this.\_fertiliserCount = Object.fromEntries(
Object.values(FertiliserType).map(fertiliserType => [fertiliserType, 0]),
)
this.\_bonusCoverage = Object.fromEntries(
Object.values(Bonus).map(bonus => [bonus, 0]),
)
this.\_cropTypeCount = Object.fromEntries(
Object.values(CropType).map(cropType => [cropType, 0]),
)
this.\_uniqueTiles = new Map()

    for (const plot of layout.flat()) {
      if (!plot.isActive)
        continue
      for (const tile of plot.tiles.flat()) {
        if (tile.fertiliser && tile.fertiliser.type !== FertiliserType.None)
          this._fertiliserCount[tile.fertiliser.type]++
        if (tile.crop && tile.crop.type !== CropType.None)
          this._individualCrops.set(tile.id, tile)
      }
    }

    for (const tile of this._individualCrops.values()) {
      for (const bonus of tile.bonuses) {
        if (bonus !== Bonus.None)
          this._bonusCoverage[bonus]++
      }

      if (tile.crop && tile.crop.type !== CropType.None) {
        this._cropTypeCount[tile.crop.type as CropType]++

        // sort bonuses by name to ensure unique key for
        // crops with the same type and bonuses
        const bonusesFiltered = tile.bonuses.filter(bonus => bonus !== Bonus.WaterRetain && bonus !== Bonus.WeedPrevention)
        const bonusesString = bonusesFiltered.sort().join('-')
        // No need to include water retain and weed prevention for unique crops
        const key = `${tile.crop.type}-${bonusesString}`
        if (this._uniqueTiles.has(key)) {
          this._uniqueTiles.get(key)!.count++
        }
        else {
          this._uniqueTiles.set(key, {
            tile,
            count: 1,
          })
        }
      }
    }

}

get individualCrops(): Map<string, Tile> {
return this.\_individualCrops
}

get uniqueTiles(): TUniqueTiles {
return this.\_uniqueTiles
}

get fertiliserCount(): Record<string, number> {
return this.\_fertiliserCount
}

get bonusCoverage(): Record<string, number> {
return this.\_bonusCoverage
}

get cropTypeCount(): Record<string, number> {
return this.\_cropTypeCount
}

get cropCount(): number {
return this.\_individualCrops.size
}
}

================================================
FILE: assets/scripts/garden-planner/classes/fertiliser.ts
================================================
import uniqid from 'uniqid'
import type FertiliserType from '../enums/fertiliser'
import type Bonus from '../enums/bonus'

class Fertiliser {
private \_type: FertiliserType
private \_effect: Bonus
private \_image: string
private \_id: string = uniqid()

constructor(
type: FertiliserType,
effect: Bonus,
image: string,
id: string = uniqid(),
// cost: number,
) {
this.\_type = type
this.\_effect = effect
this.\_image = image
this.\_id = id
// this.\_cost = cost
}

get type(): FertiliserType {
return this.\_type
}

get effect(): Bonus {
return this.\_effect
}

get image(): string {
return this.\_image
}

get id(): string {
return this.\_id
}

// id can be set so that fertilisers used on large crops can be identified
set id(id: string) {
this.\_id = id
}
}

export default Fertiliser

================================================
FILE: assets/scripts/garden-planner/classes/garden.ts
================================================
import Direction from '../enums/direction'
import Bonus from '../enums/bonus'
import CropType from '../enums/crops'
import CropCode from '../enums/cropCode'
import CropSize from '../enums/crop-size'
import type { PlotStat } from '../types/plotStat'
import crops, { getCodeFromCrop, getCropFromCode } from '../cropList'
import { parseSave, encodeSettings, decodeSettings } from '../save-handler'
import FertiliserType from '../enums/fertiliser'
import FertiliserCode from '../enums/fertilisercode'
import { getCodeFromFertiliser, getFertiliserFromCode } from '../fertiliserList'
import type { CalculateValueOptions, ICalculateValueResult, ICalculateYieldOptions, ICropValue, IDayResult, IHarvestInfo, ISimulateYieldResult, TUniqueTiles } from '../utils/garden-helpers'
import { getCropMap, getCropValueMap } from '../utils/garden-helpers'
import CropTiles from './cropTiles'
import type Harvester from './harvester'
import { type IHarvesterOptions } from './harvester'
import type { ProcessorSettings } from './processor'

import Plot from './plot'
import Tile from './tile'
import type Crop from './crop'

class Garden {
private \_layout: Plot[][] = []
private \_version: string = '0.4'
private \_cropTiles = new CropTiles()
private \_settingsCode: string = ''
private \_settingsHaveBeenLoaded = false

constructor() {
const defaultRows = 3
const defaultColumns = 3

    for (let i = 0; i < defaultRows; i++) {
      this._layout[i] = []
      for (let j = 0; j < defaultColumns; j++)
        this._layout[i][j] = new Plot(true)
    }

    this.loadLayout(
      `v${this._version}_D-111-111-111_Cr-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN-NNNNNNNNN`,
    )

}

get plots(): Plot[][] {
return this.\_layout
}

set plots(layout: Plot[][]) {
this.\_layout = layout
}

clearAllPlots(): void {
for (const plot of this.\_layout.flat()) {
plot.tiles = [
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
]
}
}

get activePlotCount(): number {
return this.\_layout.flat().filter(plot => plot.isActive).length
}

loadLayout(layout: string) {
const { dimensionInfo, cropInfo: cropsInfo, settingsInfo } = parseSave(layout)

    if (settingsInfo) {
      this._settingsCode = settingsInfo || ''
      this._settingsHaveBeenLoaded = true
    }

    this._layout = []

    const dimensions = dimensionInfo.split('-').splice(1)
    const rows = dimensions.length
    const columns = dimensions[0].length

    for (let i = 0; i < rows; i++) {
      this._layout[i] = []
      for (let j = 0; j < columns; j++)
        this._layout[i][j] = new Plot()
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this._layout[i][j].isActive = dimensions[i][j] === '1'
        // set adjacent plots
        if (i > 0)
          this._layout[i][j].setPlotAdjacent(Direction.North, this._layout[i - 1][j])

        if (i < rows - 1)
          this._layout[i][j].setPlotAdjacent(Direction.South, this._layout[i + 1][j])

        if (j > 0)
          this._layout[i][j].setPlotAdjacent(Direction.West, this._layout[i][j - 1])

        if (j < columns - 1)
          this._layout[i][j].setPlotAdjacent(Direction.East, this._layout[i][j + 1])
      }
    }

    const crops = cropsInfo.split('-').splice(1)

    let cropIndex = 0
    for (const plot of this._layout.flat()) {
      if (plot.isActive) {
        const regex = /[A-Z](?:\.[A-Z]|[^A-Z])*/g
        const cropCodes = crops[cropIndex].match(regex)
        if (cropCodes == null)
          throw new Error('Invalid crop code')

        for (let i = 0; i < plot.tiles.length; i++) {
          for (let j = 0; j < plot.tiles[i].length; j++) {
            let [cropCode, fertiliserCode] = cropCodes.shift()?.split('.') as [CropCode, FertiliserCode]
            fertiliserCode = fertiliserCode ?? null

            const crop = getCropFromCode(cropCode)
            const fertiliser = getFertiliserFromCode(fertiliserCode)
            if ((crop == null || crop.type === CropType.None) && (fertiliser == null || fertiliser.type === FertiliserType.None))
              continue

            // This is to prevent overwriting existing crops, such as placed apple trees or blueberry bushes
            if (plot.getTile(i, j).crop == null && plot.getTile(i, j).crop?.type !== CropType.None) {
              plot.setTile(i, j, crop)
              plot.addFertiliserToTile(i, j, fertiliser, {})
            }
          }
        }
        cropIndex++
      }
    }

    return true

}

/\*\*

- @returns a string containing the layout info of the garden
  \*/
  saveLayout(settingsCode?: string): string {
  let layoutCode = `v${this._version}_D-`
  const rows = this.\_layout.length
  const columns = this.\_layout[0].length

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
  let row = ''
  for (let colIndex = 0; colIndex < columns; colIndex++)
  row += this.\_layout[rowIndex][colIndex].isActive ? '1' : '0'
  layoutCode += `${row}-`
  }

  layoutCode = `${layoutCode.substring(0, layoutCode.length - 1)}_CR-`

  for (const plot of this.\_layout.flat()) {
  if (plot.isActive) {
  for (const tile of plot.tiles.flat()) {
  if (tile.crop)
  layoutCode += (getCodeFromCrop(tile.crop) ?? CropCode.None) as CropCode
  else
  layoutCode += CropCode.None

          if (tile.fertiliser)
            layoutCode += `.${(getCodeFromFertiliser(tile.fertiliser) ?? FertiliserCode.None) as FertiliserCode}`
        }

        if (plot !== this._layout.flat().slice(-1)[0])
          layoutCode += '-'
      }

  }

  if (layoutCode.endsWith('-'))
  layoutCode = layoutCode.substring(0, layoutCode.length - 1)

  if (settingsCode)
  layoutCode += `_${settingsCode}`

  return layoutCode

}

/\*\*

- One time update to the settings code, used when loading a saved garden
  \*/
  get loadSettingsCode(): string {
  if (this.\_settingsHaveBeenLoaded) {
  this.\_settingsHaveBeenLoaded = false
  return this.\_settingsCode ?? ''
  }
  return ''
  }

updateTiles(): void {
this.\_cropTiles.updateTiles(this.\_layout)
}

// Assign bonuses to a crop based on type and bonuses received
calculateBonuses(): void {
const treeTiles: {
[key: string]: Tile[]
} = {}
const bushTiles: {
[key: string]: Tile[]
} = {}

    const layoutFlat = this._layout.flat()

    // Calculate bonuses received
    for (const plot of layoutFlat) {
      if (!plot.isActive)
        continue

      plot.calculateBonusesReceived()
    }

    // Calculate bonuses
    for (const plot of layoutFlat) {
      if (!plot.isActive)
        continue

      for (const tile of plot.tiles.flat()) {
        tile.bonuses = []
        if (!tile.crop || tile.crop.type === CropType.None)
          continue

        switch (tile.crop?.size) {
          case CropSize.Tree:
            (treeTiles[tile.id] = treeTiles[tile.id] || []).push(tile)
            if (treeTiles[tile.id].length === 9) {
              const bonusesReceived = treeTiles[tile.id].flatMap(tile => tile.bonusesReceived)
              const bonusCounts = bonusesReceived.reduce((acc, bonus) => {
                if (bonus in acc)
                  acc[bonus]++
                else
                  acc[bonus] = 1

                return acc
              }, {} as Record<string, number>)

              for (const bonus in bonusCounts) {
                if (bonusCounts[bonus] >= 3) {
                  for (const appleTile of treeTiles[tile.id])
                    appleTile.bonuses.push(bonus as Bonus)
                }
              }
            }
            break
          case CropSize.Bush:
            if (tile.id in bushTiles)
              bushTiles[tile.id].push(tile)
            else
              bushTiles[tile.id] = [tile]

            if (bushTiles[tile.id].length === 4) {
              const bonusesReceived = bushTiles[tile.id].flatMap(tile => tile.bonusesReceived)
              const bonusCounts = bonusesReceived.reduce((acc, bonus) => {
                if (bonus in acc)
                  acc[bonus]++
                else
                  acc[bonus] = 1

                return acc
              }, {} as Record<string, number>)

              for (const bonus in bonusCounts) {
                if (bonusCounts[bonus] >= 2) {
                  for (const blueberryTile of bushTiles[tile.id])
                    blueberryTile.bonuses.push(bonus as Bonus)
                }
              }
            }
            break
          default:
            tile.bonuses = tile.bonusesReceived
        }
      }
    }

    this.updateTiles()

}

/\*\*

- Simulates the garden for a given number of days and returns the yield
- @param options - Options for calculating yield
- @returns
  \*/
  simulateYield(options: ICalculateYieldOptions) {
  const individualCrops = this.\_cropTiles.individualCrops

  const seedsRemainder: {
  [key in CropType]: {
  base: number
  star: number
  }
  } = getCropMap()

  if (individualCrops.size <= 0) {
  return {
  harvests: [] as IHarvestInfo[],
  harvestTotal: {
  day: 0,
  crops: getCropMap(),
  seedsRemainder: getCropMap(),
  } as IHarvestInfo,
  }
  }

  // console.time('simulateYield')

  const useGrowthBoost = options.useGrowthBoost
  // max growth time is the maximum growth time of all crops, and then reharvest cooldown multiplied by rehavest limit
  let maxGrowthTime = Math.max(
  ...Array.from(individualCrops.values()).map((tile) => {
  if (tile.crop?.produceInfo == null)
  return 0

        return tile.crop.getTotalGrowTime(
          (useGrowthBoost ?? false)
          && tile.bonuses.includes(Bonus.SpeedIncrease),
        )
      }),

  )

  if (options.days && options.days > 0)
  maxGrowthTime = options.days

  const harvests: IHarvestInfo[] = []
  const harvestTotal: IHarvestInfo & {
  totalGold: number
  } = {
  day: 0,
  crops: getCropMap(),
  seedsRemainder: getCropMap(),
  totalGold: 0,
  }

  // Reduce growth time by 1 to account for speed boost
  for (let day = 1; day <= maxGrowthTime; day++) {
  const harvest: IHarvestInfo = {
  day,
  crops: getCropMap(),
  seedsRemainder: getCropMap(),
  }

      const seedsRequired: {
        [key in CropType]: {
          base: number
          star: number
        }
      } = getCropMap()

      for (const [, tile] of individualCrops) {
        const crop = tile.crop
        if (
          crop?.produceInfo == null
          || crop?.type === CropType.None
          || crop?.produceInfo.growthTime === null
        ) continue

        const hasGrowthBoost = (useGrowthBoost ?? false) && tile.bonuses.includes(Bonus.SpeedIncrease)

        if (day > crop.getTotalGrowTime(hasGrowthBoost) && !options.includeReplant)
          continue

        const baseStarChance = 0.25 + (options.allStarSeeds ? 0.25 : 0) + (options.level * 0.02)

        const { base, withBonus } = crop.produceInfo
        const { isHarvestable, doReplant } = crop.isHarvestableOnDay(day, hasGrowthBoost)

        if (isHarvestable) {
          const finalStarChance = Math.min(1, baseStarChance + (tile.bonuses.includes(Bonus.QualityIncrease) ? 0.5 : 0))

          const hasBonus = tile.bonuses.includes(Bonus.HarvestIncrease)
          const starCrops = Math.round(finalStarChance * (hasBonus ? withBonus : base))
          const nonStarCrops = hasBonus ? withBonus - starCrops : base - starCrops

          harvest.crops[crop.type as CropType].base += nonStarCrops
          harvest.crops[crop.type as CropType].star += starCrops

          if (doReplant) {
            if (options.allStarSeeds)
              seedsRequired[crop.type as CropType].star++
            else
              seedsRequired[crop.type as CropType].base++
          }
        }
      }

      const hasCrop = Object.values(harvest.crops).some(crop => crop.base > 0 || crop.star > 0)
      // Push harvests that have at least 1 crop
      if (hasCrop)
        harvests.push(harvest)

      if (options.includeReplantCost && hasCrop) {
        for (const type of Object.keys(seedsRequired)) {
          const cropType = type as CropType
          const crop = crops[cropType]

          if (crop == null)
            continue

          const seeds = seedsRequired[cropType]
          const { cropsPerSeed, seedsPerConversion } = crop.conversionInfo

          if (seeds.star > 0) {
            const seedsToProduce = Math.max(0, (seeds.star - seedsRemainder[cropType].star))
            if (seedsToProduce > 0) {
              const cropsConsumed = Math.max(Math.ceil((cropsPerSeed / seedsPerConversion) * seedsToProduce), cropsPerSeed)
              harvest.crops[cropType].star -= cropsConsumed
              const seedsProduced = Math.floor((cropsConsumed / cropsPerSeed) * seedsPerConversion)
              seedsRemainder[cropType].star
                += Math.floor(seedsProduced - seedsToProduce)
            }

            const remainderSeedsToBeUsed = seeds.star - seedsToProduce
            seedsRemainder[cropType].star -= remainderSeedsToBeUsed
            harvest.seedsRemainder[cropType].star = seedsRemainder[cropType].star
          }

          if (seeds.base > 0) {
            const seedsToProduce = Math.max(0, (seeds.base - seedsRemainder[cropType].base))

            if (seedsToProduce > 0) {
              const cropsConsumed = Math.max(Math.ceil((cropsPerSeed / seedsPerConversion) * seedsToProduce), cropsPerSeed)
              harvest.crops[cropType].base -= cropsConsumed
              const seedsProduced = Math.floor((cropsConsumed / cropsPerSeed) * seedsPerConversion)
              seedsRemainder[cropType].base
                += Math.floor(seedsProduced - seedsToProduce)
            }

            const remainderSeedsToBeUsed = seeds.base - seedsToProduce
            seedsRemainder[cropType].base -= remainderSeedsToBeUsed
            harvest.seedsRemainder[cropType].base = seedsRemainder[cropType].base
          }
        }
      }

      harvestTotal.day = harvest.day
      for (const cropType in harvest.crops) {
        harvestTotal.crops[cropType as CropType].base += harvest.crops[cropType as CropType].base
        harvestTotal.crops[cropType as CropType].star += harvest.crops[cropType as CropType].star

        harvestTotal.seedsRemainder[cropType as CropType].base
          = seedsRemainder[cropType as CropType].base
        harvestTotal.seedsRemainder[cropType as CropType].star
          = seedsRemainder[cropType as CropType].star
      }

  }

  // console.timeEnd('simulateYield')

  return {
  harvests,
  harvestTotal,
  } as {
  harvests: IHarvestInfo[]
  harvestTotal: IHarvestInfo
  }

}

saveSettings(harvesterOptions: IHarvesterOptions, processorSettings: ProcessorSettings): string {
return encodeSettings(harvesterOptions, processorSettings)
}

loadSettings(settingsInfo: string): { harvesterOptions: IHarvesterOptions, processorSettings: ProcessorSettings } {
return decodeSettings(settingsInfo)
}

/\*\*

- Calculates the gold value of the crops harvested
-
- @param options - What to sell each crop as
- @param harvestInfo - The yield of the garden
- @returns gold value data for each day and the total gold value
  \*/
  calculateValue(
  options: CalculateValueOptions,
  harvestInfo: ISimulateYieldResult,
  ) {
  const result: {
  day: number
  crops: {
  [key in CropType]: {
  base: ICropValue
  star: ICropValue
  }
  }
  totalGold: number
  }[] = []

  const remainders: {
  [key in CropType]: {
  base: number
  star: number
  }
  } = getCropMap()

  for (const harvest of harvestInfo.harvests) {
  const day = harvest.day
  const cropTypes = harvest.crops
  const dayResult: IDayResult = {
  day,
  crops: getCropValueMap(options),
  totalGold: 0,
  }

      for (const cropType in cropTypes) {
        const baseOption = options[cropType as CropType].baseType
        const baseProduce = cropTypes[cropType as CropType].base
        const starOption = options[cropType as CropType].starType
        const starProduce = cropTypes[cropType as CropType].star

        if (cropType === CropType.None)
          continue

        const crop = crops[cropType as CropType]
        if (crop === null)
          continue

        const baseRemainder = remainders[cropType as CropType].base
        const starRemainder = remainders[cropType as CropType].star

        if (baseProduce === 0 && starProduce === 0) {
          // There is nothing to calculate
          continue
        }

        const { goldValue: baseGoldValue, newRemainder: newBaseRemainder, convertedUnits: convertedBaseUnits } = calculateCropResult(
          crop,
          baseProduce,
          baseRemainder,
          baseOption,
          false,
        )
        dayResult.crops[cropType as CropType].base.gold += baseGoldValue
        dayResult.crops[cropType as CropType].base.produce += convertedBaseUnits
        dayResult.crops[cropType as CropType].base.cropRemainder = newBaseRemainder
        remainders[cropType as CropType].base = newBaseRemainder

        const { goldValue: starGoldValue, newRemainder: newStarRemainder, convertedUnits: convertedStarUnits } = calculateCropResult(
          crop,
          starProduce,
          starRemainder,
          starOption,
          true,
        )

        dayResult.crops[cropType as CropType].star.gold += starGoldValue
        dayResult.crops[cropType as CropType].star.produce += convertedStarUnits
        dayResult.crops[cropType as CropType].star.cropRemainder = newStarRemainder
        remainders[cropType as CropType].star = newStarRemainder
        dayResult.totalGold += baseGoldValue + starGoldValue
      }

      result.push(dayResult)

  }

  const totalResult: IDayResult = {
  day: harvestInfo.harvestTotal.day,
  crops: getCropValueMap(options),
  totalGold: 0,
  }

  const harvestTotal = harvestInfo.harvestTotal

  for (const cropType in harvestTotal.crops) {
  const baseOption = options[cropType as CropType].baseType
  const starOption = options[cropType as CropType].starType

      const baseProduce = harvestTotal.crops[cropType as CropType].base
      const starProduce = harvestTotal.crops[cropType as CropType].star

      const crop = crops[cropType as CropType]

      if (crop == null)
        continue

      if (baseProduce === 0 && starProduce === 0)
        continue

      const baseRemainder = totalResult.crops[cropType as CropType].base.cropRemainder
      const starRemainder = totalResult.crops[cropType as CropType].star.cropRemainder

      const { goldValue: baseGoldValue, newRemainder: newBaseRemainder, convertedUnits: convertedBaseUnits } = calculateCropResult(
        crop,
        baseProduce,
        baseRemainder,
        baseOption,
        false,
      )

      totalResult.crops[cropType as CropType].base.gold += baseGoldValue
      totalResult.crops[cropType as CropType].base.produce += convertedBaseUnits
      totalResult.crops[cropType as CropType].base.cropRemainder = newBaseRemainder

      const { goldValue: starGoldValue, newRemainder: newStarRemainder, convertedUnits: convertedStarUnits } = calculateCropResult(
        crop,
        starProduce,
        starRemainder,
        starOption,
        true,
      )

      totalResult.crops[cropType as CropType].star.gold += starGoldValue
      totalResult.crops[cropType as CropType].star.produce += convertedStarUnits

      totalResult.crops[cropType as CropType].star.cropRemainder = newStarRemainder

      totalResult.totalGold += baseGoldValue + starGoldValue

  }
  return {
  result,
  totalResult,
  } as ICalculateValueResult

}

/\*\*

-
- @returns data about the garden, particularly crop count, fertiliser count, and bonus coverage
  \*/
  calculateStats() {
  return {
  cropCount: this.\_cropTiles.cropCount,
  cropTypeCount: this.\_cropTiles.cropTypeCount,
  cropBonusCoverage: this.\_cropTiles.bonusCoverage,
  fertiliserCount: this.\_cropTiles.fertiliserCount,
  } as PlotStat
  }

get uniqueTiles() {
return this.\_cropTiles.uniqueTiles satisfies TUniqueTiles
}
}

/\*\*

- Calculates gold value of crops based on the option selected
-
- @param crop - crop to calculate
- @param produce - number of crops to sell
- @param remainder - remainder from previous days
- @param option - What to sell the crop as
- @param isStar
- @returns
  \*/
  function calculateCropResult(
  crop: Crop | null,
  produce: number,
  remainder: number,
  option: 'crop' | 'seed' | 'preserve',
  isStar: boolean,
  ) {
  let convertedUnits = 0
  let goldValue = 0
  let newRemainder = 0

const cropsCombined = produce + remainder
if (produce === 0 && remainder === 0) {
return {
convertedUnits,
goldValue,
newRemainder,
}
}

switch (option) {
case 'crop':
newRemainder = remainder
convertedUnits = produce
goldValue = crop?.calculateGoldValue(produce, option, isStar).goldValue ?? 0
break
case 'seed':
convertedUnits = crop?.convertCropToSeed(cropsCombined)?.count ?? 0
newRemainder = crop?.convertCropToSeed(cropsCombined)?.remainder ?? 0
goldValue = crop?.calculateGoldValue(cropsCombined, option, isStar).goldValue ?? 0
break
case 'preserve':
convertedUnits = crop?.convertCropToPreserve(cropsCombined)?.count ?? 0
newRemainder = crop?.convertCropToPreserve(cropsCombined)?.remainder ?? 0
goldValue = crop?.calculateGoldValue(cropsCombined, option, isStar).goldValue ?? 0
break
}

return {
convertedUnits,
goldValue,
newRemainder,
}
}

export default Garden
export type { CalculateValueOptions }

================================================
FILE: assets/scripts/garden-planner/classes/harvester.ts
================================================
import { Bonus, CropType, getCropFromType } from '../imports'

import type { DayHarvests, ICropHarvestCycle, ICropName, ICropNameWithGrowthDiff, ICropYield, IHarvestCyclePhase, ITotalHarvest, TUniqueTiles } from '../utils/garden-helpers'

export interface IHarvesterOptions {
days: number | 'L' | 'M'
includeReplant: boolean
useStarSeeds: boolean
includeReplantCost: boolean
useGrowthBoost: boolean
level: number
}

/\*\*

- The Harvester class is responsible for simulating the yield of crops over a given number of days.
- \*/
  export default class Harvester {
  private \_dayHarvests: DayHarvests = new Map()
  private \_totalHarvest: ITotalHarvest = {
  lastHarvestDay: 0,
  crops: new Map(),
  seedsRemainder: new Map(),
  cycleData: new Map(),
  }

  get dayHarvests(): DayHarvests {
  return this.\_dayHarvests
  }

  get totalHarvest(): ITotalHarvest {
  return this.\_totalHarvest
  }

  constructor() {
  this.\_dayHarvests = new Map()
  this.\_totalHarvest = {
  lastHarvestDay: 0,
  crops: new Map(),
  seedsRemainder: new Map(),
  cycleData: new Map(),
  }
  }

  private reset(): void {
  this.\_dayHarvests = new Map()
  this.\_totalHarvest = {
  lastHarvestDay: 0,
  crops: new Map(),
  seedsRemainder: new Map(),
  cycleData: new Map(),
  } as ITotalHarvest
  }

  simulateYield(tiles: TUniqueTiles, options: IHarvesterOptions): void {
  if (tiles.size === 0) {
  this.reset()
  return
  }

      this.reset()


      let dayOfLastHarvest = 0
      switch (options.days) {
        // This fetches the day in which all crops are harvestable
        case -1:
        case 'L':
          dayOfLastHarvest = getGrowthTimeLCM(tiles, options.useGrowthBoost)
          break

        // This uses the day in which the crop with the highest growth time is harvestable
        case 0:
        case 'M':
          dayOfLastHarvest = getHighestGrowthTime(tiles, options.useGrowthBoost)
          break

        // Manual input
        default:
          dayOfLastHarvest = options.days
      }

      let dayHarvests = new Map() as DayHarvests

      const seedsRequiredIdSuffix = options.useStarSeeds ? '-Star' : '-Base'

      // const cycleData = new Map() as Map<ICropNameWithGrowthDiff, ICropHarvestCycle>

      /**
       * For each crop, calculate the harvest once and then apply the harvest to each day.
       * This is faster than the old method of calculating the harvest for each day,
       * which was redundant because the harvest is the same for each day outside of seed deductions.
       */
      for (const [, group] of tiles) {
        const tile = group.tile
        if (!tile.crop)
          continue

        const crop = tile.crop

        if (crop.produceInfo === null || crop.type === CropType.None)
          continue

        // Calculate star chance without tile bonuses
        const baseStarChance = 0.25 + (options.useStarSeeds ? 0.25 : 0) + (options.level * 0.02)

        // Base crop yield plus extra crop yield
        const { base } = crop.produceInfo
        const extra = Math.floor(base * 0.5)

        // Factor in tile bonuses
        const finalStarChance = Math.min(1, baseStarChance + (tile.bonuses.includes(Bonus.QualityIncrease) ? 0.5 : 0))
        const hasHarvestBoost = tile.bonuses.includes(Bonus.HarvestIncrease)

        // Calculate number of star and base crops with and without harvest boost
        const baseStarCrops = Math.round((base * group.count) * finalStarChance)
        const baseBaseCrops = (base * group.count) - baseStarCrops

        // Extra crops are only calculated if there is a harvest boost
        const extraStarCrops = (hasHarvestBoost) ? Math.round((extra * group.count) * finalStarChance) : 0
        const extraBaseCrops = (hasHarvestBoost) ? (extra * group.count) - extraStarCrops : 0

        const totalStarCrops = baseStarCrops + extraStarCrops
        const totalBaseCrops = baseBaseCrops + extraBaseCrops

        // Stores the number of crops harvested, which is usually the same

        const starCrop = {
          base: baseStarCrops,
          extra: extraStarCrops,
          totalRaw: totalStarCrops,
          totalWithDeductions: totalStarCrops,
        } satisfies ICropYield

        const baseCrop = {
          base: baseBaseCrops,
          extra: extraBaseCrops,
          totalRaw: totalBaseCrops,
          totalWithDeductions: totalBaseCrops,
        } satisfies ICropYield

        /**
         * An array of days in which the crop is harvestable from moment of planting
         */
        const harvestableDays = crop.getHarvestableDays(options.useGrowthBoost && tile.bonuses.includes(Bonus.SpeedIncrease))

        /**
         * End of cycle and the final day of harvest
         */
        const lastDayOfCycle = harvestableDays[harvestableDays.length - 1]

        // Just a type check for TS
        if (lastDayOfCycle === undefined)
          continue

        let cycles = Math.floor(dayOfLastHarvest / lastDayOfCycle)

        // If we don't include replant, we only need to simulate one cycle
        if (!options.includeReplant)
          cycles = 1

        /**
         *  Days left after harvest time ends but a crop still has an unfinished cycle
         */
        const cycleRemainder = dayOfLastHarvest % lastDayOfCycle
        // console.log(`Cycles: ${cycles}, Cycle Remainder: ${cycleRemainder}, Last Day of Cycle: ${lastDayOfCycle}, Day of Last Harvest: ${dayOfLastHarvest}`);

        let remainingHarvests = 0
        if (cycleRemainder > 0) {
          for (let i = 1; i <= cycleRemainder; i++) {
            if (harvestableDays.includes(i))
              remainingHarvests++
          }
        }

        // save cycle data
        const cropHarvestCycle = {
          cropType: tile.crop.type,
          totalHarvestsCount: (cycles * harvestableDays.length) + remainingHarvests,
          phases: [] as IHarvestCyclePhase[],
        } satisfies ICropHarvestCycle

        for (let phase = 0; phase < harvestableDays.length; phase++) {
          const phaseLength = (phase > 0)
            ? harvestableDays[phase] - harvestableDays[phase - 1]
            : harvestableDays[0]

          cropHarvestCycle.phases.push({
            dayOfHarvest: harvestableDays[phase],
            phaseLength,
            yield: {
              base: { ...baseCrop, isAveraged: false },
              star: { ...starCrop, isAveraged: false },
            },
          })
        }

        /**
         * The id of the seeds required for replanting, differentiated by base or star seeds
         */
        const seedsRequiredId = `${crop.type}${seedsRequiredIdSuffix}` satisfies ICropNameWithGrowthDiff

        /**
         * Whether to factor in growth boost for this crop
         */
        const differentiateByGrowthBoost = (options.useGrowthBoost && tile.bonuses.includes(Bonus.SpeedIncrease))


        /**
         * If growth boost is being factored in, we need to differentiate tiles that have growth boost from those that don't.
         * This is to help separate crops of the same type but different cycle times due to growth boost.
         */
        const seedsRequiredIdWithGrowth = (differentiateByGrowthBoost
          ? `${crop.type}-${options.useStarSeeds ? 'Star' : 'Base'}-Growth`
          : seedsRequiredId) satisfies ICropNameWithGrowthDiff

        const baseId = (differentiateByGrowthBoost ? `${crop.type}-Base-Growth` : `${crop.type}-Base`) satisfies ICropNameWithGrowthDiff
        const starId = (differentiateByGrowthBoost ? `${crop.type}-Star-Growth` : `${crop.type}-Star`) satisfies ICropNameWithGrowthDiff


        if (this._totalHarvest.cycleData.has(seedsRequiredIdWithGrowth)) {
          const totalHarvestCycleData = this._totalHarvest.cycleData.get(seedsRequiredIdWithGrowth)
          if (totalHarvestCycleData) {
            for (let i = 0; i < totalHarvestCycleData!.phases.length; i++) {
              totalHarvestCycleData!.phases[i].yield.base = { ...addCropYields(totalHarvestCycleData!.phases[i].yield.base, cropHarvestCycle.phases[i].yield.base), isAveraged: false }
              totalHarvestCycleData!.phases[i].yield.star = { ...addCropYields(totalHarvestCycleData!.phases[i].yield.star, cropHarvestCycle.phases[i].yield.star), isAveraged: false }
            }

            this._totalHarvest.cycleData.set(seedsRequiredIdWithGrowth, totalHarvestCycleData)
          }
        }
        else {
          this._totalHarvest.cycleData.set(seedsRequiredIdWithGrowth, cropHarvestCycle)
        }

        // Now that we've calculated the harvest for one cycle, we simply add the harvest info to all applicable days
        for (let cycle = 1; cycle <= cycles; cycle++) {
          harvestableDays.forEach((day) => {
            const dayInCycle = day + ((cycle - 1) * lastDayOfCycle)

            const harvestDay = dayHarvests.get(dayInCycle) ?? {
              day: dayInCycle,
              crops: new Map(),
              seedsRequired: new Map(),
            }

            const baseCropYield = harvestDay.crops.get(`${crop.type}-Base`) ?? { base: 0, extra: 0, totalRaw: 0, totalWithDeductions: 0 } satisfies ICropYield
            const starCropYield = harvestDay.crops.get(`${crop.type}-Star`) ?? { base: 0, extra: 0, totalRaw: 0, totalWithDeductions: 0 } satisfies ICropYield

            harvestDay.crops.set(baseId, {
              ...addCropYields(baseCropYield, baseCrop),
              cropType: crop.type,
              isStar: false,
            })

            harvestDay.crops.set(starId, {
              ...addCropYields(starCropYield, starCrop),
              cropType: crop.type,
              isStar: true,
            })

            // Seeds are required only on the last day of the cycle
            if (dayInCycle % lastDayOfCycle === 0) {
              // Marks a day where seeds are needed and how many
              if (harvestDay.seedsRequired.get(seedsRequiredIdWithGrowth)) {
                harvestDay.seedsRequired.get(seedsRequiredIdWithGrowth).count += group.count
              }
              else {
                harvestDay.seedsRequired.set(seedsRequiredIdWithGrowth, {
                  count: group.count,
                  type: crop.type,
                })
              }
            }
            dayHarvests.set(dayInCycle, harvestDay)
          })
        }

        // This cycle won't complete but we still need to harvest the crops on every harvestable day before the last day
        if (cycleRemainder > 0) {


          for (const day of harvestableDays) {
            const dayInCycle = lastDayOfCycle * cycles + day
            if (dayInCycle > dayOfLastHarvest)
              break

            const harvestDay = dayHarvests.get(dayInCycle) ?? {
              day: dayInCycle,
              crops: new Map(),
              seedsRequired: new Map(),
            }

            harvestDay.crops.set(`${crop.type}-Base${differentiateByGrowthBoost ? '-Growth' : ''}`, {
              ...baseCrop,
              cropType: crop.type,
              isStar: false,
            })

            harvestDay.crops.set(`${crop.type}-Star${differentiateByGrowthBoost ? '-Growth' : ''}`, {
              ...starCrop,
              cropType: crop.type,
              isStar: true,
            })

            if (dayInCycle % lastDayOfCycle === 0) {
              // Marks a day where seeds are needed and how many
              if (harvestDay.seedsRequired.get(seedsRequiredIdWithGrowth)) {
                harvestDay.seedsRequired.get(seedsRequiredIdWithGrowth).count += group.count
              }
              else {
                harvestDay.seedsRequired.set(seedsRequiredIdWithGrowth, {
                  count: group.count,
                  type: crop.type,
                })
              }
            }

            dayHarvests.set(dayInCycle, harvestDay)
          }
        }
      }

      // Sort the harvests by day for chronological calculations
      dayHarvests = new Map([...dayHarvests.entries()].sort(([a], [b]) => a - b))

      // console.log('dayHarvests', dayHarvests)
      /**
       * Contains the remainder of seeds after replanting for the next replant cycle
       */
      const seedsRemainder = new Map() as Map<ICropNameWithGrowthDiff, number>

      /**
       * TODO: Think of a better name
       * - This is a tracker to find the total amount of crops left after seed replants,
       *   to get the average value of how many crops are usually left on replant days
       */
      const cropTotalsForAveraging = new Map() as Map<ICropNameWithGrowthDiff, {
        total: number
        days: number
      }>

      let cropsRequiredTracker = {
        totalCropsConsumed: 0,
        deductionsDone: 0
      }
      for (const [, harvest] of dayHarvests) {
        // Deduct seeds required for replanting
        if (options.includeReplantCost) {
          for (const [id, seedsRequiredInfo] of harvest.seedsRequired) {

            const crop = getCropFromType(seedsRequiredInfo.type)
            if (!crop) {
              console.error('Crop not found')
              continue
            }
            const { cropsPerSeed, seedsPerConversion } = crop.conversionInfo

            // Calculate how many seeds need to be produced to replant, factoring in remainder from previous harvests
            const remainingSeeds = seedsRemainder.get(id) ?? 0

            const remainderSeedsToBeUsed = Math.min(remainingSeeds, seedsRequiredInfo.count)

            const seedsRequiredCount = seedsRequiredInfo.count - remainderSeedsToBeUsed

            const conversionsNeeded = Math.ceil(seedsRequiredCount / seedsPerConversion)

            const cropsRequired = conversionsNeeded * cropsPerSeed
            cropsRequiredTracker.totalCropsConsumed += cropsRequired
            cropsRequiredTracker.deductionsDone += 1

            const cropData = harvest.crops.get(id) || {
              base: 0,
              extra: 0,
              totalRaw: 0,
              totalWithDeductions: 0,
              cropType: seedsRequiredInfo.type,
            }

            const totalWithDeductions = cropData.totalWithDeductions - cropsRequired


            // Deducts the amount of crops required to convert to seeds
            // ! This method cannot pull from the pool of crops harvested from a plant with growth boost
            // ! if the seedsRequired id comes from a plant without growth boost
            // ! and vice versa
            // * However, since the total inventory of crops is calculated in the end, this might be fine
            harvest.crops.set(id, {
              ...cropData,
              isStar: options.useStarSeeds,
              totalWithDeductions,
            })

            // New seeds generated from the crops harvested
            const seedsGenerated = Math.floor(cropsRequired / cropsPerSeed) * seedsPerConversion

            const cropTotalTracker = cropTotalsForAveraging.get(id) || {
              total: 0,
              days: 0,
            }

            cropTotalsForAveraging.set(id, {
              total: cropTotalTracker.total + totalWithDeductions,
              days: cropTotalTracker.days + 1,
            })


            // Remaining seeds after replanting
            const newRemainingSeeds = (remainingSeeds - remainderSeedsToBeUsed) + (seedsGenerated - seedsRequiredCount)
            // Add the harvest to the total harvest
            seedsRemainder.set(id, newRemainingSeeds)
          }
        }

        // Add the day's harvest to the total harvest
        for (const [cropId, cropYield] of harvest.crops) {
          const crop = cropYield.cropType

          const isStar = cropYield.isStar

          const total = this._totalHarvest.crops.get(cropId) ?? {
            base: 0,
            extra: 0,
            totalRaw: 0,
            totalWithDeductions: 0,
          } satisfies ICropYield

          this._totalHarvest.crops.set(cropId, {
            ...addCropYields(total, cropYield),
            cropType: crop,
            isStar,
          })
        }
      }

      // Get the average yield on days where crops are harvested
      if (options.includeReplantCost) {
        if (cropTotalsForAveraging.size > 0) {
          for (const [cropId, cropTotal] of cropTotalsForAveraging) {

            const averageCropsConsumed = cropsRequiredTracker.totalCropsConsumed / cropsRequiredTracker.deductionsDone

            const isStar = cropId.includes('-Star')

            const cropCycleData = this._totalHarvest.cycleData.get(cropId)

            if (cropCycleData === undefined) {
              console.error('Somehow undefined')
              return
            }

            // Change the appropriate yield
            if (isStar) {
              cropCycleData.phases.at(-1)!.yield.star.totalWithDeductions -= Math.round(averageCropsConsumed)
              cropCycleData.phases.at(-1)!.yield.star.isAveraged = true
            }
            else {
              cropCycleData.phases.at(-1)!.yield.base.totalWithDeductions -= Math.round(averageCropsConsumed)
              cropCycleData.phases.at(-1)!.yield.base.isAveraged = true
            }
          }
        }
      }

      // Add the remainder of seeds after last harvest
      if (options.includeReplantCost) {
        for (const [id, seeds] of seedsRemainder) {
          if (seeds === 0) {
            // No need to track seeds that have been used up entirely
            this.totalHarvest.seedsRemainder.delete(id)
          }
          else {
            this.totalHarvest.seedsRemainder.set(id, {
              count: seeds,
              type: id.split('-')[0] as CropType,
            })
          }
        }
      }

      this._dayHarvests = dayHarvests
      this._totalHarvest.lastHarvestDay = dayOfLastHarvest


      this._dayHarvests
      this._totalHarvest.crops
      this._totalHarvest.seedsRemainder

  }

  /\*\*

  - Temporary until the processor is implemented
    \*/
    // get asInventory(): IInventory {
    // const inventory: IInventory = {}

  // inventory.crop = {}
  // for (const [cropId, cropYield] of this.totalHarvest.crops) {
  // const crop = cropYield.cropType
  // const isStar = (cropId.includes('Star'))
  // const cropInfo = getCropFromType(crop)
  // if (!cropInfo) {
  // console.error('Crop not found')
  // continue
  // }

  // if (cropYield.totalWithDeductions <= 0)
  // continue

  // const item: IInventoryItem = {
  // count: cropYield.totalWithDeductions,
  // img: {
  // src: cropInfo.image,
  // alt: cropInfo.type,
  // },
  // isStar,
  // baseGoldValue: isStar ? cropInfo.goldValues.cropStar : cropInfo.goldValues.crop,
  // }

  // inventory.crop[cropId] = item
  // }

  // return inventory
  // }
  }

function hasYield(cropYield: ICropYield) {
for (const val of Object.values(cropYield)) {
if (val > 0)
return true
}
}

function addCropYields(cropYield1: ICropYield, cropYield2: ICropYield): ICropYield {
return {
base: cropYield1.base + cropYield2.base,
extra: cropYield1.extra + cropYield2.extra,
totalRaw: cropYield1.totalRaw + cropYield2.totalRaw,
totalWithDeductions: cropYield1.totalWithDeductions + cropYield2.totalWithDeductions,
} satisfies ICropYield
}

/\*\*

- @param cropTiles - A map of crop groups
- @returns The highest growth time of all crops
  \*/
  function getHighestGrowthTime(cropTiles: TUniqueTiles, factorInGrowthBoost: boolean = false): number {
  let highestGrowthTime = 0
  for (const group of cropTiles.values()) {
  const crop = group.tile.crop
  if (!crop)
  continue

      const totalGrowthTime = crop.getTotalGrowTime(group.tile.bonuses.includes(Bonus.SpeedIncrease) && factorInGrowthBoost)
      if (totalGrowthTime > highestGrowthTime)
        highestGrowthTime = totalGrowthTime

  }

return highestGrowthTime
}

/\*\*

- @param crops - A map of crop groups
- @returns The least common multiple of all growth times of the crops
  \*/
  function getGrowthTimeLCM(crops: TUniqueTiles, factorInGrowthBoost: boolean = false): number {
  if (crops.size === 0) {
  // console.warn('No crops found')
  return 0
  }

const growthTimes = new Set<number>()
for (const group of crops.values()) {
const tile = group.tile
if (!tile.crop)
continue

    growthTimes.add(tile.crop.getTotalGrowTime(group.tile.bonuses.includes(Bonus.SpeedIncrease) && factorInGrowthBoost))

}

if (growthTimes.size === 0) {
// console.warn('No growth times found')
return 0
}

return Array.from(growthTimes).reduce((acc, cur) => (acc \* cur) / getGCD(acc, cur))
}

/\*\*

- Utility function for getGrowthTimeLCM
- @returns The greatest common divisor of two numbers
  \*/
  function getGCD(a: number, b: number): number {
  return b === 0 ? a : getGCD(b, a % b)
  }

================================================
FILE: assets/scripts/garden-planner/classes/plot.ts
================================================
/\*\*

- ! NOTE
- ! The current implementation of plots do not allow off-set connections (e.g: only 2/3 of a side connected)
- ! An alternative implementation will be required for such a case within a separate file
-
- TODO: Improve the current implementation to be more efficient
  \*/

import uniqid from 'uniqid'
import type Bonus from '../enums/bonus'
import CropType from '../enums/crops'
import Direction from '../enums/direction'
import CropSize from '../enums/crop-size'
import type Fertiliser from './fertiliser'
import Crop from './crop'
import Tile from './tile'

// Grid sizes for a plot
const TILE_ROWS = 3
const TILE_COLS = 3

class Plot {
private \_isActive: boolean = false
private \_tiles: Tile[][] = []
private \_id: string = uniqid()

// Tracks the plot's neighbours for bonus calculations and cross-plot crop/fert placement
private \_adjacentPlots: {
north: Plot | null
south: Plot | null
east: Plot | null
west: Plot | null
}

constructor(isActive: boolean = false) {
this.\_tiles = [
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
]

    this._adjacentPlots = {
      north: null,
      south: null,
      east: null,
      west: null,
    }
    this._isActive = isActive

}

get id(): string {
return this.\_id
}

get tiles(): Tile[][] {
// prevents plot from being interacted with for calculations when inactive
if (!this.\_isActive) {
return [
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
[new Tile(null), new Tile(null), new Tile(null)],
]
}

    return this._tiles

}

getTile(x: number, y: number): Tile {
// prevents tile from being interacted with for calculations when inactive
if (!this.\_isActive)
return new Tile(null)

    return this._tiles[x][y]

}

/\*\*

- Gets all tiles within a given size of the plot.
- @param row - The starting row index.
- @param col - The starting column index.
- @param size - The size of the crop, which determines how many tiles to include.
- @returns An array of tiles within the given size.
  \*/
  getTilesBySize(row: number, col: number, size: CropSize): Tile[] {
  const tiles: Tile[] = []

  if (size === CropSize.Tree) {
  if (row === 0 && col === 0) {
  return this.\_tiles.flat()
  }
  else if (
  row === 0
  && col > 0
  && this.\_adjacentPlots.east
  && this.\_adjacentPlots.east.isActive
  ) {
  this.\_tiles.map((row: Tile[]) => row.slice(col)).forEach((row: Tile[]) => tiles.push(...row))
  this.\_adjacentPlots.east.tiles.map((row: Tile[]) => row.slice(0, col)).forEach((row: Tile[]) => tiles.push(...row))
  return tiles
  }
  else if (
  row > 0
  && col === 0
  && this.\_adjacentPlots.south
  && this.\_adjacentPlots.south.isActive
  ) {
  this.\_tiles.slice(row).forEach((row: Tile[]) => tiles.push(...row.slice(col)))
  this.\_adjacentPlots.south.tiles.slice(0, row).forEach((row: Tile[]) => tiles.push(...row.slice(col)))
  }
  else if (
  row > 0
  && col > 0
  && this.\_adjacentPlots.south
  && this.\_adjacentPlots.south.isActive
  && this.\_adjacentPlots.east
  && this.\_adjacentPlots.east.isActive
  && this.\_adjacentPlots.south.\_adjacentPlots.east
  && this.\_adjacentPlots.south.\_adjacentPlots.east.isActive
  && this.\_adjacentPlots.east.\_adjacentPlots.south
  && this.\_adjacentPlots.east.\_adjacentPlots.south.isActive
  ) {
  this.\_tiles.slice(row).forEach((row: Tile[]) => tiles.push(...row.slice(col)))
  this.\_adjacentPlots.east.tiles.slice(row).forEach((row: Tile[]) => tiles.push(...row.slice(0, col)))
  this.\_adjacentPlots.south.tiles.slice(0, row).forEach((row: Tile[]) => tiles.push(...row.slice(col)))
  this.\_adjacentPlots.south.\_adjacentPlots.east.tiles.slice(0, row).forEach((row: Tile[]) => tiles.push(...row.slice(0, col)))
  }
  }
  else if (size === CropSize.Bush) {
  if (row < TILE_ROWS - 1 && col < TILE_COLS - 1) {
  tiles.push(...this.\_tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  }
  else if (
  row < TILE_ROWS - 1
  && col === TILE_COLS - 1
  && this.\_adjacentPlots.east
  && this.\_adjacentPlots.east.isActive
  ) {
  tiles.push(...this.\_tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  tiles.push(...this.\_adjacentPlots.east.tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(0, 1)).flat())
  }
  else if (
  row === TILE_ROWS - 1
  && col < TILE_COLS - 1
  && this.\_adjacentPlots.south
  && this.\_adjacentPlots.south.isActive
  ) {
  tiles.push(...this.\_tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  tiles.push(...this.\_adjacentPlots.south.tiles.slice(0, 1).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  }
  else if (
  row === TILE_ROWS - 1
  && col === TILE_COLS - 1
  && this.\_adjacentPlots.south
  && this.\_adjacentPlots.south.isActive
  && this.\_adjacentPlots.east
  && this.\_adjacentPlots.east.isActive
  && this.\_adjacentPlots.south.\_adjacentPlots.east
  && this.\_adjacentPlots.south.\_adjacentPlots.east.isActive
  && this.\_adjacentPlots.east.\_adjacentPlots.south
  && this.\_adjacentPlots.east.\_adjacentPlots.south.isActive
  ) {
  tiles.push(...this.\_tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  tiles.push(...this.\_adjacentPlots.east.tiles.slice(row, row + 2).map((row: Tile[]) => row.slice(0, 1)).flat())
  tiles.push(...this.\_adjacentPlots.south.tiles.slice(0, 1).map((row: Tile[]) => row.slice(col, col + 2)).flat())
  tiles.push(...this.\_adjacentPlots.south.\_adjacentPlots.east.tiles.slice(0, 1).map((row: Tile[]) => row.slice(0, 1)).flat())
  }
  }
  else {
  tiles.push(this.\_tiles[row][col])
  }

  return tiles

}

/\*\*

- Removes a crop from a tile and recursively removes adjacent tiles with the same id
-
- @param row - The row of the tile to remove the crop from
- @param col - The column of the tile to remove the crop from
- @returns
  \*/
  removeCropFromTile(row: number, col: number): void {
  // this is to prevent the plot from being interacted with when inactive
  if (!this.\_isActive)
  return

  const id = this.\_tiles[row][col].id
  this.\_tiles[row][col].crop = null
  this.\_tiles[row][col].id = uniqid()
  this.\_tiles[row][col].bonuses = []

  // look for adjacent tiles with the same id and recursively remove them
  const matchingTiles: Tile[] = this.\_tiles.flat().filter((tile: Tile) => tile.id === id)
  matchingTiles.forEach((tile: Tile) => {
  const tileX: number = this.\_tiles.findIndex((row: Tile[]) => row.includes(tile))
  const tileY: number = this.\_tiles[tileX].findIndex((t: Tile) => t === tile)
  this.removeCropFromTile(tileX, tileY)
  })

  // look for adjacent tiles with the same id in adjacent plots and recursively remove them
  for (const adjacentPlot of Object.values(this.\_adjacentPlots)) {
  if (adjacentPlot === null)
  continue
  const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === id)
  matchingTiles.forEach((tile: Tile) => {
  const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
  const tileY: number = adjacentPlot.tiles[tileX].findIndex((t: Tile) => t === tile)
  adjacentPlot.removeCropFromTile(tileX, tileY)
  })
  }

  this.calculateBonusesReceived()

}

private placeCropOnTile(row: number, col: number, crop: Crop, id: string = uniqid()): void {
this.removeCropFromTile(row, col)
this.\_tiles[row][col].crop = crop
this.\_tiles[row][col].id = id

    // This is because of how fertilisers are typically added to bushes and trees
    // I forgot to check how this behaviour works in-game
    if (crop.size !== CropSize.Single)
      this.removeFertiliserFromTile(row, col)

}

/\*\*

- Places crop on any plot, used for placing crops on adjacent plots
- @param plot
- @param row
- @param col
- @param crop
- @param id
  \*/
  private placeCropOnPlot(plot: Plot, row: number, col: number, crop: Crop, id: string = uniqid()): void {
  plot.removeCropFromTile(row, col)
  plot.tiles[row][col].crop = crop
  plot.tiles[row][col].id = id

  if (crop.size !== CropSize.Single)
  plot.removeFertiliserFromTile(row, col)

}

private placeCropOnTiles(startRow: number, startCol: number, endRow: number, endCol: number, crop: Crop, id: string = uniqid()): void {
for (let i = startRow; i < endRow; i++) {
for (let j = startCol; j < endCol; j++)
this.placeCropOnTile(i, j, crop, id)
}
}

placeCropsOnPlot(plot: Plot, startRow: number, startCol: number, endRow: number, endCol: number, crop: Crop, id: string = uniqid()): void {
for (let i = startRow; i < endRow; i++) {
for (let j = startCol; j < endCol; j++)
this.placeCropOnPlot(plot, i, j, crop, id)
}
}

setTile(row: number, column: number, crop: Crop | null): void {
// this is to prevent the plot from being interacted with when inactive
if (!this.\_isActive)
return

    if (crop === null) {
      this.removeCropFromTile(row, column)
      return
    }

    if ((crop.size as CropSize) === CropSize.Tree) {
      const id: string = uniqid()

      if (row === 0 && column === 0) {
        this.placeCropOnTiles(row, column, TILE_ROWS, TILE_COLS, crop, id)
      }
      else {
        if (
          row === 0
          && column > 0
          && this._adjacentPlots.east
          && this._adjacentPlots.east.isActive
        ) {
          this.placeCropOnTiles(row, column, TILE_ROWS, TILE_COLS, crop, id)
          this.placeCropsOnPlot(this._adjacentPlots.east, 0, 0, TILE_ROWS, column, crop, id)
        }
        else if (
          row > 0
          && column === 0
          && this._adjacentPlots.south
          && this._adjacentPlots.south.isActive
        ) {
          this.placeCropOnTiles(row, column, TILE_ROWS, TILE_COLS, crop, id)
          this.placeCropsOnPlot(this._adjacentPlots.south, 0, 0, row, TILE_COLS, crop, id)
        }
        else if (
          row > 0
          && column > 0
          && this._adjacentPlots.south
          && this._adjacentPlots.south.isActive
          && this._adjacentPlots.east
          && this._adjacentPlots.east.isActive
          && this._adjacentPlots.south._adjacentPlots.east
          && this._adjacentPlots.south._adjacentPlots.east.isActive
          && this._adjacentPlots.east._adjacentPlots.south
          && this._adjacentPlots.east._adjacentPlots.south.isActive
        ) {
          this.placeCropOnTiles(row, column, TILE_ROWS, TILE_COLS, crop, id)
          this.placeCropsOnPlot(this._adjacentPlots.east, row, 0, TILE_ROWS, column, crop, id)
          this.placeCropsOnPlot(this._adjacentPlots.south, 0, column, row, TILE_COLS, crop, id)
          this.placeCropsOnPlot(this._adjacentPlots.south._adjacentPlots.east, 0, 0, row, column, crop, id)
        }
        else {
          throw new Error(`Cannot place plant of type: ${crop.type} using this tile`)
        }
      }
    }

    else if ((crop.size as CropSize) === CropSize.Bush) {
      const id: string = uniqid()

      if (row < TILE_ROWS - 1 && column < TILE_COLS - 1) {
        this.placeCropOnTiles(row, column, row + 2, column + 2, crop, id)
      }

      else if (
        row < TILE_ROWS - 1
        && column === TILE_COLS - 1
        && this._adjacentPlots.east
        && this._adjacentPlots.east.isActive
      ) {
        this.placeCropOnTiles(row, column, row + 2, TILE_COLS, crop, id)
        this.placeCropsOnPlot(this._adjacentPlots.east, row, 0, row + 2, 1, crop, id)
      }
      else if (
        row === TILE_ROWS - 1
        && column < TILE_COLS - 1
        && this._adjacentPlots.south
        && this._adjacentPlots.south.isActive
      ) {
        this.placeCropOnTiles(row, column, TILE_ROWS, column + 2, crop, id)
        this.placeCropsOnPlot(this._adjacentPlots.south, 0, column, 1, column + 2, crop, id)
      }
      else if (
        row === TILE_ROWS - 1
        && column === TILE_COLS - 1
        && this._adjacentPlots.south
        && this._adjacentPlots.south.isActive
        && this._adjacentPlots.east
        && this._adjacentPlots.east.isActive
        && this._adjacentPlots.south._adjacentPlots.east
        && this._adjacentPlots.south._adjacentPlots.east.isActive
        && this._adjacentPlots.east._adjacentPlots.south
        && this._adjacentPlots.east._adjacentPlots.south.isActive
      ) {
        this.placeCropOnTile(row, column, crop, id)

        const eastPlot = this._adjacentPlots.east
        this.placeCropOnPlot(eastPlot, row, 0, crop, id)
        const southPlot = this._adjacentPlots.south
        this.placeCropOnPlot(southPlot, 0, column, crop, id)
        const southeastPlot = this._adjacentPlots.south._adjacentPlots.east
        this.placeCropOnPlot(southeastPlot, 0, 0, crop, id)
      }

      else {
        return
      }
    }
    else {
      this.removeCropFromTile(row, column)
      this._tiles[row][column].crop = crop
    }

    this.calculateBonusesReceived()

    // TODO: Improve this so that it doesn't have to recalculate all tiles of adjacent plots
    if (this._adjacentPlots.north)
      this._adjacentPlots.north.calculateBonusesReceived()

    if (this._adjacentPlots.south)
      this._adjacentPlots.south.calculateBonusesReceived()

    if (this._adjacentPlots.east)
      this._adjacentPlots.east.calculateBonusesReceived()

    if (this._adjacentPlots.west)
      this._adjacentPlots.west.calculateBonusesReceived()

}

set tiles(tiles: Tile[][]) {
this.\_tiles = tiles
}

set isActive(isActive: boolean) {
this.\_isActive = isActive
}

get isActive(): boolean {
return this.\_isActive
}

addFertiliserToTile(row: number, column: number, fertiliser: Fertiliser | null, {
removeSameId = true,
fertiliserForcedId = '',
}): void {
if (!this.\_isActive)
return

    if (fertiliser === null) {
      this.removeFertiliserFromTile(row, column, removeSameId)
      return
    }

    // Prevents fertilisers with the same id from being added to the same tile
    // This check is needed because the code for adding fertilisers to adjacent tiles is recursive
    if (this._tiles[row][column].fertiliser !== null && this._tiles[row][column].fertiliser?.id === fertiliser.id)
      return

    // forced id is used when adding fertilisers to bushes and trees
    const fertiliserId = (fertiliserForcedId === '') ? uniqid() : fertiliserForcedId

    fertiliser.id = fertiliserId
    this._tiles[row][column].fertiliser = fertiliser

    if (this._tiles[row][column].crop?.size === CropSize.Tree || this._tiles[row][column].crop?.size === CropSize.Bush) {
      const tileId = this._tiles[row][column].id

      // look for adjacent tiles with the same id and recursively add fertiliser to them
      const matchingTiles: Tile[] = this._tiles.flat().filter((tile: Tile) => tile.id === tileId)
      matchingTiles.forEach((tile: Tile) => {
        const tileX: number = this._tiles.findIndex((row: Tile[]) => row.includes(tile))
        const tileY: number = this._tiles[tileX].findIndex((t: Tile) => t === tile)
        this._tiles[tileX][tileY].fertiliser = fertiliser
      })

      // look for adjacent tiles with the same id in adjacent plots and recursively add fertiliser to them
      for (const adjacentPlot of Object.values(this._adjacentPlots)) {
        if (adjacentPlot === null)
          continue
        const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === tileId)
        matchingTiles.forEach((tile: Tile) => {
          const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
          const tileY: number = adjacentPlot.tiles[tileX].findIndex((t: Tile) => t === tile)
          adjacentPlot.addFertiliserToTile(tileX, tileY, fertiliser, {
            removeSameId,
            fertiliserForcedId: fertiliserId,
          })
        })
      }
    }

}

removeFertiliserFromTile(row: number, column: number, removeSameId: boolean = true): void {
if (!this.\_isActive)
return

    const tileHadFertiliser = (this._tiles[row][column].fertiliser !== null)
    if (!tileHadFertiliser)
      return
    this._tiles[row][column].fertiliser = null

    // Code to remove fertilisers added to bushes and trees
    // ? Is this even how it should work? I haven't verified it
    if (this._tiles[row][column].crop?.size === CropSize.Tree || this._tiles[row][column].crop?.size === CropSize.Bush) {
      if (!removeSameId)
        return

      // remove fertilisers with the same id from the same plot
      const fertiliserId = this._tiles[row][column].id
      const matchingTiles: Tile[] = this._tiles.flat().filter((tile: Tile) => tile.id === fertiliserId)
      matchingTiles.forEach((tile: Tile) => {
        const tileX: number = this._tiles.findIndex((row: Tile[]) => row.includes(tile))
        const tileY: number = this._tiles[tileX].findIndex((t: Tile) => t === tile)
        this._tiles[tileX][tileY].fertiliser = null
      })

      // look for adjacent tiles with the same id in adjacent plots and recursively remove them
      for (const adjacentPlot of Object.values(this._adjacentPlots)) {
        if (adjacentPlot === null)
          continue
        const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === fertiliserId)

        matchingTiles.forEach((tile: Tile) => {
          const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
          const tileY: number = adjacentPlot.tiles[tileX].findIndex((t: Tile) => t === tile)
          adjacentPlot.removeFertiliserFromTile(tileX, tileY, removeSameId)
        })
      }
    }

}

// Sets the plot adjacent to the given side
setPlotAdjacent(side: Direction, plot: Plot | null | undefined): void {
if (!plot)
return

    switch (side) {
      case Direction.North:
        this._adjacentPlots.north = plot
        break
      case Direction.South:
        this._adjacentPlots.south = plot
        break
      case Direction.East:
        this._adjacentPlots.east = plot
        break
      case Direction.West:
        this._adjacentPlots.west = plot
        break
    }

}

/\*\*

- Returns the tiles adjacent to the given tile, including tiles from adjacent plots
- @param row
- @param col - column
- @returns an array of tiles that are adjacent to the given tile.
  \*/
  getAdjacentTiles(row: number, col: number): Tile[] {
  const getAdjacentTiles = (x: number, y: number): Tile[] => {
  const adjacentTiles: Tile[] = []
  if (x > 0)
  adjacentTiles.push(this.\_tiles[x - 1][y])

      if (x < TILE_COLS - 1)
        adjacentTiles.push(this._tiles[x + 1][y])

      if (x === 0 && this._adjacentPlots.north)
        adjacentTiles.push(this._adjacentPlots.north.getTile(TILE_COLS - 1, y))

      if (x === TILE_COLS - 1 && this._adjacentPlots.south)
        adjacentTiles.push(this._adjacentPlots.south.getTile(0, y))

      if (y > 0)
        adjacentTiles.push(this._tiles[x][y - 1])

      if (y < TILE_ROWS - 1)
        adjacentTiles.push(this._tiles[x][y + 1])

      if (y === 0 && this._adjacentPlots.west)
        adjacentTiles.push(this._adjacentPlots.west.getTile(x, TILE_ROWS - 1))

      if (y === TILE_ROWS - 1 && this._adjacentPlots.east)
        adjacentTiles.push(this._adjacentPlots.east.getTile(x, 0))

      return adjacentTiles

  }
  return getAdjacentTiles(row, col)
  }

calculateBonusesReceived(): void {
for (let i = 0; i < TILE_ROWS; i++) {
for (let j = 0; j < TILE_COLS; j++) {
const tile = this.\_tiles[i][j]
tile.bonusesReceived = []
// tiles without crops shouldn't receive bonuses
if (tile.crop === null || tile.crop.type === CropType.None)
continue

        const adjacentTiles = this.getAdjacentTiles(i, j)
        const bonuses: Bonus[] = []
        for (const adjacentTile of adjacentTiles) {
          // tiles with the same crop don't give bonuses
          if (adjacentTile.crop === null)
            continue
          if (adjacentTile.crop?.type === tile.crop?.type)
            continue

          if (adjacentTile.crop?.type === CropType.None)
            continue
          bonuses.push(adjacentTile.crop.cropBonus as Bonus)
        }

        if (tile.fertiliser !== null)
          bonuses.push(tile.fertiliser.effect)

        tile.bonusesReceived = bonuses
      }
    }

}

getTileBonuses(x: number, y: number): Bonus[] {
return this.\_tiles[x][y].bonuses
}

resetTileHover(): void {
const tiles = this.\_tiles.flat()
if (!tiles.some((tile: Tile) => tile.isHovered))
return

    for (const tile of tiles)
      tile.isHovered = false

}

onTileHover(row: number, col: number, selectedItem: Crop | Fertiliser | null | string = null): void {
if (!this.\_isActive)
return

    // Safeguard to prevent infinite loops as this function sometimes gets called recursively
    if (this._tiles[row][col].isHovered)
      return

    this.resetTileHover()
    this._tiles[row][col].isHovered = true

    if (!(selectedItem instanceof Crop)) {
      const tileCrop = this._tiles[row][col].crop
      if (tileCrop && tileCrop.size !== CropSize.Single) {
        const matchingTiles: Tile[] = this._tiles.flat().filter((tile: Tile) => tile.id === this._tiles[row][col].id)
        matchingTiles.forEach((tile: Tile) => {
          const tileX: number = this._tiles.findIndex((row: Tile[]) => row.includes(tile))
          const tileY: number = this._tiles[tileX].findIndex((t: Tile) => t === tile)
          this._tiles[tileX][tileY].isHovered = true
        })

        // look for adjacent tiles with the same id in adjacent plots and recursively hover them
        for (const adjacentPlot of Object.values(this._adjacentPlots)) {
          if (adjacentPlot === null)
            continue
          const matchingTiles: Tile[] = adjacentPlot.tiles.flat().filter((tile: Tile) => tile.id === this._tiles[row][col].id)
          matchingTiles.forEach((tile: Tile) => {
            const tileX: number = adjacentPlot.tiles.findIndex((row: Tile[]) => row.includes(tile))
            const tileY: number = adjacentPlot.tiles[tileX].findIndex((t: Tile) => t === tile)
            adjacentPlot.onTileHover(tileX, tileY, selectedItem)
          })
        }
      }
    }
    else {
      const tileSize = selectedItem.size
      const tiles = this.getTilesBySize(row, col, tileSize)
      tiles.forEach((tile: Tile) => tile.isHovered = true)
    }

}
}

export default Plot

================================================
FILE: assets/scripts/garden-planner/classes/processor.ts
================================================
import { getCropFromType } from '../cropList'
import type { Crop } from '../imports'
import { CropType } from '../imports'
import { ItemType } from '../utils/garden-helpers'
import type { CropItem, ICropHarvestCycle, ICropNameWithGrowthDiff, IInventoryItem, ISeedTracker, ITotalHarvest } from '../utils/garden-helpers'
import type { ICropConversions } from './crop'
import { parseCropId } from '../utils/garden-helpers'

// Interface for the final output of the processor
export interface ProcessorOutput {
crops: Map<ICropNameWithGrowthDiff, Pick<ProcessOutputInfo, 'count' | 'cropType' | 'itemType'>>
seeds: Map<ICropNameWithGrowthDiff, ProcessOutputInfo>
preserves: Map<ICropNameWithGrowthDiff, ProcessOutputInfo>
replantSeeds: Map<ICropNameWithGrowthDiff, ISeedTracker>
detailedProcessingInfo: Map<ICropNameWithGrowthDiff, IDetailedProcessingInfo> // Stores detailed cycle data for analysis
}

export interface IDetailedProcessingInfo {
cycleData: IProcessCycleData[],
averageProcessMinutes: number,
averageGoldGenerated: number,
averageProduce: number,
totalProcessMinutes: number
effectiveProcessMinutes: number
}

// Interface for processing output information
export interface ProcessOutputInfo {
count: number
minutesProcessedTotal: number // Total minutes required to process all items
minutesProcessedEffective: number // Effective processing time considering parallel processing
crafterCount: number // Number of crafters used
cropType: CropType
itemType: ItemType
// availableProcesses: number
// processesRequired: number
// averageExcessTimeMinutes: number

// The processTime of a crafter in an ideal scenario (without excess time from previous cycles affecting it)
// longestTimeMinutesInIdealScenario: number
}

// Type definition for crop processing settings
type CropProcessSetting = CropItem

// Interface for individual crop processing settings
export interface ProcessorSetting {
cropType: CropType
isStar: boolean
processAs: CropProcessSetting
crafters: number // Number of crafters assigned
targetTime: number // Target processing time
isActive: boolean // Whether this crop is active in processing
hasPreserve: boolean // Whether preserve option is available
count: number // Quantity to process
}

// Interface for all processor settings
export interface ProcessorSettings {
cropSettings: Map<ICropNameWithGrowthDiff, ProcessorSetting>
goldAverageSetting: 'crafterTime' | 'growthTick'
crafterSetting: number // Currently not used
}

// Type definition for crop processing data
type TCropProcessData = Map<ICropNameWithGrowthDiff, {
totalProcessMinutes: number
processType: ItemType.Crop | ItemType.Seed | ItemType.Preserve
craftersToUse: number
conversionsToMake: number
}>

// Main Processor class handles crop processing calculations
export default class Processor {
// Private output property initialized with empty Maps
private \_output: ProcessorOutput = {
crops: new Map(),
seeds: new Map(),
preserves: new Map(),
replantSeeds: new Map(),
detailedProcessingInfo: new Map(), // Initialize new map for detailed processing info
}

// Inventory and equipment tracking
private \_inventory = new Map<string, IInventoryItem>()
private \_seedCollectors = new Map<string, IInventoryItem>()
private \_preserveJars = new Map<string, IInventoryItem>()
private \_highestCraftingTime = 0 // Tracks the longest processing time across all crops

// Settings for processing
private \_settings: ProcessorSettings = {
cropSettings: new Map() as Map<ICropNameWithGrowthDiff, ProcessorSetting>,
crafterSetting: 0,
goldAverageSetting: 'crafterTime'
}

// Equipment counts
private \_seedCollectorsCount = 0
private \_preserveJarsCount = 0

// Getters for private properties
get output(): ProcessorOutput {
return this.\_output
}

get highestCraftingTime(): number {
return this.\_highestCraftingTime
}

get inventory(): Map<string, IInventoryItem> {
return this.\_inventory
}

get seedCollectors(): Map<string, IInventoryItem> {
return this.\_seedCollectors
}

get preserveJars(): Map<string, IInventoryItem> {
return this.\_preserveJars
}

get seedCollectorsCount(): number {
return this.\_seedCollectorsCount
}

get preserveJarsCount(): number {
return this.\_preserveJarsCount
}

// Resets all processing data to initial state
reset() {
this.\_inventory = new Map<string, IInventoryItem>()
this.\_highestCraftingTime = 0
this.\_inventory = new Map<string, IInventoryItem>()
this.\_settings = {
cropSettings: new Map() as Map<ICropNameWithGrowthDiff, ProcessorSetting>,
crafterSetting: 0,
goldAverageSetting: 'crafterTime'
}
this.\_seedCollectors = new Map<string, IInventoryItem>()
this.\_preserveJars = new Map<string, IInventoryItem>()
this.\_seedCollectorsCount = 0
this.\_preserveJarsCount = 0
this.\_output.detailedProcessingInfo = new Map() // Reset detailed info
}

// Main processing method that delegates to process_v2
process(harvestData: Readonly<ITotalHarvest>, processorSettings: Readonly<ProcessorSettings>): void {
this.process_v2(harvestData, processorSettings)
return
}

/\*\*

- Calculates processing settings for each crop based on harvest data and user settings
- @param totalHarvest - Harvest data to process
- @param settings - User-defined processing settings
- @returns TCropProcessData - Calculated processing data for each crop
  \*/
  private calculateSettings(totalHarvest: Readonly<ITotalHarvest>, settings: Readonly<ProcessorSettings>): TCropProcessData {
  const cropData = new Map<ICropNameWithGrowthDiff, {
  totalProcessMinutes: number
  processType: ItemType.Crop | ItemType.Seed | ItemType.Preserve
  craftersToUse: number
  conversionsToMake: number
  }>()

  // Iterate through each crop in the harvest data
  for (const [cropName, cropYield] of totalHarvest.crops) {
  const crop = getCropFromType(cropYield.cropType)
  if (!crop)
  throw new Error(`Missing crop data for crop: ${cropName}`)

      // Get user-defined settings for this crop or use defaults
      const setting = settings.cropSettings.get(cropName) || {
        cropType: cropYield.cropType,
        isStar: cropYield.isStar,
        processAs: ItemType.Crop,
        crafters: 0,
        targetTime: 0,
        isActive: false,
      }

      if (!setting)
        throw new Error(`Missing setting for crop: ${cropName}`)

      const processSetting = setting.processAs

      // If processing as crop, no conversion needed
      if (processSetting === ItemType.Crop) {
        cropData.set(cropName, {
          totalProcessMinutes: 0,
          processType: ItemType.Crop,
          craftersToUse: 0,
          conversionsToMake: 0,
        })
        continue
      }

      // Get conversion information for this crop
      const conversionInfo = crop.conversionInfo
      if (!conversionInfo)
        throw new Error(`Missing conversion info for crop: ${cropName}`)

      // Determine conversion ratios based on processing type (seed or preserve)
      const cropsPerConversion = (processSetting === ItemType.Seed) ? conversionInfo.cropsPerSeed : conversionInfo.cropsPerPreserve

      // Means there's nothing to work with for this crop
      if (cropYield.totalRaw === 0 && cropYield.totalWithDeductions === 0) {
        continue
      }

      // Track seed collectors and preserve jars
      if (processSetting === ItemType.Seed) {
        this._seedCollectors.set(cropName, {
          count: setting.crafters,
          img: {
            src: crop.cropImage,
            alt: crop.type,
          },
          isStar: cropYield.isStar,
          baseGoldValue: 0,
          itemType: ItemType.Crop,
          cropType: crop.type,
        })
        this._seedCollectorsCount += setting.crafters
      }
      else {
        this._preserveJars.set(cropName, {
          count: setting.crafters,
          img: {
            src: crop.cropImage,
            alt: crop.type,
          },
          isStar: cropYield.isStar,
          baseGoldValue: 0,
          itemType: ItemType.Crop,
          cropType: crop.type,
        })
        this._preserveJarsCount += setting.crafters
      }

      // Calculate conversion time and number of conversions needed
      const conversionTime = (processSetting === ItemType.Seed) ? conversionInfo.seedProcessMinutes : conversionInfo.preserveProcessMinutes
      const conversionsToMake = Math.floor(cropYield.totalWithDeductions / cropsPerConversion)
      const totalProcessMinutes = conversionsToMake * conversionTime

      // Store calculated data
      cropData.set(cropName, {
        totalProcessMinutes,
        processType: processSetting,
        craftersToUse: setting.crafters,
        conversionsToMake,
      })

  }

  return cropData

}

/\*\*

- Main processing function that handles the actual calculation of processing results
- @param harvestData - Harvest data to process
- @param processorSettings - User-defined processing settings
  \*/
  process_v2(harvestData: Readonly<ITotalHarvest>, processorSettings: Readonly<ProcessorSettings>) {
  this.reset() // Reset all state before starting new processing

  // Initialize output and inventory
  const output: ProcessorOutput = {
  crops: new Map(),
  seeds: new Map(),
  preserves: new Map(),
  replantSeeds: Object.assign({}, harvestData.seedsRemainder),
  detailedProcessingInfo: new Map(),
  }

  const inventory = new Map<string, IInventoryItem>()

  // Set current settings
  this.\_settings = Object.assign({}, processorSettings)
  const settings = this.\_settings

  // Calculate processing data for each crop based on settings and harvest data
  const cropData = this.calculateSettings(harvestData, settings)

  // If no crops need processing, return early
  if (cropData.size === 0) {
  this.\_output = output
  this.\_inventory = inventory
  return
  }

  const harvestUsedStarSeeds = parseCropId(harvestData.cycleData.keys().next().value as ICropNameWithGrowthDiff).isStar

  // Process each crop
  for (const [cropName, processData] of cropData) {
  const cropHarvestData = harvestData.crops.get(cropName)

      const { type: cropType, isStar, hasGrowthBoost } = parseCropId(cropName)

      const crop = getCropFromType(cropType)

      // If processing as crop, just add to output
      if (processData.processType === ItemType.Crop) {
        const count = cropHarvestData?.totalWithDeductions || 0

        if (count > 0) {
          output.crops.set(cropName, {
            count,
            itemType: ItemType.Crop,
            cropType: cropType,
          })

          // Update inventory
          if (inventory.has(cropName)) {
            inventory.get(cropName)!.count += count
          }
          else {
            const baseGoldValue = cropHarvestData?.isStar ? crop?.goldValues.cropStar : crop?.goldValues.crop
            inventory.set(cropName, {
              count,
              img: {
                src: crop?.image || '',
                alt: crop?.type || 'Crop',
              },
              isStar,
              baseGoldValue: baseGoldValue || 0,
              cropType,
              itemType: ItemType.Crop,
            })
          }
        }
      }
      // If processing as seed or preserve, handle conversion
      else if (processData.processType === ItemType.Seed || processData.processType === ItemType.Preserve) {
        const cropCount = cropHarvestData?.totalWithDeductions || 0

        if (cropCount === 0)
          continue

        if (!crop)
          throw new Error(`Missing crop data for crop: ${cropName}`)

        // Determine output type for inventory
        const processType = processData.processType === ItemType.Seed ? 'seeds' : 'preserves'

        const cycleId = `${cropType}-${harvestUsedStarSeeds ? 'Star' : 'Base'}${hasGrowthBoost ? '-Growth' : ''}` satisfies ICropNameWithGrowthDiff
        const isStar = cropName.includes('-Star')

        // Get cycle data for this crop
        const cycleData = harvestData.cycleData.get(cycleId)
        if (!cycleData)
          continue

        // Calculate number of complete cycles and remainders
        const cycles = Math.floor(cycleData.totalHarvestsCount / cycleData.phases.length)
        const cyclesRemainder = cycleData.totalHarvestsCount % cycleData.phases.length

        let totalProduceCount = 0
        let totalProcessMinutes = 0
        let longestProcessMinutes = 0
        let goldGenerated = 0
        let firstHarvestDelayMinutes = 0

        let averageProcessMinutes = 0
        let averageGoldGenerated = 0
        let averageProduce = 0

        let lastCycleData: IProcessCycleData | null = null
        const allCycleData: IProcessCycleData[] = [] // Store data for all cycles

        // Process a complete cycle
        const cycleOutput = Object.freeze(processCycle({
          cycleData,
          isStar,
          crafterCount: processData.craftersToUse,
          cropConversionInfo: crop.conversionInfo,
          processInto: processData.processType,
          goldValues: crop.goldValues,
        }))

        // Process all complete cycles
        if (cycles > 0) {
          for (let i = 0; i < cycles; i++) {
            let cycleOutputToUse = cycleOutput
            if (i === 0 || (i === cycles - 1 && cyclesRemainder === 0)) {


              cycleOutputToUse = Object.freeze(processCycle({
                cycleData,
                isStar,
                crafterCount: processData.craftersToUse,
                cropConversionInfo: crop.conversionInfo,
                processInto: processData.processType,
                goldValues: crop.goldValues,
                isFirstCycle: i === 0,
                isLastCycle: (i === cycles - 1 && cyclesRemainder === 0)
              }))
            }

            totalProduceCount += cycleOutputToUse.totalProduceCount
            totalProcessMinutes += cycleOutputToUse.totalProcessMinutes
            longestProcessMinutes += cycleOutputToUse.longestProcessMinutes
            goldGenerated += cycleOutputToUse.goldGenerated

            if (i === 0) {
              firstHarvestDelayMinutes += cycleOutputToUse.firstHarvestDelayMinutes
            }

            lastCycleData = cycleOutputToUse
            allCycleData.push(cycleOutputToUse)
          }
        }

        // Handle remainder cycles (incomplete cycles)
        if (cyclesRemainder > 0) {
          const cycleRemainderOutput = processCycle({
            cycleData,
            isStar,
            crafterCount: processData.craftersToUse,
            cropConversionInfo: crop.conversionInfo,
            processInto: processData.processType,
            goldValues: crop.goldValues,
            isFirstCycle: cycles === 0,
            isLastCycle: true
          }, cyclesRemainder)

          totalProduceCount += cycleRemainderOutput.totalProduceCount
          totalProcessMinutes += cycleRemainderOutput.totalProcessMinutes
          longestProcessMinutes += cycleRemainderOutput.longestProcessMinutes
          goldGenerated += cycleRemainderOutput.goldGenerated

          if (firstHarvestDelayMinutes <= 0)
            firstHarvestDelayMinutes += cycleRemainderOutput.firstHarvestDelayMinutes

          lastCycleData = cycleRemainderOutput
          allCycleData.push(cycleRemainderOutput)
        }

        // Calculate effective processing time considering parallel processing
        if (lastCycleData) {
          longestProcessMinutes += firstHarvestDelayMinutes

          output[processType].set(cropName, {
            count: totalProduceCount,
            minutesProcessedTotal: 0,
            minutesProcessedEffective: longestProcessMinutes,
            crafterCount: 0,
            cropType: cropType,
            itemType: processData.processType
          })

          const inventoryId = `${cropType}-${isStar ? 'Star' : 'Base'}-${processType === 'seeds' ? 'Seed' : 'Preserve'}`
          // console.log('inventoryId', inventoryId)
          const baseGoldValue = (processType === 'seeds' ? crop.goldValues[`seed${isStar ? 'Star' : ''}`] : crop.goldValues[`preserve${isStar ? 'Star' : ''}`])

          if (inventory.has(inventoryId)) {
            inventory.get(inventoryId)!.count += totalProduceCount
          }
          else {
            inventory.set(inventoryId, {
              count: totalProduceCount,
              img: {
                src: (processType === 'seeds' ? crop?.seedImage : crop?.preserveImage) || '',
                alt: `${crop?.type} ${processType}`,
              },
              isStar,
              baseGoldValue: baseGoldValue,
              cropType,
              itemType: processType === 'seeds' ? ItemType.Seed : ItemType.Preserve
            })
          }

          if (longestProcessMinutes > this._highestCraftingTime)
            this._highestCraftingTime = longestProcessMinutes

          const cyclesTotal = cycles + cyclesRemainder
          averageProcessMinutes = longestProcessMinutes / cyclesTotal
          averageProduce = totalProduceCount / cyclesTotal
          averageGoldGenerated = goldGenerated / cyclesTotal
        }


        // Store detailed processing info
        output.detailedProcessingInfo.set(cropName, {
          cycleData: allCycleData,
          averageProcessMinutes,
          averageGoldGenerated,
          averageProduce,
          totalProcessMinutes,
          effectiveProcessMinutes: longestProcessMinutes
        })
      }

  }

  // console.log('output', output)

  // console.log('inventory', inventory)
  // Update class properties with the final output
  this.\_inventory = inventory
  this.\_output = output

}
}

// Interface for harvest processing data
interface IProcessHarvestData {
totalProduceCount: number
remainder: number
crafterData: {
cropsInsertedCount: number
canFinishBeforeNextHarvest: boolean
processTimeMinutes: number
processesDone: number
idleTimeMinutes: number
excessTimeMinutes: number
}[]

canFinishBeforeNextHarvest: boolean
minutesBeforeNextHarvest: number

totalProcessMinutes: number
lowestCrafterTimeMinutes: number
highestCrafterTimeMinutes: number
longestProcessMinutes: number
longestProcessMinutesNoIdle: number
goldGenerated: number

// For average excess time
conversionsPossible: number
conversionsRequired: number
averageExcessTimeMinutes: number
}

// Interface for harvest processing arguments
interface IProcessHarvestArgs {
qualityId: 'base' | 'star'
cycleData: ICropHarvestCycle
currentPhaseIndex: number
crafterCount: number
cropConversionInfo: ICropConversions
processInto: ItemType.Seed | ItemType.Preserve
minutesPerConversion: number
cropsPerConversion: number
producePerConversion: number
produceGoldValue: number
}

/\*\*

- Processes a single harvest phase
- @param processHarvestArgs - Arguments for processing a harvest
- @returns IProcessHarvestData - Results of processing the harvest
  \*/
  function processHarvest(processHarvestArgs: IProcessHarvestArgs): IProcessHarvestData {
  const {
  qualityId,
  cycleData,
  currentPhaseIndex,
  crafterCount,
  minutesPerConversion,
  cropsPerConversion,
  producePerConversion,
  produceGoldValue,
  } = processHarvestArgs

const crafterData = [] as IProcessHarvestData['crafterData']

// Get data about the current phase
const phaseData = cycleData.phases[currentPhaseIndex]
const cropCount = phaseData.yield[qualityId].totalWithDeductions

if (cropCount === 0) {
console.warn('Empty cropCount found, bug?')
}

// Calculate how many conversions can be made

const conversionsRequired = cropCount / cropsPerConversion
const conversionsToMake = Math.floor(conversionsRequired)
const conversionsRemainder = (cropCount / cropsPerConversion) - conversionsToMake
const conversionsRemainderInCrops = cropCount % cropsPerConversion

// Distribute conversions among crafters
const conversionsDivided = Math.floor(conversionsToMake / crafterCount)
const conversionsDividedRemainder = ((conversionsToMake % crafterCount) + conversionsRemainder)

// Calculate total produce and gold
const totalProduceCount = (conversionsToMake + conversionsRemainder) _ producePerConversion
const goldGenerated = totalProduceCount _ produceGoldValue

// Calculate time until next harvest phase
let hoursToNextPhase = phaseData.phaseLength
if (cycleData.phases.length > 1) {
if (currentPhaseIndex === (cycleData.phases.length - 1))
hoursToNextPhase = cycleData.phases[0].phaseLength
else
hoursToNextPhase = cycleData.phases[currentPhaseIndex + 1].phaseLength
}

// console.log('_---_')

// console.log('time', hoursToNextPhase \* 60, minutesPerConversion)

const conversionsPossiblePerCrafter = (hoursToNextPhase _ 60) / minutesPerConversion
const conversionsPossible = conversionsPossiblePerCrafter _ crafterCount

let averageExcessTimeMinutes = 0

if ((cropCount / cropsPerConversion) > conversionsPossible) {
// averageExcessTimeMinutes = (((conversionsToMake + conversionsRemainder) - conversionsPossible) _ minutesPerConversion)
averageExcessTimeMinutes = (((conversionsToMake + conversionsRemainder) - conversionsPossible) _ minutesPerConversion) / crafterCount
// console.log('average excess time', averageExcessTimeMinutes / crafterCount)
}

// Initialize crafter data
for (let i = 0; i < crafterCount; i++) {
const cropsInsertedCount = conversionsDivided _ cropsPerConversion
const processTimeMinutes = conversionsDivided _ minutesPerConversion

    // console.log('processTimeMinutes', processTimeMinutes)
    const processesDone = conversionsDivided
    const canFinishBeforeNextHarvest = (processTimeMinutes / 60) <= hoursToNextPhase

    crafterData.push({
      cropsInsertedCount,
      processTimeMinutes,
      canFinishBeforeNextHarvest,
      processesDone,
      idleTimeMinutes: Math.min(0, ((hoursToNextPhase * 60) - processTimeMinutes)),
      excessTimeMinutes: Math.min(0, (processTimeMinutes - (hoursToNextPhase * 60)))
    })

}

// Handle remaining conversions that don't divide evenly among crafters
if (conversionsDividedRemainder > 0) {
let crafterIndex = 0

    for (let remainingProcesses = conversionsDividedRemainder; remainingProcesses > 0; remainingProcesses--) {
      if (remainingProcesses < 1 && remainingProcesses > 0) {
        // Partial remainder
        crafterData[crafterIndex].processTimeMinutes += minutesPerConversion * conversionsRemainder
        crafterData[crafterIndex].cropsInsertedCount += conversionsRemainderInCrops
        crafterData[crafterIndex].processesDone += conversionsRemainder
      }
      else {
        crafterData[crafterIndex].processTimeMinutes += minutesPerConversion
        crafterData[crafterIndex].cropsInsertedCount += cropsPerConversion
        crafterData[crafterIndex].processesDone++
      }

      crafterData[crafterIndex].canFinishBeforeNextHarvest = ((crafterData[crafterIndex].processTimeMinutes / 60) <= hoursToNextPhase)

      crafterIndex++
      if (crafterIndex > (crafterData.length - 1))
        crafterIndex = 0
    }

}

// Aggregate results from all crafters
let canFinishBeforeNextHarvest = true
let totalProcessMinutes = 0
let lowestCrafterTimeMinutes = Number.POSITIVE_INFINITY
let highestCrafterTimeMinutes = Number.NEGATIVE_INFINITY
let longestProcessMinutes = Number.NEGATIVE_INFINITY
let longestProcessMinutesNoIdle = Number.NEGATIVE_INFINITY

for (const crafter of crafterData) {
if (!crafter.canFinishBeforeNextHarvest) {
canFinishBeforeNextHarvest = false
}

    // Calculate idle and excess time
    crafter.idleTimeMinutes = Math.max(0, (hoursToNextPhase * 60) - crafter.processTimeMinutes)
    crafter.excessTimeMinutes = Math.max(0, crafter.processTimeMinutes - (hoursToNextPhase * 60))

    totalProcessMinutes += crafter.processTimeMinutes

    // Track min/max times
    if (crafter.processTimeMinutes < lowestCrafterTimeMinutes)
      lowestCrafterTimeMinutes = crafter.processTimeMinutes
    if (crafter.processTimeMinutes > highestCrafterTimeMinutes)
      highestCrafterTimeMinutes = crafter.processTimeMinutes

    const crafterLongestProcessMinutes = Math.max((hoursToNextPhase * 60), crafter.processTimeMinutes)

    if (crafterLongestProcessMinutes > longestProcessMinutes)
      longestProcessMinutes = crafterLongestProcessMinutes

    if (crafter.processTimeMinutes > longestProcessMinutesNoIdle)
      longestProcessMinutesNoIdle = crafter.processTimeMinutes

}

// Return the results of processing this harvest
return {
totalProduceCount,
remainder: conversionsRemainderInCrops,
crafterData,

    canFinishBeforeNextHarvest,
    totalProcessMinutes,

    lowestCrafterTimeMinutes,
    highestCrafterTimeMinutes,
    goldGenerated,

    longestProcessMinutes,
    longestProcessMinutesNoIdle,

    averageExcessTimeMinutes,
    conversionsPossible,
    conversionsRequired,
    minutesBeforeNextHarvest: hoursToNextPhase * 60

}
}

// Interface for cycle processing arguments
interface IProcessCycleArgs {
goldValues: Crop['goldValues']
cycleData: ICropHarvestCycle
isStar: boolean
crafterCount: number
cropConversionInfo: ICropConversions
processInto: ItemType.Seed | ItemType.Preserve
isFirstCycle?: boolean,
isLastCycle?: boolean
}

// Interface for cycle processing data
interface IProcessCycleData {
totalProduceCount: number
cycleCrafterData: {
canFinishBeforeNextHarvest: boolean
longestProcessMinutes: number
crafterData: IProcessHarvestData['crafterData']
longestProcessMinutesNoIdle: number
produceCount: number
}[]
totalProcessMinutes: number
longestProcessMinutes: number
firstHarvestDelayMinutes: number
goldGenerated: number
}

/\*\*

- Processes a complete cycle of harvesting and conversion
- @param processCycleArgs - Arguments for processing a cycle
- @param phasesOverride - Optional override for number of phases to process
- @returns IProcessCycleData - Results of processing the cycle
  \*/
  function processCycle(processCycleArgs: IProcessCycleArgs, phasesOverride = 0): IProcessCycleData {
  const { goldValues, isStar, cropConversionInfo, processInto, cycleData, crafterCount, isFirstCycle, isLastCycle } = processCycleArgs
  const qualityId = (isStar ? 'star' : 'base')

// Determine conversion parameters based on processing type
let minutesPerConversion = 0
let cropsPerConversion = 0
let producePerConversion = 0
let produceGoldValue = 0
const firstHarvestDelayMinutes = (cycleData.phases[0].phaseLength \* 60)

// Set parameters based on whether we're processing to seed or preserve
if (processInto === ItemType.Seed) {
minutesPerConversion = cropConversionInfo.seedProcessMinutes
cropsPerConversion = cropConversionInfo.cropsPerSeed
producePerConversion = cropConversionInfo.seedsPerConversion
produceGoldValue = (isStar) ? goldValues.seedStar : goldValues.seed
}
else if (processInto === ItemType.Preserve) {
minutesPerConversion = cropConversionInfo.preserveProcessMinutes
cropsPerConversion = cropConversionInfo.cropsPerPreserve
producePerConversion = 1
produceGoldValue = (isStar) ? goldValues.preserveStar : goldValues.preserve
}
else {
throw new Error('Neither SEED nor PRESERVE was chosen as the processInto option')
}

// Determine how many phases to process
const phasesToCalculate = (phasesOverride > 0)
? phasesOverride
: cycleData.phases.length

// Initialize results
let totalProduceCount = 0
let canFinishBeforeNextHarvest = true
let totalProcessMinutes = 0
let longestProcessMinutes = 0
const cycleCrafterData = [] as {
canFinishBeforeNextHarvest: boolean
longestProcessMinutes: number
crafterData: IProcessHarvestData['crafterData']
longestProcessMinutesNoIdle: number
produceCount: number
}[]
let goldGenerated = 0

// Process each phase in the cycle
for (let i = 0; i < phasesToCalculate; i++) {
const {
totalProduceCount: harvestProduceCount,
crafterData,
canFinishBeforeNextHarvest: harvestCanFinishBeforeHarvest,
totalProcessMinutes: harvestTotalProcessMinutes,
longestProcessMinutes: harvestLongestProcessMinutes,
longestProcessMinutesNoIdle: harvestLongestProcessMinutesNoIdle,
goldGenerated: harvestGoldGenerated,
longestProcessMinutesNoIdle,
averageExcessTimeMinutes,
minutesBeforeNextHarvest
} = processHarvest({
qualityId,
cycleData,
currentPhaseIndex: i,
crafterCount,
cropConversionInfo,
processInto,
minutesPerConversion,
cropsPerConversion,
producePerConversion,
produceGoldValue,
})

    // Aggregate results
    totalProduceCount += harvestProduceCount
    if (!harvestCanFinishBeforeHarvest)
      canFinishBeforeNextHarvest = false

    totalProcessMinutes += harvestTotalProcessMinutes

    if (isLastCycle && i === (phasesToCalculate - 1)) {
      longestProcessMinutes += harvestLongestProcessMinutesNoIdle
    }
    else if (isFirstCycle && i === 0 && !canFinishBeforeNextHarvest) {
      longestProcessMinutes += harvestLongestProcessMinutes
    }
    else if (!canFinishBeforeNextHarvest) {
      longestProcessMinutes += (averageExcessTimeMinutes + minutesBeforeNextHarvest)
    }
    else {
      longestProcessMinutes += harvestLongestProcessMinutes
    }


    // Store detailed data about this phase
    cycleCrafterData.push({
      canFinishBeforeNextHarvest,
      longestProcessMinutes: harvestLongestProcessMinutes,
      crafterData,
      longestProcessMinutesNoIdle,
      produceCount: harvestProduceCount
    })

    goldGenerated += harvestGoldGenerated

}

// Return the results for this cycle
return {
totalProduceCount,
cycleCrafterData,
totalProcessMinutes,
longestProcessMinutes,
goldGenerated,
firstHarvestDelayMinutes,
}
}

================================================
FILE: assets/scripts/garden-planner/classes/tile.ts
================================================
import uniqid from 'uniqid'
import Bonus from '../enums/bonus'
import type Crop from './crop'
import type Fertiliser from './fertiliser'

class Tile {
/\*\*

- {crop} - the crop currently planted on this tile. If no crop is planted, it will be null.
  \*/
  private \_crop: Crop | null = null

/\*\*

- @type {Bonus[]} - an array of unique bonuses that have been received by this tile.
  \*/

private \_bonuses: Bonus[] = []

/\*\*

- {bonusesReceived} - unlike {bonuses} - track how many sources of a bonus a tile has.
- Used for multi-tile crops, which requires multiple sources around the crop for a Bonus to be applied.
- @type {Bonus[]} - an array of bonuses that have been received by this tile, including duplicates
  \*/
  private \_bonusesReceived: Bonus[] = []

/\*\*

- Unique identifier for the tile, generated using `uniqid` from the 'uniqid' package.
  \*/
  private \_id: string = uniqid()

/\*\*

- Fertiliser applied to the tile, which applies a bonus to the tile.
  \*/
  private \_fertiliser: Fertiliser | null = null

/\*\*

- Meant to track whether a tile has been hovered over or not.
- Used for hover effects and animations.
  \*/
  private \_isHovered: boolean = false

/\*\*

- @deprecated Unused property meant to store individual seed quality for each tile.
- Currently all tiles have the same seed quality.
  \*/
  private \_hasStarSeed: boolean = false

constructor(crop: Crop | null) {
this.\_crop = crop
}

set id(id: string) {
this.\_id = id
}

get id(): string {
return this.\_id
}

get isHovered(): boolean {
return this.\_isHovered
}

set isHovered(isHovered: boolean) {
this.\_isHovered = isHovered
}

/\*\*

- @returns The current crop on this tile. If there is no crop, returns null.
  \*/
  get crop(): Crop | null {
  return this.\_crop
  }

set crop(crop: Crop | null) {
this.\_crop = crop
}

get fertiliser(): Fertiliser | null {
return this.\_fertiliser
}

set fertiliser(fertiliser: Fertiliser | null) {
this.\_fertiliser = fertiliser
}

/\*\*

- @returns The bonus of the crop on this tile. If there is no crop, returns None.
  \*/
  getCropBonus(): Bonus {
  if (this.\_crop)
  return this.\_crop.cropBonus as Bonus

  return Bonus.None

}

/\*\*

- Sets the bonuses applicated to the crop on this tile
- @param bonuses The bonuses to apply. If a bonus is already applied, it will not be added again.
  \*/
  set bonuses(bonuses: Bonus[]) {
  this.\_bonuses = [...new Set(bonuses)]
  }

/\*\*

- @returns Unique bonuses received by the crop on this tile. If there is no crop, returns None.
- @see Tile.\_bonuses
  \*/
  get bonuses(): Bonus[] {
  return this.\_bonuses
  }

/\*\*

- @returns The bonuses received by the crop. If there is no crop, returns None.
  \*/
  get bonusesReceived(): Bonus[] {
  return this.\_bonusesReceived
  }

set bonusesReceived(bonuses: Bonus[]) {
this.\_bonusesReceived = bonuses
}

hasBonus(bonus: Bonus): boolean {
return this.\_bonuses.includes(bonus)
}

// get hasStarSeed(): boolean {
// return this.\_hasStarSeed
// }

// set hasStarSeed(hasStarSeed: boolean) {
// this.\_hasStarSeed = hasStarSeed
// }
}

export default Tile

================================================
FILE: assets/scripts/garden-planner/classes/trackedInventory.ts
================================================
import { getCropFromType } from '../cropList'
import { CropType } from '../imports'
import { ItemType } from '../utils/garden-helpers'
import type { IInventoryItem } from '../utils/garden-helpers'
import { CropItem, type Item } from './items/item'

// Interface for a single inventory change entry
export interface InventoryEntry {
day: number
item: Item // A copy of the item state at the time of the entry
countChange: number // Positive for addition, negative for subtraction
reason: string // Source/reason for the change (e.g., 'Harvest', 'Processing', 'Replant')
}

// Structure to hold the final calculated state of items
export interface InventoryItemState {
item: Item // Represents the item type (name, price, etc.), count is irrelevant here
count: number // The final calculated count
}

/\*\*

- Inventory class
- - Tracks daily additions and subtractions of items.
- - Calculates total inventory state and value.
    \*/
    export class Inventory {
    // Stores a log of all inventory changes, keyed by day
    private \_log: Map<number, InventoryEntry[]> = new Map()
    // Cache for calculated total inventory state
    private \_totalItemsCache: Map<string, InventoryItemState> | null = null

/\*\*

- Clears the inventory log and cache.
  \*/
  public clear(): void {
  this.\_log.clear()
  this.\_totalItemsCache = null
  }

/\*\*

- Adds an entry to the inventory log.
- @param day - The day the change occurred.
- @param item - The item involved.
- @param countChange - The amount added (positive) or removed (negative).
- @param reason - The reason for the change.
  \*/
  private \_addEntry(day: number, item: Item, countChange: number, reason: string): void {
  if (!this.\_log.has(day))
  this.\_log.set(day, [])

  // Create a snapshot of the item for the log entry
  const itemSnapshot = Object.assign(Object.create(Object.getPrototypeOf(item)), item)

  this.\_log.get(day)?.push({
  day,
  item: itemSnapshot,
  countChange,
  reason,
  })
  // Invalidate cache when log changes
  this.\_totalItemsCache = null

}

/\*\*

- Adds items to the inventory.
- @param day - The day the items were added.
- @param item - The item to add.
- @param count - The number of items to add (must be positive).
- @param reason - The reason for adding the items.
  \*/
  public add(day: number, item: Item, count: number, reason: string): void {
  if (count <= 0) {
  console.warn(`Attempted to add non-positive count (${count}) for item ${item.itemId} on day ${day}. Ignoring.`)
  return
  }
  this.\_addEntry(day, item, count, reason)
  }

/\*\*

- Subtracts items from the inventory.
- @param day - The day the items were removed.
- @param item - The item to subtract.
- @param count - The number of items to subtract (must be positive).
- @param reason - The reason for removing the items.
  \*/
  public subtract(day: number, item: Item, count: number, reason: string): void {
  if (count <= 0) {
  console.warn(`Attempted to subtract non-positive count (${count}) for item ${item.itemId} on day ${day}. Ignoring.`)
  return
  }
  this.\_addEntry(day, item, -count, reason)
  }

/\*\*

- Adds an item based on the IInventoryItem interface structure.
- Converts IInventoryItem to a concrete Item instance before adding.
- @param day - The day the item was added.
- @param inventoryItemData - The data conforming to IInventoryItem.
- @param reason - The reason for adding the item.
  \*/
  public addItemFromIInventoryItem(day: number, inventoryItemData: IInventoryItem, reason: string): void {
  const item = this.\_createItemFromIInventoryItem(inventoryItemData)
  if (item)
  this.add(day, item, inventoryItemData.count, reason)
  else
  console.error(`Failed to create Item from IInventoryItem for ${inventoryItemData.cropType} on day ${day}`)
  }

/\*\*

- Helper to convert IInventoryItem to a concrete Item (specifically CropItem).
- Requires access to crop definitions.
- @param data - The IInventoryItem data.
- @returns A CropItem instance or null if conversion fails.
  \*/
  private \_createItemFromIInventoryItem(data: IInventoryItem): Item | null {
  if (data.itemType !== ItemType.Crop && data.itemType !== ItemType.Seed && data.itemType !== ItemType.Preserve) {
  console.warn(`Cannot create CropItem for non-crop/seed/preserve type: ${data.itemType}`)
  // TODO: Handle other item types if needed in the future
  return null
  }

  const crop = getCropFromType(data.cropType)
  if (!crop) {
  console.error(`Crop definition not found for type: ${data.cropType}`)
  return null
  }

  let name: string
  let image: string
  let price: number
  const maxStack = 30 // Assuming default stack size, adjust if needed

  switch (data.itemType) {
  case ItemType.Crop:
  name = crop.type
  image = crop.image
  price = data.isStar ? crop.goldValues.cropStar : crop.goldValues.crop
  break
  case ItemType.Seed:
  name = `${crop.type} Seed`
  image = crop.seedImage
  price = data.isStar ? crop.goldValues.seedStar : crop.goldValues.seed
  break
  case ItemType.Preserve:
  if (!crop.goldValues.hasPreserve) {
  console.warn(`Attempted to create preserve item for ${crop.type}, which cannot be preserved.`)
  return null
  }
  name = `Jar of ${crop.type}` // Or specific preserve name if available
  image = crop.preserveImage
  price = data.isStar ? crop.goldValues.preserveStar : crop.goldValues.preserve
  break
  default:
  // Should be unreachable due to the initial check
  return null
  }

  return new CropItem(name, data.itemType, image, price, data.isStar, maxStack, data.count, data.cropType)

}

/\*\*

- Calculates the final count of each item across all logged days.
- Uses caching for performance.
- @returns A Map where keys are item IDs and values are InventoryItemState.
  \*/
  public getTotalItems(): Map<string, InventoryItemState> {
  if (this.\_totalItemsCache)
  return this.\_totalItemsCache

  const totals = new Map<string, InventoryItemState>()
  const sortedDays = Array.from(this.\_log.keys()).sort((a, b) => a - b)

  for (const day of sortedDays) {
  const entries = this.\_log.get(day) || []
  for (const entry of entries) {
  const itemId = entry.item.itemId
  if (!totals.has(itemId)) {
  // Store the item definition (without count) and initialize count
  const itemDefinition = Object.assign(Object.create(Object.getPrototypeOf(entry.item)), entry.item)
  itemDefinition.count = 0 // Count in the definition is irrelevant here
  totals.set(itemId, { item: itemDefinition, count: 0 })
  }
  totals.get(itemId)!.count += entry.countChange
  }
  }

  // Filter out items with zero or negative final count
  for (const [itemId, state] of totals) {
  if (state.count <= 0)
  totals.delete(itemId)
  }

  this.\_totalItemsCache = totals
  return totals

}

/\*\*

- Calculates the net change of items for a specific day.
- @param day - The day to calculate changes for.
- @returns A Map where keys are item IDs and values are the net count change for that day.
  \*/
  public getNetItemChangesByDay(day: number): Map<string, number> {
  const dailyChanges = new Map<string, number>()
  const entries = this.\_log.get(day) || []

  for (const entry of entries) {
  const itemId = entry.item.itemId
  const currentChange = dailyChanges.get(itemId) || 0
  dailyChanges.set(itemId, currentChange + entry.countChange)
  }
  return dailyChanges

}

/\*\*

- Gets all inventory log entries for a specific day.
- @param day - The day to retrieve entries for.
- @returns An array of InventoryEntry objects for the specified day, or an empty array if none exist.
  \*/
  public getLogEntriesByDay(day: number): InventoryEntry[] {
  return this.\_log.get(day) || []
  }

/\*\*

- Calculates the total gold value of all items currently in the inventory.
- @returns The total gold value.
  _/
  public getTotalValue(): number {
  const totalItems = this.getTotalItems()
  let totalValue = 0
  for (const state of totalItems.values())
  totalValue += state.item.price _ state.count

  return totalValue

}

/\*\*

- Calculates the total gold value of the net change of items for a specific day.
- Note: This represents the value change on that day, not the total inventory value on that day.
- @param day - The day to calculate the value change for.
- @returns The net gold value change for the specified day.
  \*/
  public getNetValueChangeByDay(day: number): number {
  const dailyChanges = this.getNetItemChangesByDay(day)
  let dailyValueChange = 0
  const entries = this.\_log.get(day) || [] // Need entries to get item price info

  // Use a map to get unique items and their prices for the day
  const itemPrices = new Map<string, number>()
  for (const entry of entries) {
  if (!itemPrices.has(entry.item.itemId))
  itemPrices.set(entry.item.itemId, entry.item.price)
  }

  for (const [itemId, netChange] of dailyChanges) {
  const price = itemPrices.get(itemId) || 0
  dailyValueChange += price \* netChange
  }

  return dailyValueChange

}

/\*\*

- Gets the total final count of items filtered by a specific ItemType.
- @param type - The ItemType to filter by.
- @returns A Map where keys are item IDs and values are InventoryItemState, filtered by type.
  \*/
  public getTotalItemsByType(type: ItemType): Map<string, InventoryItemState> {
  const totalItems = this.getTotalItems()
  const filteredItems = new Map<string, InventoryItemState>()
  for (const [itemId, state] of totalItems) {
  if (state.item.type === type)
  filteredItems.set(itemId, state)
  }
  return filteredItems
  }

/\*\*

- Gets the net change of items for a specific day, filtered by ItemType.
- @param day - The day to calculate changes for.
- @param type - The ItemType to filter by.
- @returns A Map where keys are item IDs and values are the net count change for that day, filtered by type.
  \*/
  public getNetItemChangesByDayByType(day: number, type: ItemType): Map<string, number> {
  const dailyChanges = new Map<string, number>()
  const entries = this.\_log.get(day) || []

  for (const entry of entries) {
  if (entry.item.type === type) {
  const itemId = entry.item.itemId
  const currentChange = dailyChanges.get(itemId) || 0
  dailyChanges.set(itemId, currentChange + entry.countChange)
  }
  }
  return dailyChanges

}
}

================================================
FILE: assets/scripts/garden-planner/classes/items/item.ts
================================================
import type CropType from '../../enums/crops'
import { getCropFromType } from '../../imports'
import { ItemType, parseCropId } from '../../utils/garden-helpers'
import type { ICropYield, ICropInfo, ICropName, ICropNameWithGrowthDiff } from '../../utils/garden-helpers'

export interface Item {
readonly name: string
readonly type: ItemType
readonly image: string
readonly price: number
readonly isStar: boolean
readonly maxStack: number
count: number
readonly itemId: string // Unique identifier (e.g., Tomato-Crop-Star)

equals(item: Item): boolean
add(count: number): void
subtract(count: number): void

/\*\*

- Returns an array of duplicate items that represent how many stacks of this item are in the inventory.
  \*/
  get inventoryStacks(): this[]
  // takes any number of identical items and combines them into stacks of this item
  combineIntoStacks(...items: Item[]): this[]
  combineToOneStack(...items: Item[]): this
  }

/\*\*

- Crops Items are any class of items that correspond to a crop in the game (crop, seed, jarred preserve)
- This doesn't include fabric, which could be counted as a preserve but currently has its own ItemType
  \*/
  export class CropItem implements Item {
  readonly name: string
  readonly type: ItemType.Crop | ItemType.Seed | ItemType.Preserve
  readonly image: string
  readonly price: number
  readonly isStar: boolean
  readonly maxStack: number
  readonly cropType: CropType
  readonly itemId: string
  protected \_count: number

constructor(name: string, type: ItemType.Crop | ItemType.Seed | ItemType.Preserve, image: string, price: number, isStar: boolean, maxStack: number, count: number, cropType: CropType) {
this.name = name
// Type assertion already handled by the parameter type
// if (type !== ItemType.Crop && type !== ItemType.Seed && type !== ItemType.Preserve)
// throw new Error('Invalid item type')

    this.type = type
    this.image = image
    this.price = price
    this.isStar = isStar
    this.maxStack = maxStack
    this._count = count
    this.cropType = cropType
    this.itemId = `${this.cropType}-${this.type}-${this.isStar ? 'Star' : 'Base'}`

}

// Items are equal if they have the same unique ID
equals(item: Item): boolean {
return this.itemId === item.itemId
}

get count(): number {
return this.\_count
}

set count(count: number) {
this.\_count = count
}

add(count: number): void {
this.\_count += count
}

subtract(count: number): void {
this.\_count -= count
}

// Converts the count of this item into an array of stacks of this item based on the maxStack value.
get inventoryStacks(): this[] {
const stacks = []
let count = this.count
while (count > 0) {
const stack = new CropItem(
this.name,
this.type,
this.image,
this.price,
this.isStar,
this.maxStack,
Math.min(this.maxStack, count),
this.cropType,
)
count -= stack.count
stacks.push(stack)
}

    return stacks as this[]

}

get tooltip(): string {
return `${this.count * this.baseGoldValue} Gold`
}

get imgSrc(): string {
return this.image
}

get imgAlt(): string {
return this.name
}

get star(): boolean {
return this.isStar
}

get baseGoldValue(): number {
return this.price
}

// takes any number of identical items and combines them into stacks of this item
combineIntoStacks(...items: this[]): this[] {
items.forEach((item) => {
if (!this.equals(item))
throw new Error('Cannot combine different items')

      this.add(item.count)
    },
    )

    return this.inventoryStacks

}

combineToOneStack(...items: this[]): this {
items.forEach((item) => {
if (!this.equals(item))
throw new Error('Cannot combine different items')

      this.add(item.count)
    },
    )

    return this

}

static fromCropYieldAndInfo(cropId: ICropNameWithGrowthDiff, cropYieldInfo: ICropYield & ICropInfo): CropItem {
const parsedCropId = parseCropId(cropId)
const cropName = cropId

    const crop = getCropFromType(parsedCropId.type)
    if (!crop)
      throw new Error(`No crop found: ${cropId}`)

    const image = crop.image
    const isStar = parsedCropId.isStar

    const price = crop.goldValues[isStar ? 'cropStar' : 'crop']

    const maxStack = 30
    const count = cropYieldInfo.totalWithDeductions

    return new CropItem(cropName, ItemType.Crop, image, price, isStar, maxStack, count, parsedCropId.type)

}
}

================================================
FILE: assets/scripts/garden-planner/enums/bonus.ts
================================================
enum Bonus {
None = 'None',
WaterRetain = 'Water Retain',
HarvestIncrease = 'Harvest Increase',
QualityIncrease = 'Quality Increase',
SpeedIncrease = 'Speed Increase',
WeedPrevention = 'Weed Prevention',
}

export default Bonus

================================================
FILE: assets/scripts/garden-planner/enums/crop-size.ts
================================================
enum CropSize {
Single = 'single',
Bush = 'bush',
Tree = 'tree',
}

export default CropSize

================================================
FILE: assets/scripts/garden-planner/enums/cropCode.ts
================================================
enum CropCode {
None = 'N',
Tomato = 'T',
Potato = 'P',
Rice = 'R',
Wheat = 'W',
Carrot = 'C',
Onion = 'O',
Cotton = 'Co',
Blueberry = 'B',
Apple = 'A',
Corn = 'Cr',
SpicyPepper = 'S',
NapaCabbage = 'Cb',
BokChoy = 'Bk',
RockhopperPumpkin = 'Pm',
BatterflyBean = 'Bt'
}

export default CropCode

================================================
FILE: assets/scripts/garden-planner/enums/crops.ts
================================================
enum CropType {
None = 'none',
Tomato = 'tomato',
Potato = 'potato',
Rice = 'rice',
Wheat = 'wheat',
Carrot = 'carrot',
Onion = 'onion',
Cotton = 'cotton',
Blueberry = 'blueberry',
Apple = 'apple',
Corn = 'corn',
SpicyPepper = 'spicy pepper',
NapaCabbage = 'napa cabbage',
BokChoy = 'bok choy',
RockhopperPumpkin = 'rockhopper pumpkin',
BatterflyBean = 'batterfly bean'
}

export default CropType

================================================
FILE: assets/scripts/garden-planner/enums/direction.ts
================================================
enum Direction {
North = 'North',
South = 'South',
East = 'East',
West = 'West',
}

export default Direction

================================================
FILE: assets/scripts/garden-planner/enums/fertiliser.ts
================================================
enum FertiliserType {
None = 'none',
SpeedyGro = 'speedy-gro',
HarvestBoost = 'harvest-boost',
QualityUp = 'quality-up',
HydratePro = 'hydrate-pro',
WeedBlock = 'weed-block',
}

export default FertiliserType

================================================
FILE: assets/scripts/garden-planner/enums/fertilisercode.ts
================================================
enum FertiliserCode {
None = 'N',
QualityUp = 'Q',
HarvestBoost = 'H',
WeedBlock = 'W',
SpeedyGro = 'S',
HydratePro = 'Y',
}

export default FertiliserCode

================================================
FILE: assets/scripts/garden-planner/types/plotStat.ts
================================================
import type CropType from '../enums/crops'
import type { FertiliserType } from '../imports'
import type Bonus from '../enums/bonus'

interface PlotStat {
cropCount: number
cropTypeCount: { [key in CropType]: number }
cropBonusCoverage: { [key in Bonus]: number }
fertiliserCount: { [key in FertiliserType]: number }
}

export type { PlotStat }

================================================
FILE: assets/scripts/garden-planner/utils/garden-helpers.ts
================================================
/\*\*

- @file garden-helpers.ts
- @description Contains types and interfaces used in the garden planner.
  \*/

import type Tile from '../classes/tile'
import { CropType, getCropFromCode, getCropFromType } from '../imports'
import { CropCode } from '../imports'

export interface ICalculateYieldOptions {
days?: number
includeReplant?: boolean
postLevel25: boolean
allStarSeeds?: boolean
starChanceOverride?: number
baseChanceOverride?: number
includeReplantCost?: boolean
useGrowthBoost?: boolean
level: number
}

export type CalculateValueOptions = {
[key in CropType]: {
baseType: 'crop' | 'seed' | 'preserve'
starType: 'crop' | 'seed' | 'preserve'
}
}

export interface IHarvestInfo {
day: number
crops: {
[key in CropType]: {
base: number
star: number
}
}
seedsRemainder: {
[key in CropType]: {
base: number
star: number
}
}
}

export interface ICropValue {
produce: number
type: 'crop' | 'seed' | 'preserve'
gold: number
cropRemainder: number
}

export function getCropValueMap(options: CalculateValueOptions) {
const cropValueMap: Record<CropType, { base: ICropValue; star: ICropValue }> = {} as Record<
CropType,
{ base: ICropValue; star: ICropValue }

>

for (const cropType of Object.values(CropType)) {
cropValueMap[cropType] = {
base: {
produce: 0,
type: options[cropType].baseType,
gold: 0,
cropRemainder: 0,
},
star: {
produce: 0,
type: options[cropType].starType,
gold: 0,
cropRemainder: 0,
},
}
}

return cropValueMap
}

interface CropYield {
base: number
star: number
}

export function getCropMap() {
const cropValue: Record<CropType, CropYield> = {} as Record<CropType, CropYield>

for (const cropType of Object.values(CropType)) {
cropValue[cropType] = {
base: 0,
star: 0,
}
}

return cropValue
}

export interface IDayResult {
day: number
crops: Record<CropType, { base: ICropValue; star: ICropValue }>
totalGold: number
}

export interface ICalculateValueResult {
result: IDayResult[]
totalResult: IDayResult
}

export interface ISimulateYieldResult {
harvests: IHarvestInfo[]
harvestTotal: IHarvestInfo
}

// CropType-Base or CropType-Star
export type ICropName = `${CropType}-Base` | `${CropType}-Star`
export type ICropNameWithGrowthDiff = `${CropType}-Base` | `${CropType}-Star` | `${CropType}-Base-Growth` | `${CropType}-Star-Growth`

export interface ICropId {
type: CropType
code: CropCode
isStar: boolean
hasGrowthBoost: boolean
}

export interface ICropYield {
base: number

// from harvest boost
extra: number

// base + extra
totalRaw: number

// with deductions such as replanting
totalWithDeductions: number
}

export interface ICropInfo {
cropType: CropType
isStar: boolean
}

export interface ISeedTracker {
count: number
type: CropType
}

// replacers for IDayResult, ICalculateValueResult, ISimulateYieldResult
export interface IDayHarvest {
day: number
crops: Map<ICropNameWithGrowthDiff, ICropYield & ICropInfo>
seedsRequired: Map<ICropNameWithGrowthDiff, ISeedTracker>
}

export type DayHarvests = Map<number, IDayHarvest>

export interface IDayHarvests {
[key: number]: IDayHarvest
}

export interface ITotalHarvest {
lastHarvestDay: number
crops: Map<ICropNameWithGrowthDiff, ICropYield & ICropInfo>
seedsRemainder: Map<ICropNameWithGrowthDiff, ISeedTracker>
cycleData: Map<ICropNameWithGrowthDiff, ICropHarvestCycle>
}

export interface IHarvestCyclePhase {
dayOfHarvest: number
phaseLength: number
yield: {
base: ICropYield & {
isAveraged: boolean
}
star: ICropYield & {
isAveraged: boolean
}
}
}

export interface ICropHarvestCycle {
cropType: CropType
totalHarvestsCount: number
phases: IHarvestCyclePhase[]
}

export interface IInventoryItem {
count: number
img: {
src: string
alt: string
}
isStar: boolean
baseGoldValue: number
itemType: ItemType
cropType: CropType
}

export type TInventory = Map<string, IInventoryItem>

export function parseCropId(cropId: string): ICropId {
const [type, star, growth] = cropId.split('-')

if (!type || !star) {
throw new Error(`Invalid cropId format: ${cropId}`)
}

const isStar = star === 'Star'
const hasGrowthBoost = growth === 'Growth'
const code = getCropFromType(type as CropType)?.cropCode
if (!code) {
throw new Error(`Invalid crop type: ${type}`)
}

if (type === 'none') {
throw new Error('Cannot parse "none" cropId')
}
if (Object.values(CropType).includes(type as CropType) === false) {
throw new Error(`Invalid crop type: ${type}`)
}

return {
type: type as CropType,
code: code as CropCode,
isStar,
hasGrowthBoost,
}
}

export function encodeCropId(options: { type: CropType; isStar: boolean; hasGrowthBoost?: boolean }): ICropNameWithGrowthDiff {
if (!Object.values(CropType).includes(options.type)) {
throw new Error(`Invalid crop type: ${options.type}`)
}
const starPart = options.isStar ? 'Star' : 'Base'
const growthPart = options.hasGrowthBoost ? '-Growth' : ''
return `${options.type}-${starPart}${growthPart}`
}

export function encodeCropIdWithCode(options: { code: CropCode; isStar: boolean; hasGrowthBoost?: boolean }): ICropNameWithGrowthDiff {
if (!Object.values(CropCode).includes(options.code)) {
throw new Error(`Invalid crop code: ${options.code}`)
}
const starPart = options.isStar ? 'Star' : 'Base'
const growthPart = options.hasGrowthBoost ? '-Growth' : ''
return `${getCropFromCode(options.code).type}-${starPart}${growthPart}`
}

export type TCropTiles = Map<string, Tile>

export type TUniqueTiles = Map<string, {
tile: Tile
count: number
}>

export enum ItemType {
Crop = 'crop',
Seed = 'seed',
Preserve = 'preserve',
Fertiliser = 'fertiliser',

// Optional types
Worm = 'worm',
Fabric = 'fabric',
Weed = 'weed',

// For unimplemented items
Misc = 'misc',
}

export type CropItem = ItemType.Crop | ItemType.Seed | ItemType.Preserve

================================================
FILE: assets/scripts/house-planner/imports.ts
================================================
import { Direction } from '../utils/imports'
import { BuildingType } from './enums/buildingType'
import { Building } from './classes/building'
import { HarvestHouse } from './classes/buildings/HarvestHouse'
import { Hallway } from './classes/buildings/Hallway'
import { MediumHouse } from './classes/buildings/MediumHouse'
import { SmallHouse } from './classes/buildings/SmallHouse'
import { NullHouse } from './classes/buildings/NullHouse'
import { LargeHouse } from './classes/buildings/LargeHouse'
import Fireplace from './classes/buildings/Fireplace'
import BayWindow from './classes/buildings/BayWindow'
import KilimaPorch from './classes/buildings/KilimaPorch'
import KilimaDoor from './classes/buildings/KilimaDoor'
import KilimaCourtyard from './classes/buildings/KilimaCourtyard'

import BuildingImage from './classes/parts/Image'
import SnapBox from './classes/parts/SnapBox'
import CollisionBox from './classes/parts/CollisionBox'

export {
Building,
Direction,
BuildingType,
HarvestHouse,
BuildingImage,
SnapBox,
CollisionBox,
Hallway,
MediumHouse,
SmallHouse,
NullHouse,
LargeHouse,
Fireplace,
KilimaPorch,
KilimaDoor,
BayWindow,
KilimaCourtyard,
}

================================================
FILE: assets/scripts/house-planner/classes/building.ts
================================================
import Konva from 'konva'
import uniqid from 'uniqid'
import { BuildingType } from '../enums/buildingType'
import { Direction } from '../imports'
import type { GridSizing } from '../types/ConfigOptions'
import SnapBox from './parts/SnapBox'
import type { SnapBoxRect } from './parts/SnapBox'
import CollisionBox from './parts/CollisionBox'
import BuildingImage from './parts/Image'
import type { ImageType } from './parts/Image'
import { shiftDirectionByRotation } from './utils/helpers'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'
import { toScale } from '@/assets/scripts/house-planner/classes/utils/helpers'

interface Dimensions {
width: number
height: number
}

interface Materials {
sapwoodPlanks?: number
stoneBricks?: number
glassPanes?: number
}

export abstract class Building {
protected \_id: string = uniqid()
protected \_type: BuildingType = BuildingType.None
protected readonly name: string = 'Building'
protected \_needsParent: boolean = false
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 0, height: 0 }
protected \_opacity: number = 1
protected \_snapBox: SnapBox
protected \_collisionBoxes: CollisionBox[] = []
protected \_image: BuildingImage
protected \_gridSizing: GridSizing
protected \_isPlaced: boolean = false
readonly countsTowardsLimit: boolean = true
readonly price = {
base: 0,
perExtraBuilding: 0,
increaseIncrement: 0,
increaseInterval: 0,
}

readonly materials: Materials = {
sapwoodPlanks: 0,
stoneBricks: 0,
glassPanes: 0,
}

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
}

protected \_children: {
North: Building | null
East: Building | null
South: Building | null
West: Building | null
} = {
North: null,
East: null,
South: null,
West: null,
}

protected \_parent: Building | null = null

constructor(gridSizing: GridSizing) {
const { x, y } = this.\_baseCoords
const { width, height } = this.\_baseDimensions
this.\_gridSizing = gridSizing

    this._snapBox = new SnapBox({
      x,
      y,
      width,
      height,
    }, this._id, gridSizing)

    this._image = new BuildingImage({
      x,
      y,
      width,
      height,
      imageSrc: '',
    }, this._id, gridSizing)

    this._collisionBoxes = [
      new CollisionBox({
        x,
        y,
        width,
        height,
      }, this._id, gridSizing),
    ]

    this._openSlots = {
      North: true,
      East: true,
      South: true,
      West: true,
    }

}

checkCollision(building: Building, excludeIds: string[]): boolean {
const collisionBoxes = this.\_collisionBoxes
const buildingCollisionBoxes = building.\_collisionBoxes
// const isAdjacent = this.adjacentBuildingIds.includes(building.id)

    for (const collisionBox of collisionBoxes) {
      for (const buildingCollisionBox of buildingCollisionBoxes) {
        if (collisionBox.isIntersectingWith(buildingCollisionBox, excludeIds))
          return true
      }
    }
    return false

}

checkSnapBoxCollision(building: Building, excludeIds: string[]): boolean {
return this.\_snapBox.isIntersectingWith(building.\_snapBox, excludeIds)
}

// gets all children buildings that count towards the limit
get countableBuildings(): number {
return this.childrenBuildings.filter(
building => building.countsTowardsLimit && building.isPlaced,
).length + (this.isPlaced ? 1 : 0)
}

get id(): string {
return this.\_id
}

get type(): BuildingType {
return this.\_type
}

get needsParent(): boolean {
return this.\_needsParent
}

get baseCoords(): Coordinates {
return this.\_baseCoords
}

get baseRotation(): number {
return this.\_baseRotation
}

get image(): ImageType {
return this.\_image.rect
}

get snapBox(): SnapBoxRect {
return this.\_snapBox.rect
}

get collisionBoxes(): CollisionBox[] {
return this.\_collisionBoxes
}

get x(): number {
return this.\_baseCoords.x
}

get y(): number {
return this.\_baseCoords.y
}

get nameText(): Konva.Label {
const text = this.name
const FONT_SIZE = 8

    const padding = 5

    const width = typeof this._snapBox.rect.width === 'function' ? this._snapBox.rect.width() : this._snapBox.rect.width
    const height = typeof this._snapBox.rect.height === 'function' ? this._snapBox.rect.height() : this._snapBox.rect.height

    const label = new Konva.Label({
      x: this._baseCoords.x - width / 2 - (text.length / 2) * FONT_SIZE / 2,
      y: this._baseCoords.y - (height / 2) - FONT_SIZE,
      listening: false,
    })

    label.add(new Konva.Tag({
      fill: '#3A4A6B',
      shadowEnabled: false,
      cornerRadius: 2,
      listening: false,
    }))

    label.add(new Konva.Text({
      text,
      fontSize: FONT_SIZE,
      fontFamily: 'Merriweather',
      fontStyle: 'italic',
      fill: '#FFF',
      padding,
      verticalAlign: 'middle',
      listening: false,
    }))

    return label

}

addChild(building: Building, direction: Direction) {
if (building.id === this.\_id)
return
if (building.id === this.\_parent?.id)
return

    this._children[direction] = building
    building.parent = this

}

removeChild(direction: Direction) {
// console.log('removing child', direction)
this.\_children[direction]!.parent = null
this.\_children[direction] = null
}

get childrenIds(): string[] {
// get all children ids, including children of children
const childrenIds: string[] = []

    for (const child of Object.values(this._children)) {
      if (child !== null) {
        childrenIds.push(child.id)
        childrenIds.push(...child.childrenIds)
      }
    }

    return childrenIds

}

get directChildrenIds() {
const childrenIds: string[] = []

    for (const child of Object.values(this._children)) {
      if (child !== null)
        childrenIds.push(child.id)
    }

    return childrenIds

}

get adjacentBuildingIds(): string[] {
const adjacentBuildingIds: string[] = []

    for (const child of Object.values(this._children)) {
      if (child !== null)
        adjacentBuildingIds.push(child.id)
    }

    // * Figure out whether this should count
    if (this._parent !== null)
      adjacentBuildingIds.push(this._parent.id)

    return adjacentBuildingIds

}

get childrenBuildings(): Building[] {
// get all children buildings, including children of children
const children: Building[] = []

    for (const child of Object.values(this._children)) {
      if (child !== null) {
        children.push(child)
        children.push(...child.childrenBuildings)
      }
    }

    return children

}

get children(): {
North: Building | null
East: Building | null
South: Building | null
West: Building | null
} {
return this.\_children
}

get parent(): Building | null {
return this.\_parent
}

isOutsideGrid(rightmostX: number, bottommostY: number): boolean {
// check if any of the collision boxes are outside the grid
for (const collisionBox of this.\_collisionBoxes) {
const { topLeft, bottomRight } = getCorners(collisionBox)

      if (topLeft.x < 0 || topLeft.y < 0)
        return true
      else if (bottomRight.x > rightmostX || bottomRight.y > bottommostY)
        return true
    }

    return false

}

get topLevelBuilding(): Building {
if (this.\_parent === null
|| this.\_parent === undefined
|| !this.\_needsParent)
return this as Building

    return this._parent.topLevelBuilding || this as Building

}

set parent(building: Building | null) {
this.\_parent = building
}

removeParent() {
if (this.\_parent === null || this.\_parent === undefined)
return

    const parent = this._parent
    for (const slotSide in this._parent.children) {
      if (parent.children[slotSide as Direction] !== null) {
        if (parent.children[slotSide as Direction]!.id === this._id)
          parent.removeChild(slotSide as Direction)
      }
    }
    this._parent = null

}

updateCoords({ x, y }: Coordinates) {
this.\_baseCoords = { x, y }
this.\_image.updateCoords({ x, y })
this.\_snapBox.updateCoords({ x, y })
this.\_collisionBoxes.forEach(collisionBox => collisionBox.updateCoords({ x, y }))

    // update children
    for (const slotSide in this._children) {
      if (this._children[slotSide as Direction] !== null) {
        if (this._children[slotSide as Direction]!.id === this._parent?.id)
          return
        this._children[slotSide as Direction]!.snapToBuilding(this, slotSide as Direction)
      }
    }

}

isSlotOpen(direction: Direction): boolean {
return this.\_openSlots[direction]
}

isPointInBuilding({ x, y }: Coordinates): boolean {
const collisionBoxes = this.\_collisionBoxes

    for (let i = 0; i < collisionBoxes.length; i++) {
      if (collisionBoxes[i].isCoordInside({ x, y }))
        return true
    }

    return false

}

snapToBuilding(building: Building, direction: Direction) {
for (const slotSide in this.\_children) {
if (this.\_children[slotSide as Direction] !== null) {
if (this.\_children[slotSide as Direction]!.id === building.id)
return
}
}

    const { x, y } = building.getSnapCoords(direction)
    const width = toScale(this._baseDimensions.width, this._gridSizing)
    const height = toScale(this._baseDimensions.height, this._gridSizing)

    const newDirection = shiftDirectionByRotation(direction, building.baseRotation)

    switch (newDirection) {
      case Direction.North:
        this._baseCoords.x = x
        this._baseCoords.y = y - (height / 2)
        this.rotateToFace(Direction.North)
        break
      case Direction.East:
        this._baseCoords.x = x + (width / 2) + (height - width) / 2
        this._baseCoords.y = y
        this.rotateToFace(Direction.East)
        break
      case Direction.South:
        this._baseCoords.x = x
        this._baseCoords.y = y + (height / 2)
        this.rotateToFace(Direction.South)
        break
      case Direction.West:
        this._baseCoords.x = x - (width / 2) - (height - width) / 2
        this._baseCoords.y = y
        this.rotateToFace(Direction.West)
        break
    }

    this.updateCoords(this._baseCoords)

}

trySnapToBuilding({ x, y }: Coordinates, building: Building, place: boolean = false): {
snapped: boolean
side: Direction | null
} {
let closestCoords = Number.POSITIVE_INFINITY
let closestSide: Direction | null = null

    const order = getBuildingOrder(building.type)
    const thisOrder = getBuildingOrder(this.type)

    // Special override for fireplaces
    if (this.type === BuildingType.Fireplace && building.type === BuildingType.Hallway) {
      return {
        snapped: false,
        side: null,
      }
    }

    // Special override for kilima courtyard
    if (building.type === BuildingType.KilimaCourtyard) {
      switch (this.type) {
        case BuildingType.Hallway:
        case BuildingType.BayWindow:
        case BuildingType.KilimaDoor:
        case BuildingType.KilimaPorch:
        case BuildingType.KilimaCourtyard:
          break
        default:
          return {
            snapped: false,
            side: null,
          }
      }
    }

    for (const [side, isOpen] of Object.entries(building.openSlots)) {
      if (building.children[side as Direction] !== null)
        continue
      if ((side === 'East' || side === 'West') && order > thisOrder)
        continue

      if (isOpen) {
        const coords = building.getSnapCoords(side as Direction)
        const distance = Math.sqrt((x - coords.x) ** 2 + (y - coords.y) ** 2)

        if (distance < closestCoords) {
          closestCoords = distance
          closestSide = side as Direction
        }
      }
    }

    if (closestSide !== null) {
      this.snapToBuilding(building, closestSide)
      return {
        snapped: true,
        side: closestSide,
      }
    }

    if (place && closestSide !== null) {
      building.addChild(this, closestSide as Direction)
      return {
        snapped: true,
        side: closestSide,
      }
    }

    return {
      snapped: false,
      side: null,
    }

}

getSnapCoords(direction: Direction): Coordinates {
const newDirection = shiftDirectionByRotation(direction, this.\_baseRotation)
switch (newDirection) {
case Direction.North:
return this.\_snapBox.getCoords(Direction.North)
case Direction.East:
return this.\_snapBox.getCoords(Direction.East)
case Direction.South:
return this.\_snapBox.getCoords(Direction.South)
case Direction.West:
return this.\_snapBox.getCoords(Direction.West)
}
}

// rotates the building to face the given side of another building
rotateToFace(direction: Direction) {
switch (direction) {
case Direction.North:
this.\_baseRotation = 0
break
case Direction.East:
this.\_baseRotation = 90
break
case Direction.South:
this.\_baseRotation = 180
break
case Direction.West:
this.\_baseRotation = 270
break
}

    this._image.updateRotation(this._baseRotation)
    this._snapBox.updateRotation(this._baseRotation)
    this._collisionBoxes.forEach(collisionBox => collisionBox.updateRotation(this._baseRotation))

}

rotateBuilding(rotation: number) {
rotation = ((this.\_baseRotation += rotation) % 360)

    if (rotation < 0)
      rotation += 360

    this._baseRotation = rotation
    this._image.updateRotation(rotation)
    this._snapBox.updateRotation(rotation)
    this._collisionBoxes.forEach(collisionBox => collisionBox.updateRotation(rotation))

    // update children
    for (const slotSide in this._children) {
      if (this._children[slotSide as Direction] !== null)
        this._children[slotSide as Direction]!.snapToBuilding(this, slotSide as Direction)
    }

}

get openSlots(): {
North: boolean
East: boolean
South: boolean
West: boolean
} {
return this.\_openSlots
}

get isPlaced(): boolean {
return this.\_isPlaced
}

set isPlaced(value: boolean) {
this.\_isPlaced = value
}

get opacity(): number {
return this.\_opacity
}

set opacity(value: number) {
this.\_opacity = value
this.\_image.opacity = value
}

getPrice(count: number): number {
const initialPrice = this.price.base
const perExtraBuilding = this.price.perExtraBuilding
const increaseIncrement = this.price.increaseIncrement
const increaseInterval = this.price.increaseInterval

    let currentCost = initialPrice

    let priceIncrease = 0
    if (count > 0) {
      for (let i = 1; i < count; i++) {
        if (i % increaseInterval === 0)
          priceIncrease += increaseIncrement

        currentCost += (initialPrice + (perExtraBuilding + priceIncrease))
      }
    }

    return currentCost

}

get copy(): Building {
const building = new (this.constructor as any)(this.\_gridSizing)
building.\_baseCoords = { ...this.\_baseCoords }
building.\_baseRotation = Number.parseInt(this.\_baseRotation.toString())
building.\_baseDimensions = { ...this.\_baseDimensions }
building.\_opacity = Number.parseInt(this.\_opacity.toString())
building.\_snapBox = this.\_snapBox.copy
building.\_collisionBoxes = this.\_collisionBoxes.map(collisionBox => collisionBox.copy)
building.\_image = this.\_image.copy
building.\_openSlots = { ...this.\_openSlots }
building.\_children = { ...this.\_children }
building.\_parent = this.\_parent
building.\_id = uniqid()

    return building as Building

}
}

function getCorners(collisionBox: CollisionBox) {
const x = typeof collisionBox.rect.x === 'function' ? collisionBox.rect.x() : collisionBox.rect.x
const y = typeof collisionBox.rect.y === 'function' ? collisionBox.rect.y() : collisionBox.rect.y
const width = typeof collisionBox.rect.width === 'function' ? collisionBox.rect.width() : collisionBox.rect.width
const height = typeof collisionBox.rect.height === 'function' ? collisionBox.rect.height() : collisionBox.rect.height

const topLeft = { x: x - width / 2, y: y - height / 2 }
const bottomRight = { x: x + width / 2, y: y + height / 2 }

return { topLeft, bottomRight }
}

function getBuildingOrder(type: BuildingType) {
let order = 0

switch (type) {
case BuildingType.LargeHouse:
case BuildingType.HarvestHouse:
order = 10
break
case BuildingType.MediumHouse:
order = 20
break
case BuildingType.SmallHouse:
case BuildingType.KilimaCourtyard:
order = 30
break
case BuildingType.Fireplace:
order = 35
break
case BuildingType.Hallway:
order = 40
break
default:
order = 100
}

return order
}

================================================
FILE: assets/scripts/house-planner/classes/House.ts
================================================
import type { Building } from './building'

export default class House {
private \_buildings: Building[] = []
private \_isHarvestHousePlaced: boolean = false

get buildings(): Building[] {
return this.\_buildings
}

get isHarvestHousePlaced(): boolean {
return this.\_isHarvestHousePlaced
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/BayWindow.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export default class BayWindow extends Building {
protected readonly name = 'Bay Window'
protected \_type: BuildingType = BuildingType.BayWindow
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 2, height: 1 }
protected \_opacity: number = 1
protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: false,
East: false,
South: false,
West: false,
}

countsTowardsLimit: boolean = false

price = {
base: 2500,
perExtraBuilding: 0,
increaseIncrement: 0,
increaseInterval: 0,
}

materials = {
sapwoodPlanks: 30,
stoneBricks: 0,
glassPanes: 6,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 0,
zLevel: ZLevel.Large,
},
this._id,
this._gridSizing,
true,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/bay-window.svg',
},
this.\_id,
this.\_gridSizing,
)
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/Fireplace.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export default class Fireplace extends Building {
protected readonly name = 'Fireplace'
protected \_type: BuildingType = BuildingType.Fireplace
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 3, height: 3 }
protected \_opacity: number = 1
protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: false,
East: false,
South: false,
West: false,
}

countsTowardsLimit: boolean = false

price = {
base: 4000,
perExtraBuilding: 500,
increaseIncrement: 0,
increaseInterval: 0,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 0,
zLevel: ZLevel.Large,
},
this._id,
this._gridSizing,
true,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/fireplace.svg',
},
this.\_id,
this.\_gridSizing,
)
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/Hallway.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export class Hallway extends Building {
protected readonly name = 'Hallway'
protected \_type: BuildingType = BuildingType.Hallway
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 3, height: 3 }
protected \_opacity: number = 1

countsTowardsLimit: boolean = false

price = {
base: 3000,
perExtraBuilding: 100,
increaseIncrement: 100,
increaseInterval: 10,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0.2,
offsetHeight: 1,
zLevel: ZLevel.Hallway,
},
this._id,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/hallway.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: false,
South: false,
West: false,
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/HarvestHouse.ts
================================================
import Konva from 'konva'
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

const FONT_SIZE = 12

export class HarvestHouse extends Building {
protected readonly name = 'Harvest House'
protected \_type: BuildingType = BuildingType.HarvestHouse
protected \_needsParent: boolean = false
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 11, height: 11 }
protected \_opacity: number = 1
// protected \_label: Konva.Label: Konva.Label
price = {
base: 15000,
perExtraBuilding: 5000,
increaseIncrement: 5000,
increaseInterval: 2,
}

materials = {
sapwoodPlanks: 100,
stoneBricks: 35,
}

countsTowardsLimit: boolean = true

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

get buildingCountText(): Konva.Label {
// TODO: Make the 15 a global constant
const text = `${this.countableBuildings} / 15`

    const padding = 5

    const label = new Konva.Label({
      x: this._baseCoords.x - ((text.length / 2) * FONT_SIZE + (padding / 2)) / 2,
      y: this._baseCoords.y - (FONT_SIZE),
      listening: false,
      hitStrokeWidth: 0,
    })

    label.add(
      new Konva.Tag({
        fill: '#3A4A6B',
        cornerRadius: 5,
        listening: false,
        hitStrokeWidth: 0,
      }),
    )

    label.add(
      new Konva.Text({
        text,
        fontSize: FONT_SIZE,
        fontVariant: 'bold',
        fontFamily: 'Merriweather',
        fill: '#EEE3D1',
        padding,
        align: 'center',
        verticalAlign: 'middle',
        listening: false,
        hitStrokeWidth: 0,
        // shadowColor: '#000',
        // shadowOpacity: 0.2,
        // shadowBlur: 5,
        // shadowOffset: { x: 1, y: 1 },
      }),

    )

    return label

    // return new Konva.Text({
    //   x: this._baseCoords.x - (text.length / 2) * FONT_SIZE / 2,
    //   y: this._baseCoords.y - (FONT_SIZE),
    //   text,
    //   fontSize: FONT_SIZE,
    //   fontVariant: 'bold',
    //   fontFamily: 'Merriweather',
    //   fill: '#2B3750',
    //   padding: 5,
    //   align: 'center',
    //   verticalAlign: 'middle',
    //   // shadowColor: '#000',
    //   // shadowOpacity: 0.2,
    //   // shadowBlur: 5,
    //   // shadowOffset: { x: 1, y: 1 },
    // })

}

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 1,
offsetHeight: 1.5,
offsetY: 0,
zLevel: ZLevel.Large,
},
this._id,
this._gridSizing,
),
new CollisionBox(
{
...this._baseCoords,
width: 6,
height: 3,
offsetX: 0,
offsetY: 14,
},
`${this._id}porch`,
this._gridSizing,
true,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
height: 14,
offsetY: -3,
imageSrc: '/buildings/harvest-house.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}

getPrice(count: number): number {
const harvestHouseCount = count - 1

    const initialPrice = this.price.base
    const perExtraBuilding = this.price.perExtraBuilding
    const increaseIncrement = this.price.increaseIncrement
    const increaseInterval = this.price.increaseInterval

    let currentCost = initialPrice

    let priceIncrease = 0
    if (increaseIncrement > 0 && increaseInterval > 0) {
      for (let i = 1; i < harvestHouseCount; i++) {
        if (i % increaseInterval === 0)
          priceIncrease += increaseIncrement

        currentCost += (initialPrice + (perExtraBuilding + priceIncrease))
      }
    }

    if (harvestHouseCount < 1)
      return 0

    // First harvest house is free
    return currentCost

}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/KilimaCourtyard.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export default class KilimaCourtyard extends Building {
protected readonly name = 'Kilima Courtyard'
protected \_type: BuildingType = BuildingType.KilimaCourtyard
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 20, height: 23 }
protected \_opacity: number = 1
price = {
base: 20000,
perExtraBuilding: 10000,
increaseIncrement: 0,
increaseInterval: 1,
}

materials = {
sapwoodPlanks: 100,
stoneBricks: 35,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 3,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
height: 20,
width: 20,
offsetWidth: 0,
offsetHeight: 0.5,
offsetY: -3,
zLevel: ZLevel.Large,
},
this._id,
this._gridSizing,
),
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
width: 3,
height: 3,
offsetY: 20,
},
`${this._id}-hallway`,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetY: 0,
imageSrc: '/buildings/kilima-courtyard.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/KilimaDoor.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export default class KilimaDoor extends Building {
protected readonly name = 'Kilima Door'
protected \_type: BuildingType = BuildingType.KilimaDoor
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 3, height: 2 }
protected \_opacity: number = 1
protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: false,
East: false,
South: false,
West: false,
}

countsTowardsLimit: boolean = false

price = {
base: 1000,
perExtraBuilding: 100,
increaseIncrement: 50,
increaseInterval: 11,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 0,
zLevel: ZLevel.Hallway,
},
this._id,
this._gridSizing,
true,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/kilima-door.svg',
},
this.\_id,
this.\_gridSizing,
)
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/KilimaPorch.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export default class KilimaPorch extends Building {
protected readonly name: string = 'Kilima Porch'
protected \_type: BuildingType = BuildingType.KilimaPorch
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 10, height: 2 }
protected \_opacity: number = 1
protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: false,
East: false,
South: false,
West: false,
}

countsTowardsLimit: boolean = false

price = {
base: 1500,
perExtraBuilding: 100,
increaseIncrement: 100,
increaseInterval: 11,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 0,
zLevel: ZLevel.Ground,
},
this._id,
this._gridSizing,
true,
),
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: -7,
offsetHeight: 0,
offsetY: -4,
zLevel: ZLevel.Ground,
},
this._id,
this._gridSizing,
true,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/kilima-porch.svg',
offsetWidth: 0,
offsetHeight: 2,
offsetY: 2,
},
this.\_id,
this.\_gridSizing,
)
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/LargeHouse.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export class LargeHouse extends Building {
protected readonly name = 'Large Room'
protected \_type: BuildingType = BuildingType.LargeHouse
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 11, height: 11 }
protected \_opacity: number = 1
price = {
base: 10000,
perExtraBuilding: 1250,
increaseIncrement: 750,
increaseInterval: 10,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 2,
zLevel: ZLevel.Large,
},
this._id,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/large-house.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/MediumHouse.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export class MediumHouse extends Building {
protected readonly name = 'Medium Room'
protected \_type: BuildingType = BuildingType.MediumHouse
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 9, height: 9 }
protected \_opacity: number = 1
price = {
base: 8000,
perExtraBuilding: 1000,
increaseIncrement: 500,
increaseInterval: 10,
}

materials = {
sapwoodPlanks: 80,
stoneBricks: 30,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetHeight: 2,
offsetWidth: 0,
zLevel: ZLevel.Medium,
},
this._id,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/medium-house.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/NullHouse.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export class NullHouse extends Building {
protected readonly name: string = ''
protected \_type: BuildingType = BuildingType.None
protected \_needsParent: boolean = false
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 5, height: 5 }
protected \_opacity: number = 0
countsTowardsLimit: boolean = false

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
},
this._id,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}
}

================================================
FILE: assets/scripts/house-planner/classes/buildings/SmallHouse.ts
================================================
import SnapBox from '../parts/SnapBox'

import CollisionBox from '../parts/CollisionBox'
import BuildingImage from '../parts/Image'
import type Dimensions from '../../../utils/types/dimensions'
import { BuildingType } from '../../enums/buildingType'
import { Building } from '../building'
import type { GridSizing } from '../../types/ConfigOptions'
import { ZLevel } from '../../enums/zLevel'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'

export class SmallHouse extends Building {
protected readonly name = 'Small Room'
protected \_type: BuildingType = BuildingType.SmallHouse
protected \_needsParent: boolean = true
protected \_baseCoords: Coordinates = { x: 0, y: 0 }
protected \_baseRotation: number = 0
protected \_baseDimensions: Dimensions = { width: 7, height: 7 }
protected \_opacity: number = 1
price = {
base: 6000,
perExtraBuilding: 750,
increaseIncrement: 250,
increaseInterval: 10,
}

materials = {
sapwoodPlanks: 60,
stoneBricks: 22,
}

constructor(gridSizing: GridSizing) {
super(gridSizing)
}

protected \_snapBox: SnapBox = new SnapBox(
{
...this.\_baseCoords,
...this.\_baseDimensions,
offsetX: 0,
offsetY: 0,
offsetWidth: 0,
offsetHeight: 0,
},
this.\_id,
this.\_gridSizing,
)

protected \_collisionBoxes: CollisionBox[] = [
new CollisionBox(
{
...this._baseCoords,
...this._baseDimensions,
offsetWidth: 0,
offsetHeight: 1,
zLevel: ZLevel.Small,
},
this._id,
this._gridSizing,
),
]

protected \_image: BuildingImage = new BuildingImage(
{
...this.\_baseCoords,
...this.\_baseDimensions,
imageSrc: '/buildings/small-house.svg',
},
this.\_id,
this.\_gridSizing,
)

protected \_openSlots: {
North: boolean
East: boolean
South: boolean
West: boolean
} = {
North: true,
East: true,
South: false,
West: true,
}
}

================================================
FILE: assets/scripts/house-planner/classes/parts/CollisionBox.ts
================================================
import Konva from 'konva'
import uniqid from 'uniqid'
import type { GridSizing } from '../../types/ConfigOptions'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'
import type Dimensions from '@/assets/scripts/utils/types/dimensions'
import { toScale, unscale } from '@/assets/scripts/house-planner/classes/utils/helpers'
import { ZLevel } from '@/assets/scripts/house-planner/enums/zLevel'

export type CollisionBoxRect = Konva.Rect & {
id: string
}

interface Corners {
[key: string]: Coordinates
}

export default class CollisionBox {
private \_id: string
private \_baseCoords: Coordinates
private \_baseDimensions: Dimensions
private \_offsetCoords: Coordinates
private \_offsetDimensions: Dimensions
private \_rect: CollisionBoxRect
private \_rotation: number = 0
private \_gridSizing: GridSizing
readonly hide: boolean = false
readonly zLevel: ZLevel = ZLevel.Ground

constructor(
{
x, y, width, height,
offsetX = 0, offsetY = 0,
offsetWidth = 0, offsetHeight = 0,
rotation = 0, zLevel = ZLevel.Ground,
}: {
x: number
y: number
width: number
height: number
offsetX?: number
offsetY?: number
offsetWidth?: number
offsetHeight?: number
rotation?: number
zLevel?: ZLevel
},
id: string = uniqid(),
gridSizing: GridSizing,
hide: boolean = false,
) {
this.\_id = id
this.\_gridSizing = gridSizing
this.hide = hide
this.zLevel = zLevel || ZLevel.Ground

    this._baseCoords = { x, y }
    this._baseDimensions = { width: toScale(width, gridSizing), height: toScale(height, gridSizing) }
    this._offsetCoords = { x: toScale(offsetX, gridSizing), y: toScale(offsetY, gridSizing) }
    this._offsetDimensions = { width: toScale(offsetWidth, gridSizing), height: toScale(offsetHeight, gridSizing) }

    this._rect = new Konva.Rect({
      x: this._baseCoords.x,
      y: this._baseCoords.y,
      width: this._baseDimensions.width + this._offsetDimensions.width,
      height: this._baseDimensions.height + this._offsetDimensions.height,
      fill: '#3A4A6B50',
      stroke: '#3A4A6B',
      strokeWidth: 1,
      // opacity: 0.25,
      shadowEnabled: false,
      id: this._id,
      offsetX: ((this._baseDimensions.width + this._offsetDimensions.width) / 2) - (this._offsetCoords.x / 2),
      offsetY: ((this._baseDimensions.height + this._offsetDimensions.height) / 2) - (this._offsetCoords.y / 2),
      perfectDrawEnabled: false,
      hitStrokeWidth: 0,
      rotation,
    }) as CollisionBoxRect

    this._rect.cache()

}

get rect(): CollisionBoxRect {
return this.\_rect
}

get id(): string {
return this.\_id
}

updateCoords({ x, y }: Coordinates) {
this.\_baseCoords = { x, y }
this.\_rect.x = x
this.\_rect.y = y
}

isIntersectingWith(box: CollisionBox, excludeIds: string[]): boolean {
if (excludeIds.includes(box.rect.id))
return false

    const rect = getRectInfo(this._rect, this._offsetCoords)
    const boxRect = getRectInfo(box.rect, box._offsetCoords)
    const rectCorners = getCorners(this._rotation, rect)
    const otherRectCorners = getCorners(typeof box.rect.rotation === 'function' ? box.rect.rotation() : box.rect.rotation, boxRect)

    if (rectCorners.topLeft.x >= otherRectCorners.bottomRight.x || otherRectCorners.topLeft.x >= rectCorners.bottomRight.x)
      return false
    else if (rectCorners.topLeft.y >= otherRectCorners.bottomRight.y || otherRectCorners.topLeft.y >= rectCorners.bottomRight.y)
      return false

    return true

}

isCoordInside({ x, y }: Coordinates): boolean {
const rect = getRectInfo(this.\_rect, this.\_offsetCoords)

    const rectCorners: Corners = {
      topLeft: { x: (rect.x - rect.width / 2), y: (rect.y - rect.height / 2) },
      bottomRight: { x: (rect.x - rect.width / 2) + rect.width, y: (rect.y - rect.height / 2) + rect.height },
    }

    if (x < rectCorners.topLeft.x || x > rectCorners.bottomRight.x)
      return false
    else if (y < rectCorners.topLeft.y || y > rectCorners.bottomRight.y)
      return false

    return true

}

get baseCoords(): Coordinates {
return new Vector2d(this.\_baseCoords.x, this.\_baseCoords.y)
}

updateRotation(rotation: number) {
this.\_rotation = rotation
this.\_rect.rotation = rotation
// this.\_rect.rotation = (typeof this.\_rect.rotation === 'function') ? this.rect.rotation(rotation) : rotation
}

get copy(): CollisionBox {
const { x, y } = this.\_baseCoords
const width = unscale(this.\_baseDimensions.width, this.\_gridSizing)
const height = unscale(this.\_baseDimensions.height, this.\_gridSizing)
const gridSizing = { ...this.\_gridSizing }
const rotation = (typeof this.\_rect.rotation === 'function') ? this.\_rect.rotation() : this.\_rect.rotation
const offsetX = unscale(this.\_offsetCoords.x, gridSizing)
const offsetY = unscale(this.\_offsetCoords.y, gridSizing)
const offsetWidth = unscale(this.\_offsetDimensions.width, gridSizing)
const offsetHeight = unscale(this.\_offsetDimensions.height, gridSizing)

    return new CollisionBox({
      x,
      y,
      width,
      height,
      offsetX,
      offsetY,
      offsetWidth,
      offsetHeight,
      rotation,
      zLevel: this.zLevel,
    }, this._id, gridSizing, this.hide)

}
}

class Vector2d {
private \_x: number
private \_y: number

constructor(x: number, y: number) {
this.\_x = x
this.\_y = y
}

get x(): number {
return this.\_x
}

get y(): number {
return this.\_y
}
}

interface CollisionBoxRectInfo {
x: number
y: number
width: number
height: number
id: string
}

function getCorners(rotation: number, { x, y, width, height }: CollisionBoxRectInfo): Corners {
const topLeft = { x: 0, y: 0 }
const bottomRight = { x: 0, y: 0 }

const xDiff = width / 2
const yDiff = height / 2

switch (rotation) {
case 0:
case 180:
topLeft.x = x - xDiff
topLeft.y = y - yDiff
bottomRight.x = x + xDiff
bottomRight.y = y + yDiff
break
case 90:
case 270:
topLeft.x = x - yDiff
topLeft.y = y - xDiff
bottomRight.x = x + yDiff
bottomRight.y = y + xDiff
break
}

return { topLeft, bottomRight }
}

function getRectInfo(rect: CollisionBoxRect, offsetCoords: {
x: number
y: number
} = { x: 0, y: 0 }): CollisionBoxRectInfo {
const x = (typeof rect.x === 'function') ? rect.x() : rect.x
const offsetX = offsetCoords.x
const y = (typeof rect.y === 'function') ? rect.y() : rect.y
const offsetY = offsetCoords.y
const rotation = (typeof rect.rotation === 'function') ? rect.rotation() : rect.rotation
const info = {
x: x + offsetX / 2,
y: y + offsetY / 2,
width: (typeof rect.width === 'function') ? rect.width() : rect.width,
height: (typeof rect.height === 'function') ? rect.height() : rect.height,
id: rect.id,
}
switch (rotation) {
case 0:
info.x = x + offsetX / 2
info.y = y + offsetY / 2
break
case 90:
info.x = x - offsetY / 2
info.y = y - offsetX / 2
break
case 180:
info.x = x - offsetX / 2
info.y = y - offsetY / 2
break
case 270:
info.x = x + offsetY / 2
info.y = y + offsetX / 2
break
}

return info
}

================================================
FILE: assets/scripts/house-planner/classes/parts/Image.ts
================================================
import Konva from 'konva'
import uniqid from 'uniqid'
import type { GridSizing } from '../../types/ConfigOptions'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'
import type Dimensions from '@/assets/scripts/utils/types/dimensions'
import { toScale, unscale } from '@/assets/scripts/house-planner/classes/utils/helpers'

export type ImageType = Konva.Image & {
id: string
}

export default class BuildingImage {
private \_id: string
private \_baseCoords: Coordinates
private \_baseDimensions: Dimensions
private \_offsetCoords: Coordinates
private \_offsetDimensions: Dimensions
private \_rect: ImageType
private \_rotation: number = 0
private \_gridSizing: GridSizing
private \_imageSrc: string
private \_opacity: number = 0.5

constructor(
{
x, y, width, height, imageSrc,
offsetX = 0, offsetY = 0,
offsetWidth = 0, offsetHeight = 0,
}: {
x: number
y: number
width: number
height: number
imageSrc: string
offsetX?: number
offsetY?: number
offsetWidth?: number
offsetHeight?: number
},
id: string = uniqid(),
gridSizing: GridSizing,
) {
this.\_id = id
this.\_gridSizing = gridSizing

    this._baseCoords = { x, y }
    this._baseDimensions = { width: toScale(width, gridSizing), height: toScale(height, gridSizing) }
    this._offsetCoords = { x: toScale(offsetX, gridSizing), y: toScale(offsetY, gridSizing) }
    this._offsetDimensions = { width: toScale(offsetWidth, gridSizing), height: toScale(offsetHeight, gridSizing) }

    this._opacity = 1

    const image = new Image()
    image.src = imageSrc
    this._imageSrc = imageSrc
    this._rect = new Konva.Image({
      x: this._baseCoords.x,
      y: this._baseCoords.y,
      width: this._baseDimensions.width + this._offsetDimensions.width,
      height: this._baseDimensions.height + this._offsetDimensions.height,
      id: this._id,
      offsetX: (this._baseDimensions.width + this._offsetDimensions.width + this._offsetCoords.x) / 2,
      offsetY: (this._baseDimensions.height + this._offsetDimensions.height + this._offsetCoords.y) / 2,
      rotation: this._rotation,
      opacity: this.opacity,
      image,
    }) as ImageType

}

get rect(): ImageType {
return this.\_rect as ImageType
}

get opacity(): number {
return this.\_opacity
}

set opacity(opacity: number) {
this.\_rect.opacity = opacity
this.\_opacity = opacity
}

updateCoords({ x, y }: Coordinates) {
this.\_baseCoords = { x, y }

    this._rect.x = x
    this._rect.y = y

}

updateRotation(rotation: number) {
this.\_rotation = rotation
// this.\_rect.rotation(rotation)
this.\_rect.rotation = rotation
}

get copy(): BuildingImage {
const width = unscale(this.\_baseDimensions.width, this.\_gridSizing)
const height = unscale(this.\_baseDimensions.height, this.\_gridSizing)
const offsetWidth = unscale(this.\_offsetDimensions.width, this.\_gridSizing)
const offsetHeight = unscale(this.\_offsetDimensions.height, this.\_gridSizing)

    const copyImage = new BuildingImage({
      x: this._baseCoords.x,
      y: this._baseCoords.y,
      width,
      height,
      imageSrc: this._imageSrc,
      offsetX: unscale(this._offsetCoords.x, this._gridSizing),
      offsetY: unscale(this._offsetCoords.y, this._gridSizing),
      offsetWidth,
      offsetHeight,
    }, this._id, this._gridSizing)

    copyImage.updateRotation(this._rotation)

    return copyImage

}
}

================================================
FILE: assets/scripts/house-planner/classes/parts/SnapBox.ts
================================================
import Konva from 'konva'
import uniqid from 'uniqid'
import type { GridSizing } from '../../types/ConfigOptions'
import { Direction } from '../../imports'
import type Coordinates from '@/assets/scripts/utils/types/coordinates'
import type Dimensions from '@/assets/scripts/utils/types/dimensions'
import { toScale, unscale } from '@/assets/scripts/house-planner/classes/utils/helpers'

export type SnapBoxRect = Konva.Rect & {
id: string
}

interface Corners {
[key: string]: Coordinates
}

export default class SnapBox {
private \_id: string
private \_baseCoords: Coordinates
private \_baseDimensions: Dimensions
private \_offsetCoords: Coordinates
private \_offsetDimensions: Dimensions
private \_rect: SnapBoxRect
private \_rotation: number = 0
private \_gridSizing: GridSizing
private \_zIndex: number = 0

constructor(
{
x, y, width, height,
offsetX = 0, offsetY = 0,
offsetWidth = 0, offsetHeight = 0,
rotation = 0,
}: {
x: number
y: number
width: number
height: number
offsetX?: number
offsetY?: number
offsetWidth?: number
offsetHeight?: number
rotation?: number
},
id: string = uniqid(),
gridSizing: GridSizing,
) {
this.\_id = id
this.\_gridSizing = gridSizing

    this._baseCoords = { x, y }
    this._baseDimensions = { width: toScale(width, gridSizing), height: toScale(height, gridSizing) }
    this._offsetCoords = { x: toScale(offsetX, gridSizing), y: toScale(offsetY, gridSizing) }
    this._offsetDimensions = { width: toScale(offsetWidth, gridSizing), height: toScale(offsetHeight, gridSizing) }

    this._rect = new Konva.Rect({
      x: this._baseCoords.x,
      y: this._baseCoords.y,
      width: this._baseDimensions.width + this._offsetDimensions.width,
      height: this._baseDimensions.height + this._offsetDimensions.height,
      stroke: 'rgba(0, 0, 0, 10)',
      dash: [10, 10],
      strokeWidth: 1,
      id: this._id,

      shadowEnabled: false,
      offsetX: toScale((width + offsetWidth) / 2, gridSizing),
      offsetY: toScale((height + offsetHeight) / 2, gridSizing),
      perfectDrawEnabled: false,
      rotation,
      hitStrokeWidth: 0,
      listening: false,
    }) as SnapBoxRect

    this._rect.cache()

}

get rect(): SnapBoxRect {
return this.\_rect
}

updateCoords({ x, y }: Coordinates) {
this.\_baseCoords = { x, y }
this.\_rect.x = x
this.\_rect.y = y
}

updateRotation(rotation: number) {
this.\_rotation = rotation
this.\_rect.rotation = rotation
}

getCoords(direction: Direction): Coordinates {
const { x, y } = this.\_baseCoords
let { width, height } = this.\_baseDimensions
let offsetX = this.\_offsetCoords.x / 2
let offsetY = this.\_offsetCoords.y / 2

    if (width !== height) {
      switch (this._rotation) {
        case 90:
          width = this._baseDimensions.height
          height = this._baseDimensions.width
          offsetX = this._offsetCoords.y / 2 * -1
          offsetY = this._offsetCoords.x / 2 * -1
          break
        case 180:
          offsetX = this._offsetCoords.x / 2 * -1
          offsetY = this._offsetCoords.y / 2 * -1
          break
        case 270:
          width = this._baseDimensions.height
          height = this._baseDimensions.width
          offsetX = this._offsetCoords.y / 2
          offsetY = this._offsetCoords.x / 2
          break
      }

      // track where the north is based on the rotation
      let northRotation = Direction.North

      switch (this._rotation) {
        case 90:
          northRotation = Direction.East
          break
        case 180:
          northRotation = Direction.South
          break
        case 270:
          northRotation = Direction.West
          break
      }

      switch (direction) {
        case Direction.North:
          return {
            x: (x - (offsetX - (northRotation === Direction.North ? offsetX : 0))),
            y: ((y - (offsetY - (northRotation === Direction.North ? offsetY : 0))) - (height / 2)),
          }
        case Direction.East:
          return {
            x: (x - (offsetX - (northRotation === Direction.East ? offsetX : 0))) + (width / 2),
            y: (y - (offsetY - (northRotation === Direction.East ? offsetY : 0))),
          }
        case Direction.South:
          return {
            x: (x - (offsetX - (northRotation === Direction.South ? offsetX : 0))),
            y: (y - (offsetY - (northRotation === Direction.South ? offsetY : 0))) + (height / 2),
          }
        case Direction.West:
          // return {
          //   x: (x - offsetX) - (width / 2),
          //   y: (y - offsetY),
          // }
          return {
            x: (x - (offsetX - (northRotation === Direction.West ? offsetX : 0))) - (width / 2),
            y: (y - (offsetY - (northRotation === Direction.West ? offsetY : 0))),
          }
      }
    }
    else {
      switch (direction) {
        case Direction.North:
          return {
            x: (x - offsetX),
            y: (y - (height / 2)),
          }
        case Direction.East:
          return {
            x: (x - offsetX) + (width / 2),
            y: (y - offsetY),
          }
        case Direction.South:
          return {
            x: (x - offsetX),
            y: (y - offsetY) + (height / 2),
          }
        case Direction.West:
          return {
            x: (x - offsetX) - (width / 2),
            y: (y - offsetY),
          }
      }
    }

}

get x(): number {
return this.\_rect.x()
}

get y(): number {
return this.\_rect.y()
}

get copy(): SnapBox {
const width = unscale(this.\_baseDimensions.width, this.\_gridSizing)
const height = unscale(this.\_baseDimensions.height, this.\_gridSizing)
const offsetWidth = unscale(this.\_offsetDimensions.width, this.\_gridSizing)
const offsetHeight = unscale(this.\_offsetDimensions.height, this.\_gridSizing)
const offsetX = unscale(this.\_offsetCoords.x, this.\_gridSizing)
const offsetY = unscale(this.\_offsetCoords.y, this.\_gridSizing)

    return new SnapBox(
      {
        x: this._baseCoords.x,
        y: this._baseCoords.y,
        width,
        height,
        offsetX,
        offsetY,
        offsetWidth,
        offsetHeight,
        rotation: this._rotation,
      },
      this._id,
      this._gridSizing,
    )

}

isIntersectingWith(box: SnapBox, excludeIds: string[]): boolean {
if (excludeIds.includes(box.rect.id))
return false

    const rect = getRectInfo(this._rect)
    const boxRect = getRectInfo(box.rect)
    const rectCorners = getCorners(this._rotation, rect)
    const otherRectCorners = getCorners(typeof box.rect.rotation === 'function' ? box.rect.rotation() : box.rect.rotation, boxRect)

    if (rectCorners.topLeft.x >= otherRectCorners.bottomRight.x || otherRectCorners.topLeft.x >= rectCorners.bottomRight.x)
      return false
    else if (rectCorners.topLeft.y >= otherRectCorners.bottomRight.y || otherRectCorners.topLeft.y >= rectCorners.bottomRight.y)
      return false

    return true

}
}

interface SnapBoxRectInfo {
x: number
y: number
width: number
height: number
id: string
}

function getCorners(rotation: number, { x, y, width, height }: SnapBoxRectInfo): Corners {
const topLeft = { x: 0, y: 0 }
const bottomRight = { x: 0, y: 0 }

const xDiff = width / 2
const yDiff = height / 2

switch (rotation) {
case 0:
case 180:
topLeft.x = x - xDiff
topLeft.y = y - yDiff
bottomRight.x = x + xDiff
bottomRight.y = y + yDiff
break
case 90:
case 270:
topLeft.x = x - yDiff
topLeft.y = y - xDiff
bottomRight.x = x + yDiff
bottomRight.y = y + xDiff
break
}

return { topLeft, bottomRight }
}

function getRectInfo(rect: SnapBoxRect, offsetCoords: {
x: number
y: number
} = { x: 0, y: 0 }): SnapBoxRectInfo {
const x = (typeof rect.x === 'function') ? rect.x() : rect.x
const offsetX = offsetCoords.x
const y = (typeof rect.y === 'function') ? rect.y() : rect.y
const offsetY = offsetCoords.y
const rotation = (typeof rect.rotation === 'function') ? rect.rotation() : rect.rotation
const info = {
x: x + offsetX / 2,
y: y + offsetY / 2,
width: (typeof rect.width === 'function') ? rect.width() : rect.width,
height: (typeof rect.height === 'function') ? rect.height() : rect.height,
id: rect.id,
}
switch (rotation) {
case 0:
info.x = x + offsetX / 2
info.y = y + offsetY / 2
break
case 90:
info.x = x - offsetY / 2
info.y = y - offsetX / 2
break
case 180:
info.x = x - offsetX / 2
info.y = y - offsetY / 2
break
case 270:
info.x = x + offsetY / 2
info.y = y + offsetX / 2
break
}

return info
}

================================================
FILE: assets/scripts/house-planner/classes/utils/helpers.ts
================================================
import type { GridSizing } from '../../types/ConfigOptions'
import { Direction } from '@/assets/scripts/utils/imports'

// Helper functions for rotating buildings
// Directions is North, East, South, West
// if rotation is 90, North becomes East, East becomes South, etc.
export function shiftDirectionByRotation(direction: Direction, rotation: number) {
const directions = [Direction.North, Direction.East, Direction.South, Direction.West]
const index = directions.indexOf(direction as Direction)
const newIndex = (index + (rotation / 90)) % 4

return directions[newIndex]
}

export function toScale(value: number, gridSizing: GridSizing) {
return value _ gridSizing.cellSize _ gridSizing.sizeMultiplier
}

export function unscale(value: number, gridSizing: GridSizing) {
return value / gridSizing.cellSize / gridSizing.sizeMultiplier
}

================================================
FILE: assets/scripts/house-planner/enums/buildingType.ts
================================================
export enum BuildingType {
HarvestHouse = 'HarvestHouse',
SmallHouse = 'SmallHouse',
MediumHouse = 'MediumHouse',
LargeHouse = 'LargeHouse',
Hallway = 'Hallway',
Fireplace = 'Fireplace',
KilimaPorch = 'KilimaPorch',
KilimaDoor = 'KilimaDoor',
BayWindow = 'BayWindow',
KilimaCourtyard = 'KilimaCourtyard',
None = 'None',
}

================================================
FILE: assets/scripts/house-planner/enums/zLevel.ts
================================================
export enum ZLevel {
Ground = 'Ground',
Hallway = 'Hallway',
Small = 'Small',
Medium = 'Medium',
Large = 'Large',
}

================================================
FILE: assets/scripts/house-planner/types/BuildingData.ts
================================================

================================================
FILE: assets/scripts/house-planner/types/ConfigOptions.ts
================================================
export interface GridSizing {
cellSize: number
sizeMultiplier: number
}

================================================
FILE: assets/scripts/utils/imports.ts
================================================
import Direction from './enums/direction'

export {
Direction,
}

================================================
FILE: assets/scripts/utils/enums/direction.ts
================================================
enum Direction {
North = 'North',
South = 'South',
East = 'East',
West = 'West',
}

export default Direction

================================================
FILE: assets/scripts/utils/types/coordinates.ts
================================================
interface Coordinates {
x: number
y: number
}

export default Coordinates

================================================
FILE: assets/scripts/utils/types/dimensions.ts
================================================
interface Dimensions {
width: number
height: number
}

export default Dimensions

================================================
FILE: components/AppDivider.vue
================================================
<template>

  <div class="flex justify-between gap-0 items-center relative " :aria-hidden="true">
    <div class="absolute left-0">
      <img
        class="w-auto h-3"
        format="webp"
        src="/ui/separator-start.svg"
        alt="Separator Start"
        aria-hidden
        :srcset="undefined"
      >
    </div>
    <div class="divider m-0 before:bg-misc after:bg-misc before:h-[1px] after:h-[1px] w-full px-[2px]" />
    <div class="absolute right-0">
      <img
        class="w-auto h-3"
        format="webp"
        src="/ui/separator-end.svg"
        alt="Separator End"
        aria-hidden
        :srcset="undefined"
      >
    </div>
  </div>
</template>

================================================
FILE: components/AppDividerAlt.vue
================================================
<template>

  <div class="relative flex items-center justify-between gap-0 mx-2 ">
    <div class="absolute left-0">
      <img
        class="w-3 h-3"
        format="webp"
        src="/ui/separator-alt-start.svg"
        alt="Separator Start"
        aria-hidden
      >
    </div>
    <div class="divider m-0 before:bg-accent after:bg-accent w-full px-[2px]" />
    <div class="absolute right-0">
      <img
        class="w-3 h-3"
        format="webp"
        src="/ui/separator-alt-end.svg"
        alt="Separator End"
        aria-hidden
        preload
      >
    </div>
  </div>
</template>

================================================
FILE: components/ChangelogItem.vue
================================================

<script setup lang="ts">
defineProps({
  checked: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <article class="collapse collapse-arrow max-w-3xl py-1 bg-palia-blue-dark text-accent rounded-md  border-[1px] border-opacity-50 border-accent">
    <input type="checkbox" name="changelog" :checked="checked">
    <h2 class="text-xl collapse-title">
      <slot name="title" required>
        Title missing
      </slot>
    </h2>
    <div class="flex flex-col gap-4 text-sm leading-6 collapse-content md:text-base">
      <div class="grid gap-2 p-4 px-6 rounded-lg bg-palia-blue">
        <h3 class="text-lg font-bold">
          Changes Summary
        </h3>
        <ul class="list-disc list-inside">
          <slot name="summary" required>
            <li>Summary missing</li>
          </slot>
        </ul>
      </div>
      <div class="flex flex-col gap-2 font-light">
        <slot />
      </div>
    </div>
  </article>
</template>

================================================
FILE: components/CoverageStat.vue
================================================

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  totalCrops: {
    type: Number,
    required: true,
  },
  covered: {
    type: Number,
    required: true,
  },
  color: String,
})

const percent = computed(() => {
  if (props.totalCrops === 0)
    return '--value:0'

  return `--value:${(props.covered / props.totalCrops) * 100}`
})

const percentString = computed(() => {
  if (props.totalCrops === 0)
    return '0'

  return `${((props.covered / props.totalCrops) * 100).toFixed(0)}`
})
</script>

<template>
  <div class="coverage-stat flex flex-col items-center  gap-[1px] group relative">
    <div
      class="radial-progress bg-secondary hover:bg-accent"
      :style="[percent, '--size: clamp(8px, 3.7rem, 17vw)']"
    >
      <div class="relative flex flex-col gap-[0px] pt-1">
        <div class="flex flex-col items-center justify-center text">
          <slot name="icon" />
        </div>
        <div class="flex flex-col items-center justify-center text-sm font-bold text-center">
          <p class="flex items-center gap-[1px]">
            {{ percentString }}
          </p>
        </div>
      </div>
    </div>
    <div class="capitalise font-semibold max-w-[8ch] text-palia-blue text-xs h-fit text-center break-words align-top flex items-start pt-[2px]">
      <slot name="title">
        Title missing
      </slot>
    </div>
  </div>
</template>

================================================
FILE: components/CreditName.vue
================================================
<template>

  <article class="card card-compact bg-palia-blue-dark rounded-md px-2 w-full max-w-xs">
    <div class="card-body text-center items-center">
      <p class="card-title">
        <slot name="name" />
      </p>
      <p>
        <slot name="for" />
      </p>
    </div>
  </article>
</template>

================================================
FILE: components/CropButton.vue
================================================

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import { useDragAndDrop } from '@/stores/useDragAndDrop'
import { Bonus, Crop, CropType } from '@/assets/scripts/garden-planner/imports'

const props = defineProps({
  crop: {
    type: Crop || null,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

const { get: isTakingScreenshot } = storeToRefs(useTakingScreenshot())
const tooltip = computed(() => {
  return props.crop.cropTooltip
})

const bonus = computed(() => {
  switch (props.crop.cropBonus) {
    case Bonus.WaterRetain:
      return {
        icon: 'droplet',
        colour: 'text-water-retain',
      }
    case Bonus.QualityIncrease:
      return {
        icon: 'star',
        colour: 'text-quality-increase',
      }
    case Bonus.HarvestIncrease:
      return {
        icon: 'wheat-awn',
        colour: 'text-harvest-boost',
      }
    case Bonus.WeedPrevention:
      return {
        icon: 'shield',
        colour: 'text-weed-prevention',
      }
    case Bonus.SpeedIncrease:
      return {
        icon: 'forward-fast',
        colour: 'text-growth-boost',
      }
    default:
      return {
        icon: '',
        colour: 'text-misc',
      }
  }
})

const dragHandler = useDragAndDrop()
</script>

<template>
  <button
    v-if="!(crop.type === CropType.None) && !(isTakingScreenshot && count === 0)"
    draggable="true" class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc"
    :class="(isSelected && !isTakingScreenshot) ? 'bg-white' : ''" :name="`select ${crop.type}`"
    @dragstart="(e: DragEvent) => dragHandler.startDrag(crop.type)"
    @dragend="(e: DragEvent) => dragHandler.stopDrag()"
  >
    <font-awesome-icon
      v-if="bonus.icon !== ''" class="absolute top-0 left-0 p-1 text-xs leading-0 stroke-black"
      :icon="['fas', bonus.icon]" :class="bonus.colour"
    />
    <p v-if="count > 0" class="absolute bottom-0 right-0 py-[0.2rem] pr-[0.2rem] text-xs leading-none font-bold text-palia-blue">
      {{ count }}
    </p>
    <img
      v-if="(crop && crop.image != null && crop.image !== '')"
      class="absolute -z-10 max-w-[28px] "
      draggable="false"
      :src="crop.cropImage"
      :class="(crop.type === crop.type) ? 'opacity-100' : 'opacity-90'"
      :alt="crop.type"
    >
    <font-awesome-icon v-else class="absolute -z-10 max-w-[45px] text-warning text-3xl " :icon="['fas', 'eraser']" />
  </button>
</template>

================================================
FILE: components/CropDetailButton.vue
================================================

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import { useDragAndDrop } from '@/stores/useDragAndDrop'
import { Bonus, Crop, CropType } from '@/assets/scripts/garden-planner/imports'
import { parseCropId } from '~/assets/scripts/garden-planner/utils/garden-helpers'

const props = defineProps({
  crop: {
    type: Crop || null,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
  cropId: {
    type: String,
    required: true,
  }
})

const { get: isTakingScreenshot } = storeToRefs(useTakingScreenshot())

const bonus = computed(() => {
  switch (props.crop.cropBonus) {
    case Bonus.WaterRetain:
      return {
        icon: 'droplet',
        colour: 'text-water-retain',
      }
    case Bonus.QualityIncrease:
      return {
        icon: 'star',
        colour: 'text-quality-increase',
      }
    case Bonus.HarvestIncrease:
      return {
        icon: 'wheat-awn',
        colour: 'text-harvest-boost',
      }
    case Bonus.WeedPrevention:
      return {
        icon: 'shield',
        colour: 'text-weed-prevention',
      }
    case Bonus.SpeedIncrease:
      return {
        icon: 'forward-fast',
        colour: 'text-growth-boost',
      }
    default:
      return {
        icon: '',
        colour: 'text-misc',
      }
  }
})

const dragHandler = useDragAndDrop()
</script>

<template>
  <button v-if="!(crop.type === CropType.None) && !(isTakingScreenshot && count === 0)" draggable="true"
    class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc"
    :class="(isSelected && !isTakingScreenshot) ? 'bg-white' : ''" :name="`select ${crop.type}`"
    @dragstart="(e: DragEvent) => dragHandler.startDrag(crop.type)" @dragend="(e: DragEvent) => dragHandler.stopDrag()"
    :aria-label="`Crop ${crop.type} ${count > 0 ? `, ${count}` : ''}`">
    <font-awesome-icon v-if="parseCropId(cropId).hasGrowthBoost"
      class="absolute bottom-0 right-0 p-1 text-xs leading-0 stroke-black text-growth-boost"
      :icon="['fas', 'forward-fast']" />
    <font-awesome-icon v-if="parseCropId(cropId).isStar"
      class="absolute bottom-0 left-0 p-1 text-xs leading-0 stroke-black  text-quality-increase-dark"
      :icon="['fas', 'star']" />
    <p v-if="count > 0"
      class="absolute top-0 right-0 pt-0.25 pr-0.5 text-xs leading-none font-bold text-palia-blue">
      {{ count }}
    </p>
    <img v-if="(crop && crop.image != null && crop.image !== '')" class="absolute -z-10 max-w-[26px] " draggable="false"
      :src="crop.cropImage" :class="(crop.type === crop.type) ? 'opacity-100' : 'opacity-90'" :alt="crop.type">
    <font-awesome-icon v-else class="absolute -z-10 max-w-[45px] text-warning text-3xl " :icon="['fas', 'eraser']" />
  </button>
</template>

================================================
FILE: components/CropTile.vue
================================================

<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { Bonus, Crop, Fertiliser, Tile, getCodeFromCrop } from '@/assets/scripts/garden-planner/imports'
import { useUiSettings } from '@/stores/useUiSettings'


const uiSettings = useUiSettings()

import { SelectedItemType, useSelectedItem, type SelectedItem } from '@/stores/useSelectedItem'

const props = defineProps({
  tile: Tile,
  isDisabled: {
    type: Boolean,
    default: false,
  },
  bonusHovered: {
    type: String as PropType<Bonus | null>,
    default: null,
    required: false,
  },
  isAlt: {
    type: Boolean,
    default: false,
    required: false,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const selectedItem = useSelectedItem()
const code = computed(() => {
  if (props.tile?.crop === null)
    return ' '

  return getCodeFromCrop(props.tile?.crop as Crop)
})

const bonuses = computed(() => {
  if (props.tile === null || props.tile === undefined)
    return []

  return props.tile.bonuses
})

const bgColour = computed(() => {
  return `${props.tile?.crop?.cropBackgroundColor}` || ''
})

const TILE_HIGHLIGHT_STYLE = 'opacity-100 bg-white'
const TILE_NO_HIGHLIGHT_STYLE = ''
// Highlights tile if it has the bonus being hovered
const tileHighlightBgStyle = computed(() => {
  if ((props.tile?.bonuses.includes(props.bonusHovered as Bonus)))
    return TILE_HIGHLIGHT_STYLE

  const hoveredItem = selectedItem.hoverVal

  if (hoveredItem) {
    switch (selectedItem.hoverType) {
      case SelectedItemType.Crop:
        return ((hoveredItem as Crop).type === props.tile?.crop?.type) ? TILE_HIGHLIGHT_STYLE : TILE_NO_HIGHLIGHT_STYLE
      case SelectedItemType.Fertiliser:
        return ((hoveredItem as Fertiliser).effect === props.tile?.fertiliser?.effect) ? TILE_HIGHLIGHT_STYLE : TILE_NO_HIGHLIGHT_STYLE
      default:
        return TILE_NO_HIGHLIGHT_STYLE
    }
  }

  return TILE_NO_HIGHLIGHT_STYLE
})

// based on 1-9, decide border corner radius
const borderRadius = computed(() => {
  if (props.index === 1)
    return 'rounded-tl-lg'
  if (props.index === 3)
    return 'rounded-tr-lg'
  if (props.index === 7)
    return 'rounded-bl-lg'
  if (props.index === 9)
    return 'rounded-br-lg'

  return ''
})

// based on 1-9, decide whether a border is needed
const border = computed(() => {
  let style = ''

  switch (props.index) {
    case 1:
      style += 'border-t border-l border-t-[1px]'
      break
    case 2:
      style += 'border-t border-t-[1px] border-l'
      break
    case 3:
      style += 'border-t border-t-[1px] border-r border-l'
      break
    case 4:
      style += 'border-l border-t-[1px] border-l'
      break
    case 5:
      style += 'border-t-[1px] border-l border-t'
      break
    case 6:
      style += 'border-r border-l border-t-[1px] border-r-[1px]'
      break
    case 7:
      style += ' border-b border-l border-t'
      break
    case 8:
      style += 'border-b border-l border-b-[1px] border-t'
      break
    case 9:
      style += 'border-b border-l border-l-[1px] border-r border-b-[1px] border-t'
      break
    default:
      break
  }

  return style
})

const showBonusBackground = computed(() => uiSettings.settings.cropTile.showBonusBackground)
const showBonusIcons = computed(() => uiSettings.settings.cropTile.showBonusIcons)

</script>

<template>
  <button
    class="border-misc-saturated relative select-none min-w-[3rem] xl:min-w-[3.25rem] hover:bg-primary aspect-square cursor-pointer flex flex-col overflow-hidden isolate items-center justify-center"
    :class="[(isDisabled ? 'invisible' : ''),
      border,
      borderRadius,
    (tile?.isHovered ? 'bg-primary' : ' bg-secondary'),
    ]" :aria-label="tile?.crop ? `Tile with ${tile.crop.cropTooltip}` : 'Empty Tile'">
    <div v-show="showBonusBackground" class="absolute w-full h-full -z-10" :class="bgColour" />
    <div class="font-bold uppercase select-none lg:text-3xl">
      <img v-if="(selectedItem.val instanceof Crop && tile?.isHovered)" format="webp" draggable="false"
        class="select-none p-1 max-w-[38px] md:max-w-[36px] 2xl:max-w-[38px] opacity-50" :src="selectedItem.val.image"
        :srcset="undefined" :alt="selectedItem.val.type">
      <img v-else-if="(tile?.crop?.image && tile?.crop?.image.length > 0)" width="48px" height="48px" format="webp"
        draggable="false" class="select-none p-1 max-w-[36px] md:max-w-[36px] 2xl:max-w-[38px]" :src="tile?.crop?.image"
        :srcset="undefined" :alt="tile?.crop?.type">
      <div v-else>{{ code as string || 'Empty Tile' }}</div>
    </div>
    <ul v-show="showBonusIcons"
      class="absolute top-0 left-0 m-0 text-[9px] md:text-[0.5rem] xl:py-[1px] flex w-full gap-[0.6px] xl:gap-[1.3px] justify-center ">
      <li class="sr-only">
        Crop Buffs
      </li>
      <li v-show="bonuses?.includes(Bonus.SpeedIncrease)" :aria-hidden="bonuses?.includes(Bonus.SpeedIncrease)"
        aria-label="Speed Increase">
        <font-awesome-icon class="text-growth-boost" :icon="['fas', 'forward-fast']" aria-hidden="true" />
      </li>
      <li v-show="bonuses?.includes(Bonus.HarvestIncrease)" :aria-hidden="bonuses?.includes(Bonus.HarvestIncrease)"
        aria-label="Harvest Increase">
        <font-awesome-icon class="text-harvest-boost-dark" :icon="['fas', 'wheat-awn']" aria-hidden="true" />
      </li>
      <li v-show="bonuses?.includes(Bonus.QualityIncrease)" :aria-hidden="bonuses?.includes(Bonus.QualityIncrease)"
        aria-label="Quality Increase">
        <font-awesome-icon class="text-quality-increase-dark" :icon="['fas', 'star']" aria-hidden="true" />
      </li>
      <li v-show="bonuses?.includes(Bonus.WaterRetain)" :aria-hidden="bonuses?.includes(Bonus.WaterRetain)"
        aria-label="Water Retain">
        <font-awesome-icon class="text-water-retain" :icon="['fas', 'droplet']" aria-hidden="true" />
      </li>
      <li v-show="bonuses?.includes(Bonus.WeedPrevention)" :aria-hidden="bonuses?.includes(Bonus.WeedPrevention)"
        aria-label="Weed Prevention">
        <font-awesome-icon class="text-weed-prevention" :icon="['fas', 'shield']" aria-hidden="true" />
      </li>
    </ul>
    <div class="absolute bottom-0 right-0 p-[2px]">
      <img v-if="(selectedItem.val instanceof Fertiliser && tile?.isHovered)" :src="selectedItem.val.image"
        draggable="false" class="select-none max-w-[16px] opacity-50" :srcset="undefined"
        :alt="selectedItem.val.effect">
      <img v-else-if="tile?.fertiliser?.image && tile.fertiliser.image.length > 0" format="webp" draggable="false"
        class="select-none max-w-[16px]" :src="tile?.fertiliser?.image" :srcset="undefined"
        :alt="tile?.fertiliser?.effect">
    </div>
    <div class="absolute w-full h-full transition-all -z-20" :class="tileHighlightBgStyle" />
  </button>
</template>

================================================
FILE: components/FertiliserButton.vue
================================================

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import { Bonus, Fertiliser, FertiliserType } from '@/assets/scripts/garden-planner/imports'
import { useDragAndDrop } from '@/stores/useDragAndDrop'

const props = defineProps({
  fertiliser: {
    type: Fertiliser || null || undefined,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

const { get: isTakingScreenshot } = storeToRefs(useTakingScreenshot())

const bonus = computed(() => {
  switch (props.fertiliser.effect) {
    case Bonus.WaterRetain:
      return {
        icon: 'droplet',
        colour: 'text-water-retain',
      }
    case Bonus.QualityIncrease:
      return {
        icon: 'star',
        colour: 'text-quality-increase',
      }
    case Bonus.HarvestIncrease:
      return {
        icon: 'wheat-awn',
        colour: 'text-harvest-boost',
      }
    case Bonus.WeedPrevention:
      return {
        icon: 'shield',
        colour: 'text-weed-prevention',
      }
    case Bonus.SpeedIncrease:
      return {
        icon: 'forward-fast',
        colour: 'text-growth-boost',
      }
    default:
      return {
        icon: '',
        colour: 'text-misc',
      }
  }
})

const dragHandler = useDragAndDrop()
</script>

<template>
  <button v-if="!(fertiliser.type === FertiliserType.None) && !(isTakingScreenshot && count === 0)" draggable="true"
    class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc"
    :class="(isSelected && !isTakingScreenshot) ? 'bg-white' : ''"
    @dragstart="(e: DragEvent) => dragHandler.startDrag(fertiliser.type)"
    @dragend="(e: DragEvent) => dragHandler.stopDrag()">
    <font-awesome-icon v-if="bonus.icon !== ''" class="absolute top-0 left-0 p-1 text-xs leading-0 stroke-black"
      :icon="['fas', bonus.icon]" :class="bonus.colour" />
    <p v-if="count > 0" class="absolute bottom-0 right-0 py-[0.1rem] pr-[0.2rem] text-xs leading-none font-bold text-palia-blue-dark">
      {{ count }}
    </p>
    <img v-if="(fertiliser && fertiliser.image != null && fertiliser.image !== '')" v-once width="30" height="30"
      class="absolute -z-10 max-w-[30px] pointer-events-none" :src="fertiliser.image"
      :class="(fertiliser.type === fertiliser.type) ? 'opacity-100' : 'opacity-90'" :alt="fertiliser.type"
      :srcset="undefined" draggable="false" />
    <font-awesome-icon v-else class="absolute -z-10 max-w-[34px] text-warning text-3xl " :icon="['fas', 'eraser']" />
  </button>
</template>

================================================
FILE: components/GardenPlanner.vue
================================================

<script setup lang="ts">
import NewGardenDisplay from './garden-planner/NewGardenDisplay.vue'
import NewStatsDisplay from './garden-planner/NewStatsDisplay.vue'
import OutputDisplay from './garden-planner/OutputDisplay.vue'
import ItemSelector from '~/components/garden-planner/ItemSelector/ItemSelector.vue'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import useGarden from '~/stores/useGarden'
import { storeToRefs } from 'pinia'
import useHarvester from '~/stores/useHarvester'
import type { TUniqueTiles } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import { useSettingsCode } from '~/stores/useSettingsCode'
import { ItemType } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import { getCropFromType } from '~/assets/scripts/garden-planner/imports'

import { usePlannerDisplayConfig } from '~/stores/usePlannerDisplayConfig'

const display = ref<HTMLElement | null>(null)
const isTakingScreenshot = useTakingScreenshot()
const gardenHandler = useGarden()
const harvester = useHarvester()
const processor = useProcessor()
const plannerDisplayConfig = usePlannerDisplayConfig()


watchEffect(() => {
  gardenHandler.update()
  harvester.harvester.simulateYield(gardenHandler.garden.uniqueTiles as TUniqueTiles, harvester.settings)
  processor.simulateProcessing(harvester.totalHarvest)
})

const garden = useGarden()
const settingsCode = useSettingsCode()
const saveCode = useSaveCode()


const starBaseChance = ref(0.25 + (harvester.settings.useStarSeeds ? 0.25 : 0) + (harvester.settings.level * 0.02))

watchEffect(() => {
  if (harvester.settings.level < 0)
    harvester.settings.level = 0

  starBaseChance.value = 0.25 + (harvester.settings.useStarSeeds ? 0.25 : 0) + (harvester.settings.level * 0.02)

  starBaseChance.value = Math.min(1, starBaseChance.value)

  if (harvester.settings.days === 'L')
    harvester.settings.days = -1
  else if (harvester.settings.days === 'M')
    harvester.settings.days = 0
  else if (harvester.settings.days < -1)
    harvester.settings.days = -1

  harvester.updateSettings({ ...harvester.settings })
})


function saveGarden() {
  const saveString = garden.garden.saveSettings(harvester.settings, processor.settings)
  settingsCode.set(saveString)
}

function loadGarden(saveString: string) {
  const { harvesterOptions, processorSettings: loadedProcessorSettings } = garden.garden.loadSettings(saveString)

  harvester.updateSettings(Object.assign({}, harvesterOptions))
  processor.updateSettings(Object.assign({}, loadedProcessorSettings))
  processor.simulateProcessing(harvester.totalHarvest)
}


watchEffect(() => {
  // set all isActive to false
  for (const setting of processor.settings.cropSettings.values())
    setting.isActive = false

  for (const [cropId, data] of harvester.totalHarvest.crops) {
    const cropSetting = processor.settings.cropSettings.get(cropId) ?? {
      count: data.totalWithDeductions,
      cropType: data.cropType,
      isStar: data.isStar,
      processAs: ItemType.Crop,
      crafters: 1,
      targetTime: 0,
      isActive: true,
      hasPreserve: (getCropFromType(data.cropType)?.conversionInfo.preserveProcessMinutes || 0) > 0,
    }

    cropSetting.count = data.totalWithDeductions

    processor.settings.cropSettings.set(cropId, cropSetting)

    processor.settings.cropSettings.get(cropId)!.isActive = true
  }

  saveGarden()
})

const { updateIsRequested } = storeToRefs(settingsCode)

watch(updateIsRequested, () => {
  if (updateIsRequested.value) {
    loadGarden(settingsCode.code)
    settingsCode.resetUpdateRequest()
  }
})

</script>

<template>
  <section ref="display" id="garden-planner" class="@container">
    <div class="sm:py-1 rounded-t-md sm:px-2 bg-accent">
      <ItemSelector />
      <AppDivider class="order-3 mx-4 my-1 @:col-span-7 " :class="[isTakingScreenshot.get ? 'col-span-7' : '']" />
      <section class="flex @sm:py-2 gap-y-2 justify-between"
        :class="{ '@5xl:flex-row': !garden.isGardenWide && (!isTakingScreenshot.get), 'flex-col': !isTakingScreenshot.get || (!isTakingScreenshot.get && garden.isGardenWide) }">
        <section class="h-full" :class="[gardenHandler.isGardenWide ? 'flex flex-col items-center pb-2' : '',
        (plannerDisplayConfig.get === 'display+display') ? 'w-full' : ''
        ]">
          <template v-if="(plannerDisplayConfig.get === 'garden+display')">
            <NewGardenDisplay />
            <NewStatsDisplay class="pt-2 @sm:mx-auto @xs:px-2 w-fit "
              :class="[gardenHandler.isGardenWide ? 'w-fit' : '@lg:w-full']" />
          </template>
          <template v-if="(plannerDisplayConfig.get === 'display+display')">
            <section class="w-full">
              <div class="h-full @sm:rounded-lg bg-primary">
                <OutputDisplay />
              </div>
            </section>
          </template>
        </section>
        <section class="w-full sm:px-2">
          <div class="h-full sm:rounded-lg bg-primary">
            <OutputDisplay is-main-output-display />
          </div>
        </section>
      </section>
    </div>
    <div v-if="isTakingScreenshot.get" id="watermark" aria-label="hidden"
      class="grid grid-cols-2 justify-between order-8 w-full px-4 lg:col-span-4 bg-palia-blue" :class="[]">
      <div class="flex items-center w-full gap-2 p-2 text-right rounded-md leading-1">
        <img format="webp" src="/logo.webp" width="48px" height="48px" class="max-w-[4rem]" alt="Palia Garden Planner Logo">
        <div class="flex flex-col items-start justify-start w-full text-left text-primary flex-nowrap ws-nowrap">
          <p class="w-full text-2xl font-bold">
            Palia Garden Planner
          </p>
          <p class="py-2 flex-nowrap ws-nowrap">
            https://palia-garden-planner.vercel.app
          </p>
        </div>
      </div>
      <div class="flex items-end p-2 text-accent">
        <p class="text-xs text-right opacity-40">{{ saveCode.code }}</p>
      </div>
    </div>
  </section>
</template>

================================================
FILE: components/GuideCard.vue
================================================
<template>

  <div class="grid md:grid-cols-3 items-center gap-2 px-2 text-center lg:px-12 max-w-[1680px]">
    <NuxtLink to="https://docs.google.com/document/d/1bjqQGwzhW7wsIpSDoO3xCMwqbX7ZbsdsuuXmPEXCrjE/" target="_blank"
      :prefetch="false"
      class="flex items-center justify-center w-full gap-1 p-4 normal-case rounded-lg bg-opacity-70 bg-op md:col-span-2 md:p-2 h-fit btn bg-palia-blue-dark hover:border-none hover:bg-primary hover:text-palia-blue-dark">
      <!-- <font-awesome-icon :icon="['fas', 'book-open']" class="mr-1 text-lg" /> -->

      <font-awesome-icon :icon="['fas', 'book-open']" class="mr-1 text-lg" />
      <p class="items-center gap-2 text-sm font-semibold break-words md:text-base md:flex">
        Shepp Arenvanya's Guide to Gardening
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-1 text-xs opacity-50" />
      </p>
    </NuxtLink>
    <NuxtLink to="https://ko-fi.com/aisencrown" target="_blank" :prefetch="false"
      class="flex items-center justify-center w-full gap-1 p-4 normal-case rounded-lg bg-opacity-70 md:p-2 h-fit btn bg-palia-blue-dark hover:text-palia-blue-dark hover:border-none hover:bg-primary">
      <img src="/externals/kofi.webp" alt="Ko-fi Logo" width="28" class="mr-1" />
      <p class="flex items-center gap-2 text-sm font-semibold md:text-base">
        Buy me a coffee?
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-1 text-xs opacity-50" />
      </p>
    </NuxtLink>

  </div>
</template>

================================================
FILE: components/HarvestCalculator.vue
================================================

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useStorage } from '@vueuse/core'
import LazyHCInfo from './garden-planner/HarvestCalculator/HCInfo.vue'
import HCTags from './garden-planner/HarvestCalculator/HCTags.vue'
import LazyHCTotal from './garden-planner/HarvestCalculator/HCTotal.vue'
import LazyHCDay from './garden-planner/HarvestCalculator/HCDay.vue'
import OptionCard from './garden-planner/HarvestCalculator/OptionCard.vue'
import type { ICalculateValueResult, ISimulateYieldResult } from '@/assets/scripts/garden-planner/imports'
import { CropType, Garden, crops } from '@/assets/scripts/garden-planner/imports'
import type { CalculateValueOptions } from '@/assets/scripts/garden-planner/classes/garden'
import AppDividerAlt from '@/components/AppDividerAlt.vue'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import useHarvester from '~/stores/useHarvester'
import { getCropMap } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import type { ICropName, IHarvestInfo } from '~/assets/scripts/garden-planner/utils/garden-helpers'

const props = defineProps({
  layout: {
    type: Garden,
    required: true,
  },
})

const isTakingScreenshot = useTakingScreenshot()

const gardenTilesAreWide = computed(() => {
  return props.layout.plots[0].length > 3
})

const options = useStorage('approximator-options-MAR1024', {
  days: 0,
  postLevel25: false,
  allStarSeeds: true,
  includeReplant: true,
  includeReplantCost: true,
  useGrowthBoost: false,
  level: 0,
})

const harvester = useHarvester()

const harvestData = ref<ISimulateYieldResult>(convertHarvestData())

watchEffect(() => {
  harvestData.value = convertHarvestData()
})

function convertHarvestData() {
  harvester.harvester.simulateYield(props.layout.uniqueTiles, {
    ...options.value,
    days: options.value.days || 0,
    includeReplant: options.value.includeReplant || true,
    includeReplantCost: options.value.includeReplantCost || true,
    useStarSeeds: options.value.allStarSeeds || true,
    useGrowthBoost: options.value.useGrowthBoost || false,
    level: options.value.level || 0,
  })

  const harvests: IHarvestInfo[] = []
  const harvestTotal: IHarvestInfo = {
    day: 0,
    crops: getCropMap(),
    seedsRemainder: getCropMap(),
  }

  const harvesterDays = harvester.dayHarvests
  const harvesterTotal = harvester.totalHarvest

  for (const [day, harvestData] of harvesterDays) {
    const harvest = {
      day,
      crops: getCropMap(),
      seedsRemainder: getCropMap(),
    }

    for (const cropType of Object.values(CropType)) {
      const baseCropName = `${cropType}-Base` satisfies ICropName
      const starCropName = `${cropType}-Star` satisfies ICropName

      const baseCropYield = harvestData.crops.get(baseCropName)?.totalWithDeductions ?? 0
      const starCropYield = harvestData.crops.get(starCropName)?.totalWithDeductions ?? 0

      harvest.crops[cropType].base = baseCropYield
      harvest.crops[cropType].star = starCropYield
    }
  }

  for (const cropType of Object.values(CropType)) {
    const baseCropName = `${cropType}-Base` satisfies ICropName
    const starCropName = `${cropType}-Star` satisfies ICropName

    const baseCropYield = harvesterTotal.crops.get(baseCropName)?.totalWithDeductions ?? 0
    const starCropYield = harvesterTotal.crops.get(starCropName)?.totalWithDeductions ?? 0

    harvestTotal.crops[cropType].base = baseCropYield
    harvestTotal.crops[cropType].star = starCropYield
  }

  harvestTotal.day = harvesterTotal.lastHarvestDay

  return {
    harvests,
    harvestTotal,
  } as {
    harvests: IHarvestInfo[]
    harvestTotal: IHarvestInfo
  }
}

type ProduceOptions = 'crop' | 'seed' | 'preserve'

const cropOptions = ref(Object.values(CropType).reduce((acc, cropType) => {
  acc[cropType] = {
    starType: 'crop',
    baseType: 'crop',
  }
  return acc
}, {} as Record<CropType, { starType: ProduceOptions; baseType: ProduceOptions }>))

function calculateGoldValue() {
  if (harvestData.value) {
    return props.layout.calculateValue(cropOptions.value as CalculateValueOptions,
      harvestData.value,
    )
  }
}

const processedYields = computed<ICalculateValueResult>(() => {
  return calculateGoldValue() as ICalculateValueResult
})

const activeTab = ref('display')
function setTab(tab: string) {
  activeTab.value = tab
}

const activeDisplayTab = ref('overview')
function setDisplayTab(tab: 'overview' | 'day') {
  activeDisplayTab.value = tab
}

const activeOptionTab = ref('main')
function setOptionTab(tab: 'main' | 'crop') {
  activeOptionTab.value = tab
}

function setCropOption(cropType: CropType, type: 'star' | 'base', option: ProduceOptions) {
  if (type === 'star')
    cropOptions.value[cropType].starType = option

  else
    cropOptions.value[cropType].baseType = option
}

const starBaseChance = ref(0.25 + (options.value.allStarSeeds ? 0.25 : 0) + (options.value.level * 0.02))

watchEffect(() => {
  if (options.value.level < 0 || Number.isNaN(options.value.level))
    options.value.level = 0

  starBaseChance.value = 0.25 + (options.value.allStarSeeds ? 0.25 : 0) + (options.value.level * 0.02)

  starBaseChance.value = Math.min(1, starBaseChance.value)
})
</script>

<template>
  <section
    class="z-50 w-full overflow-visible transition-all rounded-none pointer-events-none lg:max-w-2xl lg:h-fit xl:max-w-3xl"
    :class="[
      gardenTilesAreWide ? 'max-w-none! px-0' : 'lg:pl-20 xl:pl-2 xl:px-4 lg:px-2',
      isTakingScreenshot.get && !gardenTilesAreWide ? 'max-w-[46rem] px-4' : '',
    ]">
    <div class="flex flex-col pointer-events-auto bg-primary" :class="[
      isTakingScreenshot.get ? 'rounded-lg' : 'pt-2 md:pt-0 pb-6 lg:pb-0',
      gardenTilesAreWide ? 'rounded-none' : 'lg:rounded-lg ',
    ]">
      <div class="flex flex-col gap-1">
        <div
          class="flex flex-col items-center justify-between w-full p-1 lg:flex-row lg:bg-misc lg:rounded-lg lg:rounded-b-none sm:px-6 lg:text-accent"
          :class="[
            isTakingScreenshot.get ? 'bg-misc px-6 rounded-lg rounded-b-none' : 'text-misc gap-2',
            gardenTilesAreWide ? 'bg-primary! flex-col!' : '',
          ]">
          <AppDividerAlt class="order-1 w-full sm:hidden"
            :class="isTakingScreenshot.get || gardenTilesAreWide ? 'hidden' : ''" />
          <h2 class="flex flex-wrap items-center order-2 gap-1 py-1 text-2xl"
            :class="gardenTilesAreWide ? 'text-center text-misc' : ''">
            Harvest Approximations <span class="text-xs font-normal">(WIP)</span>
          </h2>
          <div v-show="(activeTab !== 'info' && !isTakingScreenshot.get)" class="w-full py-2 mx-4 lg:hidden"
            :class="gardenTilesAreWide ? 'order-first' : 'md:order-default'">
            <div
              class="flex flex-col items-center justify-center py-2 font-semibold rounded-md bg-accent text-misc xl:flex-row md:gap-1">
              <div class="tooltip tooltip-top" data-tip="The last harvest before approximations are made">
                <div class="flex items-center gap-1 ">
                  Last Harvest: Day {{ Math.max(processedYields?.totalResult.day || 0, options.days) }} —
                  <div class="flex items-center gap-1">
                    <img width="16" height="16" src="/gold.webp" class="max-h-[1rem]" :srcset="undefined" alt="Gold"
                      format="webp">{{
                        processedYields?.totalResult.totalGold.toLocaleString() }}
                  </div>
                </div>
              </div>
              <div v-show="processedYields?.totalResult.totalGold !== 0"
                class="divider divider-horizontal after:bg-misc before:bg-misc" />
              <div v-show="processedYields?.totalResult.totalGold !== 0" class="tooltip tooltip-top"
                data-tip="Raw average is without processing time">
                <p class="flex items-center gap-1">
                  Raw Average:
                  <span class="flex items-center gap-1"><img src="/gold.webp" class="max-h-[1rem]" format="webp"
                      alt="Gold" width="16" height="16" :srcset="undefined">{{
                        (Math.round(processedYields.totalResult.totalGold
                          / processedYields.totalResult.day)).toLocaleString() }}</span>/ day
                </p>
              </div>
            </div>
          </div>
          <div v-if="!isTakingScreenshot.get"
            class=" w-full justify-evenly flex flex-nowrap bg-misc text-accent rounded-md px-4 py-1 max-w-[22rem] order-3"
            :class="gardenTilesAreWide ? 'justify-center py-2' : 'md:px-0 md:gap-2 lg:w-fit'">
            <button id="approximator-display-tab" aria-label="Display Tab" class="px-0 text-2xl hover:opacity-90"
              :class="activeTab === 'display' ? '' : 'opacity-50'" @click="setTab('display')">
              <font-awesome-icon :icon="['fas', 'table']" />
            </button>
            <button id="approximator-options-tab" aria-label="Options Tab" class="px-0 text-2xl hover:opacity-90"
              :class="activeTab === 'options' ? '' : 'opacity-50'" @click="setTab('options')">
              <font-awesome-icon :icon="['fas', 'sliders']" />
            </button>
            <button id="approximator-info-tab" aria-label="Info Tab" class="px-0 text-2xl hover:opacity-90"
              :class="activeTab === 'info' ? '' : 'opacity-50'" @click="setTab('info')">
              <font-awesome-icon :icon="['fas', 'info-circle']" />
            </button>
          </div>
        </div>
      </div>
      <div v-show="(activeTab !== 'info' || isTakingScreenshot.get)" class="px-4 py-2 " :class="[
        isTakingScreenshot.get ? '' : 'hidden lg:block',
        gardenTilesAreWide ? 'order-first' : '',
      ]">
        <div
          class="flex flex-col items-center justify-center py-2 font-semibold rounded-md bg-accent text-misc xl:flex-row md:gap-1">
          <div class="tooltip tooltip-top" data-tip="The last harvest before approximations are made">
            <div class="flex items-center gap-1 ">
              Last Harvest: Day {{ Math.max(processedYields?.totalResult.day || 0, options.days) }} —
              <div class="flex items-center gap-1">
                <img width="16" height="16" src="/gold.webp" class="max-h-[1rem]" :srcset="undefined" alt="Gold"
                  format="webp">{{
                    processedYields?.totalResult.totalGold.toLocaleString() }}
              </div>
            </div>
          </div>
          <div v-show="processedYields?.totalResult.totalGold !== 0"
            class="divider divider-horizontal after:bg-misc before:bg-misc" />
          <div v-show="processedYields?.totalResult.totalGold !== 0" class="tooltip tooltip-top"
            data-tip="Raw average is without processing time">
            <p class="flex items-center gap-1">
              Raw Average:
              <span class="flex items-center gap-1"><img src="/gold.webp" class="max-h-[1rem]" format="webp" alt="Gold"
                  width="16" height="16" :srcset="undefined">{{
                    (Math.round(processedYields.totalResult.totalGold
                      / processedYields.totalResult.day)).toLocaleString() }}</span>/ day
            </p>
          </div>
        </div>
      </div>
      <div v-show="(isTakingScreenshot.get) || activeTab === 'display'" class="flex flex-col px-4">
        <HCTags :level="options.level" :all-star-seeds="options.allStarSeeds" :include-replant="options.includeReplant"
          :include-replant-cost="options.includeReplantCost" :star-chance="starBaseChance * 100"
          :use-growth-boost="options.useGrowthBoost" />
        <div v-if="!isTakingScreenshot.get" class="gap-2 pt-1 tabs">
          <div class="normal-case rounded-md tab btn btn-sm"
            :class="activeDisplayTab === 'overview' ? 'tab-active btn-accent' : 'btn-ghost text-misc'"
            @click="setDisplayTab('overview')">
            Overview
          </div>
          <div class="normal-case rounded-md tab btn btn-sm whitespace-nowrap"
            :class="activeDisplayTab === 'day' ? 'tab-active btn-accent' : 'btn-ghost text-misc '"
            @click="setDisplayTab('day')">
            Day-by-day
          </div>
        </div>
        <div class="pt-2">
          <div v-if="(isTakingScreenshot.get) || activeDisplayTab === 'overview'" class="flex flex-col gap-2 pb-3">
            <LazyHCTotal :processed-yields="processedYields as ICalculateValueResult"
              :harvest-data="harvestData as ISimulateYieldResult"
              :crop-options="cropOptions as Record<CropType, { starType: ProduceOptions; baseType: ProduceOptions }>" />
          </div>

          <LazyHCDay v-if="!(isTakingScreenshot.get) && activeDisplayTab === 'day' && harvestData" class="pb-4"
            :processed-yields="processedYields as ICalculateValueResult"
            :harvest-data="harvestData as ISimulateYieldResult"
            :crop-options="cropOptions as Record<CropType, { starType: ProduceOptions; baseType: ProduceOptions }>" />
        </div>
      </div>
      <div v-if="!(isTakingScreenshot.get) && activeTab === 'options'"
        class="flex flex-col gap-2 px-4 transition-all max-h-96 ">
        <div role="tablist" class="gap-2 tabs">
          <div role="tab" class="normal-case rounded-md tab btn btn-sm"
            :class="activeOptionTab === 'main' ? 'tab-active btn-accent' : 'btn-ghost text-misc text-opacity-50'"
            @click="setOptionTab('main')">
            Main
          </div>
          <div role="tab" class="normal-case rounded-md tab btn btn-sm"
            :class="activeOptionTab === 'crop' ? 'tab-active btn-accent' : 'btn-ghost text-misc text-opacity-50'"
            @click="setOptionTab('crop')">
            Crop
          </div>
        </div>
        <!-- box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; -->
        <div
          class=" max-h-[19.75rem] overflow-y-scroll mb-4 rounded-lg rounded-r-none border border-misc border-opacity-50 p-2">
          <div v-if="activeOptionTab === 'main'"
            class="grid gap-2 pb-4 pr-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <OptionCard label="days" name="Days">
              <template #input>
                <div class="join">
                  <button class="join-item btn btn-sm " @click="options.days = 0">
                    Auto
                  </button>
                  <input v-model="options.days" class="join-item input input-sm text-lg max-w-[6rem] text-accent"
                    type="number" min="0">
                  <button class="join-item btn btn-sm " @click="options.days = 30">
                    30
                  </button>
                </div>
              </template>
              <template #labels>
                <p>
                  Manual override for how many days of harvest
                </p>
                <p>
                  Auto: Uses crop w/ highest growth time
                </p>
              </template>
            </OptionCard>
            <OptionCard label="level" name="Gardening Level">
              <template #input>
                <div class="join ">
                  <button class="join-item btn btn-sm text-primary" @click="options.level = 0">
                    0
                  </button>
                  <button class="join-item btn btn-sm text-primary" @click="options.level = 10">
                    10
                  </button>
                  <input v-model="options.level" class="input input-sm text-lg max-w-[5rem] join-item text-accent"
                    type="number" min="0">
                  <button class="join-item btn btn-sm text-primary" @click="options.level = 25">
                    25
                  </button>
                  <button class="join-item btn btn-sm text-primary " @click="options.level = 50">
                    50
                  </button>
                </div>
              </template>
              <template #labels>
                <p>
                  Decides base star chance of crops
                </p>
                <p>
                  Base Star Chance: <code
                    class="px-2 rounded-xs bg-misc text-accent">{{ Math.min(100, starBaseChance * 100) }}%</code>
                </p>
                <p>Formula in info</p>
              </template>
            </OptionCard>

            <OptionCard label="allStarSeeds" name="All Star Seeds">
              <template #input>
                <input v-model="options.allStarSeeds" class="rounded-md toggle" type="checkbox">
              </template>
              <template #labels>
                <p>
                  The entire layout will use star seeds
                </p>
              </template>
            </OptionCard>

            <OptionCard label="includeReplant" name="Include Replant">
              <template #input>
                <input v-model="options.includeReplant" class="rounded-md toggle" type="checkbox">
              </template>
              <template #labels>
                <p>
                  Replants the crops after harvest until the last day
                </p>
                <p v-show="!options.includeReplant" class="font-bold">
                  Off: Bonuses will still be calculated but the
                  harvest days will be inaccurate
                </p>
              </template>
            </OptionCard>

            <OptionCard label="includeReplantCost" name="Include Replant Cost">
              <template #input>
                <input v-model="options.includeReplantCost" class="rounded-md toggle" type="checkbox"
                  :disabled="!options.includeReplant">
              </template>
              <template #labels>
                <p>
                  Accounts for the cost of re-planting
                </p>
              </template>
            </OptionCard>

            <OptionCard label="useGrowthBoost" name="Use Growth Boost">
              <template #input>
                <input v-model="options.useGrowthBoost" class="rounded-md toggle" type="checkbox">
              </template>
              <template #labels>
                <p>
                  Factors in growth boost when simulating yields, does not account for any RNG and is theoretical
                </p>
                <p class="py-1 text-warning">
                  <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
                  Likely bugged as of 0.169
                  <NuxtLink class="pl-1 underline text-misc"
                    to="https://docs.google.com/document/d/1f4MQHjEC1RCNpDUz1I3eg2tioD_6yBmW0XWsVxUOJ1Y/edit"
                    target="_blank" :prefetch="false">
                    <font-awesome-icon class="text-sm" :icon="['fas', 'arrow-up-right-from-square']" />
                    (Source)
                  </NuxtLink>
                </p>
              </template>
            </OptionCard>

            <OptionCard label="includeFertiliserCosts" name="Include Fertiliser Costs" disabled>
              <template #input>
                <input class="rounded-md toggle" type="checkbox" disabled>
              </template>
              <template #labels>
                <p>
                  <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
                  Not yet supported
                </p>
              </template>
            </OptionCard>
          </div>
          <div v-if="activeOptionTab === 'crop'" class="grid gap-1 pb-2">
            <p class="text-xs text-misc">
              <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
              Conversion time is not yet accounted for with seeds and preserves
            </p>

            <div class="grid gap-2 pr-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <template v-for="(crop, type) in crops" :key="type">
                <div v-if="crops[type] && type !== CropType.None"
                  class="grid items-center justify-start grid-cols-3 gap-2 p-1 py-2 rounded-lg bg-accent text-misc h-fit">
                  <div class="flex flex-col items-center justify-center pl-1 xl:aspect-square">
                    <img format="webp" class="w-[3.15rem] object-contain p-1 py-1 aspect-square" :srcset="undefined"
                      width="3.5rem" height="3.5rem" :alt="crop?.type" :src="crop?.image || '/crops/unknown.webp'">
                    <p class="text-sm font-bold text-center capitalize">
                      {{ crop?.type }}
                    </p>
                  </div>
                  <div class="flex flex-col col-span-2 gap-1 px-2 pb-2">
                    <div class="flex flex-col text-sm font-bold">
                      <p class="text-xs">
                        Star
                      </p>
                      <div class="rounded-md join">
                        <button class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].starType === 'crop' }"
                          @click="setCropOption(type, 'star', 'crop')">
                          Crop
                        </button>
                        <button class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].starType === 'seed' }"
                          @click="setCropOption(type, 'star', 'seed')">
                          Seed
                        </button>
                        <button v-if="crop?.goldValues?.hasPreserve" class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].starType === 'preserve' }"
                          @click="setCropOption(type, 'star', 'preserve')">
                          Jar
                        </button>
                      </div>
                    </div>
                    <div class="flex flex-col font-semibold">
                      <p class="text-xs">
                        Normal
                      </p>
                      <div class="join">
                        <button class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].baseType === 'crop' }"
                          @click="setCropOption(type, 'base', 'crop')">
                          Crop
                        </button>
                        <button class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].baseType === 'seed' }"
                          @click="setCropOption(type, 'base', 'seed')">
                          Seed
                        </button>
                        <button v-if="crop?.goldValues?.hasPreserve" class="join-item btn btn-xs btn-primary"
                          :class="{ 'btn-active': cropOptions[type].baseType === 'preserve' }"
                          @click="setCropOption(type, 'base', 'preserve')">
                          Jar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!(isTakingScreenshot.get) && activeTab === 'info'" class="overflow-hidden overflow-y-scroll">
        <LazyHCInfo class="max-h-[26.5rem]" />
      </div>
    </div>

  </section>
</template>

================================================
FILE: components/LayoutCreator.vue
================================================

<script setup lang="ts">
import { CropCode } from '@/assets/scripts/garden-planner/imports'
import PGPModal from '@/components/PGPModal.vue'

const emit = defineEmits(['createNewLayout'])

const modal = ref<InstanceType<typeof PGPModal> | null>(null)
// const createLayoutDialog = ref<HTMLDialogElement | null>(null)
function openModal() {
  modal.value?.showModal()
}
defineExpose({
  openModal,
})

const selectedNewLayout = ref('3x3')
const prevSelectedNewLayout = ref('3x3')
function createNewLayout() {
  emit('createNewLayout', layoutToCode(trimLayout()))
  modal.value?.hideModal()
}

enum PlotStatus {
  active = 1,
  inactive = 0,
}
// Creates a v.02 code from the layout
function layoutToCode(layout: PlotStatus[][]) {
  // ? technically 'plot' is just a boolean, do I really need to use an enum?
  let code = 'v0.3_D-'
  for (const layoutRow of layout) {
    for (const plot of layoutRow)
      code += plot

    code += '-'
  }
  code = code.slice(0, -1)
  code += '_CR-'
  for (const plot of layout.flat()) {
    if (plot === PlotStatus.active) {
      for (let i = 0; i < 9; i++)
        code += CropCode.None

      code += '-'
    }
  }
  code = code.slice(0, -1)
  return code
}

const rowInput = ref(3)
const colInput = ref(3)

const plotLayout = ref<PlotStatus[][]>([
  [PlotStatus.inactive],
])

function onLayoutSelect() {
  if (selectedNewLayout.value !== 'custom') {
    rowInput.value = Number.parseInt(selectedNewLayout.value[0])
    colInput.value = Number.parseInt(selectedNewLayout.value[2])
  }
  else {
    rowInput.value = 4
    colInput.value = 4
  }
}

const MAX_ROWS = 9
const MAX_COLS = 9
watchEffect(() => {
  if (rowInput.value > MAX_ROWS)
    rowInput.value = MAX_ROWS
  if (colInput.value > MAX_COLS)
    colInput.value = MAX_COLS

  const selectedRow = rowInput.value
  const selectedCol = colInput.value
  const layout: PlotStatus[][] = []
  for (let i = 0; i < selectedRow; i++) {
    layout[i] = []
    for (let j = 0; j < selectedCol; j++) {
      // Allows for keeping the same layout when switching between custom layouts
      if (selectedNewLayout.value === prevSelectedNewLayout.value && plotLayout.value[i] && plotLayout.value[i][j]) {
        layout[i][j] = plotLayout.value[i][j]
        continue
      }

      layout[i][j] = (selectedNewLayout.value === 'custom' ? PlotStatus.inactive : PlotStatus.active)
    }
  }
  plotLayout.value = layout
  prevSelectedNewLayout.value = selectedNewLayout.value
})

function enforceLayoutLimits() {
  if (rowInput.value > MAX_ROWS)
    rowInput.value = MAX_ROWS
  if (colInput.value > MAX_COLS)
    colInput.value = MAX_COLS
  if (rowInput.value < 1)
    rowInput.value = 1
  if (colInput.value < 1)
    colInput.value = 1
}

const activePlots = computed(() => {
  return plotLayout.value.flat().reduce((count, isActive) => {
    return count + isActive
  }, 0)
})

const allowIllegalLayout = ref(false)
function togglePlot(row: number, col: number) {
  const maxPlots = (allowIllegalLayout.value ? 27 : 9)
  if (plotLayout.value[row][col] === PlotStatus.active) {
    plotLayout.value[row][col] = PlotStatus.inactive
  }
  else {
    if (activePlots.value >= maxPlots)
      return
    plotLayout.value[row][col] = PlotStatus.active
  }
}

function trimLayout(): PlotStatus[][] {
  const layout: PlotStatus[][] = plotLayout.value

  // Identify empty rows and columns
  const emptyRows: Set<number> = new Set()
  const emptyColumns: Set<number> = new Set()
  for (let row = 0; row < layout.length; row++) {
    let isEmpty = true
    for (let col = 0; col < layout[row].length; col++) {
      if (layout[row][col] === PlotStatus.active) {
        isEmpty = false
        break
      }
    }
    if (isEmpty)
      emptyRows.add(row)
  }
  for (let col = 0; col < layout[0].length; col++) {
    let isEmpty = true
    for (let row = 0; row < layout.length; row++) {
      if (layout[row][col] === PlotStatus.active) {
        isEmpty = false
        break
      }
    }
    if (isEmpty)
      emptyColumns.add(col)
  }

  // Remove empty rows and columns
  for (let row = layout.length - 1; row >= 0; row--) {
    if (emptyRows.has(row))
      layout.splice(row, 1)
  }
  for (let col = layout[0].length - 1; col >= 0; col--) {
    if (emptyColumns.has(col)) {
      for (let row = 0; row < layout.length; row++)
        layout[row].splice(col, 1)
    }
  }

  rowInput.value = layout.length
  colInput.value = layout[0].length
  return layout
}
</script>

<template>
  <PGPModal ref="modal">
    <template #header>
      New Layout
    </template>
    <template #body>
      <div class="flex flex-col gap-1 bg-palia-blue-dark rounded-md p-2 ">
        <h3 class="font-bold">
          Dimensions
        </h3>
        <select v-model="selectedNewLayout" name="layout-select"
          class="select select-bordered select-sm w-full max-w-xs" aria-label="Select Layout"
          @change="onLayoutSelect()">
          <option value="select" disabled selected>
            Select Layout
          </option>
          <option value="1x2">
            1x2
          </option>
          <option value="2x1">
            2x1
          </option>
          <option value="2x2">
            2x2
          </option>
          <option value="2x3">
            2x3
          </option>
          <option value="3x2">
            3x2
          </option>
          <option value="3x3">
            3x3
          </option>
          <option value="custom" class="italic">
            Custom Layout
          </option>
        </select>

        <p class="text-xs">
          Pick a pre-determined size here, or make a custom one
        </p>
      </div>
      <div class="flex flex-col gap-2 bg-palia-blue-dark rounded-md p-2">
        <div class=" py-2 flex flex-col gap-3">
          <div class="w-full flex flex-col items-center">
            <p class="text-sm">
              Each tile represents a 3x3 garden, click to toggle
            </p>
            <div class=" flex flex-col gap-1 py-4 px-2 rounded-md w-fit">
              <div v-for="(plotRow, plotRowIndex) of plotLayout" :key="plotRowIndex" class="flex gap-1">
                <div v-for="(plot, index) of plotRow" :key="index"
                  class="btn btn-square rounded-none btn-accent btn-xs cursor-pointer transition-all"
                  :class="plot === PlotStatus.active ? 'border-misc-saturated' : 'bg-misc bg-opacity-70'"
                  @click="togglePlot(plotRowIndex, index)" />
              </div>
            </div>

            <p class="flex gap-1 font-bold">
              <span class="flex items-center align-middle gap-1">
                {{ activePlots }} Plots
                out of
                {{ allowIllegalLayout ? 27 : 9 }}
              </span>
            </p>
          </div>
          <div :class="selectedNewLayout === 'custom' ? '' : 'hidden'" class="flex flex-col gap-2 w-fit md:w-full">
            <label for="row-input" class="items-center justify-start grid grid-cols-2 gap-2 w-fit">
              <p class="select-none text-sm ">Rows</p>
              <div class="join col-span-1 rounded-md">
                <button class="join-item btn btn-sm btn-square btn-primary" @click="() => {
                  if (rowInput <= 1)
                    return
                  rowInput--
                  enforceLayoutLimits()
                }">-</button>
                <input v-model="rowInput" type="number" name="row-input"
                  class="join-item input input-sm max-w-16 text-center input-primary" min="1" max="9" step="1"
                  :disabled="selectedNewLayout !== 'custom'" @change="enforceLayoutLimits()">
                <button class="join-item btn btn-sm btn-square btn-primary" @click="() => {
                  if (rowInput >= MAX_ROWS)
                    return
                  rowInput++
                }">+</button>
              </div>
            </label>
            <label for="col-input" class="items-center justify-start grid grid-cols-2 gap-2 w-fit">
              <p class="select-none text-sm">Columns</p>
              <div class="join col-span-1 rounded-md">
                <button class="join-item btn btn-sm btn-square btn-primary" @click="() => {
                  if (colInput <= 1)
                    return
                  colInput--
                  enforceLayoutLimits()
                }">-</button>
                <input v-model="colInput" type="number" name="col-input"
                  class="join-item input input-sm input-primary max-w-16 text-center" min="1" max="9" step="1"
                  :disabled="selectedNewLayout !== 'custom'" @change="enforceLayoutLimits()">
                <button class="join-item btn btn-sm btn-primary btn-square" @click="() => {
                  if (colInput >= MAX_COLS)
                    return
                  colInput++
                  enforceLayoutLimits()
                }">+</button>
              </div>
            </label>
          </div>
          <div v-if="selectedNewLayout === 'custom'"
            class="w-full flex flex-col gap-1  bg-misc-secondary px-2 rounded-md  py-2">
            <label class="label flex items-start border-white w-fit gap-2">
              <span class="text-sm">Expand Plot Limits</span>
              <div class="flex flex-col">
                <input v-model="allowIllegalLayout" type="checkbox" name="allow-illegal-layout" class="toggle">
              </div>
            </label>
            <p class="text-xs opacity-40 font-thin">
              Increases plot limit from 9 to 27. For if plot limits are increased or for experimenting with plot
              configurations the garden planner doesn't support.
            </p>
          </div>
        </div>
      </div>
      <div class="text-xs max-w-sm flex flex-col gap-1">
        <p>Empty rows and columns will be trimmed from the final output</p>
        <p>This will reset everything, so consider saving beforehand</p>
      </div>
      <div class="flex flex-col gap-1">
        <button :disabled="selectedNewLayout === 'select' || activePlots <= 0" class="btn w-fit"
          @click="createNewLayout()">
          Create
        </button>

        <p v-show="(activePlots <= 0)" class="text-xs text-warning">
          <font-awesome-icon icon="exclamation-triangle" class="text-warning" />
          You'll need at least 1 plot active
        </p>
      </div>
    </template>

  </PGPModal>
</template>

================================================
FILE: components/PGPFooter.vue
================================================
<template>

  <footer v-once class="px-4 lg:px-12 mt-2">
    <div
      class="flex flex-col lg:flex-row gap-2 items-start justify-between text-center sm:text-left w-full font-normal p-4 rounded-lg bg-palia-blue mb-4 bg-opacity-50">
      <div class="grid text-sm">
        <p class="max-w-md">
          &copy; Palia's intellectual property and assets are reserved by Singularity 6.
        </p>
        <p>
          This tool is fan-made and not affliated in any way with Singularity 6 or Palia.
        </p>
      </div>
      <div class="flex flex-col w-full items-center lg:w-fit lg:items-end gap-1">
        <div class="flex items-center gap-1">
          Developed by
          <NuxtLink to="https://discord.com/users/204462556012740608" target="_blank" :prefetch="false"
            class="btn btn-ghost normal-case btn-sm">
            <font-awesome-icon :icon="['fab', 'discord']" class="" />
            .aisen
          </NuxtLink>
        </div>
        <NuxtLink to="https://github.com/VincentAmante/palia-tools" target="_blank" :prefetch="false"
          class="btn w-full">
          <font-awesome-icon :icon="['fab', 'github']" class="text-lg" />
          Source Code
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

================================================
FILE: components/PGPHeader.vue
================================================
<template>

  <div>
    <header class="z-50 drawer drawer-end">
      <input id="menu" type="checkbox" class="drawer-toggle" aria-label="toggle menu" />
      <div class="flex flex-col drawer-content">
        <div class="w-full py-3 navbar sm:px-12">
          <div class="flex-1">
            <NuxtLink to="/" class="flex items-center gap-2">
              <img format="webp" src="/logo.webp" width="48px" height="48px" alt="Palia Garden Planner Logo"
                class="max-w-[3rem]">
              <div class="flex flex-col gap-0 leading-tight">
                <h1 class="text-xl font-bold leading-tight text-left lg:text-2xl">
                  Palia Garden Planner
                </h1>
                <p class="text-xs leading-tight text-left">
                  <font-awesome-icon :icon="['fas', 'heart']" class="" />
                  A player-made tool for planning your garden
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="flex-none hidden lg:block">
              <ul class="items-center gap-1 text-base menu menu-horizontal">
                <li>
                  <NuxtLink to="/roadmap" :prefetch=false>
                    Roadmap
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/changelogs" :prefetch=false>
                    Changelogs
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/credits" :prefetch=false>
                    Credits
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink class="" target="_blank" :prefetch="false" rel="noopener"
                    to="https://paliapedia.com/tools/garden">
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-harvest-boost" :aria-hidden="true" />
                    Layout Generator
                  </NuxtLink>
                </li>
                <li class="dropdown dropdown-hover dropdown-bottom dropdown-end">
                  <label tabindex="0">
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xl" />
                    External Tools
                  </label>
                  <ul tabindex="0" class="dropdown-content z-1 menu p-2 shadow-sm bg-base-100 rounded-box w-52">
                    <li class="text-sm">
                      <NuxtLink to="https://palia.anniebananie.io" class="flex flex-wrap items-center" rel="noopener"
                        target="_blank" :prefetch="false">
                        <font-awesome-icon :icon="['fas', 'gift']" class="text-xl" />
                        Palia Tracker
                        <span class="text-xs">(anniebananie)</span>
                      </NuxtLink>
                    </li>
                    <li class="text-sm">
                      <NuxtLink to="https://palia.th.gl/" class="flex flex-wrap items-center" rel="noopener"
                        target="_blank" :prefetch="false">
                        <font-awesome-icon :icon="['fas', 'map']" class="text-xl" />
                        Interactive Map
                        <span class="text-xs">(The Hidden Gaming Lair)</span>
                      </NuxtLink>
                    </li>
                    <li class="text-sm">
                      <NuxtLink to="https://paliapedia.com/" class="flex" rel="noopener" target="_blank"
                        :prefetch="false">
                        <img src="/externals/paliapedia.svg" width="18px" height="18px"
                          class="max-w-[1.5rem] inline-block text-lg" alt="Paliapedia Logo">
                        Paliapedia
                      </NuxtLink>
                    </li>
                    <li class="text-sm">
                      <NuxtLink to="https://paliaparty.app/" class="flex" rel="noopener" target="_blank"
                        :prefetch="false">
                        <img src="/externals/palia-party.webp" width="18px" height="18px"
                          class="max-w-[1.5rem] inline-block text-lg" alt="Palia Party Logo">
                        Palia Party
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex-none lg:hidden">
            <label for="menu" class="btn btn-square btn-ghost" aria-label="menu toggle">
              <font-awesome-icon :icon="['fas', 'bars']" class="text-xl" />
            </label>
          </div>
        </div>
      </div>
      <div class="overflow-x-hidden drawer-side">
        <label for="menu" class="drawer-overlay" aria-label="close menu" />
        <ul class="relative h-full gap-2 p-4 menu w-80 bg-base-200">
          <li class="flex items-end w-full lg:hidden">
            <label for="menu-side">
              <font-awesome-icon :icon="['fas', 'x']" class="text-xl" />
              <input id="menu-side" type="checkbox" class="drawer-toggle" aria-label="close menu">
            </label>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink to="/roadmap">
              Roadmap
            </NuxtLink>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink to="/changelogs">
              Changelogs
            </NuxtLink>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink to="/credits">
              Credits
            </NuxtLink>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink class="" target="_blank" rel="noopener" :prefetch="false"
              to="https://paliapedia.com/tools/garden">
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-harvest-boost" :aria-hidden="true" />
              Layout Generator
            </NuxtLink>
          </li>
          <li>
            <div class="flex flex-col items-start text-lg font-bold">
              <p class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xl" />
                External Tools
              </p>
              <ul>
                <li class="text-sm">
                  <NuxtLink to="https://palia.anniebananie.io" class="flex flex-wrap items-center" rel="noopener"
                    target="_blank" :prefetch="false">
                    <font-awesome-icon :icon="['fas', 'gift']" class="text-xl" />
                    Palia Tracker
                  </NuxtLink>
                </li>
                <li class="text-sm">
                  <NuxtLink to="https://palia.th.gl/" class="flex flex-wrap items-center" rel="noopener" target="_blank"
                    :prefetch="false">
                    <font-awesome-icon :icon="['fas', 'map']" class="text-xl" />
                    Interactive Map
                    <span class="text-xs">(The Hidden Gaming Lair)</span>
                  </NuxtLink>
                </li>
                <li class="text-sm">
                  <NuxtLink to="https://paliapedia.com/" class="flex" rel="noopener" target="_blank" :prefetch="false">
                    <img src="/externals/paliapedia.svg" width="18px" height="18px"
                      class="max-w-[1.5rem] inline-block text-lg" alt="Paliapedia Logo">
                    Paliapedia
                  </NuxtLink>
                </li>
                <li class="text-sm">
                  <NuxtLink to="https://paliaparty.app/" class="flex" rel="noopener" target="_blank" :prefetch="false">
                    <img src="/externals/palia-party.webp" width="18px" height="18px"
                      class="max-w-[1.5rem] inline-block text-lg" alt="Palia Party Logo">
                    Palia Party
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <AppDivider class="mx-2 sm:mx-12" />
  </div>
</template>

================================================
FILE: components/PGPModal.vue
================================================

<script setup lang="ts">
const modal = ref<HTMLDialogElement | null>(null)

  defineProps({
    useFullHeight: {
      type: Boolean,
      required: false,
      default: false,
    }
  })

function showModal() {
  modal.value?.showModal()
}
function hideModal() {
  modal.value?.close()
}
defineExpose({
  showModal,
  hideModal,
})
</script>

<template>
  <dialog ref="modal" class="modal py-2">
    <div class="flex flex-col gap-2 px-3 py-6 modal-box" :class="{ 'h-full': useFullHeight }">
      <div class="flex justify-between">
        <h2 class="text-xl ">
          <slot name="header" />
        </h2>
        <form method="dialog" class="">
          <button aria-label="close modal" class="btn btn-square btn-ghost btn-sm">
            <font-awesome-icon :icon="['fas', 'x']" class="text-xl" />
          </button>
        </form>
      </div>
      <div class="my-0 divider" />
      <div class="flex flex-col gap-2 modal-body">
        <slot name="body" />
      </div>
    </div>
    <form method="dialog" class="modal-backdrop opacity-20">
      <button>close</button>
    </form>
  </dialog>
</template>

================================================
FILE: components/RoadmapCard.vue
================================================
<template>

  <article class="card card-compact border border-primary rounded-md px-2 w-full max-w-lg bg-palia-blue-dark">
    <div class="card-body text-center items-center">
      <p class="card-title ">
        <slot name="title" />
      </p>
      <div class="h-full font-light flex flex-col gap-1">
        <slot name="description" />
      </div>
    </div>
  </article>
</template>

================================================
FILE: components/TimeDisplay.vue
================================================

<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const SECONDS_PER_HOUR = (60 / 24) * 60 // 60 real minutes per day = 150 seconds per in-game hour
const MS_PER_SECOND = 1000

const totalSeconds = ref((dayjs().utc().minute() * 60) + dayjs().utc().second())
const hour = ref(Math.floor(totalSeconds.value / SECONDS_PER_HOUR))

// A minute is set to be 1/60th of an in-game hour based on how many seconds until the next hour
const minute = ref(Math.floor((totalSeconds.value % SECONDS_PER_HOUR) / SECONDS_PER_HOUR * 60))

const hourFormatted = ref(hour.value > 12 ? hour.value - 12 : (hour.value === 0 ? 12 : hour.value))
const minuteFormatted = ref(minute.value < 10 ? `0${minute.value}` : minute.value)
const meridiem = ref(hour.value >= 12 ? 'PM' : 'AM')
const timeFormatted = ref(`${hourFormatted.value}:${minuteFormatted.value} ${meridiem.value}`)

const INTERVAL_MS = 1000

onMounted(() => {
  setInterval(() => {
    totalSeconds.value = (dayjs().utc().minute() * 60) + dayjs().utc().second()
    hour.value = Math.floor(totalSeconds.value / SECONDS_PER_HOUR)
    minute.value = Math.floor(((totalSeconds.value % SECONDS_PER_HOUR) / SECONDS_PER_HOUR) * 60)

    hourFormatted.value = hour.value > 12 ? hour.value - 12 : (hour.value === 0 ? 12 : hour.value)
    minuteFormatted.value = minute.value < 10 ? `0${minute.value}` : minute.value
    meridiem.value = hour.value >= 12 ? 'PM' : 'AM'

    timeFormatted.value = `${hourFormatted.value}:${minuteFormatted.value} ${meridiem.value}`
  }, INTERVAL_MS)
})

// const {
//   show,
//   permissionGranted,
//   ensurePermissions,
// } = useWebNotification(
//   {
//     title: '6:00 AM in Palia',
//     body: 'Check your garden!',
//     icon: '/logo.webp',
//     requestPermissions: false,
//   },
// )

// const dayAlert = useStorage('dayAlert', false)

// watch(dayAlert, () => {
//   if (dayAlert.value && !permissionGranted.value)
//     ensurePermissions()
// })

// watch(hour, () => {
//   if (hour.value === 6 && dayAlert.value)
//     show()
// })
</script>

<template>
  <div class="gap-2 px-4">
    <div class="flex flex-col items-center justify-center w-full px-3 py-2 rounded-md text-accent md:py-0">
      <p class="text-3xl"
        :class="{ 'text-harvest-boost': (hourFormatted === 6 && minuteFormatted === '00' && meridiem === 'AM') }">
        <span class="countdown">
          <span class="translate-x-1" :style="`--value:${hourFormatted};`" aria-live="polite"
            :aria-label="`${hourFormatted}`">{{
              hourFormatted }}</span>
          :
          <span :style="`--value:${minuteFormatted};`" aria-live="polite" :aria-label="`${minuteFormatted}`">{{
            minuteFormatted }}</span>
        </span>{{ meridiem }}
      </p>
      <p class="">
        Palian Time
      </p>
    </div>
  </div>
</template>

================================================
FILE: components/Toast.vue
================================================

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted } from 'vue'

interface Props {
  message: string
  type: string
  duration: number
  id: string
}

const props = defineProps<Props>()

const emits = defineEmits(['close'])

const close = () => {
  emits('close')
}

onMounted(() => {
  setTimeout(() => {
    close()
  }, props.duration)
})

const icon = computed(() => {
  switch (props.type) {
    case 'alert-success':
      return ['fas', 'check']
    case 'alert-danger':
      return ['fas', 'exclamation-triangle']
    default:
      return ['fas', 'info-circle']
  }
})

const INTERVAL = 10
const { remaining } = useCountdown(props.duration / INTERVAL, {
  immediate: true,
  interval: INTERVAL
})

const progressColor = computed(() => {
  switch (props.type) {
    case 'alert-success':
      return 'progress-primary'
    case 'alert-danger':
      return 'progress-error'
    case 'alert-info':
      return 'progress-info'
    default:
      return 'progress-primary'
  }
})

const useSoft = computed(() => {
  switch (props.type) {
    case 'alert-success':
      return false
    case 'alert-danger':
      return true
    default:
      return false
  }
})
</script>
<template>
  <div class="alert flex flex-row relative" :class="[type, useSoft ? 'alert-soft' : '']">
    <span class="flex gap-2 items-center">
      <FontAwesomeIcon :icon="icon" />
      {{ message }}
    </span>
    <button class="btn btn-ghost btn-circle btn-sm" @click="close">
      <FontAwesomeIcon :icon="['fas', 'x']" />
    </button>
    <progress class="progress absolute bottom-0 w-full left-0 rounded-none" :class="progressColor" :value="remaining"
      :max="duration / INTERVAL"></progress>
  </div>
</template>

================================================
FILE: components/garden-planner/ExportModal.vue
================================================

<script setup lang="ts">
import PGPModal from '@/components/PGPModal.vue'
import domtoimage from 'dom-to-image-more'
import download from 'downloadjs'
import uniqid from 'uniqid'


const isTakingScreenshot = useTakingScreenshot()

const emit = defineEmits<{
  (e: 'downloadImage'): void
}>()

const modal = ref<InstanceType<typeof PGPModal> | null>(null)
function openModal() {
  modal.value?.showModal()
}
defineExpose({
  openModal,
})


function filter(node: Node) {
  return node.nodeName !== '#comment'
}

async function saveToImage() {
  const node = document.getElementById('garden-planner') as HTMLElement

  if (!node) {
    console.error('No node')
  }

  isTakingScreenshot.set(true)
  const id = `PaliaGardenPlanner-${uniqid()}`

  await nextTick();


  domtoimage.toPng(
    node, {
    copyDefaultStyles: false,
    filter: filter,
    width: node.clientWidth,
    height: node.clientHeight
  },
  ).then(
    (dataUrl: string) => {
      if (download(dataUrl, id)) {
        useTakingScreenshot().set(false)
      }
    },
  ).finally((err: any) => {
    isTakingScreenshot.set(false)
  })

}

const downloadedImgSrc = ref('')

const displayWidth = ref(0)

function setScreenshotLayout() {
  const gardenDisplay = document.getElementById('garden-display')
  const display = document.getElementById('garden-planner')

  if (!gardenDisplay || !display) {
    return
  }

  displayWidth.value = (gardenDisplay.clientWidth)
  if (useGarden().isGardenWide)
    displayWidth.value += gardenDisplay.clientWidth || 0

  // console.log('Setting width')
  displayWidth.value = Math.max(displayWidth.value, 1368)
  display.style.width = `${displayWidth.value}px`
  // console.log('Finish setting width', display.style)
}

function resetScreenshotLayout() {

  const gardenDisplay = document.getElementById('garden-display')
  const display = document.getElementById('garden-planner')

  if (!gardenDisplay || !display) {
    // console.error('HTML element not found for garden-display or display', gardenDisplay, display)
    return
  }

  // console.log('DISPLAY STYLE:', display.style)
  display.style.width = ''
}

watch(useTakingScreenshot(), () => {
  if (useTakingScreenshot().get)
    setScreenshotLayout()
  else if (useTakingScreenshot().get === false && displayWidth.value > 0) {
    resetScreenshotLayout()
    modal.value?.hideModal()
  }
})


</script>

<template>
  <PGPModal ref="modal">
    <template #header>
      Export
    </template>
    <template #body>
      <div class="card card-compact">
        <div class="card-body bg-palia-blue-dark p-4 px-3 rounded-md flex flex-col relative">
          <p class="card-title">
            As Image
          </p>
          <div class="card-actions">
            <button class="btn normal-case btn-outline" @click="async () => await saveToImage()">
              <span v-if="isTakingScreenshot.get" class="loading loading-spinner loading-sm"></span>
              Export as Image
            </button>
          </div>

          <p>
            Export your garden as a landscape PNG image.
          </p>
          <p class="text-warning">
            <font-awesome-icon icon="exclamation-triangle" class="mr-1" />
            App may freeze for a few seconds while it generates the image.
          </p>
          <p class="text-warning">
            Known to break on some platforms
          </p>
        </div>
      </div>
    </template>

  </PGPModal>
</template>

================================================
FILE: components/garden-planner/LoadModal.vue
================================================

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { deleteGardenCode, loadSavedGardenCodes, savedGardenCodes } from './SaveLoadUtils'
import PGPModal from '@/components/PGPModal.vue'
import { useToasts } from '~/stores/useToasts'

const emit = defineEmits<{
  (e: 'load', code: string): void
}>()

const searchQuery = ref('')

const toasts = useToasts()

onMounted(() => {
  loadSavedGardenCodes()
})
const modal = ref<InstanceType<typeof PGPModal> | null>(null)
// const { confirm } = useConfirmDialog()

function openModal() {
  modal.value?.showModal()
  loadSavedGardenCodes()
}
defineExpose({
  openModal,
})

async function confirmDelete(index: number) {
  deleteGardenCode(index)
  toasts.addToast({
    message: 'Layout deleted',
    type: 'alert-success',
    duration: 2000,
  })
}

const { text, copy } = useClipboard()

const activeTab = ref('browser-tab')

function load(code: string) {
  emit('load', code)
  modal.value?.hideModal()
}

function loadSavedCode(code: string) {
  emit('load', code)
  modal.value?.hideModal()
}

const filteredSavedGardenCodes = computed(() => {
  return savedGardenCodes.value
    .filter(code => code.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    // .sort((codeA, codeB) => ((new Date(codeA.dateCreated).getTime() - new Date(codeB.dateCreated).getTime()) * -1))
})

const loadCode = ref(text.value)
async function paste() {
  loadCode.value = await navigator.clipboard.readText()
}

</script>

<template>
  <PGPModal ref="modal" useFullHeight>
    <template #header>
      Load Layout
    </template>
    <template #body>
      <div role="tablist" class="tabs tabs-box w-fit">
        <a role="tab" class="px-2 tab" :class="{ 'tab-active': activeTab === 'clipboard-tab' }"
          @click="activeTab = 'clipboard-tab'">From Clipboard</a>
        <a role="tab" class="px-2 tab" :class="{ 'tab-active': activeTab === 'browser-tab' }"
          @click="activeTab = 'browser-tab'">From Browser</a>
      </div>
      <div v-if="activeTab === 'clipboard-tab'" id="clipboard-tab" class="flex flex-col gap-2">
        <div class="card card-compact">
          <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
            <p class="card-title">
              Clipboard
            </p>
            <textarea v-model="loadCode" class="textarea h-fit font-mono min-h-[8rem]" />
            <div class="card-actions">
              <button class="normal-case btn btn-sm btn-ghost" @click="paste()">
                Paste Code
              </button>
            </div>
          </div>
        </div>
        <button class="normal-case btn btn-sm w-fit" @click="() => load(loadCode)">
          Load
        </button>
      </div>
      <div v-if="activeTab === 'browser-tab'" id="browser-tab" class="">
        <div class="card card-compact">
          <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
            <p class="card-title">
              Saved Layouts
            </p>
            <ul class="flex flex-col w-full gap-2 p-2 overflow-y-auto rounded-xs bg-base-100 max-h-90 md:max-h-[496px]">
              <li v-for="(code, index) in filteredSavedGardenCodes" :key="index"
                class="flex items-start justify-between w-full pb-2 border-b last:border-b-0 border-b-accent/20">
                <div class="max-w-2/3 md:max-w-3/4">
                  <p>{{ code.title }}</p>
                  <p class="font-mono leading-none opacity-50 text-xxs text-justify line-clamp-3 md:line-clamp-4">
                    {{ code.code }}
                  </p>
                </div>
                <div class="flex gap-1">
                  <button class="btn btn-xs btn-circle btn-ghost" @click="loadSavedCode(code.code)">
                    <font-awesome-icon class="text-sm" icon="download" />
                  </button>
                  <button class="btn btn-xs btn-circle btn-ghost" :class="{ 'btn-disabled': code.code === text }"
                    @click="copy(code.code)">
                    <font-awesome-icon class="text-sm" icon="copy" />
                  </button>
                  <button class="btn btn-xs btn-circle btn-ghost text-weed-prevention" @click="confirmDelete(index)">
                    <font-awesome-icon class="text-sm" icon="trash" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </PGPModal>
</template>

================================================
FILE: components/garden-planner/MenuBar.vue
================================================

<!--
 Menu Bar for the Garden Planner
    - Should contain buttons for saving, loading, sharing, editing layout, and clearing plot
 -->

<script setup lang="ts">
import useGarden from '~/stores/useGarden'
import { useSaveCode } from '~/stores/useSaveCode'
import { useSettingsCode } from '~/stores/useSettingsCode'
import SaveModal from '~/components/garden-planner/SaveModal.vue'
import LoadModal from '~/components/garden-planner/LoadModal.vue'
import LayoutCreator from '@/components/LayoutCreator.vue'
import ExportModal from '~/components/garden-planner/ExportModal.vue'
import { useToasts } from '~/stores/useToasts'
import UISettingsModal from './UISettingsModal.vue'

const toasts = useToasts()
const gardenHandler = useGarden()

const { garden } = gardenHandler

function clearGarden() {
  garden.clearAllPlots()
  gardenHandler.update()
}


const saveCode = useSaveCode()
const settingsCode = useSettingsCode()

function loadLayoutFromCode(code: string) {
  const hasLoadedSuccessfully = garden.loadLayout(code)
  settingsCode.set(garden.loadSettingsCode)
  settingsCode.requestUpdate()
  gardenHandler.update()
  gardenHandler.requestFullUpdate()

  if (hasLoadedSuccessfully) {
    toasts.addToast({
      message: 'Layout loaded successfully',
      type: 'alert-success',
      duration: 2000,
    })
  }
}

function saveLayout() {
  saveCode.set(garden.saveLayout(settingsCode.code))
}

const saveModal = ref<InstanceType<typeof SaveModal> | null>(null)
function openSaveModal() {
  saveLayout()
  saveModal.value?.openModal()
}

const loadModal = ref<InstanceType<typeof LoadModal> | null>(null)
function openLoadModal() {
  loadModal.value?.openModal()
}

const uiSettingsModal = ref<InstanceType<typeof UISettingsModal> | null>(null)
function openUISettingsModal() {
  uiSettingsModal.value?.openModal()
}


const exportModal = ref<InstanceType<typeof ExportModal> | null>(null)
function openExportModal() {
  exportModal.value?.openModal()
}

const createLayoutDialog = ref<InstanceType<typeof LayoutCreator> | null>()
function openNewLayoutModal() {
  createLayoutDialog.value?.openModal()
}

const urlParams = useUrlSearchParams('history')
onMounted(() => {
  // Load layout from URL parameter if available
  if (urlParams.layout) {
    loadLayoutFromCode(urlParams.layout as string)
  }
})

</script>

<template>
  <section class="flex flex-wrap justify-between gap-1 p-2 sm:gap-2 bg-palia-blue-dark rounded-b-md">
    <div class="grid flex-wrap w-full grid-cols-3 gap-2 py-1 sm:py-0 xl:py-2 xl:flex xl:w-fit order-2 xl:order-1">
      <button class="xl:h-full normal-case btn bg-palia-blue" @click="openSaveModal">
        <font-awesome-icon class="text-lg" icon="floppy-disk" />
        Save
      </button>
      <button class="xl:h-full normal-case btn bg-palia-blue" @click="openLoadModal">
        <font-awesome-icon class="text-lg" icon="download" />
        Load
      </button>
      <button class="xl:h-full normal-case btn bg-palia-blue" @click="openExportModal">
        <font-awesome-icon class="text-lg" icon="share-from-square" />
        Export
      </button>
    </div>
    <div
      class="flex-col items-center w-full px-10 py-1 rounded-md sm:py-2 xl:w-fit xl:flex bg-palia-blue order-3 xl:order-2">
      <TimeDisplay />
    </div>
    <div
      class="grid flex-wrap w-full grid-cols-2 sm:grid-cols-3 gap-2 py-1 xl:w-fit xl:flex xl:py-2 order-2 xl:order-3 ">
      <button class="xl:h-full btn btn-soft" @click="openNewLayoutModal">
        <font-awesome-icon class="text-lg" icon="pen-to-square" />
        New Layout
      </button>
      <button class="xl:h-full btn btn-warning text-neutral" @click="clearGarden">
        <font-awesome-icon class="text-lg" icon="trash" />
        Clear Plot
      </button>

      <!-- UI Modal -->
      <button class="xl:h-full btn btn-info btn-soft" @click="openUISettingsModal">
        <font-awesome-icon class="text-lg" icon="cog" />
        UI Settings
      </button>
    </div>
    <Teleport to="body">
      <!-- Put all modals here -->
      <SaveModal ref="saveModal" @save-layout="saveLayout()" />
      <LoadModal ref="loadModal" @load="(loadCode) => loadLayoutFromCode(loadCode)" />
      <UISettingsModal ref="uiSettingsModal" />
      <LayoutCreator ref="createLayoutDialog" @create-new-layout="loadLayoutFromCode" />
      <ExportModal ref="exportModal" />
    </Teleport>

  </section>
</template>

================================================
FILE: components/garden-planner/NewGardenDisplay.vue
================================================

<script setup lang="ts">
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import useGarden from '~/stores/useGarden'
import type { Crop, Fertiliser, Plot, Tile } from '~/assets/scripts/garden-planner/imports'
import { SelectedItemType, useSelectedItem } from '~/stores/useSelectedItem'
import { useDragAndDrop } from '~/stores/useDragAndDrop'


const isTakingScreenshot = useTakingScreenshot()
const gardenHandler = useGarden()
const { garden } = gardenHandler

const plotsDisplay = ref<HTMLDivElement | null>(null)
const selectedItem = useSelectedItem()
const dragHandler = useDragAndDrop()

function resetHover() {
  for (const row of garden.plots) {
    for (const plot of row)
      plot.resetTileHover()
  }
}

const update = useDebounceFn(() => {
  gardenHandler.update()
}, 50, { maxWait: 100 })

function selectTile(event: MouseEvent, row: number, col: number, plot: Plot) {
  if (event.button === 2)
    return

  resetHover()

  switch (selectedItem.type) {
    case SelectedItemType.CropErase:
      plot.setTile(row, col, null)
      break
    case SelectedItemType.FertiliserErase:
      plot.removeFertiliserFromTile(row, col)
      break
    case SelectedItemType.Crop:
      plot.setTile(row, col, selectedItem.val as Crop)
      break
    case SelectedItemType.Fertiliser:
      plot.addFertiliserToTile(row, col, selectedItem.val as Fertiliser, {
        removeSameId: true,
      })
      break
  }

  update()
}

function onMouseLeave() {
  resetHover()
  dragHandler.clearTileCoords()
}

function handleRightClick(row: number, col: number, plot: Plot) {
  if (!plot.isActive)
    return

  const tile = plot.getTile(row, col)
  if (!tile)
    return

  if (tile.fertiliser)
    plot.removeFertiliserFromTile(row, col)
  else if (tile.crop)
    plot.setTile(row, col, null)
  else return

  update()
}

const isRightClickDown = ref(false)
const { pressed } = useMousePressed()

function onHover(row: number, col: number, plot: Plot) {
  resetHover()

  if (selectedItem.type === SelectedItemType.Crop || selectedItem.type === SelectedItemType.Fertiliser)
    plot.onTileHover(row, col, selectedItem.val as Crop | Fertiliser)

  if (pressed.value && !isRightClickDown.value) {
    switch (selectedItem.type) {
      case SelectedItemType.CropErase:
        plot.removeCropFromTile(row, col)
        break
      case SelectedItemType.FertiliserErase:
        plot.removeFertiliserFromTile(row, col)
        break
      case SelectedItemType.Crop:
        if (plot.getTile(row, col)?.crop?.type !== (selectedItem.val as Crop).type)
          plot.setTile(row, col, selectedItem.val as Crop)
        break
      case SelectedItemType.Fertiliser:
        plot.addFertiliserToTile(row, col, selectedItem.val as Fertiliser, {
          removeSameId: true,
        })
        break
    }

    update()
  }

  else if (pressed.value && isRightClickDown.value) {
    handleRightClick(row, col, plot)

    update()
  }
}

onMounted(() => {
  useEventListener('mousedown', (event: MouseEvent) => {
    if (event.button === 2)
      isRightClickDown.value = true
  })
  useEventListener('mouseup', (event: MouseEvent) => {
    if (event.button === 2)
      isRightClickDown.value = false
  })
})

function onMiddleClick(row: number, col: number, plot: Plot) {
  if (!plot.isActive)
    return

  const tile = plot.getTile(row, col)

  if (tile?.crop)
    selectedItem.select(tile.crop)
  else if (tile?.fertiliser)
    selectedItem.select(tile.fertiliser)
  else
    return

  update()
}

function onDragEnter(row: number, col: number, plot: Plot) {
  dragHandler.onTileEnter(row, col, plot)
}
</script>

<template>
  <section class="flex flex-col items-center h-full" 
  id="garden-display"
  :class="[
    ((isTakingScreenshot.get && gardenHandler.isGardenWide) || isTakingScreenshot.get) ? 'max-w-[1680px]' : 'max-w-full',
    (gardenHandler.isGardenWide) ? 'overflow-x-scroll max-w-full' : '',
  ]"
  aria-label="Garden Display">
    <div class="px-3 my-4 rounded-xl md:my-0 lg:ml-0 lg:mr-auto lg:px-2"
      :class="(isTakingScreenshot.get) ? 'w-fit px-1 mt-0' : 'w-full sm:w-fit'" @contextmenu.prevent.self="">
      <div role="grid" ref="plotsDisplay" class="grid w-full gap-2 pr-12 overflow-auto sm:pr-0">
        <div role="row" v-for="(plotRow, plotRowIndex) in garden.plots" :key="plotRowIndex" class="flex gap-2 plotRow">
          <div role="gridcell" v-for="(plot, plotIndex) in plotRow" :key="plotIndex" class="relative flex flex-col gap-0 plot">
            <div role="grid" v-for="(row, rowIndex) in plot.tiles" :key="rowIndex" class="flex gap-0 plotTileRow cols-3">
              <div role="row" v-for="(tile, index) in row" :key="index" class="plotTile">
                <CropTile role="gridcell" :tile="tile as Tile" :is-disabled="!plot.isActive"
                  :bonus-hovered="useGarden().getHoveredBonus" :index="(1 + rowIndex) + (index + (rowIndex * 2))"
                  @mousedown.middle.prevent.stop
                  @click.left="(event: MouseEvent) => selectTile(event, rowIndex, index, plot as Plot)"
                  @click.right="(() => handleRightClick(rowIndex, index, plot as Plot))"
                  @mouseover="onHover(rowIndex, index, plot as Plot)" @mouseleave="onMouseLeave"
                  @click.middle="(() => onMiddleClick(rowIndex, index, plot as Plot))"
                  @dragenter="(() => onDragEnter(rowIndex, index, plot as Plot))" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

================================================
FILE: components/garden-planner/NewSettings.vue
================================================

<script setup lang="ts">
import OptionCard from './HarvestCalculator/OptionCard.vue'
import SettingsMinutesDisplay from './SettingsMinutesDisplay.vue'
import ItemDisplayAlt from './HarvestCalculator/ItemDisplayAlt.vue'
import useHarvester from '~/stores/useHarvester'
import type { ProcessorSetting, ProcessorSettings } from '~/assets/scripts/garden-planner/classes/processor'
import { type ICropNameWithGrowthDiff, ItemType } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import { CropType, getCropFromType } from '~/assets/scripts/garden-planner/imports'
import useProcessor from '~/stores/useProcessor'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const harvester = useHarvester()
const starBaseChance = computed(() => Math.trunc(Math.min(100, (0.25 + (harvester.settings.useStarSeeds ? 0.25 : 0) + (harvester.settings.level * 0.02)) * 100)))
const processor = useProcessor()

// Allows us to save settings of unselected crops
const activeProcessorSettings = computed(() => {
  const activeSettings = {
    cropSettings: new Map() as Map<ICropNameWithGrowthDiff, ProcessorSetting>,
    crafterSetting: 0,
    goldAverageSetting: 'crafterTime' as 'crafterTime' | 'growthTick'
  } satisfies ProcessorSettings

  for (const [cropId, setting] of processor.settings.cropSettings) {
    if (setting.isActive && setting.count > 0)
      activeSettings.cropSettings.set(cropId, setting)
  }

  activeSettings.goldAverageSetting = processor.settings.goldAverageSetting

  return activeSettings
})

const activeCrafterCount = computed(() => {
  return Array
    .from(activeProcessorSettings.value.cropSettings.values())
    .reduce((sum, setting) => {
      return (setting.processAs !== ItemType.Crop) ? sum + setting.crafters : sum
    }, 0);
})

function getCropImgSrc(cropType: CropType) {
  if (cropType === CropType.None || cropType === null) {
    return {
      src: '',
      alt: '',
    }
  }
  else {
    const crop = getCropFromType(cropType)
    return {
      src: crop?.image,
      alt: cropType,
    }
  }
}

const activeTab = ref('Harvest')

function updateSettings() {
  processor.updateSettings(Object.assign({}, processor.settings))
  processor.simulateProcessing(harvester.totalHarvest)
}

function onChangeSettings() {
  updateSettings()
}

const isOverCrafterLimit = computed(() => activeCrafterCount.value > 30)

const isUnderleveledForSeeder = computed(() => harvester.settings.level < 5)
const isUnderleveledForPreserveJar = computed(() => harvester.settings.level < 8)
</script>

<template>
  <section id="planner-settings" class="relative flex flex-col gap-1 py-2 ">
    <nav role="tablist" class="font-semibold tabs tabs-box w-fit join">
      <button role="tab" class="tab join-item" :class="(activeTab === 'Harvest') ? 'tab-active' : ''"
        @click="activeTab = 'Harvest'" :aria-selected="activeTab === 'Harvest'">
        <p>General</p>
      </button>
      <button role="tab" class="tab join-item" :class="(activeTab === 'Crops') ? 'tab-active' : ''"
        @click="activeTab = 'Crops'" :aria-selected="activeTab === 'Crops'">
        <p>Crops</p>
      </button>
    </nav>
    <section v-if="activeTab === 'Crops'" class="h-full rounded-md isolate bg-accent">
      <div v-if="activeProcessorSettings.cropSettings.size > 0" aria-hidden
        class="absolute bottom-0 z-10 w-full rounded-md pointer-events-none opacity-70 h-1/4 max-h-12 bg-linear-to-b from-transparent to-primary" />

      <div v-if="activeProcessorSettings.cropSettings.size > 0"
        class="z-10 grid items-center grid-cols-12 gap-2 px-1 py-2 border-b text-misc bg-accent rounded-t-md">
        <div class="relative flex items-center w-full col-span-2 gap-2 md:col-span-1 xl:col-span-2">
          <p class="text-sm font-bold">
            Item
          </p>
        </div>
        <div class="flex items-center justify-start w-full h-full col-span-5 md:col-span-6 xl:col-span-5">
          <p class="text-sm font-bold">
            Process As
          </p>
        </div>
        <div class="flex items-center justify-start w-full h-full col-span-5 gap-2 pl-2"
          :class="{ 'text-warning': isOverCrafterLimit }">
          <p class="text-sm font-bold" :class="{ tooltip: isOverCrafterLimit }"
            data-tip="Known max of 30 crafters reached">
            <span v-if="isOverCrafterLimit">
              <FontAwesomeIcon :icon="['fas', 'triangle-exclamation']" />
            </span>
            Crafters {{ (activeCrafterCount > 0) ? `- ${activeCrafterCount}` : '' }}
          </p>
        </div>
      </div>
      <section class="overflow-y-auto max-h-[456px] rounded-b-md pb-2 scrollbar-primary">
        <div v-if="activeProcessorSettings.cropSettings.size === 0"
          class="flex items-center justify-center p-2 py-4 font-bold rounded-md text-misc bg-accent">
          <p>
            No crops in garden, add some to begin processing.
          </p>
        </div>
        <ul v-if="activeProcessorSettings.cropSettings.size > 0"
          class="flex flex-col max-h-full gap-1 pb-8 pl-1 pr-2 rounded-b-md bg-accent">
          <li v-for="[cropId, setting] in activeProcessorSettings.cropSettings" :key="cropId"
            class="grid items-center grid-cols-12 gap-2 py-1 pb-3  text-misc not-last:border-b ">
            <div class="flex items-center w-full col-span-2 gap-2 md:col-span-1 xl:col-span-2">
              <ItemDisplayAlt :img-src="getCropImgSrc(setting.cropType).src"
                :img-alt="getCropImgSrc(setting.cropType).alt" :star="setting.isStar" :count="setting.count" />
              <p class="hidden font-bold capitalize xl:text-xs xl:block">
                {{ setting.cropType }}
              </p>
            </div>
            <div class="flex flex-col items-start justify-start w-full h-full col-span-5 md:col-span-6 xl:col-span-5">
              <div class="join">
                <button class="p-2 btn join-item btn-primary btn-square"
                  :class="(setting.processAs === ItemType.Crop) ? 'btn-active' : ''" @click="async () => {
                    if (setting.processAs === ItemType.Crop)
                      return

                    setting.processAs = ItemType.Crop

                    await nextTick()
                    onChangeSettings()
                  }" aria-label="Process as Crop">
                  <img class="w-full h-full" :src="getCropFromType(setting.cropType)?.cropImage"
                    :alt="`${setting.cropType} Crop`">
                </button>
                <button class="p-2 btn join-item btn-primary btn-square"
                  :class="(setting.processAs === ItemType.Seed) ? 'btn-active' : ''" @click="() => {
                    if (setting.processAs === ItemType.Seed)
                      return

                    setting.processAs = ItemType.Seed

                    onChangeSettings()
                  }" aria-label="Process as Seed">
                  <img class="w-full h-full" :src="getCropFromType(setting.cropType)?.seedImage"
                    :alt="`${setting.cropType} Seed`">
                </button>
                <button v-if="getCropFromType(setting.cropType)?.goldValues.hasPreserve"
                  class="p-2 btn join-item btn-primary btn-square "
                  :class="(setting.processAs === ItemType.Preserve) ? 'btn-active' : ''" @click="() => {
                    if (setting.processAs === ItemType.Preserve)
                      return
                    setting.processAs = ItemType.Preserve
                    onChangeSettings()
                  }" aria-label="Process as Preserve">
                  <img class="h-full" :src="getCropFromType(setting.cropType)?.preserveImage"
                    :alt="`${setting.cropType} Preserve`">
                </button>
              </div>
              <p v-if="(setting.processAs === ItemType.Preserve && isUnderleveledForPreserveJar)
                || (setting.processAs === ItemType.Seed && isUnderleveledForSeeder)"
                class="text-xxs pl-1 flex items-center gap-0.5 text-warning font-bold">
                <FontAwesomeIcon :icon="['fas', 'triangle-exclamation']" />
                Need level
                <template v-if="setting.processAs === ItemType.Preserve">8+</template>
                <template v-else>5+</template>
              </p>
            </div>

            <div v-if="setting.processAs !== ItemType.Crop"
              class="relative flex flex-col items-start justify-start w-full h-full col-span-5 gap-x-2 pl-2">
              <div class="join">
                <button class="btn btn-sm  join-item disabled:bg-palia-blue-dark!" :disabled="setting.crafters <= 1"
                  @click="() => {
                    if (setting.crafters <= 1)
                      return

                    setting.crafters--

                    onChangeSettings()
                  }" aria-label="Remove 1 Crafter">
                  <font-awesome-icon :icon="['fas', 'chevron-left']" />
                </button>
                <input v-model="setting.crafters" class="input input-sm text-center w-12 text-white! join-item"
                  type="number" min="1" @change="() => {
                    if (setting.crafters < 1)
                      setting.crafters = 1

                    onChangeSettings()
                  }">
                <button class="btn-square btn btn-sm join-item disabled:bg-palia-blue-dark!" @click="() => {
                  setting.crafters++

                  onChangeSettings()
                }" aria-label="Add 1 Crafter">
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </button>
              </div>
              <SettingsMinutesDisplay class="absolute bottom-0 w-full translate-y-2 whitespace-nowrap"
                :minutes="processor.processor.output[setting.processAs === ItemType.Seed ? 'seeds' : 'preserves'].get(cropId)?.minutesProcessedEffective" />
            </div>
          </li>
        </ul>
      </section>
    </section>
    <section v-else-if="activeTab === 'Harvest'" class="relative h-full isolate">
      <div v-if="activeProcessorSettings.cropSettings.size > 0" aria-hidden
        class="absolute bottom-0 z-10 w-full rounded-md pointer-events-none opacity-90 h-1/4 max-h-12 bg-linear-to-b from-transparent to-primary" />
      <ul class="grid gap-1 max-h-[488px] overflow-y-auto pr-2 rounded-md scrollbar-primary">
        <OptionCard label="days" name="Days">
          <template #input>
            <div class="join">
              <button class="join-item btn btn-sm " @click="harvester.settings.days = -1" aria-label="Set Days to LCM">
                LCM
              </button>
              <button class="join-item btn btn-sm " @click="harvester.settings.days = 0" aria-label="Set Days to Auto">
                Auto
              </button>
              <input v-model="harvester.settings.days" class="join-item input input-sm text-lg max-w-[6rem] text-accent"
                type="number" min="0">
              <button class="join-item btn btn-sm " @click="harvester.settings.days = 30" aria-label="Set Days to 30">
                30
              </button>
              <button class="join-item btn btn-sm " @click="harvester.settings.days = 180" aria-label="Set Days to 180">
                180
              </button>
            </div>
          </template>
          <template #labels>
            <p>
              Manual override for how many days of harvest
            </p>
            <p>
              <span class="font-bold">Auto:</span> Uses crop w/ highest growth time
            </p>
            <p>
              <span class="font-bold">LCM:</span> Finds a day where all crops are harvestable
            </p>
          </template>
        </OptionCard>
        <OptionCard label="level" name="Gardening Level">
          <template #input>
            <div class="join ">
              <button class="join-item btn btn-sm text-primary" @click="harvester.settings.level = 0"
                aria-label="Set Level to 0">
                0
              </button>
              <button class="join-item btn btn-sm text-primary" @click="harvester.settings.level = 10"
                aria-label="Set Level to 10">
                10
              </button>
              <input v-model="harvester.settings.level"
                class="input input-sm text-lg max-w-[5rem] join-item text-accent" type="number" min="0"
                aria-label="Gardening Level">
              <button class="join-item btn btn-sm text-primary" @click="harvester.settings.level = 25"
                aria-label="Set Level to 25">
                25
              </button>
              <button class="join-item btn btn-sm text-primary " @click="harvester.settings.level = 50"
                aria-label="Set Level to 50">
                50
              </button>
            </div>
          </template>
          <template #labels>
            <p>
              Decides base star chance of crops
            </p>
            <p>
              Base Star Chance: <code class="px-2 rounded-xs bg-misc text-accent">{{ starBaseChance }}%</code>
            </p>
            <p>Formula in info</p>
          </template>
        </OptionCard>

        <OptionCard label="allStarSeeds" name="All Star Seeds">
          <template #input>
            <input v-model="harvester.settings.useStarSeeds" class="toggle" type="checkbox" aria-label="Use Star Seeds">
          </template>
          <template #labels>
            <p>
              The entire layout will use star seeds
            </p>
          </template>
        </OptionCard>

        <OptionCard label="goldAverageSetting" name="Process Gold Average Method">
          <template #input>
            <div class="join">
              <button class="join-item btn text-accent"
                :class="{ 'bg-palia-blue': (processor.settings.goldAverageSetting === 'crafterTime') }"
                @click="processor.settings.goldAverageSetting = 'crafterTime'">
                Crafter Time
              </button>
              <button class="join-item btn text-accent"
                :class="{ 'bg-palia-blue': (processor.settings.goldAverageSetting === 'growthTick') }"
                @click="processor.settings.goldAverageSetting = 'growthTick'">
                Growth Ticks
              </button>
            </div>
          </template>
          <template #labels>
            <p>
              When processing crops, the gold average will be calculated by:
            </p>
            <p>
              <span class="font-bold">Crafting Time:</span>  Gold / Overall Process Time
            </p>
            <p>
              <span class="font-bold">Growth Ticks:</span> Gold / Growth Ticks (Day of Last Harvest)
            </p>
          </template>
        </OptionCard>


        <OptionCard label="includeReplant" name="Include Replant">
          <template #input>
            <input v-model="harvester.settings.includeReplant" class="toggle" type="checkbox"
              aria-label="Include Replant">
          </template>
          <template #labels>
            <p>
              Replants the crops after harvest until the last day
            </p>
            <p v-show="!harvester.settings.includeReplant" class="font-bold">
              Off: Bonuses will still be calculated but the
              harvest days will be inaccurate
            </p>
          </template>
        </OptionCard>

        <OptionCard label="includeReplantCost" name="Include Replant Cost">
          <template #input>
            <input v-model="harvester.settings.includeReplantCost" class="toggle" type="checkbox"
              :disabled="!harvester.settings.includeReplant" aria-label="Include Replant Cost">
          </template>
          <template #labels>
            <p>
              Accounts for the cost of re-planting
            </p>
          </template>
        </OptionCard>

        <OptionCard label="useGrowthBoost" name="Use Growth Boost">
          <template #input>
            <input v-model="harvester.settings.useGrowthBoost" class="toggle" type="checkbox"
              aria-label="Use Growth Boost">
          </template>
          <template #labels>
            <p>
              Factors in growth boost when simulating yields, does not account for any RNG and is theoretical
            </p>
            <p class="py-1 text-warning">
              <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
              Likely bugged as of 0.169
              <NuxtLink class="pl-1 underline text-misc"
                to="https://docs.google.com/document/d/1f4MQHjEC1RCNpDUz1I3eg2tioD_6yBmW0XWsVxUOJ1Y/edit"
                target="_blank" :prefetch="false">
                <font-awesome-icon class="text-sm" :icon="['fas', 'arrow-up-right-from-square']" />
                (Source)
              </NuxtLink>
            </p>
          </template>
        </OptionCard>

        <OptionCard label="includeFertiliserCosts" name="Include Fertiliser Costs" disabled>
          <template #input>
            <input class="toggle" type="checkbox" disabled aria-label="Include Fertiliser Costs (Not yet supported)">
          </template>
          <template #labels>
            <p>
              <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
              Not yet supported
            </p>
          </template>
        </OptionCard>
      </ul>
    </section>

  </section>
</template>

================================================
FILE: components/garden-planner/NewStatsDisplay.vue
================================================

<script setup lang="ts">
import useGarden from '~/stores/useGarden'
import { Bonus } from '~/assets/scripts/garden-planner/imports'

const gardenHandler = useGarden()

const plotStat = computed(() => gardenHandler.plotStat)
</script>

<template>
  <section id="statsDisplay" class="">
    <h2 class="sr-only">
      Crop Bonus Statistics
    </h2>
    <div class="flex gap-[0.35rem] lg:gap-3 xl:gap-4 w-full cursor-help justify-center p-1 xs:bg-primary rounded-lg xs:p-2">
      <CoverageStat
        :total-crops="plotStat.cropCount"
        :covered="plotStat.cropBonusCoverage['Speed Increase']" class="text-growth-boost"
        @mouseover="gardenHandler.setHoveredBonus(Bonus.SpeedIncrease)"
        @mouseleave="gardenHandler.setHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'forward-fast']" />
        </template>
        <template #title>
          Growth Boost
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStat.cropCount"
        :covered="plotStat.cropBonusCoverage['Harvest Increase']" class="text-harvest-boost"
        @mouseover="gardenHandler.setHoveredBonus(Bonus.HarvestIncrease)"
        @mouseleave="gardenHandler.setHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'wheat-awn']" />
        </template>
        <template #title>
          Harvest Boost
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStat.cropCount"
        :covered="plotStat.cropBonusCoverage['Quality Increase']" class="text-quality-increase"
        @mouseover="gardenHandler.setHoveredBonus(Bonus.QualityIncrease)"
        @mouseleave="gardenHandler.setHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'star']" />
        </template>
        <template #title>
          Quality Increase
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStat.cropCount"
        :covered="plotStat.cropBonusCoverage['Water Retain']" class="text-water-retain"
        @mouseover="gardenHandler.setHoveredBonus(Bonus.WaterRetain)"
        @mouseleave="gardenHandler.setHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'droplet']" />
        </template>
        <template #title>
          Water Retain
        </template>
      </CoverageStat>
      <CoverageStat
        :total-crops="plotStat.cropCount"
        :covered="plotStat.cropBonusCoverage['Weed Prevention']" class="text-weed-prevention"
        @mouseover="gardenHandler.setHoveredBonus(Bonus.WeedPrevention)"
        @mouseleave="gardenHandler.setHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'shield']" />
        </template>
        <template #title>
          Weed Prevention
        </template>
      </CoverageStat>
    </div>

  </section>
</template>

================================================
FILE: components/garden-planner/OutputDisplay.vue
================================================

<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NewSettings from './NewSettings.vue'
import LazyHCInfo from './HarvestCalculator/HCInfo.vue'
import CropDetailsDisplay from './OutputDisplay/CropDetailsDisplay.vue'
import OverallDisplay from './OutputDisplay/OverallDisplay.vue'
import { usePlannerDisplayConfig } from '~/stores/usePlannerDisplayConfig'

const isTakingScreenshot = useTakingScreenshot()
const plannerDisplayConfig = usePlannerDisplayConfig()
const activeTab = ref('display')
function setTab(tab: string) {
  activeTab.value = tab
}

defineProps({
  isMainOutputDisplay: {
    type: Boolean,
    default: false
  }
})

// const selectedTab = ref<'garden+display' | 'display+display'>('garden+display')
// const emit = defineEmits(['tabChanged'])
// watchEffect(() => {
//   emit('tabChanged', selectedTab.value)
// })

</script>

<template>
  <section class="p-2 ">
    <section v-if="!isTakingScreenshot.get"
      class="flex flex-row-reverse justify-between border-b border-b-misc pb-1 px-1">
      <section class="flex justify-end gap-1">
        <button id="approximator-display-tab" aria-label="Display Tab"
          class="text-lg border-none btn-circle btn-sm btn btn-misc sm:tooltip" data-tip="Output Display"
          :class="activeTab === 'display' ? 'btn-active' : ''" @click="setTab('display')">
          <FontAwesomeIcon :icon="['fas', 'table-list']" />
        </button>
        <button id="approximator-crop-details-tab" aria-label="Crop Details Tab"
          class="text-lg border-none btn-circle btn-sm btn btn-misc sm:tooltip" data-tip="Crop Details"
          :class="activeTab === 'crop-details' ? 'btn-active' : ''" @click="setTab('crop-details')">
          <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" />
        </button>
        <button id="approximator-options-tab" aria-label="Options Tab"
          class="text-lg border-none btn-circle btn-sm btn btn-misc sm:tooltip" data-tip="Harvest & Process Settings"
          :class="activeTab === 'options' ? 'btn-active' : ''" @click="setTab('options')">
          <FontAwesomeIcon :icon="['fas', 'sliders']" />
        </button>
        <button id="approximator-info-tab" aria-label="Info Tab" data-tip="Info"
          class="text-lg border-none btn-circle btn-sm btn btn-misc sm:tooltip"
          :class="activeTab === 'info' ? 'btn-active' : ''" @click="setTab('info')">
          <FontAwesomeIcon :icon="['fas', 'info']" />
        </button>
      </section>
      <section class="join" v-if="isMainOutputDisplay">
        <button class="btn join-item btn-sm gap-1 tooltip" aria-label="Show Garden + Output Display (default)" data-tip="
          Garden + Display (default)" @click="plannerDisplayConfig.set('garden+display')">
          <FontAwesomeIcon :icon="['fas', 'table-cells']" />
          <FontAwesomeIcon :icon="['fas', 'window-maximize']" />
        </button>
        <button class="btn join-item btn-sm gap-1 tooltip" aria-label="Show double Output Displays" data-tip=" Double Displays"
          @click="plannerDisplayConfig.set('display+display')">
          <FontAwesomeIcon :icon="['fas', 'window-maximize']" />
          <FontAwesomeIcon :icon="['fas', 'window-maximize']" />
        </button>
      </section>
    </section>
    <OverallDisplay v-show="activeTab === 'display'" id="display-tab" />
    <section v-show="activeTab === 'options'" id="settings-tab">
      <p class="sr-only">
        Settings
      </p>
      <NewSettings />
    </section>
    <CropDetailsDisplay v-show="activeTab === 'crop-details'" />
    <section v-show="activeTab === 'info'" id="info-tab" class="pt-2">
      <LazyHCInfo />
    </section>
  </section> 
</template>

================================================
FILE: components/garden-planner/SaveLoadUtils.ts
================================================
import { ref } from 'vue'

interface SavedGardenCode {
title: string
code: string
dateCreated: string
version: number
}

const savedGardenCodes = ref<SavedGardenCode[]>([])

function loadSavedGardenCodes() {
const savedCodes = localStorage.getItem('savedGardenCodes')
if (savedCodes)
savedGardenCodes.value = (JSON.parse(savedCodes) as SavedGardenCode[]).sort((codeA, codeB) => ((new Date(codeA.dateCreated).getTime() - new Date(codeB.dateCreated).getTime()) \* -1))
}

function saveGardenCode(title: string, code: string, version: number) {
const newCode: SavedGardenCode = {
title,
code,
dateCreated: new Date().toISOString(),
version,
}
savedGardenCodes.value.push(newCode)
localStorage.setItem('savedGardenCodes', JSON.stringify(savedGardenCodes.value))
}

function updateGardenCodeTitle(index: number, newTitle: string) {
if (index >= 0 && index < savedGardenCodes.value.length) {
savedGardenCodes.value[index].title = newTitle
localStorage.setItem('savedGardenCodes', JSON.stringify(savedGardenCodes.value))
}
}

function deleteGardenCode(index: number) {
if (index >= 0 && index < savedGardenCodes.value.length) {
savedGardenCodes.value.splice(index, 1)
localStorage.setItem('savedGardenCodes', JSON.stringify(savedGardenCodes.value))
}
}

export { savedGardenCodes, loadSavedGardenCodes, saveGardenCode, updateGardenCodeTitle, deleteGardenCode }

================================================
FILE: components/garden-planner/SaveModal.vue
================================================

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { deleteGardenCode, loadSavedGardenCodes, saveGardenCode, savedGardenCodes, updateGardenCodeTitle } from './SaveLoadUtils'
import PGPModal from '@/components/PGPModal.vue'
import { useSaveCode } from '~/stores/useSaveCode'

const saveCode = useSaveCode()

const gardenHandler = useGarden()
const { includeSettingsCode } = storeToRefs(useSettingsCode())
const title = ref('New Save')
const version = ref(1)


const toasts = useToasts()

onMounted(() => {
  loadSavedGardenCodes()
})

const modal = ref<InstanceType<typeof PGPModal> | null>(null)
function openModal() {
  modal.value?.showModal()
  loadSavedGardenCodes()
}
defineExpose({
  openModal,
})

const { text, copy } = useClipboard()

const useMarkdown = ref(false)

const activeTab = ref('clipboard-tab')

function addSuccessToast() {
  toasts.addToast({
    message: 'Save successful',
    type: 'alert-success',
    duration: 2000,
  })
}
function addDeleteToast() {
  toasts.addToast({
    message: 'Layout deleted',
    type: 'alert-success',
    duration: 2000,
  })
}



function saveAndClose() {
  saveGardenCode(title.value, saveCode.code, version.value)
  modal.value?.hideModal()

  addSuccessToast()
}
function saveWithoutClose() {
  saveGardenCode(title.value, saveCode.code, version.value)

  addSuccessToast()
}

function editTitle(index: number, newTitle: string) {
  updateGardenCodeTitle(index, newTitle)
}

function deleteCode(index: number) {
  deleteGardenCode(index)
}

watch(includeSettingsCode, () => {
  saveCode.set(gardenHandler.garden.saveLayout(useSettingsCode().code))
})

</script>

<template>
  <PGPModal ref="modal" useFullHeight>
    <template #header>
      Save Layout
    </template>
    <template #body>
      <div class="flex justify-between">
        <div class="tabs tabs-box w-fit">
          <a class="tab" :class="{ 'tab-active': activeTab === 'clipboard-tab' }"
            @click="activeTab = 'clipboard-tab'">Clipboard</a>
          <a class="tab" :class="{ 'tab-active': activeTab === 'browser-tab' }"
            @click="activeTab = 'browser-tab'">Browser</a>
        </div>
      </div>

      <!-- <fieldset class="fieldset items-end">
        <legend class="fieldset-legend">
          Include Settings
        </legend>

      </fieldset> -->

      <label class="flex items-center gap-1">
        <span class="label text-xs">Include Settings</span>
        <input class="toggle toggle-xs" type="checkbox" v-model="includeSettingsCode" />
      </label>
      <div v-if="activeTab === 'clipboard-tab'" id="clipboard-tab" class="flex flex-col gap-2">
        <div class="card card-compact">
          <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
            <p class="card-title">
              Code
            </p>
            <p class="w-full p-2 font-mono text-xs font-thin rounded-md cursor-pointer select-text text-secondary hover:text-white hover:bg-misc-secondary"
              @click="copy(saveCode.code)">
              {{ saveCode.code }}
            </p>
            <div class="card-actions">
              <button class="normal-case btn btn-sm btn-ghost"
                :class="(text === saveCode.code) ? 'btn-disabled font-lights' : ''" @click="copy(saveCode.code)">
                <font-awesome-icon :icon="['fas', 'copy']" />
                {{ (text === saveCode.code) ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>
        </div>
        <div class="card card-compact">
          <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
            <p class="card-title">
              Link
            </p>
            <p class="w-full p-2 font-mono text-xs font-thin rounded-md cursor-pointer select-text text-secondary hover:text-white hover:bg-misc-secondary"
              @click="copy((useMarkdown) ? saveCode.linkMarkdown : saveCode.link)">
              {{ (useMarkdown) ? saveCode.linkMarkdown : saveCode.link }}
            </p>
            <div class="card-actions">
              <button class="normal-case btn btn-sm btn-ghost"
                :class="(text === ((useMarkdown) ? saveCode.linkMarkdown : saveCode.link)) ? 'btn-disabled font-lights' : ''"
                @click="copy((useMarkdown) ? saveCode.linkMarkdown : saveCode.link)">
                {{ (text === ((useMarkdown) ? saveCode.linkMarkdown : saveCode.link)) ? 'Copied!' : 'Copy' }}
                <font-awesome-icon :icon="['fas', 'copy']" />
              </button>
              <label class="flex items-center gap-1 py-2 text-xs font-semibold">
                <div class="font-normal label">Markdown</div>
                <input v-model="useMarkdown" type="checkbox" class="toggle toggle-sm">
              </label>
              <!-- <p class="text-xs text-warning">
                <font-awesome-icon icon="exclamation-triangle" class="mr-1" />
                Planner links may get filtered by Reddit's site-wide filters, I'm working on resolving this.
              </p> -->
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeTab === 'browser-tab'" id="browser-tab" class="">
        <div class="gap-2 card card-compact">
          <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
            <p class="card-title">
              Save to Browser
            </p>
            <div class="w-full form-control">
              <label class="sr-only label">
                <span class="label-text">Title</span>
              </label>
              <input v-model="title" max="64" type="text" placeholder="Enter title"
                class="w-full max-w-xs input input-bordered input-sm">
              <p class="pt-1 font-mono text-justify opacity-50 text-xxs wrap-anywhere">
                {{ saveCode.code }}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="normal-case btn btn-sm btn-outline" @click="saveAndClose">
                Save
              </button>
              <button class="normal-case btn btn-sm btn-outline" @click="saveWithoutClose">
                Save (No Close)
              </button>
            </div>
          </div>

          <div class="relative card card-compact">
            <div class="relative flex flex-col p-4 px-3 rounded-md card-body bg-palia-blue-dark">
              <p class="card-title">
                Saved Layouts
              </p>
              <div class="h-full overflow-hidden">
                <ul class="flex flex-col w-full gap-3 p-2 overflow-y-auto rounded-xs bg-base-100 max-h-50 md:max-h-72">
                  <li v-for="(code, index) in savedGardenCodes" :key="index" class="flex items-start justify-between">
                    <div class="flex flex-col gap-1">
                      <input v-model="code.title" class="w-full max-w-xs py-0 pl-0 input input-ghost input-xs"
                        @change="editTitle(index, code.title)">
                      <p class="font-mono leading-none opacity-50 text-xxs text-justify line-clamp-3 md:line-clamp-4">
                        {{ code.code }}
                      </p>
                    </div>
                    <button class="btn btn-xs btn-square btn-ghost" @click="deleteCode(index)">
                      <font-awesome-icon class="text-sm text-weed-prevention" icon="trash" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

  </PGPModal>
</template>

================================================
FILE: components/garden-planner/SettingsMinutesDisplay.vue
================================================

<script setup lang="ts">
import { formatMinutesToDaysHoursMinutesObject } from '~/utils/formatters' // Assuming a formatter utility exists or needs creation


const props = defineProps({
  minutes: {
    type: Number,
    default: 0,
  },
})

const timeFormatted = computed(() => {
  return formatMinutesToDaysHoursMinutesObject(props.minutes)
})
</script>

<template>
  <p class="text-xs text-palia-blue-dark">
    <font-awesome-icon :icon="['fas', 'stopwatch']" />
    <span class="pl-1">
      <template v-if="timeFormatted.days > 0">{{ timeFormatted.days.toLocaleString() }}Days

      </template>
      {{ timeFormatted.hours.toLocaleString() }}<span aria-label="Hours">Hrs</span>
      {{ timeFormatted.minutes.toLocaleString() }}<span aria-label="Minutes">Min</span>
    </span>

  </p>
</template>

================================================
FILE: components/garden-planner/StatsDisplay.vue
================================================

<script setup lang="ts">
import type { PlotStat } from 'assets/scripts/garden-planner/imports'
import { Bonus } from 'assets/scripts/garden-planner/imports'

defineProps<{
  gardenTilesAreWide: boolean
  plotStatTotal: PlotStat
  hoveredBonus: Bonus
}>()

const emit = defineEmits(['update:hoveredBonus'])

const statsDisplay = ref<HTMLDivElement | null>(null)
function getStatsDisplay() {
  return statsDisplay.value
}

function modifyStatsDisplayClassList(callback: (classList: DOMTokenList) => void) {
  const statsDisplay = getStatsDisplay()
  if (statsDisplay)
    callback(statsDisplay.classList)
}

function updateHoveredBonus(bonus: Bonus) {
  emit('update:hoveredBonus', bonus)
}

defineExpose({
  getStatsDisplay,
  modifyStatsDisplayClassList,
})
</script>

<template>
  <div class="">
    <h2 class="sr-only">
      Crop Bonus Statistics
    </h2>
    <div
      ref="statsDisplay" class="flex gap-[0.35rem] lg:gap-3 xl:gap-4 w-full cursor-help justify-center"
    >
      <CoverageStat
        :total-crops="plotStatTotal.cropCount"
        :covered="plotStatTotal.cropBonusCoverage['Speed Increase']" class="text-growth-boost"
        @mouseover="updateHoveredBonus(Bonus.SpeedIncrease)" @mouseleave="updateHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'forward-fast']" />
        </template>
        <template #title>
          Growth Boost
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStatTotal.cropCount"
        :covered="plotStatTotal.cropBonusCoverage['Harvest Increase']" class="text-harvest-boost"
        @mouseover="updateHoveredBonus(Bonus.HarvestIncrease)" @mouseleave="updateHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'wheat-awn']" />
        </template>
        <template #title>
          Harvest Boost
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStatTotal.cropCount"
        :covered="plotStatTotal.cropBonusCoverage['Quality Increase']" class="text-quality-increase"
        @mouseover="updateHoveredBonus(Bonus.QualityIncrease)" @mouseleave="updateHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'star']" />
        </template>
        <template #title>
          Quality Increase
        </template>
      </CoverageStat>

      <CoverageStat
        :total-crops="plotStatTotal.cropCount"
        :covered="plotStatTotal.cropBonusCoverage['Water Retain']" class="text-water-retain"
        @mouseover="updateHoveredBonus(Bonus.WaterRetain)" @mouseleave="updateHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'droplet']" />
        </template>
        <template #title>
          Water Retain
        </template>
      </CoverageStat>
      <CoverageStat
        :total-crops="plotStatTotal.cropCount"
        :covered="plotStatTotal.cropBonusCoverage['Weed Prevention']" class="text-weed-prevention"
        @mouseover="updateHoveredBonus(Bonus.WeedPrevention)" @mouseleave="updateHoveredBonus(Bonus.None)"
      >
        <template #icon>
          <font-awesome-icon :icon="['fas', 'shield']" />
        </template>
        <template #title>
          Weed Prevention
        </template>
      </CoverageStat>
    </div>

  </div>
</template>

================================================
FILE: components/garden-planner/UISettingsModal.vue
================================================

<script setup lang="ts">
import { useUiSettings } from '~/stores/useUiSettings';
import PGPModal from '../PGPModal.vue';


// const { settings } = useUISettings();
const uiSettings = storeToRefs(useUiSettings());
const { settings } = uiSettings;

const closeModal = () => {
  settingsModalRef.value?.hideModal();
};

const settingsModalRef = ref<InstanceType<typeof PGPModal> | null>(null);
function openModal() {
  settingsModalRef.value?.showModal();
}

defineExpose({
  openModal,
});

</script>

<template>
  <PGPModal ref="settingsModalRef" useFullHeight @close="closeModal">
    <template #header>UI Settings</template>
    <template #body>
      <fieldset class="fieldset bg-base-200 p-2 rounded-sm">
        <legend class="legend">Widgets</legend>

        <label class="label">
          <span class="label-text">Float Component Location</span>
        </label>
        <select v-model="settings.floatComponentLocation" class="select select-bordered">
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
        <p class="text-xxs label font-light pb-2">Location of Crop Modal on screen (Mobile)</p>


        <label class="label">
          <span class="label-text">Toasts Location</span>
        </label>
        <select v-model="settings.toastsLocation" class="select select-bordered">
          <option value="top-left">Top Left</option>
          <option value="top-center">Top Center</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-center">Bottom Center</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
        <p class="text-xxs label font-light pb-2">Location of Toast alerts</p>
      </fieldset>
      <fieldset class="fieldset bg-base-200 p-2 rounded-sm gap-4">
        <legend class="fieldset-legend">Crop Tile settings</legend>
        <label class="flex gap-1 items-center cursor-pointer">
          <input v-model="settings.cropTile.showBonusIcons" type="checkbox" class="toggle" />
          <span class="label select-none">Show Bonus Icons</span>
        </label>

        <label class="flex gap-1 items-center cursor-pointer">
          <input v-model="settings.cropTile.showBonusBackground" type="checkbox" class="toggle" />
          <span class="label select-none">Show Bonus Background</span>
        </label>
      </fieldset>
    </template>

  </PGPModal>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/CropDisplay.vue
================================================

<script setup lang="ts">
defineProps({
  tooltip: {
    type: String,
    default: '',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  star: {
    type: Boolean,
    default: false,
  },
  amount: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div
    class="relative flex flex-col items-center justify-center h-full p-1 isolate aspect-square"
  >
    <div
      :data-tip="tooltip"
      class="z-50 hidden w-full h-full sm:absolute sm:tooltip"
    />
    <img
      v-if="imgSrc"
      :src="imgSrc"
      width="36px"
      class="object-contain aspect-square"
      :srcset="undefined"
    >
    <p
      class="absolute top-0 right-0 text-xs p-[1px] px-[6px] text-center align-middle rounded-lg text-accent"
      :class="(amount < 0) ? 'bg-error bg-opacity-70' : 'bg-neutral bg-opacity-40'"
    >
      {{ amount }}
    </p>
    <p class="absolute bottom-0 right-1" aria-label="">
      <slot name="icon" />
    </p>
    <p class="absolute bottom-0 left-0">
      <font-awesome-icon v-if="star" class="text-sm text-quality-increase" :icon="['fas', 'star']" />
    </p>
  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/CropDisplayAlt.vue
================================================

<script setup lang="ts">
defineProps({
  tooltip: {
    type: String,
    default: '',
  },
  imgSrc: {
    type: String,
    default: '',
  },
  star: {
    type: Boolean,
    default: false,
  },
  amount: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <div class="relative isolate h-full aspect-square p-2 flex flex-col items-center justify-center">
    <div
      :data-tip="tooltip"
      class="hidden sm:absolute sm:tooltip w-full h-full z-50"
    />
    <img
      v-if="imgSrc"
      :src="imgSrc"
      class="max-w-[2rem] object-contain aspect-square"
      placeholder
    />
    <p
      class="absolute top-0 right-0 text-xs p-[1px] px-[6px] text-center align-middle rounded-lg text-accent"
      :class="(amount < 0) ? 'bg-error bg-opacity-70' : 'bg-neutral bg-opacity-40'"
    >
      {{ amount }}
    </p>
    <p class="absolute bottom-0 right-0">
      <slot name="icon" />
    </p>
    <p class="absolute bottom-0 left-0">
      <font-awesome-icon v-if="star" class="text-quality-increase text-sm" :icon="['fas', 'star']" />
    </p>
  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/HCDay.vue
================================================

<script setup lang="ts">
import CropDisplayAlt from './CropDisplayAlt.vue'
import type { CropType, ICalculateValueResult, ISimulateYieldResult } from '@/assets/scripts/garden-planner/imports'
import { crops } from '@/assets/scripts/garden-planner/imports'

type ProduceOptions = 'crop' | 'seed' | 'preserve'

const props = defineProps({
  processedYields: {
    type: Object as PropType<ICalculateValueResult>,
    required: true,
  },
  harvestData: {
    type: Object as PropType<ISimulateYieldResult>,
    required: true,
  },
  cropOptions: {
    type: Object as PropType<Record<CropType, { baseType: ProduceOptions; starType: ProduceOptions }>>,
    required: true,
  },
})

function getCropImage(cropType: CropType, string: ProduceOptions) {
  if (crops && crops[cropType]) {
    // get preserve or seed image if chosen
    if (string === 'preserve')
      return crops[cropType]?.preserveImage

    else if (string === 'seed')
      return crops[cropType]?.seedImage

    else
      return crops[cropType]?.image
  }
}

function getTooltipMessage(cropType: CropType, type: 'star' | 'base', produceAmount: number, gold: number) {
  if (type === 'star' && produceAmount > 0)
    return `${(props.cropOptions[cropType].starType !== 'crop' ? `${props.cropOptions[cropType].starType}:` : '')} ${gold.toLocaleString()} Gold`
  else if (type === 'base' && produceAmount > 0)
    return `${(props.cropOptions[cropType].baseType !== 'crop' ? `${props.cropOptions[cropType].baseType}:` : '')} ${gold.toLocaleString()} Gold`
  else if (produceAmount < 0)
    return 'Crop was deducted for replanting'
  else
    return 'No produce'
}

const yieldsTotal = computed(() => {
  return props.processedYields.result.length
})
const {
  currentPage,
  currentPageSize,
  pageCount,
  prev,
  next,
} = useOffsetPagination({
  total: yieldsTotal,
  page: 1,
  pageSize: 3,
})

const yieldsPage = computed(() => {
  return props.processedYields.result.slice((currentPage.value - 1) * currentPageSize.value, ((currentPage.value - 1) * currentPageSize.value) + currentPageSize.value)
})
const lastIndex = computed(() => {
  return ((currentPage.value - 1) * currentPageSize.value)
})

function getIndex(index: number) {
  return lastIndex.value + index
}

type PaginationButton = number | '...'
const paginationButtons = computed<PaginationButton[]>(() => {
  const buttons: PaginationButton[] = []
  const maxButtons = 5
  const maxPages = pageCount.value

  if (currentPage.value < (maxButtons)) {
    for (let i = 1; i <= Math.min(maxPages, maxButtons); i++)
      buttons.push(i)
  }
  else if (currentPage.value > (maxPages - (maxButtons - 1))) {
    for (let i = maxPages - (maxButtons - 1); i <= maxPages; i++)
      buttons.push(i)
  }
  else {
    const firstButton = 1
    const lastButton = maxPages
    const beforeMiddleButton = currentPage.value - 1
    const middleButton = currentPage.value
    const afterMiddleButton = currentPage.value + 1

    buttons.push(firstButton)
    buttons.push('...')
    buttons.push(beforeMiddleButton)
    buttons.push(middleButton)
    buttons.push(afterMiddleButton)
    buttons.push('...')
    buttons.push(lastButton)
  }

  return buttons
})
</script>

<template>
  <div class="isolate">
    <div class="grid gap-[2px]">
      <div class="pr-2 rounded-md rounded-b-none min-h-16 bg-accent">
        <table class="table px-4 rounded-none bg-accent text-misc">
          <tbody class="h-full">
            <tr class="sr-only">
              <td>Harvest Day</td>
              <td>Gold</td>
            </tr>
            <tr
              v-for="(harvest, index) of yieldsPage"
              :key="index"
              class="border-b-0!"
            >
              <td class="flex flex-wrap items-end w-full max-w-md gap-0 py-2">
                <div class="flex flex-col w-full">
                  <p class="text-xs font-semibold">
                    Day {{ harvest.day }}
                  </p>
                  <div
                    class="flex flex-wrap items-start justify-start max-w-xl gap-2 w-fit"
                  >
                    <template v-for="(crop, cropType) of harvest.crops" :key="cropType">
                      <!-- Star Produce -->
                      <CropDisplayAlt
                        v-if="(crop.star.produce !== 0)"
                        :tooltip="getTooltipMessage(cropType, 'star', crop.star.produce, crop.star.gold)"
                        :img-src="getCropImage(cropType, cropOptions[cropType].starType)"
                        :amount="crop.star.produce"
                        star
                      >
                        <template #icon>
                          <font-awesome-icon
                            v-if="crop.star.produce < 0"
                            class="text-sm text-error"
                            :icon="['fas', 'seedling']"
                          />
                        </template>
                      </CropDisplayAlt>

                      <!-- Star Crop Remainder for Processing -->
                      <CropDisplayAlt
                        v-if="(crop.star.cropRemainder > 0)"
                        tooltip="Unsold crops for further processing"
                        :img-src="crops[cropType]?.image"
                        :amount="crop.star.cropRemainder"
                        star
                      >
                        <template #icon>
                          <font-awesome-icon class="text-sm text-success" :icon="['fas', 'recycle']" />
                        </template>
                      </CropDisplayAlt>
                      <!-- Star Seed Remainder for Replanting -->
                      <CropDisplayAlt
                        v-if="(harvestData.harvests[getIndex(index)].seedsRemainder[cropType].star > 0)"
                        tooltip="Excess seeds for replanting"
                        :img-src="getCropImage(cropType, 'seed')"
                        :amount="harvestData.harvests[getIndex(index)].seedsRemainder[cropType].star"
                        star
                      >
                        <template #icon>
                          <font-awesome-icon
                            class="text-sm font-bold text-warning"
                            :icon="['fas', 'turn-down']"
                          />
                        </template>
                      </CropDisplayAlt>

                      <!-- Base Produce -->
                      <CropDisplayAlt
                        v-if="(crop.base.produce !== 0)"
                        :tooltip="getTooltipMessage(cropType, 'base', crop.base.produce, crop.base.gold)"
                        :img-src="getCropImage(cropType, cropOptions[cropType].baseType)"
                        :amount="crop.base.produce"
                      />

                      <!-- Base Crop Remainder for Processing -->
                      <CropDisplayAlt
                        v-if="(crop.base.cropRemainder > 0)"
                        tooltip="Unsold crops for further processing"
                        :img-src="crops[cropType]?.image"
                        :amount="crop.base.cropRemainder"
                      >
                        <template #icon>
                          <font-awesome-icon class="text-sm text-success" :icon="['fas', 'recycle']" />
                        </template>
                      </CropDisplayAlt>

                      <!-- Base Seed Remainder for Replanting -->
                      <CropDisplayAlt
                        v-if="(harvestData.harvests[getIndex(index)].seedsRemainder[cropType].base > 0)"
                        tooltip="Excess seeds for replanting"
                        :img-src="getCropImage(cropType, 'seed')"
                        :amount="harvestData.harvests[getIndex(index)].seedsRemainder[cropType].base"
                      >
                        <template #icon>
                          <font-awesome-icon
                            class="text-sm font-bold text-warning"
                            :icon="['fas', 'turn-down']"
                          />
                        </template>
                      </CropDisplayAlt>
                    </template>
                  </div>
                </div>
              </td>
              <td class="">
                <p class="flex items-center justify-end gap-1 pr-1 font-bold">
                  <img
                    format="webp"
                    src="/gold.webp"
                    class="max-h-[1.5rem]"
                    width="1rem"
                    height="1rem"
                    alt="Gold"
                    placeholder
                  >{{
                    harvest.totalGold.toLocaleString() }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center w-full gap-2 p-2 bg-accent text-misc rounded-b-md">
        <button @click="prev">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>
        <template
          v-for="button of paginationButtons"
          :key="button"
        >
          <button
            v-if="button !== '...'"
            class="btn-sm btn btn-circle btn-accent" :class="[(currentPage === button ? 'bg-primary' : '')]"
            @click="currentPage = button"
          >
            {{ button }}
          </button>
          <p v-else>
            ...
          </p>
        </template>
        <button @click="next">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>

  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/HCInfo.vue
================================================
<template>

  <div v-once class="flex flex-col gap-2 px-2 py-4 text-accent bg-palia-blue-dark rounded-lg overflow-auto max-h-132">
    <p class="px-2 text-xl font-black">Info</p>
    <div class="grid gap-2 px-2">
      <div class="p-3 rounded-md bg-palia-blue">
        <h3 class="text-lg font-bold uppercase">
          Note
        </h3>
        <div class="flex flex-col gap-1 py-2">
          <div class="text-sm">
            This tool uses information on crops gathered
            from
            resources such as Arenvanya's
            <NuxtLink href="https://docs.google.com/document/d/1bjqQGwzhW7wsIpSDoO3xCMwqbX7ZbsdsuuXmPEXCrjE/"
              target="_blank" :prefetch="false"
              class="items-center inline-block gap-1 font-bold text-harvest-boost-dark hover:underline underline-offset-2">
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
              Gardening Guide
            </NuxtLink>
            and their
            <NuxtLink to="https://docs.google.com/spreadsheets/d/1YV_LiHp48shNifWakdZtOI9j6_IqQI0A7dRdr28lHNY/"
              target="_blank" :prefetch="false"
              class="inline-block gap-1 font-bold text-harvest-boost-dark hover:underline underline-offset-2">
              <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
              Math Spreadsheet
            </NuxtLink>
            as well as a mix of observations and testings done by fellow Palians discussed on Discord
          </div>
          <p class="inline-flex gap-2 p-2 text-sm bg-warning text-neutral rounded-sm w-fit">
            <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-lg text-neutral" />
            Final values are estimations and may not reflect actual in-game experience.
          </p>
        </div>
      </div>
      <div class="p-3 rounded-md bg-palia-blue ">
        <h3 class="text-lg font-bold ">
          How it works - Summary <span class="tabular-nums text-xs pl-1 opacity-50">(13/05/2025)</span>
        </h3>
        <ol class="list">
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">01</div>
            The planner estimates crop yields, factoring in [Quality, Harvest] Boosts, and star chance of crops.
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">02</div>
            Using the provided yields, it processes the crops into the form in which you wish to sell them
            (Crop/Seed/Preserve)
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">03</div>
            Finally, it calculates the gold value of everything once processes are factored in
          </li>
        </ol>
      </div>
    </div>
    <div class="px-2">
      <div class="grid gap-2 p-3 rounded-md bg-palia-blue">
        <h3 class="text-lg font-bold">
          Harvest Assumptions <span class="tabular-nums text-xs pl-1 opacity-50">(14/05/2025)</span>
        </h3>
        <ul class="list text-sm">
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">01</div>
            <span class="font-black">
              Planner Formula for Star Chance:
            </span>
            <div class="list-col-wrap">
              <p class=" text-white rounded-md bg-neutral w-fit p-2">
                <code>0.25 + (0.25 * useStarSeeds) + (0.02 * level) + (0.5 * hasQualityBoost)</code>
              </p>
              <p class="w-full">
                Not the actual in-game formula and is based off player observations and personal assumptions.
                Fully debatable and may be tweaked in the future.
              </p>
            </div>
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">02</div>
            <span class="font-black">
              Assumptions that result in the Planner Formula:
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li class="">
                  Star Seed + Quality Boost stacks up to 100% star chance (hence +50% from quality boost).
                </li>
                <li class="">
                  At level 25, star seeds alone can reach 100% star chance (hence an assumed level scaling).
                </li>
                <li class="">
                  Each level increases star chance by 2% (which reaches a total of 100% at level 25 w/ star seeds).
                </li>
                <li class="">
                  Around level 50 and under, normal seeds alone can reach 100% star chance.
                </li>
                <li class="">
                  Normal seeds always have a chance of star crops (An assumed 25% base chance).
                </li>
              </ul>
            </div>
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">03</div>
            <span class="font-black">
              Other Crop Assumptions
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li class="">
                  <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
                  Weed Chance is not accounted for due to their unreliable or undocumented behaviour.
                </li>
                <li class="">
                  Crops are harvested on the day they are ready.
                </li>
                <li class="">
                  Crops receive daily watering or has Water Retain.
                </li>
                <li class="">
                  Crop boosts last until the final calculation day.
                </li>
                <li class="">
                  If Replant Costs are enabled, crops will be deducted from within the day.
                  This may sometimes result in a harvest having negative values
                </li>
                <li class="pl-5">
                  These harvests with a negative value merely imply that a crop was taken from somewhere else, whether your storage
                  or from a different harvest. Aside from required seed calculations, each harvest day does not factor in outcomes from other days
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="px-2 pb-3">
      <div class="grid gap-2 p-3 rounded-md bg-palia-blue">
        <h3 class="text-lg font-bold">
          Processing Mechanics <span class="tabular-nums text-xs pl-1 opacity-50">(14/05/2025)</span>
        </h3>
        <ul class="list text-sm">

          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">01</div>
            <span class="font-black">
              Crop distribution
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li>
                  On harvest, crops for processing will be immediately sent to their assigned crafters when available
                </li>
                <li>
                  Crops are grouped & divided based on how many is required for a conversion (e.g Apples are grouped by
                  10 for seeding)
                </li>
                <li>
                  In an ideal scenario, these groups are divided to the assigned crafters equally
                </li>
                <li>
                  If there are crafters that are still processing by the next harvest, it is assumed the player will
                  distribute these groups
                  based on the most available crafters
                </li>
                <li>
                  The planner does not factor in storage limit for crafters, assuming the player will insert once there
                  is room
                </li>
              </ul>
            </div>
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">02</div>
            <span class="font-black">
              Crop Fragments
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li>
                  If there are not enough crops for a conversion, they will still be included as fragment groups
                </li>
                <li>
                  Fragment groups operate under the assumption that they will build up over time into full processes.
                </li>
                <li>
                  As they may take an unknown number of harvest/cycles to be complete, the planner does not wait for
                  them to be
                  complete groups.
                </li>
                <li>
                  Crop fragments are factored in on time and gold calculations
                </li>
                <li>
                  In the ideal scenario where crop groups are divided evenly, they're assigned to the most available
                  crafter
                </li>
              </ul>
            </div>
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">03</div>
            <span class="font-black">
              Time Calculations
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li>
                  Processing time is calculated based on crafter distribution and harvest time
                </li>
                <li>
                  The overall processing time attempts to estimate the 'shortest possible time' to process everything
                </li>
                <li>
                  Once crafters are divided equally, the crafter with the longest processing time will be used to
                  calculate the overall time.
                </li>
                <li>
                  If the busiest crafter will finish before the next harvest, the remaining 'idle' time is included
                </li>
                <li>
                  When there is known to be excess time (a crafter still processing beyond the next harvest), we instead
                  calculate the total conversions that can be done within the
                  harvest (how many processes can be done based on time to next harvest & crafter amount), and subtract
                  it from the conversions required. We then use this to calculate the average excess
                  time
                  <p class=" text-white rounded-md bg-neutral w-fit p-2 font-mono slashed-zero tabular-nums">
                    <code>averageExcessTimeMinutes = ((conversionsRequired - conversionsPossible) * minutesPerConversion) / crafterCount</code>
                  </p>
                </li>
                <li>
                  This method is only used for all in-between harvests, operating under the aforementioned assumption
                  that the player
                  will distribute crop groups based on the most available one
                </li>

                <li>
                  Average excess time only applies to in-between harvests.
                  The first harvest assumes all crafters are empty.
                  The last harvest not using average excess time is more arbitrary,
                  believing that by the last harvest, crops have been distributed evenly enough that using the time of
                  the longest busiest again is more accurate
                </li>
              </ul>
            </div>
          </li>
          <li class="list-row">
            <div class="font-thin opacity-30 tabular-nums hidden xs:block">04</div>
            <span class="font-black">
              Negative Values
            </span>
            <div class="list-col-wrap">
              <ul class="list-disc list-inside flex flex-col gap-1">
                <li>
                  Negative values may be encountered when 'Replant Costs' is enabled
                </li>
                <li>
                  These negative values are the result of negative harvest crops mentioned in the Harvest section
                </li>
                <li>
                  Since other harvests are not deducted due to planner mechanics,
                  these values seek to 'balance' other harvests having extra produce that would've been deducted
                </li>
                <li>
                  This implementation may be faulty, so I do seek feedback on this
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/HCTags.vue
================================================

<script setup lang="ts">
defineProps({
  level: Number,
  allStarSeeds: Boolean,
  includeReplant: Boolean,
  includeReplantCost: Boolean,
  starChance: Number,
  useGrowthBoost: Boolean,
})
</script>

<template>
  <div class="flex gap-1 py-[0.5rem] md:py-[0.3rem] text-sm flex-wrap">
    <p class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-weed-prevention text-xs">
      <abbr title="Level">Lvl</abbr> {{ level }}
    </p>
    <p v-show="useGrowthBoost" class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-growth-boost text-xs ">
      <font-awesome-icon :icon="['fas', 'forward-fast']" class="mr-1" />
      Growth Boost
    </p>
    <p class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-quality-increase-dark text-xs ">
      {{ (allStarSeeds) ? 'Star Seeds' : 'Normal Seeds' }}
    </p>
    <p class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-quality-increase-dark text-xs ">
      {{ starChance }}% Star Chance
    </p>

    <p v-show="(!includeReplant)" class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-harvest-boost-dark text-xs">
      No Replant
    </p>
    <p v-if="(includeReplantCost && includeReplant)" class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-harvest-boost-dark text-xs">
      -Replant
      Costs
    </p>
    <p v-else-if="(includeReplant)" class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-harvest-boost-dark text-xs">
      No Replant Costs
    </p>
    <p class="py-[0.1rem] px-3 rounded-lg text-center flex items-center bg-harvest-boost-dark text-xs">
      No Fertiliser Costs
    </p>

  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/HCTotal.vue
================================================

<script setup lang="ts">
import CropDisplay from './CropDisplay.vue'
import type { CropType, ICalculateValueResult, ISimulateYieldResult } from '@/assets/scripts/garden-planner/imports'

import { crops } from '@/assets/scripts/garden-planner/imports'

type ProduceOptions = 'crop' | 'seed' | 'preserve'

const props = defineProps({
  processedYields: {
    type: Object as PropType<ICalculateValueResult>,
    required: true,
  },
  harvestData: {
    type: Object as PropType<ISimulateYieldResult>,
    required: true,
  },
  cropOptions: {
    type: Object as PropType<Record<CropType, { baseType: ProduceOptions; starType: ProduceOptions }>>,
    required: true,
  },
})

function getCropImage(cropType: CropType, string: ProduceOptions) {
  if (crops && crops[cropType]) {
    // get preserve or seed image if chosen
    if (string === 'preserve')
      return crops[cropType]?.preserveImage

    else if (string === 'seed')
      return crops[cropType]?.seedImage

    else
      return crops[cropType]?.image
  }
}

function getTooltipMessage(cropType: CropType, type: 'star' | 'base', produceAmount: number, gold: number) {
  if (type === 'star' && produceAmount > 0)
    return `${(props.cropOptions[cropType].starType !== 'crop' ? `${props.cropOptions[cropType].starType}:` : '')} ${gold.toLocaleString()} Gold`
  else if (type === 'base' && produceAmount > 0)
    return `${(props.cropOptions[cropType].baseType !== 'crop' ? `${props.cropOptions[cropType].baseType}:` : '')} ${gold.toLocaleString()} Gold`
  else if (produceAmount < 0)
    return 'Crop was deducted for replanting'
  else
    return 'No produce'
}
</script>

<template>
  <div class="flex flex-wrap gap-2 bg-accent rounded-md min-h-16 overflow-visible px-3 py-2">
    <template v-if="(processedYields.totalResult.day > 0)">
      <template v-for="(crop, cropType) of processedYields.totalResult.crops" :key="cropType">
        <CropDisplay
          v-if="(crop.star.produce !== 0)"
          :tooltip="getTooltipMessage(cropType, 'star', crop.star.produce, crop.star.gold)"
          :img-src="getCropImage(cropType, cropOptions[cropType].starType)"
          :amount="crop.star.produce"
          star
        />
        <CropDisplay
          v-if="(crop.star.cropRemainder > 0)"
          tooltip="Unsold crops for further processing"
          :img-src="crops[cropType]?.image"
          :amount="crop.star.cropRemainder"
          star
        >
          <template #icon>
            <font-awesome-icon class="text-success text-sm" :icon="['fas', 'recycle']" />
          </template>
        </CropDisplay>

        <CropDisplay
          v-if="(harvestData.harvestTotal.seedsRemainder[cropType].star > 0)"
          tooltip="Excess seeds for replanting"
          :img-src="getCropImage(cropType, 'seed')"
          :amount="harvestData.harvestTotal.seedsRemainder[cropType].star"
          star
        >
          <template #icon>
            <font-awesome-icon
              class="font-bold text-warning text-sm"
              :icon="['fas', 'turn-down']"
            />
          </template>
        </CropDisplay>

        <CropDisplay
          v-if="(crop.base.produce > 0)"
          :tooltip="getTooltipMessage(cropType, 'base', crop.base.produce, crop.base.gold)"
          :img-src="getCropImage(cropType, cropOptions[cropType].baseType)"
          :amount="crop.base.produce"
        />

        <CropDisplay
          v-if="(crop.base.cropRemainder > 0)"
          tooltip="Unsold crops for further processing"
          :img-src="crops[cropType]?.image"
          :amount="crop.base.cropRemainder"
        >
          <template #icon>
            <font-awesome-icon class="text-success text-sm" :icon="['fas', 'recycle']" />
          </template>
        </CropDisplay>

        <CropDisplay
          v-if="(harvestData.harvestTotal.seedsRemainder[cropType].base > 0)"
          tooltip="Excess seeds for replanting"
          :img-src="getCropImage(cropType, 'seed')"
          :amount="harvestData.harvestTotal.seedsRemainder[cropType].base"
        >
          <template #icon>
            <font-awesome-icon
              class="font-bold text-warning text-sm"
              :icon="['fas', 'turn-down']"
            />
          </template>
        </CropDisplay>
      </template>
    </template>
    <template v-else>
      <div class="w-full h-full py-4 flex items-center justify-center">
        <p class="text-center text-misc font-bold opacity-50">
          Place crops on the grid to calculate harvest
        </p>
      </div>
    </template>

  </div>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/ItemDisplay.vue
================================================

<script setup lang="ts">
defineProps({
  tooltip: {
    type: String,
    default: '',
    required: false,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
    required: false,
  },
  star: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
  baseGoldValue: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <li
    class="relative flex flex-col items-center justify-center rounded-md isolate aspect-square bg-accent"
  >
    <div
      :data-tip="tooltip || `${(count * baseGoldValue).toLocaleString()} Gold`"
      class="z-50 hidden w-full h-full sm:absolute"
      :class="{'sm:tooltip': tooltip || (baseGoldValue !== 0)}"
    />
    <div class="relative w-full h-full p-2 pt-[10px] rounded-md isolate overflow-clip">
      <div class="absolute top-0 left-0 w-full h-full -translate-y-1 rounded-md select-none opacity-40 -z-10 bg-linear-to-b from-misc to-primary" />
      <img
        v-if="imgSrc"
        :src="imgSrc"
        width="32px"
        class="object-contain aspect-square"
        :srcset="undefined"
      >

      <p class="absolute bottom-0 left-0">
        <font-awesome-icon v-if="star" class="text-sm text-quality-increase" :icon="['fas', 'star']" />
      </p>
      <p
        class="absolute top-0 right-0 px-[2px] text-xs font-semibold  text-center align-middle rounded-lg text-palia-blue-dark"
        :class="(count < 0) ? 'italic' : ' '"
      >
        {{ (Math.round(count*100)/100).toLocaleString() }}
      </p>
      <p class="absolute bottom-0 right-1">
        <slot name="icon" />
      </p>
    </div>

  </li>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/ItemDisplayAlt.vue
================================================

<script setup lang="ts">
defineProps({
  tooltip: {
    type: String,
    default: '',
    required: false,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  imgAlt: {
    type: String,
    default: '',
    required: false,
  },
  star: {
    type: Boolean,
    default: false,
  },
  count: {
    type: Number,
    default: 0,
  },
  baseGoldValue: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <li
    class="relative flex flex-col items-center justify-center w-10 h-10 rounded-sm isolate aspect-square bg-accent"
  >
    <!-- <div
      :data-tip="tooltip || `${count * baseGoldValue}g`"
      class="z-50 hidden w-full h-full sm:absolute sm:tooltip"
    /> -->
    <div class="relative w-full h-full p-2 rounded-md isolate overflow-clip">
      <div class="absolute top-0 left-0 w-full h-full rounded-md select-none opacity-40 -z-10 bg-linear-to-b from-misc to-primary" />
      <img
        v-if="imgSrc"
        :src="imgSrc"
        width="28px"
        class="object-contain aspect-square pt-0.5"
        :srcset="undefined"
      >

      <p class="absolute bottom-0 left-0">
        <font-awesome-icon v-if="star" class="text-sm text-quality-increase" :icon="['fas', 'star']" />
      </p>
      <p
        v-if="count !== 0"
        class="absolute top-0 right-0 px-[2px] text-xs text-center align-middle rounded-lg"
        :class="[(count < 0) ? 'font-bold italic' : ' text-palia-blue-dark',
          (count.toLocaleString().length > 5 ? 'text-xxs' : 'text-xs')
        ]"
      >
        {{ count.toLocaleString() }}
      </p>
      <p class="absolute bottom-0 right-1">
        <slot name="icon" />
      </p>
    </div>

  </li>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/OptionCard.vue
================================================

<script setup lang="ts">
defineProps({
  label: String,
  name: String,
  disabled: Boolean,
})
</script>

<template>
  <li>
    <label
      :for="label"
      class="flex flex-col justify-start p-2 px-3 rounded-md bg-accent text-misc"
      :class="(disabled) ? 'opacity-50' : ''"
    >
      <div class="grid items-center gap-1 md:grid-cols-2">
        <div>
          <p class="py-1 text-sm font-bold text-palia-blue">
            {{ name }}
          </p>

          <div class="text-xs">
            <slot name="labels" />
          </div>
        </div>
        <div class="flex items-center gap-2">
          <slot name="input" />
        </div>
      </div>
    </label>

  </li>
</template>

================================================
FILE: components/garden-planner/HarvestCalculator/TotalInventory.vue
================================================

<script setup lang="ts">
import ItemDisplay from './ItemDisplay.vue'
import useProcessor from '~/stores/useProcessor'

const processor = useProcessor()
</script>

<template>
  <section class="">
    <h2 class="text-sm font-semibold capitalize text-palia-blue-dark">
      Produce
    </h2>
    <ul class="flex flex-wrap gap-1 p-2 bg-opacity-50 rounded-md bg-accent min-h-16 gap-y-2 border border-misc-dark">
      <ItemDisplay
        v-for="[name, item] in processor.inventory"
        :key="name"
        :img-src="item.img.src"
        :img-alt="item.img.alt"
        :star="item.isStar"
        :count="item.count"
        :base-gold-value="item.baseGoldValue"
      />
    </ul>
  </section>
</template>

================================================
FILE: components/garden-planner/ItemSelector/CropModalButton.vue
================================================

<script setup lang="ts">
import { ref } from 'vue'
import HoveredItemTooltip from './HoveredItemTooltip.vue'
import useGarden from '~/stores/useGarden'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import type { SelectedItem } from '~/stores/useSelectedItem'
import { SelectedItemType, useSelectedItem } from '~/stores/useSelectedItem'
import type { Crop, Fertiliser } from '~/assets/scripts/garden-planner/imports'
import { Bonus, CropCode, CropType, FertiliserType, crops, fertilisers, getCropFromCode, getFertiliserFromCode } from '~/assets/scripts/garden-planner/imports'
import FertiliserCode from '~/assets/scripts/garden-planner/enums/fertilisercode'


const props = defineProps<{
  position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}>()

const isTakingScreenshot = useTakingScreenshot()
const selectedItem = useSelectedItem()
const gardenHandler = useGarden()

const plotStat = computed(() => gardenHandler.plotStat)
const totalFertilisers = computed(() => {
  let count = 0
  for (const fertiliser in plotStat.value.fertiliserCount)
    count += plotStat.value.fertiliserCount[fertiliser as FertiliserType]
  return count
})

const hoveredItem = ref<SelectedItem | null>(null)

const bonusToSortBy = ref<Bonus | null>(null)

const cropsList = computed(() => {
  const list: { crop: Crop; count: number }[] = []
  for (const crop of Object.values(crops))
    list.push({ crop, count: plotStat.value.cropTypeCount[crop.type] })

  let sortedList = list
  if (bonusToSortBy.value && !isTakingScreenshot.get)
    sortedList = list.filter(crop => crop.crop.cropBonus === bonusToSortBy.value)

  // else sort by bonus type
  else
    sortedList = list.sort((a, b) => compareBonus(a.crop.cropBonus, b.crop.cropBonus))

  return sortedList
})

const bonusRanking = [
  Bonus.WaterRetain,
  Bonus.HarvestIncrease,
  Bonus.WeedPrevention,
  Bonus.QualityIncrease,
  Bonus.SpeedIncrease,
]

// manual override for sorting by bonus type, we'll sort by water retain -> harvest increase -> weed prevention -> quality increase
function compareBonus(a: Bonus, b: Bonus) {
  return bonusRanking.indexOf(a) - bonusRanking.indexOf(b)
}

const isModalOpen = ref(false)
const modalRef = ref<HTMLDialogElement | null>(null)

function openModal() {
  modalRef.value?.showModal()
}

function closeModal() {
  modalRef.value?.close()
}


</script>

<template>
  <div
    :class="['fixed z-50 mx-4 my-4 sm:hidden', props.position === 'bottom-right' ? 'bottom-0 right-0' : '', props.position === 'bottom-left' ? 'bottom-0 left-0' : '', props.position === 'top-right' ? 'top-0 right-0' : '', props.position === 'top-left' ? 'top-0 left-0' : '']">
    <CropButton class="shadow-xl bg-accent btn-lg" v-if="selectedItem.type === SelectedItemType.Crop"
      :crop="selectedItem.val as Crop" @click="openModal"
      :count="cropsList.find(({ crop }) => (crop.type === (selectedItem.val as Crop).type))?.count" />
    <FertiliserButton class="shadow-xl bg-accent btn-lg" v-else-if="selectedItem.type === SelectedItemType.Fertiliser"
      :fertiliser="selectedItem.val as Fertiliser" @click="openModal" />
    <button v-else-if="selectedItem.type === SelectedItemType.CropErase" id="crop-eraser"
      class="relative border rounded-xs shadow-xl btn btn-square btn-lg btn-secondary isolate border-misc bg-accent"
      aria-label="Crop Eraser"
      :class="(selectedItem.val === 'crop-erase' && !isTakingScreenshot.get) ? 'bg-white' : (isTakingScreenshot.get) ? 'hidden' : ''"
      :in-picture-mode="isTakingScreenshot.get" @click="openModal">
      <font-awesome-icon class="absolute -z-10 max-w-[45px] text-success text-2xl " :icon="['fas', 'eraser']" />
    </button>
    <button v-else-if="selectedItem.type === SelectedItemType.FertiliserErase" id="fertiliser-eraser"
      aria-label="Fertiliser Eraser"
      class="relative border rounded-xs shadow-xl bg-accent btn btn-square btn-lg btn-secondary isolate border-misc"
      :class="(selectedItem.val === 'crop-erase' && !isTakingScreenshot.get) ? 'bg-white' : (isTakingScreenshot.get) ? 'hidden' : ''"
      :in-picture-mode="isTakingScreenshot.get" @click="openModal">
      <font-awesome-icon class="absolute -z-10 max-w-[42px] text-warning text-2xl " :icon="['fas', 'eraser']" />
    </button>
  </div>

  <dialog class="modal items-end p-2" ref="modalRef">
    <div class="modal-box h-2/3">
      <form method="dialog">
        <button class="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost">
          ✕
        </button>
      </form>

      <section class="flex flex-col gap-2">
        <h2 class="text-xl font-bold">Selector</h2>
        <div>
          <h3 class="font-semibold">
            Fertilisers per Day
          </h3>
          <div class="flex flex-wrap gap-1">
            <button id="fertiliser-eraser" aria-label="Select Fertiliser Eraser"
              class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc" :class="{
                'bg-white': selectedItem.val === 'fertiliser-erase' && !isTakingScreenshot.get,
                'hidden': isTakingScreenshot.get,
              }" @click="() => {
                selectedItem.select('fertiliser-erase')
              }">
              <font-awesome-icon class="absolute -z-10 max-w-[42px] text-warning text-2xl " :icon="['fas', 'eraser']" />
            </button>
            <template v-for="(count, index) in plotStat.fertiliserCount" :key="index">
              <FertiliserButton v-if="index !== FertiliserType.None" :fertiliser="fertilisers[index] as Fertiliser"
                :is-selected="(selectedItem.type === SelectedItemType.Fertiliser)
                  && selectedItem.val !== null
                  && index === (selectedItem.val as Fertiliser).type" :count="count" @click="() => {
                    selectedItem.select(fertilisers[index])
                    closeModal()
                  }" @mouseover="hoveredItem = fertilisers[index]" @mouseleave="hoveredItem = null" />
            </template>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div>
            <h3 class="font-semibold">
              Crops
            </h3>
            <ul class="flex items-center gap-1 text-sm" :class="{ hidden: isTakingScreenshot.get }">
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === null ? 'bg-accent text-misc-dark' : 'hover:bg-opacity-10 text-accent']"
                @click="bonusToSortBy = null">
                <font-awesome-icon class="" :icon="['fas', 'asterisk']" />
              </li>
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === Bonus.WaterRetain ? 'bg-accent' : 'hover:bg-opacity-10']"
                @click="bonusToSortBy = Bonus.WaterRetain">
                <font-awesome-icon class="text-water-retain" :icon="['fas', 'droplet']" />
              </li>
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === Bonus.HarvestIncrease ? 'bg-accent' : 'hover:bg-opacity-10']"
                @click="bonusToSortBy = Bonus.HarvestIncrease">
                <font-awesome-icon class="text-harvest-boost-dark" :icon="['fas', 'wheat-awn']" />
              </li>
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === Bonus.QualityIncrease ? 'bg-accent' : 'hover:bg-opacity-10']"
                @click="bonusToSortBy = Bonus.QualityIncrease">
                <font-awesome-icon class="text-quality-increase-dark" :icon="['fas', 'star']" />
              </li>
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === Bonus.WeedPrevention ? 'bg-accent' : 'hover:bg-opacity-10']"
                @click="bonusToSortBy = Bonus.WeedPrevention">
                <font-awesome-icon class="text-weed-prevention" :icon="['fas', 'shield']" />
              </li>
              <li
                class="flex items-center justify-center p-1 border border-solid rounded-xs cursor-pointer btn btn-square btn-sm border-accent aspect-square"
                :class="[bonusToSortBy === Bonus.SpeedIncrease ? 'bg-accent' : 'hover:bg-opacity-10']"
                @click="bonusToSortBy = Bonus.SpeedIncrease">
                <font-awesome-icon class="text-growth-boost" :icon="['fas', 'forward-fast']" />
              </li>
            </ul>
          </div>
          <div class="flex flex-wrap gap-1">
            <button id="crop-eraser" aria-label="Select Crop Eraser"
              class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc sm:hidden"
              :class="{
                'bg-white': selectedItem.val === 'crop-erase' && !isTakingScreenshot.get,
                'hidden': isTakingScreenshot.get,
              }" :in-picture-mode="isTakingScreenshot.get" @click="() => {
                selectedItem.select('crop-erase')
                closeModal()
              }" @mouseover="hoveredItem = SelectedItemType.CropErase" @mouseleave="hoveredItem = null">
              <font-awesome-icon class="absolute -z-10 max-w-[45px] text-success text-2xl " :icon="['fas', 'eraser']" />
            </button>
            <template v-for="(listedCrop) in cropsList" :key="listedCrop.crop.type">
              <CropButton v-if="(listedCrop.crop.type !== CropType.None as CropType)" :crop="listedCrop.crop"
                :is-selected="(selectedItem.type === SelectedItemType.Crop)
                  && selectedItem.val !== null
                  && listedCrop.crop.type === (selectedItem.val as Crop).type" :count="listedCrop.count" @click="() => {
                    selectedItem.select(crops[listedCrop.crop.type])
                    closeModal()
                  }" @mouseover="hoveredItem = listedCrop.crop" @mouseleave="hoveredItem = null" />
            </template>
          </div>
        </div>
      </section>
    </div>
    <form method="dialog" class="modal-backdrop opacity-20">
      <button>close</button>
    </form>

  </dialog>
</template>

================================================
FILE: components/garden-planner/ItemSelector/HoveredItemTooltip.vue
================================================

<script setup lang="ts">
import type { SelectedItem } from '~/stores/useSelectedItem'
import { SelectedItemType, getSelectedItemType } from '~/stores/useSelectedItem'
import { Bonus, Crop, getCodeFromCrop, getCodeFromFertiliser } from '~/assets/scripts/garden-planner/imports'
import type { Fertiliser } from '~/assets/scripts/garden-planner/imports'
import CropSize from '~/assets/scripts/garden-planner/enums/crop-size'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'

const props = defineProps<{
  hoveredItem: SelectedItem | null
}>()

const title = computed(() => {
  if (props.hoveredItem === null)
    return ''

  // convert if statements below to switch statement
  switch (getSelectedItemType(props.hoveredItem)) {
    case (SelectedItemType.Crop):
      return (props.hoveredItem as Crop).type
    case (SelectedItemType.CropErase):
      return 'Remove crop from tile(s)'
    case (SelectedItemType.FertiliserErase):
      return 'Remove fertiliser from tile(s)'
    case (SelectedItemType.Fertiliser):
      return (props.hoveredItem as Fertiliser).type
    default:
      return ''
  }
})

function getBonus(bonus: Bonus) {
  switch (bonus) {
    case Bonus.WaterRetain:
      return {
        icon: 'droplet',
        colour: 'text-water-retain',
        type: 'Water Retain',
        extraDetail: 'Helps keeps other nearby crop types hydrated',
      }
    case Bonus.QualityIncrease:
      return {
        icon: 'star',
        colour: 'text-quality-increase',
        type: 'Quality Increase',
        extraDetail: 'Boosts quality of other nearby crop types',
      }
    case Bonus.HarvestIncrease:
      return {
        icon: 'wheat-awn',
        colour: 'text-harvest-boost',
        type: 'Harvest Increase',
        extraDetail: 'Boosts amount harvested from other nearby crop types',
      }
    case Bonus.WeedPrevention:
      return {
        icon: 'shield',
        colour: 'text-weed-prevention',
        type: 'Weed Prevention',
        extraDetail: 'Prevents weeds from growing on other nearby crop types',
      }
    case Bonus.SpeedIncrease:
      return {
        icon: 'forward-fast',
        colour: 'text-growth-boost',
        type: 'Growth Boost',
        extraDetail: 'Boosts growth speed of other nearby crop types',
      }
    default:
      return {
        icon: '',
        colour: 'text-misc',
        type: '',
      }
  }
}

function getBonusFert(bonus: Bonus) {
  switch (bonus) {
    case Bonus.WaterRetain:
      return {
        icon: 'droplet',
        colour: 'text-water-retain',
        type: 'Water Retain',
        extraDetail: 'Prevents crops from needing water for one day',
      }
    case Bonus.QualityIncrease:
      return {
        icon: 'star',
        colour: 'text-quality-increase',
        type: 'Quality Increase',
        extraDetail: 'Increases quality of crops harvested',
      }
    case Bonus.HarvestIncrease:
      return {
        icon: 'wheat-awn',
        colour: 'text-harvest-boost',
        type: 'Harvest Increase',
        extraDetail: 'Increases the number of crop items gained when harvested (+50% yield)',
      }
    case Bonus.WeedPrevention:
      return {
        icon: 'shield',
        colour: 'text-weed-prevention',
        type: 'Weed Prevention',
        extraDetail: 'Stops weeds from appearing',
      }
    case Bonus.SpeedIncrease:
      return {
        icon: 'forward-fast',
        colour: 'text-growth-boost',
        type: 'Growth Boost',
        extraDetail: 'Gives an extra day of growth every other day',
      }
    default:
      return {
        icon: '',
        colour: 'text-misc',
        type: '',
      }
  }
}

const bonus = computed(() => {
  switch (getSelectedItemType(props.hoveredItem)) {
    case (SelectedItemType.Crop):
      return getBonus((props.hoveredItem as Crop).cropBonus)
    case (SelectedItemType.Fertiliser):
      return getBonusFert((props.hoveredItem as Fertiliser).effect)
    default:
      return getBonus(Bonus.None)
  }
})

const sizeText = computed(() => {
  if (props.hoveredItem instanceof Crop) {
    switch (props.hoveredItem.size) {
      case CropSize.Single:
        return {
          sizeText: '',
          bonusInfo: '',
        }
      case CropSize.Bush:
        return {
          sizeText: 'Size 2x2',
          bonusInfo: 'needs 2 of a boost for it to apply',
        }
      case CropSize.Tree:
        return {
          sizeText: 'Size 3x3',
          bonusInfo: 'needs 3 of a boost for it to apply',
        }
      default:
        return {
          sizeText: '',
          bonusInfo: '',
        }
    }
  }
  return {
    sizeText: '',
    bonusInfo: '',
  }
})

// if the item is a crop or fertiliser, show the associated cropCode or fertiliserCode
const code = computed(() => {
  if (props.hoveredItem === null)
    return ''

  switch (getSelectedItemType(props.hoveredItem)) {
    case (SelectedItemType.Crop):
      return getCodeFromCrop(props.hoveredItem as Crop)
    case (SelectedItemType.Fertiliser):
      return getCodeFromFertiliser(props.hoveredItem as Fertiliser)
    default:
      return ''
  }
})

const isTakingScreenshot = useTakingScreenshot()
</script>

<template>
  <p
    v-if="!isTakingScreenshot.get"
    class="gap-1 pt-1 text-palia-blue-dark min-h-12 xs:min-h-10 lg:min-h-4"
  >
    <span
      v-if="title !== 'Remove crop from tile(s)' && title !== 'Remove fertiliser from tile(s)'"
      class="font-semibold capitalize text-palia-blue"
    >
      {{ title }}

      <span v-if="code !== ''" class="hidden sm:inline-block">
        [{{ code }}]
      </span>
    </span>
    <span v-else class="font-semibold text-palia-blue">
      {{ title }}
    </span>
    <template v-if="bonus.icon !== ''">
      -
      Grants
      <font-awesome-icon :icon="['fas', bonus.icon]" :class="bonus.colour" />
      <span :class="`${bonus.colour} font-semibold capitalize`">
        {{ bonus.type }}
      </span>
      <span class="lowercase">
        which
        {{ bonus.extraDetail }}.

      </span>
    </template>
    <template v-if="sizeText.sizeText">
      <span>
        <span class="font-bold">{{ sizeText.sizeText }}</span>, {{ sizeText.bonusInfo }}.
      </span>
    </template>

  </p>
</template>

================================================
FILE: components/garden-planner/ItemSelector/ItemSelector.vue
================================================

<script setup lang="ts">
import HoveredItemTooltip from './HoveredItemTooltip.vue'
import useGarden from '~/stores/useGarden'
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import type { SelectedItem } from '~/stores/useSelectedItem'
import { SelectedItemType, useSelectedItem } from '~/stores/useSelectedItem'
import { Crop, Fertiliser } from '~/assets/scripts/garden-planner/imports'
import { Bonus, CropCode, CropType, FertiliserType, crops, fertilisers, getCropFromCode, getFertiliserFromCode } from '~/assets/scripts/garden-planner/imports'
import FertiliserCode from '~/assets/scripts/garden-planner/enums/fertilisercode'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const selectedItem = useSelectedItem()
const isTakingScreenshot = useTakingScreenshot()
const gardenHandler = useGarden()

const plotStat = computed(() => gardenHandler.plotStat)
const totalFertilisers = computed(() => {
  let count = 0
  for (const fertiliser in plotStat.value.fertiliserCount)
    count += plotStat.value.fertiliserCount[fertiliser as FertiliserType]
  return count
})


const hoveredItem = ref<SelectedItem | null>(null)


const bonusToSortBy = ref<Bonus | null>(null)

const cropsList = computed(() => {
  const list: { crop: Crop; count: number }[] = []
  for (const crop of Object.values(crops))
    list.push({ crop, count: plotStat.value.cropTypeCount[crop.type] })

  let sortedList = list
  if (bonusToSortBy.value && !isTakingScreenshot.get)
    sortedList = list.filter(crop => crop.crop.cropBonus === bonusToSortBy.value)

  // else sort by bonus type
  else
    sortedList = list.sort((a, b) => compareBonus(a.crop.cropBonus, b.crop.cropBonus))

  return sortedList
})

const bonusRanking = [
  Bonus.WaterRetain,
  Bonus.HarvestIncrease,
  Bonus.WeedPrevention,
  Bonus.QualityIncrease,
  Bonus.SpeedIncrease,
]

// manual override for sorting by bonus type, we'll sort by water retain -> harvest increase -> weed prevention -> quality increase
function compareBonus(a: Bonus, b: Bonus) {
  return bonusRanking.indexOf(a) - bonusRanking.indexOf(b)
}

const cropsListRef = ref<HTMLDivElement | null>(null)

const { x: cropsListScrollX, arrivedState } = useScroll(cropsListRef)
const { left: reachedLeft, right: reachedRight } = toRefs(arrivedState)

const { pause: pauseLeft, resume: resumeLeft } = useIntervalFn(() => {
  cropsListScrollX.value -= 4
}, 10, {
  immediate: false,
})

const { pause: pauseRight, resume: resumeRight } = useIntervalFn(() => {
  cropsListScrollX.value += 4
}, 10, {
  immediate: false,
})

const keys = useMagicKeys()

const itemSelected = ref(false)

const lastMagicKeyPressed = ref('')

watchEffect(() => {
  // type in cropcode to select crop
  if (keys.shift.value) {
    const keysPressed = [...keys.current]

    // remove shift key
    keysPressed.shift()

    let keysAsCode = keysPressed.join('')
    keysAsCode = keysAsCode.charAt(0).toUpperCase() + keysAsCode.slice(1)

    // Prevents selecting a crop that has a similar code to another crop
    if (keysAsCode.length < lastMagicKeyPressed.value.length)
      return

    // if code is N, select crop-erase
    if (keysAsCode === 'N') {
      selectedItem.select(SelectedItemType.CropErase)
      itemSelected.value = true
      lastMagicKeyPressed.value = keysAsCode
      return
    }

    // Find crop with matching code
    for (const code of Object.values(CropCode)) {
      if (code === keysAsCode) {
        selectedItem.select(getCropFromCode(code) as Crop)
        itemSelected.value = true
        lastMagicKeyPressed.value = keysAsCode
        break
      }
    }
  }
  // Fertiliser
  else if (keys.alt.value) {
    const keysPressed = [...keys.current]

    keysPressed.shift()

    let keysAsCode = keysPressed.join('')
    keysAsCode = keysAsCode.charAt(0).toUpperCase() + keysAsCode.slice(1)

    // Prevents accidentally selecting a fertiliser that has similar code to another
    if (keysAsCode.length < lastMagicKeyPressed.value.length)
      return

    // if code is N, select fertiliser-erase
    if (keysAsCode === 'N') {
      selectedItem.select(SelectedItemType.FertiliserErase)
      itemSelected.value = true
      lastMagicKeyPressed.value = keysAsCode
      return
    }

    // Find crop with matching code
    for (const code of Object.values(FertiliserCode)) {
      if (code === keysAsCode) {
        selectedItem.select(getFertiliserFromCode(code) as Fertiliser)
        itemSelected.value = true
        lastMagicKeyPressed.value = keysAsCode
        break
      }
    }
  }

  if (keys.current.size === 0) {
    itemSelected.value = false
    lastMagicKeyPressed.value = ''
  }
})
</script>

<template>
  <section class="relative flex flex-col py-2 ">
    <h2 class="sr-only">Item Selector</h2>
    <div class="relative grid px-2 xl:grid-cols-7 ">

      <section v-if="!(isTakingScreenshot.get && plotStat.cropCount <= 0)"
        class="flex flex-col order-1 w-full xl:col-span-4" :class="[isTakingScreenshot.get ? 'col-span-4' : '']">
        <div class="flex gap-2">
          <h3 class="font-semibold text-palia-blue">
            Crops
          </h3>


          <ul class="flex items-center gap-1 text-sm" :class="{ hidden: isTakingScreenshot.get }">
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === null ? 'bg-palia-blue text-accent' : 'hover:bg-opacity-10 text-palia-blue-dark']"
              @click="bonusToSortBy = null">
              <font-awesome-icon class="" :icon="['fas', 'asterisk']" />
            </li>
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === Bonus.WaterRetain ? 'bg-palia-blue' : 'hover:bg-opacity-10']"
              @click="bonusToSortBy = Bonus.WaterRetain">
              <font-awesome-icon class="text-water-retain" :icon="['fas', 'droplet']" />
            </li>
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === Bonus.HarvestIncrease ? 'bg-palia-blue' : 'hover:bg-opacity-10']"
              @click="bonusToSortBy = Bonus.HarvestIncrease">
              <font-awesome-icon class="text-harvest-boost-dark" :icon="['fas', 'wheat-awn']" />
            </li>
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === Bonus.QualityIncrease ? 'bg-palia-blue' : 'hover:bg-opacity-10']"
              @click="bonusToSortBy = Bonus.QualityIncrease">
              <font-awesome-icon class="text-quality-increase-dark" :icon="['fas', 'star']" />
            </li>
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === Bonus.WeedPrevention ? 'bg-palia-blue' : 'hover:bg-opacity-10']"
              @click="bonusToSortBy = Bonus.WeedPrevention">
              <font-awesome-icon class="text-weed-prevention" :icon="['fas', 'shield']" />
            </li>
            <li
              class="flex items-center justify-center w-6 p-1 border border-solid rounded-xs cursor-pointer hover:bg-palia-blue border-palia-blue-dark aspect-square"
              :class="[bonusToSortBy === Bonus.SpeedIncrease ? 'bg-palia-blue' : 'hover:bg-opacity-10']"
              @click="bonusToSortBy = Bonus.SpeedIncrease">
              <font-awesome-icon class="text-growth-boost" :icon="['fas', 'forward-fast']" />
            </li>
          </ul>
        </div>
        <div class="flex gap-1 py-1 rounded-md w-fit items-start">
          <div class="hidden pb-1 sm:flex lg:items-center">
            <button id="crop-eraser" aria-label="Select Crop Eraser"
              class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc"
              :class="(selectedItem.val === 'crop-erase' && !isTakingScreenshot.get) ? 'bg-white' : (isTakingScreenshot.get) ? 'hidden' : ''"
              :in-picture-mode="isTakingScreenshot.get" @click="selectedItem.select('crop-erase')"
              @mouseover="selectedItem.hover('crop-erase')" @mouseleave="selectedItem.hover(null)">
              <font-awesome-icon class="absolute -z-10 max-w-[45px] text-success text-2xl " :icon="['fas', 'eraser']" />
            </button>
          </div>
          <div class="flex">
            <button aria-label="Scroll Items to left"
              class="hidden px-2 btn-lg rounded-r-none btn btn-primary w-fit sm:block disabled:text-transparent"
              :class="{ 'hidden!': isTakingScreenshot.get || (reachedLeft && reachedRight) }" @mousedown="resumeLeft"
              @mouseup="pauseLeft" @mouseleave="pauseLeft">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </button>
            <div ref="cropsListRef"
              class="flex flex-wrap items-center justify-start w-full gap-1 pb-1 transition-all sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:flex-nowrap sm:overflow-x-auto"
              :class="[(reachedLeft && reachedLeft) ? 'sm:scrollbar-invisible-horizontal' : 'sm:scrollbar-primary-horizontal']">
              <!--
                :class="(selectedItem.val === 'crop-erase' && !isTakingScreenshot.get) ? 'bg-white' : (isTakingScreenshot.get) ? 'hidden' : ''" -->
              <button id="crop-eraser" aria-label="Select Crop Eraser"
                class="relative border rounded-xs btn btn-square btn-lg btn-secondary isolate border-misc sm:hidden"
                :class="{
                  'bg-white': selectedItem.val === 'crop-erase' && !isTakingScreenshot.get,
                  'hidden': isTakingScreenshot.get,
                }" :in-picture-mode="isTakingScreenshot.get" @click="selectedItem.select('crop-erase')"
                @mouseover="selectedItem.hover(SelectedItemType.CropErase)" @mouseleave="selectedItem.hover(null)">
                <font-awesome-icon class="absolute -z-10 max-w-[45px] text-success text-2xl "
                  :icon="['fas', 'eraser']" />
              </button>
              <template v-for="(listedCrop) in cropsList" :key="listedCrop.crop.type">
                <CropButton v-if="(listedCrop.crop.type !== CropType.None as CropType)" :crop="listedCrop.crop"
                  :is-selected="(selectedItem.type === SelectedItemType.Crop)
                    && selectedItem.val !== null
                    && listedCrop.crop.type === (selectedItem.val as Crop).type" :count="listedCrop.count"
                  @click="selectedItem.select(crops[listedCrop.crop.type])"
                  @mouseover="selectedItem.hover(listedCrop.crop)" @mouseleave="selectedItem.hover(null)" />
              </template>
            </div>
            <button aria-label="Scroll Right"
              class="hidden px-2 rounded-l-none btn btn-primary btn-lg w-fit sm:block z-50"
              :class="{ 'hidden!': isTakingScreenshot.get || (reachedLeft && reachedRight) }" @mousedown="resumeRight"
              @mouseup="pauseRight" @mouseleave="pauseRight">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </button>
          </div>
        </div>
      </section>

      <section class="flex flex-wrap order-2 xl:justify-end xl:col-span-3"
        :class="[isTakingScreenshot.get ? 'col-span-3' : '']">
        <div v-if="!(isTakingScreenshot.get && totalFertilisers <= 0)">
          <h3 class="font-semibold text-palia-blue">
            Fertilisers per Day
          </h3>
          <div class="flex flex-wrap gap-1 pt-2 items-start">
            <button id="fertiliser-eraser" aria-label="Select Fertiliser Eraser"
              class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc" :class="{
                'bg-white': selectedItem.val === 'fertiliser-erase' && !isTakingScreenshot.get,
                'hidden': isTakingScreenshot.get,
              }" @click="selectedItem.select('fertiliser-erase')"
              @mouseover="selectedItem.hover(SelectedItemType.FertiliserErase)" @mouseleave="selectedItem.hover(null)">
              <font-awesome-icon class="absolute -z-10 max-w-[42px] text-warning text-2xl " :icon="['fas', 'eraser']" />
            </button>
            <template v-for="(count, index) in plotStat.fertiliserCount" :key="index">
              <FertiliserButton v-if="index !== FertiliserType.None" :fertiliser="fertilisers[index] as Fertiliser"
                :is-selected="(selectedItem.type === SelectedItemType.Fertiliser)
                  && selectedItem.val !== null
                  && index === (selectedItem.val as Fertiliser).type" :count="count"
                @click="selectedItem.select(fertilisers[index])" @mouseover="selectedItem.hover(fertilisers[index])"
                @mouseleave="selectedItem.hover(null)" />
            </template>
          </div>
        </div>
      </section>
    </div>
    <div class="px-2 text-xs pb -1">
      <HoveredItemTooltip :hovered-item="(selectedItem.hoverVal || selectedItem.val) as SelectedItem" />
    </div>

  </section>
</template>

================================================
FILE: components/garden-planner/OutputDisplay/CropCrafterDataDisplay.vue
================================================

<script setup lang="ts">
import type { PropType } from 'vue';
import { type IDetailedProcessingInfo } from '~/assets/scripts/garden-planner/classes/processor';

defineProps({
    selectedCropProcessingData: {
        type: Object as PropType<IDetailedProcessingInfo>,
        required: true
    },
    selectedCropDetail: {
        type: String,
        required: true
    }
})

const cropDetailCycleIndex = ref(0);
const cropDetailCyclePhaseIndex = ref(0);
</script>

<template>
    <div v-if="selectedCropProcessingData && selectedCropDetail" class="grid gap-1">
        <div class="flex justify-between">
            <!-- <div class="flex flex-col">
                <p class="text-sm">Cycle</p>
                <div v-if="cropDetailsProcessTab === 'cycle-data'" class="join">
                  <button class="join-item btn" @click="() => {
                    if (cropDetailCycleIndex <= 0)
                      return

                    cropDetailCycleIndex--
                  }">«</button>
                  <button class="join-item btn">Cycle {{ cropDetailCycleIndex + 1 }}</button>
                  <button class="join-item btn" @click="() => {
                    if (cropDetailCycleIndex >= (selectedCropProcessingData!.cycleData.length - 1))
                      return

                    else
                      cropDetailCycleIndex++
                  }">»</button>
                </div>
              </div> -->
            <div class="flex flex-row gap-2 items-center">
                <p class="text-sm font-bold">Harvest</p>
                <div class="join">
                    <button
                        v-for="phaseIndex in selectedCropProcessingData!.cycleData[cropDetailCycleIndex].cycleCrafterData.length"
                        @click="cropDetailCyclePhaseIndex = (phaseIndex - 1)" class="join-item btn btn-soft btn-sm"
                        :class="{ 'btn-active': (phaseIndex - 1) === cropDetailCyclePhaseIndex }" :aria-label="`Phase ${phaseIndex}`">{{ phaseIndex
                        }}</button>
                </div>
            </div>
        </div>
        <div class="max-h-48 overflow-y-scroll overflow-x-auto ">
            <table class="table bg-primary table-sm table-pin-rows">
                <thead>
                    <tr class="font-light text-accent">
                        <th class="">
                            Crafter #
                        </th>
                        <th class="">
                            Crops Added
                        </th>
                        <th class="">
                            Processes
                        </th>
                        <th class="">
                            Time
                        </th>
                        <th class="">
                            +Idle / >Excess
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(crafter, crafterIndex) in selectedCropProcessingData.cycleData[cropDetailCycleIndex].cycleCrafterData[cropDetailCyclePhaseIndex].crafterData"
                        :key="`${cropDetailCycleIndex}-${selectedCropDetail}-${crafterIndex}`">
                        <td class="">
                            {{ crafterIndex + 1 }}
                        </td>
                        <td class="">
                            {{ crafter.cropsInsertedCount.toLocaleString() }}
                        </td>
                        <td class="">
                            {{ crafter.processesDone.toLocaleString(undefined, { maximumFractionDigits: 1 }) }}
                        </td>
                        <td class="">
                            {{ formatMinutesToHoursMinutes(crafter.processTimeMinutes) }}
                        </td>
                        <td class="">
                            <template v-if="crafter.excessTimeMinutes > 0">
                                <span class="italic">
                                    &gt;{{ formatMinutesToHoursMinutes(crafter.excessTimeMinutes) }}</span>
                            </template>
                            <template v-else="crafter.idleTimeMinutes > 0">
                                +{{ formatMinutesToHoursMinutes(crafter.idleTimeMinutes) }}
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

================================================
FILE: components/garden-planner/OutputDisplay/CropDetailsDisplay.vue
================================================

<script setup lang="ts">
import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import useHarvester from '~/stores/useHarvester'
import useProcessor from '~/stores/useProcessor'
import { ItemType, parseCropId, type ICropName, type ICropNameWithGrowthDiff } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import { CropType } from '~/assets/scripts/garden-planner/imports'
import { getCropFromType } from '~/assets/scripts/garden-planner/imports'

import CropCrafterDataDisplay from './CropCrafterDataDisplay.vue'
import CropDetailsOverallDisplay from './CropDetailsOverallDisplay.vue'
import CropDetailsHarvest from './CropDetailsHarvest.vue'

const harvester = useHarvester()
const processor = useProcessor()

// --- Crop Details Tab Logic ---
const selectedCropDetail = ref<ICropNameWithGrowthDiff | null>(null)

// Gets cycle detail which relies on selected crop detail
const cycleId = computed(() => {
  if (!selectedCropDetail.value || !harvester.dayHarvests || harvester.dayHarvests.size === 0)
    return ''

  return `${parseCropId(selectedCropDetail.value).type}${harvester.settings.useStarSeeds ? '-Star' : '-Base'}` satisfies ICropName
})

const cropInfo = computed(() => {
  return parseCropId(selectedCropDetail.value || '')
})

// Get unique crop types present in the harvest, maintaining the growth diff identifier
const presentCrops = computed(() => {
  const cropsMap = new Map<ICropNameWithGrowthDiff, { count: number; cropType: CropType; isStar: boolean; hasGrowthBoost: boolean }>()
  if (!harvester.harvester.totalHarvest?.crops)
    return cropsMap

  for (const [cropId, data] of harvester.harvester.totalHarvest.crops) {
    if (data.totalRaw > 0) { // Only show crops that were actually harvested
      const { type, isStar, hasGrowthBoost } = parseCropId(cropId)
      const existing = cropsMap.get(cropId) || { count: 0, cropType: type, isStar, hasGrowthBoost }
      existing.count += data.totalWithDeductions
      cropsMap.set(cropId, existing)
    }
  }

  // Sort alphabetically, maybe group by type later if needed
  return new Map([...cropsMap.entries()].sort(([keyA], [keyB]) => keyA.localeCompare(keyB)))
})

function selectCropForDetail(cropId: ICropNameWithGrowthDiff | null) {
  selectedCropDetail.value = cropId
}

// Computed property for selected crop's cycle data
const selectedCropCycleData = computed(() => {
  if (!selectedCropDetail.value || !harvester.harvester.totalHarvest?.cycleData)
    return null

  const { type, hasGrowthBoost } = parseCropId(selectedCropDetail.value)
  const totalHarvestCycleId = `${type}${(harvester.settings.useStarSeeds ? '-Star' : '-Base')}${(harvester.settings.useGrowthBoost && hasGrowthBoost) ? '-Growth' : ''}` satisfies ICropNameWithGrowthDiff

  return harvester.harvester.totalHarvest.cycleData.get(totalHarvestCycleId)
})

// Computed property for selected crop's processing data
const selectedCropProcessingData = computed(() => {

  if (!selectedCropDetail.value || !processor.output?.detailedProcessingInfo)
    return null

  const detailedProcessingInfoOutput = processor.output.detailedProcessingInfo.get(selectedCropDetail.value)


  if (detailedProcessingInfoOutput && detailedProcessingInfoOutput.cycleData.length > 0) {
    return detailedProcessingInfoOutput
  }

  else return null
})



const cropDetailsTab = ref<'overall' | 'crafter-data' | 'day-by-day'>('overall')

// Resets selected crop detail to null if no crop cycle data is available and the selected crop detail is not null
watchEffect(() => {
  if (!selectedCropCycleData.value && selectedCropDetail.value !== null) {
    selectedCropDetail.value = null
  }
})

// Resets crop details tab to 'overall' if no processing data is available and the tab is set to 'crafter-data'
watchEffect(() => {
  if (!selectedCropProcessingData.value && cropDetailsTab.value === 'crafter-data') {
    cropDetailsTab.value = 'overall'
  }
})
</script>
<template>
  <section class="flex flex-col gap-1 pt-1 text-palia-blue-dark">
    <h2 class="text-sm font-semibold text-palia-blue-dark">
      Crop Details
    </h2>

    <!-- Crop Selector -->
    <nav class="flex flex-wrap gap-2 p-2 border rounded-sm border-misc-dark bg-accent">
      <p v-if="presentCrops.size === 0" class="text-lg  text-misc-dark">
        No crops in layout to display details for.
      </p>
      <button v-if="presentCrops.size > 0" @click="selectCropForDetail(null)"
        class="relative border rounded-xs btn btn-lg btn-square btn-secondary isolate border-misc tooltip"
        data-tip="All harvests"
        >
        <FontAwesomeIcon :icon="['fas', 'wheat-awn']" />
      </button>
      <template v-for="([cropId, data]) in presentCrops" :key="cropId">
        <CropDetailButton :crop="getCropFromType(parseCropId(cropId).type)!" :count="data.count"
          @click="selectCropForDetail(cropId)" :isSelected="cropId === selectedCropDetail" :cropId="cropId" />
      </template>
    </nav>

    <!-- Details Display -->
    <div v-if="selectedCropDetail && selectedCropCycleData" class="py-1 flex flex-col gap-1 @container">
      <div class="flex gap-1 flex-col lg:flex-row  gap-x-4">
        <p class="text-sm font-semibold text-palia-blue-dark flex gap-1 items-center bg-accent px-3 rounded-sm">
          <span class="capitalize font-bold">{{ selectedCropCycleData.cropType }}</span>
          <FontAwesomeIcon v-if="selectedCropDetail.includes('-Star')" :icon="['fas', 'star']"
            class="text-sm text-quality-increase-dark" aria-label="Star Seed" />
          <FontAwesomeIcon v-if="selectedCropDetail.includes('-Growth')" :icon="['fas', 'forward-fast']"
            class="ml-1 text-sm text-growth-boost" title="Growth Boost Applied" aria-label="Growth Boost Applied" />
        </p>
        <div role="tablist" class="tabs tabs-xs tabs-border bg-palia-blue-dark rounded-sm gap-1 w-fit">
          <button role="tab" class="tab bg-transparent"
            :class="{ 'tab-active text-accent': cropDetailsTab === 'overall' }" @click="cropDetailsTab = 'overall'"
            :aria-selected="cropDetailsTab === 'overall'">Summary</button>
          <button v-if="selectedCropProcessingData" role="tab" class="tab bg-transparent"
            :class="{ 'tab-active text-accent': cropDetailsTab === 'crafter-data' }"
            @click="cropDetailsTab = 'crafter-data'"
            :aria-selected="cropDetailsTab === 'crafter-data'">Crafters</button>
          <button role="tab" class="tab bg-transparent"
            :class="{ 'tab-active text-accent': cropDetailsTab === 'day-by-day' }"
            @click="cropDetailsTab = 'day-by-day'" :aria-selected="cropDetailsTab === 'day-by-day'">Harvest
            Days</button>
        </div>
      </div>
      <div v-if="cropDetailsTab === 'overall'">
        <CropDetailsOverallDisplay :selected-crop-detail="selectedCropDetail" />
      </div>
      <div v-else-if="selectedCropProcessingData && cropDetailsTab === 'crafter-data'">
        <CropCrafterDataDisplay :selected-crop-processing-data="selectedCropProcessingData"
          :selected-crop-detail="selectedCropDetail" />
      </div>
      <div class="pt-1" v-if="cropDetailsTab === 'day-by-day'">
        <CropDetailsHarvest :day-harvests="harvester.harvester.dayHarvests" :crop-to-filter="selectedCropDetail" />
      </div>
    </div>
    <div v-else-if="selectedCropDetail" class="mt-2">
      <p class="italic font-bold text-warning" role="alert">
        ERROR: No data available for {{ selectedCropDetail }}...
      </p>
    </div>
    <div v-else class="mt-2">
      <CropDetailsHarvest  should-be-max-size :day-harvests="harvester.harvester.dayHarvests" />
    </div>

  </section>
</template>

================================================
FILE: components/garden-planner/OutputDisplay/CropDetailsHarvest.vue
================================================

<script setup lang="ts">
import ItemDisplay from '~/components/garden-planner/HarvestCalculator/ItemDisplay.vue'
import useProcessor from '~/stores/useProcessor'
import { type ICropNameWithGrowthDiff, type IDayHarvest, type IDayHarvests } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import type { Prop, PropType } from 'vue'
import { CropItem, type Item } from '~/assets/scripts/garden-planner/classes/items/item'
import InventoryRow from './InventoryRow.vue'


const props = defineProps({
    dayHarvests: {
        type: Map as PropType<Map<number, IDayHarvest>>,
        required: true
    },
    cropToFilter: {
        type: String as PropType<ICropNameWithGrowthDiff>,
        required: false,
    },
    shouldBeMaxSize: {
        type: Boolean,
        default: false
    }
})

const listArr = computed(() => {
    console.log(props.dayHarvests)
    console.log(Object.values(props.dayHarvests))

    return Array.from(props.dayHarvests.values())
})

const listFiltered = computed(() => {
    const cropToFilter = props.cropToFilter
    let filteredList = listArr.value

    console.log(listArr.value)
    if (cropToFilter) {
        console.log('toFilter', cropToFilter)
        filteredList = listArr.value.filter((dayHarvest) => {
            return dayHarvest.crops.has(cropToFilter)
        })
    }

    return filteredList
})

const { list, containerProps, wrapperProps } = useVirtualList(listFiltered, {
    itemHeight: 69.6
})

const size = computed(() => {
    return props.shouldBeMaxSize ? 368 : 338
})
</script>

<template>
    <section class="h-full">
        <h3 class="text-sm font-semibold">Harvests</h3>
        <div class="bg-secondary p-2 rounded-sm border border-misc" v-bind="containerProps" :style="{height: `${size}px`}">
            <div v-bind="wrapperProps" class="">
                <InventoryRow v-for="item in list" :key="item.data.day" :day-harvest="item.data" :crop-to-filter-for="cropToFilter" />
            </div>
        </div>
    </section>
</template>

================================================
FILE: components/garden-planner/OutputDisplay/CropDetailsOverallDisplay.vue
================================================

<script setup lang="ts">
import { computed, ref, type PropType } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import useHarvester from '~/stores/useHarvester'
import useProcessor from '~/stores/useProcessor'
import { ItemType, parseCropId, type ICropName, type ICropNameWithGrowthDiff } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import { CropType } from '~/assets/scripts/garden-planner/imports'
import { getCropFromType } from '~/assets/scripts/garden-planner/imports'
import ItemDisplay from '../HarvestCalculator/ItemDisplay.vue'
import { formatMinutesToDaysHoursMinutes } from '~/utils/formatters' // Assuming a formatter utility exists or needs creation


const harvester = useHarvester()
const processor = useProcessor()
const props = defineProps({
    selectedCropDetail: {
        type: String as PropType<ICropNameWithGrowthDiff>,
        required: true
    }
})

// Computed property for selected crop's cycle data
const selectedCropCycleData = computed(() => {
    if (!props.selectedCropDetail || !harvester.harvester.totalHarvest?.cycleData){
        return null
    }

    const { type, hasGrowthBoost } = parseCropId(props.selectedCropDetail)
    const totalHarvestCycleId = `${type}${(harvester.settings.useStarSeeds ? '-Star' : '-Base')}${(harvester.settings.useGrowthBoost && hasGrowthBoost) ? '-Growth' : ''}` satisfies ICropNameWithGrowthDiff

    return harvester.harvester.totalHarvest.cycleData.get(totalHarvestCycleId)
})


// Gets cycle detail which relies on selected crop detail
const cycleId = computed(() => {
    if (!props.selectedCropDetail || !harvester.dayHarvests || harvester.dayHarvests.size === 0)
        return ''

    return `${parseCropId(props.selectedCropDetail).type}${harvester.settings.useStarSeeds ? '-Star' : '-Base'}` satisfies ICropName
})

const cropInfo = computed(() => {
    return parseCropId(props.selectedCropDetail || '')
})

// Get unique crop types present in the harvest, maintaining the growth diff identifier
const presentCrops = computed(() => {
    const cropsMap = new Map<ICropNameWithGrowthDiff, { count: number; cropType: CropType; isStar: boolean; hasGrowthBoost: boolean }>()
    if (!harvester.harvester.totalHarvest?.crops)
        return cropsMap

    for (const [cropId, data] of harvester.harvester.totalHarvest.crops) {
        if (data.totalRaw > 0) { // Only show crops that were actually harvested
            const { type, isStar, hasGrowthBoost } = parseCropId(cropId)
            const existing = cropsMap.get(cropId) || { count: 0, cropType: type, isStar, hasGrowthBoost }
            existing.count += data.totalWithDeductions
            cropsMap.set(cropId, existing)
        }
    }

    // Sort alphabetically, maybe group by type later if needed
    return new Map([...cropsMap.entries()].sort(([keyA], [keyB]) => keyA.localeCompare(keyB)))
})

// Computed property for selected crop's processing data
const selectedCropProcessingData = computed(() => {

    if (!props.selectedCropDetail || !processor.output?.detailedProcessingInfo)
        return null

    const detailedProcessingInfoOutput = processor.output.detailedProcessingInfo.get(props.selectedCropDetail)


    if (detailedProcessingInfoOutput && detailedProcessingInfoOutput.cycleData.length > 0) {
        return detailedProcessingInfoOutput
    }

    else return null
})

const selectedCropIsProcessedAs = computed(() => {
    if (!props.selectedCropDetail) {
        return null
    }

    return processor.settings.cropSettings.get(props.selectedCropDetail satisfies ICropNameWithGrowthDiff)?.processAs
})

const canFinishBeforeNextHarvest = computed(() => {
    if (!props.selectedCropDetail || !processor.output?.detailedProcessingInfo)
        return null

    const detailedProcessingInfoOutput = processor.output.detailedProcessingInfo.get(props.selectedCropDetail)?.cycleData

    let canFinishBeforeNextHarvest = true

    if (detailedProcessingInfoOutput) {
        for (const detailedProcessingInfo of detailedProcessingInfoOutput) {
            for (const crafter of detailedProcessingInfo.cycleCrafterData) {
                if (!crafter.canFinishBeforeNextHarvest)
                    canFinishBeforeNextHarvest = false
            }
        }

        return canFinishBeforeNextHarvest
    }
})

// Computed property for seeds required per replant event
const selectedCropSeedsRequiredPerHarvest = computed(() => {
    if (!props.selectedCropDetail || !harvester.dayHarvests || harvester.dayHarvests.size === 0 || !cycleId.value)
        return null

    // Find the first day harvest that requires this specific seed type
    for (const [, dayHarvest] of harvester.dayHarvests) {
        if (dayHarvest.seedsRequired.has(cycleId.value))
            return dayHarvest.seedsRequired.get(cycleId.value)
    }
    return null // No replanting occurred or required for this specific type
})

// Computed property for total seeds required over the simulation
const selectedCropTotalSeedsRequired = computed(() => {
    if (!props.selectedCropDetail || !harvester.dayHarvests || harvester.dayHarvests.size === 0 || !cycleId.value)
        return 0

    let total = 0
    for (const [, dayHarvest] of harvester.dayHarvests) {
        if (dayHarvest.seedsRequired.has(cycleId.value))
            total += dayHarvest.seedsRequired.get(cycleId.value)?.count || 0
    }
    return total
})

// Computed property for cycle duration
const selectedCropCycleDuration = computed(() => {
    if (!selectedCropCycleData.value)
        return 0
    return selectedCropCycleData.value.phases.reduce((sum, phase) => sum + phase.phaseLength, 0)
})

// Computed property for total full cycles
const selectedCropTotalFullCycles = computed(() => {
    if (!selectedCropCycleData.value || selectedCropCycleData.value.phases.length === 0)
        return 0
    return Math.floor(selectedCropCycleData.value.totalHarvestsCount / selectedCropCycleData.value.phases.length)
})

const selectedCropAsCrop = computed(() => {
    if (!props.selectedCropDetail) {
        return getCropFromType(CropType.None)
    }

    return getCropFromType(parseCropId(props.selectedCropDetail).type)
})
</script>

<template>
    <section v-if="selectedCropDetail && selectedCropCycleData" class="py-1 flex flex-col gap-1">
        <!-- Cycle Info -->
        <section class="p-2 border rounded-sm border-misc-dark bg-accent">
            <div class="flex flex-col gap-1">
                <div class="flex flex-wrap gap-1 text-sm">
                    <p class="font-semibold badge badge-sm">{{ selectedCropCycleData.phases.length }}<span
                            class="">Harvest<template
                                v-if="selectedCropCycleData.phases.length > 1">s</template></span>/ {{
                                    selectedCropCycleDuration }} Days
                    </p>
                    <p class="font-semibold badge badge-sm">{{ selectedCropTotalFullCycles }} Cycle<template
                            v-if="selectedCropTotalFullCycles > 1">s</template></p>
                    <p v-if="selectedCropTotalFullCycles !== selectedCropCycleData.totalHarvestsCount"
                        class="font-semibold badge badge-sm">
                        {{ selectedCropCycleData.totalHarvestsCount }} Total Harvests</p>
                    <p class="font-semibold badge badge-sm"
                        v-if="selectedCropSeedsRequiredPerHarvest && (cropInfo.isStar === parseCropId(cycleId).isStar)">
                        <span class="font-semibold">Seeds per Replant:</span>&nbsp;{{
                            selectedCropSeedsRequiredPerHarvest.count }}
                    </p>
                    <p class="font-semibold badge badge-sm" v-else>
                        <span class="font-semibold">Seeds per Replant:</span>&nbsp;N/A
                    </p>
                    <p v-if="(selectedCropSeedsRequiredPerHarvest?.count || 0) !== selectedCropTotalSeedsRequired && (cropInfo.isStar === parseCropId(cycleId).isStar)"
                        class="font-semibold badge badge-sm"><span class="font-semibold">Total Seeds
                            Used:</span>&nbsp;{{
                                selectedCropTotalSeedsRequired }}</p>
                </div>
                <div>
                    <p class="text-sm pb-1">Harvest days/cycle</p>
                    <ul class="flex flex-wrap gap-2">
                        <template v-for="harvestYield in selectedCropCycleData.phases">
                            <li class="flex flex-col">
                                <p class="text-xs">Day {{ harvestYield.dayOfHarvest }}</p>
                                <ItemDisplay class="max-w-12" :imgSrc="selectedCropAsCrop?.image"
                                    :imgAlt="selectedCropAsCrop?.type" :star="cropInfo.isStar"
                                    :count="(harvestYield.yield[(cropInfo.isStar ? 'star' : 'base')].totalWithDeductions)" />
                            </li>
                        </template>
                        <li class="flex flex-col md:pl-4 md:border-l-2 border-l-misc"
                            v-if="harvester.settings.includeReplantCost && (cropInfo.isStar === parseCropId(cycleId).isStar)">
                            <p class="text-xs">Average deduction (Day {{
                                selectedCropCycleData.phases.at(-1)!.dayOfHarvest }})
                            </p>
                            <ItemDisplay class="max-w-12" :imgSrc="selectedCropAsCrop?.image"
                                :imgAlt="selectedCropAsCrop?.type" :star="cropInfo.isStar"
                                :count="(selectedCropCycleData.phases.at(-1)!.yield[(cropInfo.isStar ? 'star' : 'base')].totalWithDeductions - selectedCropCycleData.phases.at(-1)!.yield[(cropInfo.isStar ? 'star' : 'base')].totalRaw)" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Processing Info -->
        <section v-if="selectedCropProcessingData && selectedCropProcessingData.cycleData.length > 0"
            class="flex flex-col gap-2 p-2 border rounded-sm border-misc-dark bg-accent">
            <div>

                <p v-if="!canFinishBeforeNextHarvest" class="text-neutral font-semibold text-xs">
                    <font-awesome-icon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
                    Harvests can't process before next harvest
                </p>
            </div>
            <div class="grid grid-cols-2 flex-wrap gap-1 gap-y-2 text-sm xl:grid-cols-3 pb-4">
                <div class="flex flex-col gap-1 py-1 border border-palia-blue px-1 rounded-xs justify-between">
                    <p class="text-palia-blue opacity-80 text-xs">Average Produce/Cycle:</p>
                    <ItemDisplay class="max-w-12"
                        :imgSrc="selectedCropAsCrop![`${selectedCropIsProcessedAs === ItemType.Preserve ? 'preserveImage' : 'seedImage'}`]"
                        :imgAlt="`${selectedCropAsCrop!.type} ${selectedCropIsProcessedAs}`"
                        :count="selectedCropProcessingData.averageProduce" />
                </div>
                <div class="flex flex-col gap-1 py-1 border border-palia-blue px-2 justify-between rounded-xs">
                    <p class="text-palia-blue opacity-80 text-xs">Gold Generated</p>
                    <div class="font-bold text-lg flex items-center gap-1">
                        <img width="16" height="16" src="/gold.webp" class="max-h-[1rem]" :srcset="undefined" alt="Gold"
                            format="webp">
                        <p>{{
                            Math.round(selectedCropProcessingData.averageGoldGenerated).toLocaleString()
                        }}</p>
                    </div>
                </div>
                <div class="flex flex-col gap-1 py-1 border border-palia-blue px-2 rounded-xs justify-between">
                    <p class="text-palia-blue opacity-80 text-xs">Total Active Processing Minutes</p>
                    <p class="font-bold text-lg"> <font-awesome-icon :icon="['fas', 'stopwatch']" /> {{
                        formatMinutesToDaysHoursMinutes(selectedCropProcessingData.totalProcessMinutes) }}</p>
                </div>
                <div class="flex flex-col gap-1 py-1 border border-palia-blue px-2 rounded-xs justify-between">
                    <p class="text-palia-blue opacity-80 text-xs">Average Cycle Processing Time</p>
                    <p class="font-bold text-lg"> <font-awesome-icon :icon="['fas', 'stopwatch']" /> {{
                        formatMinutesToDaysHoursMinutes(selectedCropProcessingData.averageProcessMinutes)
                    }}</p>
                </div>
                <div class="flex flex-col gap-1 py-1 border border-palia-blue px-2 rounded-xs justify-between">
                    <p class="text-palia-blue opacity-80 text-xs">Estimated Time to Process Everything</p>
                    <p class="font-bold text-lg"> <font-awesome-icon :icon="['fas', 'stopwatch']" /> {{
                        formatMinutesToDaysHoursMinutes(selectedCropProcessingData.effectiveProcessMinutes) }}</p>
                </div>
            </div>
        </section>
        <section v-else-if="selectedCropProcessingData === null || selectedCropProcessingData.cycleData[0].cycleCrafterData === undefined"
            class="p-2 border rounded-sm border-misc-dark bg-accent">
            <p class="text-sm italic text-misc-dark">
                No Process Data
            </p>
        </section>
    </section>

</template>

================================================
FILE: components/garden-planner/OutputDisplay/InventoryRow.vue
================================================

<script setup lang="ts">
import ItemDisplay from '~/components/garden-planner/HarvestCalculator/ItemDisplay.vue'
import useProcessor from '~/stores/useProcessor'
import { type ICropNameWithGrowthDiff, type IDayHarvest } from '~/assets/scripts/garden-planner/utils/garden-helpers'
import type { PropType } from 'vue'
import { CropItem, type Item } from '~/assets/scripts/garden-planner/classes/items/item'
import ItemDisplayAlt from '../HarvestCalculator/ItemDisplayAlt.vue'
import { usePlannerDisplayConfig } from '~/stores/usePlannerDisplayConfig'

const props = defineProps({
  dayHarvest: {
    type: Object as PropType<IDayHarvest>,
    required: false
  },
  cropToFilterFor: {
    type: String
  }
})


const itemsFromHarvest = computed(() => {
  const items = [] as Item[]
  if (!props.dayHarvest)
    return []

  for (const [cropId, crop] of props.dayHarvest?.crops) {
    items.push(CropItem.fromCropYieldAndInfo(cropId, crop))
  }

  if (props.cropToFilterFor) {
    items.sort((a, b) => Number((b.name === props.cropToFilterFor)) - Number((a.name === props.cropToFilterFor)))
  }

  return items
})

const plannerDisplayConfig = usePlannerDisplayConfig()
</script>

<template>
  <section class="pb-1">
    <p class="text-xs text-palia-blue-dark">Day {{ dayHarvest?.day }}</p>
    <ul
      class="flex w-full overflow-x-auto max-w-117 gap-1 p-1 bg-opacity-50 rounded-md bg-accent border border-misc-dark"
      :class="[plannerDisplayConfig.get === 'display+display' ? 'xl:max-w-138 ' : 'lg:max-w-130 xl:max-w-167 2xl:max-w-170']"
      >
      <ItemDisplayAlt v-for="item of itemsFromHarvest" :key="item.name" :img-src="item.image" :img-alt="item.name"
        :star="item.isStar" :count="item.count" :base-gold-value="item.price" />
    </ul>
  </section>
</template>

================================================
FILE: components/garden-planner/OutputDisplay/OverallDisplay.vue
================================================

<script setup lang="ts">
import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TotalInventory from '../HarvestCalculator/TotalInventory.vue'
import ItemDisplay from '../HarvestCalculator/ItemDisplay.vue'
import useHarvester from '~/stores/useHarvester'
import useProcessor from '~/stores/useProcessor'
import { formatMinutesToDaysHoursMinutesObject } from '~/utils/formatters'

const harvester = useHarvester()
const processor = useProcessor()
const starBaseChance = computed(() => Math.trunc(Math.min(100, (0.25 + (harvester.settings.useStarSeeds ? 0.25 : 0) + (harvester.settings.level * 0.02)) * 100)))
const craftingTime = computed(() => formatMinutesToDaysHoursMinutesObject(processor.highestCraftingTime))
</script>
<template>
  <section class="flex flex-col gap-2 pt-1 @container">
    <section>
      <p class="text-sm font-semibold text-palia-blue-dark">
        Overview
      </p>
      <div class="grid grid-cols-3 gap-1 @lg:grid-cols-5">
        <div class="p-1 border rounded-md bg-accent border-misc-dark">
          <p class="w-full px-1 text-xs text-right text-misc-dark">
            Total
          </p>
          <p class="flex items-center justify-end gap-1 text-lg font-semibold text-center @2xl:text-xl text-palia-blue">
            <img width="12" height="12" src="/gold.webp" class="max-h-[1rem]" :srcset="undefined" alt="Gold"
              format="webp">
            {{ parseInt((processor.finalGoldValue || 0).toFixed(0)).toLocaleString() }}
          </p>
        </div>
        <div class="p-1 border rounded-md bg-accent border-misc-dark">
          <p class="w-full px-1 text-xs text-right text-misc-dark">
            <span v-if="craftingTime.actualValue <= 0" class="text-xs font-normal tooltip"
              data-tip="Processing time excluded">
              <FontAwesomeIcon class="text-sm text-warning" :icon="['fas', 'triangle-exclamation']" />
            </span>
            Average
          </p>
          <p
            class="flex items-center justify-end w-full gap-1 text-lg font-semibold text-right @2xl:text-xl text-palia-blue">
            <img width="16" height="16" src="/gold.webp" class="max-h-[1rem]" :srcset="undefined" alt="Gold"
              format="webp">
            <span v-if="processor.highestCraftingTime > 0 && processor.settings.goldAverageSetting === 'crafterTime'">
              &#8776;{{ (processor.averageGoldValue || 0).toLocaleString() }}
            </span>
            <span v-else>
              &#8776;{{ (Math.round((processor.finalGoldValue / harvester.totalHarvest.lastHarvestDay))
                || 0).toLocaleString() }}
            </span>
          </p>
          <p class="flex items-center justify-end gap-1 text-xs italic text-center text-palia-blue">
            <span class="@sm:inline-block"
              :class="{ 'hidden': processor.settings.goldAverageSetting === 'growthTick' }">per</span>
            <span v-if="processor.settings.goldAverageSetting === 'growthTick'" class="@sm:hidden inline-block">/</span>

            <span v-if="processor.highestCraftingTime > 0 && processor.settings.goldAverageSetting === 'crafterTime'"
              class="font-bold text-growth-boost-dark">Hour <FontAwesomeIcon :icon="['fas', 'stopwatch']" /></span>
            <span v-else class="font-bold flex flex-nowrap whitespace-nowrap gap-1 text-harvest-boost-dark">Growth Tick
              <FontAwesomeIcon class="" :icon="['fas', 'seedling']" />
            </span>

          </p>
        </div>
        <div class="p-1 border rounded-md bg-accent border-misc-dark">
          <p class="w-full text-xs text-right text-misc-dark">
            Process Time
          </p>
          <p class="flex items-end justify-end text-lg font-semibold text-right text-palia-blue @2xl:text-xl">
            <template v-if="((craftingTime.actualValue) > 0)">
              &#8776;<template v-if="craftingTime.days > 0">
                {{ parseInt(craftingTime.days.toFixed(0)).toLocaleString() }}
                <span class="pr-1" aria-label="Days">d</span>
              </template>
              {{ parseInt(craftingTime.hours.toFixed(0)).toLocaleString() }}
              <span class="pr-1" aria-label="Hours">h</span>

              {{
                parseInt(craftingTime.minutes.toFixed(0)).toLocaleString()
              }}<span class="" aria-label="Minutes">m</span>
            </template>
            <template v-else>
              <span class="text-palia-blue-dark">N/A</span>
            </template>
          </p>

          <p v-if="(craftingTime.actualValue > 0)"
            class="flex items-center justify-end gap-1 text-xs italic text-center text-palia-blue">
            Earth Time
          </p>
        </div>
        <div class="p-1 border rounded-md bg-accent border-misc-dark">
          <p class="w-full px-1 text-xs text-right text-misc-dark">
            Level
          </p>
          <p class="flex items-center justify-end gap-1 text-lg font-semibold text-center @2xl:text-xl text-palia-blue">
            {{ harvester.settings.level }}
          </p>
        </div>
        <div class="p-1 border rounded-md bg-accent border-misc-dark">
          <p class="w-full px-1 text-xs text-right text-misc-dark">
            Days of Harvest
          </p>
          <p class="flex items-center justify-end gap-1 text-xl font-semibold text-center @2xl:text-xl text-palia-blue">
            {{ harvester.totalHarvest.lastHarvestDay }}
          </p>
        </div>
      </div>
    </section>
    <section class="text-xs  whitespace-nowrap">
      <ul class="flex flex-wrap gap-1 text-palia-blue-dark">
        <li class="text-xs border-none badge badge-sm bg-quality-increase-dark">
          <p>
            <FontAwesomeIcon class="pr-1" :class="harvester.settings.useStarSeeds ? '' : ' opacity-50'"
              :icon="['fas', 'star']" />
            {{ harvester.settings.useStarSeeds ? 'Star Seed' : 'Normal Seed' }}
          </p>
        </li>
        <li v-if="harvester.settings.includeReplant" class="text-xs border-none badge badge-sm bg-harvest-boost-dark">
          <p>
            <span>
              <FontAwesomeIcon :icon="['fas', 'seedling']" class="pr-1" />
              <abbr title="Include">Incl.</abbr>Replant
            </span><span v-if="harvester.settings.includeReplantCost">& Cost

            </span>
          </p>
        </li>
        <li v-if="harvester.settings.useGrowthBoost" class="text-xs border border-none badge badge-sm">
          <p>
            <FontAwesomeIcon :icon="['fas', 'forward-fast']" class="pr-1" />
            Growth Boost
          </p>
        </li>
        <li class="text-xs badge badge-sm">
          <span class="font-black">{{ starBaseChance }}%</span>Star Crop Chance
        </li>
        <li class="text-xs badge badge-sm ">
          No Fertiliser Cost
        </li>
      </ul>
    </section>
    <TotalInventory />
    <section class="grid gap-1 md:grid-cols-2">
      <div class="flex flex-col w-full">
        <div class="flex items-end">

          <img src="/public/crafters/seeder.webp" class="max-w-6" alt="Seed Collectors" aria-hidden="true">
          <p class="px-1 text-sm font-semibold text-palia-blue-dark">
            Seed Collectors
            <span v-if="processor.seedCollectorsCount > 0">- {{ processor.seedCollectorsCount }}</span>
          </p>
        </div>
        <ul
          class="flex flex-wrap gap-1 p-2 bg-opacity-50 border rounded-md border-misc-dark bg-accent min-h-16 gap-y-2">
          <ItemDisplay v-for="[name, item] in processor.seedCollectors" :key="name" :img-src="item.img.src"
            :img-alt="item.img.alt" :star="item.isStar" :count="item.count" :base-gold-value="item.baseGoldValue"
            tooltip="Seed Collectors to use" />
        </ul>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex items-end">

          <img src="/public/crafters/preserve-jar.webp" class="max-w-6" alt="Preserve Jars" aria-hidden="true">
          <p class="px-1 text-sm font-semibold text-palia-blue-dark">
            Preserve Jars
            <span v-if="processor.preserveJarsCount > 0">- {{ processor.preserveJarsCount }}</span>
          </p>
        </div>

        <ul
          class="flex flex-wrap items-start justify-start gap-1 p-2 bg-opacity-50 border rounded-md bg-accent border-misc-dark min-h-16">
          <ItemDisplay v-for="[name, item] in processor.preserveJars" :key="name" :img-src="item.img.src"
            :img-alt="item.img.alt" :star="item.isStar" :count="item.count" :base-gold-value="item.baseGoldValue"
            tooltip="Preserve Jars to use" />
        </ul>
      </div>
    </section>

  </section>
</template>

================================================
FILE: components/house-planner/BuildingButton.vue
================================================

<script setup lang="ts">
defineProps({
  label: String,
  src: String,
  isActive: Boolean,
})
</script>

<template>
  <button
    :aria-label="label"
    class="relative justify-start text-sm isolate btn flex-nowrap bg-palia-blue"
    :class="(isActive) ? 'btn-active' : ''"
  >
    <img
      width="128" height="128" :src="src" class="h-full object-contain w-fit"
      :srcset="undefined" :alt="label" format="webp"
    />
    <p class="font-normal normal-case">
      {{ label }}
    </p>
  </button>
</template>

================================================
FILE: components/house-planner/HouseGrid.vue
================================================

<script setup lang="ts">
import type Konva from 'konva'
import { useHousePlanConfig } from '@/stores/useHousePlanConfig'

const stageConfig = useHousePlanConfig()

const STAGE_WIDTH = stageConfig.width
const STAGE_HEIGHT = stageConfig.height

const configBackground = ref({
  x: 0,
  y: 0,
  width: stageConfig.width,
  height: stageConfig.height,
  fill: '#419257',
})

const grid = ref<Konva.Layer | null>(null)

onMounted(() => {
  // if (grid.value)
  //   grid.value.getNode().cache()
})
</script>

<template>
  <v-layer ref="grid" :config="{
    listening: false,
    Cache: true,
  }">
    <v-rect :config="configBackground" />
    <template v-for="plot in 9" :key="plot">
      <v-line :config="{
        points: [plot * (STAGE_WIDTH / 9), 0, plot * (STAGE_WIDTH / 9), STAGE_HEIGHT],
        stroke: 'white',
        strokeWidth: 1,
        opacity: 0.4,
        perfectDrawEnabled: false,
        shadowForStrokeEnabled: false,
      }" />
    </template>
    <template v-for="plot in 5" :key="plot">
      <v-line :config="{
        points: [0, plot * (STAGE_HEIGHT / 5), STAGE_WIDTH, plot * (STAGE_HEIGHT / 5)],
        stroke: 'white',
        strokeWidth: 1,
        opacity: 0.4,
        perfectDrawEnabled: false,
        shadowForStrokeEnabled: false,
      }" />
    </template>

    <template v-for="plot in 9" :key="plot">
      <template v-for="plotTile in 13" :key="plotTile">
        <v-line :config="{
          points: [plotTile * ((STAGE_WIDTH / 9) / 13) + ((plot - 1) * (STAGE_WIDTH / 9)), 0, plotTile * ((STAGE_WIDTH / 9) / 13) + ((plot - 1) * (STAGE_WIDTH / 9)), STAGE_HEIGHT],
          stroke: 'white',
          strokeWidth: (plotTile === 7) ? 0.3 : 0.1,
          opacity: 0.3,
          perfectDrawEnabled: false,
          shadowForStrokeEnabled: false,
        }" />
      </template>
    </template>

    <template v-for="plot in 5" :key="plot">
      <template v-for="plotTile in 13" :key="plotTile">
        <v-line :config="{
          points: [0, plotTile * ((STAGE_HEIGHT / 5) / 13) + ((plot - 1) * (STAGE_HEIGHT / 5)), STAGE_WIDTH, plotTile * ((STAGE_HEIGHT / 5) / 13) + ((plot - 1) * (STAGE_HEIGHT / 5))],
          stroke: 'white',
          strokeWidth: (plotTile === 7) ? 0.3 : 0.1,
          opacity: 0.3,
          perfectDrawEnabled: false,
          shadowForStrokeEnabled: false,
        }" />
      </template>
    </template>

  </v-layer>
</template>

================================================
FILE: components/house-planner/HousePlanner.vue
================================================

<script setup lang="ts">
import Konva from 'konva'
import { BuildingType } from 'assets/scripts/house-planner/enums/buildingType'
import HouseGrid from './HouseGrid.vue'
import BuildingButton from './BuildingButton.vue'
import type { Building } from '@/assets/scripts/house-planner/classes/building'
import type { Direction } from '@/assets/scripts/house-planner/imports'
import { BayWindow, Fireplace, Hallway, HarvestHouse, KilimaCourtyard, KilimaDoor, KilimaPorch, LargeHouse, MediumHouse, NullHouse, SmallHouse } from '@/assets/scripts/house-planner/imports'

import { useHousePlanConfig } from '@/stores/useHousePlanConfig'

const houseConfig = useHousePlanConfig()
const harvestHouse = ref(new HarvestHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER }))

function snapToCellSize(num: number) {
  return Math.round(num / houseConfig.CELL_SIZE) * houseConfig.CELL_SIZE
}

const stage = ref<Konva.Stage | null>(null)
const configKonva = ref({
  width: houseConfig.width,
  height: houseConfig.height,
  listening: true,
})

const text = ref({
  x: 10,
  y: 10,
  text: 'Simple Text',
  fontSize: 16,
  fontFamily: 'Mono',
  fill: 'white',
})

const buildingsLayer = ref<Konva.Layer | null>(null)

const buildings = ref<Record<string, Building>>(
  {
    [harvestHouse.value.id]: (harvestHouse.value as HarvestHouse),
  },
)

const harvestHouses = computed(() => {
  return Object.values(buildings.value).filter(building => building.type === BuildingType.HarvestHouse) as HarvestHouse[]
})

const countedBuildings = computed(() => {
  return Object.values(buildings.value).filter(building => (building.countsTowardsLimit && building.isPlaced)).length
})

const totalPrice = computed(() => {
  const buildingTypes: Record<BuildingType | string, {
    count: number
    price: number
  }> = {
    [BuildingType.None]: {
      count: 0,
      price: 0,
    },
  }

  Object.values(buildings.value).forEach((building) => {
    if (!building.isPlaced)
      return

    if (building.type in buildingTypes) {
      buildingTypes[building.type].count += 1
      buildingTypes[building.type].price = building.getPrice(buildingTypes[building.type].count)
    }
    else {
      buildingTypes[building.type] = {
        count: 1,
        price: building.getPrice(1),
      }
    }
  })

  return Object.values(buildingTypes).reduce((acc, curr) => {
    return acc + curr.price
  }, 0)
})

const totalMaterials = computed(() => {
  let sapwoodPlanks = 0
  let stoneBricks = 0
  let glassPanes = 0

  Object.values(buildings.value).forEach((building) => {
    if (!building.isPlaced)
      return

    sapwoodPlanks += building.materials.sapwoodPlanks || 0
    stoneBricks += building.materials.stoneBricks || 0
    glassPanes += building.materials.glassPanes || 0
  })

  return {
    sapwoodPlanks,
    stoneBricks,
    glassPanes,
  }
})

const activeBuilding = ref<Building | null>(harvestHouse.value as HarvestHouse)
const isEditingBuilding = ref(false)

const parentToSnap = ref<Building | null>(null)
const sideToSnap = ref<Direction | null>(null)

const useBuildingLimits = ref(true)
const showRoofCollisions = ref(true)
const showLabels = ref(false)

function moveActiveBuilding(x: number, y: number) {
  const snappedX = snapToCellSize(x)
  const snappedY = snapToCellSize(y)
  const building = activeBuilding.value

  if (building)
    building.updateCoords({ x: snappedX, y: snappedY })
}

function showBuildingColliding() {
  if (activeBuilding.value === null)
    return

  activeBuilding.value.opacity = 0.5
  activeBuilding.value.childrenIds.forEach((childId) => {
    const child = buildings.value[childId]
    if (child)
      child.opacity = 0.5
  })
}

function clearBuildingColliding() {
  if (activeBuilding.value === null)
    return

  activeBuilding.value.opacity = 1
  activeBuilding.value.childrenIds.forEach((childId) => {
    const child = buildings.value[childId]
    if (child)
      child.opacity = 1
  })
}

function clearSnapData() {
  parentToSnap.value = null
  sideToSnap.value = null
}

function onMouseMove() {
  const stageObj = stage.value?.getStage() as Konva.Stage

  if (!stageObj)
    return

  const mousePos = stageObj.getRelativePointerPosition()
  if (!mousePos)
    return

  text.value.text = `x: ${mousePos.x}, y: ${mousePos.y}`
  moveActiveBuilding(mousePos.x, mousePos.y)

  if (activeBuilding.value === null)
    return

  let hasCollision: boolean | Building = false

  const excludeIds = [...new Set([...activeBuilding.value.childrenIds, activeBuilding.value.id])]
  hasCollision = checkForCollisions(activeBuilding.value as Building, excludeIds)

  activeBuilding.value.childrenIds.forEach((childId) => {
    const child = buildings.value[childId]
    if (child) {
      const isColliding = checkForCollisions(child, [...excludeIds])
      if (isColliding)
        hasCollision = isColliding
    }
  })

  // Handle snapping to other buildings
  if (hasCollision
    && activeBuilding.value.needsParent
    && hasCollision.id !== activeBuilding.value.id // Prevents snapping to itself
  ) {
    const collidingBuilding = hasCollision as Building
    const snappedX = snapToCellSize(mousePos.x)
    const snappedY = snapToCellSize(mousePos.y)
    const snapData = activeBuilding.value.trySnapToBuilding({
      x: snappedX,
      y: snappedY,
    }, collidingBuilding)

    const topLevelBuilding = collidingBuilding.topLevelBuilding
    const hasSpace = (!useBuildingLimits.value
      || (topLevelBuilding.countableBuildings < houseConfig.MAX_CLUSTER_BUILDINGS && countedBuildings.value < houseConfig.MAX_BUILDINGS)
      || !activeBuilding.value.countsTowardsLimit)

    if (snapData.snapped && hasSpace) {
      sideToSnap.value = snapData.side
      parentToSnap.value = collidingBuilding
      let hasOtherCollisions = checkForCollisions(activeBuilding.value as Building, [...excludeIds, collidingBuilding.id, ...collidingBuilding.directChildrenIds.filter((id) => {
        const building = buildings.value[id]
        if (building && building.type === BuildingType.KilimaCourtyard
          && parent.id !== building.id
        )
          return false
        return true
      })])

      if (activeBuilding.value.childrenIds) {
        activeBuilding.value.childrenIds.forEach((childId) => {
          const child = buildings.value[childId]
          if (child) {
            const isColliding = checkForCollisions(child, [...excludeIds, collidingBuilding.id, ...collidingBuilding.directChildrenIds])
            if (isColliding)
              hasOtherCollisions = isColliding
          }
        })
      }

      if (hasOtherCollisions)
        showBuildingColliding()
      else
        clearBuildingColliding()
    }
    else {
      clearSnapData()
      showBuildingColliding()
    }
  }
  else if (hasCollision
    || (countedBuildings.value >= houseConfig.MAX_BUILDINGS && useBuildingLimits.value)) {
    showBuildingColliding()
  }
  else {
    clearSnapData()
    clearBuildingColliding()
  }
}

type DebouncedFunction<T extends (...args: any[]) => void> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => void

function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  immediate = false,
): DebouncedFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this

    const later = function () {
      timeout = null
      if (!immediate)
        func.apply(context, args)
    }
    const callNow = immediate && !timeout

    clearTimeout(timeout as ReturnType<typeof setTimeout>)
    timeout = setTimeout(later, wait)

    if (callNow)
      func.apply(context, args)
  }
}

function tryPlaceBuilding() {
  if (activeBuilding.value === null)
    return

  if (!activeBuilding.value.needsParent) {
    if (!useBuildingLimits.value
      || (countedBuildings.value < houseConfig.MAX_BUILDINGS)
      || !activeBuilding.value.countsTowardsLimit)
      placeBuilding()
  }
  else if (parentToSnap.value !== null && sideToSnap.value !== null) {
    const parent = buildings.value[parentToSnap.value.id]
    const side = sideToSnap.value
    const building = activeBuilding.value

    const excludeIds = [...building.childrenIds, parent.id,
    ...parent.directChildrenIds.filter((id) => {
      const building = buildings.value[id]
      if (building && building.type === BuildingType.KilimaCourtyard
        && parent.id !== building.id
      )
        return false
      return true
    }),
    ...building.directChildrenIds]

    const hasOtherCollisions = checkForCollisions(building as Building, excludeIds)

    if (hasOtherCollisions)
      return

    const topLevelBuilding = parent.topLevelBuilding

    if (
      !useBuildingLimits.value
      || (topLevelBuilding.countableBuildings < houseConfig.MAX_CLUSTER_BUILDINGS && countedBuildings.value < houseConfig.MAX_BUILDINGS)
      || !building.countsTowardsLimit) {
      if (placeBuilding(excludeIds))
        parent.addChild(building as Building, side)
    }
  }
}

watch((stage), () => {
  if (typeof stage === 'object') {
    const stageObj = stage.value?.getStage() as Konva.Stage

    stageObj.on('mousemove', () => {
      debounce(onMouseMove, 25)()
    })

    stageObj.on('contextmenu', (e) => {
      e.evt.preventDefault()
    })

    stageObj.on('click', (e) => {
      if (activeBuilding.value === null)
        return

      if (e.evt.button === 2) {
        setActiveBuilding(new NullHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER }))
        return
      }

      if (activeBuilding.value.type === BuildingType.None) {
        const mousePos = stageObj.getRelativePointerPosition()
        const snappedX = snapToCellSize(mousePos?.x as number)
        const snappedY = snapToCellSize(mousePos?.y as number)

        for (const building of Object.values(buildings.value)) {
          if (building.isPlaced === false)
            return

          const isInside = building.isPointInBuilding({
            x: snappedX,
            y: snappedY,
          })

          if (isInside) {
            setActiveBuilding(building)
            building.isPlaced = false
            building.childrenIds.forEach((childId) => {
              const child = buildings.value[childId]
              if (child)
                child.isPlaced = false
            })
            building.removeParent()
            isEditingBuilding.value = true
          }
        }
      }

      tryPlaceBuilding()
    })

    window.addEventListener('keydown', (e) => {
      if (activeBuilding.value === null)
        return
      const building = findBuildingById(activeBuilding.value.id)
      // convert above to switch statement
      switch (e.code) {
        case 'KeyQ':
          building.rotateBuilding(-90)
          break
        case 'KeyE':
          building.rotateBuilding(90)
          break
        default:
          break
      }

      onMouseMove()
    })
  }
})

function placeBuilding(excludeIds: string[] = []): boolean {
  const building = (activeBuilding.value as Building)
  if (!building)
    return false

  const excludeList = [...new Set([...building.childrenIds, ...excludeIds, building.id])]

  let hasCollision = checkForCollisions(building, [...excludeList])
  building.childrenIds.forEach((childId) => {
    const child = buildings.value[childId]
    if (child) {
      const isColliding = checkForCollisions(child, [...excludeList, building.id, child.id])
      if (isColliding)
        hasCollision = isColliding
    }
  })

  if (hasCollision)
    return false

  buildings.value[building.id] = building
  building.isPlaced = true

  buildings.value[building.id] = building
  building.childrenIds.forEach((childId) => {
    const child = buildings.value[childId]
    if (child)
      child.isPlaced = true
  })

  if (isEditingBuilding.value) {
    isEditingBuilding.value = false
    setActiveBuilding(new NullHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER }))
  }
  else {
    setActiveBuilding(building.copy)
  }

  return true
}

function checkForCollisions(buildingToPlace: Building, excludeIds: string[] = []): Building | false {
  if (buildingToPlace.type === BuildingType.None)
    return false

  for (const building of Object.values(buildings.value)) {
    if (building.type === BuildingType.None)
      continue
    if (excludeIds.includes(building.id))
      continue
    const currBuilding = building
    if (currBuilding.id === buildingToPlace.id)
      continue

    const isColliding = buildingToPlace.checkCollision(currBuilding, [...buildingToPlace.childrenIds, ...excludeIds])

    if (isColliding)
      return currBuilding
  }

  if (buildingToPlace.isOutsideGrid(configKonva.value.width, configKonva.value.height))
    return buildingToPlace

  return false
}

function findBuildingById(id: string) {
  return buildings.value[id]
}

function setActiveBuilding(building: Building) {
  clearUnplacedBuildings()
  const newBuilding = building
  activeBuilding.value = newBuilding as Building
  buildings.value[newBuilding.id] = newBuilding as Building

  activeBuilding.value.removeParent()
}

function clearUnplacedBuildings() {
  for (const buildingId in buildings.value) {
    const currBuilding = buildings.value[buildingId]
    if (currBuilding.isPlaced === false)
      delete buildings.value[buildingId]
  }
}

function createNewBuilding(type: BuildingType) {
  switch (type) {
    case BuildingType.HarvestHouse:
      return new HarvestHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.Hallway:
      return new Hallway({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.LargeHouse:
      return new LargeHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.MediumHouse:
      return new MediumHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.SmallHouse:
      return new SmallHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.Fireplace:
      return new Fireplace({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.None:
      return new NullHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.KilimaPorch:
      return new KilimaPorch({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.KilimaDoor:
      return new KilimaDoor({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.BayWindow:
      return new BayWindow({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    case BuildingType.KilimaCourtyard:
      return new KilimaCourtyard({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
    default:
      return new NullHouse({ cellSize: houseConfig.CELL_SIZE, sizeMultiplier: houseConfig.SIZE_MULTIPLIER })
  }
}

const stageContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  Konva.pixelRatio = 1
  window.addEventListener('resize', fitStageIntoParentContainer)

  fitStageIntoParentContainer()
})

function fitStageIntoParentContainer() {
  const container = stageContainer.value as HTMLElement
  const stageObj = (stage.value?.getStage() as Konva.Stage)
  // now we need to fit stage into parent container
  const containerWidth = container.offsetWidth

  // but we also make the full scene visible
  // so we need to scale all objects on canvas
  const scale = containerWidth / houseConfig.width

  stageObj.width(houseConfig.width * scale)
  stageObj.height(houseConfig.height * scale)
  stageObj.scale({ x: scale, y: scale })
}
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-1 justify-evenly">
    <div class="p-2 rounded-md bg-palia-dark-blue">
      <div
        class="flex lg:grid h-full gap-2 max-h-[480px] pr-1 overflow-x-scroll lg:overflow-y-scroll lg:overflow-x-none scrollbar-primary rounded-md border-palia-dark-blue">
        <button aria-label="clear" class="relative text-sm isolate btn bg-palia-blue"
          :class="(activeBuilding && activeBuilding.type) === BuildingType.None ? 'btn-active' : ''"
          @click="setActiveBuilding(createNewBuilding(BuildingType.None))">
          <font-awesome-icon :icon="['fas', 'hand']" class="text-xl" />
          <p class="font-normal normal-case">
            Cursor
          </p>
        </button>
        <BuildingButton src="/buildings/icons/harvest-house.webp" label="Harvest House"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.HarvestHouse"
          @click="setActiveBuilding(createNewBuilding(BuildingType.HarvestHouse))" />
        <BuildingButton src="/buildings/icons/large-room.webp" label="Large Room"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.LargeHouse"
          @click="setActiveBuilding(createNewBuilding(BuildingType.LargeHouse))" />
        <BuildingButton src="/buildings/icons/medium-room.webp" label="Medium Room"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.MediumHouse"
          @click="setActiveBuilding(createNewBuilding(BuildingType.MediumHouse))" />
        <BuildingButton src="/buildings/icons/small-room.webp" label="Small Room"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.SmallHouse"
          @click="setActiveBuilding(createNewBuilding(BuildingType.SmallHouse))" />
        <BuildingButton src="/buildings/icons/hallway.webp" label="Hallway"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.Hallway"
          @click="setActiveBuilding(createNewBuilding(BuildingType.Hallway))" />
        <BuildingButton src="/buildings/icons/fireplace.webp" label="Fireplace"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.Fireplace"
          @click="setActiveBuilding(createNewBuilding(BuildingType.Fireplace))" />
        <BuildingButton src="/buildings/icons/kilima-porch.webp" label="Kilima Porch"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.KilimaPorch"
          @click="setActiveBuilding(createNewBuilding(BuildingType.KilimaPorch))" />
        <BuildingButton src="/buildings/icons/kilima-door.webp" label="Kilima Door"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.KilimaDoor"
          @click="setActiveBuilding(createNewBuilding(BuildingType.KilimaDoor))" />
        <BuildingButton src="/buildings/icons/bay-window.webp" label="Bay Window"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.BayWindow"
          @click="setActiveBuilding(createNewBuilding(BuildingType.BayWindow))" />
        <BuildingButton src="/buildings/icons/kilima-courtyard.webp" label="Kilima Courtyard"
          :is-active="(activeBuilding && activeBuilding.type) === BuildingType.KilimaCourtyard"
          @click="setActiveBuilding(createNewBuilding(BuildingType.KilimaCourtyard))" />
      </div>
    </div>
    <section ref="stageContainer"
      class="max-w-full relative isolate overflow-hidden aspect-[877.5/487.5] h-full w-full">
      <DevOnly>
        <p class="absolute left-0 z-50 m-4 text-xs">
          {{ text.text }}
        </p>
      </DevOnly>
      <p class="absolute right-0 z-30 p-2 px-4 m-4 bg-opacity-50 rounded-full bg-palia-blue text-accent">
        {{ countedBuildings }} / 30
      </p>
      <v-stage ref="stage" class="relative isolate" :config="configKonva">
        <HouseGrid />
        <v-layer :config="{
          listening: false,
        }">
          <template v-for="building in buildings" :key="building.id">
            <template v-if="showRoofCollisions && (building.type !== BuildingType.None)">
              <template v-for="collisionBox in building.collisionBoxes" :key="collisionBox.id">
                <v-rect v-if="!collisionBox.hide" :config="collisionBox.rect" />
              </template>
            </template>
          </template>
        </v-layer>
        <v-layer ref="buildingsLayer" :config="{
          listening: false,
        }">
          <template v-for="building in buildings" :key="building.id">
            <v-image :config="building.image" />
            <!-- <v-image :config="building.snapBox" /> -->
          </template>
          <template v-for="plotHarvestHouse in harvestHouses" :key="plotHarvestHouse.id">
            <!-- <v-text :config="plotHarvestHouse.buildingCountText" /> -->
            <v-label :config="plotHarvestHouse.buildingCountText">
              <v-tag :config="plotHarvestHouse.buildingCountText.getTag()" />
              <v-text :config="plotHarvestHouse.buildingCountText.getText()" />
            </v-label>
          </template>
          <template v-if="showLabels">
            <template v-for="building in buildings" :key="building.id">
              <template v-if="building.type !== BuildingType.None">
                <v-label :config="building.nameText">
                  <v-tag :config="building.nameText.getTag()" />
                  <v-text :config="building.nameText.getText()" />
                </v-label>
              </template>
            </template>
          </template>
        </v-layer>
      </v-stage>
    </section>

    <section class="flex flex-col gap-2">
      <div class="flex gap-2 p-4 px-8 rounded-md lg:flex-col bg-palia-dark-blue h-fit">
        <h2 class="text-xl font-bold text-center">
          Costs
        </h2>
        <ul class="flex gap-4 lg:grid">
          <li class="flex items-center gap-2 text-lg">
            <img width="16" height="16" src="/gold.webp" class="max-h-[1.5rem]" :srcset="undefined" alt="Gold"
              format="webp" />
            {{ totalPrice.toLocaleString() }}
          </li>
          <li v-if="totalMaterials.sapwoodPlanks > 0" class="flex items-center gap-2 text-lg">
            <img width="32" height="32" src="/items/sapwood-plank.png" class="max-h-[3rem] aspect-auto object-contain"
              :srcset="undefined" alt="Gold" format="webp" />
            {{ totalMaterials.sapwoodPlanks.toLocaleString() }}
          </li>
          <li v-if="totalMaterials.stoneBricks > 0" class="flex items-center gap-2 text-lg">
            <img width="32" height="32" src="/items/stone-brick.png" class="max-h-[3rem] aspect-auto object-contain"
              :srcset="undefined" alt="Gold" format="webp" />
            {{ totalMaterials.stoneBricks.toLocaleString() }}
          </li>
          <li v-if="totalMaterials.glassPanes > 0" class="flex items-center gap-2 text-lg">
            <img width="32" height="32" src="/items/glass-pane.webp" class="max-h-[3rem] aspect-auto object-contain"
              :srcset="undefined" alt="Gold" format="webp" />
            {{ totalMaterials.glassPanes.toLocaleString() }}
          </li>
        </ul>
      </div>
      <div class="flex gap-2 p-4 px-8 text-xs rounded-md bg-palia-dark-blue h-fit">
        <ul class="flex gap-4 lg:grid">
          <li>
            <input v-model="useBuildingLimits" type="checkbox" class="rounded-lg toggle">
            <p>Use Build Limits</p>
          </li>
          <li>
            <input v-model="showRoofCollisions" type="checkbox" class="rounded-lg toggle">
            <p>Show Roof</p>
          </li>
          <li>
            <input v-model="showLabels" type="checkbox" class="rounded-lg toggle">
            <p>Show Labels</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- <DevOnly>
      <div class="p-4 mb-4 font-mono rounded-md bg-neutral">
        <p class="text-lg font-bold uppercase">
          building ids
        </p>
        <ul>
          <li v-for="building in buildings" :key="building.id" class="grid">
            <p>
              {{ building.id }} - {{ building.type }}
            </p>
            <p v-if="building.type === BuildingType.HarvestHouse">
              {{ building.childrenIds }}
            </p>
          </li>
        </ul>
      </div>
    </DevOnly> -->

  </div>
</template>

================================================
FILE: components/house-planner/HousingHeader.vue
================================================
<template>

  <div>
    <header class="z-50 drawer drawer-end">
      <input id="menu" type="checkbox" class="drawer-toggle">
      <div class="flex flex-col drawer-content">
        <div class="w-full py-3 navbar sm:px-12 lg:px-22">
          <div class="flex-1 mx-2">
            <NuxtLink to="/" class="flex items-center gap-2">
              <img
                format="webp" src="/housing-logo.webp"
                width="48px" height="48px" alt="Palia Garden Planner Logo"
                class="max-w-[3rem]"
              />
              <div class="flex flex-col gap-0 leading-tight">
                <h1 class="text-xl font-bold leading-tight text-left lg:text-2xl">
                  Palia Housing Planner
                </h1>
                <p class="text-xs leading-tight text-left">
                  <font-awesome-icon :icon="['fas', 'heart']" class="" />
                  A player-made tool for planning your house
                </p>
              </div>
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="flex-none hidden lg:block">
              <ul class="items-center gap-1 text-base menu menu-horizontal">
                <li>
                  <NuxtLink to="/">
                    Garden Planner
                  </NuxtLink>
                </li>
                <!-- <li>
                  <NuxtLink to="/roadmap">
                    Roadmap
                  </NuxtLink>
                </li> -->
                <li>
                  <NuxtLink to="/changelogs">
                    Changelogs
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/credits">
                    Credits
                  </NuxtLink>
                </li>
                <!-- <li class="dropdown dropdown-hover dropdown-bottom dropdown-end">
                  <label tabindex="0">
                    <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xl" />
                    External Tools
                  </label>
                  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li class="text-sm">
                      <NuxtLink to="https://palia.anniebananie.io" class="flex flex-wrap items-center" rel="noopener">
                        <font-awesome-icon :icon="['fas', 'gift']" class="text-xl" />
                        Gift Tracker
                        <span class="text-xs">(anniebananie)</span>
                      </NuxtLink>
                    </li>
                    <li class="text-sm">
                      <NuxtLink to="https://palia.th.gl/" class="flex flex-wrap items-center" rel="noopener">
                        <font-awesome-icon :icon="['fas', 'map']" class="text-xl" />
                        Interactive Map
                        <span class="text-xs">(The Hidden Gaming Lair)</span>
                      </NuxtLink>
                    </li>
                    <li class="text-sm">
                      <NuxtLink to="https://paliapedia.com/" class="flex" rel="noopener">
                        <nuxt-img
                          src="/externals/paliapedia.svg" width="18px" height="18px"
                          class="max-w-[1.5rem] inline-block text-lg"
                          alt="Paliapedia Logo"
                        />
                        Paliapedia
                      </NuxtLink>
                    </li>
                  </ul>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="flex-none lg:hidden">
            <label
              for="menu" class="btn btn-square btn-ghost"
              aria-label="menu toggle"
            >
              <font-awesome-icon :icon="['fas', 'bars']" class="text-xl" />
            </label>
          </div>
        </div>
      </div>
      <div class="drawer-side">
        <label
          for="menu" class="drawer-overlay"
          aria-label="close menu"
        />
        <ul class="relative h-full gap-2 p-4 menu w-80 bg-base-200">
          <li class="flex items-end w-full lg:hidden">
            <label for="menu">
              <font-awesome-icon :icon="['fas', 'x']" class="text-xl" />
              <input id="menu" type="checkbox" class="drawer-toggle">
            </label>
          </li>
          <li>
            <NuxtLink to="/">
              Garden Planner
            </NuxtLink>
          </li>
          <!-- <li class="text-lg font-bold normal-case">
            <NuxtLink to="/roadmap">
              Roadmap
            </NuxtLink>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink to="/changelogs">
              Changelogs
            </NuxtLink>
          </li>
          <li class="text-lg font-bold normal-case">
            <NuxtLink to="/credits">
              Credits
            </NuxtLink>
          </li>
          <li>
            <div class="flex flex-col items-start text-lg font-bold">
              <p class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xl" />
                External Tools
              </p>
              <ul>
                <li class="text-sm">
                  <NuxtLink to="https://palia.anniebananie.io" class="flex flex-wrap items-center" rel="noopener">
                    <font-awesome-icon :icon="['fas', 'gift']" class="text-xl" />
                    Gift Tracker
                    <span class="text-xs">(anniebananie)</span>
                  </NuxtLink>
                </li>
                <li class="text-sm">
                  <NuxtLink to="https://palia.th.gl/" class="flex flex-wrap items-center" rel="noopener">
                    <font-awesome-icon :icon="['fas', 'map']" class="text-xl" />
                    Interactive Map
                    <span class="text-xs">(The Hidden Gaming Lair)</span>
                  </NuxtLink>
                </li>
                <li class="text-sm">
                  <NuxtLink to="https://paliapedia.com/" class="flex" rel="noopener">
                    <nuxt-img
                      src="/externals/paliapedia.svg" width="18px" height="18px"
                      class="max-w-[1.5rem] inline-block text-lg"
                      alt="Paliapedia Logo"
                    />
                    Paliapedia
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li> -->
        </ul>
      </div>
    </header>
    <AppDivider class="mx-2 sm:mx-12 lg:mx-22" />
  </div>
</template>

================================================
FILE: layouts/compact.vue
================================================

<script setup lang="ts">
useHead({
  title: 'Palia Garden Planner - Compact View',
})
</script>

<template>
  <div>
    <div class="-z-10 bg-primary fixed w-full h-full" />
    <div class="flex flex-col">
      <NuxtPage />
    </div>
  </div>
</template>

================================================
FILE: layouts/default.vue
================================================

<script setup lang="ts">
useHead({
  title: 'Palia Garden Planner',
})
</script>

<template>
  <div>
    <div class="-z-10 bg-gradient fixed w-full h-full" />
    <div class="flex flex-col max-w-[1440px] mx-auto">
      <PGPHeader />
      <NuxtPage />
      <PGPFooter />
    </div>
  </div>
</template>

================================================
FILE: layouts/housing.vue
================================================

<script setup lang="ts">
import HousingHeader from '~/components/house-planner/HousingHeader.vue'

useHead({
  title: 'Palia House Planner',
  link: [
    {
      rel: 'icon',
      href: '/housing-logo.webp',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Alpha release of a Palia Housing Planner, from the creator of the Garden Planner',
    },
    {
      name: 'theme-color',
      content: '#B2BEFE',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: 'Palia Housing Planner',
    },
    {
      name: 'twitter:description',
      content: 'Alpha release of a Palia Housing Planner, from the creator of the Garden Planner',
    },
    {
      name: 'twitter:image',
      content: 'https://palia-garden-planner.vercel.app/housing-logo.webp',
    },
    {
      name: 'twitter:image:alt',
      content: 'Palia Housing Planner Logo',
    },
    {
      name: 'og:title',
      content: 'Palia Housing Planner',
    },
    {
      name: 'og:description',
      content: 'Alpha release of a Palia Housing Planner, from the creator of the Garden Planner',
    },
    {
      name: 'og:image',
      content: 'https://palia-garden-planner.vercel.app/housing-logo.webp',
    },
    {
      name: 'og:image:alt',
      content: 'Palia Housing Planner Logo',
    },
    {
      name: 'og:url',
      content: 'https://palia-garden-planner.vercel.app/housing',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:locale',
      content: 'en_UK',
    },
  ],
})
</script>

<template>
  <div>
    <div class="-z-10 bg-gradient fixed w-full h-full" />
    <div class="flex flex-col max-w-[1440px] mx-auto">
      <HousingHeader />
      <NuxtPage />
      <PGPFooter />
    </div>
  </div>
</template>

================================================
FILE: pages/changelogs.vue
================================================

<script setup lang="ts">
useHead({
  title: 'Changelogs | Palia Garden Planner',
  meta: [
    {
      name: 'description',
      content: 'A log of changes made to the Palia Garden Planner',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://palia-garden-planner.vercel.app/changelogs',
    },
  ],
})
</script>

<template>
  <main v-once class="flex flex-col gap-2 px-2 py-2 text-justify sm:px-4 lg:px-14">
    <NuxtLink to="/" class="flex items-center gap-2 btn w-fit btn-sm btn-ghost">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="" />
      <p class="">
        Return
      </p>
    </NuxtLink>
    <section class="flex flex-col gap-2 pb-2">
      <div class="py-4">
        <h1 class="text-2xl font-bold md:text-3xl">
          Site Changelogs
        </h1>
      </div>

      <div class="grid gap-2">
        <ChangelogItem checked>
          <template #title>
            <span class="font-bold">
              June 17, 2025 — Re-added Growth Tick Average for Processing</span>
          </template>
          <template #summary>
            <li>
              <span class="italic">New Processor Setting — </span> Planner can once again calculate gold average by
              total growth ticks even if crops are processed
            </li>
            <li>
              <span class="italic">Setting Tab Rename — </span> 'Harvester' setting tab now called 'General' tab to
              account for no longer being
              purely harvester-related options
            </li>
            <li>
              <span class="italic">Paliapedia Bug Fix — </span> Fixed bug where PaliaPedia's garden generator links were not being parsed properly
            </li>
          </template>
          <template #default>
            <p class="indent-6">
              Since the Garden Planner still does not factor in player's genuine playtime, calculating gold average via
              crafter time
              can sometimes feel like a side-grade or worse than the old method of averaging via gold tick even after
              processing. Other players may have also preferred this method for their calculations in general.
            </p>
            <p class="indent-6">
              To address this, I added a setting to utilise the old method,
              with the setting being saveable+shareable and displaying it differently to help discussion.
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            <span class="font-bold">
              May 22, 2025 — Fixes</span>
          </template>
          <template #summary>
            <li>
              <span class="italic">Processor Fix — </span> Fixed a bug where the processor was internally behaving as if
              the harvest won't
              finish processing by next harvest when it was, and vice versa.
            </li>
          </template>
          <template #default>
            <h4 class="font-bold text-xl">Harvest Fix</h4>
            <p class="indent-6">
              Highly embarassing bug.. A '<' to compare the timings of a process time and the process time was reversed.
                The UI's check was also inversed, meaning it would correctly display that a harvest won't be processed
                in time because the warning would be displayed if the processor would process in time. Another thanks to
                Ren for pointing this out! </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            <span class="font-bold">
              May 20, 2025 — Fixes</span>
          </template>
          <template #summary>
            <li>
              <span class="italic">Harvest Fix —</span> Star Chance not being properly factored in when using unstarred
              seeds/using seeds under-level 25
            </li>
            <li>
              <span class="italic">RE-ADDED*: Harvest By Day —</span> Re-added harvests-by-day, *but no produce
              conversion or gold output
            </li>
            <li>
              <span class="italic">RE-ADDED: Export by Image —</span> Re-added export by image
            </li>
            <li>
              <span class="italic">0.4 Upgrade —</span> Batterfly Beans code from `Bb` to `Bt`
            </li>
            <li>
              <span class="italic">House Planner —</span> Should now be usable again
            </li>
          </template>
          <template #default>
            <h4 class="font-bold text-xl">Harvest Fix</h4>
            <p class="indent-6">
              Hello folks. A major oversight has been done where crops were being rounded too early when harvesting.
              This likely made layouts for under level 25 players and/or layouts using unstarred seeds to be lower than
              promised. Huge thanks to Ren for seeing this one!
            </p>
            <p class="indent-6">
              My sincere apologies though. This was a pretty substantial change in profits especially for lower-levelled
              players,
              so the inaccuracies here should've been noticed sooner. I'll continue tweaking the planner and staying
              alert to any more inaccuracies, but
              do keep in mind that the planner's output calcs may not reflect the player experience 1:1.
            </p>
            <div class="divider"></div>
            <h4 class="font-bold text-xl">Other Changes</h4>
            <p class="indent-6">
              The harvest-by-day has been re-implemented, though lacking produce conversions. This helps at least with
              those looking to see when harvests overlap, with a new option to see exactly the days when a crop is
              harvested (plus other crops with it).
              Those looking at when a produce is available would not benefit still, as I'm somewhat towards furthering
              the planner as a '24/7 player' simulation.
              Do let me know your use-cases
              for the day-by-day if you want a specific feature implemented.
            </p>
            <p class="indent-6">
              We've updated to code 0.4. The main reason for this was that the Batterfly Beans had a potential to be
              auto-modded in the official Palia Discord, which the planner was initially built for.
              I've ensured the cropCodes and the settings should update properly but please hastily report if a save
              code is not properly updated.
            </p>
            <p class="indent-6">
              Export by Image should now work again. Good chance it breaks again though cause of how fickle it is. It
              should, however, now support Firefox and Mac Safari (iOS still broken)
            </p>
            <p class="indent-6">
              Finally, I've done some styling fixes to House Planner to make it working again after the recent updates
              broke it. Its developement is still
              halted, but it is promised that it will at least be maintained.
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            <span class="font-bold">
              May 15, 2025 — 0.191 Parity</span>
          </template>
          <template #summary>
            <li>
              <span class="italic">Added New Crops —</span> New crops now fully implemented
            </li>
            <li>
              <span class="italic">Bug fixes —</span> Patched out a lot of issues that came out due to the new update
            </li>
            <li>
              <span class="italic">Mild Changes</span>
              <ul class="pl-3 list-disc list-inside text-sm">
                <li>Hovering over a crop/fert in the selector now highlights their presence in the layout</li>
                <li>Quickly added a crafter tab to double-check the planner's time calculations</li>
                <li>Minor UI tweaks & fixes to improve the planner experience</li>
              </ul>
            </li>
          </template>
          <template #default>
            <p>
              Planner now has full support of the new crops.
              Major thanks to DuhScape & Ren this round for finding their growth and produce values!
            </p>
            <p>
              With this, I'll soon be re-implementing the features I mentioned in the May 12 update.
              In addition, the new features will also be looked at for issues & improvements
              so feel free to share any thoughts you may have on it.
            </p>
            <p>
              Thanks everyone for the wait.
              Please share any inaccuracies you may have found within my planner so I may look into it,
              as well as any other issues and feedback you may way to send my way. Happy Gardening!
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            <span class="font-bold">
              May 12, 2025 — Save'n Time Update (Major)</span>
          </template>
          <template #summary>
            <li>
              <span class="italic">Crafter Timings —</span> Crafters now have time support
            </li>
            <li>
              <span class="italic">In-Browser Saving —</span> Planner codes can now be saved within the browser
            </li>
            <li>
              <span class="italic">Setting Codes —</span> Settings can now be included in save codes
            </li>
            <li>
              <span class="italic">Harvester & Processor Overhaul —</span> Overhauled how crops are harvested and
              processed for better efficiency
            </li>
            <li>
              <span class="italic">New UI —</span> Cause I'm trying to fit everything in
            </li>
            <li>
              <span class="italic">QoL Changes</span>
              <ul class="pl-3 list-disc list-inside text-sm">
                <li>UI Settings can now hide tile bonus icons & background for less clutter</li>
                <li>Improved widget for item selection</li>
                <li>(Mobile) New modal for crop & fert selection</li>
                <li>(Keyboard) Shift + [CropCode] now selects a crop</li>
                <li>Last Harvest Day now automatically finds a day where all crops are harvestable (LCM Day)</li>
                <li>You can now have a duplicate settings for when everything's a bit chaotic</li>
              </ul>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-warning" />
              <span class="italic pl-1 uppercase">To be re-added —</span> The following features have been temporarily
              removed and will be re-implemented:
              <ul class="pl-3 list-disc list-inside text-sm">
                <li>Harvests by Day (Will focus primarily on simulated harvests)</li>
                <li>Export as Image</li>
                <li>Your default settings being configurable</li>
                <li>Total/Average Gold being globally visible in settings</li>
              </ul>
            </li>
            <li>
              In addition, expect some fixes and improvements shortly after this update as I look for bugs, as
              well as including the new crops (should be quick if they have no new mechanics)
            </li>
          </template>
          <template #default>
            <p>
              Hi everyone, been awhile! Looks like the Elderwoods is here and so I must catch up!
              I shan't yap too much about where I've been, so I'll just move on to the changes at hand. Apologies for
              the wait
            </p>
            <div class="divider"></div>
            <h4 class="font-bold text-xl">New Crafter Timing Support & Saves</h4>
            <p class="indent-6">
              I've now added Crafter Time Support, and with it comes the ability to save and share setting
              configurations.
              This is the 2nd major milestone of the planner, with the next being a better support for off-set plots.
              This implementation took way longer than necessary to come up with. I was attempting to tinker with more
              ambitious scopes but had to ground myself to this one.
              Truth is I wanted a more experimental process, testing changes with a smaller set of players to test
              different solutions.
              However, after such a long time (sorry), I decided that this simple one should be good for a live test.
            </p>
            <p class="indent-6">
              Do see the Info tab in the Output Display to see some explanation on the processor!
              I belive the input will stay, with maybe an extra option or two, but I'll have to see if there's other
              internal implementations I can make to improve this.
            </p>
            <p class="indent-6">
              To help with the effort everyone'll go through messing with crafter configurations, I've also added the
              ability to add settings into the code.
              I've done my best to minimise its impact on the code length, so hopefully it won't be much of a hassle to
              share.
              I've also added browser-saving! So now you can quickly fetch and share them from within the website
            </p>
            <div class="divider"></div>
            <h4 class="font-bold text-xl">Harvester Improvements</h4>
            <p class="indent-6">
              While the processor was obviously going to be re-made, the harvester also got a massive change!
              The old method was <span class='italic'>incredibly</span> slow and inefficient, impeding the experience
              especially on long simulations.
              Thanks to the overhaul, simulating a large amount of days should now be faster, you can try simulating
              1.8k days of harvest now with a lot less lag!
              Unfortunately, this did mean I have to re-implement the day-by-day breakdown so stay tuned for that.
            </p>
            <p class="indent-6">
              This change also disentangled a lot of the messy code the planner initially had.
              While it's still not pristine, it's now both easier and more convenient for me to add new changes!
              I'm eyeing the ability to factor in fertiliser costs soon, as well as alternative ways to factor in
              replant costs.
              I'll be working on this after bug fixes, re-implementations, and new crops.
            </p>
            <div class="divider"></div>
            <h4 class="font-bold text-xl">QoL Changes</h4>
            <p class="indent-6">
              Outside of that, there should now be some new features to make things easier for your garden planning.
            </p>
            <p class="indent-6">
              Starting off, I've added a widget to sort crops by buffs.
              The truth is this is to condense the space of the crop buttons to handle new crops, but it also doubles as
              a filter!
              Furthermore, I've added some assistance to mobile users,
              you should now have a new button that lets you pick a crop without having to scroll al the way up.
              In addition, there's now a couple options in the new UI Settings modal to let you hide crop buff
              indicators.
              This should make things look a lot less cluttered, letting your eyes breathe a lil' easier!
            </p>
            <p class="indent-6">
              An LCM option got added to the harvest settings. One of many features that should've been here sooner tbh.
              This new default setting makes it so the last day has all your crops be ready for harvest, making it a
              nice way to round the simulation off.
              Speaking of, the output window as a whole is getting quite cluttered with these tabs, so I added the
              option to clone it!
              Feel free to leave the garden for a while while you mess with the configurations
            </p>
            <div class="divider"></div>
            <h4 class="font-bold text-xl">Closing Words</h4>
            <p class="indent-6">
              What a long post! Anyway, I'll be testing these changes as they come and will be polishing things up.
              In the meantime, feel free to report any issues, complaints, or suggestions you may have about the new
              changes! (.aisen on Discord)
            </p>
            <p>
              Thank you guys once again for your continued use of the planner. Happy planning and happy Elderwoods
              update!
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            October 18, 2024 — 2nd Internal Tweak
          </template>
          <template #summary>
            <li>
              Changed how images render to test performance improvements
            </li>
          </template>
          <template #default>
            <p class="indent-6">
              Hello! The last internal tweak proved to be beneficial in reducing host resource consumption without
              affecting user experience.
              As a result, another tweak is being implemented to optimise another aspect of the website.
            </p>
            <p class="indent-6">
              If you have been facing any issues since the update today or the previous one, please contact me on
              Discord below.
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            October 15, 2024 — Mild internal tweak
          </template>
          <template #summary>
            <li>
              Changed how images render to test performance improvements
            </li>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            May 28, 2024 — 0.180 Patch Parity
          </template>
          <template #summary>
            <li>
              <span class="italic">Apple & Blueberries Boost Change —</span> Apples and Blueberries now give Harvest
              Boost instead of Growth Boost
            </li>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            May 04, 2024 — Added Ko-fi Link
          </template>
          <template #summary>
            <li>
              <span class="italic">New Ko-Fi Link —</span> Added way to send tips
            </li>
          </template>
          <template #default>
            <p class="indent-6">
              Hi folks! The Garden Planner now has a Ko-fi link for those who wish to send tips.
              I've had a few requests for this, but I wanted to hold off till I had something more substantial to show
              for it.
            </p>
            <p class="indent-6">
              However, Garden Planner traffic has been increasing (woohoo!!). I'll soon no longer be able to host the
              server
              for free though, so I've decided to add the Ko-fi link now to help me cover the costs.
              Development continues when I can. I've got new plans for the crafters and how they'll fit in the planner
              that I hope
              will finally allow me to release them.
            </p>
            <p class="indent-6">
              Regardless, thank you guys so much for your continued support and use of the planner. I'm glad to see it's
              been useful to so many of you and I'm proud it's come to a point I have to consider server costs (though
              stressful).
              I intend on maintaining the planner for as long as I can, and I hope to continue to improve it.
            </p>
            <p>
              Have a great life everyone! Happy planning!
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            April 24, 2024 — Courtyard Patch and House Planner Halt
          </template>
          <template #summary>
            <li>
              <span class="italic">0.179 Parity —</span> Added the courtyard building
            </li>
            <li>
              <span class="italic">House Planner development now indefinitely halted —</span> Please see the
              <NuxtLink class="link" to="/house-planner">
                House Planner page
              </NuxtLink> for more information
            </li>
          </template>
          <template #default>
            <p>
              With the release of 0.179 comes the Courtyard building, a new housing add-on.
              Thank you to <span class="italic">CauldronMorgana</span> for confirming certain details about the
              Courtyard,
              as well as <span class="italic">TinyDragon</span> for the same reason as well as general housing
              information.
            </p>
            <p>
              As of this update, the House Planner development is indefinitely halted. I've evaluated that the prototype
              needs to be reworked from the ground up to better simulate the in-game housing system as well as support
              the upcoming features (such as the Structure Blocks and 2nd Floor).
            </p>
            <p>
              I've detailed the reasons for the halt on the bottom of the House Planner page.
              Overall, my prototype was just not feasible and I feel I do not have the time and resources to remake it
              in a way
              that fits my standards. For that, I've decided to halt development on the House Planner and simply
              maintain it for archival purposes.
            </p>
            <p>
              Garden Planner development still continues and I have no plans to halt it.
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            March 29, 2024 — Hallway Patch
          </template>
          <template #summary>
            <li>
              <span class="italic">0.178 Parity —</span> Made hallways not count towards the limit
            </li>
            <li class="ml-5">
              <span class="font-bold">NOTE:</span>
              This change was not in the patch notes, so please be aware that it may be a bug and may be reverted upon
              confirmation.
            </li>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            March 10, 2024 — New Star Chance Formula
          </template>
          <template #summary>
            <li>
              <span class="italic">New Level System —</span> Added new formula for calculating star chance
            </li>
            <li class="ml-5">
              Removed chance override options in favour of the new formula
            </li>
            <li>
              <span class="italic">Small UI Update —</span> Tweaked buttons to be more compact.
            </li>
          </template>
          <template #default>
            <p>
              New attempt at a level-based star-chance system, this time with a formula that can adapt to any level
              instead of just level 25.
              This change was originally intended to be part of the crafter update,
              but since that won't be out for a while (busy reasons, see Jan 30 update) I've decided to release that
              change now.
            </p>

            <p class="p-1 px-3 font-mono rounded-md bg-palia-blue">
              Formula:
              <code class="">0.25 + (0.25 * useStarSeeds) + (0.02 * level) + (0.5 * hasQualityBoost)</code>
            </p>
            <p class="text-sm">
              See Harvest Calculator Info > Assumptions for brief explanation
            </p>

            <p>
              This new formula is arbitrary and based off player observations, and is still not the actual in-game
              formula.
              Level 25+ players using star seeds shouldn't notice any difference from the old system provided the same
              settings are used. Pre-level 25 star-seed layouts should expect the same settings as a level 0.
            </p>
            <p>
              For players not using star seeds, the new system should hopefully provide a slightly more accurate
              representation of their star chance. Most notably, when you reach level 50, you should expect a 100%
              star chance with normal seeds. 100% is actually met earlier on at around level 38 as per the planner,
              whether that's accurate to in-game is debatable, but nevertheless should still be closer than the old
              formula.
            </p>
            <div class="divider" />
            <p>
              Minor UI tweaks in preparation of an internal UI update, as well as minor experimentation with making
              the planner more compact.
            </p>
            <p>
              UI changes are planned for the next major update (no ETA), with a specific focus to the harvest
              calculator.
              Many of my issues with the incoming updating has been the lack of space to fit everything in,
              so I'm making a smaller UI update to make the calculator more bearable to look at.
              In addition, I might look at better ways to display the crop/fertiliser buttons, as the increase of crops
              is going to make the buttons more cluttered.
            </p>
            <p>
              If you notice anything wrong, please report it to me on Discord <span class="font-bold">(.aisen)</span>
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            January 30, 2024 — New Crops, New Building
          </template>
          <template #summary>
            <li>
              <span class="italic">New Crops —</span> Added new crops from the 0.176 patch
            </li>
            <li class="ml-5">
              <span>HOTFIX: Bok choy star seed price was incorrectly valued at 30 gold instead of the right amount of 22
                (Credits: gazar)</span>
            </li>
            <li>
              <span class="italic">New Building —</span> Added the new bay window housing add-on
            </li>
            <li class="ml-5 font-bold">
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="text-warning" />
              <span>
                NOTE: Bay Windows on the front of the Harvest House are not yet supported, it'll require a system
                re-write.
              </span>
            </li>
          </template>
          <template #default>
            <p>
              Hello everyone! This was a bit of a quick addition.
              Huge thanks to <span class="italic font-bold">Aschefield</span> and <span class="italic font-bold">Adain
                (Paliapedia)</span> for providing information and assets on the new crops and by-products!
              Their help certainly sped up syncing the planner with the new patch.
            </p>
            <p>
              There may be a chance I missed some values, so if you notice any discrepancies please do report it to me
              on Discord <span class="font-bold">(.aisen)</span>.
              Those of you who are using the House Planner may note an issue with the Bay windows, I'll need to re-work
              how the planner handles housing add-ons to support it so it would definitely take awhile.
            </p>
            <p>
              Apologies once more for the slow updates, I've been busy :(
              Please note that anyone willing to make alternative websites or improve on this one is more than welcome
              to do so.
              I'm currently searching for a job, so I'm not sure how much time I'll have to work on this.
              Consider updates to be much slower from now on until the situation changes.
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            November 13, 2023 — Mild Bugfixes
          </template>
          <template #summary>
            <li>
              House Planner
            </li>
            <li>
              <span class="ml-5">Experimental Release</span> - Added a proof of concept house planner: <NuxtLink
                class="link" to="/house-planner">
                Link Here
              </NuxtLink> (Warning: Heavily early stage, not recommended for regular use)
            </li>
            <li class="ml-5">
              <span class="italic">Bugfix</span> - Prevented hallways from connecting at the sides
            </li>
            <li class="ml-5">
              <span class="italic">Adjustment</span> - Gave most buildings a vertical roof for collision checks
            </li>
            <li>
              <span class="italic">UI</span> - Slightly tweaked UI for smaller screens and wider gardens
            </li>
            <li>
              <span class="italic">Compact View (Experimental)</span> - Added experimental compact view to support a
              potential feature on another website that's not mine to announce :D
            </li>
            <li class="ml-5">
              See here: <NuxtLink class="link" to="/compact">
                Compact View
              </NuxtLink>
            </li>
            <li class="font-bold uppercase">
              Update regarding crafters below
            </li>
          </template>

          <template #default>
            <p>
              Heya folks, small update this time round with a small focus on features unrelated to the garden planner.
            </p>
            <p>
              I've worked on the layout for the planner a bit, hopefully to support larger gardens and smaller screens a
              little.
              I meant to add a fix to the screenshot feature but it did not pan out.
            </p>
            <div class="divider" />
            <h3 class="text-lg font-bold">
              Crafter Support
            </h3>
            <p>
              Crafters are under construction! Files for them exist somewhere in the background.
              they support having limited slots and can properly calculate time spent processing
              regardless of the different crops inserted into each one.
              Information with and without idle time is also available.
            </p>
            <p>
              Not much work left on the crafters themselves as they're almost functional.
              The big problem is how they'll be managed and displayed.
              I intend to support the ability to calculate for total processing time
              given a number of crafters.
              Every crafter <span class="italic">will</span> support having different crops placed into each one.
            </p>
            <p>
              I have been mind-blocked on both how to manage and configure the crafters in a way that can reflect
              multiple
              playstyles.
              Not to mention that on release it'll likely need configuration saving and sharing, which is a whole other
              can of worms.
              Overall though, work is progressing on them, I hope to release them in a state that's satisfying.
            </p>
            <p>
              However, to make sure I implement them right, I plan on releasing them in an experimental page first.
              This was where the house planner came in, as a way to gauge how users react to experimental features.
            </p>
            <div class="divider" />
            <h3 class="text-lg font-bold">
              House Planner
            </h3>
            <p>
              The house planner is a proof of concept, and is not meant to be used regularly.
              Aside from being a way to gauge how users react to experimental features,
              it's also a highly demanded project that I've been wishing someone else would make.
              Since it's been months and I needed a change of gear to work on, I decided to make it myself.
            </p>
            <p>
              It's currently in it's early stages, and is currently not a reliable source of information on housing.
              It has a lot of inaccuracies, and is missing a lot of information.
              That said, having this out there will let me test for bugs much earlier,
              as I personally do not have the resources and space to test for housing.
            </p>
            <p>
              Hopefully, this will also encourage other developers to either improve on this or make their own versions.
              Otherwise, this opens up a new end goal of being the one-stop shop for simulating certain Palia mechanics.
            </p>
            <p>
              You may try it out yourself here: <NuxtLink class="link" to="/house-planner">
                House Planner
              </NuxtLink>
            </p>
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            October 15, 2023 — UI Rework
          </template>
          <template #summary>
            <li><span class="italic">UI Rework —</span> Reworked the UI to be more compact and reduce scrolling</li>
            <li><span class="italic">Palia Clock —</span>Adds an in-game timer for convenience</li>
            <li><span class="italic">Mechanic —</span> Added growth boost support (options)</li>
            <li>UX Improvements:</li>
            <ul class="pl-3 list-disc list-inside ">
              <li>You can drag crops/fertilisers to their tile</li>
              <li>You can now click on the save codes to copy to clipboard</li>
              <li>
                <span class="italic">(Desktop) —</span> Hovering over a tile now previews the crop/fertiliser being
                placed
              </li>
              <li>Main options now save automatically per browser</li>
            </ul>
            <li>Moved Credits to its own dedicated page</li>
            <li>Renamed approximations data to more accurately reflect the lack of crafter timings</li>
            <li>HOTFIX — Fixed issue with tomatoes when under growth boost</li>
          </template>
          <template #default>
            <p class="py-4 text-sm text-warning">
              <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="" />
              UI using custom layouts is not final, and will be changed soon.
            </p>
            <p>
              This change is a major UI rework, with the aim of reducing scrolling and making the planner more compact.
              The initial design of the planner was added as an after-thought, and was not meant to be a long-term
              solution.
              Adding new features, and planning out future ones was proving to be a hassle with the current design, so I
              prioritised its re-work.
            </p>
            <p>
              The rework is designed by an amazing friend of mine, <span class="font-bold">frnkers</span>, and was
              translated to code by yours truly.
              This change allows me to comfortably add new features, and plan out future ones without worrying about the
              messiness of the UI.
            </p>
            <div class="divider my-0 w-full mx-auto max-w-[16rem] lg:max-w-sm" />
            <p>
              I've also added a couple new features, an in-game timer and growth boost support.
              Growth boost support is a toggle in the options menu as it's still bugged (and may work differently with
              fertilisers which is still untested),
              a lot of thanks to <span class="font-bold">gazar</span> for providing information regarding this mechanic.
            </p>
            <p>
              The in-game timer is a small nifty addition that mimics the in-game clock.
              I've initially added a 6 AM alarm (for harvests) but it was proving to be buggy due to how web
              notifications
              work.
              The alarm feature will be kept on the shelf until I find a better system for alarms.
            </p>
            <div class="divider my-0 w-full mx-auto max-w-[16rem] lg:max-w-sm" />
            <p>
              Overall, this update is late as I've taken a break.
              Health reasons and being busy with other stuff meant I couldn't follow my initial roadmap.
              I'm still working on the planner, but it'll be at a slower pace now and I'll be developing the planner
              at a more comfortable pace.
            </p>
            <p>
              If you ever want to contribute to the project's development, just know that the website is open-source and
              can be accessed in the footer below!
            </p>
          </template>
        </ChangelogItem>
        <ChangelogItem>
          <template #title>
            September 21, 2023 (Hotfix)
          </template>
          <template #summary>
            <li>Fixed price of corn preserves (Issue #31 - agazarkiewicz)</li>
          </template>
          <template #default>
            Prices of corn preserves were set to that of potato preserves, causing an overestimation of gold values.
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            September 15, 2023 (Hotfix)
          </template>
          <template #summary>
            <li>Adjusted seeds for 0.168.1 hotfix</li>
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            September 13, 2023 (Hotfix)
          </template>
          <template #summary>
            <li>Added corn and spicy pepper</li>
            <li>Fixed bug where remainders weren't being properly calculated in the planner</li>
            <li>Fixed huge oversight where bushes gave 4 crops per harvest when it actually gives 6</li>
          </template>
          <template #default>
            This hotfix adds the new crops added in the 0.168 patch.
            It also fixed some incorrect values that I've not detected for a long time.
            If you notice discrepancies in your harvest/gold values, please do report it to me on Discord <span
              class="font-bold">(.aisen)</span>
            as I tend to miss some values while working on the planner.
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            September 8, 2023
          </template>
          <template #summary>
            <li>Allowed for illegal plot amounts</li>
            <li>Added external tools</li>
          </template>
          <template #default>
            <span class="font-bold">Illegal Plots: </span>Requested feature, part as a way to support increased plot
            sizes
            in the future and as a temporary solution to support partially connected layouts.
            This change allows for layouts that exceed the maximum plot count of 9 (as of the current date).
            <br>
            <span class="font-bold">External Tools: </span>
            Added external links to other Palia tools, as part of mutual agreements to provide visibility to each
            other's
            tools.
            If you're a developer and would like to have your tool added, feel free to contact me on Discord! <span
              class="font-bold">(.aisen)</span>
            <br>
            Recent changes have been slow for various reasons, mostly the development of a small side-project that could
            be added on here.
            I'll soon return to the roadmap-schedule, potentially updating it to be more accurate.
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            September 2, 2023 (Hotfix)
          </template>
          <template #summary>
            <li>Fixed 2 bugs causing seed replants to not be calculated properly</li>
          </template>
          <template #default>
            This hotfix tackles a major bug that causes excess seeds to not be properly used in re-plants. It also fixes
            a
            bug where re-harvestable plants
            would have incorrect re-plant days when calculated for days above its regular lifespan.
            <br>
            The change should increase gold values by a variable amount and should now properly represent accurate
            replant
            deductions
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            August 30, 2023 (Hotfix)
          </template>
          <template #summary>
            <li>Adjusted crops consumed per seed for Tomatoes to match the 0.167 patch changes</li>
            <li>
              Fix to how crops consumed were being calculated that <span class="font-bold">shouldn't make anything
                different</span>
              (was only a rounding error for tomato seeds caused by the above change)
            </li>
          </template>
          <template #default>
            This change was added hastily, so if any bugs occur please report it to me on Discord <span
              class="font-bold">(.aisen)</span>
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            August 24, 2023
          </template>
          <template #summary>
            <li><span class="italic">New Content —</span> Added Fertiliser</li>
            <li>
              <span class="italic">Technical — </span> Upgraded save codes from v0.1 to v0.2 for fertiliser support
            </li>
            <li>
              <span class="italic">UI — </span> Shifted garden layout to accomodate fertilisers and be easier on the
              eyes
            </li>
            <li><span class="italic">Technical — </span>Removed save code from images exported using the planner</li>
            <li>
              <span class="italic">Technical — </span>Changed how the font is loaded to improve server bandwidth usage
            </li>
          </template>
          <template #default>
            <div class="flex flex-col gap-1">
              <p>
                Today's update adds a core gardening mechanic to the planner - <span
                  class="font-bold">Fertilisers</span>!
                Important for covering tiles that lack necessary bonuses, fertilisers are a great way to enhance your
                garden.
              </p>
              <p>
                Adding fertilisers required a mild overhaul to how saves function, so I've bumped up the save code
                version
                to v0.2 which shortens crop codes to allocate more room for fertiliser codes.
                Your v0.1 codes will still work, just load them in as usual and it'll be parsed correctly (if it
                doesn't,
                please report).
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-left">
                Fertilisers
              </h3>
              <p>
                Added Fertilisers support, fertilisers apply their specific bonus to the tile it's on for every-day that
                it is active.
                The planner will assume that each tile will have its applied fertiliser daily.
              </p>
              <p>
                Currently,
                <span class="font-bold">there is no cost reductions for having fertilisers</span>
                how fertilisers are acquired vary, and as such their costs are not consistent.
                It's highly likely I'll settle on their sell-price instead, but I'll take some time to decide on that
                fully.
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-left">
                v0.2 Saves
              </h3>
              <p class="indent-6">
                New save version includes shortened crop codes, with all crops having their codes reduced by 1 character
                (except for Cotton).
                Fertilisers are indicated by the dot <span
                  class="px-2 font-bold border border-solid rounded-lg border-info">.</span> prefix, followed by their
                code.
              </p>
              <p>
                As a core feature of the Garden Planner is 'Shareability',
                v0.1 codes are supported to ensure nobody's gardens are lost during the upgrade.
                Ideally, all codes will not be invalidated in the future,
                and will only be unsupported if gardening mechanics change to the point it becomes impossible.
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-left">
                UI/UX Changes and Other Stuff
              </h3>
              <p class="indent-6">
                The garden layout has been shifted to the right to accomodate fertilisers.
                Most elements were mostly shifted to make the high amount of information more bearable to look at.
                The current UI/UX of the app is showing a lot of flaws.
                A graphic designer friend of mine has offered to work on a better design when available,
                so a UI/UX re-design might not be far in the future.
              </p>
              <p>
                Outside of that, the new savecode-length makes it impossible to actually store the save in an image
                file.
                Due to this, I've removed it entirely from exported images.
              </p>
              <p>
                I truly apologise to anyone using smaller screens and anyone who are struggling with the current UI.
                Ease of use is another core aim of the planner, and I'll be working hard to make it better.
              </p>
            </div>
          </template>
        </ChangelogItem>

        <ChangelogItem>
          <template #title>
            August 22, 2023
          </template>
          <template #summary>
            <li><span class="italic">New Pages:</span> Changelogs and Roadmap</li>
            <li><span class="italic">Technical:</span> Moved website from Vue to Nuxt</li>
            <li><span class="italic">UI:</span> Shifted sections of the website around</li>
            <li><span class="italic">UI:</span> Made some elements smaller to fit better on mobile</li>
            <li><span class="italic">UI:</span> Removed some unnecessary text (just a bit &lt;3)</li>
          </template>
          <template #default>
            <div class="flex flex-col gap-1">
              <p>
                Today's update doesn't add much in terms of the planner itself,
                just mostly nerd stuff that might only be interesting to a small amount of people!
              </p>
              <p>
                For the rest of you though, I've added a roadmap and this new changelogs section so you can better keep
                track of what's going on!
                Accompanying it comes a new sidebar and navbar, which will create room for more pages in the future
                (Presets/Templates :D).
                <span class="font-bold">Also, since the internal structure of the website has changed, I'd like to ask
                  for
                  reports on any performance issues
                  you may encounter, especially on mobile devices.</span>
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-left">
                New Pages: Changelogs and Roadmap
              </h3>
              <p class="indent-6">
                I've mostly been announcing on the official Palia Discord server whenever I've made a new update to the
                planner, particularly the
                chill channel for its slow pace.
                It's not really the best place to share updates nor a fitting place for them at all,
                and I'm not interested in making my own Discord server for the planner.
              </p>
              <p class="indent-6">
                These new changelogs and roadmap pages will allow me to better share what's changed and what's coming up
                in the future,
                not only will they be more accessible to everyone, but I can also write in greater detail. (I will
                though
                learn to be more concise in the future.)
              </p>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-left">
                Website Internal Structure
              </h3>
              <p class="indent-6">
                The planner ran on <span class="italic font-bold ">Vue</span>,
                the front-end framework I'm highly familiar working with that lets me develop this client app at a
                comfortable pace.
                Some of the ideas I have in mind in the long term though would likely benefit from having the planner
                have
                server-side capabilities,
                such as an internal link shortener, or an <span class="font-bold">API for other developers to
                  use</span>.
              </p>
              <p class="indent-6">
                Due to that, I've decided to save myself potential future troubles by migrating from Vue to <span
                  class="italic font-bold">Nuxt</span>
                as early as possible before the planner becomes open to the public.
                This also lets me better analyse the website performance of the planner, allowing me to deliver a better
                experience for you all.
              </p>
              <p>
                These changes took me a while though, I may have also caused some bugs in the migration, so please
                inform
                me of anything broke!
              </p>
            </div>
          </template>
        </ChangelogItem>
      </div>
    </section>

  </main>
</template>

================================================
FILE: pages/compact.vue
================================================

<script setup lang="ts">
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import { useToasts } from '~/stores/useToasts'
import CropModalButton from '~/components/garden-planner/ItemSelector/CropModalButton.vue'
import MenuBar from '~/components/garden-planner/MenuBar.vue'
import Toast from '~/components/Toast.vue'

useHead({
  title: 'Palia Garden Planner',
  meta: [
    {
      name: 'description',
      content: 'This is a new page',
    },
  ],
})

const isTakingScreenshot = useTakingScreenshot()
const toasts = useToasts()

const uiSettings = useUiSettings()
const toastLocation = computed(() => {
  switch (uiSettings.settings.toastsLocation) {
    case 'top-left':
      return 'toast-top toast-start'
    case 'top-center':
      return 'toast-top toast-center'
    case 'top-right':
      return 'toast-top toast-end'
    case 'bottom-left':
      return 'toast-bottom toast-start'
    case 'bottom-center':
      return 'toast-bottom toast-center'
    case 'bottom-right':
      return 'toast-bottom toast-end'
    default:
      return 'toast-top toast-start'
  }
})
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://palia-garden-planner.vercel.app/compact',
    },
  ],
})

definePageMeta({
  layout: 'compact',
})
</script>

<template>
  <main class="flex flex-col gap-4 bg-palia-dark">
    <section class="">
      <GardenPlanner />

      <MenuBar />
    </section>
    <CropModalButton :position="uiSettings.settings.floatComponentLocation" />
    <Teleport to="body">
      <section id="toasts" class="toast z-1000" :class="toastLocation">
        <Toast v-for="(toast) in toasts.toasts" :key="toast.id" :message="toast.message" :type="toast.type"
          :id="toast.id!" :duration="toast.duration" @close="() => { toasts.removeToast(toast.id!) }" />
      </section>
    </Teleport>

  </main>
</template>

================================================
FILE: pages/credits.vue
================================================

<script setup lang="ts">
useHead({
  title: 'Credits | Palia Garden Planner',
  meta: [
    {
      name: 'description',
      content: 'Credits Page',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.palia-garden-planner.vercel.app/credits',
    },
  ],
})
</script>

<template>
  <main class="flex flex-col gap-2 px-4 py-2 text-justify md:px-8 lg:px-14">
    <NuxtLink to="/" class="flex items-center gap-2 btn w-fit btn-sm btn-ghost">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="" />
      <p class="">
        Return
      </p>
    </NuxtLink>
    <div class="py-4">
      <h1 class="text-2xl font-bold md:text-3xl">
        Credits
      </h1>
    </div>
    <section class="rounded-md bg-palia-blue bg-opacity-40 sm:p-4">
      <div class="flex flex-col items-center w-full gap-4 p-4 pb-8 rounded-md sm:border sm:border-misc">
        <h2 class="text-2xl">
          Contributors
        </h2>
        <p>
          Thank you to the following people for their assistance to the project!
        </p>
        <div class="flex flex-row flex-wrap justify-center gap-4">
          <CreditName>
            <template #name>
              Arenvanya
            </template>
            <template #for>
              Information
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              Aschefield
            </template>
            <template #for>
              Information, Assets
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              DuhScape
            </template>
            <template #for>
              Information
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              frnkers
            </template>
            <template #for>
              UI Design
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              gazar
            </template>
            <template #for>
              Information
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              Mctalian
            </template>
            <template #for>
              Code Contribution
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              nella
            </template>
            <template #for>
              UI Testing
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              Ren
            </template>
            <template #for>
              Information, Feedback
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              st3fannl
            </template>
            <template #for>
              Assets
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              TinyDragon
            </template>
            <template #for>
              Housing Information
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              <NuxtLink to="https://palia.wiki.gg" class="flex items-center gap-1 underline underline-offset-4"
                rel="noopener" target="_blank" :prefetch="false">
                Palia Wiki
              </NuxtLink>
            </template>
            <template #for>
              Information
            </template>
          </CreditName>
          <CreditName>
            <template #name>
              <NuxtLink to="https://paliapedia.com/" class="flex items-center gap-1 underline underline-offset-4"
                rel="noopener" target="_blank" :prefetch="false">
                <img src="/externals/paliapedia.svg" width="18px" height="18px"
                  class="max-w-[1.5rem] inline-block text-lg" alt="Paliapedia Logo">
                Paliapedia
              </NuxtLink>
            </template>
            <template #for>
              Information, Assets
            </template>
          </CreditName>
        </div>
        <p class="max-w-4xl text-center">
          Huge thanks to the Palia Team and Singularity 6 for developing the game, Palia's Commmunity Teams for various
          assistance with the planner, and players who provided information through discussions online,
          and everyone for using the planner and providing feedback!
        </p>
      </div>
    </section>
  </main>
</template>

================================================
FILE: pages/index.vue
================================================

<script setup lang="ts">
import { useTakingScreenshot } from '~/stores/useIsTakingScreenshot'
import { useToasts } from '~/stores/useToasts'
import CropModalButton from '~/components/garden-planner/ItemSelector/CropModalButton.vue'
import MenuBar from '~/components/garden-planner/MenuBar.vue'
import Toast from '~/components/Toast.vue'


useHead({
  title: 'Palia Garden Planner',
  meta: [
    {
      name: 'description',
      content: 'This is a new page',
    },
  ],
})

const isTakingScreenshot = useTakingScreenshot()
const toasts = useToasts()

const uiSettings = useUiSettings()
const toastLocation = computed(() => {
  switch (uiSettings.settings.toastsLocation) {
    case 'top-left':
      return 'toast-top toast-start'
    case 'top-center':
      return 'toast-top toast-center'
    case 'top-right':
      return 'toast-top toast-end'
    case 'bottom-left':
      return 'toast-bottom toast-start'
    case 'bottom-center':
      return 'toast-bottom toast-center'
    case 'bottom-right':
      return 'toast-bottom toast-end'
    default:
      return 'toast-top toast-start'
  }
})

</script>

<template>
  <main class="flex flex-col gap-4 py-2">
    <h1 class="sr-only">
      Garden Planner
    </h1>
    <GuideCard />
    <section class="lg:px-12">
      <GardenPlanner />
      <MenuBar />
    </section>
    <!-- <DevOnly>
      <div class="fixed bottom-0 left-0 flex flex-col gap-2 p-2 mx-12 my-2 rounded-md w-fit bg-accent bg-opacity-10">
        <p class="text-sm text-palia-blue-dark">
          Toggle Screenshot Mode
        </p>
        <button class="btn btn-accent" @click="isTakingScreenshot.set(!isTakingScreenshot.get)">
          {{ isTakingScreenshot.get }}
        </button>
        <button class="btn" @click="getImage">
          Snapshot
        </button>
      </div>
    </DevOnly> -->
    <CropModalButton :position="uiSettings.settings.floatComponentLocation" />
    <Teleport to="body">
      <section id="toasts" class="toast z-1000" :class="toastLocation">
        <Toast v-for="(toast) in toasts.toasts" :key="toast.id" :message="toast.message" :type="toast.type"
          :id="toast.id!" :duration="toast.duration" @close="() => { toasts.removeToast(toast.id!) }" />
      </section>
    </Teleport>
  </main>
</template>

================================================
FILE: pages/roadmap.vue
================================================

<script setup lang="ts">
useHead({
  title: 'Roadmap | Palia Garden Planner',
  meta: [
    {
      name: 'description',
      content: 'Content to be worked on in the future',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://palia-garden-planner.vercel.app/roadmap',
    },
  ],
})
</script>

<template>
  <main v-once class="flex flex-col px-4 py-2 md:px-8 lg:px-16 gap-2 text-justify">
    <NuxtLink to="/" class="flex items-center gap-2 btn w-fit btn-sm btn-ghost">
      <font-awesome-icon :icon="['fas', 'arrow-left']" class="" />
      <p class="">
        Return
      </p>
    </NuxtLink>
    <section class="pb-2">
      <div class="py-4">
        <h1 class="text-2xl font-bold md:text-3xl">
          Garden Planner Roadmap
        </h1>
        <p class="text-xs md:text-sm">
          Last Updated: October 14, 2023
        </p>
      </div>
      <div class="flex flex-col gap-2 text-justify max-w-3xl md:text-base leading-7">
        <div class="card card-compact bg-palia-blue-dark rounded-md max-w-2xl px-4">
          <div class="card-body">
            <p class="leading-6 text-sm">
              <span class="font-bold text-base">Update (October 14):</span>
              I've been working slower than before on the Garden Planner. I'm busy on other things,
              and my hands are recovering from issues I've been having for a while.
            </p>
            <p>
              Planner work will continue at a slightly slower pace,
              no more dates are provided as I've realised I am unlikely to meet them once set.
            </p>
          </div>
        </div>
        <p class="text-justify">
          Hey everyone! The Palia Garden Planner started out as a fun little tool for quickly sharing garden
          layouts
          w/ crop bonuses.
          The first experimental release, however, was met with a lot more enthusiasm and support than I expected.
        </p>
        <p>
          As a result, I'm continuing developing this planner until it reaches a state where I'm happy with it.
          This roadmap is a list of features I plan to add to the planner in the future.
        </p>
      </div>
    </section>
    <AppDividerAlt />
    <div class="flex flex-col w-full gap-6">
      <section class="pb-2 flex flex-col gap-4  w-full">
        <h2 class="text-2xl font-normal">
          Main Goals
        </h2>

        <div class="flex flex-row flex-wrap gap-4  w-full">
          <RoadmapCard>
            <template #title>
              Presets
            </template>
            <template #description>
              <p>
                A page with a sortable list of garden plans, to help players who need a quick start.
              </p>
            </template>
          </RoadmapCard>

          <RoadmapCard>
            <template #title>
              Crafter Support
            </template>
            <template #description>
              <p>
                Currently, the garden planner does not take into account the processing time of the Seed Collector and
                Preserve Jar.
              </p>
              <p>
                Crafters will be implemented, with the ability to configure the amount of each crafter,
                and then display accurate processing data for each crop.
              </p>
            </template>
          </RoadmapCard>

          <RoadmapCard>
            <template #title>
              Plot System Rewrite
            </template>
            <template #description>
              <p>
                The re-write will allow plots to be partially connected to each other,
                which would be in-line with the game's behaviour.
              </p>
              <p>
                This will expand the planner's capabilities, and will open up the room for more types of gardens.
              </p>
            </template>
          </RoadmapCard>

          <RoadmapCard>
            <template #title>
              House Planner
            </template>
            <template #description>
              <p>
                A separate planner for planning the interior of your house.
              </p>
              <p>
                This will allow you to plan out the major buildings in Palia,
                letting you experiment with different layouts before you build.
              </p>
              <p class="text-warning">
                <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-1" />
                This is a long-term goal, and is unlikely to be implemented for a while.
              </p>
            </template>
          </RoadmapCard>
        </div>
      </section>
      <section class="pb-2 flex flex-col gap-4">
        <div class="grid gap-1">
          <h2 class="text-2xl font-normal">
            Other Goals
          </h2>
          <p class="max-w-3xl">
            These are goals that are being considered but are not set in stone.
            They may be scrapped or ignored depending on how the planner develops.
          </p>
        </div>

        <div class="flex flex-row flex-wrap gap-4 w-full">
          <RoadmapCard>
            <template #title>
              More Export Options
            </template>
            <template #description>
              <p>
                More export options will be added, particularly to text.
                Converting the garden to a markdown layout for example,
                as well as exporting to other garden planners (such as those in google sheets) for users who prefer
                them when/if possible.
              </p>
              <p>
                This will likely be included after the plot system re-write.
              </p>
            </template>
          </RoadmapCard>

          <RoadmapCard>
            <template #title>
              Link Shorteners
            </template>
            <template #description>
              <p>
                Instead of just the code, the planner could store layouts in a database.
                This allows for concise links to be generated, which can be shared with others.
              </p>
              <p>
                This is an uncertain goal, as databases may cost money to host.
              </p>
            </template>
          </RoadmapCard>
        </div>
      </section>
    </div>

  </main>
</template>

================================================
FILE: pages/house-planner/index.vue
================================================

<script setup lang="ts">
import HousePlanner from '@/components/house-planner/HousePlanner.vue'

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://palia-garden-planner.vercel.app/',
    },
  ],
})

definePageMeta({
  layout: 'housing',
})
</script>

<template>
  <main class="flex flex-col gap-2 p-4 px-2 lg:px-12">
    <div class="flex flex-col items-center p-2 pt-4 mb-2 rounded-md bg-water-retain lg:mx-8">
      <div class="flex flex-col gap-1 text-center text-neutral">
        <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" class="text-xl" />
        <h2 class="text-xl font-black">
          Prototype Development Halted Indefinitely
        </h2>
        <p class="max-w-4xl text-sm font-normal">
          This house planner prototype was released primarily as a proof-of-concept and is bound to have inaccuracies.
          Many features are missing and bugs are to be expected.
          <span class="font-bold">
            As of version 0.179, this project's development is halted and is unlikely to support versions beyond 0.179. See below for more info.</span>
          Page will be maintained for archival purposes.
        </p>
      </div>
    </div>
    <ClientOnly>
      <HousePlanner />
    </ClientOnly>

    <section class="px-2 mt-4">
      <div class="flex flex-col items-center justify-center p-4 rounded-md bg-palia-blue outline outline-1 outline-accent">
        <h2 class="pb-3 text-lg font-bold uppercase">
          Controls
        </h2>
        <div class="grid grid-cols-2 gap-4 text-center lg:grid-flow-col">
          <div>
            <kbd class="kbd kbd-lg">Left Click</kbd>
            <p>Select/Place</p>
          </div>
          <div class="grid">
            <kbd class="kbd kbd-lg">Right Click</kbd>
            <p>Clear Selected</p>
          </div>

          <div>
            <kbd class="kbd kbd-lg">Q</kbd>
            <p class="max-w-[12rem]">
              Rotate Left <font-awesome-icon :icon="['fas', 'rotate-left']" class="text-xl" />
            </p>
          </div>

          <div>
            <kbd class="kbd kbd-lg">E</kbd>
            <p class="max-w-[12rem]">
              Rotate Right <font-awesome-icon :icon="['fas', 'rotate-right']" class="text-xl" />
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="flex flex-col justify-between gap-2 lg:flex-row lg:mx-2">
      <section class="mt-4 rounded-md text-palia-blue-dark collapse h-fit collapse-arrow bg-water-retain">
        <input type="checkbox">
        <div class="text-2xl font-bold collapse-title">
          Why development is halted. <span class="text-sm">(2024-04-24)</span>
        </div>
        <div class="max-w-xl collapse-content">
          <div class="flex flex-col gap-2 font-medium">
            <p class="" />
            <p>
              Since the beginning of this project, the housing system has been a challenge to simulate.
              The project revolved around guesses and asssumptions of how the housing system works, of which many were off the mark.
              This was fine as the prototype was able to accomplish a base level of house-planning that players were able to make use of.
            </p>
            <p>
              As the project constantly rebuilds itself to support the latest and existing features as well as fix existing issues to be more accurate,
              it's clear that the prototype's core systems will not be able to achieve much more than what is currently available.
              <span class="font-bold">
                The main challenge is that I am attempting to emulate the features of a 3D game in a 2D environment.
              </span>
            </p>
            <p>
              After seeing the roadmap, with the upcoming structural blocks and structures involving multiple floors,
              I have decided that future iterations of the house planner is best made with an approach vastly different from the current one.
              As I am unavailable to devote the amount of time I feel I need for this project, development of the <span class="font-italic">house planner</span> will not continue beyond 0.179 for the foreseeable future.
            </p>

            <p>
              <span class="font-bold">My sincerest apologies to anybody who was looking forward to this planner</span>, I was truly excited to make this tool work.
              I hope that someone else would be able to create a better tool for house planning in the future.
              I would also like to thank everyone who has supported this project and provided feedback.
              Perhaps one day I will be able to return to this project with the means to make it work.
            </p>
            <p class="font-bold">
              Regardless, the prototype as-is will remain available, and existing issues will be addressed if possible.
            </p>
          </div>
        </div>
      </section>
      <section class="mt-4 rounded-md collapse bg-base-200 h-fit collapse-arrow">
        <input type="checkbox">
        <div class="text-2xl font-medium collapse-title">
          About the Project (Old)
        </div>
        <div class="max-w-xl collapse-content">
          <div class="flex flex-col gap-2">
            <p class="font-bold">
              Hey folks!
            </p>
            <p>
              I had this project sitting around a while back,
              initially requested by <span class="italic">Shepp Arenvanya</span> from the Palia Discord and who also provided the initial information to get this started.
            </p>
            <p>
              I've been stuck working on crafters for the garden planner for a while now,
              and demand for a housing planner has been increasing. So I've decided to take a detour
              and get this to a prototype stage.
            </p>
            <p>
              For now, this is a proof-of-concept and is not ready for regular use.
              This tool will be developed now and then,
              hopefully get to a stage where players can figure out their house layouts and see its resource costs.
            </p>
            <p>
              The housing planner, just like the garden planner, is open-source and other developers can play around with it in the link below.
            </p>
          </div>
        </div>
      </section>
      <!-- <section class="mt-4 rounded-md collapse bg-base-200 h-fit collapse-arrow">
        <input type="checkbox">
        <div class="text-2xl font-medium collapse-title">
          Goals
        </div>
        <div class="max-w-xl collapse-content">
          <div class="flex flex-col gap-2">
            <p class="text-sm">
              Leaving this here both as a temp roadmap and so I can remember what I'm doing.
            </p>
            <ul class="list-disc list-inside">
              <li>
                Re-write system to support bay windows in the front of the harvest house. (currently impossible)
              </li>
              <li>
                Improve performance (SUPER laggy right now)
              </li>
              <li>
                <span class="line-through">
                  Fix price calculations (does not account price increase after a certain amount of items)
                </span>
                <span class="ml-2 font-bold">
                  Made to match with wiki prices
                </span>
              </li>
              <li class="line-through">
                Add porch and door support (currently facing snapping issues)
              </li>
              <li>
                Adjust collision mechanics to imitate in-game behaviour better
              </li>
              <li class="ml-5 text-sm">
                Looking for assistance on this, please send notes to <span class="italic font-black">.aisen</span> on Discord
                if you have images on building interactions/connections.
              </li>
              <li class="ml-5 text-sm">
                Bonus points if you can provide a video or can provide full details on how the collision works.
              </li>
              <li>
                Add other housing add-ons
              </li>
              <li>
                Add a way to save/load house layouts
              </li>
              <li>
                Add mobile support and touch controls
              </li>
              <li>
                Evaluate planner scope/roadmap.
              </li>
              <li class="ml-5 text-sm">
                Furniture/fences/etc. are a lot of work if you think about it.
              </li>
            </ul>
          </div>
        </div>
      </section> -->
    </div>

  </main>
</template>

================================================
FILE: plugins/fontawesome.ts
================================================
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
faArrowLeft,
faArrowUpRightFromSquare,
faAsterisk,
faBars,
faBookOpen,
faCaretDown,
faChevronLeft,
faChevronRight,
faCircleQuestion,
faCopy,
faDownload,
faDroplet,
faEraser,
faFloppyDisk,
faForwardFast,
faGift,
faHand,
faHeart,
faInfo,
faInfoCircle,
faJar,
faList,
faMagnifyingGlass,
faMap,
faPaste,
faPenToSquare,
faPeopleGroup,
faPlus,
faRecycle,
faRotateLeft,
faRotateRight,
faScrewdriverWrench,
faSeedling,
faShareFromSquare,
faShield,
faSliders,
faSquarePlus,
faStar,
faTableCells,
faTableCellsLarge,
faTableList,
faTools,
faTrash,
faTriangleExclamation,
faTurnDown,
faWheatAwn,
faX,
faStopwatch,
faWindowMaximize,
faCheck,
faCog,
} from '@fortawesome/free-solid-svg-icons'

import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
faShield,
faDroplet,
faForwardFast,
faStar,
faWheatAwn,
faEraser,
faCopy,
faPaste,
faTrash,
faTriangleExclamation,
faPlus,
faInfoCircle,
faCaretDown,
faArrowUpRightFromSquare,
faInfo,
faCircleQuestion,
faJar,
faSeedling,
faRecycle,
faHeart,
faTools,
faTableCellsLarge,
faSquarePlus,
faTurnDown,
faArrowLeft,
faBars,
faGift,
faMap,
faGithub,
faTableList,
faSliders,
faX,
faChevronLeft,
faChevronRight,
faDiscord,
faHand,
faScrewdriverWrench,
faRotateRight,
faRotateLeft,
faPeopleGroup,
faBookOpen,
faList,
faFloppyDisk,
faDownload,
faShareFromSquare,
faPenToSquare,
faTrash,
faAsterisk,
faMagnifyingGlass,
faStopwatch,
faTableCells,
faWindowMaximize,
faCheck,
faCog
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

================================================
FILE: plugins/vuekonva.ts
================================================
import VueKonva from 'vue-konva'
import Konva from 'konva'

export default defineNuxtPlugin((nuxtApp) => {
nuxtApp.vueApp.use(VueKonva, { Konva })
})

================================================
FILE: public/gold.webp
================================================
[Non-text file]

================================================
FILE: public/housing-logo.webp
================================================
[Non-text file]

================================================
FILE: public/logo.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/bay-window.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/fireplace.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/hallway.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/harvest-house.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/kilima-courtyard.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/kilima-door.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/kilima-porch.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/large-room.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/medium-room.webp
================================================
[Non-text file]

================================================
FILE: public/buildings/icons/small-room.webp
================================================
[Non-text file]

================================================
FILE: public/crafters/preserve-jar.webp
================================================
[Non-text file]

================================================
FILE: public/crafters/seeder.webp
================================================
[Non-text file]

================================================
FILE: public/crops/apple.webp
================================================
[Non-text file]

================================================
FILE: public/crops/batterfly-bean.webp
================================================
[Non-text file]

================================================
FILE: public/crops/blueberry.webp
================================================
[Non-text file]

================================================
FILE: public/crops/bok-choy.webp
================================================
[Non-text file]

================================================
FILE: public/crops/carrot.webp
================================================
[Non-text file]

================================================
FILE: public/crops/corn.webp
================================================
[Non-text file]

================================================
FILE: public/crops/cotton.webp
================================================
[Non-text file]

================================================
FILE: public/crops/crop-pumpkin.webp
================================================
[Non-text file]

================================================
FILE: public/crops/napa-cabbage.webp
================================================
[Non-text file]

================================================
FILE: public/crops/onion.webp
================================================
[Non-text file]

================================================
FILE: public/crops/potato.webp
================================================
[Non-text file]

================================================
FILE: public/crops/rice.webp
================================================
[Non-text file]

================================================
FILE: public/crops/rockhopper-pumpkin.webp
================================================
[Non-text file]

================================================
FILE: public/crops/spicy-pepper.webp
================================================
[Non-text file]

================================================
FILE: public/crops/tomato.webp
================================================
[Non-text file]

================================================
FILE: public/crops/wheat.webp
================================================
[Non-text file]

================================================
FILE: public/externals/kofi.webp
================================================
[Non-text file]

================================================
FILE: public/externals/palia-party.webp
================================================
[Non-text file]

================================================
FILE: public/fertilisers/harvest-boost.webp
================================================
[Non-text file]

================================================
FILE: public/fertilisers/hydrate-pro.webp
================================================
[Non-text file]

================================================
FILE: public/fertilisers/quality-up.webp
================================================
[Non-text file]

================================================
FILE: public/fertilisers/speedy-gro.webp
================================================
[Non-text file]

================================================
FILE: public/fertilisers/weed-block.webp
================================================
[Non-text file]

================================================
FILE: public/items/glass-pane.webp
================================================
[Non-text file]

================================================
FILE: public/jars/apple.webp
================================================
[Non-text file]

================================================
FILE: public/jars/batterfly-bean.webp
================================================
[Non-text file]

================================================
FILE: public/jars/blueberry.webp
================================================
[Non-text file]

================================================
FILE: public/jars/bok-choy.webp
================================================
[Non-text file]

================================================
FILE: public/jars/carrot.webp
================================================
[Non-text file]

================================================
FILE: public/jars/corn.webp
================================================
[Non-text file]

================================================
FILE: public/jars/napa-cabbage.webp
================================================
[Non-text file]

================================================
FILE: public/jars/onion.webp
================================================
[Non-text file]

================================================
FILE: public/jars/potato.webp
================================================
[Non-text file]

================================================
FILE: public/jars/rockhopper-pumpkin.webp
================================================
[Non-text file]

================================================
FILE: public/jars/spicy-pepper.webp
================================================
[Non-text file]

================================================
FILE: public/jars/tomato.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/apple.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/batterfly-bean.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/blueberry.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/bok-choy.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/carrot.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/corn.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/cotton.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/napa-cabbage.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/onion.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/potato.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/rice.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/rockhopper-pumpkin.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/spicy-pepper.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/tomato.webp
================================================
[Non-text file]

================================================
FILE: public/seeds/wheat.webp
================================================
[Non-text file]

================================================
FILE: server/tsconfig.json
================================================
{
"extends": "../.nuxt/tsconfig.server.json"
}

================================================
FILE: server/api/getPresets.ts
================================================
export default defineEventHandler(async (event) => {
await fetch
})

================================================
FILE: stores/useDragAndDrop.ts
================================================
import { defineStore } from 'pinia'
import type { Garden, Plot } from '@/assets/scripts/garden-planner/imports'
import { CropType, FertiliserType, getCropFromType, getFertiliserFromType } from '@/assets/scripts/garden-planner/imports'

type DragItem = CropType | FertiliserType | 'crop-erase' | 'fertiliser-erase' | null

interface ITileCoords {
x: number
y: number
plot: Plot
}

export const useDragAndDrop = defineStore('dragAndDrop', () => {
const draggedItem = ref<DragItem>(null)
const isDragging = ref(false)
const tileCoords = ref<ITileCoords | null>(null)
const garden = ref<Garden | null>(null)

function setGarden(g: Garden) {
garden.value = g
}

function startDrag(item: DragItem) {
draggedItem.value = item
isDragging.value = true
}

function stopDrag() {
if (tileCoords.value === null) {
draggedItem.value = null
isDragging.value = false
return
}

    const { x, y, plot } = tileCoords.value

    // Remove crop or fertiliser from tile
    if (draggedItem.value === 'crop-erase')
      plot.setTile(x, y, null)
    else if (draggedItem.value === 'fertiliser-erase')
      plot.removeFertiliserFromTile(x, y)

    if (draggedItem.value === null) {
      isDragging.value = false
      return
    }

    // Add crop or fertiliser to tile
    if (Object.values(CropType).includes(draggedItem.value as CropType)) {
      plot.setTile(x, y, getCropFromType(draggedItem.value as CropType))
    }
    else if (Object.values(FertiliserType).includes(draggedItem.value as FertiliserType)) {
      plot.addFertiliserToTile(x, y, getFertiliserFromType(draggedItem.value as FertiliserType), {
        removeSameId: true,
      })
    }

    garden.value?.calculateBonuses()

    draggedItem.value = null
    isDragging.value = false

}

function onTileEnter(x: number, y: number, plot: Plot) {
tileCoords.value = { x, y, plot }
}

function clearTileCoords() {
tileCoords.value = null
}

return { draggedItem, isDragging, startDrag, stopDrag, onTileEnter, setGarden, clearTileCoords }
})

================================================
FILE: stores/useGarden.ts
================================================
import { defineStore } from 'pinia'
import type { PlotStat } from '~/assets/scripts/garden-planner/imports'
import { Bonus, Garden } from '~/assets/scripts/garden-planner/imports'

const useGarden = defineStore('garden', () => {
const gardenRef = ref(new Garden())
const hoveredBonus = ref(Bonus.None)

function update() {
gardenRef.value.calculateBonuses()
}

function setHoveredBonus(bonus: Bonus) {
hoveredBonus.value = bonus
}
const getHoveredBonus = computed(() => hoveredBonus.value)

const plotStat = computed(() => gardenRef.value.calculateStats() as PlotStat)

const isGardenWide = computed(() => gardenRef.value.plots[0].length > 3)

const garden = computed(() => gardenRef.value)

const isFullUpdateRequestedVal = ref(false)
function requestFullUpdate(){
isFullUpdateRequestedVal.value = true
}

function resetRequestFullUpdate() {
isFullUpdateRequestedVal.value = false
}

const isFullUpdateRequested = computed(() => isFullUpdateRequestedVal.value)

return {
garden,
update,
plotStat,
isGardenWide,
setHoveredBonus,
getHoveredBonus,
requestFullUpdate,
resetRequestFullUpdate,
isFullUpdateRequested,
}
})

export default useGarden

================================================
FILE: stores/useHarvester.ts
================================================
import { defineStore } from 'pinia'
import type { IHarvesterOptions } from '~/assets/scripts/garden-planner/classes/harvester'
import Harvester from '~/assets/scripts/garden-planner/classes/harvester'
import type { TUniqueTiles } from '~/assets/scripts/garden-planner/utils/garden-helpers'

const useHarvester = defineStore('harvester', () => {
const harvesterRef = ref(new Harvester())

const harvestSettingsRef = ref<IHarvesterOptions>({
days: -1,
includeReplant: true,
includeReplantCost: true,
useStarSeeds: true,
useGrowthBoost: false,
level: 0,
})

function simulateYield(
tiles: TUniqueTiles,
options: IHarvesterOptions = harvestSettingsRef.value,
) {
harvesterRef.value = new Harvester()
harvesterRef.value.simulateYield(tiles, options)
}

function updateSettings(newSettings: IHarvesterOptions) {
harvestSettingsRef.value = { ...newSettings }
}

function updateSetting(newSettings: { [property in keyof IHarvesterOptions]?: IHarvesterOptions[property] }) {
harvestSettingsRef.value = { ...harvestSettingsRef.value, ...newSettings }
}

const harvester = computed(() => harvesterRef.value)
const dayHarvests = computed(() => harvesterRef.value.dayHarvests)
const totalHarvest = computed(() => harvesterRef.value.totalHarvest)
const settings = computed(() => harvestSettingsRef.value)

return {
harvester,
simulateYield,
dayHarvests,
totalHarvest,
settings,
updateSettings,
updateSetting
}
})

export default useHarvester

================================================
FILE: stores/useHousePlanConfig.ts
================================================
import { defineStore } from 'pinia'

export const useHousePlanConfig = defineStore('housePlanConfig', () => {
const CELL_SIZE = 5
const CELLS_IN_PLOT = 13

const SIZE_MULTIPLIER = 1.5

const plotWidth = computed(() => CELL*SIZE * CELLS*IN_PLOT)
const plotHeight = computed(() => CELL_SIZE * CELLS_IN_PLOT)

const PLOT_ROWS = 5
const PLOT_COLUMNS = 9

const plotRows = computed(() => PLOT_ROWS)
const plotColumns = computed(() => PLOT_COLUMNS)

const WIDTH = CELL*SIZE * CELLS*IN_PLOT * PLOT*COLUMNS * SIZE*MULTIPLIER
const HEIGHT = CELL_SIZE * CELLS*IN_PLOT * PLOT*ROWS * SIZE_MULTIPLIER

const width = computed(() => WIDTH)
const height = computed(() => HEIGHT)

const MAX_CLUSTER_BUILDINGS = 15
const MAX_BUILDINGS = 30

return {
CELL_SIZE,
CELLS_IN_PLOT,
plotWidth,
plotHeight,
PLOT_ROWS,
PLOT_COLUMNS,
plotRows,
plotColumns,
WIDTH,
HEIGHT,
width,
height,
SIZE_MULTIPLIER,
MAX_CLUSTER_BUILDINGS,
MAX_BUILDINGS,
}
})

================================================
FILE: stores/useIsTakingScreenshot.ts
================================================
import { defineStore } from 'pinia'

// Way to globally define if the dom-to-image library is taking a screenshot
// Useful for hiding elements that should not be in the screenshot without having to pass a prop to every component
export const useTakingScreenshot = defineStore('isTakingScreenshot', () => {
const val = ref(false)

function set(newVal: boolean) {
val.value = newVal
}

const get = computed(() => val.value)

return {
set,
get,
}
})

================================================
FILE: stores/usePlannerDisplayConfig.ts
================================================
import { defineStore } from 'pinia'

type TabOption = 'garden+display' | 'display+display'
export const usePlannerDisplayConfig = defineStore('plannerDisplayConfig', () => {
const val = ref<TabOption>('garden+display')

function set(newVal: TabOption) {
val.value = newVal
}

const get = computed(() => val.value)

return {
set,
get,
}
})

================================================
FILE: stores/useProcessor.ts
================================================
import { defineStore } from 'pinia'
import Processor, { type ProcessorSetting, type ProcessorSettings } from '~/assets/scripts/garden-planner/classes/processor'
import { type ICropName, type ITotalHarvest } from '~/assets/scripts/garden-planner/utils/garden-helpers'

const useProcessor = defineStore('processor', () => {
const processorRef = ref(new Processor())
const settingsRef = ref<ProcessorSettings>({
cropSettings: new Map<ICropName, ProcessorSetting>(),
crafterSetting: 0,
goldAverageSetting: 'crafterTime'
})

function simulateProcessing(
totalHarvestData: ITotalHarvest,
) {
processorRef.value = new Processor()
processorRef.value.process(totalHarvestData, settingsRef.value)
}

function updateSettings(newSettings: ProcessorSettings) {
settingsRef.value.cropSettings = newSettings.cropSettings
settingsRef.value.goldAverageSetting = newSettings.goldAverageSetting
}

const processor = computed(() => processorRef.value)

const output = computed(() => processorRef.value.output)

const settings = computed(() => settingsRef.value)

const inventory = computed(() => {
return processorRef.value.inventory
})

const finalGoldValue = computed(() => {
let goldValue = 0

    for (const [, item] of processorRef.value.inventory)
      goldValue += (item.count * item.baseGoldValue)

    return goldValue

})

const highestCraftingTime = computed(() => {
return processorRef.value.highestCraftingTime
})

const averageGoldValue = computed(() => {
const highestCraftingTimeHours = Math.max(highestCraftingTime.value / 60, 1)
const average = finalGoldValue.value / highestCraftingTimeHours

    return Math.round(average)

})

const seedCollectorsCount = computed(() => {
return processor.value.seedCollectorsCount
})

const preserveJarsCount = computed(() => {
// const preserveJarsList = new Map<ICropNameWithGrowthDiff, {
// cropType: CropType
// crafters: number
// isStar: boolean
// }>()

    // let newPreserveJarsCount = 0
    // for (const [cropName, setting] of settingsRef.value.cropSettings) {
    //   if (setting.processAs === ItemType.Preserve && setting.isActive) {
    //     newPreserveJarsCount += setting.crafters
    //     preserveJarsList.set(cropName, {
    //       cropType: setting.cropType,
    //       crafters: setting.crafters,
    //       isStar: setting.isStar,
    //     })
    //   }
    // }

    // return newPreserveJarsCount

    return processor.value.preserveJarsCount

})

const seedCollectors = computed(() => {
return processor.value.seedCollectors
})
const preserveJars = computed(() => {
return processor.value.preserveJars
})

return {
processor,
simulateProcessing,
output,
settings,
updateSettings,
seedCollectorsCount,
preserveJarsCount,
highestCraftingTime,
inventory,
finalGoldValue,
averageGoldValue,
seedCollectors,
preserveJars,
}
})

export default useProcessor

================================================
FILE: stores/useSaveCode.ts
================================================
import { defineStore } from 'pinia'

export const useSaveCode = defineStore('saveCode', () => {
const val = ref('')
const code = computed(() => val.value)
const set = (newVal: string) => {
val.value = newVal
}

const link = computed(() => {
return `https://palia-garden-planner.vercel.app/?layout=${val.value}`
})

const linkMarkdown = computed(() => {
return `[Palia Garden Planner](${link.value})`
})

return {
code,
set,
link,
linkMarkdown,
}
})

================================================
FILE: stores/useSelectedItem.ts
================================================
import { defineStore } from 'pinia'
import { Crop, Fertiliser } from '@/assets/scripts/garden-planner/imports'

export type SelectedItem = Crop | Fertiliser | 'crop-erase' | 'fertiliser-erase' | null

export enum SelectedItemType {
Crop = 'crop',
Fertiliser = 'fertiliser',
CropErase = 'crop-erase',
FertiliserErase = 'fertiliser-erase',
}

export function getSelectedItemType(item: SelectedItem): SelectedItemType | null {
if (!item)
return null

if (item === 'crop-erase')
return SelectedItemType.CropErase
if (item === 'fertiliser-erase')
return SelectedItemType.FertiliserErase
if (item instanceof Crop)
return SelectedItemType.Crop
if (item instanceof Fertiliser)
return SelectedItemType.Fertiliser

return null
}

export const useSelectedItem = defineStore('selectedItem', () => {
const selectedItem = ref<SelectedItem>(SelectedItemType.CropErase)

const hoveredItem = ref<SelectedItem | null>()

function select(item: SelectedItem) {
selectedItem.value = item
}

function hover(item: SelectedItem | null){
hoveredItem.value = item
}

const type = computed(() => {
return getSelectedItemType(selectedItem.value as SelectedItem)
})

const hoverType = computed(() => {
return getSelectedItemType(hoveredItem.value as SelectedItem | null)
})

const val = computed(() => selectedItem.value)

const hoverVal = computed(() => hoveredItem.value)

return {
select,
val,
type,
hover,
hoverVal,
hoverType
}
})

================================================
FILE: stores/useSettingsCode.ts
================================================
import { defineStore } from 'pinia'

export const useSettingsCode = defineStore('settingsCode', () => {
const val = ref('')
const includeSettingsCode = ref(true)

const code = computed(() => (includeSettingsCode.value ? val.value : ''))
const set = (newVal: string) => {
val.value = newVal
}

// Add a flag to track if an update is requested, mostly from loading a layout
const updateIsRequestedVal = ref(false)
const updateIsRequested = computed(() => updateIsRequestedVal.value)
const requestUpdate = () => {
updateIsRequestedVal.value = true
}
const resetUpdateRequest = () => {
updateIsRequestedVal.value = false
}

return {
code,
set,
updateIsRequested,
requestUpdate,
resetUpdateRequest,
includeSettingsCode
}
})

================================================
FILE: stores/useToasts.ts
================================================
import { defineStore } from 'pinia'
import { ref } from 'vue'
import uniqid from 'uniqid'
export interface Toast {
message: string
type: string
duration: number
id?: string
}

export const useToasts = defineStore('toasts', () => {
const toasts = ref<Toast[]>([])

function addToast(toast: Toast) {
toasts.value.push({
...toast,
id: uniqid()
})
}

function removeToast(id: string) {
if (!id) {
console.error('Toasts', toasts.value)
throw new Error('toast was created without ID', {
cause: toasts
})
}

    toasts.value = toasts.value.filter(t => t.id !== id)

}

return {
toasts,
addToast,
removeToast,
}
})

================================================
FILE: stores/useUiSettings.ts
================================================
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

interface UISettings {
floatComponentLocation: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
toastsLocation: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
cropTile: {
showBonusIcons: boolean;
showBonusBackground: boolean;
};
}

export const useUiSettings = defineStore('uiSettings', () => {
const settings = ref<UISettings>({
floatComponentLocation: 'bottom-right',
toastsLocation: 'top-center',
cropTile: {
showBonusIcons: true,
showBonusBackground: true,
},
});

const loadInitialised = ref(false);

function saveSettings(newSettings: UISettings) {
settings.value = newSettings;
localStorage.setItem('ui-settings', JSON.stringify(newSettings));
}

function loadSettings() {
const savedSettings = localStorage.getItem('ui-settings');

    if (savedSettings) {
      // Ensure the settings have all the properties of UISettings
      let newSettings = JSON.parse(savedSettings) as UISettings;
      // If any properties are missing, add them with default values
      if (!newSettings.floatComponentLocation) newSettings.floatComponentLocation = 'bottom-right';
      if (!newSettings.toastsLocation) newSettings.toastsLocation = 'top-center';
      if (!newSettings.cropTile) newSettings.cropTile = {
        showBonusIcons: true,
        showBonusBackground: true,
      };

      saveSettings(JSON.parse(savedSettings));
    }

}

watch(settings, (newSettings) => {
// Prevents the initial settings from being saved to local storage before they are even loaded.
if (loadInitialised.value) {
saveSettings(newSettings);
}
}, { deep: true })

onMounted(() => {
loadInitialised.value = true;
loadSettings();
});

return { settings };
});

================================================
FILE: utils/formatters.ts
================================================
/\*\*

- Formats a duration in minutes into a string like "Xh Ym" or "Ym".
- @param totalMinutes - The total number of minutes.
- @returns A formatted string representing the duration.
  \*/
  export function formatMinutesToHoursMinutes(totalMinutes: number): string {
  if (totalMinutes < 0) return 'N/A';
  if (totalMinutes === 0) return '0m';

const hours = Math.floor(totalMinutes / 60);
const minutes = Math.round(totalMinutes % 60);

let result = '';
if (hours > 0) {
result += `${hours}h`;
}
if (minutes > 0) {
if (result.length > 0) result += ' ';
result += `${minutes}m`;
}

// Ensure something is returned even if rounding leads to 0m (e.g., 0.1 minutes)
return result || '0m';
}

/\*\*

- Formats a duration in minutes into a string like "Xd Yh Zm", "Yh Zm", or "Zm".
- @param totalMinutes - The total number of minutes.
- @returns A formatted string representing the duration.
  \*/
  export function formatMinutesToDaysHoursMinutes(totalMinutes: number): string {
  if (totalMinutes < 0) return 'N/A';
  if (totalMinutes === 0) return '0m';

const days = Math.floor(totalMinutes / (60 _ 24));
const remainingMinutesAfterDays = totalMinutes % (60 _ 24);
const hours = Math.floor(remainingMinutesAfterDays / 60);
const minutes = Math.round(remainingMinutesAfterDays % 60);

let result = '';
if (days > 0) {
result += `${days}d`;
}
if (hours > 0) {
if (result.length > 0) result += ' ';
result += `${hours}h`;
}
if (minutes > 0) {
if (result.length > 0) result += ' ';
result += `${minutes}m`;
}

// Ensure something is returned even if rounding leads to 0m (e.g., 0.1 minutes)
return result || '0m';
}

/\*\*

- Formats a duration in minutes into an object with hours and minutes.
- @param totalMinutes - The total number of minutes.
- @returns An object containing the actual value, hours, and minutes.
  \*/
  export function formatMinutesToHoursMinutesObject(totalMinutes: number): {
  actualValue: number;
  hours: number;
  minutes: number;
  } {
  if (totalMinutes < 0) {
  return {
  actualValue: totalMinutes,
  hours: 0,
  minutes: 0,
  };
  }

return {
actualValue: totalMinutes,
hours: Math.floor(totalMinutes / 60),
minutes: Math.round(totalMinutes % 60),
};
}

/\*\*

- Formats a duration in minutes into an object with days, hours, and minutes.
- @param totalMinutes - The total number of minutes.
- @returns An object containing the actual value, days, hours, and minutes.
  \*/
  export function formatMinutesToDaysHoursMinutesObject(totalMinutes: number): {
  actualValue: number;
  days: number;
  hours: number;
  minutes: number;
  } {
  if (totalMinutes < 0) {
  return {
  actualValue: totalMinutes,
  days: 0,
  hours: 0,
  minutes: 0,
  };
  }

const days = Math.floor(totalMinutes / (60 _ 24));
const remainingMinutesAfterDays = totalMinutes % (60 _ 24);
const hours = Math.floor(remainingMinutesAfterDays / 60);
const minutes = Math.round(remainingMinutesAfterDays % 60);

return {
actualValue: totalMinutes,
days,
hours,
minutes,
};
}
