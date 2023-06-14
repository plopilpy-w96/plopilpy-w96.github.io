# SlatePanel
## Introduction
Hello! Thank you for installing SlatePanel! You're currently running version <span id="latestver-sp"></span>.

Please refer to the config setup guide below to see how to set up SlatePanel.

<script>
$("#latestver-sp").load("https://plopilpy.github.io/latest-sp.txt")
</script>


<br><br><br><br>
## Setting Up the Config
<font size="4"><u>Below is a list of possible options for the 2 config values in sw_config.json:</u></font><br>

**Location/city/region:**
The *location* value cannot be left blank. This location can be a country, city, street, or basically any location. For more info, Below is a list of example values for locations:

<u>city name</u> (ex. "paris")<br>
<u>any location</u> (+ for spaces, ex. "Eiffel+tower")<br>
<u>Unicode name</u> of any location in any language (ex. "Москва")<br>
<u>airport code</u> (3 letters, ex. "muc")<br>
<u>domain name</u> (ex. "@windows96.net")<br>
<u>area code</u> (ex. "94107")<br>
<u>GPS coordinates</u> (ex. "-78.46,106.79")<br>
<br>

**Unit/Format:**
The *unit* value can be left blank. This value represents whether <span style="font-size: 8px; vertical-align: middle;">(weather?)</span> to show the temperature in farenheit or celsius. To set it to celsius, set the unit value to **"m"**. To set it to farenheit, set the value to **"u"**. If left blank, it will default to celsius.
