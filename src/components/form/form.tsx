import {useState} from 'react'
import {StyledForm,FormGroup,Label,Input,TextArea} from './styled'
import Button from '../button/button'

interface FormProps{
    inputs: {label:string,type:string,placeholder:string,name:string}[]
    onSubmit: (payload:Object) => void
}

const Form:React.FC <FormProps> = ({inputs,onSubmit}) =>{

   const [fields, setFields] = useState(Object)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
         const{name,value}=e.target
         setFields({...fields,[name]:value})
   }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault();
     
       onSubmit(fields);

   }

    return(
       <StyledForm onSubmit={handleSubmit}>
           {inputs.map(input=>
               (
                   <FormGroup>
                       <Label>{input.label}</Label>
                       {
                           input.type === 'textarea' ?
                             <TextArea placeholder={input.placeholder}/>
                           :<Input name={input.name} onChange={handleChange} value={fields[input.name]} placeholder={input.placeholder} type={input.type}/>
                       }
                   </FormGroup>
               )
           )}
           <Button title="submit" styleType="primary"/>
       </StyledForm>
    )
}

export default Form;