import { JSXElement } from 'solid-js';
import { NAVIGATION_TYPE } from './../enum/index';

export type WorkFlowTypes = {

    id: number;
    figure: number;
    text: string;
    class?: string;

}

export type SocialMediaTypes = {

    id: number;
    text: string;
    link: string;

}

export type ImageType = {

    imageSrc: string;
    imageAlt: string;
    imageClass: string;
    imageContainerClass: string;
    imageSubContainerClass: string;

}

export type WorkType = {

    id: number;
    image: ImageType;
    title: string;
    description: string;
    date: string;
    link: string;
    companyName: string;
    className: string;

}

export type QuoteApiType = {

    author: string;
    category: string;
    quote: string;

}

export type StyleType = {
    style?: string | { [name: string]: any }
}

export type HeaderLinkType = {
    id: string | number;
    href?: string;
    text?: string;
    class?: string;
    style?: StyleType;
    icon?: JSXElement;
    containerClassName?: string;
    type: NAVIGATION_TYPE;
}