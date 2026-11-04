module.exports = {
    extends: "builds/sunluS8Base.js",
    meta: {
        stable_name: "sunlu_s8_4.2.2-{{marlin_version}}-manual_mesh_7x7-{{uid}}",
        nightly_name: "sunlu_s8_4.2.2-{{current_date}}-manual_mesh_7x7-{{uid}}"
    },
    configuration: {
        enable: [
            "PROBE_MANUALLY",
            ["NOZZLE_TO_PROBE_OFFSET", [0, 0, 0]],
            "MESH_BED_LEVELING",
            "RESTORE_LEVELING_AFTER_G28",
            "LCD_BED_LEVELING",
            "MESH_EDIT_MENU",
            ["GRID_MAX_POINTS_X", 7],
            ["GRID_MAX_POINTS_Y", q`GRID_MAX_POINTS_X`]
        ]
    }
};
