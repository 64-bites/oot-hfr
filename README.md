# OoT HFR

Early test release.

A fan patch that runs The Legend of Zelda: Ocarina of Time (USA 1.0) at higher frame rates on N64 hardware. Game logic stays at the original 20 updates per second, so the game does not run faster.

**Patcher page: https://64-bites.github.io/oot-hfr/**

No ROM comes with this patch. You need your own legally obtained copy of the game. This project is free, and it is not affiliated with or endorsed by Nintendo.

## Install

There are two ways to install. Both give the same ROMs.

**The patcher page (the easy way)**

1. Open the patcher page.
2. Tick the options you want. Today there is one: Text Speed.
3. Choose your USA 1.0 ROM. `.z64`, `.n64` and `.v64` files all work. The ROM stays on your computer, and the page does not upload or store it.
4. Your browser saves one patched ROM with everything you chose: `OoT HFR.z64`, or `OoT HFR Text Speed.z64` with Text Speed. Your original file does not change.
5. Copy that file to your flash cart, or open it in an emulator.

The patcher rejects any other version of the game. It checks your ROM and the result by MD5.

**Your own patcher**

Take one BPS file from the Releases page and apply it to a `.z64` ROM. Each file is a complete patch for the original ROM. Do not apply one on top of the other.

| File | What you get | MD5 of the patched ROM |
|---|---|---|
| `OoT-HFR-usa-1.0.bps` | OoT HFR | `a416425c8d439d4a455b17982d16e43d` |
| `OoT-HFR-TextSpeed-usa-1.0.bps` | OoT HFR with the Text Speed option | `18dcedb44e848bfd48ecccfdfaf03129` |

Both ROMs use the same save format. A flash cart keeps one save file for each ROM file, so when you change from one ROM to the other, copy your save file and give the copy the new ROM's name. A save from the Text Speed ROM keeps its Text Speed value when you play it in the other ROM and come back.

## Requirements

- USA 1.0 ROM, MD5 `5bd1fe107bf8106b2ab6650abecd54d6` (`.z64` byte order). The MD5 of each patched ROM is in the table above.
- An Expansion Pak. The patch needs one. Without it, the game does not start: the screen shows "This patch needs an Expansion Pak." and stays there. Fit an Expansion Pak, or turn it on in your emulator, and start the game again.

## Settings

The settings are in two places. Both show the same options with the same values.

- **Before you start a game:** on the file select screen, open Options. Below the game's own rows are Performance, Anti-aliasing and Flipbooks, and Text Speed if your ROM has it. The rows work as the game's own rows do: move the stick left or right to change a row's value, move it up or down to change rows, press A to go to the next row, and press B to save and return.
- **During a game:** press Start, then B, move the stick down to Options, and press A. A card with the title "Options" opens. Each option is one line, a name and its value, for example "Performance: Enhanced (up to 30 fps)". Move the stick up or down to a line and press A to step to its next value. After the last value comes the first one again. The value on the line is the value in use. Two lines at the bottom of the card explain the line you are on. Press B to return. Changes take effect when the pause menu closes.

The game remembers your settings.

| Performance | What it does |
|---|---|
| Standard (20 fps) | The original frame rate. |
| Enhanced (up to 30 fps) | Falls to 20 under load, to keep the pacing even. |
| Variable (smoothed) | Up to 60 fps. Lowers its target under load, to keep the pacing even. |
| Variable | Up to 60 fps. Never lowers its target, so the pacing may vary. |

| Anti-aliasing | What it does |
|---|---|
| Full | The original edge smoothing. |
| Reduced | Draws room surfaces faster, with less smoothing on their edges. The higher rates are easier to hold. |

| Flipbook animations | What it does |
|---|---|
| Enhanced | Gives effects that the game animates picture by picture, such as explosions, flames and smoke, new in-between pictures at the higher frame rates. Their color fades are smooth too. It also gives the flickering energy balls of Phantom Ganon and Ganondorf a new angle in every picture. |
| Original | Shows only the game's own pictures. |

