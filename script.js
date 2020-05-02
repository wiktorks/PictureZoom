const getZoomedImage = (image) => {
    return image.parentElement.getElementsByClassName("zoomed")[0];
}

function zoomOnHover(event) {
    let image = event.target;
    let originalSizedImageURL = image.getAttribute("data-src");
    let imageZoom = getZoomedImage(image);
    
    imageZoom.style.backgroundImage = `url(${originalSizedImageURL})`;
    imageZoom.classList.add("visible");
}

function moveImage(event) {
    let image = event.target;
    let imageZoom = getZoomedImage(image);
    let absoluteImgPos = image.getBoundingClientRect();
    
    let mouseX = event.clientX - absoluteImgPos.left;
    let mouseY = event.clientY - absoluteImgPos.top;
    
    let zoomPosX = mouseX / image.clientWidth * 100;
    let zoomPosY = mouseY / image.clientHeight * 100;

    imageZoom.style.backgroundPosition = `${zoomPosX}% ${zoomPosY}%`;
}

function deleteImage(event) {
    let image = event.target;
    getZoomedImage(image).classList.remove("visible");
}