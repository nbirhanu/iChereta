import Tittle from '../UI/Tittle'
import HorizontalScroll from './HorizontalScroll'
// import Banks from './Banks'
import BankInfo from './BankInfo'
//
function Companies() {
	return (
		<>
			<Tittle />
			<HorizontalScroll>{<BankInfo />}</HorizontalScroll>
		</>
	)
}

export default Companies
