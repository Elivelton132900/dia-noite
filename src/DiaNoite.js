import React from "react";
import './dianoite.css'

const DiaNoiteConfig = {
    dia: {
        texto: 'Está de dia.',
        icone: 'sun'
    },

    noite: {
        texto: 'Está de noite.',
        icone: 'moon'
    }
}

const DiaNoite = (props) => {
    console.log(props.hora)
    const checaHorario = props.hora.split(':')[0]
    const diaOuNoite = checaHorario >= 5 && checaHorario < 18 ? 'dia' : 'noite'

    const {texto, icone} = DiaNoiteConfig[diaOuNoite]
    console.log(texto, icone)

    return (
        <div className={`dianoite ${diaOuNoite}`}>
            <i className={`icon massive ${icone} direita`}></i>
            <h1>{texto}</h1>
            <h2>Agora é  <span className="horario">{props.hora}</span> </h2>
            <i className={`icon massive ${icone} esquerda`}></i>
        </div>
    )
}

export default DiaNoite