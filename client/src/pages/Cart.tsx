import * as React from 'react';
import { useState } from 'react';
import "../assets/css/Cart.css";
import item1 from "../assets/img/item1.jpg"
import item2 from "../assets/img/item2.jpg"
import item3 from "../assets/img/item3.png"
export const Cart = () => {
    // Stocker les produits dans le panier
    const [cart, setCart] = useState([]);
  
    // Gestionnaire d'événement pour ajouter un produit au panier
    const AddToCart = (product: any) => {
      setCart(product);
    };
    const totalPrice =100;
    return (
        <body>
        <div>
            <header>
                <div className="header">
                    <span className="boxed">
                    <li><a href="#">Accueil</a></li>
                    </span>
                </div>
                <div className="nav_box">
                   
                    <form>
                    <input type="search" name="q" placeholder="RECHERCHER UN PRODUIT..." />
                    <input type="submit" value="" />  
                    </form>   
                </div>
                <div>
                    <img src="user-profile-icon.jpg" ></img>
                </div>
                <div>
                    <img src="cartIcon.png"></img>  
                </div>
            </header>
            <nav>
                
                <div className ="container">
                    <div id='box'>
                        <div id='img'> 
                        <img src={item1} title="Lorem ipsum"/>
                        <img src={item2} title="Lorem ipsum"/>
                        <img src={item3} title="Lorem ipsum"/>
                        </div>
                    </div>
                </div>
            </nav> 
            
            
            
        </div >
        </body>
    );
}