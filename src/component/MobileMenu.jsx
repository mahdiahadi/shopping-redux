import { Button, Collapse, Container, Grid, List, ListItemButton, ListItemIcon, ListItemText, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
const MobileMenu = ({mobileMenu,setMobileMenu}) => {
  const [activeMenu, setActiveMenu] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const menuItems =[
    {id:0,item:'Home'},
    {id:1,item:'Shop'},
    {id:2,item:'Blog'},
    {id:3,item:'Blog Layouts'},
    {id:4,item:'About'},
    {id:5,item:'Contact'}
  ]
  const handleClose = () => {
    setMobileMenu(false)
  }
  return (
   <Container>
      <Modal 
        sx={{zIndex:'9999999'}}
        open={mobileMenu}
        onClose={handleClose}
      >
     <Grid position="absolute" right="0" top="0" sx={{minHeight:"100vh", width:"280px", bgcolor:"#000" ,transition:'all 0.5s ease-in'}}>
      <Grid container >
          <Grid item xs={12} >
            <Grid display="flex" justifyContent="flex-end" alignContent="center" marginTop={3}>
              <Button sx={{padding:0}} size='sm' onClick={()=> setMobileMenu(false)}>
              <CloseIcon   sx={{color:'#fff'}}/>
              </Button>
            </Grid>
              <List
                sx={{width:'100%'}}
              >
                {
                  menuItems.map((item,index) => (
                    <div key={item.id}>
                    <ListItemButton  onClick={ item.item === 'Blog Layouts' ? handleClick : undefined}  sx={{ paddingY:'0',fontFamily:'inherit'}} >
                      <ListItemText onClick={() => setActiveMenu(item.id)}>
                        <Link to={ item.item === 'Home' ? '/' : item.item.replace(/\s+/g, '')}>
                          <Button sx={{color: activeMenu === item.id ? "rgba(255, 255, 255, 0.6)" :'#fff',fontFamily:'inherit',textAlign:'left'}}>
                     
                            {item.item}
                         
                          </Button>
                        </Link>
                      </ListItemText>
                      {item.item === 'Blog Layouts' &&
                          (open ? (
                            <ExpandLess sx={{ color: '#fff',position:'absolute', right:10 }} />
                          ) : (
                            <ExpandMore sx={{ color: '#fff',position:'absolute', right:10  }} />
                          ))}
                    </ListItemButton>
                    {item.item === 'Blog Layouts' && (
                       <Collapse  in={open} timeout="auto" unmountOnExit>
                         <List component="div" disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                             <ListItemText sx={{ color: '#fff'}}><Typography fontFamily="inherit" fontSize={14}>Left Sidebar</Typography></ListItemText>
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                             <ListItemText sx={{ color: '#fff' }}><Typography fontFamily="inherit" fontSize={14}>Right Sidebar</Typography></ListItemText>
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                             <ListItemText sx={{ color: '#fff' }}><Typography fontFamily="inherit" fontSize={14}>left Secondary Sidebar</Typography></ListItemText>
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                             <ListItemText sx={{ color: '#fff' }}><Typography fontFamily="inherit" fontSize={14}>Right Secondary Sidebar</Typography></ListItemText>
                           </ListItemButton>
                           <ListItemButton sx={{ pl: 4 }}>
                             <ListItemText sx={{ color: '#fff' }}><Typography fontFamily="inherit" fontSize={14}>Full Width</Typography></ListItemText>
                           </ListItemButton>
                         </List>
                       </Collapse>
                    )}
                    </div>
                  ))
                }
                 
              </List>
          </Grid>
      </Grid>
    </Grid>
      </Modal>
   </Container>
  )
}

export default MobileMenu