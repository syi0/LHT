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
                        <button><a href="/login">Login</a></button> <button><a href="/register">Register</a></button>
                    </section>
                </div>
            </div>
        );
    }

export default Body;