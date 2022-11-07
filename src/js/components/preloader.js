function preloader(preloader) {
    const loader = document.querySelector(preloader);

    if (loader) {
        setTimeout(() => {
            loader.children[0].classList.add('active');
        }, 1500);
        setTimeout(() => {
            loader.classList.add('remove');
        }, 3500);
        setTimeout(() => {
            loader.remove();
        }, 5500);
    }
};

preloader('.preloader');