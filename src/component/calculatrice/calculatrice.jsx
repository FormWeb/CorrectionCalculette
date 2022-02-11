import { useState } from "react"
import "./calculatrice.css"

const Calculatrice = (props) => {
    const [nb1, setNb1] = useState("")
    const [nb2, setNb2] = useState("")
    const [op, setOp] = useState("+")
    const [result, setResult] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const number1 = parseFloat(nb1)
        const number2 = parseFloat(nb2)

        switch (op) {
            case "+":
                setResult(number1 + number2)
                break;
            case "-":
                setResult(number1 - number2)
                break;
            case "*":
                setResult(number1*number2)
                break;
            case "/":
                if (number2 !== 0) {
                    setResult(number1 / number2)
                }
                else {
                    setResult("Division par 0")
                }
                break;
        }

        setNb1("")
        setNb2("")
        setOp("+")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nb1 : </label>
                <input name="number1" id="nb1" type="number"
                    value={nb1}
                    onChange={(e) => setNb1(e.target.value)}
                    />
            </div>
            <div>
                <label>Operation</label>
                <select name="operator" id="op"
                    value={op}
                    onChange={(e) => setOp(e.target.value)}>
                    
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>

                </select>
            </div>
            <div>
            <label>Nb2 : </label>
                <input name="number2" id="nb2" type="number"
                    value={nb2}
                    onChange={(e) => setNb2(e.target.value)}
                    />
            </div>
            <div>
                <button type="submit">Calculer</button>
                <input type="text" value={result} readOnly/>
            </div>
        </form>
    )
}

export default Calculatrice