//firebug/air debug function, kill w/ global var named prod
function puts(str) {
  if(typeof prod != "undefined")
    return;
  if(typeof console != "undefined")
    if(typeof str == "string")
      console.log(str);
    if(typeof str == "object")
      console.dir(str);
  if(typeof air != "undefined" && air.trace)
    air.trace(str);
}

var ThyncRecord = {};

// globals
ThyncRecord.depth = 4;
ThyncRecord.models = new Hash();
