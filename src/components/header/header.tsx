import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../actions/index'
import { useHistory } from 'react-router-dom'

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

  const logged_in = useSelector((state:any)=>state.logged_in)
  const dispatch = useDispatch()
  const history = useHistory()

  const loggout_user = () => {
    dispatch(logout())
    history.push('/')

  }

    return(
        <StyledHeader>
            <Title>{title}</Title>
            <Name>{logged_in ? name : 'Please Login'}</Name>
            {logged_in && (<button onClick={loggout_user}>Logout</button>)}      
               
        </StyledHeader>
    )
}

export default Header;