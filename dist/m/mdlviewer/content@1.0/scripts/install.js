let assocs = JSON.parse(await w96.FS.readstr("C:/system/etc/apps.json"));
assocs.push({ "name": "Model Viewer", "icon": "C:/local/mdlviewer/icon.png", "exec": "model-viewer", "assoc": ["glb", "gltf"] });
await w96.FS.writestr("C:/system/etc/apps.json", JSON.stringify(assocs, null, 4));