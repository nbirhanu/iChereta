import { LoginButtonContainer, Button } from '../LOGIN/LoginButton'
import { GoArrowRight } from 'react-icons/go'
import { useAuth } from '../../CONTEXTAPI/ContextApi'

// const Flex = styled.div`
// 	display: flex;
// `
// const StepOneButton = styled.div``

function Step1Button() {
	const { handleNextStep } = useAuth()
	return (
		<>
			<LoginButtonContainer>
				{/* <Flex> */}
				<Button
					onClick={handleNextStep}
					style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					ይቀጥሉ <GoArrowRight style={{ fontSize: '1.8rem' }} />
				</Button>
				{/* </Flex> */}
			</LoginButtonContainer>
		</>
	)
}

export default Step1Button
