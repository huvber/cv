//complete the header informations
j('.main').parse(data.main);

//extrac template elements
var t = {
  education : j('.education').e(),
  abroad    : j('.abroadexp').e(),
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
j(t.edEvent.remove());
for(var a in data.abroad.reverse()){
  var newAb = t.abEvent.cloneNode(true);
  j(newAb).parse(data.abroad[a]);
  t.abroad.appendChild(newAb);
}
j(t.abEvent.remove());
