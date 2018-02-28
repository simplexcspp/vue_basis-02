(function (doc, win) {
	let docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			const clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			let fontSize = 100 * (clientWidth / 750);
			fontSize = fontSize >= 64 ? 64 : fontSize;
			docEl.style.fontSize = fontSize + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
