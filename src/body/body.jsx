import './body.css'
import image from '../assets/image.png'

    function Body(){
        return(
            <div className = 'body'>
                <div className='allText'>
                    <section className='photo'>
                        <img className='image' src={image} alt="" />
                    </section>
                    <section className='welcome'>
                        <h1>Welcome to BigService</h1>
                    </section>
                    <section className='logreg'>
                        <a href="/login"><button>Login</button></a> <a href="/register"><button>Register</button></a>
                    </section>
                </div>
            </div>
        );
    }

export default Body;