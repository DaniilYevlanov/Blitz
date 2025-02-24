const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = 100;
        const increment = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 100);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
