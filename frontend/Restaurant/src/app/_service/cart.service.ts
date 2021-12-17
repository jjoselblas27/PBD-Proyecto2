import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


export interface Product{
  id: number;
  name: string;
  type: string;
  price: number;
  url: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //De momento se agrega manual
  data: Product[] = [
  {id: 1, name:'California Roll', type:'Maki' ,price:24.99, amount:1 ,url:'https://upload.wikimedia.org/wikipedia/commons/d/db/California_Sushi_mit_Kaviar_%2826545022496%29.jpg'},
  {id: 2, name:'Acevichado', type:'Maki' ,price:27.99, amount:1 , url:'https://peru21.pe/resizer/Bxntyet0tLX-_PjUDW5qJ1jKdx8=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BPOGEJV3R5BXVFMILT47MX4XUE.jpg'},
  {id: 3, name:'Causa Roll', type:'Maki' ,price:24.99, amount:1, url:'https://scontent.flim19-1.fna.fbcdn.net/v/t1.6435-9/122384661_3668708519848607_4554802284965811823_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeFOxS3fGYl36UFutHQJjxzm22-4MtwEa_bbb7gy3ARr9lXAmbSHVtKzLnE-TKH-dvOEB9DBQkD_SMZyYaji6BUh&_nc_ohc=Axt_e-6KOgUAX9k9Nnd&_nc_ht=scontent.flim19-1.fna&oh=8db6ccbb5a558a48b3f0cd2400be1b1a&oe=61D9C53B'},
  {id: 4, name:'Lomo Saltado Maki', type:'Maki' ,price:19.99, amount:1, url:'https://media-cdn.tripadvisor.com/media/photo-s/1a/67/98/41/lomo-saltado-maki.jpg'},
  {id: 5, name:'Ramen', type:'Sopa' ,price:19.99, amount:1, url:'https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen-300x300.jpg'},
  {id: 6, name:'Yakitori', type:'Brocheta' ,price:39.99, amount:1, url:'https://okdiario.com/img/2018/05/19/pollo-yakitori-655x368.jpg'}
  ];

  private cart =[];
  private cartItemCount = new BehaviorSubject(0);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  
  getMenu(){
    //return this.http.get<any>('http://localhost:3000/menu'); <= De momento no se usa
    return this.data;
    
    }

  getCart(){
    return this.cart;
  }
    
  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for(let p of this.cart){
      if(p.id === product.id){
        p.amount +=1;
        added = true;
        break;
      }
    }
    if (!added){
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product){
    for(let [index, p] of this.cart.entries()) {
      if(p.id === product.id){
        p.amount -=1;
        if (p.amount ==0){
          this.cart.splice(index,1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product){
    for(let[index,p] of this.cart.entries()){
      if(p.id===product.id){ 
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index,1);
      }
    }
  }
  
  goback(product){
    this.router.navigate(['/home']);
  }

}
