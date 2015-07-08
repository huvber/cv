var data = {
  main:  {
    name:       'Andrea',
    surname:    'Mannarà',
    birthday:   '27/03/1987 - Chieri (TO)',
    address:    'Via Modena 53, 10153 Torino (TO)',
    phone:      '(+39)3489263742',
    email:      'andrea.mannara87@gmail.com',
    github:     'github.com/huvber',
    linkedin:   'it.linkedin.com/in/amannara87',
    drivel:     'B License',
    car:        'with car',
    intro: 'When I was a child I wanted to become a magician in the first place,'+
           ' then an inventor. This because I thought that creating something new'+
           ' was the most exciting thing. At the age of 9 I received by my uncle '+
           'an old compaq 486 PC and I started to write programs in BASIC because'+
           ' it was one of the few things that computer was capable of. I discovered'+
           ' that developing was the nearest thing to be a magician since you can'+
           ' create everything from nothing. Basically that\'s why I became a '+
           'developer. Later on I focused in web developing and frontend developing'+
           ' because everybody knows that the most outstanding magic is the one with'+
           ' the best visual and perceptive effects.'
  },
  education: [
    {
      date: '14/06/2006',
      title: 'Diploma',
      grade: '77/100',
      where: 'ITIS A. Avogadro',
      subtitle:'Technical and Industrial Expert in Computer Science',
      icon:'diploma',
      skills:{html:3,css:3, php:10, cpp:10, javascript:3,sql:3 }
    },
    {
      date: '06/09/2006 - 20/09/2010',
      title: 'Bachelor Degree',
      grade: '90/110',
      where: 'Politecnico di Torino',
      subtitle:'Information Technology and Computer Engineering',
      icon:'bachelor',
      skills:{cpp:5,  linux:12, java:10,sql:10,
              networks:12,html:3,php:5}
    },
    {
      date: '29/09/2010 - 26/03/2013',
      title: 'Master Degree',
      grade: '94/110',
      where: 'Politecnico di Torino',
      subtitle:'Information Technology and Computer Engineering',
      icon:'master',
      skills:{sql:10, networks:10, linux:15, opengl:3,
              blender:5, python:5, java:10, xml:10, html:5}
    },
    {
      date: '01/01/2012 - 10/06/2012',
      title:'Master Thesis',
      grade:'-',
      where: 'Norges TeknisNaturvitenskapelige Universitet (NTNU)',
      subtitle:'Location-based games and the use of GIS Information.' +
                  'Design a DSL for (re)locating a pervasive game. ' +
                  'Sup. <a href="https://www.ntnu.edu/employees/hal" target="_blank">'+
                  'Hallvard Trætteberg</a>',
      icon:'thesis',
      skills:{ java:10, eclipse:10, xml:10, uml:10}
    },
    {
      date:'07/09/2013 - 18/06/2015',
      title:'PostGraduate Course',
      subtitle:'ICT and Advance Developement',
      grade: '110/110',
      where: 'Università di Torino',
      icon:'master',
      skills: { html:5, css:5, javascript:5, java:3, python:5, sql:5}
    },
  ],
  abroad: [
    {
      date: '15-08-2011 - 12-06-2012',
      title: 'LLP/Erasmus',
      where: 'Norges TeknisNaturvitenskapelige Universitet (NTNU)',
      subtitle:'10 Months Courses and Master Thesis',
      icon: 'erasusm',
      skills:{ network:10, java:10, html:5, linux:10 }
    },
    {
      date: '08-07-2004 - 23-07-2004',
      title:'English Summer Course',
      where:'UDC Dublin, Ireland',
      subtitle:'15days of English course and activities',
      icon:'course',
    }
  ],
  languages:{
    mother: 'Italian',
    others:[
      {
        language:'English',
        certificates:[
          {
            date:'05-04-2008',
            name: 'IELTS',
            where:'Politecnico di Torino'
          }
        ],
        levels:{
          comprehension:{ listening: 'C2', reading:'C2' },
          speaking: { interaction:'B2', production:'B2'},
          writing: 'C1'
        }
      }
    ]
  },
  jobs:[
    {
      date: '01-03-2006 - 01-07-2006',
      title: '3D Designer and Web Developer',
      where: 'ITIS A. Avogadro',
      subtitle:'Intercative 3D tour of the School<br /> ITIS A.Avogadro',
      icon:'project',
      link:'',
      type:['job','project'],
      skills:{ html:1,css:1, 'blender':5 } },
    {
      date: '02-02-2007 - 02-09-2008',
      title:'VisualStudio Developer',
      where:'Alba Onlus',
      subtitle:'\'TEACHING-LIS\' PLATFORM <br />Creation of a DVD teaching platform for the Italian Sign Language<br /> ALBA ONLUS Torino',
      icon:'project',
      link:'',
      type:['job','project'],
      skills:{ visualbasic:10, cpp:3 } },
    {
      date: '15-10-2008 - 31-01-2013',
      title:'Frontend & Backend Developer',
      where:'PubliChieri srl',
      subtitle:'Newspaper\'s website, CMS from Scratch, NewsPaper Layout creator and Manager',
      link: 'http://page.soltecitalia.it',
      icon:'website',
      type:['job','project','web'],
      skills:{ php:20, sql:10, javascript:20, html:15, jquery:20, css:10} },
    {
      date: '10-03-2009 - 31-07-2009',
      title:'C++ Developer - Internship',
      where: 'SEAC02 srl',
      subtitle:'VRML parser for realtime 3d software',
      link:'http://linceovr.seac02.it',
      icon:'job',
      type:['internship','job','project'],
      skills:{ cpp:10, xml:5, opengl:10} },
    {
      date: '15-10-2008 - 31-01-2013',
      title:'Web Developer - Web Master',
      where:'Associazione Musiqueros',
      subtitle:'Association\'s website' ,
      link:'http://www.musiqueros.it',
      icon:'website',
      type:['job','project','web'],
      skills:{ php:10, json:5, javascript:10, html:5, jquery:10, bootstrap:20, css:10}
    },
    {
      date: '01-06-2013 - TODAY',
      title: 'System Admin - Web Developer',
      where:'Artedas Italia srl',
      subtitle: 'Company\'s website, Customers Projects, Iternal Projects',
      link:'http://www.artedas.it',
      icon:'job',
      type:['job'],
      skills: { html:5, css:5, javascript:10, jquery:5, php:5, sql:5, linux:10 } },
    {
      date: '08-06-2015',
      title:'WebDeveloper',
      where:'Partycillina Event',
      subtitle:'Website and Template Customization' ,
      link:'http://www.partycillina.it',
      icon:'website',
      type:['job','project','web'],
      skills:{ php:10, javascript:5, html:5, css:10, wordpress:5} },
    {
      date: '12-06-2015',
      title:'Web Developer',
      where:'Associazione L\'Entità',
      subtitle:'Website and Template Customization' ,
      link:'http://www.lentita.it',
      icon:'website',
      type:['job','project','web'],
      skills:{ php:10, javascript:5, html:5, css:10, wordpress:5},
    },

  ]
};
