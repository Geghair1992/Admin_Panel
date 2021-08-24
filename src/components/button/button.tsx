import styled from 'styled-components'

const StyledButton = styled.button<{styleType:string}>`
   border:none;
   outline:none;
   background-color: ${props=>props.styleType==='primary' ? "#000" : 'blue'};
   color: #fff;
   border-radius: 5px;
   display: inline-block;
   padding: 6px 12px;
`

interface ButtonProps{
    title:string
    styleType:string
  
}

const Button: React.FC <ButtonProps> = ({title,styleType}) => {
    return(
        <StyledButton type="submit" className="btn" styleType={styleType}>
            {title}
        </StyledButton>
    )

}

export default Button;