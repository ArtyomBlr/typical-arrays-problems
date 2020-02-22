
exports.min = function min (array) {
  if (Array.isArray(array) == false || array == undefined){
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) == false || array == undefined){
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) == false || array == undefined){
    return 0;
  } else if (array.length == 0) {
    return 0;
  } else {
    var a = 0;
    for(var i = 0; i < array.length; i++) {
       a += array[i]/array.length;
    }
    return  (Math.round((a)*100)/100);  
  }
}
