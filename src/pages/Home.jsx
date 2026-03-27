import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/features/products/productSlice';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PAGE_SIZE = 20;

const SIZE_FILTER_CATEGORIES = ['mens-shirts', 'mens-shoes'];

const Page = styled.div`
  background: #f6f7fb;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 30px 20px;
`;

const Header = styled.div`
  margin-bottom: 25px;

  h1 {
    margin: 0;
    font-size: 28px;
  }

  p {
    color: #777;
    margin-top: 5px;
  }
`;

const Toolbar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  flex: 1;
  min-width: 200px;
`;

const Select = styled.select`
  padding: 12px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const Empty = styled.div`
  text-align: center;
  margin-top: 50px;
  color: #888;
`;

const LoadingMore = styled.div`
  text-align: center;
  padding: 24px 0 8px;
  color: #aaa;
  font-size: 14px;
`;

const Sentinel = styled.div`
  height: 1px;
  margin-top: 20px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { items = [], status, error } = useSelector((state) => state.products);

  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [category, setCategory] = useState(localStorage.getItem('category') || '');
  const [size, setSize] = useState(localStorage.getItem('size') || '');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef(null);

  const showSizeFilter = SIZE_FILTER_CATEGORIES.includes(category);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => localStorage.setItem('search', search), [search]);
  useEffect(() => localStorage.setItem('category', category), [category]);
  useEffect(() => localStorage.setItem('size', size), [size]);

  useEffect(() => {
    if (!SIZE_FILTER_CATEGORIES.includes(category)) {
      setSize('');
    }
  }, [category]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [debouncedSearch, category, size]);

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, status]);

  const enrichedItems = useMemo(() => {
    const sizeMap = {
      'mens-shirts': ['M', 'L', 'XL'],
      'mens-shoes': ['L', 'XL'],

    };

    const getSize = (cat, id) => {
      const sizes = sizeMap[cat] || ['M', 'L'];
      return sizes[id % sizes.length];
    };

    return items.map((p) => ({
      ...p,
      size: getSize(p.category, p.id),
    }));
  }, [items]);

  const categories = useMemo(() => {
    const unique = [...new Set(items.map((p) => p.category))];
    return unique.filter(Boolean);
  }, [items]);

  const filtered = useMemo(() => {
    return enrichedItems.filter((p) => {
      const title = p.title?.toLowerCase() || '';
      return (
        title.includes(debouncedSearch.toLowerCase()) &&
        (category ? p.category === category : true) &&
        (size ? p.size === size : true)
      );
    });
  }, [enrichedItems, debouncedSearch, category, size]);

  const visibleProducts = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = visibleCount < filtered.length;

  if (status === 'failed') {
    return (
      <Empty>
        {error || 'Failed to load products'}
      </Empty>
    );
  }

  return (
    <Page>
      <Container>

        <Header>
          <h1>Discover Products</h1>
          <p>Browse and explore our latest collection</p>
        </Header>

        <Toolbar>
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </Select>

          {showSizeFilter && (
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">All Sizes</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </Select>
          )}
        </Toolbar>

        {status === 'loading' ? (
          <Grid>
            {Array(8).fill(null).map((_, i) => (
              <Skeleton key={i} height={250} borderRadius={16} />
            ))}
          </Grid>
        ) : (
          <>
            {filtered.length === 0 && (
              <Empty>
                <FontAwesomeIcon icon={faBoxOpen} style={{ marginRight: '8px' }} />
                No products found
              </Empty>
            )}

            <Grid>
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>

            {hasMore && (
              <>
                <Sentinel ref={sentinelRef} />
                <LoadingMore>Loading more products…</LoadingMore>
              </>
            )}
          </>
        )}

      </Container>
    </Page>
  );
};

export default Home;