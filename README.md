# Sunlu S8 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Sunlu S8 printer retrofitted with a Creality 4.2.2(512K) board.
You can find both stable and nightly (`bugfix-2.1.x`) downloads on the repository releases.

**Important**
* Make sure you have a 4.2.2 512K flash board before installing. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`.
* This configuration uses HR4988 stepper drivers (A4988 in Marlin).
* Original Sunlu S8 display requires custom wiring to the Creality 4.2.2 board. See the [wiring documentation](sunlu-s8-creality-4.2.2.md) for details.

## Builds

### sunluS8Base

Base configuration for Sunlu S8 with:
- Creality 12864 (ST7920) display mapping (`CR10_STOCKDISPLAY` + `RET6_12864_LCD`), which is the only LCD pin set defined by the Creality 4.2.2 pins file
- Filament runout sensor enabled with pull-up resistor
- 3Dman extruder with 3:1 gear reduction (395 e-steps)
- Bed dimensions: 310x310x400
- HR4988 stepper drivers (configured as `A4988` in Marlin)
- Specific stepper inversions (X, Y, E0 inverted; Z not inverted)
- Bed leveling helper menu
- OctoPrint support

### sunluS8AutoLevel5x5 / sunluS8AutoLevel7x7

Base + automatic BLTouch leveling with 5x5 or 7x7 grid.
- BLTouch on PB1 pin (dedicated BLTouch port)
- Nozzle-to-probe offset: -44, -7, 0
- 15mm probing margin
- Symmetrical grid with 45mm margin on left/right and 15mm on front/back
- Z-offset wizard enabled
- Z-safe homing enabled
- M48 accuracy test enabled

**Important**: These builds assume you are using the dedicated BLTouch port on the board and have the Z-stop disconnected. It will not work if you are using the Z-stop port for the probe.

### sunluS8ManualMesh5x5 / sunluS8ManualMesh7x7

Base + manual mesh leveling with 5x5 or 7x7 grid.
- Manual probe mesh leveling
- Restore leveling after G28
- LCD bed leveling menu
- Mesh edit menu enabled

## Build your own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on GitHub.

## Hardware Configuration

For detailed wiring diagrams and hardware setup instructions, see [sunlu-s8-creality-4.2.2.md](sunlu-s8-creality-4.2.2.md).

**Key hardware requirements:**
- Display: Custom cross-over wiring required (14-pin to 10-pin EXP1)
- Dual Z-Motors: Parallel Y-splitter cable to single Z-motor port
- BLTouch: 5-pin cable to dedicated BLTouch port, disconnect mechanical Z-endstop
- Filament sensor: 2-wire connection to FIL-DET port (Signal and Ground)
