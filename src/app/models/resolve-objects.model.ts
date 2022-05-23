import { Observable } from "rxjs";
import { FlashSalesRootObject } from "./flash-sales.model";
import { SuggestionsRootObject } from "./suggestions.model";

export interface IhomeData {
    flashSales: Observable<FlashSalesRootObject>,
    suggestions: Observable<SuggestionsRootObject>
}