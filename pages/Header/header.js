import { ImageMarvel, InputContainer, OrdinationContainer } from "../../Styles/header.styles"

export default function Header(props) {

    const {search, ordination, setSearch, setOrdination } = props

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    
    const onChangeOrdination = (e) => {
        setOrdination(e.target.value)
    }

    return (
        <>
        <ImageMarvel/>
        <InputContainer>
            <label ClassName="name">Filme ou Série</label>
            <input type="text" placeholder="Buscar por nome" onChange={onChangeSearch} value={search}/>
        </InputContainer>
        <OrdinationContainer>
            <label>
                <p>Ordenação:</p>
                <select  value={ordination} onChange={onChangeOrdination}>
                    <option value="releaseOrder">Ordem de Lançamento</option>
                    <option value="chronologicalOrder">Ordem Cronológica</option>
                </select>
            </label>
        </OrdinationContainer>
        </>
    )
}

