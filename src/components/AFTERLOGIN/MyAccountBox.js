import { useAuth } from '../../CONTEXTAPI/ContextApi'
import { styled } from 'styled-components'
import MyAccountPersonalForm from './MyAccountPersonalForm'
import MyAccountCompanyForm from './MyAccountCompanyForm'
import MyAccountSecurityForm from './MyAccountSecurityForm'

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 5px;
`

function MyAccountBox() {
	const { selectedMyAccount } = useAuth()
	return (
		<FormWrapper>
			{selectedMyAccount === 0 && <MyAccountPersonalForm />}
			{selectedMyAccount === 1 && <MyAccountCompanyForm />}
			{selectedMyAccount === 2 && <MyAccountSecurityForm />}
		</FormWrapper>
	)
}

export default MyAccountBox
