
export function onToggleMenu() {
    const navItems = document.getElementById("nav-items")

    console.log("Toggle menu!")

    if (navItems.style.display == "none"
        || navItems.style.display == "") {

        navItems.style.display = "flex"
    } else {
        navItems.style.display = "none"
    }
}