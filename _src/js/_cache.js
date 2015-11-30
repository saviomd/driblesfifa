var driblesfifa = driblesfifa || {};

driblesfifa.cache = (function () {
	/*
	recarregar pagina se conteudo foi alterado
	====================
	*/
	applicationCache.onupdateready = function () {
		location.reload();
	};
})();
