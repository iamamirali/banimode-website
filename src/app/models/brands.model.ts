    export interface Datum {
        brand_id: number;
        name: string;
        slug: string;
        logo: string;
    }

    export interface BrandsRootObject {
        status: string;
        status_code: number;
        message: string;
        data: Datum[];
    }

