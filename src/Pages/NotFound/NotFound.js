import React from 'react';
import '../../Global.css';
import {Container} from './Style';
import BarLoader from 'react-spinners/BarLoader';
import {Link} from 'react-router-dom';
import {TbError404} from 'react-icons/tb';

export default function NotFound() {
  return (
    <Container className="Container">
      <TbError404></TbError404>
      <h2>Ooops, Page Error...</h2>
      <p>Maybe you enter the wrong page, please get back to home page</p>
      <BarLoader
        color="var(--primaryColor)"
        size={30}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
      <Link to="/">Back to Home</Link>
    </Container>
  );
}
