import React from 'react'
import './protfolio.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
import image6 from '../../assets/image6.png'

const Protfolio = () => {
  return (
    <section id='protfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container protofoli__container">
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image1} alt="image1" />
            </div>
            <h3>RESto</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/bimalesh07/Responsive-websites-Resto' className='btn' target='_blank'>Github</a>
              <a href='https://i.imgur.com/CAwMdJB.png' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image2} alt="image1" />
            </div>
            <h3>gguuhu</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/instagramCLone' className='btn' target='_blank'>Github</a>
              <a href='https://i.imgur.com/FNmqm89.png' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image3} alt="image1" />
            </div>
            <h3>Water Billings</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/bimalesh07/Responsive-websites-Resto' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/doTcU7i' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image4} alt="image1" />
            </div>
            <h3>Resto</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/bimalesh07/Responsive-websites-Resto' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/a/HYOD9cz' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image5} alt="image1" />
            </div>
            <h3>Travel</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/Income-Expanse-Manager' className='btn' target='_blank'>Github</a>
              <a href='https://imgur.com/6OzzVwy' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="protfolio__item">
          <div className="protfolio__item-image">
            <img src={image6} alt="image1" />
            </div>
            <h3>Grco</h3>  
            <div className='protfolio__item-cta'>
              <a href='https://github.com/abhay39/KBC' className='btn' target='_blank'>Github</a>
              <a href='https://bimalesh07.imgur.com/all' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Protfolio