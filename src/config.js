// config.js
module.exports = {
    github: {
        username: 'ddelrio95', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'dariodelrio',
        twitter: 'ddelrio_95',
        facebook: 'ddelrio95',
        dribbble: 'ddelrio95',
        behance: 'dariodelrio1',
        discord: 'NxxrMj4b',
        website: 'https://dariodelrio95.github.io',
        phone: '8132206280',
        email: 'dariodelrio14@gmail.com'
    },
    skills: [
        'PHP',
        'JavaScript',
        'React.js',     
        'Node.js',
        'Jquery',
        'MySQL',
        'Git',
        'Docker',
        'HTML',
        'CSS',       
        'Tailwind',
        'Bootstrap',
        'MongoDB',
        'Python',
        'DJango',
        'Java',
        'C++',
        'C#',
        
        
    ],
    experiences: [
        { 
            company: 'Dario del Rio',
            position: 'Freelancer',
            from: '2017',
            to: 'Present'
        },
        { 
            company: 'Live and let live pharmacy',
            position: 'Data Analyst Manager',
            from: 'July 2017',
            to: 'Present'
        },
        { 
            company: 'Keiser University',
            position: 'QA Tester',
            from: 'January 2016',
            to: '2019'
        }
    ],
    education: [
        { 
            institution: 'Kaiser University',
            degree: 'Bachelor of Science',
            from: '2018',
            to: 'Present'
        },
        { 
            institution: 'IPI Armando de la Rosa Ruiz-Cuba',
            degree: 'Associate in IT',
            from: '2010',
            to: '2013',
        },
        
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'ddelrio95',
        limit: 4 // How many posts to display. Max is 10.
    },
    
    
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
