function nav_click(text) {
    if (text == 'open') {
        document.getElementById("menu").className = "navimg_show_close";
        document.getElementById("cross").className = "navimg_show_open";
        document.getElementById("drop-down-menu").className = "menu_navlist_open";
    } else {
        document.getElementById("menu").className = "navimg_show_open";
        document.getElementById("cross").className = "navimg_show_close";
        document.getElementById("drop-down-menu").className = "menu_navlist_close";
    }
}
window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;
    if (width > 768) { //to desktop setting
        document.getElementById("drop-down-menu").className = "drop-down-menu";
        document.getElementById("menu").className = "navimg_show_open";
        document.getElementById("cross").className = "navimg_show_close";
    }
}
