import { Component } from '@angular/core';

interface LinkItem {
  label: string;
  href?: string;
  routerLink?: string;
  external?: boolean;
  icon?: string;
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
}
