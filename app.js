$("Document").ready(function () {
    let images = ['./images/Screenshot (22).png',"./images/Screenshot (2).png", './images/Screenshot (21).png', 
    './images/Screenshot (20).png', './images/Screenshot (23).png',"./images/Screenshot (18).png",
    "./images/Screenshot (19).png","./images/Screenshot (14).png"];
    const next = $("#btnNext");
    const prev = $("#btnPrev");
    const mySlide = $("#mySlides");
    let currentIndex = 0;
    
    next.click(slider);
    prev.click(slider);


    setInterval(slider, 3000);

    function slider(){
        let imagesLength = images.length;
        if (currentIndex < imagesLength - 1) {
            currentIndex++;
            mySlide.attr('src', images[currentIndex]);
        }
        else {
            currentIndex === imagesLength - 1;
            currentIndex = 0;
            mySlide.attr('src', images[currentIndex]);
        }
    }
})
