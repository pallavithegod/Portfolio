import { Code, Server, Database, Brain, Terminal, Globe, Layout, Cpu } from 'lucide-react';

export const skills = [
  { category: 'Languages', items: ['Java', 'C', 'JavaScript', 'MySQL'], icon: Code },
  { category: 'Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'GSAP'], icon: Layout },
  { category: 'Cloud & AI', items: ['Azure App Service', 'Azure AI', 'Google Gemini AI'], icon: Globe },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'], icon: Terminal },
];

export const projects = [
  {
    id: 1,
    title: 'Sanchit',
    tagline: 'AI Social Platform for College Peers',
    tech: ['Google Gemini AI', 'React', 'Node.js', 'Azure', 'Vercel'],
    description: 'College students struggle to discover relevant opportunities and get context-aware help. Sanchit uses AI + RAG to answer questions and suggest jobs from user documents.',
    star: {
      situation: 'College students struggle to discover relevant opportunities and get context-aware help.',
      task: 'Build a social platform using AI + RAG to answer questions and suggest jobs from user documents.',
      action: 'Implemented RAG pipelines over resumes/notes. Integrated context-aware conversational AI with Gemini LLMs.',
      result: 'Helps students get personalized answers and job suggestions from their own content.'
    },
    link: 'https://sanchitapp.vercel.app/', 
    github: 'https://github.com/garvit-arora/sanchit',
    image: '/project-sanchit.png' // Placeholder
  },
  {
    id: 2,
    title: 'DebtAI',
    tagline: 'AI-Powered Debt Helper',
    tech: ['React.js', 'Node.js', 'Gemini API', 'Tailwind CSS'],
    description: 'An AI-powered personal debt management platform that explains finances clearly and kindly.',
    star: {
      situation: 'People feel overwhelmed by personal debt and complex financial terms.',
      task: 'Create an AI-powered personal debt management platform that explains finances clearly.',
      action: 'Built React + Tailwind frontend. Used Gemini API to interpret financial data and generate guidance.',
      result: 'Helps everyday people understand debts and explore repayment structures with zero middlemen.'
    },
    link: 'https://debtai.in/',
    github: 'https://github.com/garvit-arora/debtai'
  },
  {
    id: 3,
    title: 'Cult Share',
    tagline: 'Peer-to-Peer Skill Exchange',
    tech: ['HTML', 'CSS', 'JS', 'React.js', 'Node.js'],
    description: 'A platform for users to exchange skills directly without money as a barrier. React frontend for listings, Node.js backend for profiles and matching.',
    link: 'https://cultshare.netlify.app/',
    github: 'https://github.com/pallavithegod/Cult_Share',
    isSimple: true
  },
  {
    id: 4,
    title: 'Snake Noir',
    tagline: 'Classic Browser Game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'A classic Snake game for browsers that runs smoothly on multiple devices. Implemented game logic from scratch in JavaScript with responsive layout.',
    link: 'https://snakenoir.netlify.app/',
    github: 'https://github.com/pallavithegod/Snake-Noir',
    isSimple: true,
    isFoundational: true
  },
  {
    id: 5,
    title: 'Mindful Haven',
    tagline: 'AI + Wellness App',
    tech: ['React', 'Node.js', 'Dialogflow', 'Gemini'],
    description: 'A mental wellness tool combining AI check-ins, productivity, and inclusive community.',
    isFoundational: true,
    isSimple: true,
    link: 'https://mindful-haven-six.vercel.app/',
    github: 'https://github.com/pallavithegod/Mindful-Haven'
  }
];

export const education = [
  {
    institution: 'Guru Gobind Singh Indraprastha Institute of Technology',
    degree: 'B.Tech in CSE',
    year: '2024–2028',
    score: 'SGPA: 9.1 / 10.0',
    location: 'Delhi, India'
  },
  {
    institution: 'Class 12',
    degree: 'School Academics',
    year: '',
    score: '94% (School Topper)',
    location: ''
  },
  {
    institution: 'Class 10',
    degree: 'School Academics',
    year: '',
    score: '96% (100% in 3 subjects)',
    location: ''
  }
];
