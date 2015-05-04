j('#mainInfo').parse(main);

//function to create a date object from text date
var getDate = function(str){
  if(str == 'TODAY')
    return new Date();
  var sp = str.split('-');
  return new Date(sp[2],(sp[1]-1),sp[0]);
};

//function to retrieve the amount of months from two dates
var months = function(d1,d2){
  return (d2.getFullYear()-d1.getFullYear())*12 - d1.getMonth() + d2.getMonth();
}

//template element for the event
var htmle = j('.event');

//template element for a year
var yeare = j('.year');

//event list
var p = yeare.e().parentNode;

var i = 0;

//object of skills
var skills = {};

var today = new Date();
var born = getDate(events[0].date[0]);
var years = {};

//creation of the years
for(var y= parseInt(born.getFullYear()); y <= parseInt(today.getFullYear()); y++){
  years[y] = [];
}

//creation of the object years that will contain every year and the events for every year
for(var i in events){
  var e = events[i];
  if(e.date === undefined) continue;
  d = getDate(e.date[0]);

  //sum the skills per each element
  for(sk in e.skills){
    if(skills[sk]===undefined)
      skills[sk] = 0;
    skills[sk] += e.skills[sk];
  }

  years[parseInt(d.getFullYear())].push(e);
  if(e.date.length === 2){
    var d2 = getDate(e.date[1]);
    if(d2.getFullYear()!==d.getFullYear() && d2.getFullYear()!==today.getFullYear()){
      e.mtoy = true; // More than one year
      years[parseInt(d2.getFullYear())].push(e);
    }
  }
}

//traversing the years to generate the html elements
for(i in years){
  var temp = yeare.e().cloneNode(true);
  yeare.parse({ date: i});
  if(years[i].length > 0){
    yeare.addClass('withevent');
    yeare.removeClass('no-print');
    var pe = j(yeare.e());
    pe = pe.get('.events').e();
    e = 0;
    for(var e in years[i]){
      var ev = years[i][e];
      if(typeof years[i][e] !== 'object') continue;
      var te = j(htmle.e().cloneNode(true));
      var element = {};
      element.cl = '';
      if(ev.mtoy){
        var d = getDate(ev.date[0]);
        if(d.getFullYear()+'' === i){
          element.title = 'BEGIN of ' + ev.title;
          element.date = ev.date[0];
          element.description = ev.description;
          element.icon = ev.icon;
          element.cl = 'begin';
        } else {
          element.title = 'END of ' + ev.title;
          element.date = ev.date[1];
          element.description = '';
          element.icon = ev.icon;
          element.cl='end';
        }

        } else {
          element = ev;
          element.cl='unique';
        }
        te.parse(element);
        pe.appendChild(te.e());
      }
    }
    yeare.e().id='y'+i;
    if(i > born.getFullYear())
      p.appendChild(yeare.e());
    yeare = j(temp);
  }
  htmle.remove();
  console.log(skills);
  j('.event').hide(100);
  window.onscroll = function(e){
    e.preventDefault();
    j('.event').each(function(el,i){
      if(typeof el !== 'function'){
        if(el.offsetTop <= window.innerHeight + window.scrollY - 100){
          j(el).show(500);
        } else {
          j(el).hide(500);
        }
      }
    });
  }
