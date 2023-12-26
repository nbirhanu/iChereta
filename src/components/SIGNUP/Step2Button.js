import { LoginButtonContainer, Button } from '../LOGIN/LoginButton'
import { GoArrowRight } from 'react-icons/go'
// import { styled } from 'styled-components'
import { useAuth } from '../../CONTEXTAPI/ContextApi'
// const Flex = styled.div`
// 	display: flex;
// `

function Step2Button() {
	const { handleNextStep } = useAuth()
	return (
		<>
			<LoginButtonContainer onClick={handleNextStep} style={{ marginTop: '0' }}>
				{/* <Flex> */}
				<Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					ምዝገባዎን ያጠናቁ <GoArrowRight style={{ fontSize: '1.8rem' }} />
				</Button>
				{/* </Flex> */}
			</LoginButtonContainer>
		</>
	)
}

export default Step2Button
