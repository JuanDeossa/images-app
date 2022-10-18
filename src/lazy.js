function intersectionCallback(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src=entry.target.dataset.src
            observer.unobserve(entry.target)
        }
    });
}
const observer=new IntersectionObserver(intersectionCallback)

function registerImage(image){
    observer.observe(image)
}

export default registerImage