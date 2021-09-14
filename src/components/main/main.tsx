import styled from 'styled-components'
import Form from '../form/form'
import  { addProduct } from '../../api/products'

const StyledMain = styled.main`
  width: 80%;
  height: 100vh;
  display: flex;
 
`

const inputs = [
  {
    label:'Name',
    placeholder:"product name",
    type:'text',
    name:'title'
  },
  {
    label:'price',
    placeholder:"product family",
    type:'number',
    name:'price'
  },
  {
    label:'image address',
    placeholder:"product image address ",
    type:'text',
    name:'image'
  }, 
]

const Main: React.FC = () => {
  const handleSubmit = (payload:Object) => {
    addProduct(payload)
     .then(res=>{
        alert('product added!')
     })
     
  }
    return(
        <StyledMain>
            <Form inputs={inputs} onSubmit={handleSubmit}/>           
           
        </StyledMain>
    )
}

export default Main;