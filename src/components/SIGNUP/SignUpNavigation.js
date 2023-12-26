import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { FiCheck } from 'react-icons/fi'

const SignupNavWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
`
const StepContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 1.4rem;
`

//STEP 1
const Step1 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ step1 }) => (step1 ? 'rgba(34, 197, 94,1)' : 'rgba(102, 75, 199, 1)')};
	width: ${({ width }) => (width ? '2.5rem' : '3rem')};
	height: ${({ height }) => (height ? '2.5rem' : '3rem')};
	border-radius: 50%;
`
const Step1Span = styled.span`
	color: rgba(255, 255, 255, 1);
	font-size: 1.2rem;
`
const Personal = styled.p`
	font-size: ${({ size }) => (size ? '1.1rem' : '1.2rem')};
	color: ${({ personal }) => (personal ? 'rgba(34, 197, 94,1)' : 'rgba(102, 75, 199, 1)')};
`

///STEP2
const Step2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ step2 }) => (step2 ? 'rgba(102, 75, 199, 1)' : 'rgba(209, 213, 219, 1)')};
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
`

const Step2Span = styled.span`
	color: rgba(255, 255, 255, 1);
	font-size: 1.2rem;
`

const Account = styled.p`
	font-size: 1.2rem;
	color: ${({ account }) => (account ? 'rgba(102, 75, 199, 1)' : 'rgba(209, 213, 219, 1)')};
`

//////
const StepSecond = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(34, 197, 94, 1);
	width: ${({ width }) => (width ? '2.5rem' : '3rem')};
	height: ${({ height }) => (height ? '2.5rem' : '3rem')};
	border-radius: 50%;
`

const StepSecondSpan = styled.span`
	color: rgba(255, 255, 255, 1);
	font-size: 1.2rem;
`

const AccountSecond = styled.p`
	font-size: ${({ size }) => (size ? '1.1rem' : '1.2rem')};
	color: rgba(34, 197, 94, 1);
`

/////

///STEP 3
const Step3 = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ step3 }) => (step3 ? 'rgba(234 ,179 ,8,1)' : 'rgba(209, 213, 219, 1)')};
	width: ${({ width }) => (width ? '2.5rem' : '3rem')};
	height: ${({ height }) => (height ? '2.5rem' : '3rem')};
	border-radius: 50%;
`

const Step3Span = styled.span`
	color: rgba(255, 255, 255, 1);
	font-size: 1.2rem;
`

const Completed = styled.p`
	font-size: ${({ size }) => (size ? '1.1rem' : '1.2rem')};
	color: ${({ completed }) => (completed ? 'rgba(234 ,179 ,8,1)' : 'rgba(209, 213, 219, 1)')};
`

/// LINES
const Line1 = styled.div`
	background-color: ${({ line1 }) => (line1 ? 'rgba(34, 197, 94,1)' : 'rgba(209, 213, 219, 1)')};
	width: 5rem;
	height: 0.1rem;
`
const Line2 = styled.div`
	background-color: ${({ line2 }) => (line2 ? 'rgba(34, 197, 94,1)' : 'rgba(209, 213, 219, 1)')};
	width: 5rem;
	height: 0.1rem;
`

function SignUpNavigation() {
	const { step } = useAuth()
	return (
		<SignupNavWrapper>
			<StepContainer>
				<Step1
					step1={step === 2 || step === 3}
					width={step === 2 || step === 3}
					height={step === 2 || step === 3}>
					<Step1Span>{step === 1 ? '1' : <FiCheck />}</Step1Span>
				</Step1>
				<Personal size={step === 2 || step === 3} personal={step === 2 || step === 3}>
					Personal Info
				</Personal>
			</StepContainer>
			<Line1 line1={step === 2 || step === 3} />
			<StepContainer>
				{step === 1 || step === 2 ? (
					<>
						<Step2 step2={step === 2 || step === 3}>
							<Step2Span>2</Step2Span>
						</Step2>
						<Account account={step === 2 || step === 3}>Account Info</Account>
					</>
				) : (
					<>
						<StepSecond width={step === 2 || step === 3} height={step === 2 || step === 3}>
							<StepSecondSpan>{step === 1 || step === 2 ? '2' : <FiCheck />}</StepSecondSpan>
						</StepSecond>
						<AccountSecond size={step === 2 || step === 3}>Account Info</AccountSecond>
					</>
				)}
			</StepContainer>
			<Line2 line2={step === 3} />
			<StepContainer>
				<Step3
					width={step === 2 || step === 3}
					height={step === 2 || step === 3}
					step3={step === 3}>
					<Step3Span>{step === 1 || step === 2 ? '3' : <FiCheck />}</Step3Span>
				</Step3>
				<Completed size={step === 2 || step === 3} completed={step === 3}>
					Completed
				</Completed>
			</StepContainer>
		</SignupNavWrapper>
	)
}

export default SignUpNavigation
