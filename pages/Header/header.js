import { ImageMarvel, Input, Ordenacao } from "../../Styles/header.styles"

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
            <label ClassName="name">Filme ou Série</label>
            <input type="text" placeholder="Buscar por nome" onChange={pesquisar} value={props.buscar}/>
        </Input>
        <Ordenacao>
            <label>Ordenação: 
                <select value={props.ordenacao} onChange={onChangeOrdenacao}>
                    <option value="ordemLancamento">Ordem Lançamento</option>
                    <option value="ordemCronologica">Ordem Cronologica</option>
                </select>
            </label>
        </Ordenacao>
        </>
    )
}

