export interface userData {
    name : string;
    email : string;
    password : string;
    wishList :{}[];
    products: {}[]
}

export interface productData {
    name: string;
    category: string;
    price: string;
    not_in_stock: boolean;
    purchased: boolean;
    wishList: {}[];
}

export interface wishListData {
    name : string,

} 

