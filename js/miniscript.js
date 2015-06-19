//complete the header informations
j('.main').parse(data.main);

//extrac template elements
var t = {
  education : j('.education').e(),
  abroad    : j('.abroadexp').e(),
  jobs      : j('.jobs').e(),
  abEvent   : j('.ab-entry').e(),
  edEvent   : j('.ed-entry').e(),
  jbEvent   : j('.jb-entry').e()
};

//create education elements

for(var e in data.education.reverse()){
  var newEd = t.edEvent.cloneNode(true);
  j(newEd).parse(data.education[e]);
  t.education.appendChild(newEd);
}
t.edEvent.remove();

for(var a in data.abroad.reverse()){
  var newAb = t.abEvent.cloneNode(true);

  j(newAb).parse(data.abroad[a]);
  t.abroad.appendChild(newAb);
}
t.abEvent.remove();

for(var a in data.jobs.reverse()){
  var newJb = t.jbEvent.cloneNode(true);

  j(newJb).parse(data.jobs[a]);
  t.jobs.appendChild(newJb);
}
t.jbEvent.remove();
