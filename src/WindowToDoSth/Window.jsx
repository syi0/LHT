import './Window.css'

export default function Window() {
    selection = document.getElementById("typeOfService")
    if (selection.value == "other") {
        document.getElementById("otherType").style.visibility = "visible";
    } else {
        document.getElementById("otherType").style.visibility = "hidden";
    }

    return(
        <div className="window">
            <form action="">
                <label htmlFor="nazwaUslugi">Nazwa usługi: </label><input type="text" name="nazwaUslugi" id="nazwaUslugi" /> <br />
                <select name="typeOfService" id="typeOfService">
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