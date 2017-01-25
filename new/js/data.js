var data = {
  firstname: 'Andrea',
  lastname: 'Mannarà',
  intro: `
      When I was a child I wanted to become a magician in the first place, then an inventor. This because I thought that creating something new was the most exciting thing. At the age of 9 I received from my uncle an old compaq 486 PC and I started to write programs in BASIC because it was one of the few things that computer was capable of. I discovered that developing was the nearest thing to be a magician since you can create everything from nothing. Basically that\'s why I became a developer. Later on I focused in web developing and frontend developing because everybody knows that the most outstanding magic is the one with the best visual and perceptive effects.
      `,
  birthdate:   '27/03/1987 -- Chieri (TO)',
  address:    'Via Modena 53, 10153 Torino (TO)',
  phone:      '(+39)3489263742',
  email:      'andrea.mannara87@gmail.com',
  github:     'github.com/huvber',
  linkedin:   'it.linkedin.com/in/amannara87',
  drivel:     'B Italian Drive License',
  car:        'with car',
  abroad: [
    {
      date: '08/07/2004 - 23/07/2004',
      title: 'English Summer Course',
      where: 'UDC Dublin, Ireland',
      subtitle: '15days of English course and activities',
      icon: 'course',
    },
    {
      date:  '15/08/2011 - 12/06/2012',
      title: 'LLP/Erasmus',
      where: 'Norges TeknisNaturvitenskapelige Universitet (NTNU)',
      subtitle:'10 Months Courses and Master Thesis',
      icon: 'erasmus',
      skills: ['network','java','html','linux']
    }
  ],

  languages:{
    mother: 'Italian',
    others:[
      {
        language:'English',
        certificates:[
          {
            date:'05/04/2008',
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
      date: '11/09/2015 - TODAY',
      title: 'Fullstack Senior Developer',
      where:'Grocerest srl',
      subtitle: `
        NodeJS backend developer with coffeescript;
        ElasticSearch developer and sysadmin;
        REST API developer with express;
        Frontend developer with ReactJS, Boostrap, NextJs;
        Develop with docker, git, jenkins on AWS;
        Android Developer;
      `,
      link:'http://www.grocerest.com',
      icon:'job',
      type:['job'],
      skills: ['coffeescript', 'nodejs', 'less', 'express', 'react',
      'redux', 'aws','mongodb', 'docker', 'jenkins','android']
    },
    {
      date: '08/06/2015',
      title:'WebDeveloper',
      where:'Partycillina Event',
      subtitle:'Website and Template Customization using Wordpress' ,
      link:'http://www.partycillina.it',
      icon:'website',
      type:['job','project','web'],
      skills: ['php','javascript','html','css','wordpress']
    },
    {
      date: '01/06/2013 - 07/09/2015',
      title: 'System Admin -- Web Developer',
      where:'Artedas Italia srl',
      subtitle: `Full-Stack Developer for the Company's website
        with php (codigniter), html, css, javascript (foundation); Full-Stack. Developer for Customers Projects (php, javascript, nodejs,...); Internal Projects; System Administrator (centOS 7, 6.5)
      `,
      link:'http://www.artedas.it',
      icon:'job',
      type:['job'],
      skills: ['html','css','javascript','jquery','php','sql','linux','nodejs','meteor']
    },
    {
      date: '15/10/2008 - 31/01/2013',
      title:'Web Developer -- Web Master',
      where:'Associazione Musiqueros',
      subtitle:'Association\'s website with pure PHP and Bootstrap' ,
      link:'http://www.musiqueros.it',
      icon:'website',
      type:['job','project','web'],
      skills: ['php','json','javascript','html','jquery','bootstrap','css']
    },
    {
      date: '10/03/2009 - 31/07/2009',
      title:'C++ Developer -- Internship',
      where: 'SEAC02 srl',
      subtitle:'VRML parser for realtime 3d software',
      link:'http://linceovr.seac02.it',
      icon:'job',
      type:['internship','job','project'],
      skills: ['cpp','xml','opengl']
    },
    {
      date: '15/10/2008 - 31/01/2013',
      title:'Frontend & Backend Developer',
      where:'PubliChieri srl',
      subtitle:'Newspaper\'s website, CMS from Scratch, NewsPaper Layout creator and Manager',
      link: 'http://page.soltecitalia.it',
      icon:'website',
      type:['job','project','web'],
      skills:['php:','sql','javascript','html','jquery','css']
    }
  ],
  education: [
    {
      date:  '14/06/2006',
      title: 'Diploma',
      grade: '77/100',
      where: 'ITIS A. Avogadro',
      subtitle:'Technical and Industrial Expert in Computer Science',
      icon:'diploma',
      skills:['html','css','php','cpp','javascript','sql']
    },
    {
      date:  '06/09/2006 - 20/09/2010',
      title: 'Bachelor Degree',
      grade: '90/110',
      where: 'Politecnico di Torino',
      subtitle:'Information Technology and Computer Engineering',
      icon:'bachelor',
      skills:['cpp','linux','java','sql','networks','html','php']
    },
    {
      date:  '29/09/2010 - 26/03/2013',
      title: 'Master Degree',
      grade: '94/110',
      where: 'Politecnico di Torino',
      subtitle:'Information Technology and Computer Engineering',
      icon:'master',
      skills: ['sql','networks','linux','opengl','blender','python','java','xml','html']
    },
    {
      date: '01/01/2012 - 10/06/2012',
      title:'Master Thesis',
      grade:'-',
      where: 'Norges TeknisNaturvitenskapelige Universitet (NTNU)',
      subtitle:`
        Location-based games and the use of GIS Information.
        Design a DSL for (re)locating a pervasive game.
        Sup. <a href="https://www.ntnu.edu/employees/hal" target="_blank">Hallvard Trætteberg</a>
      `,
      icon:'thesis',
      skills:['java','eclipse','xml','uml']
    },
    {
      date:'07/09/2013 - 18/06/2015',
      title:'PostGraduate Course',
      subtitle:'ICT and Advance Developement',
      grade: '110/110',
      where: 'Università di Torino',
      icon:'master',
      skills:['html','css','javascript','java','python','sql']
    },
  ],

  projects : [
    {
      date:  '14/07/2015 - TODAY',
      title: 'Dynamic Curriculum Vitae (this CV)',
      where:'Home',
      subtitle: 'HTML and Printing Resume using pure javascript, html, css(sass) (no library)',
      link:'huvber.github.io/cv',
      icon:'project',
      type:['project'],
      skills: ['html', 'css', 'javascript']
    }
  ],

  all_skills: [
    'javacript',
    'nodejs',
    'html/css',
    'elasticsearch',
    'react',
    'jenkins',
    'docker',
    'aws',
    'php',
    'java',
    'android',
    'linux',
    'wordpress',
    'boostrap',
    'foundation',
    'sql',
    'mongodb',
    'meteor',
    'cpp',
    'python'
  ],
  music:      ['songwriting music','indipendent music','pop-rock'],
  cinema:     ['italian old movies','classics', 'sci-fi'],
  literature: ['classic','british','italian'],
  sport:      ['basket','swim','bicycle','canoa']
}
