import {useState,useEffect} from 'react'
import Table from '../../components/table/table'
import styled from 'styled-components'

const HeaderTitle = styled.h1`
  display: block;
`
const Container = styled.div`
  padding: 10px;
`

const Index:React.FC = () =>{
    const [users, setUsers] = useState<{id:number;username:string;email:string}[] | undefined>()
    const headers = ['id','username','email']
    const buttons = [
      {
        title:'Edit',
        route:'user/edit',
        cssClass:'primary'
      },
      {
        title:'Delete',
        route:'user/delete',
        cssClass:'secondary'
      },
      {
        title:'View',
        route:'user/view',
        cssClass:'primary'
      },
    ]

    
    useEffect(() => {
        const token = sessionStorage.getItem('auth')
        fetch('https://fakestoreapi.com/users',{
          headers:{
          'Authorization': `Bearer ${token}`
           } 
        })
        .then(res=>res.json())
        .then(result=>setUsers(result))
    }, [])

    return(
    <Container>
    <HeaderTitle>Users</HeaderTitle>
    <Table data={users} headers={headers} buttons={buttons}/>
    </Container>
    )
}

export default Index;