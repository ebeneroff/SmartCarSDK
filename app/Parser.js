var Parser = function(name, method, headers, body){
	var html = "";
	html += "<div id='" + name + "'></div \n";
	html += "<script type='text/javascript' src='./index.js></script> \n";
	html += "<script type='text/javascript'>\n";
	html += "  explorer('" + name + "', {\n";
	html += "	url: 'https://explorer.smartcar.com/developer',\n"
	html += "	method: '" + method + "',\n";
	html += "	headers: {" + headers + "},\n";
	if(body != ""){
		html += "  body:[{\n 	" + body + "\n}],\n"
	}
	html += "});\n";
	html += "</script>\n";
	return html;
};

module.exports = Parser;