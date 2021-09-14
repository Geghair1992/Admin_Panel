import Button from '../button/button'
import styled from 'styled-components'
import Loading from '../loading/loading'
import { Link } from 'react-router-dom'


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
    data: any[] | undefined
    headers: string[]
    buttons: {title:string,route:string,cssClass:string}[]
}

const Table:React.FC <TableProps> = ({data,headers,buttons}) =>{        
        return data?
            (<StyledTable>
                <thead>
                    <tr>
                        {
                            headers.map(header=>{
                                return(
                                    <th>{header}</th>
                                )
                            })
                        }
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data?.map(row=>{
                        return(
                           <tr key={row.id}>
                               {
                                 headers.map(key=>{
                                       return(
                                       <td>{row[key]}</td>
                                       )
                                   })
                               }
                               <td>
                                   {
                                       buttons.map(btn=>{
                                           return(
                                            <Link to={`${btn.route}/${row.id}`}>
                                               <Button title={btn.title} styleType={btn.cssClass}/>
                                            </Link>
                                           )
                                       })
                                   }
                                   
                                   
                               </td>
                           </tr>
                        )
                    })
                }
                </tbody>
            </StyledTable>)
            : (<Loading/>)
        }
    



export default Table;