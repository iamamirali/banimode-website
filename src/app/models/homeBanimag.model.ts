export interface Category {
    id: number;
    name: string;
    slug: string;
    link: string;
}

export interface Datum {
    title: string;
    excerpt: string;
    link: string;
    category: Category;
    image: string;
    image_large: string;
}

export interface HomeBanimagRootObject {
    status: string;
    status_code: number;
    message: string;
    data: Datum[];
}