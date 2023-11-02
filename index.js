// document.getElementById('zeitleiste').innerHTML = '<ol><li>html data</li></ol>';

var fr = new FileReader()
var c = fr.readAsText("events/2000.10.24.txt", "UTF-8")
console.log(c)