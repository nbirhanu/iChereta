import { styled } from 'styled-components'

const headers = ['Invoice ID', 'Method', 'Invoice Date', 'Amount', 'Status']
const data = [
	['#6143503135', 1, 'December 12, 2023 03:35 PM', 2360, 0],
	['#6143503135', 2, 'December 16, 2023 08:25 PM', 2360, 0],
	['#6143503135', 5, 'December 19, 2023 06:34 PM', 23600, 0],
	['#6143503135', 8, 'December 28, 2023 03:35 PM', 2968, 0],
]

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 130%;
	margin-left: -15%;
	color: rgba(61, 89, 132, 1);
`

const StyledHeader = styled.th`
	background-color: rgba(241, 245, 249, 1);
	padding: 8px 16px;
	text-align: center;
	font-size: 1.4rem;
	color: rgba(61, 89, 132, 1);
`

const StyledRow = styled.tr`
	color: rgba(61, 89, 132, 1);
	font-size: 1.2rem;
	&:nth-child(even) {
		background-color: white;
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
