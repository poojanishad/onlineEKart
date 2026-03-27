import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatCurrency } from '../utils/formatCurrency';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const SizeBadge = styled.div`
  position: absolute;
  top: 40px;
  left: 20px;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid #c9a23f;
  color: #c9a23f;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: bold;
`;

const Card = styled.div`
  background: #f3f1ec;
  border-radius: 16px;
  overflow: hidden;
  padding: 15px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.1);
  }
`;

const Top = styled.div`
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: black;
  color: white;
  font-size: 10px;
  padding: 5px 8px;
  border-radius: 6px;
  text-transform: uppercase;
`;

const Rating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  font-size: 12px;
  padding: 4px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-top: 20px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  margin-top: 15px;
  padding: 10px;
`;

const Title = styled.h4`
  font-size: 14px;
  margin: 0;
  min-height: 40px;
  line-height: 1.3;
`;

const Desc = styled.p`
  font-size: 12px;
  color: #777;
  margin: 5px 0;
  line-height: 1.4;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const View = styled.div`
  font-size: 12px;
  color: #d2691e;
  font-weight: 500;
`;

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    id,
    title = 'Untitled Product',
    description = '',
    price = 0,
    category = 'product',
    rating = 0,
    thumbnail
  } = product;

  const SHOW_SIZE_CATEGORIES = ['mens-shirts', 'mens-shoes'];

  const showSize =
    SHOW_SIZE_CATEGORIES.includes(category) && product.size;

  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card>
        <Top>
          <Badge>{category.toUpperCase()}</Badge>

          {showSize && (
            <SizeBadge>{product.size}</SizeBadge>
          )}

          <Rating>
            <FontAwesomeIcon icon={faStar} style={{ color: '#f5a623' }} />
            {Number(rating).toFixed(1)}
          </Rating>

          <Image
            src={thumbnail || 'https://placehold.co/150'}
            alt={title}
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://placehold.co/150';
            }}
          />
        </Top>

        <Content>
          <Title>{title}</Title>

          <Desc>
            {description
              ? description.slice(0, 50) + (description.length > 50 ? '...' : '')
              : 'No description available'}
          </Desc>

          <Bottom>
            <Price>{formatCurrency(price)}</Price>
            <View>VIEW →</View>
          </Bottom>
        </Content>
      </Card>
    </Link>
  );
};

export default React.memo(ProductCard);