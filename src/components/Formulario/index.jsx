import { useEffect, useState } from "react"

const Calculadora = () => {

    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);

    useEffect (() => {
        console.log("O estado iniciou")
    }, []);

    useEffect (() => {
        console.log("materia A mudou para: " + Peso)
    }, [Peso, Altura]);

    const resultado = () => {
        const soma = Altura * Altura;
        const media = Peso / soma.toFixed(2);  
        let duasCasas = media.toFixed(2);

        console.log(soma)
        console.log(duasCasas)

        if (duasCasas >= 18.6 && duasCasas <= 29.9) {
            return (
                <p>Seu IMC é {duasCasas}, está normal</p>
            )
        }else  if (duasCasas >= 30.0 && duasCasas <= 34.9) {
            return (
                <p>Seu IMC é {duasCasas}, está com Obesidade Grau 1</p>
            )
        }else  if (duasCasas >= 35.0 && duasCasas <= 39.9) {

            return (
                <p>Seu IMC é {duasCasas}, está com Obesidade Grau 2</p>
            )
        }else  if (duasCasas >= 40.0) {
            return (
                <p>Seu IMC é {duasCasas}, está com Obesidade Grau 3</p>
            )
        } else if (duasCasas <= 18) {
            return (
                <p>Seu IMC é {duasCasas}, está Abaixo do Normal</p>
            )
        } else {
            return (
                <p>Vamos começar, qual seu peso e sua altura</p>
            )
        }
    }

    return (
        <form>
            <h1>Índice de Massa Corporal</h1>
            <input type="number" placeholder="Peso (kg)" onChange={evento => setPeso((evento.target.value))}/>
            <input type="number" placeholder="Altura (m)" onChange={evento => setAltura((evento.target.value))}/>
            {resultado()}
        </form>
    )
}

export default Calculadora