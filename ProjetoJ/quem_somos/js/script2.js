let menu = document.getElementById("menu_links");
let menu_barras = document.getElementById("menu_hamburguer");

function mostrarMenu() {

	if (window.getComputedStyle(menu).display == "none") {
		document.getElementById("menu_links").style.display = "flex";
		menu_barras.setAttribute("aria-label", "fechar menu");
		menu_barras.setAttribute("aria-expanded", "true");
	}
	else {
		menu.style.display = "none"
		menu_barras.setAttribute("aria-label", "abrir menu");
		menu_barras.setAttribute("aria-expanded", "false");
	}
}