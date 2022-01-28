export interface ImageSize {
    cart_default: string;
    small_default: string;
    medium_default: string;
    home_default: string;
    large_default: string;
    thickbox_default: string;
    thickbox_default2x: string;
    zoom: string;
}

export interface Image {
    alt: string;
    title: string;
    image_size: ImageSize;
}

export interface IColorImage {
    id: number;
    value: string;
    name: string;
    slug: string;
    image: Image[];
}
