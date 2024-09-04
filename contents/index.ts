import { NAVIGATION_TYPE } from "../enum";
import BigStarIcon from '../icon/big-star-icon';
import LoveIcon from '../icon/love-icon';
import SmallStartIcon from '../icon/small-star-icon';
import { ExperienceType, HeaderLinkType, ImageScrollType, PlaygroundType, QuoteApiType, ServiceMobileType, ServiceType, SocialMediaTypes, WorkFlowTypes, WorkType } from "../types";

export const workFlowArrayContent: Array<WorkFlowTypes> = [

    {

        id: 1,
        figure: 0o1,
        text: "requirements analysis",
        class: "",

    },
    {

        id: 2,
        figure: 0o2,
        text: "ask about deadline and restrictions",
        class: "",

    },
    {

        id: 3,
        figure: 0o3,
        text: "setting up the environment",
        class: "",

    },
    {

        id: 4,
        figure: 0o4,
        text: "programming",
        class: "",

    },
    {

        id: 5,
        figure: 0o5,
        text: "testing my results",
        class: "",

    },
    {

        id: 6,
        figure: 0o6,
        text: "supporting and scaling my code",
        class: "",

    }

]

export const socialMediaContent: Array<SocialMediaTypes> = [

    {

        id: 1,
        text: "Github",
        link: "",

    },
    {

        id: 2,
        text: "LinkedIn",
        link: "https://www.linkedin.com/yourprofile",

    },
    {

        id: 3,
        text: "Twitter",
        link: "https://twitter.com/yourhandle",

    },
    {

        id: 5,
        text: "Medium",
        link: "https://medium.com/@yourusername",

    }

]

