import { styled } from 'styled-components'

const headers = ['Invoice ID', 'Method', 'Invoice Date', 'Amount', 'Status']
const data = [['#6143503135', 1, 'December 12, 2023 03:35 PM', 2360, 0]]

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 130%;
	margin-left: -15%;
	color: rgba(61, 89, 132, 1);

	@media (max-width: 750px) {
		width: 100%;
		margin-left: 0;
	}
`

const StyledHeader = styled.th`
	background-color: rgba(241, 245, 249, 1);
	padding: 8px 16px;
	text-align: center;
	font-size: 1.4rem;
	color: rgba(61, 89, 132, 1);
	@media (max-width: 750px) {
		font-size: 1.2rem;
	}
	@media (max-width: 500px) {
		font-size: 1.1rem;
	}
`

const StyledRow = styled.tr`
	color: rgba(61, 89, 132, 1);
	font-size: 1.2rem;

	&:nth-child(even) {
		background-color: white;
	}
	@media (max-width: 750px) {
		font-size: 1.1rem;
	}
	@media (max-width: 500px) {
		font-size: 1rem;
	}
`

const StyledCell = styled.td`
	padding: 8px;
	text-align: center;
`

function InvoicesList() {
	return (
		<StyledTable>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<StyledHeader key={index}>{header}</StyledHeader>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, rowIndex) => (
					<StyledRow key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<StyledCell key={cellIndex}>{cell}</StyledCell>
						))}
					</StyledRow>
				))}
			</tbody>
		</StyledTable>
	)
}

export default InvoicesList
