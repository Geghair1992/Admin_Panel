import {StyledForm,FormGroup,Label,Input,TextArea} from './styled'
import Button from '../button/button'

interface FormProps{
    inputs: {label:string,type:string,placeholder:string}[]
    onSubmit: () => void
}

const Form:React.FC <FormProps> = ({inputs,onSubmit}) =>{
    return(
       <StyledForm onSubmit={onSubmit}>
           {inputs.map(input=>
               (
                   <FormGroup>
                       <Label>{input.label}</Label>
                       {
                           input.type === 'textarea' ?
                             <TextArea placeholder={input.placeholder}/>
                           :<Input placeholder={input.placeholder} type={input.type}/>
                       }
                   </FormGroup>
               )
           )}
           <Button title="submit" styleType="primary"/>
       </StyledForm>
    )
}

export default Form;