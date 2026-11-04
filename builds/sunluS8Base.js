module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    meta: {
        stable_name: "sunlu_s8_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "sunlu_s8_4.2.2-{{current_date}}-base-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            // Sunlu S8 identification
            ["STRING_CONFIG_H_AUTHOR", "(Sunlu S8, Creality 4.2.2)"],
            ["CUSTOM_MACHINE_NAME", "Sunlu S8"],

            // Serial ports
            ["SERIAL_PORT", 1],

            // Motherboard
            ["MOTHERBOARD", q`BOARD_CREALITY_V422`],

            // Driver types: the "C" chip on the SD-card label is an HR4988.
            // Marlin has no HR4988 driver type; HR4988 is driven exactly like A4988.
            ["X_DRIVER_TYPE", q`A4988`],
            ["Y_DRIVER_TYPE", q`A4988`],
            ["Z_DRIVER_TYPE", q`A4988`],
            ["E0_DRIVER_TYPE", q`A4988`],

            // Sunlu S8 Physical Dimensions
            ["X_BED_SIZE", 310],
            ["Y_BED_SIZE", 310],
            ["Z_MAX_POS", 400],

            // Stepper Inversion
            ["INVERT_X_DIR", true],
            ["INVERT_Y_DIR", true],
            ["INVERT_Z_DIR", false],
            ["INVERT_E0_DIR", true],

            // Screen: use the Creality 12864 (ST7920) pin mapping from the board's
            // pins file. The Sunlu S8 display is electrically the same panel, so
            // CR10_STOCKDISPLAY + RET6_12864_LCD gives the correct PB12/PB13/PB15 wiring.
            // Do NOT enable REPRAP_DISCOUNT_FULL_GRAPHIC_SMART_CONTROLLER: the
            // Creality V4/V422 pins file only defines LCD_PINS_* for CR10_STOCKDISPLAY.
            "CR10_STOCKDISPLAY",
            "RET6_12864_LCD",

            // Nozzle park for filament change
            "NOZZLE_PARK_FEATURE",

            // 3Dman Extruder E-Steps (3:1 Gear Reduction)
            ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 395]],

            // Filament Runout Sensor
            "FILAMENT_RUNOUT_SENSOR",
            ["FIL_RUNOUT_ENABLED_DEFAULT", true],
            ["NUM_RUNOUT_SENSORS", 1],
            ["FILAMENT_RUNOUT_SCRIPT", "M600"],
            ["FIL_RUNOUT_STATE", q`LOW`],
            "FIL_RUNOUT_PULLUP",

            // Bed leveling helper menu
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER"
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            // Octoprint support
            "HOST_ACTION_COMMANDS",

            // Advanced pause for M600 filament change
            "ADVANCED_PAUSE_FEATURE"
        ]
    }
};
