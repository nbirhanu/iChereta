import { LiaCitySolid } from 'react-icons/lia'
import { FaChevronDown } from 'react-icons/fa6'
import { useState } from 'react'
import {
	SelectWrapper,
	TitleContainer,
	Icon,
	H1,
	SelectContainer,
	Select,
	SelectIcon,
	Option,
} from './ChooseLanguage'

function ChooseRegions() {
	const [rotateArrow, setRotateArrow] = useState(false)

	const handleRotate = function () {
		setRotateArrow(!rotateArrow)
	}
	return (
		<SelectWrapper>
			<TitleContainer>
				<Icon>
					<LiaCitySolid />
				</Icon>
				<H1>Regions</H1>
			</TitleContainer>
			<SelectContainer>
				<Select onClick={handleRotate}>
					<Option>All</Option>
					<Option>Addis Ababa</Option>
					<Option>SNNPR</Option>
					<Option>Afar</Option>
					<Option>Dire Dawa</Option>
				</Select>
				<SelectIcon rotate={rotateArrow === true}>
					<FaChevronDown />
				</SelectIcon>
			</SelectContainer>
		</SelectWrapper>
	)
}

export default ChooseRegions
