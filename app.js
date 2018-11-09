// document.write("test");
// create the array of images
var allPics = ["/images/blurryfireworx.jpeg","/images/fireworxonground.jpeg","/images/goldfireworx.jpeg","/images/heartfireworx.jpeg","/images/fireworxinthesky.jpeg"];
// imagesLength will always be the last image in the array;
var imagesLength = allPics.length-1;
// currentPic will be our position in the array
var currentPic = 0;

var changePic = (dog) => {
    
    currentPic += dog;
    if (currentPic > imagesLength) {
        currentPic = 0;
    }
    if (currentPic < 0) {
        currentPic = imagesLength;
    }
    document.getElementById("photo").src = allPics[currentPic];

}