### Text Speed (an option of the patcher page, or its own BPS file)

The original game prints the text of a message box slowly. Text Speed makes it print faster. It is in both Options menus, as the last line.

| Text speed | What it does |
|---|---|
| Standard | The original speed. |
| 2x | Text prints at two times the speed. |
| 4x | Text prints at four times the speed. |
| Instant | The whole box of text shows at once. |

- It changes only how fast a message box prints its text. It never closes a box for you and never skips one. A box that waits for you to press A in the original game still waits for A.
- A few boxes do not wait for A in the original game: the game closes them, or goes to the next box, after a set time, and some of them fade in and out. Cutscenes use these. They keep the original pace and close at the same moment as before.
- This text also keeps the original pace at every value: text that the game slows down on purpose, the boxes of ocarina songs, the credits, and a choice that a cutscene shows while it runs.
- At Standard, the game behaves as OoT HFR without the option.

## What to expect

The higher settings are for overclocked hardware. Rates depend on your console and the scene. The FPGA rows are bench results from 13 scenes on a scripted walk, measured on an earlier version with full anti-aliasing. Real play can differ.

| Console | Enhanced | Variable (smoothed) |
|---|---|---|
| FPGA N64, overclocked | 30 fps in all 13 scenes | 58 fps or better in 9 of 13 scenes |
| FPGA N64, stock speed | About 30 fps in 4 of 13 scenes, 20 to 24 in the others | About 30 fps in 5 of 13 scenes, 19 to 25 in the others |
| Original N64 console | In play, mostly 20 fps, and 30 fps when few actors are on screen | Not measured |

In play at stock speed, expect mostly 20 fps, the same as the original game. 30 fps holds only when little is on screen.

On an overclocked FPGA N64, Reduced anti-aliasing gave about 5 to 6 fps more in busy scenes at 60 fps.

## Known limits

- Some motion can still look stepped at high frame rates: the start of a thrown cuckoo's arc, and the slow drift of some water textures.
- At the fastest point of a sword swing, the blade and its trail move 20 times a second for one game update.
- When Volvagia comes out of the lava, its large clouds of fire lower the rate for a second or two. The original game slows down here too, to about 12 to 14 fps on a stock console. This version draws the clouds faster: in a bench run on a stock console, the worst moment is about 16 fps at Standard and about 19 fps at the higher settings. On an overclocked FPGA N64 at Variable, the lowest rate went from about 20 fps to about 33 to 35 fps.
- Some things that the game turns to a random angle at each update keep that flicker at 20 per second, by design, while their movement is smooth: the pieces of a rupee broken in the shooting gallery and, with Flipbook animations set to Original, Phantom Ganon's and Ganondorf's energy balls.
- The patch needs an Expansion Pak. A console without one shows a notice and does not start the game.
- At the higher frame rates, when Link takes out the ocarina while he is running, his legs can jiggle during the camera zoom. A fix is in work.
- This version is tested on an FPGA N64 with a flash cart. The Expansion Pak notice is tested on an original N64 with a flash cart.

## Changes

**v0.6.0**

- New option: Text Speed (Standard, 2x, 4x, Instant), as an option of the patcher page or as its own BPS file. Message boxes print their text faster. Timed text keeps its own pace.
- Fixes a rare freeze at high frame rates with an Expansion Pak. It was a known issue of every earlier version.
- Fixes a rare stop of about 90 seconds when the pause menu opens or when you change equipment. It was a known issue of earlier versions.
- New Options card in the pause menu: the title is "Options", each option is one line with its name and value, and A steps the value.
- On the file select screen, the patch's Options rows work as the game's own rows: the stick changes a value and moves between rows, A goes to the next row, B saves and returns.
- The patch now needs an Expansion Pak. Without one, the game shows a notice and does not start.
- Reflections on shiny surfaces, such as the Master Sword's blade, move smoothly at high frame rates.
- During the Song of Storms, the color fade of the layer over the screen is smooth at high frame rates. So are the color fades of Din's Fire, Farore's Wind and the Great Fairy's beam, and the blue light in the Temple of Time when Link pulls the Master Sword.
- At Variable and Variable (smoothed), the game does less work for each picture and prepares the next picture earlier. Busy scenes can show more pictures a second.
- The Market draws faster. Volvagia's clouds of fire cost less: the worst moment of its entrance is faster at every setting. See Known limits above.

