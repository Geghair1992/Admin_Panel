import Button from '../button/button'
import styled from 'styled-components'

const StyledTable = styled.table`
table{
    border: 1px solid #ccc;
    border-collapse: collapse;
}
thead{
      th{
          background-color: #dedede;
          padding: 10px;
      }
  }
  tbody{
      td{
          padding: 10px;
          border: 1px solid #ccc;
      }
  }
`

interface TableProps{
    data:{id:number;title:string;price:number}[] | undefined
}

const Table:React.FC <TableProps> = ({data}) =>{
    return(
            <StyledTable>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data?.map(row=>{
                        return(
                           <tr key={row.id}>
                               <td>{row.id}</td>
                               <td>{row.title}</td>
                               <td>{row.price}</td>
                               <td><Button title="Edit" styleType="primary"/>
                               <Button title="Delete" styleType="secondary"/></td>
                           </tr>
                        )
                    })
                }
                </tbody>
            </StyledTable>
    )
}

export default Table;