const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://me.spacestatic.com/',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Josh Perry',
  role: 'Educational Support Advocate',
  description:
    'Certified Educational Support Advocate at Tufts University, assisting with applications, hardware, and software to enhance learning through technology.',
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
    livePreview: 'https://me.spacestatic.com/',
  },
  {
    name: 'E-commerce Store',
    description:
      'A fully functional e-commerce store with product listings, shopping cart, and checkout functionality.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/LogicVirus/blog-with-comments',
    livePreview: 'https://blog-with-comments-cqmnhixg3-logicvirus.vercel.app/store',
  },
  {
    name: 'Chat GPT Calorie Counter',
    description:
      'A ChatGPT-powered calorie counter to help track daily caloric intake and provide nutritional information.',
    stack: ['JavaScript', 'ChatGPT API', 'React'],
    livePreview: 'https://chatgpt.com/g/g-AqYUyFTof-calorie-counter',
  },
  {
    name: 'SpaceStatic App',
    description:
      'A space-themed resource management game for real-life strategy and operation planning. Currently under development.',
    stack: ['TypeScript', 'React', 'Node.js'],
    sourceCode: 'https://github.com/LogicVirus/spacestatic-game',
    livePreview: 'https://app.spacestatic.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Nodejs',
  'Bun',
  'Git',
  'Application Support',
  'Hardware Troubleshooting',
  'Software Troubleshooting'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jperry09@tufts.edu',
}

export { header, about, projects, skills, contact }
