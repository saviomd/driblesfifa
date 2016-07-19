/* eslint-disable no-use-before-define */
var driblesfifa = driblesfifa || {};
/* eslint-enable no-use-before-define */

driblesfifa.cache = (function () {
	/*
	recarregar pagina se conteudo foi alterado
	====================
	*/
	applicationCache.onupdateready = function () {
		location.reload();
	};
})();
