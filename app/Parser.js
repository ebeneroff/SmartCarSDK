var Parser = function(name, method, headers, body){
	var html = "";
	html += "<div id=" + name + "></div";
	html += "<script type='text/javascript' src='./index.js></script>";
	html += "<script type='text/javascript'>";
	html += "explorer('" + name + "', {";
	html += "url: 'https://explorer.smartcar.com/developer',"
	html += "method: '" + method + "',";
	html += "headers: {" + headers + "},";
	if(body){
		html += "body:[{" + body + "}],"
	}
	html += "});";
	html += "</script>";
	return html;
};