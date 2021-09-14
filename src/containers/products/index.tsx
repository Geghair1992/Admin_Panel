import {useState,useEffect} from 'react'
import Table from '../../components/table/table'
import styled from 'styled-components'
import {getProducts} from '../../api/products'

const HeaderTitle = styled.h1`
  display: block;
`
const Container = styled.div`
  padding: 10px;
`

const Index:React.FC = () =>{
    const [products, setProducts] = useState<{id:number;title:string;price:number}[] | undefined>()
    const headers = ['id','title','price']
    const buttons = [
      {
        title:'Edit',
        route:'product/edit',
        cssClass:'primary'
      },
      {
        title:'Delete',
        route:'product/delete',
        cssClass:'secondary'
      },
      {
        title:'View',
        route:'product/view',
        cssClass:'primary'
      },
    ]

    useEffect(() => {
         getProducts()
        .then(result=>{setProducts(result)})
    }, [])

    return(
      <Container>
      <HeaderTitle>Products</HeaderTitle>
      <Table data={products} headers={headers} buttons={buttons}/>
      </Container>
    )
}

export default Index;