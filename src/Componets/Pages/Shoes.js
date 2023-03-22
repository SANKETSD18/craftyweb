import React from 'react'
import Sdata from '../Sdata';
import Card from '../Card';
import Footer from '../Footer';

const Shoes = () => {
  return (
    <>
      <figure className="text-center mt-2 bg-light">
        <blockquote className="blockquote">
          <p>“You can wear anything as long as you put a nice pair of shoes with it.”</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Taylor Momsen
        </figcaption>
      </figure>

      <div className="row d-flex flex-wrap justify-content-around">
        {Sdata.map((val, index) => {
          return (
            <Card
              key={val.id}
              productname={val.productname}
              price={val.price}
              img={val.img}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}
export default Shoes;
