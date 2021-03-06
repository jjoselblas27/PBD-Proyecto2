import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../_service/cart.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', {static:false, read: ElementRef})fab: ElementRef;

  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.products = this.cartService.getMenu();
    
    this.cart =this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product){
    this.cartService.addProduct(product);
  }

  async openCart(){
      let modal = await this.modalCtrl.create({
        component: CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(()=>{
        this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      })
      modal.present();
  }


}
