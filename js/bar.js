document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");
    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.5 
    };

    const startAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let bar = entry.target;
                let targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth + "%";
                observer.unobserve(bar);
            }
        });
    };

    const observer = new IntersectionObserver(startAnimation, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});