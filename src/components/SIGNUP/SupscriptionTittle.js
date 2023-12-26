import { styled } from 'styled-components'

const TittleContainer = styled.div`
	width: 100%;
	margin-bottom: 2.4rem;
	line-height: 1.7;
	@media (max-width: 600px) {
		margin-left: 5rem;
	}
	@media (max-width: 500px) {
		margin-left: 0;
	}
	@media (max-width: 450px) {
		margin-left: 5rem;
	}
	@media (max-width: 400px) {
		margin-left: 8rem;
	}
`
const P = styled.p`
	color: rgba(55, 65, 81, 1);
	font-size: 1.3rem;
	font-weight: 700;
`

function SupscriptionTittle() {
	return (
		<TittleContainer>
			<P>የአባልነት ጥቅል ይምረጡ</P>
			<P style={{ color: 'rgba(22, 163, 74, 1)', fontSize: '1.1rem', fontWeight: '400' }}>
				የአመታዊ ጥቅል በመጠቀም አገልግሎቱን በቅናሽ ያግኙ ።
			</P>
		</TittleContainer>
	)
}

export default SupscriptionTittle
