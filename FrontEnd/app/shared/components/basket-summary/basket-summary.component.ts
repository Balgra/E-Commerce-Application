import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasket> = new EventEmitter<IBasket>();
  @Output() increment: EventEmitter<IBasket> = new EventEmitter<IBasket>();
  @Output() remove: EventEmitter<IBasket> = new EventEmitter<IBasket>();
  @Input() isBasket = true;


  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem)
  {
    // @ts-ignore
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem)
  {
    // @ts-ignore
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem)
  {
    // @ts-ignore
    this.remove.emit(item);
  }

}
