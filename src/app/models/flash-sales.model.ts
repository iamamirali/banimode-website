    export interface ProductSpecificPrice {
        specific_price: number;
        discount_amount: number;
        discount_percent: number;
        from: string;
        to: string;
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

    export interface SpecificPrice {
        specific_price: number;
        discount_amount: number;
        discount_percent: number;
        from: string;
        to: string;
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

    export interface FlashDatum {
        id: any;
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
        videos: any[];
        total_qty: number;
        size: Size[];
        product_size_guide: string[][];
        product_category_size_guide: ProductCategorySizeGuide;
        promotion_label?: any;
        available_notify: boolean;
        all_colors_pwa: AllColorsPwa[];
        all_colors: AllColor[];
    }

    export interface Data {
        data: FlashDatum[];
        bani_time: string;
        timer: number;
        time: string;
    }

    export interface FlashSalesRootObject {
        status: string;
        status_code: number;
        message: string;
        data: Data;
    }