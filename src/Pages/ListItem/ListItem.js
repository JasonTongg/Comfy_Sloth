import React, {useState, useEffect} from 'react';
import '../../Global.css';
import {
  Container,
  Filter,
  Items,
  Components,
  Categories,
  Companies,
  Colors,
  Shipping,
  Price,
  Head,
  Grid,
  Sort,
} from './Style';
import Header from '../../Components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {BsCheck, BsGridFill} from 'react-icons/bs';
import {AiOutlineBars} from 'react-icons/ai';
import {
  filterProduct,
  getProductList,
  sortProduct,
} from '../../Redux/Actions/ProductActions';
import List from '../../Components/ProductList/ProductList';
import LineList from '../../Components/LineProduct/LineProduct';

export default function ListItem() {
  let dispatch = useDispatch();
  let filterData = useSelector((state) => state.product.filteredProduct);
  let productList = useSelector((state) => state.product.productList);
  let categories = [...new Set(productList.map((item) => item.category))];
  let companies = [...new Set(productList.map((item) => item.company))];
  let maxPrice = Math.max(...productList.map((item) => item.price));
  let colors = [...new Set(productList.map((item) => item.colors).flat())];
  let [filter, setFilter] = useState({
    search: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    price: 0,
    shipping: false,
  });
  let [display, setdisplay] = useState([true, false]);
  let [sort, setSort] = useState('Price (Lowest)');

  useEffect(() => {
    dispatch(filterProduct(filter));
    dispatch(getProductList(productList));
  }, [filter, dispatch, productList]);

  useEffect(() => {
    dispatch(sortProduct(sort));
    dispatch(getProductList(productList));
  }, [sort, dispatch, productList]);

  return (
    <React.Fragment>
      <Header text="/ Products" />
      <Container className="Container">
        <Filter>
          <input
            type="text"
            placeholder="Search"
            value={filter.search}
            onChange={(e) => setFilter({...filter, search: e.target.value})}
          />
          <Components>
            <h3>Category</h3>
            <Categories>
              <button onClick={() => setFilter({...filter, category: 'all'})}>
                All
              </button>
              {categories.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFilter({...filter, category: item});
                  }}
                  className={filter.category === item ? 'active' : null}
                >
                  {item}
                </button>
              ))}
            </Categories>
          </Components>
          <Components>
            <h3>Company</h3>
            <Companies
              onChange={(e) => setFilter({...filter, company: e.target.value})}
            >
              <option value="all">all</option>
              {companies.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </Companies>
          </Components>
          <Components>
            <h3>Colors</h3>
            <Colors>
              <div
                className={filter.colors === '' ? 'all active' : 'all'}
                onClick={() => setFilter({...filter, colors: 'all'})}
              >
                All
              </div>
              {colors.map((item, idx) => (
                <div
                  key={idx}
                  style={{backgroundColor: item}}
                  onClick={() => setFilter({...filter, colors: item})}
                  className={filter.colors === item ? 'color active' : null}
                >
                  {filter.colors === item ? <BsCheck /> : null}
                </div>
              ))}
            </Colors>
          </Components>
          <Components>
            <h3>Price</h3>
            <Price>
              <p>${filter.price / 100}</p>
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filter.price}
                step="10"
                style={{padding: 0}}
                onChange={(e) => setFilter({...filter, price: e.target.value})}
              />
            </Price>
          </Components>
          <Components>
            <Shipping>
              <p>Free Shipping</p>
              <input
                type="checkbox"
                checked={filter.shipping}
                onChange={(e) =>
                  setFilter({...filter, shipping: e.target.checked})
                }
              />
            </Shipping>
          </Components>
          <button
            onClick={() =>
              setFilter({
                search: '',
                category: 'all',
                company: 'all',
                colors: 'all',
                price: 0,
                shipping: false,
              })
            }
          >
            Clear Filter
          </button>
        </Filter>
        <Items>
          <Head>
            <Grid>
              <div
                className={display[0] ? 'active' : null}
                onClick={() => setdisplay([!display[0], false])}
              >
                <BsGridFill />
              </div>
              <div
                className={display[1] ? 'active' : null}
                onClick={() => setdisplay([false, !display[1]])}
              >
                <AiOutlineBars />
              </div>
            </Grid>
            <p>{filterData.length} Products Found</p>
            <hr />
            <Sort>
              <p>Sort By</p>
              <select onChange={(e) => setSort(e.target.value)}>
                <option value="Price (Lowest)">Price (Lowest)</option>
                <option value="Price (Highest)">Price (Highest)</option>
                <option value="Name (A-Z)">Name (A-Z)</option>
                <option value="Name (Z-A)">Name (Z-A)</option>
              </select>
            </Sort>
          </Head>
          {display[0] ? (
            <List data={filterData}></List>
          ) : (
            <LineList data={filterData}></LineList>
          )}
        </Items>
      </Container>
    </React.Fragment>
  );
}
