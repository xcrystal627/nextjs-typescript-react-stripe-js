import { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ul className="card-list">
        <li>
          
            <a className="card checkout-style-background" href="/donate-with-checkout">
              <h2 className="bottom">Donate with Checkout</h2>
              <img src="/checkout-one-time-payments.svg" />
            </a>
        </li>
        <li>
             <a className="card elements-style-background" href="/donate-with-elements">
              <h2 className="bottom">Donate with Elements</h2>
              <img src="/elements-card-payment.svg" />
           </a>
        </li>
        <li>
             <a href="/use-shopping-cart" className="card cart-style-background">
              <h2 className="bottom">Use Shopping Cart</h2>
              <img src="/use-shopping-cart.png" />
            </a>
         </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
