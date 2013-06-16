function convertBold(text) {
	if (!text || /^\s*$/.test(text)) {
		return '';
	}
	var matchRet = text.match(/([^\*]*)\*([^\*]*)\*([^\*]*)/);
	if (!matchRet) {
		return text;
	}

	return  matchRet[1] + '<strong>' + matchRet[2] + '</strong>' +　matchRet[3];
}