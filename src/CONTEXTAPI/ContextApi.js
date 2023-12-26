import { createContext, useContext, useState } from 'react'

const CreateContext = createContext()

export const ContextProvider = function ({ children }) {
	const [choice, setChoice] = useState(false)
	const [choice2, setChoice2] = useState(false)
	const [step, setStep] = useState(1)
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		companyName: '',
		phoneNumber: '',
		email: '',
		password: '',
	})
	const [selectedCard, setSelectedCard] = useState(0)
	const [selectedSystem, setSelectedSystem] = useState(0)
	const [seletedBank, setSelectedBank] = useState(0)

	const firstName = formData.firstName
	const lastName = formData.lastName
	const companyName = formData.companyName
	const phoneNumber = formData.phoneNumber
	const email = formData.email
	const password = formData.password

	const handleInputChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleNextStep = () => {
		setStep(prevStep => prevStep + 1)
	}
	const handleClick = function () {
		setChoice(!choice)
	}
	const handleClick2 = function () {
		setChoice2(!choice2)
	}

	const value = {
		handleInputChange,
		firstName,
		lastName,
		companyName,
		phoneNumber,
		handleNextStep,
		setStep,
		step,
		email,
		password,
		choice,
		setChoice,
		choice2,
		setChoice2,
		handleClick,
		handleClick2,
		selectedCard,
		setSelectedCard,
		selectedSystem,
		setSelectedSystem,
		seletedBank,
		setSelectedBank,
	}

	return <CreateContext.Provider value={value}>{children}</CreateContext.Provider>
}

export const useAuth = function () {
	const context = useContext(CreateContext)
	return context
}
