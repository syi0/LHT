import './body.css'

    function Body(){
        return(
            <div className = 'body'>
                <section className='photot'>
                    <img src="bg-photo" alt="" />
                </section>
                <section className='Opis'>
                <h1>Coś w stylu witamy na naszej strone</h1>
                <p>Tutaj jakiś opis co robimy</p>
                </section>
                <section className='logowanie'>
                <h2>Tutaj mozemy dac duzy przycik typu zaloguj lub zajerestruj sie</h2>
                <button>Zaloguj się</button>
                <p>Lub</p>
                <button>Zarejestruj się</button>
                </section>
                
            </div>
        );
    }

export default Body;