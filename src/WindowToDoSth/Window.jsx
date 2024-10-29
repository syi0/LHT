import './Window.css'

export default function Window() {
    var stat="visible";
  

    return(
        <div className="window">
            <form action="">
                <label htmlFor="nazwaUslugi">Nazwa usługi: </label><input type="text" name="nazwaUslugi" id="nazwaUslugi" /> <br />
                <select style={{visibility: stat}} name="typeOfService" id="typeOfService">
                    <option value="first" defaultChecked>First</option>
                    <option value="second">Second</option>
                    <option value="third">Third etc</option>
                    <option value="other"></option>
                </select>
                <input type="text" name="otherType" id="otherType" />
                
            </form>
        </div>
    ); 
    
}