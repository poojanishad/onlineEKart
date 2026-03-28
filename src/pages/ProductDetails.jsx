import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/features/cart/cartSlice';
import { useUI } from '../context/UIContext';
import { formatCurrency } from '../utils/formatCurrency';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { getProductById } from '../services/api';
;


const Page = styled.div`
  background: #f3f1ec;
  min-height: 100vh;
  padding: 30px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`;

const BackBtn = styled.button`
  margin-bottom: 20px;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
  font-weight: 500;
  font-size: 15px;
  &:hover { text-decoration: underline; }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  background: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background: #f3f1ec;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const MainImage = styled.img`
  max-width: 80%;
  transition: 0.3s;
  &:hover { transform: scale(1.05); }
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s;
    background: #fff;
    &:hover { border-color: #ff9800; }
  }
`;

const Info = styled.div`
  flex: 1;

  h1 { margin: 0; font-size: 26px; }

  .category {
    color: #888;
    margin: 5px 0;
    text-transform: capitalize;
    font-size: 14px;
  }

  .price {
    font-size: 28px;
    font-weight: bold;
    margin: 10px 0;
  }
`;

const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
`;

const BuyNow = styled(Button)`
  background: #ff9800;
  color: white;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f5a623;
  margin: 8px 0;
`;

const AddToCartBtn = styled(Button)`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${({ $added }) => ($added ? '#4caf50' : 'black')};
  color: white;
  transition: background 0.3s;
`;

const ErrorText = styled.h2`
  text-align: center;
  color: red;
  margin-top: 80px;
`;

const CLOTHING_CATEGORIES = ['mens-shirts', 'mens-shoes'];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartIconRef } = useUI();
  const imgRef = useRef(null);

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState('');
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setProduct(null);
        const res = await getProductById(id);
        if (!res.data) throw new Error('Product not found');
        setProduct(res.data);
        setActiveImage(res.data.images?.[0] || res.data.thumbnail);
      } catch (err) {
        setError(err.response?.status === 404 ? 'Product not found' : err.message);
      }
    };
    if (id) fetchData();
  }, [id]);

  useEffect(() => {
    setSelectedSize('');
  }, [id]);

  const isClothing = CLOTHING_CATEGORIES.includes(product?.category);

  const flyToCart = () => {
    const img = imgRef.current;
    const cart = cartIconRef.current;
    if (!img || !cart) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();

    const clone = img.cloneNode(true);
    clone.style.cssText = `
      position: fixed;
      top: ${imgRect.top}px;
      left: ${imgRect.left}px;
      width: ${imgRect.width}px;
      height: ${imgRect.height}px;
      transition: all 0.7s ease-in-out;
      z-index: 9999;
      border-radius: 8px;
      pointer-events: none;
      object-fit: contain;
    `;
    document.body.appendChild(clone);

    setTimeout(() => {
      clone.style.top = cartRect.top + 'px';
      clone.style.left = cartRect.left + 'px';
      clone.style.width = '20px';
      clone.style.height = '20px';
      clone.style.opacity = '0.4';
    }, 10);

    setTimeout(() => clone.remove(), 750);
  };

  const handleAddToCart = () => {
    if (isClothing && !selectedSize) {
      alert('Please select a size before adding to cart');
      return;
    }
    dispatch(addToCart({ ...product, selectedSize }));
    flyToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (error) return <ErrorText>{error}</ErrorText>;

  if (!product) {
    return (
      <Page>
        <Container>
          <Wrapper>
            <ImageSection>
              <Skeleton height={300} width={300} borderRadius={12} />
              <div style={{ display: 'flex', gap: 10, marginTop: 15 }}>
                {[1, 2, 3].map(i => (
                  <Skeleton key={i} width={60} height={60} borderRadius={8} />
                ))}
              </div>
            </ImageSection>
            <Info>
              <Skeleton height={36} width="70%" style={{ marginBottom: 10 }} />
              <Skeleton height={18} width="40%" style={{ marginBottom: 10 }} />
              <Skeleton height={32} width="30%" style={{ marginBottom: 16 }} />
              <Skeleton count={4} style={{ marginBottom: 6 }} />
              <Skeleton height={44} width={160} style={{ marginTop: 20 }} />
            </Info>
          </Wrapper>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>

        <Breadcrumb>
          Home / {product.category} / {product.title}
        </Breadcrumb>

        <BackBtn onClick={() => navigate(-1)}>← Back</BackBtn>

        <Wrapper>

          <ImageSection>
            <MainImage
              ref={imgRef}
              src={activeImage}
              alt={product.title}
              onError={(e) => { e.target.src = 'https://placehold.co/300'; }}
            />
            <Thumbnails>
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.title} view ${i + 1}`}
                  onClick={() => setActiveImage(img)}
                  style={{ borderColor: activeImage === img ? '#ff9800' : 'transparent' }}
                  onError={(e) => { e.target.src = 'https://placehold.co/60'; }}
                />
              ))}
            </Thumbnails>
          </ImageSection>

          <Info>
            <h1>{product.title}</h1>
            <div className="category">{product.category}</div>

            <Rating>
              <FontAwesomeIcon icon={faStar} />
              {Number(product.rating || 0).toFixed(1)}
              <span style={{ color: '#999', fontSize: 13 }}>
                ({product.reviews?.length || 0} reviews)
              </span>
            </Rating>

            <div className="price">{formatCurrency(product.price)}</div>

            {isClothing && (
              <div style={{ margin: '12px 0' }}>
                <strong>Select Size:</strong>
                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                  {['M', 'L', 'XL'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '6px',
                        border: selectedSize === s ? '2px solid black' : '1px solid #ccc',
                        background: selectedSize === s ? '#000' : '#fff',
                        color: selectedSize === s ? '#fff' : '#000',
                        cursor: 'pointer',
                        fontWeight: selectedSize === s ? 600 : 400,
                        transition: 'all 0.2s',
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p style={{ color: '#555', lineHeight: 1.7 }}>{product.description}</p>

            <Actions>
              <AddToCartBtn
                onClick={handleAddToCart}
                $added={added}
                disabled={isClothing && !selectedSize}
                style={{
                  opacity: isClothing && !selectedSize ? 0.5 : 1,
                  cursor: isClothing && !selectedSize ? 'not-allowed' : 'pointer',
                }}
              >
                {added ? (
                  <><FontAwesomeIcon icon={faCheck} /> Added!</>
                ) : (
                  isClothing && !selectedSize ? 'Select Size First' : 'Add to Cart'
                )}
              </AddToCartBtn>

              <BuyNow onClick={() => { handleAddToCart(); navigate('/cart'); }}>
                Buy Now
              </BuyNow>
            </Actions>
          </Info>

        </Wrapper>
      </Container>
    </Page>
  );
};

export default ProductDetails;
