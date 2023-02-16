import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish: Dish;
    route: ActivatedRoute

    constructor(private dishService: DishService, 
      private location: Location, 
      route: ActivatedRoute) {
        this.dish = new Dish();
        this.route = route;
    }

    ngOnInit(): void {
      let id = this.route.snapshot.params['id'];
      this.dish = this.dishService.getDish(id);
    }

    goBack(): void {
      this.location.back();
    }
}
