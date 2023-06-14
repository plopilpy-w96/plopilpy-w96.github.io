async function initSW_notify() {
    var sw_config = await w96.FS.readstr("c:/user/appdata/slatepanel/config.json");
    var sw_config_parsed = parent.JSON.parse(sw_config);
    var sw_city = sw_config_parsed.location
    var sw_unit = sw_config_parsed.unit
    $('.taskbar-notify').prepend('<div id="slatewthr-notify" style="margin-top: auto;margin-bottom: auto;margin-right: -4px; margin-left: 4px;"><a href="javascript:w96.sys.execCmd(`slatedash`)" style="color: black; text-decoration: none;"></a></div>')
    if (w96.ui.Theme.currentTheme == "xp" && w96.ui.Theme.getActiveVariant() !== "Royale") { document.querySelector("#slatewthr-notify a").style.color = "white" }
    $("#slatewthr-notify a").load("https://wttr.in/" + sw_city + "?format=%c+%t&" + sw_unit, function () { $("#slatewthr-notify a").text($("#slatewthr-notify a").text().replace("+", "")) })
    setInterval(function () { $("#slatewthr-notify a").load("https://wttr.in/" + sw_city + "?format=%c+%t&" + sw_unit, function () { $("#slatewthr-notify a").text($("#slatewthr-notify a").text().replace("+", "")) }) }, 8000);
    console.log("SW loaded.")
}

setTimeout(function () { initSW_notify() }, 800)
