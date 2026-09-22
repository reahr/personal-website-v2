import { Component } from '@angular/core';
import { LINK_REDIRECTS } from './link-redirects';

interface LinkItem {
  label: string;
  href?: string;
  routerLink?: string;
  external?: boolean;
  icon?: string;
}

interface ProjectCard {
  alt: string;
  image: string;
  href: string;
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  links: LinkItem[] = [
    { label: 'Amazon Storefront', href: 'https://www.amazon.com/shop/reahhr', external: true, icon: 'assets/img/icons/amazon.png' },
    { label: 'Pinterest', external: true, href: 'https://www.pinterest.com/taurestiadesigns/', icon: 'assets/img/icons/pinterest.png' },
    { label: 'Etsy', external: true, href: 'https://etsy.com/shop/TaurestiaDesignShop', icon: 'assets/img/icons/etsy.png' },
    // { label: 'Work', routerLink: '/' },
    // { label: 'Resume', href: '#' }
  ];

  projects: ProjectCard[] = [
    {
      alt: 'DIY Tile Coasters project card: ceramic tiles turned into tropical coasters',
      image: 'assets/img/projects/tile-coasters-diy.png',
      href: LINK_REDIRECTS['tile-coasters-diy']
    },
    {
      alt: 'The Ultimate Grinchmas Gift Box project card: DIY holiday gift box supplies',
      image: 'assets/img/projects/grinchmas-gift-box.webp',
      href: LINK_REDIRECTS['grinchmas-party-box']
    }
  ];
}
