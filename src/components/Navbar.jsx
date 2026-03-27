import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useUI } from '../context/UIContext';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.div`
  background: ${({ $themeMode }) => ($themeMode === 'dark' ? '#121212' : '#ccd27e')};
  color: ${({ $themeMode }) => ($themeMode === 'dark' ? '#ccd27e' : '#000000')};
  padding: 15px 0;
  border-bottom: 1px solid ${({ $themeMode }) => ($themeMode === 'dark' ? '#333' : '#ddd')};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Right = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -10px;
  background: red;
  color: white;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 50%;
  min-width: 16px;
  text-align: center;
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid currentColor;
  color: inherit;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
`;

const Navbar = () => {
  const count = useSelector((state) => state.cart.items.length);
  const { theme, setTheme, cartIconRef } = useUI();

  return (
    <Nav $themeMode={theme}>
      <Container>

        <Logo to="/">
          <FontAwesomeIcon icon={faShoppingBag} />
          Shop
        </Logo>

        <Right>

         <ToggleBtn onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} style={{ marginRight: '6px' }} />
          {theme === 'light' ? 'Dark' : 'Light'}
        </ToggleBtn>

          <NavItem to="/cart">
            <CartIconWrapper ref={cartIconRef}>
              <FontAwesomeIcon icon={faCartShopping} />
              {count > 0 && <Badge>{count}</Badge>}
            </CartIconWrapper>
            Cart
          </NavItem>

        </Right>

      </Container>
    </Nav>
  );
};

export default Navbar;
