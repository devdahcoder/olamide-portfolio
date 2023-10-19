import { SocialMediaTypes, WorkFlowTypes, WorkType } from "../types";

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
            imageClass: 'image-class-1',
            imageContainerClass: 'container-1',
            imageSubContainerClass: 'sub-container-1',
        },
        title: 'Work 1',
        description: 'Description for Work 1',
        date: '2023-01-15',
        link: 'work-1-link',
        companyName: "Disney World"
    },
    {
        id: 2,
        image: {
            imageSrc: 'https://images.pexels.com/photos/1595437/pexels-photo-1595437.jpeg?auto=compress&cs=tinysrgb&w=400',
            imageAlt: 'Image 2',
            imageClass: 'image-class-2',
            imageContainerClass: 'container-2',
            imageSubContainerClass: 'sub-container-2',
        },
        title: 'Work 2',
        description: 'Description for Work 2',
        date: '2023-02-20',
        link: 'work-2-link',
        companyName: "Disney World"
    },
    {
        id: 3,
        image: {
            imageSrc: 'image3.jpg',
            imageAlt: 'Image 3',
            imageClass: 'image-class-3',
            imageContainerClass: 'container-3',
            imageSubContainerClass: 'sub-container-3',
        },
        title: 'Work 3',
        description: 'Description for Work 3',
        date: '2023-03-25',
        link: 'work-3-link',
        companyName: "Disney World"
    },
    {
        id: 4,
        image: {
            imageSrc: 'image4.jpg',
            imageAlt: 'Image 4',
            imageClass: 'image-class-4',
            imageContainerClass: 'container-4',
            imageSubContainerClass: 'sub-container-4',
        },
        title: 'Work 4',
        description: 'Description for Work 4',
        date: '2023-04-30',
        link: 'work-4-link',
        companyName: "Disney World"
    },
    {
        id: 5,
        image: {
            imageSrc: 'image5.jpg',
            imageAlt: 'Image 5',
            imageClass: 'image-class-5',
            imageContainerClass: 'container-5',
            imageSubContainerClass: 'sub-container-5',
        },
        title: 'Work 5',
        description: 'Description for Work 5',
        date: '2023-05-05',
        link: 'work-5-link',
        companyName: "Disney World"
    },

]