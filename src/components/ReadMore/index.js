import {useState} from 'react'

import {
  MainContainer,
  Heading,
  Paragraph,
  ReactHooksImg,
  Description,
  CustomBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isClicked, setIsClicked] = useState(false)
  const onClickBtn = () => setIsClicked(prevState => !prevState)
  const slicedText = reactHooksDescription.slice(0, 170)
  const slicingText = isClicked ? reactHooksDescription : slicedText
  const btnText = isClicked ? 'Read Less' : 'Read More'
  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <ReactHooksImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{slicingText}</Description>
      <CustomBtn type="button" onClick={onClickBtn}>
        {btnText}
      </CustomBtn>
    </MainContainer>
  )
}

export default ReadMore
