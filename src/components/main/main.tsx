import styled from 'styled-components'
import Form from '../form/form'

const StyledMain = styled.main`
  width: 80%;
  height: 100vh;
  display: flex;
 
`

const inputs = [
  {
    label:'Name',
    placeholder:"Your Name",
    type:'text'
  },
  {
    label:'Family',
    placeholder:"Your Family",
    type:'text'
  },
  {
    label:'Email',
    placeholder:"Your Email",
    type:'email'
  },
  {
    label:'Password',
    placeholder:"Your Password",
    type:'Password'
  },
  {
    label:'Message',
    placeholder:"Your Message",
    type:'textarea'
  },
]

const Main: React.FC = () => {
  const handleSubmit = () => {
      alert('Submited!')
  }
    return(
        <StyledMain>
            <Form inputs={inputs} onSubmit={handleSubmit}/>           
           
        </StyledMain>
    )
}

export default Main;