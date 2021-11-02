var image=["./image/image1.jpg","./image/image2.jpg","./image/image3.jpg","./image/image4.jpg","./image/image5.jfif","./image/image6.jpg","./image/image7.jpg"];
var currentImage=0;



function previousButton(){
    console.log(currentImage)
    currentImage--;
    if(currentImage<0) {
       
        currentImage=image.length-1;
    }
    document.getElementById("fullContainer").style.backgroundImage=`url("${image[currentImage]}")`;
}
function nextButton(){
    console.log(currentImage)
    currentImage++;
    if(currentImage>(image.length-1)) {
       
        currentImage=0;;
    }
    document.getElementById("fullContainer").style.backgroundImage=`url("${image[currentImage]}")`;
}