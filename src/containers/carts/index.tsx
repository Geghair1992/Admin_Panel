import {useState,useEffect} from 'react'
import Table from '../../components/table/table'
import styled from 'styled-components'



const HeaderTitle = styled.h1`
  display: block;
  text-align:left;
`
const Container = styled.div`
  padding: 15px;
`

const Index:React.FC = () =>{
    const [carts, setCarts] = useState<{id:number;userId:number;date:string}[] | undefined>()
    const headers = ['id','userId','date']
    const buttons = [
      {
        title:'Edit',
        route:'carts/edit',
        cssClass:'primary'
      },
      {
        title:'Delete',
        route:'carts/delete',
        cssClass:'secondary'
      },
      {
        title:'View',
        route:'carts/view',
        cssClass:'primary'
      },
    ]

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then(result=>setCarts(result))
    }, [])

    return(
    <Container>
    <HeaderTitle>Carts</HeaderTitle>
    <Table data={carts} headers={headers} buttons={buttons}/>
    </Container>
    )
}

export default Index;