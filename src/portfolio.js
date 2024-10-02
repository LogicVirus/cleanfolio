const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://spacestatic.com/',
  title: 'LogicVirus Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Josh Perry',
  role: 'Software Engineer',
  description:
    'Experienced Software Engineer specializing in front-end development and modern JavaScript frameworks. Passionate about building scalable web applications with a focus on clean design and functionality.',
  resume: 'https://spacestatic.com',
  social: {
    twitter: 'https://x.com/joshperry0', // Add your Twitter/X link here
    github: 'https://github.com/LogicVirus',
    ecommerce: 'https://blog-with-comments-cqmnhixg3-logicvirus.vercel.app/store',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Portfolio Website',
    description:
      'A responsive portfolio website to showcase my projects and skills. Built using modern web technologies for a seamless user experience.',
    stack: ['TypeScript', 'HTML', 'CSS', 'JavaScript', 'Bun'],
    sourceCode: 'https://github.com/LogicVirus/portfolio-website',
    livePreview: 'https://spacestatic.com',
  },
  {
    name: 'E-commerce Store',
    description:
      'A fully functional e-commerce store with product listings, shopping cart, and checkout functionality.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/LogicVirus/blog-with-comments',
    livePreview: 'https://blog-with-comments-cqmnhixg3-logicvirus.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'Node.js',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'joshperry2013@gmail.com',
}

export { header, about, projects, skills, contact }
