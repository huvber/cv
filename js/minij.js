/**
 * This is claim to be a library would try to work like JQuery. It has
 * implemented only the methods I needed for the CV
 */
Element.prototype.isArray = function(){ return false;};
NodeList.prototype.isArray = Array.prototype.isArray = HTMLCollection.prototype.isArray = function(){return true;};
var je = function(){ this.el = document; };
var doit = function(that,handler){
  if(that.el.isArray()){
    for(var i in that.el){
      if(that.el[i] !== undefined || typeof that.el[i] !== 'function')
        handler(that.el[i],i);
    }
  } else {
    if(that.el !== undefined || typeof that.el[i] !== 'function')
      handler(that.el,0);
  }
  return that;
};
var animation = function(element,time,handler){
  var start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    handler(element,progress);
    if (progress < time) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
};
je.prototype.e = function(){ return this.el; };
je.prototype.get = function(selector){
  if(selector instanceof HTMLElement){ this.el = selector; return this; }
  if(typeof selector === 'function'){ this.el = undefined; return this; }
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
je.prototype.parse = function(object){
  return doit(this, function(el){
    for (var key in object) {
      regexp = new RegExp('{{' + key + '}}', 'g');
      el.className = el.className.replace(regexp, object[key]);
      el.innerHTML = el.innerHTML.replace(regexp, object[key]);
    }
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
je.prototype.remove = function(){
  this.el.parentElement.removeChild(this.el);
  this.el = null;
  delete this;
  return null;
};
je.prototype.hide = function(time){
  if(time===undefined) time=1;
  return doit(this,function(el){
    if(typeof el !== 'function'){
      el.style.transitionDuration = time + 'ms';
      j(el).removeClass('show');
      j(el).addClass('hide');
    }
  });
};
je.prototype.show = function(time){
  if(time===undefined) time=1;
  return doit(this,function(el){
    if(typeof el !== 'function'){
      el.style.transitionDuration = time + 'ms';
      j(el).removeClass('hide');
      j(el).addClass('show');
      setTimeout(function(){
        j(el).removeClass('show');
      },time);
    }
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
