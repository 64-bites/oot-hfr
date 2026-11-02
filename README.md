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

- USA 1.0 ROM, MD5 `5bd1fe107bf8106b2ab6650abecd54d6` (`.z64` byte order). The patched ROM has MD5 `9bdac90166b3f6005b8dd9ac5e8b15bf`.
- An Expansion Pak for any setting above Standard. Without one, the game runs as Standard and hides the Options entry.

## Choose a setting

- **Before you start a game:** on the file select screen, open Options and move down to Performance. Move the stick left or right to change the setting.
- **During a game:** press Start, then B, move the stick down to Options, and press A. The setting takes effect when the pause menu closes.

The game remembers your setting.

| Setting | What it does |
|---|---|
| Standard (20 fps) | The original frame rate. |
| Enhanced (up to 30 fps) | Falls to 20 under load, to keep the pacing even. |
| Variable (smoothed) | Up to 60 fps. Lowers its target under load, to keep the pacing even. |
| Variable | Up to 60 fps. Never lowers its target, so the pacing may vary. |

## What to expect

The higher settings are for overclocked hardware. Rates depend on your console and the scene. These are bench results from 13 scenes, on a scripted walk. Real play can differ.

| Console | Enhanced | Variable (smoothed) |
|---|---|---|
| FPGA N64, overclocked | 30 fps in all 13 scenes | 58 fps or better in 9 of 13 scenes |
| FPGA N64, stock speed | About 30 fps in 4 of 13 scenes, 20 to 24 in the others | About 30 fps in 5 of 13 scenes, 19 to 25 in the others |
| Original N64 console | Not tested | Not tested |

In play at stock speed, expect mostly 20 fps, the same as the original game. 30 fps holds only when little is on screen.

## Known limits

- The Z-targeting letterbox bars step at the game's update rate.
- Some animations can look stepped, such as auto-jumps, Z-targeting backflips, a thrown cuckoo, and horses' legs at high frame rates.
- The sky can stutter during very fast camera pans.
- Sword trails and some effects update at 20 per second.
- The patch is tested on an FPGA N64 with a flash cart, and in the ares emulator.

## How it was made

Made with [Claude Code](https://claude.com/claude-code), an AI coding agent, working from the [Ocarina of Time decompilation project](https://github.com/zeldaret/oot).

The patcher page uses modules from [Rom Patcher JS](https://github.com/marcrobledo/RomPatcher.js) by Marc Robledo, under the MIT License.
