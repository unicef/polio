'use strict';

function tokenize(s, sep) {
	return s.split(sep).filter(function (tok) {
		return tok.length > 0;
	});
}

module.exports = {
	tokenize: tokenize
};
