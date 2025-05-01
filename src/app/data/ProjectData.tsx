type ProjectType = {
    id: string,
    title: string
    desc: string,
    image: string
    tag: string[],
    gitUrl: string,
    previewUrl: string
}

let projects: ProjectType[] = [
    {
        id: '1',
        title: 'Co-git',
        desc: 'Manage massive codebases with AI. Summarize, search, and commit smarter with Co-Git.',
        image:'/images/projects/co-git.png',
        tag:['All', 'Web'],
        gitUrl:'https://github.com/fohlarbee/co-git',
        previewUrl:'https://co-git.vercel.app'

    },
    {
        id: '2',
        title: 'ChatiePDF',
        desc: "ChatPDF is a Next.js application that allows users to chat and interact with PDF documents. This project leverages the power of Next.js, Clerk for authentication, and Stripe for handling payments and subscriptions.",
        image:'/images/projects/chatiePDF.png',
        tag:['All', 'Web'],
        gitUrl:'https://github.com/fohlarbee/chatpdf',
        previewUrl:'https://chatpdf-navy-one.vercel.app'


    },
    {
        id:'3',
        title:'QuizMe-ng',
        desc:'QuizMe-ng is a web-based quiz application that allows users to create, take, and manage quizzes.',
        image:'/images/projects/quizme-ng.png',
        tag:['All', 'Web'],
        gitUrl:'https://github.com/fohlarbee/quizme',
        previewUrl:'https://quizme-iota.vercel.app'
    },
    {
        id:'4',
        title: 'GistFiesta',
        desc:'GistFiesta is a web-based platform where I get to share my thoughts, ideas, and experiences with the world.',
        image:'/images/projects/gist-fiesta.png',
        tag:['All', 'Web'],
        gitUrl:'https://github.com/fohlarbee/GistFiesta,',
        previewUrl:'https://gist-fiesta.vercel.app'
    },

    {
     id: '5',
    title: 'Medics(Medical Appointment app)',
    desc: 'A React native mobile application to help individual/patients experience better hospitality from the comfort of their homes',
    image:'/images/projects/medics.png',
    tag:['All', 'Mobile'],
    gitUrl:'https://github.com/fohlarbee/medic.git',
    previewUrl:'https://github.com/fohlarbee/medic.git'
    },
    {
     id: '6',
    title: 'Pixco Image Gallery',
    desc: 'An image gallery using the pexels API, built on next.js 14 latest features',
    image:'/images/projects/pixco.png',
    tag:['All', 'Web'],
    gitUrl:'https://github.com/fohlarbee/Pixco-Gallery.git',
    previewUrl:'https://pixco-gallery.vercel.app/'
    },
    {
     id: '7',
    title: 'Fileshare',
    desc: 'Share protected files to friends and loved ones',
    image:'/images/projects/fileshare.png',
    tag:['All', 'Web'],
    gitUrl: 'https://github.com/fohlarbee/Fileshare-v1.git',
    previewUrl:'https://github.com/fohlarbee/Fileshare-v1.git'

    
    },
    {
     id: '8',
    title: 'MyMakaranta',
    desc: 'Experience education to it fullest with unlimited courses with diverse content and ethnic',
    image:'/images/projects/mymakaranta.png',
    tag:['All', 'Mobile'],
    gitUrl:'https://github.com/fohlarbee/myMakarantaMobile.git',
    previewUrl:''
    },
    {
     id: '9',
    title: 'Portfolio',
    desc: 'Portfolio website',
    image:'/images/projects/portfolio.png',
    tag:['All', 'Web'],
    gitUrl:"https://github.com/fohlarbee/my-portfolio.git",
    previewUrl:'https://my-portfolio-beta-three-33.vercel.app/'
    },
    {
        id: '10',
       title: 'Safewalls',
       desc: 'An Anonymous and Safe Space for General Well-being and Psycho-social Support',
       image:'/images/projects/safewalls.png',
       tag:['All', 'Mobile'],
       gitUrl:"https://github.com/sheggzcalebs/safewalls_server_v2_fola",
       previewUrl:'https://www.safewalls.app'
       },
       {
        id: '11',
       title: 'Quik-quik.ng',
       desc: 'Quik-Quik QR code lets customers order and pay by themselves, without having to tell a waiter. This makes things easier for the waiters and more fun for the customers. Its like magic!',
       image:'/images/projects/quik-quik.png',
       tag:['All', 'Web'],
       gitUrl:"https://github.com/fohlarbee/quik-quik-client",
       previewUrl:'https://quik-quik.com'
       },
       {
        id: '12',
       title: 'Agro-link.ng',
       desc: 'Agro-Link.ng is a web-based SaaS platform designed to bridge the gap between farmers and consumers by introducing an in-house middleman or farmer representative. This representative, who is part of the business of a registered farmer on the platform, will be responsible for handling all sales and interactions with consumers. By doing so, farmers can focus on their core activities—cultivation and production—while the middleman ensures their produce reaches consumers effectively.',
       image:'/images/projects/agro-link-ng.png',
       tag:['All', 'Web'],
       gitUrl:"https://github.com/fohlarbee/agro-fast-client",
       previewUrl:'https://agro-link-ng.netlify.app'
       },
    

]
export default projects;