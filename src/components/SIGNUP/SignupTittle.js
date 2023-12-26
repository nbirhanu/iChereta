import { styled } from 'styled-components'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

const Div = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	position: relative;
	margin-bottom: 1.8rem;
`

const SignUpTittle = styled.p`
	font-size: 1.8rem;
	font-weight: 500;
	color: rgba(102, 75, 199, 1);
	font-size: 1.8rem; /* 18px */
	line-height: 2.8rem; /* 28px */
	position: absolute;
	right: 50%;
	transform: translateX(50%);
`
const ArrowDiv = styled.div`
	color: rgba(99, 102, 241, 1);
	font-size: 1.8rem;
	position: absolute;
	left: 0;
	display: ${({ arrow }) => (arrow ? 'block' : 'none')};
`

function SignupTittle() {
	const { step, setStep } = useAuth()
	const handleBack = function () {
		setStep(step - 1)
	}

	return (
		<Div>
			<ArrowDiv arrow={step === 2} onClick={handleBack}>
				<HiArrowNarrowLeft />
			</ArrowDiv>
			<SignUpTittle>አካውንት ይክፈቱ</SignUpTittle>
		</Div>
	)
}

export default SignupTittle
