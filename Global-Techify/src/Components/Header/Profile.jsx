import { useState } from "react";

import { Box, Typography, Menu, MenuItem, styled} from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { CgProfile } from "react-icons/cg";


const Component = styled(Menu)`
margin-top: 5px;
`
const Logout = styled(Typography)`
font-size: 14px;
margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logoutUser = () => {
     setAccount('');
    }

    return(
        <>
        <Box onClick={handleClick}>
          <Typography style={{marginTop: 2, cursor:'pointer' }} className="flex border-2 border-solid border-[#7862e4] px-2 py-1 rounded-full gap-x-2">
            <CgProfile className="text-[20px]"/>
              <div>{account}</div></Typography>
          </Box>
          <Component
          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose} 
        >
      
       <MenuItem onClick={() => {handleClose(); logoutUser();}} >
         <PowerSettingsNewIcon color="primary" fontSize="small" />
         <Logout> Logout</Logout>
       </MenuItem>
        </Component>
        </>
    )
}

export default Profile;