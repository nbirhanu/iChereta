import Tittle from '../UI/Tittle'
import HorizontalScroll from './HorizontalScroll'
import Banks from './Banks'
//
function Companies() {
	return (
		<>
			<Tittle />
			<HorizontalScroll>{<Banks />}</HorizontalScroll>
		</>
	)
}

export default Companies
