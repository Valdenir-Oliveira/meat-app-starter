import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurant.service";
@NgModule({
    providers:[ShoppingCartService, RestaurantService, OrderService]
})
export class CoreModule {

}