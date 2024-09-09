const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/impranaysharma',
  title: 'PS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pranay Sharama',
  role: ' Mern Full Stack Developer and Programmer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/impranaysharma/',
    github: 'https://github.com/impranaysharma',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Mongodb',
  'React',
  'Redux',
  'Nodejs',
  'Expressjs',
  'Git',
  'Postman API',
  'SQl',
  'Figma',
  'Mapbox',
  'Github',
   'Nextjs',
   'Python',
   'C++',
   'Java'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pranaysharma431@gmail.com',
}

export { header, about, projects, skills, contact }
