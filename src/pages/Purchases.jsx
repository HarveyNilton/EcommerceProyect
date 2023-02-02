import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getPurchasesthunk } from '../store/slice/purchases.slice';
import '../style/purchases.css'

const Purchases = () => {

  const purchases = useSelector(state => state.purchases)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPurchasesthunk())
  }, [])


  const navigate = useNavigate()


  const convertFromStringToDate = (responseDate) => {
    const [fecha] = responseDate.split('T');
    return fecha.split('-').reverse('').join('/')
  }


  return (
    <section className='container-purchases'>
      <div className="container-purchases-home">
        <Link className='link-home' to='/'>Home</Link>
        <div className="circle"></div>
        <div className="title">purchases</div>
      </div>
      <h1 className='name-my-pucharses'>My Purchases</h1>
      <ul className='purchases-prdouct-list'>
        {
          purchases.map(purchase => (
            <li key={purchase.id} className='conatainer-product-purchases' onClick={() => navigate(`/product/${purchase.product.id}`)}>
              <div className="image-purchases">
                <img className='img-product-purchases' src={purchase.product.images[0].url} alt="" />
              </div>

              <div className="name-product-purchases">{purchase.product.title}</div>

              <div className="date">{convertFromStringToDate(purchase.createdAt)}</div>
              <div className="quantity">
                <div className="box">{purchase.quantity}</div>
              </div>
              <div className="price">{`S/.${purchase.product.price}`}</div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default Purchases;