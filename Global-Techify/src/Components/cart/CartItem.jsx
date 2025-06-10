import { Typography, Box, styled, Button } from "@mui/material";
import { removeFromCart} from '../../redux/action/cartAction';
import { useDispatch } from "react-redux";






const Remove =styled(Button)`
margin-top: 20px;
font-size: 16px;
color: #000;
font-weight: 600;

`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return (

            <div className="flex rounded-xl gap-y-4 dark:text-white  border-2  justify-center items-center">
            <div>
                <img src={item.url} alt="product" className="h-40" />
            </div>
            <div style={{margin: 20}}>
                <div className="text-lg">{item.title.longTitle}</div>
               
                <Typography style={{ margin: '20px 0'}}>
                <Box component='span' style={{ fontWeight: 600, fontSize: 18}}>₹ {item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                  <Box component='span' style={{color: '#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                 <Box component='span' style={{color: '#388E3C'}}>{item.price.discount} off</Box>
                </Typography>
            <Remove onClick={() => removeItemFromCart(item.id)} className='dark:text-white'>Remove</Remove>
            </div>
            </div>
        
    )
}

export default CartItem;