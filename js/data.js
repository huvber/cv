var main = {
  name: 'Pippo',
  surname: 'Pluto',
  phone: '3489263742',
  mail:'andrea.mannara87@gmail.com',
  website:'www.andreamannara.io',
  intro:'When I was a child I wanted to become a magician in the first place,'+
        ' then an inventor. This because I thought that creating something new'+
        ' was the most exciting thing. At the age of 9 I received by my uncle '+
        'an old compaq 486 PC and I started to write programs in BASIC because'+
        ' it was one of the few things that computer was capable of. I discovered'+
        ' that developing was the nearest thing to be a magician since you can'+
        ' create everything from nothing. Basically that\'s why I became a '+
        'developer. Later on I focused in web developing and frontend developing'+
        ' because everybody knows that the most outstanding magic is the one with'+
        ' the best visual and perceptive effects.',
  ending:'Thank you for visiting my Resume and I hope you liked it.'
};
var events = [
  {
    date: ['27-03-1987'],
    title: 'BORN',
    subtitle:'in <a href="http://it.wikipedia.org/wiki/Chieri">Chieri (TO) - Italy</a>',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed '+
                'semper justo urna, nec pretium mi porttitor non. Ut nec ipsum '+
                'ac libero bibendum scelerisque quis at eros. Aliquam eget '+
                'interdum mauris. Aliquam erat volutpat. Pellentesque faucibus '+
                'ipsum quis quam ultricies, vel viverra nibh pharetra. Morbi '+
                'aliquet porttitor tellus. Curabitur tincidunt orci et eros '+
                'faucibus, eu volutpat diam consectetur. Sed ultricies turpis '+
                'a lacus suscipit tristique. In pulvinar tortor eget magna '+
                'dictum, vitae ultricies nisi convallis.',

    icon:'born',
    type:['life'] },
  {
      date: ['20-11-1987'],
      title: 'WALKING',
      subtitle:'Begin to walk with my own legs',
      icon:'walk',
      type:['fun'] },
  {
        date: ['25-01-1988'],
        title: 'SPEAKING FLUENTLY',
        subtitle:'Start bothering with a lot of questions the entire world',
        icon:'speak',
        type:['fun'] },
  {
        date: ['27-03-1996'],
        title: 'MY FIRST PC',
        subtitle:'Used COMPAQ PRESARIO 425,<br />With WINDOWS 3.1 first and'+
                    ' after WINDOWS 95 (13 Floppy Edition)',
        icon:'pc',
        type:['fun'] },
  {
      date: ['20-11-1987'],
      title: 'WALKING',
      description:'Begin to walk with my own legs',
      icon:'walk',
      type:'fun' },
  {
        date: ['25-01-1988'],
        title: 'SPEAKING FLUENTLY',
        description:'Start bothering with a lot of questions the entire world',
        icon:'speak',
        type:'fun' },
  {
    date: ['08-07-2004','23-07-2004'],
    title:'ENGLISH COURSE ABROAD',
    subtitle:'15days of English course by UCD Dublin',
    icon:'course',
    type:['language'],
    skills:{ english:10} },
  {
    date: ['19-05-2005'],
    title: 'DRIVE LICENSE',
    subtitle: 'B License for driving cars',
    icon:'car',
    type:['life']},
  {
    date: ['01-03-2006','01-07-2006'],
    title: 'INTERACTIVE TOUR',
    subtitle:'Intercative 3D tour of the School<br /> ITIS A.Avogadro',
    icon:'project',
    type:['job','project'],
    skills:{ html:1,css:1, 'blender':5 } },
  {
    date: ['15-02-2006'],
    title: '3RD L. TRINITY',
    subtitle:'Eglish Certificate',
    icon:'certificate',
    type:['language'],
    skills:{english:5 } },
  {
    date: ['14-06-2006'],
    title: 'DIPLOMA',
    subtitle:'Perito Informatico<br /> ITIS A. Avogadro<br /> 77/100',
    icon:'diploma',
    type:['instruction'],
    skills:{html:3,css:3, php:10, cpp:10, javascript:3,sql:3 } },
  {
    date: ['06-09-2006','20-09-2010'],
    title: 'BACHELOR D.',
    subtitle:'Computer Engineering<br /> Politecnico of Torino<br /> 90/110',
    icon:'bachelor',
    type:['instruction'],
    skills:{cpp:5,  linux:12, java:10,sql:10,
            networks:12,html:3,php:5, english:10} },
  {
    date: ['02-02-2007','02-09-2008'],
    title:'\'TEACHING-LIS\' PLATFORM',
    subtitle:'Creation of a DVD teaching platform for the Italian Sign Language',
    icon:'project',
    type:['job','project'],
    skills:{ visualbasic:10, cpp:3 } },
  {
    date: ['05-04-2008'],
    title: 'IELTS CERT.',
    subtitle:'Eglish Certification<br /> Politecnico of Torino<br /> 5.5/7',
    icon:'certificate',
    type:['language'],
    skills:{english:10 } },
  {
    date: ['15-10-2008','31-01-2013'],
    title:'CORRIERE di CHIERI\'s WEBSITE',
    subtitle:'Frontend & Backend<br /> Custom CMS<br /> PubliChieri srl',
    icon:'website',
    type:['job','project','web'],
    skills:{ php:10, sql:5, javascript:10, html:4, jquery:10, css:5} },
  {
      date: ['15-10-2008','31-01-2013'],
      title:'CORRIERE di CHIERI\'s LAYOUT CREATOR',
      subtitle:'Frontend & Backend<br /> of a webapplication to create '+
                  'newspaper page\'s layout',
      icon:'project',
      type:['job','project','web'],
      skills:{ php:15, sql:10, javascript:10, html:4, jquery:10, css:5} },
  {
    date: ['10-03-2009','31-07-2009'],
    title:'INTERNSHIP',
    subtitle:'VRML parser for realtime 3d software<br />SEAC02 srl, Torino',
    icon:'job',
    type:['internship','job','project'],
    skills:{ cpp:10, xml:5, opengl:10} },
  {
    date: ['29-09-2010','26-03-2013'],
    title: 'MASTER D.',
    subtitle:'Computer Engineering<br /> Politecnico of Torino<br /> 94/110',
    icon:'master',
    type:['instruction'],
    skills:{sql:10, networks:10, linux:15, opengl:3,
            blender:5, python:5, java:10, xml:10, html:5, english:5} },
  {
    date: ['01-01-2012','10-06-2012'],
    title:'MASTER THESIS',
    subtitle:'Location-based games and the use of GIS Information.' +
                'Design a DSL for (re)locating a pervasive game<br />' +
                'NTNU Trondheim, Norway<br />'+
                'Sup. <a href="https://www.ntnu.edu/employees/hal" target="_blank">'+
                'Hallvard Trætteberg</a>',
    icon:'thesis',
    type:['thesis','project'],
    skills:{ java:10, eclipse:10, xml:10, uml:10, english:5} },
  {
    date: ['15-10-2008','31-01-2013'],
    title:'MUSIQUEROS\' WEBSITE',
    subtitle:'Frontend & Backend<br /> Custom CMS<br /> Associazione Musiqueros' ,
    icon:'website',
    type:['job','project','web'],
    skills:{ php:10, json:5, javascript:10, html:5, jquery:10, bootstrap:20, css:10} },
  {
    date: ['01-06-2013','TODAY'],
    title: 'IT MANAGER, WEB DEVELOPER',
    subtitle: 'Artedas Italia srl',
    icon:'job',
    type:['job'],
    skills: { html:5, css:5, javascript:10, jquery:5, php:5, sql:5, linux:10 } },
  {
      date:['07-09-2013','TODAY'],
      title:'ICT POSTGRAD. COURSE',
      subtitle:'Information & Communication Tech.<br /> Università degli Studi di Torino',
      icon:'master',
      type:['instruction'],
      skills: { html:5, css:5, javascript:5, java:3, python:5, sql:5} },
  {
    date: ['15-09-2014'],
    title: 'ARTEDAS\'s WEBSITE',
    subtitle:'Frontend Dev., Backend Dev., System Admin',
    icon:'website',
    type:['project','web'],
    skills:{ html:5, javascript:10, jquery:10, foundation:20, linux:10, css:10} },
  {
    date:['01-10-2014','TODAY'],
    title:'MOSCATO PLATFORM',
    subtitle:'Platform for managing and controlling Kiosks',
    icon:'project',
    type:['project','web'],
    skills:{html:5, javascript:10, nodejs:20, css:5,
            meteor:20, foundation:10, mongodb:10} }
];
