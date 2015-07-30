var popolate = function(father,model,elements,skills){
  var sElem = j('.sk-entry').e();
  for(var e in elements){
    var newE = model.cloneNode(true);
    elements[e].date = elements[e].date.join('<br />');
    j(newE).parse(elements[e]);

    father.appendChild(newE);
    if(elements[e].skills){
      var tskills = j(newE).get('.eskills').e();
      var entry_skills = elements[e].skills;
      for(var s in entry_skills){
        //skills[s.toUpperCase()] = skills[s.toUpperCase()] ? skills[s.toUpperCase()] + entry_skills[s] : entry_skills[s];
        tskills.innerHTML = tskills.innerHTML + '<span class="lskill '+ s.toUpperCase() + '" >'+s.toUpperCase() +'</span>';
      }
    }
  }
  model.remove();
};
//complete the header informations
j('.main').parse(data.main);
j('.intro').parse({intro: data.main.intro});

//extrac template elements
var t = {
  education : j('.education').e(),
  abroad    : j('.abroadexp').e(),
  jobs      : j('.jobs').e(),
  skills    : j('.skills').e(),
  projects  : j('.projects').e(),
  prEvent   : j('.pr-entry').e(),
  abEvent   : j('.ab-entry').e(),
  edEvent   : j('.ed-entry').e(),
  jbEvent   : j('.jb-entry').e(),
  skEvent   : j('.sk-entry').e()
};


var skills = data.skills;
popolate(t.education,t.edEvent,data.education.reverse(),skills);
popolate(t.jobs,t.jbEvent,data.jobs.reverse(),skills);
popolate(t.abroad,t.abEvent,data.abroad.reverse(),skills);
popolate(t.projects,t.prEvent,data.projects.reverse(),skills);

//skill population
//var max = 0;
//var keysSorted = Object.keys(skills).sort(function(a,b){return skills[b]-skills[a]; });
for (var s in skills){
  //var s = keysSorted[i];
  //if(skills[s] > max) max = skills[s];
  var newSk = t.skEvent.cloneNode(true);
  j(newSk).parse(
    { name: s.toUpperCase(),
    value: skills[s]});
  var p = j(newSk).get('.progress').e();
  for(var y =0; y < skills[s]; y++)
    p.innerHTML +='<i class="fa fa-circle"></i>';
  for(y; y<6; y++)
    p.innerHTML+='<i class="fa fa-circle-o"></i>';
  t.skills.appendChild(newSk);
}

j('.interests').parse(data.interests);
//j('progress').at('max',max);
t.skEvent.remove();

//language population
j('.languages').get('.mt').parse({mother: data.languages.mother.toUpperCase()});
var lothers = j('.languages').get('.others').e();
var lentry = j('.lo-entry').e();
var ot = data.languages.others;
var lev2num = function(lev){
  switch(lev){
    case 'A1': return 0;
    case 'A2': return 1;
    case 'B1': return 2;
    case 'B2': return 3;
    case 'C1': return 4;
    case 'C2': return 5;
  }
};
for(var l in ot){
  var el = ot[l];
  var lev = el.levels;
  var temp = { language: el.language.toUpperCase(),
               list: lev.comprehension.listening,
               read: lev.comprehension.reading,
               int: lev.speaking.interaction,
               prod: lev.speaking.production,
               write: lev.writing,
             };
  var newE = lentry.cloneNode(true);
  j(newE).parse(temp);
  lothers.appendChild(newE);
}
j(lentry).remove();
j('.icon').hide();
j('.entry').bind('onmouseover',function(e){
  var icon = j(this).get('.icon').show(300);
});
j('.entry').bind('onmouseout',function(e){
  var icon = j(this).get('.icon').hide(300);
});
j('.sk-entry').bind('onmouseover',function(e){
  var skill = j(this).get('.name').e().innerHTML;
  j('.'+skill).addClass('active');
});
j('.sk-entry').bind('onmouseout',function(e){
  j('.lskill').removeClass('active');
});
