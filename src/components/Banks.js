import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
//
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
//
import React from 'react'

const BanksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2.2rem;
`
const BankDiv = styled.div`
	width: 210px;
	height: 170px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 1px solid rgba(102, 75, 199, 0.1);
	box-shadow: 2px 6px 8px -2px rgba(102, 75, 199, 0.1);
	border-radius: 5px;
	transition: transform 0.5s ease;
	&:hover {
		transform: scale(1.1) translateZ(20px);
	}
	@media (max-width: 1000px) {
		width: 200px;
	}
`
const BankLogoDiv = styled.div`
	width: 7rem;
	height: 5rem;
`
const BankLogo = styled.img`
	width: 100%;
	height: 100%;
	margin-bottom: 2rem;
	margin-top: 1.8rem;
`
const TittleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const BankTittle = styled.p`
	color: rgba(31, 41, 55, 0.9);
	font-weight: 600;
	font-size: 1.4rem;
`
const BankAddress = styled.p`
	color: rgba(31, 41, 55, 0.5);
`
const TenderNumDiv = styled.div`
	width: 100%;
	background-color: rgba(240, 247, 230, 1);
	text-align: center;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	margin-top: 0.4rem;
`
const TenderNum = styled.p`
	color: rgba(22, 163, 74, 1);
	font-size: 1.4rem;
	font-weight: 700;
	padding: 0.8rem 0;
`
const BottomDiv = styled.div`
	width: 100%;
`
//
function Banks({ data }) {
	console.log(data)
	return (
		<BanksWrapper>
			{data.map((item, index) => (
				<Link style={{ textDecoration: 'none' }} key={item.BankTittle + `${index}`}>
					<BankDiv>
						<BankLogoDiv>{<BankLogo src={item.img} /> || <Skeleton />}</BankLogoDiv>
						<BottomDiv>
							<TittleDiv>
								<BankTittle>{item.bankTittle}</BankTittle>
								<BankAddress>{item.bankAddress}</BankAddress>
							</TittleDiv>
							<TenderNumDiv>
								<TenderNum>{item.tendNum}</TenderNum>
							</TenderNumDiv>
						</BottomDiv>
					</BankDiv>
				</Link>
			))}
		</BanksWrapper>
	)
}

export default Banks