export const workContent: Array<WorkType> = [

    {
        id: 1,
        image: {
            imageSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 1',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
        title: 'OakLane',
        description: 'Description for Work 1',
        date: '2023-01-15',
        link: 'work-1-link',
        companyName: "OkaLane",
        className: "start",
        tools: ["Nextjs", "Axios", "GraphQl", "Unstated Next", "Javascript"],
        type: ["Design concept", "Website", "User Experience", "User Interface"]
    },
    {
        id: 2,
        image: {
            imageSrc: 'https://images.pexels.com/photos/1595437/pexels-photo-1595437.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 2',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
        title: 'ScaleIn',
        description: 'Description for Work 2',
        date: '2023-02-20',
        link: 'work-2-link',
        companyName: "ScaleIn",
        className: "end",
        tools: ["Nextjs", "Axios", "GraphQl", "Unstated Next", "Javascript"],
        type: ["Design concept", "Website", "User Experience", "User Interface"]

    },
    {
        id: 3,
        image: {
            imageSrc: 'URL_FOR_IMAGE_3',
            imageAlt: 'Image 3',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
        title: 'KaseFile',
        description: 'Description for New Project 1',
        date: '2023-03-10',
        link: 'new-project-1-link',
        companyName: "NewProject1",
        className: "middle",
        tools: ["React", "Redux", "TypeScript", "Styled Components"],
        type: ["Design concept", "Website", "User Experience", "User Interface"]

    },
    {
        id: 4,
        image: {
            imageSrc: 'URL_FOR_IMAGE_4',
            imageAlt: 'Image 4',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
        title: 'Magnalense',
        description: 'Description for New Project 2',
        date: '2023-04-05',
        link: 'new-project-2-link',
        companyName: "NewProject2",
        className: "middle",
        tools: ["Vue.js", "Vuex", "SCSS", "Webpack"],
        type: ["Design concept", "Website", "User Experience", "User Interface"]

    },
    {
        id: 5,
        image: {
            imageSrc: 'URL_FOR_IMAGE_5',
            imageAlt: 'Image 5',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
        title: 'Quidate',
        description: 'Description for New Project 3',
        date: '2023-05-15',
        link: 'new-project-3-link',
        companyName: "NewProject3",
        className: "end",
        tools: ["Angular", "RxJS", "NgRx", "Bootstrap"],
        type: ["Design concept", "Website", "User Experience", "User Interface"]

    }

];


export const headerLinksContent: Array<HeaderLinkType> = [

    // {
    //     id: 1,
    //     href: "#",
    //     text: "Home",
    //     class: "",
    //     style: {},
    //     type: NAVIGATION_TYPE.LINK,
    //     leftLinkElement: BigStarIcon,
    //     rightLinkElement: BigStarIcon,
    // },
    {
        id: 1,
        href: "#about",
        text: "About",
        class: "",
        style: {},
        type: NAVIGATION_TYPE.LINK,
        leftLinkElement: LoveIcon,
        rightLinkElement: BigStarIcon,
    },
    {
        id: 2,
        href: "#work",
        text: "Work",
        class: "",
        style: {},
        type: NAVIGATION_TYPE.LINK,
        rightLinkElement: BigStarIcon,
        leftLinkElement: SmallStartIcon,

    },
    // {
    //     id: 4,
    //     href: "#work-flow",
    //     text: "WorkFlow",
    //     class: "",
    //     style: {},
    //     type: NAVIGATION_TYPE.LINK,
    //     leftLinkElement: LoveIcon,
    //     rightLinkElement: BigStarIcon,
    // },
    {
        id: 3,
        href: "#contact",
        text: "Contact",
        class: "",
        style: {},
        type: NAVIGATION_TYPE.LINK,
        leftLinkElement: BigStarIcon,
        rightLinkElement: BigStarIcon,
    },

];

export const quoteContent: QuoteApiType = {
    author: "Cory House",
    category: "programming",
    quote: "Code is like humor. When you have to explain it, it's bad.",
}

export const serviceContent: ServiceType[] = [
    {
        id: 1,
        services: ["Web Design", "Mobile Apps"]
    },
    {
        id: 2,
        services: ["Web Development", "Branding"]
    },
    {
        id: 3,
        services: ["WebFlow", "Framer Motion"]
    },
    {
        id: 3,
        services: ["Web Flow", "Framer Motion"]
    },
]

export const serviceMobileContent: ServiceMobileType[] = [
    {
        id: 1,
        services: "Web Develop"
    },
    {
        id: 2,
        services: "Mobile Apps"
    },
    {
        id: 3,
        services: "WebFlow Dev"
    },
    {
        id: 4,
        services: "Framer Motion"
    },
]

export const playgroundContent: PlaygroundType[] = [
    {
        id: 1,
        name: "Web design",
        description: "This is project 1",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
    {
        id: 2,
        name: "Project 2",
        description: "This is project 2",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
    {
        id: 3,
        name: "Project 3",
        description: "This is project 3",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
    {
        id: 4,
        name: "Project 4",
        description: "This is project 4",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
    {
        id: 5,
        name: "Project 5",
        description: "This is project 5",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
    {
        id: 6,
        name: "Project 6",
        description: "This is project 6",
        link: "XXXXXXXXXXXXXXXXXXXXXXXX",
        tools: ["Reactjs", "TypeScript", "Html", "Css"]
    },
]

export const experienceContent: ExperienceType[] = [
    {
        id: 1,
        title: "Discovery",
        description: "In this initial phase, the goal is to identify your user's pain points and business goals. I gather valuable insights and specific needs that will direct the design process and establish guides for subsequent steps.",
    },
    {
        id: 2,
        title: "Research",
        description: "Then I analyze the clear project goals and how they can be achieved. I conduct user research through surveys, competitor analysis, industry trends, and recent design concepts.",
    },
    // {
    //     id: 3,
    //     title: "Ideation",
    //     description: "In this initial phase, the goal is to identify your user's pain points and business goals. I gather valuable insights and specific needs that will direct the design process and establish guides for subsequent steps.",
    // },
    {
        id: 3,
        title: "Development",
        description: "Afterward, I translate the approved design into a functional product ensuring responsiveness, accessibility, and functionality brining your project to life. ",
    },
    {
        id: 4,
        title: "Testing",
        description: "Successively, I conduct usability testing across screen sizes for effective display and functionality and iterate based on the findings.",
    },
    {
        id: 5,
        title: "Maintenance",
        description: "Once the product is launched, I provide support to ensure the website continuously meet user needs and business goal.",
    },
]

export const imageScrollContent: ImageScrollType[] = [
    {
        id: 1,
        text: "Image 1",
        image: {
            imageSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 1',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
    },
    {
        id: 2,
        text: "Image 2",
        image: {
            imageSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 2',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
    },
    {
        id: 3,
        text: "Image 3",
        image: {
            imageSrc: 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 3',
            imageClass: 'image',
            imageContainerClass: 'image--container',
            imageSubContainerClass: 'image--sub--container',
        },
    },
]