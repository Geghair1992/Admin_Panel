import styled from 'styled-components'
import SidebarItem from './sidebarItem'
import Button from '../button/button'

const Aside = styled.aside`
   width: 20%;
  
   @media only screen and (max-width:768px){
       width: 100%;
   }

`

const SidebarList = styled.ul`
 
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`

const items = [
    {
        title:'Dashboard',
        link:'/',
        icon:'th-list'
    },
    {
        title:'Products',
        link:'/products',
        icon:'gift'
    },
    {
        title:'Users',
        link:'/users',
        icon:'users'

    },
    {
        title:'Carts',
        link:'/carts',
        icon:'cc-paypal'
    },
]



const Sidebar: React.FC = () => {
    return(
    <Aside>
        <SidebarList> 
              {items.map((item,index)=>{
                  return(
                      <SidebarItem key={index} title={item.title} link={item.link} icon={item.icon}  />
                  )
              })}
        </SidebarList>
        <Button title="logout" styleType="primary"/>
    </Aside>
  )
}

export default Sidebar;