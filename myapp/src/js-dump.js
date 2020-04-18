
function js_dump(obj) {
	let reply = document.getElementById('output');
	var out = '';
	for (var i in obj) {
		out += i + ": " + obj[i] + "\n";
	}
	var pre = document.createElement('pre');
	pre.innerHTML = out;
	reply.innerHTML = pre;
}
