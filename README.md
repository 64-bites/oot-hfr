# OoT HFR

Early test release.

A fan patch that runs The Legend of Zelda: Ocarina of Time (USA 1.0) at higher frame rates on N64 hardware. Game logic stays at the original 20 updates per second, so the game does not run faster.

**Patcher page: https://64-bites.github.io/oot-hfr/**

No ROM comes with this patch. You need your own legally obtained copy of the game. This project is free, and it is not affiliated with or endorsed by Nintendo.

## Install

1. Open the patcher page.
2. Choose your USA 1.0 ROM. `.z64`, `.n64` and `.v64` files all work. The ROM stays on your computer, and the page does not upload or store it.
3. Your browser saves `OoT HFR.z64`. Your original file does not change.
4. Copy that file to your flash cart, or open it in an emulator.

The patcher rejects any other version of the game. It checks your ROM and the result by MD5.

To use your own patcher, take the BPS file from the Releases page and apply it to a `.z64` ROM.

## Requirements

- USA 1.0 ROM, MD5 `5bd1fe107bf8106b2ab6650abecd54d6` (`.z64` byte order). The patched ROM has MD5 `0ee4a5956d3330b8e869e11dac76ecbe`.
- An Expansion Pak for the settings below. Without one, the game runs as Standard with full anti-aliasing, and hides both settings.

## Settings

- **Before you start a game:** on the file select screen, open Options and move down to Performance. Move the stick left or right to change it. Anti-aliasing is the next row down.
- **During a game:** press Start, then B, move the stick down to Options, and press A. Move to a row and press A to choose it. The last row switches Anti-aliasing. Press B to return. Changes take effect when the pause menu closes.

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

- Some motion can still look stepped at high frame rates: the start of a thrown cuckoo's arc, the Biri jellyfish's tentacles, the wobble of the rooms inside Jabu-Jabu's Belly, Barinade's electricity, and the slow drift of some water textures.
- Sword trails and some effects update at 20 per second.
- The patch is tested on an FPGA N64 and an original N64, each with a flash cart, and in the ares emulator.

## Changes

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
