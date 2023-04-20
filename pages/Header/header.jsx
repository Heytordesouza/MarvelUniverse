import { ImageMarvel, Input } from "./header.styles"
import marvel from "../../public/marvel.jpg"
import Image from "next/image";

export default function Header(props) {

    const pesquisar = (e) => {
        props.setBuscar(e.target.value);
    };
    
    const onChangeOrdenacao = (e) => {
        props.setOrdenacao(e.target.value)
    }


    return (
        <>
        <ImageMarvel/>
        <Input>
            <input type="text" placeholder="Buscar por nome" onChange={pesquisar} value={props.buscar}/>
            <label>Ordenação: 
                <select value={props.ordenacao} onChange={onChangeOrdenacao}>
                    <option value="ordemLancamento">Ordem Lançamento</option>
                    <option value="ordemCronologica">Ordem Cronologica</option>
                </select>
            </label>
        </Input>
        </>
    )
}

