import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
