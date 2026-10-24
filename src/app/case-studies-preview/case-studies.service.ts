import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class CaseStudyService {

    caseStudies: CaseStudy[] = [
        {
            id: 1,
            name: 'RelPro',
            types: ['Product management', 'UX', 'Development'],
            img: 'assets/img/relpro-img.png',
            description: 'Product management and UX work on RelPro’s B2B sales intelligence platform, from contact and company data tools to adoption-driving features.',
            locked: true,
            lockedNote: 'This one’s under NDA, so I can’t share the details here — but I’d love to walk you through it directly. Reach out anytime!'
        },
        {
            id: 2,
            name: 'Quick Wrap Gifts',
            types: ['Brand', 'UX', 'Development'],
            img: 'assets/img/qwg-img.png',
            description: 'Research, branding and new web pages for a gift-wrapping business across the 2023 and 2024 holiday seasons.',
            routerLink: '/work/quick-wrap-gifts'
        },
        {
            id: 3,
            name: "L'Artusi Order-In App",
            types: ['UX case study', 'Mobile'],
            img: 'assets/img/artusi-img.png',
            description: 'End-to-end UX for a dine-in ordering app, from menu browsing and customizations through checkout.',
            routerLink: '/work/order-in-app'
        },
        {
            id: 4,
            name: 'Sillage',
            types: ['UX case study', 'Web & mobile'],
            img: 'assets/img/case-studies/sillage/hero-desktop.jpg',
            description: 'A trip planner for people who plan every detail, bringing itinerary, map, reservations and packing into one place. Designed and built as a desktop and mobile prototype, then tested on a real four-day trip to Colombia.',
            routerLink: '/work/sillage'
        }
    ]

    constructor() { }


}

export class CaseStudy {
    id: number | undefined;
    name!: string;
    types!: string[];
    img?: string;
    description?: string;
    href?: string;
    routerLink?: string;
    placeholderColor?: string;
    placeholderLabel?: string;
    locked?: boolean;
    lockedNote?: string;
}
