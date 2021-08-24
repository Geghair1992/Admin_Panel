import styled from 'styled-components'

const StyledHeader = styled.header`
  padding: 20px;
  height: 70px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h2`
  font-size: 1.2em;
  color: #fff;
`
const Name = styled.h3`
  font-size: 0.8em;
  color: #fff;
`


interface HeaderProps{
    title: string
    name: string
}

const Header: React.FC <HeaderProps> = ({title,name}) =>{
    return(
        <StyledHeader>
            <Title>{title}</Title>
            <Name>{name}</Name>
        </StyledHeader>
    )
}

export default Header;