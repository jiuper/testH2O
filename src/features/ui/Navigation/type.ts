export interface INavigationType {
    classPrefix?: string;
    links: ILinksType[];
}

interface ILinksType {
    href: string;
    title: string;
}