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
    title: 'Medics(Medical Appointment app)',
    desc: 'A React native mobile application to help individual/patients experience better hospitality from the comfort of their homes',
    image:'/images/projects/medics.png',
    tag:['All', 'Mobile'],
    gitUrl:'https://github.com/fohlarbee/medic.git',
    previewUrl:'https://github.com/fohlarbee/medic.git'
    },
    {
     id: '1',
    title: 'Pixco Image Gallery',
    desc: 'An image gallery using the pexels API, built on next.js 14 latest features',
    image:'/images/projects/pixco.png',
    tag:['All', 'Web'],
    gitUrl:'https://github.com/fohlarbee/Pixco-Gallery.git',
    previewUrl:'https://pixco-gallery.vercel.app/'
    },
    {
     id: '1',
    title: 'Fileshare',
    desc: 'Share protected files to friends and loved ones',
    image:'/images/projects/fileshare.png',
    tag:['All', 'Web'],
    gitUrl: 'https://github.com/fohlarbee/Fileshare-v1.git',
    previewUrl:'https://github.com/fohlarbee/Fileshare-v1.git'

    
    },
    {
     id: '1',
    title: 'MyMakaranta',
    desc: 'Experience education to it fullest with unlimited courses with diverse content and ethnic',
    image:'/images/projects/mymakaranta.png',
    tag:['All', 'Mobile'],
    gitUrl:'https://github.com/fohlarbee/myMakarantaMobile.git',
    previewUrl:''
    },
    {
     id: '1',
    title: 'Portofolio',
    desc: 'Portfolio website',
    image:'/images/projects/portfolio.png',
    tag:['All', 'Web'],
    gitUrl:"https://github.com/fohlarbee/my-portfolio.git",
    previewUrl:'https://my-portfolio-beta-three-33.vercel.app/'
    },

]
export default projects;