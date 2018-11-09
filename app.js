// document.write("test");
// create the array of images
var imgs = [
    "images/blurryfireworx.jpeg",
    "images/fireworxonground.jpeg",
    "images/goldfireworx.jpeg",
    "images/heartfireworx.jpeg",
    "images/fireworxinthesky.jpeg"
];

// imagesLength will always be the last image in the array;
var imgLen = imgs.length - 1;
// currentPic will be our position in the array
var idx = 0;

var changePic = (dir) => {
    // if the current index + the click direction (1 or -1) is greater than the index of the last image
    //      then (imgs[idx*=0]) set the current pic index to 0 which basically means get the first image
    // else 
    //      if the current index + click direction is less than 0 ( meaning back was pressed and you were on the first image )
    //          then set the current pic to the last image index
    //      else
    //          just go to the next image      
    document.getElementById('photo').src = (idx + dir) > imgLen ? imgs[idx*=0] : (idx + dir < 0) ? imgs[idx = imgLen]: imgs[idx += dir];
}