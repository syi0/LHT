import './body.css'

    function Body(){
        return(
            <div className = 'body'>
                <div className='allText'>
                    <section className='photo'>
                        <img src="bg-photo" alt="" />
                    </section>
                    <section className='welcome'>
                        <h1>Welcome to BigService&trade;</h1>
                    </section>
                    <section className='logreg'>
                        <button>Login</button> <button>Register</button>
                    </section>
                </div>
            </div>
        );
    }

export default Body;