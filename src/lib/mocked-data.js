export default {
  introduction: {
    avatar: 'http://huvber.github.io/cv/old/img/cvhead_back.png',
    firstname: 'Andrea',
    lastname: 'Mannarà',
    mainRole: 'Senior full-stack web developer',
    infos: {
      birthDate: '1987-03-27',
      email: 'andrea.mannara87@gmail.com',
      phone: '(+39)3489263742',
      address: 'Via Modena 53, 10153 Torino (Italy)',
      website: 'huvber.github.io/cv',
      linkedin: 'it.linkedin.com/in/amannara87',
      github: 'github.com/huvber' 
    }
  },
  works: [{

  }],
  skills: [{
    name: 'javascript',
    experience: 0.95,
    subskills: [{
      name: 'react',
      experience: 0.98,
    },{
      name: 'vanilla',
      experience: 0.96
    }, {
      name: 'angular',
      experience: 0.70
    }, {
      name: 'rxjs',
      experience: 0.68
    }, {
      name: 'vue',
      experience: 0.45
    }]
  },{
    name: 'php',
    experience: 0.95,
    subskills: [{
      name: 'wordpress',
      experience: 0.95
    },{
      name: 'twig',
      experience: 0.90
    },{
      name: 'yii',
      experience: 0.70
    }]
  },{
    name: 'html5',
    experience: 0.90,
    subskills: [{
      name: 'handlebars',
      experience: 0.80
    }, {
      name: 'semantic-web',
      experience: 0.70
    }]
  },{
    name: 'css3',
    experience: 0.90,
    subskills: [{
      name: 'sccs',
      experience: 0.90
    }, {
      name: 'less',
      experience: 0.70
    }, {
      name: 'animation',
      experience: 0.60
    }, {
      name: 'flex',
      experience: 0.80
    }, {
      name: 'grid',
      experience: 0.50
    }]
  }, {
    name: 'dev-ops',
    experience: 0.60,
    subskills: [{
      name: 'linux',
      experience: 0.90
    },{
      name: 'aws',
      experience: 0.45
    }, {
      name: 'linode',
      experience: 0.70
    }, {
      name: 'jenkins',
      experience: 0.40
    }, {
      name: 'docker',
      experience: 0.80
    }]
  },{
    name: 'dbms',
    experience: 0.90,
    subskills: [{
      name: 'mysql',
      experience: 0.90
    },{
      name: 'postgreSql',
      experience: 0.70
    },{
      name: 'mongodb',
      experience: 0.90
    },{
      name: 'Elasticsearch',
      experience: 0.85
    }]
  }],
  experiences: [{
    period: '2017 - now',
    company: 'Enhancers srl',
    website: '//enhancers.it',
    role: 'Senior FullStack Web Developer and Team Lead',
    projects: [{
      name: 'Museo Egizio\' website',
      technologies: [
        'react',
        'nextjs',
        'Sass',
        'wordpress REST API',
        'docker',
        'mysql'
      ],
      website: '//www.museoegizio.it'
    },{
      name: 'OGR Website',
      technologies: [
        'react',
        'nextjs',
        'Sass',
        'wordpress REST API',
        'docker',
        'mysql'
      ],
      website: '//www.ogrtorino.it'
    },{
      name: 'COOP ALG Onboarding process',
      technologies: [
        'angular',
        'nodejs',
        'sass',
        'AWS',
        'salesforce REST API',
        'docker',
        'mongodb'
      ],
      website: '//www.accendilucegas.it'
    }, {
      name: 'Enchancer\'s website',
      technologies: [
        'wordpress',
        'sass',
        'timber',
        'twig',
        'docker'
      ],
      website: '//enhancers.it'
    }],
  },{
    period: '2017 - 2015',
    company: 'Grocerest srl',
    website: '//www.facebook.com/grocerest/',
    role: 'Senior FullStack Web Developer',
    projects: [{
      name: 'Grocerest\'s website',
      technologies: [
        'handlebars',
        'react',
        'Sass',
        'AWS - S3'
      ],
    },{
      name: 'Grocerest\'s backoffice',
      technologies: [
        'coffescript',
        'react',
        'elasticsearch',
        'styled-components',
        'mongodb',
        'docker',
        'AWS',
        'jenkins'
      ],
    },{
      name: 'Grocerest\'s App',
      technologies: [
        'coffescript',
        'Android',
        'Swift',
        'AWS',
        'elasticsearch',
        'docker',
        'AWS',
        'jenkins'
      ]
    }]
  },{
    period: '2015 - 2013',
    company: 'Artedas',
    website: '//www.artedas.it',
    role: 'Sysadmin and FullStack Web Developer',
    projects: [{
      name: 'Company\'s webiste',
      technologies: [
        'php',
        'Sass',
        'Bancha CMS'
      ],
    }]
  }],
  educations: [{
    period: '2015 - 2013',
    name: 'Postgraduate Course',
    place: 'Università di Torino',
    grade: '110/110',
    technologies: [
      'web',
      'python',
      'design pattern',
      'economy',
      'patter recognition'
    ]
  },{
    period: '2012',
    name: 'Master Thesis',
    description: 'Location-based games and the use of GIS Information. Design a DSL for (re)locating a pervasive game. Sup. Hallvard Trætteberg',
    place: 'Norges TeknisNaturvitenskapelige Universitet (NTNU)',
    technologies: [
      'java',
      'xml',
      'xsd',
      'uml',
      'gis',
      'openstreetmap API'
    ]
  },{
    period: '2010 - 2013',
    name: 'Master Degree - Information Technology and Computer Engineering',
    place: 'Politecnico di Torino',
    grade: '94/110',
    technologies: [
      'cpp',
      'linux',
      'java',
      'web',
      'networks',
      'dbms'
    ]
  }],
  languages: {
    mother: 'Italian',
    others: [{
      lang: 'English',
      levels: [
        {label: 'listening - C2', value: .85 /*C2*/ },
        {label: 'reading - C2', value: .85 /*C2*/},
        // {label: 'interaction - C1', value: .70 },
        // {label: 'production - B2', value: 0.60},
        {label: 'writing - C1', value: .70}
      ]
    }]
  },
  interests: [{
    area: 'Music',
    description: 'songwriting indipendent pop-rock italian' 
  }, {
    area: 'TV and Cinema',
    description: 'italian-old classics scifi tvseries documentaries rick&morty'
  },{
    area: 'Literature',
    description: 'classic british italian norwegian',
  },{
    area: 'Sports',
    description: 'basketball bycicle swim canoa sqash'
  }]
}
