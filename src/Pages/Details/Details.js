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
} from './Style';
import {useParams} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import {BsStarFill, BsStarHalf, BsStar, BsCheck} from 'react-icons/bs';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';

export default function Details() {
  let {id} = useParams();
  let navigate = useNavigate();
  let [data, setData] = useState();
  let [active, setActive] = useState(0);
  let [color, setColor] = useState();
  let [order, setOrder] = useState(0);

  let getData = useCallback(async () => {
    try {
      let rawData = await window.fetch(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      let data = await rawData.json();
      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

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
                    ? `In Stock (${data.stock} pcs)`
                    : 'Out of Stock'}
                </h5>
                <h5>SKU :</h5>
                <h5>{data.id}</h5>
                <h5>Brand :</h5>
                <h5>{data.company}</h5>
              </Info>
              <Line />
              <Colors>
                <h5>Colors :</h5>
                <Color>
                  {data.colors.map((item, index) => (
                    <div
                      style={{backgroundColor: item}}
                      key={index}
                      className={color === index ? 'activeColor' : null}
                      onClick={() => setColor(index)}
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
              <button style={{marginTop: 0}} onClick={() => navigate('/cart')}>
                ADD TO CART
              </button>
            </Content>
          </Grid>
        </div>
      </Container>
    );
  } else {
    return null;
  }
}
