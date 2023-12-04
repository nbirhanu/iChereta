// HorizontalScroll.js
import React, { useRef } from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'
//
const CompaniesWrapper = styled.div`
	width: 90%;
	margin: auto;
	position: relative;
	margin-bottom: 8rem;
`
const ScrollContainer = styled.div`
	width: 100%;
	overflow: hidden;
`

const ScrollWrapper = styled.div`
	display: flex;
	overflow-x: scroll;
	scroll-behavior: smooth;
	padding: 10px; /* Adjust padding as needed */
	&::-webkit-scrollbar {
		display: none;
	}
`
const ArrowButtonRignt = styled.button`
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 3.2rem;
	position: absolute;
	right: -3rem;
	top: 50%;
	transform: translateY(-50%);
	color: #664bc7;
`
const ArrowButtonLeft = styled.button`
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 3.2rem;
	position: absolute;
	left: -3rem;
	bottom: 50%;
	transform: translateY(50%);
	color: #664bc7;
`

const HorizontalScroll = ({ children }) => {
	const scrollRef = useRef(null)

	const handleScroll = direction => {
		const scrollAmount = 300 // Adjust the scroll amount as needed
		const currentScroll = scrollRef.current.scrollLeft

		if (direction === 'left') {
			scrollRef.current.scrollLeft = currentScroll - scrollAmount
		} else {
			scrollRef.current.scrollLeft = currentScroll + scrollAmount
		}
	}

	return (
		<CompaniesWrapper>
			<ScrollContainer>
				<ArrowButtonLeft onClick={() => handleScroll('left')}>
					<IoIosArrowBack />
				</ArrowButtonLeft>
				<ScrollWrapper ref={scrollRef}>{children}</ScrollWrapper>
				<ArrowButtonRignt onClick={() => handleScroll('right')}>
					<IoIosArrowForward />
				</ArrowButtonRignt>
			</ScrollContainer>
		</CompaniesWrapper>
	)
}

export default HorizontalScroll
