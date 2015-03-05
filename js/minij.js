Element.prototype.isArray = function(){ return false;};
NodeList.prototype.isArray = Array.prototype.isArray = HTMLCollection.prototype.isArray = function(){return true;};
var je = function(){ this.el = document; };
var doit = function(that,handler){
  if(that.el.isArray()){
    for(var i in that.el){
      handler(that.el[i],i);
    }
  } else {
    hanlder(that.el,0);
  }
  return that;
};
je.prototype.e = function(){ return this.el; };
je.prototype.get = function(selector){
  if(selector instanceof HTMLElement){ this.el = selector; return this; }
  switch(selector.charAt(0)){
    case '.':
      this.el =  [].slice.call(this.el.getElementsByClassName(selector.replace('.','')));
    break;
    case '#':
      this.el =  document.getElementById(selector.replace('#',''));
    break;
    default:
      this.el =  [].slice.call(this.el.getElementsByTagName(selector));
  }
  if(this.el && this.el.isArray() && this.el.length == 1){
    this.el = this.el[0];
  }
  return this;
};
je.prototype.addClass = function(classes){
  return doit(this, function(el){
    el.classList.add(classes);
  });
};
je.prototype.removeClass = function(classes){
  return doit(this, function(el){
    el.classList.remove(classes);
  });
};
je.prototype.hasClass = function(classes){
  var res = true;
  doit(this, function(el){
    el.classList.remove(classes);
    res = res && el.classList.contains(classes);
  });
  return res;
};
je.prototype.bind = function(ev,handler){
  return doit(this, function(el){
    el[ev] = handler;
  });
};
je.prototype.text = function(str){
  return doit(this, function(el){
    el.innerHTML = str;
  });
};
je.prototype.append = function(str){
  return doit(this, function(el){
    el.appendChild(document.createTextNode(str));
  });
};
je.prototype.addChild = function(tag,attr){
  var child = document.createElement(tag);
  for(var i in attr){
    tag[i] = attr[i];
  }
  return doit(this, function(el){
    el.appendChild(child);
  });
};
je.prototype.each = function(handler){
  return doit(this, function(el,i){
    handler(el,i);
  });
};
var j = function(){
  var g = new je();
  switch (arguments.length) {
    case 1 :
      return g.get(arguments[0]);
    case 2 :
      return g.get(arguments[0]).get(argument[1]);
  }
  return g;
};
