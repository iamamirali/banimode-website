export interface ProductSpecificPrice {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
    from?: any;
    to?: any;
}

export interface Images {
    cart_default: string[];
    small_default: string[];
    medium_default: string[];
    home_default: string[];
    large_default: string[];
    thickbox_default: string[];
    thickbox_default2x: string[];
    zoom: string[];
}

export interface Video {
    title: string;
    video_path: string;
    poster_path: string;
}

export interface SpecificPrice {
    specific_price: number;
    discount_amount: number;
    discount_percent: number;
    from?: any;
    to?: any;
}

export interface Size {
    name: string;
    slug: string;
    id_size: number;
    position: number;
    reference: string;
    extra_barcodes: string[];
    id_product_attribute: number;
    active: number;
    quantity: number;
    specific_price: SpecificPrice;
}

export interface ProductCategorySizeGuide {
    image: string;
    top_description: string;
    bottom_description: string;
}

export interface PromotionLabel {
    title: string;
    icon: string;
    background_color: string;
    text_color: string;
    icon_color: string;
}

export interface AllColorsPwa {
    value: string;
    name: string;
    slug: string;
}

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

export interface AllColor {
    id: number;
    value: string;
    name: string;
    slug: string;
    image: Image[];
}

export interface SugessDatum {
    id_product: number;
    id_product_attribute: number;
    id_color: number;
    product_reference: string;
    link: string;
    product_name: string;
    product_price: number;
    product_manufacturer_name: string;
    product_manufacturer_en_name: string;
    product_manufacturer_id: number;
    product_manufacturer_slug: string;
    product_specific_price: ProductSpecificPrice;
    color_name: string;
    color_slug: string;
    color_value: string;
    images: Images;
    videos: Video[];
    total_qty: number;
    size: Size[];
    product_size_guide: string[][];
    product_category_size_guide: ProductCategorySizeGuide;
    promotion_label: PromotionLabel;
    available_notify: boolean;
    all_colors_pwa: AllColorsPwa[];
    all_colors: AllColor[];
}

export interface Data {
    data: SugessDatum[];
}

export interface SuggestionsRootObject {
    status: string;
    status_code: number;
    message: string;
    data: Data;
}