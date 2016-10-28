var Parser = function(name, method, headers, body, url){
	var html = "";
	html += "<div id='" + name + "'></div \n";
	//html += "<script type='text/javascript' src='./index.js></script> \n";
	html += "<script type='text/javascript'>\n";
	html += "  explorer('" + name + "', {\n";
	html += "   url: '" + url + ",\n"
	html += "   method: '" + method + "',\n";
	html += "   headers: {\n      " + headers + "\n   },\n";
	if(body != undefined){
		html += "   body:[{\n 	" + body + "\n   }],\n"
	}
	html += "});\n";
	html += "</script>\n";
	return html;
};

module.exports = Parser;