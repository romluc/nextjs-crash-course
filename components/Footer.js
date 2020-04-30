const Footer = () => (
  <footer class=' page-footer text-center fixed-bottom align-center bg-dark py-2'>
    <div className='container d-flex justify-content-around'>
      <span className='text-white-50 mr-4'>
        <svg
          class='bi bi-caret-right'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z'
            clip-rule='evenodd'
          />
        </svg>
        Made by{' '}
        <a className='text-white-50' href='https://github.com/romluc'>
          romluc
        </a>{' '}
      </span>

      <span className='text-white-50 ml-4'>
        <svg
          class='bi bi-caret-right'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z'
            clip-rule='evenodd'
          />
        </svg>
        Powered by{' '}
        <a
          className='text-white-50'
          href='https://www.coindesk.com/price/bitcoin'
        >
          CoinDesk
        </a>{' '}
      </span>
    </div>
  </footer>
);

export default Footer;
