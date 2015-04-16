var main = {
  name: 'Andrea',
  surname: 'Mannarà',
  phone: '3489263742',
  mail:'andrea.mannara87@gmail.com',
  website:'this'
};
var events = [
  {
    date: ['27-03-1987'],
    title: 'BORN',
    description:'Chieri',
    icon:'born',
    type:'life' },
  {
    date: ['08-07-2004','23-07-2004'],
    title:'ENGLISH COURSE ABROAD',
    description:'15days of English course by UCD Dublin',
    icon:'dublin',
    type:'language',
    skills:{ english:10} },
  {
    date: ['19-05-2005'],
    title: 'DRIVE LICENSE',
    description: 'B License for driving cars',
    icon:'car',
    type:'life'},
  {
    date: ['01-03-2006','01-07-2006'],
    title: 'INTERACTIVE TOUR',
    description:'Intercative 3D tour of the School<br /> ITIS A.Avogadro',
    icon:'3dtour',
    type:['job','project'],
    skills:{ html:1,css:1,vrml:4,maya:4, actionscript:1 } },
  {
    date: ['15-02-2006'],
    title: '3RD L. TRINITY',
    description:'Eglish Certificate',
    icon:'certificate',
    type:'language',
    skills:{english:5 } },
  {
    date: ['14-06-2006'],
    title: 'DIPLOMA',
    description:'Perito Informatico<br /> ITIS A. Avogadro<br /> 77/100',
    icon:'diploma',
    type:'instruction',
    skills:{html:3,css:3, php:8, cpp:10, javascript:3,sql:3 } },
  {
    date: ['06-09-2006','20-09-2010'],
    title: 'BACHELOR D.',
    description:'Computer Engineering<br /> Politecnico of Torino<br /> 90/110',
    icon:'bachelor',
    skills:{cpp:5, electronics:5, statistics:2,linux:10,java:10,sql:10,
            networks:5,html:3,php:3, english:10} },
  {
    date: ['02-02-2007','02-09-2008'],
    title:'\'TEACHING-LIS\' PLATFORM',
    description:'Creation of a DVD teaching platform for the Italian Sign Language<br /> ALBA ONLUS Torino',
    icon:'lis',
    type:['job','project'],
    skills:{ visualbasic:10, cpp:3, vrml:2} },
  {
    date: ['05-04-2008'],
    title: 'IELTS CERT.',
    description:'Eglish Certification<br /> Politecnico of Torino<br /> 5.5/7',
    icon:'certificate',
    type:'language',
    skills:{english:10 } },
  {
    date: ['15-10-2008','31-01-2013'],
    title:'CORRIERE di CHIERI\'s WEBSITE',
    description:'Frontend & Backend<br /> Custom CMS<br /> PubliChieri srl',
    icon:'website',
    type:['job','project','web'],
    skills:{ php:5, sql:5, javascript:5, html:4, jquery:10, css:5} },
  {
    date: ['10-03-2009','31-07-2009'],
    title:'INTERNSHIP',
    description:'VRML parser for realtime 3d software<br />SEAC02 srl, Torino',
    icon:'seac',
    type:['internship','job','project'],
    skills:{ cpp:10, opensg:5, opengl:10, vrml:10} },
  {
    date: ['29-09-2010','26-03-2013'],
    title: 'MASTER D.',
    description:'Computer Engineering<br /> Politecnico of Torino<br /> 94/110',
    icon:'master',
    type:'instruction',
    skills:{sql:10, network:10, linux:10, opengl:3,
            blender:5, python:5, bash:10, java:10, xml:10, html:10, english:5} },
  {
    date: ['01-01-2012','10-06-2012'],
    title:'MASTER THESIS',
    description:'Location-based games and the use of GIS Information.' +
                'Design a DSL for (re)locating a pervasive game<br />' +
                'NTNU Trondheim, Norway<br />'+
                'Sup. <a href="https://www.ntnu.edu/employees/hal" target="_blank">'+
                'Hallvard Trætteberg</a>',
    icon:'thesis',
    type:['thesis','project'],
    skills:{ java:10, eclipse:10, xml:10, emf:10, uml:10, english:5} },
  {
    date: ['15-10-2008','31-01-2013'],
    title:'MUSIQUEROS\' WEBSITE',
    description:'Frontend & Backend<br /> Custom CMS<br /> Associazione Musiqueros' ,
    icon:'website',
    type:['job','project','web'],
    skills:{ php:5, json:5, javascript:5, html:5, jquery:10, bootstrap:10, css:10} },
  {
    date: ['01-06-2013','TODAY'],
    title: 'IT MANAGER, WEB DEVELOPER',
    description: 'Artedas Italia srl',
    icon:'job',
    type:'job',
    skills: { html:5, css:5, javascript:5, jquery:5, php:5, mysql:5, linux:10 } },
  {
      date:['07-09-2013','TODAY'],
      title:'ICT POSTGRAD. COURSE',
      description:'Information & Communication Tech.<br /> Università degli Studi di Torino',
      icon:'master',
      type:'instruction',
      skills: { html:5, css:5, javascript:5, java:3, python:5, sql:5} },
  {
    date: ['15-09-2014'],
    title: 'ARTEDAS\'s WEBSITE',
    description:'Frontend Dev., Backend Dev., System Admin',
    icon:'website',
    type:['project','web'],
    skills:{ html:10, javascript:10, jquery:10, foundation:10, linux:10} },
  {
    date:['01-10-2014','TODAY'],
    title:'MOSCATO PLATFORM',
    description:'Platform for managing and controlling Kiosks',
    icon:'project',
    type:['project','web'],
    skills:{html:5, javascript:10, nodejs:10, css:5,
            meteor:10, foundation:5, mongodb:10} }
];
