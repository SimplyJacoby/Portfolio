const NAV_WIDTH = 24;

var navBarOpen = false;

function openNavBar() {
    if (!navBarOpen) {
        document.getElementById("nav-container").style.display = "block";
        navBarOpen = true;
        
        (function changeNavWidth(n) {

            if (n < NAV_WIDTH) setTimeout(function () {
                changeNavWidth(n);
            }, 4);
            document.getElementById("nav-container").style.width = (n).toString() + "%";
            n+=3;
          
        } (1));
    }
    else {
        navBarOpen = false;

        (function changeNavWidth(n) {

            if (n >= 0) setTimeout(function () {
                changeNavWidth(n);
            }, 4);
            else {
                document.getElementById("nav-container").style.display = "none";
            }
            document.getElementById("nav-container").style.width = (n).toString() + "%";
            n-=3;
          
        } (NAV_WIDTH));
    }
}


