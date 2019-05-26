/*
function doStuff() {
  // important code executed here
  console.log('stuff was done');
}

setInterval(doStuff, 5000); // => stuff was done ... stuff was done ... 
*/

(function doStuff(){
  // important code executed here
  console.log('stuff was done');
  setTimeout(doStuff, 4800);
})(); // => stuff was done ... stuff was done ...
