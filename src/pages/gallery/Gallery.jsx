import React from 'react'  
import './Gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import outubro from '../../data/outubro.jpg'
import novembro from '../../data/novembro.jpg'
import dezembro from '../../data/dezembro.jpg'
import janeiro from '../../data/janiero.jpg'
import fevereiro from '../../data/fevereiro.jpg'
import marco from '../../data/marco.jpg'
import abril from '../../data/abril.jpg'
import maio from '../../data/maio.jpg'
import junho from '../../data/junho.jpg'



const images = [ 
  {src : outubro , label  : 'Nosso primeiro date'},
  {src : novembro , label  : 'Primeira noite juntos ;-;'},
  {src : dezembro , label  : 'A copa que só valeu a pena pq torci com oce'},
  {src : janeiro , label  : 'O casal mais elegante do mundo!'},
  {src : fevereiro , label  : 'Nosso colaçãozinho'},
  {src : marco , label  : 'Aqui já estávamos 6 meses nos vendo O.O'},
  {src : abril , label  : 'Os melhores jantares são ao seu lado'},
  {src : maio , label  : 'O dia da sua suplesa hehehe'},
  {src : junho , label  : 'Oce fazeno meu cabelin do jeitinho que só você sabe ^^'}
 ]

const Gallery = () => {
  return (
    <div className='gallery'> 
        <Carousel  dynamicHeight infiniteLoop autoPlay swipeableswipeable> 
          {images.map(image => (
            <div key={image.src} className='item'>
              <h4 className='legenda'>{image.label}</h4>
              <img src={image.src} alt='Falha ao carregar'/>
            </div>
          ))}
        </Carousel>
    </div>
  )
}

export default Gallery