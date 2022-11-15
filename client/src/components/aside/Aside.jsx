import './Aside.css'
import PokeSearch from '../poke-search/PokeSearch'
import PokemonFilterType from '../pokemon-filter-type/PokemonFilterType'

const Aside = () => {
 return (
        <aside>
            <PokeSearch />
            <PokemonFilterType />
        </aside>
    )
}

export default Aside