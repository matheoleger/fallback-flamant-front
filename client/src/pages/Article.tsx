import * as React from 'react'
import image from "../assets/img/paysage.png"
import "../assets/css/Article.css"
import { Item } from '../components/Item'


export const Article = () => {
    const table = new Item("Table",500,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus lacus facilisis nibh luctus, vitae interdum purus vulputate. Nunc pharetra lectus iaculis cursus vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce urna massa, finibus quis purus a, tempor aliquam massa. Vestibulum ac hendrerit dolor, a porta mauris. Curabitur quis sodales arcu, ac eleifend neque. Integer fermentum ligula nisl, eget rhoncus augue porta et.")
    return (
        <body>
        <div id='containerArticle'>
            <div id='photo'>
                <img id='img'src={image}/>
                
            </div>
            <div id='card'>
                <p id='title'>{table.name}</p>
                <p id='prix'>{table.price}€</p>
                <p id='description'>{table.desc}</p>
                <div id='cart'>

                </div>
            </div>
            
        </div>
        </body>
    )
}