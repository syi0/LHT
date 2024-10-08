import './body.css'

    function Body(){
        return(
            <div className = 'body'>
                <section className='photo'>
                    <img src="bg-photo" alt="" />
                </section>
                <section className='Opis'>
                <h1>Witamy w BigService</h1>
                <p>To </p>
                </section>
                <section className='logowanie'>
                <h2>Tutaj mozemy dac duzy przycik typu zaloguj lub zajerestruj sie</h2>
                <button>Zaloguj się</button>
                <h3>Lub</h3>
                <button>Zarejestruj się</button>
                </section>
                
            </div>
        );
    }S

export default Body;