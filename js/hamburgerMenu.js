const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");

    btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", !expanded);

        // Animasi garis hamburger
        bar1.classList.toggle("rotate-45");
        bar1.classList.toggle("translate-y-2");
        bar2.classList.toggle("opacity-0");
        bar3.classList.toggle("-rotate-45");
        bar3.classList.toggle("-translate-y-2");

        // Animasi menu muncul
        menu.classList.toggle("opacity-0");
        menu.classList.toggle("pointer-events-none");
        menu.classList.toggle("scale-95");
        menu.classList.toggle("-z-10");
    });