**v0.5.0**

- Fixes characters, enemies and chests that could fail to appear in busy rooms. In the Fire Temple, this could leave a room's doors shut. With an Expansion Pak, the game now gives them a much larger block of memory.
- The effects of the songs are smooth at high frame rates: the Song of Time's blue vignette, and the effects of Epona's Song, Saria's Song, Scarecrow's Song, the Song of Storms and the Sun's Song.
- In the Fire Temple, the puffs of fire from the flame jets and the fireballs of the moving fire platform no longer move back and forth.
- The Great Fairy's sparkles are smooth at high frame rates.
- Smoother at high frame rates: the Poe Sisters' torches and flame trails, the fireballs of Anubis, the glow of the light that the Mirror Shield reflects, and the floor tiles that fall in Ganondorf's fight.
- Fixes a rare fault: when the game skipped drawing an update because its drawing memory was full, the next pictures could use old data.

**v0.4.0**

- New setting, Flipbook animations, in both Options menus. Enhanced (the default) gives effects that the game animates picture by picture new in-between pictures at the higher frame rates: explosions, flames, smoke, hit sparks, dust, Barinade's electricity, the Biri jellyfish's tentacles, the lava in Dodongo's Cavern and more. Their color fades are smooth too. Enhanced also gives the flickering energy balls of Phantom Ganon and Ganondorf a new angle in every picture. Original shows only the game's own pictures.
- Sword trails now grow with the blade instead of reaching ahead of it. The same holds for arrows, the boomerang and the weapons of enemies such as Stalfos, Lizalfos and Iron Knuckles.
- Smoother at high frame rates: the boomerang, the hookshot's chain, Phantom Ganon's and Ganondorf's energy balls, the light around a new sage, the flames in the Deku Tree Sprout's story, the walls inside Jabu-Jabu's Belly, the waterfall under King Zora, rolling Gorons, the pieces of a rupee broken in the shooting gallery, Freezards, Morpha's core, Volvagia's mane, and the fishing rod, lure and line.
- The pause menu's item cursor shows again. In v0.3.0 it could be missing.

**v0.3.0**

- In the pause menu's Options card, A chooses a row and the card stays open. B returns. The card now covers the whole save page.
- Smoother at high frame rates: horses, the Z-targeting triangles and the arrow over a target, the Z-targeting letterbox bars, the fade when you enter a house, the wipe between some scenes, and moving textures such as water, waterfalls, lava and torch flames.
- The fade when you enter a house now also covers the corners of the screen. The original game leaves them uncovered, and modern displays show them.
- Opening the pause menu no longer flashes garbage at the top of the screen.

**v0.2.0**

- New Anti-aliasing setting. Reduced draws room surfaces faster.
- With the Expansion Pak, the depth buffer uses the Pak's memory. Drawing is slightly faster, mostly at stock speed.
- The sky no longer stutters when you switch to first person or pan the camera quickly.
- The camera no longer hitches when it pans past the sun.
- The Great Fairy's appearance, and Link as he walks in her fountain, no longer look stepped.
- Auto-jumps, Z-targeting backflips and rolling uphill no longer look stepped. A thrown cuckoo is smooth after the start of its arc.
- At 60 fps, the motion stays even when the console falls behind for a moment.

**v0.1.0**

- First test release.

## How it was made

Made with [Claude Code](https://claude.com/claude-code), an AI coding agent, working from the [Ocarina of Time decompilation project](https://github.com/zeldaret/oot).

The patcher page uses modules from [Rom Patcher JS](https://github.com/marcrobledo/RomPatcher.js) by Marc Robledo, under the MIT License.
