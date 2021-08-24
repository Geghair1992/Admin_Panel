import styled from 'styled-components'

const StyledIcon = styled.span<{size:number,color:string}>`
   font-size: ${props=>props.size}px;    
   color: ${props=>props.color}
`

interface IconProps{
    title:string,
    size:number,
    color:string
}

const Icon:React.FC <IconProps> = ({title,size,color}) =>{
    return(
        <StyledIcon className={`icon-${title}`} size={size} color={color} />
    )
}

export default Icon;