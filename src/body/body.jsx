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
                        <a href="/login"><button>Login</button></a> <a href="/register"><button>Register</button></a>
                    </section>
                </div>
            </div>
        );
    }

export default Body;