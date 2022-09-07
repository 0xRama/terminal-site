/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nmale\n18\nstudent\nself taught developer\ncybersec-student\nweeb\nsong-addict\nanti-social\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/0xrama', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/0xrama', '_blank')
                return "opening github account..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'twitter',
            fn: () => {
                window.open('https://discordapp.com/users/826356320797065216', '_blank')
                return "opening discord account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 100%
                    telugu           - 100%
                    hindi            - 100%
                    python           - 90%
                    javascript       - 90%
                    html5            - 100%
                    css3             - 100%
                    C++              - 10% - [learning]
                    go-lang          - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 80%
                    studying         - 30%
                    overthinking     - 100%
                    social-skills    - 00%
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'react-typing-test'                         | 'typing-test'   | 'typescript'
                    'discordspy'                                | 'windows rat using discord as c2' | 'python'
                    'Kazumi'                                    | 'Discord-Bot'          | 'python'
                    'eternal-conference'                        | 'small scale conference website'   | 'javascript'
                    'spotify-together'                          | 'listen together without premium'  | 'python'
                    'pwnpi-reborn'                              | 'custom forked version of pwnpi with improvements'     | 'javascript'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : dracula\n
                    Font  : default
                `
            }
        },
        website: {
            description: "Opens my website",
            usage: 'website',
            fn: () => {
                window.open("https://0xrama.xyz", '_blank')
                return "opening website..."
            }
        },
        typing: {
            description: "opens my typing test",
            usage: 'typing',
            fn: () => {
                window.open("http://typing-test-flame.vercel.app/", '_blank')
                return "opening website..."
            }
        },
        wallpaper: {
            description: "wallpaper credit",
            usage: 'wallpaper',
            fn: () => {
                return ` 
                Artist: WLOP
                Source: wallhaven.cc
                `    
            }
        },
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        },

    }
}
