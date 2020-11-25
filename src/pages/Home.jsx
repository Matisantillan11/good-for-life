import React from 'react'
import Navbar from '../components/Navbar'


import chef from '../assets/images/chef.svg'
import '../assets/styles/pages/Home.css'
const Home = () => (
       
       <div>
            <Navbar />
            <main>
                <section>
                    <div className = "us">
                        <div className= "us-container">
                            <div className="description">
                                <div className="text-conteiner">
                                    <p>Si estás en una dieta, tienes alguna restricción de alimentos, debes comer algo especial, o simplemente tienes hábitos de alimentación saludable, nosotros cocinamos para vos.
                                    Todo lo hacemos en el día, con materia prima fresca, y además MUY RICO.... porque nos interesa que mientras disfrutas de tu comida, estés también cuidando tu salud.</p> 
                                </div> 
                                <a className="button social-media-icon"  href="">Zona Delivery</a>
                                <a className="button social-media-icon"  href="">Promociones</a>
                            </div>
                        </div>
                    </div>                
                </section> 
            </main>
        </div>

        
)

export default Home