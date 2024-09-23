import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class CaseStudyService {

    caseStudies: CaseStudy[] = [
        {
            id: 1,
            name: 'RelPro',
            types: ['Product Management', 'UX', 'Development'],
            img: 'assets/img/relpro-img.png'
        },
        {
            id: 2,
            name: 'Quick Wrap Gifts',
            types: ['Brand', 'UX', 'Development'],
            img: 'assets/img/qwg-img.png'
        },
        {
            id: 3,
            name: 'Order-In App',
            types: ['UX Case Study', 'Personal'
            ],
            img: 'assets/img/artusi-img.png'
        },
        {
            id: 4,
            name: 'Wedding Guide',
            types: ['Printed Design', 'Infographic'],
            img: 'assets/img/wedding-guide-img.png'
        }
    ]

    constructor() { }


}

export class CaseStudy {
    id: number | undefined;
    name!: string;
    types!: string[];
    img!: string;
}
