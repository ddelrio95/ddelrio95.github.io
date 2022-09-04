// config.js
module.exports = {
    github: {
        username: 'ddelrio95', // Your GitHub org/user name. (Required)
        sortBy: 'updated', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        dribbble: 'ddelrio95',
        behance: 'dariodelrio1',
        discord: 'NxxrMj4b',
        tableau: 'https://public.tableau.com/app/profile/dario.del.rio',
        kaggle: 'https://www.kaggle.com/',
        linkedin: 'dariodelrio',
        twitter: 'ddelrio_95',
        facebook: 'ddelrio95',
        phone: '8132206280',
        email: 'dariodelrio14@gmail.com'
    },
    skills: [
        'Coding languages',
        'Databases',
        'Data structures and algorithms',
        'Source control',
        'Testing procedures',
        'Debugging knowledge',
        'Operating systems',
        'Text editing software',
        'Cryptography',
        'Software frameworks',
        'Cloud platforms',
        'Spreadsheet software',     
    ],
    experiences: [
        { 
            company: 'Upwork',
            position: 'Freelancer',
            from: '2017',
            to: 'Present'
        },
        { 
            company: 'LIVE & LET LIVE PHARMA LLC',
            position: 'Healthcare Data Analyst',
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
            degree: 'Bachelor of Science in Software Engineering',
            from: '2018',
            to: '2022',
        },
        { 
            institution: 'Hillsborough Community College',
            degree: 'Art/Art Studies, General',
            from: '2014',
            to: '2017',
        },
        { 
            institution: 'IPI Armando de la Rosa Ruiz',
            degree: 'High School Diploma, Information Technology',
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
