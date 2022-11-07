import React, {useState, useEffect, useCallback} from 'react';
import '../../Global.css';
import {
  Container,
  Grid,
  Images,
  Content,
  Image,
  Star,
  Info,
  Line,
  Colors,
  Color,
  Count,
  LoadingContainer,
} from './Style';
import {Link, useParams} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {BsStarFill, BsStarHalf, BsStar, BsCheck} from 'react-icons/bs';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import {AddCart} from '../../Redux/Actions/CartActions';
import {useDispatch} from 'react-redux';
import BarLoader from 'react-spinners/BarLoader';
import {FaTruckLoading} from 'react-icons/fa';
import {TbError404} from 'react-icons/tb';

export default function Details() {
  let {id} = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [data, setData] = useState();
  let [active, setActive] = useState(0);
  let [color, setColor] = useState();
  let [order, setOrder] = useState(0);
  let [error, setError] = useState('');

  let getData = useCallback(async () => {
    try {
      let rawData = await window.fetch(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      let data = await rawData.json();

      setData(data);
    } catch (error) {
      setError(error.message);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  let addToCart = () => {
    dispatch(
      AddCart({
        ...data,
        order,
        colors: data.colors[color],
        orderId: data.id + data.colors[color],
      })
    );
    navigate('/cart');
  };

  if (data) {
    return (
      <Container>
        <Header text={`/ ${data.name}`} detail></Header>
        <div className="Container">
          <button onClick={() => navigate('/product')}>BACK TO PRODUCT</button>
          <Grid>
            <Images>
              <img
                src={data.images[active].url}
                alt={data.name}
                className="active"
              />
              <Image>
                {Array.from({length: data.images.length}).map((_, index) => (
                  <img
                    src={data.images[index].url}
                    alt={data.name}
                    onClick={() => setActive(index)}
                    className={active === index ? 'activeChild' : null}
                    key={index}
                  />
                ))}
              </Image>
            </Images>
            <Content>
              <h3>{data.name}</h3>
              <Star>
                {Array.from({length: 5}).map((_, index) => {
                  if (data.stars >= index + 1) {
                    return <BsStarFill></BsStarFill>;
                  } else if (
                    data.stars < index + 1 &&
                    data.stars + 1 > index + 1
                  ) {
                    return <BsStarHalf></BsStarHalf>;
                  }
                  return <BsStar></BsStar>;
                })}{' '}
                ({data.reviews} customer reviews)
              </Star>
              <p>${data.price / 100}</p>
              <p>{data.description}</p>
              <Info>
                <h5>Available :</h5>
                <h5>
                  {data.stock > 0
                    ? `In Stock (${data.stock} pcs each color)`
                    : 'Out of Stock'}
                </h5>
                <h5>SKU :</h5>
                <h5>{data.id}</h5>
                <h5>Brand :</h5>
                <h5>{data.company}</h5>
              </Info>
              <Line />
              {data.stock <= 0 ? null : (
                <>
                  <Colors>
                    <h5>Colors :</h5>
                    <Color>
                      {data.colors.map((item, index) => (
                        <div
                          style={{backgroundColor: item}}
                          key={index}
                          className={color === index ? 'activeColor' : null}
                          onClick={() => {
                            if (color !== index) setColor(index);
                            else setColor();
                          }}
                        >
                          {color === index ? <BsCheck></BsCheck> : null}
                        </div>
                      ))}
                    </Color>
                  </Colors>
                  <Count>
                    <AiOutlineMinus
                      onClick={() => {
                        setOrder(() => {
                          let count = order - 1;
                          if (count < 0) {
                            count = 0;
                          }
                          return count;
                        });
                      }}
                    ></AiOutlineMinus>
                    <h2>{order}</h2>
                    <AiOutlinePlus
                      onClick={() => {
                        setOrder(() => {
                          let count = order + 1;
                          if (count > data.stock) {
                            count = data.stock;
                          }
                          return count;
                        });
                      }}
                    ></AiOutlinePlus>
                  </Count>
                  {color + 1 > 0 && order > 0 ? (
                    <button style={{marginTop: 0}} onClick={addToCart}>
                      ADD TO CART
                    </button>
                  ) : (
                    <button style={{marginTop: 0, opacity: 0.5}}>
                      ADD TO CART
                    </button>
                  )}
                </>
              )}
            </Content>
          </Grid>
        </div>
      </Container>
    );
  } else {
    if (error) {
      return (
        <LoadingContainer>
          <TbError404 className="large"></TbError404>
          <h2>Product Not Found..</h2>
          <Link to={'/product'}>Back to Product</Link>
        </LoadingContainer>
      );
    }
    return (
      <LoadingContainer>
        <FaTruckLoading></FaTruckLoading>
        <h2>Loading Page...</h2>
        <BarLoader
          color="var(--primaryColor)"
          size={30}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={1}
        />
      </LoadingContainer>
    );
  }
}
