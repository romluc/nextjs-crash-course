import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        href='https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/lux/bootstrap.min.css'
        rel='stylesheet'
        integrity='sha384-oOs/gFavzADqv3i5nCM+9CzXe3e5vXLXZ5LZ7PplpsWpTCufB7kqkTlC9FtZ5nJo'
        crossOrigin='anonymous'
      ></link>
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
  </div>
);

export default Layout;
