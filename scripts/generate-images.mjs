// Generate images with precise tileable aspect ratios (16:9 base)
import sharp from 'sharp';
import { mkdir, rm } from 'fs/promises';
import { join } from 'path';

const outputBase = './src/static/img';
const categories = ['highlight', 'portrait', 'landscape'];

// Vibrant palette
const colors = [
    '#E6C4A8', '#A8C4B8', '#C9A8C4', '#A8B8D4', '#D4C4A0',
    '#8CB8C4', '#C4A8A8', '#B8C4A8', '#C4B8D4', '#A8C4C4',
    '#D4B8A8', '#A8B4C0', '#C4C4A8', '#B8A8C4', '#C0C4B8',
    '#D4A8B8', '#A8C0B4', '#C4B4A8', '#B4C4C0', '#C8B8B4'
];

/*
  Layout Logic: 16:9 Landscape Base
  
  Grid Column Width = 1fr
  
  Landscape (16:9):
  - Spans 1 column. 
  - Height needs to be calculated to match 16:9.
  - If width is W, height is W * (9/16).
  
  Portrait (Vertical Tile):
  - Should tile perfectly with Landscape. 
  - If we want to stack TWO Landscapes to equal ONE Portrait height?
    - 2 * (9/16) = 18/16 = 9/8 aspect ratio (roughly square).
    - Or if we stack 3 landscapes? -> 27/16.
  - Or maybe Portrait spans 1 column but is 9:16 aspect ratio?
  - If P is 9:16 and L is 16:9.
  - To tile, we usually want common multiples.
  
  User Request: "aspect ratios are 16x9 for landscape, and then one which tiles with that for the portait images"
  
  Let's define a "Row Height" in CSS Grid.
  If we set `auto-rows` to a fixed value, we can snap items to it.
  
  Let's say 1 Column = 320px (approx).
  Landscape 16:9 -> Height = 180px.
  
  So we can set `grid-auto-rows: 180px`.
  - Landscape: `col-span-1 row-span-1` (320x180) -> Perfect 16:9.
  - Portrait: `col-span-1 row-span-2` -> (320x360). 
    - 320x360 is roughly 8:9 aspect ratio. This is a nice vertical shot.
  - Highlight: `col-span-2 row-span-2` -> (640x360). 
    - 640x360 is 16:9 aspect ratio! Perfect scaling.
  
  This system works PERFECTLY physically:
  - Base Unit: 16:9 (Landscape)
  - Portrait: 2 units high (8:9)
  - Highlight: 2 units wide, 2 units high (16:9, just 2x bigger)
  
  Dimensions to generate:
  - Landscape: 800 x 450 (16:9)
  - Portrait: 600 x 675 (8:9) -> matches 2 rows of 16:9
  - Highlight: 1200 x 675 (16:9) -> matches 2 cols x 2 rows
*/

const config = {
    // 16:9 Large
    highlight: { count: 3, width: 1280, height: 720 },

    // 8:9 Vertical (Matches 2 stacked landscapes)
    portrait: { count: 18, width: 640, height: 720 },

    // 16:9 Standard
    landscape: { count: 30, width: 640, height: 360 }
};

async function generateImages() {
    try {
        await rm(outputBase, { recursive: true });
    } catch (e) { }

    for (const cat of categories) {
        await mkdir(join(outputBase, cat), { recursive: true });
    }

    console.log('Generating structured 16:9 based images...');

    let colorIdx = 0;

    for (const [cat, cfg] of Object.entries(config)) {
        for (let i = 1; i <= cfg.count; i++) {
            const color = colors[colorIdx % colors.length];
            colorIdx++;

            const image = sharp({
                create: {
                    width: cfg.width,
                    height: cfg.height,
                    channels: 3,
                    background: color
                }
            });

            const filename = join(outputBase, cat, `${i}.jpg`);
            await image.jpeg({ quality: 90 }).toFile(filename);
            console.log(`Created ${cat}/${i}.jpg (${cfg.width}x${cfg.height})`);
        }
    }
}

generateImages().catch(console.error);
