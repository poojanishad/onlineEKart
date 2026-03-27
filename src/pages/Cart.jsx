import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from '../app/features/cart/cartSlice';
import { formatCurrency } from '../utils/formatCurrency';

const CLOTHING_CATEGORIES = ['mens-shirts', 'womens-dresses', 'tops', 'womens-tops'];

const Page = styled.div`
  background: #f3f1ec;
  min-height: 100vh;
  padding: 30px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const Info = styled.div`
  flex: 1;
`;

const Price = styled.div`
  font-weight: bold;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Btn = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background: black;
  color: white;
  border-radius: 5px;
`;

const Remove = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const TotalBox = styled.div`
  margin-top: 30px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  text-align: right;
`;

const Empty = styled.div`
  text-align: center;
  margin-top: 80px;
  color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopBtn = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Page>
      <Container>
        <Title>
          <FontAwesomeIcon icon={faCartShopping} />
          Your Cart
        </Title>

        {items.length === 0 && (
          <Empty>
            <FontAwesomeIcon icon={faCartShopping} size="3x" style={{ opacity: 0.3 }} />
            <p style={{ marginTop: '10px' }}>Your cart is empty</p>

            <Link to="/">
              <ShopBtn>Go Shopping</ShopBtn>
            </Link>
          </Empty>
        )}

        {items.map((item) => {
          const isClothing = CLOTHING_CATEGORIES.includes(item.category);

          return (
            <Card key={item.id}>
              <Image src={item.thumbnail} alt={item.title} />

              <Info>
                <h4>{item.title}</h4>
                <Price>{formatCurrency(item.price)}</Price>

                {isClothing && (
                  <div style={{ fontSize: '12px', marginTop: '5px' }}>
                    Size: {item.selectedSize || 'M'}
                  </div>
                )}
              </Info>

              <Qty>
                <Btn onClick={() => dispatch(decreaseQty(item.id))}>-</Btn>
                {item.quantity}
                <Btn onClick={() => dispatch(increaseQty(item.id))}>+</Btn>
              </Qty>

              <Remove onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Remove>
            </Card>
          );
        })}

        {items.length > 0 && (
          <TotalBox>
            <h3>Total: {formatCurrency(total)}</h3>
          </TotalBox>
        )}

      </Container>
    </Page>
  );
};

export default Cart;