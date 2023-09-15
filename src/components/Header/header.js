import { useRouter } from 'next/router'
import { ImageMarvel, InputContainer, OrdinationContainer } from "./header.styles"

export default function Header(props) {

    const { search, ordination, setSearch, setOrdination } = props

    const router = useRouter()

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const onChangeOrdination = (e) => {
        setOrdination(e.target.value)
    }

    return (
        <>
            {router.asPath === '/' ?
                <>
                    <ImageMarvel />
                    <InputContainer>
                        <label className="name">Filme ou Série</label>
                        <input type="text" placeholder="Buscar por nome" onChange={onChangeSearch} value={search} />
                    </InputContainer>
                    <OrdinationContainer>
                        <label>
                            <p>Ordenação:</p>
                            <select value={ordination} onChange={onChangeOrdination}>
                                <option value="releaseOrder">Ordem de Lançamento</option>
                                <option value="chronologicalOrder">Ordem Cronológica</option>
                            </select>
                        </label>
                    </OrdinationContainer>
                </>
                :
                <ImageMarvel />
            }
        </>
    )
}

