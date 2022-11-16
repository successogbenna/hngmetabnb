import React, {useEffect} from 'react';
import Modal from './Modal'



function Section() {
    useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth', duration: 500})
  }, [])
    return (
        <div>
      <Modal />
      <div className="container">
        {/* BANNER-SECTION START*/}
        <div 
        className= "section">
          <div className="txt-sec">
            <h1>
              Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
            </h1>
            <p>
              we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
            </p>

            <div className="inpts">
              <input type="text"
                placeholder='Search for location'
              />
              <input type="submit"
                value='Search'
              />
            </div>
          </div>

          <div className="img-sec">
            <img src="/assets/banner-image.png" alt="bannerImage" />
          </div>
        </div>
      </div>
        {/* BANNER SECTION ENDS */}
        

      {/* BANNER FOOTER STARTS */}
      <div className="icon-label">
        <div className="container icon-container">
          <img src="/assets/mb-token.svg" alt="token" />
          <img src="/assets/metamask.svg" alt="metamask" />
          <img src="/assets/opeansea.svg" alt="opensea" />
        </div>
        </div>
        
      {/* BANNER FOOTER ENDS */}

      {/* INSPIRATIONS SECTION STARTS */}
      <div className="container">
        <div className="inspiration">
          <h1>Inspiration for your next adventure</h1>

          <div className="card-container">
            <div className="card">
              <img src="/assets/image8.png" alt="image8" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="image1" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="image2" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="image3" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="image4" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image5.png" alt="image5" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image6.png" alt="image6" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
            <div className="card">
              <img src="/assets/image7.png" alt="image7" />
              <span>
                <p>Desert King</p>
                <p>1MBT per night</p>
              </span>
              <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
              </span>
                <img src="/assets/star.svg" alt="rating" />
            </div>
          </div>
        </div>
        </div>
        {/* INSPIRATIONS SECTION ENDS */}
        

      {/* METABNB NFTs */}
      <div className="nfts-container">
            <div className="container flex-nfts">
              <div className="nft-txt">
                <h1>Metabnb NFTs</h1>
                <p>
                Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>Learn more</button>
              </div>
              <div className="nft-image">
                <img src="/assets/metabnb-image.png" alt="metabnb" />
              </div>
            </div>
        </div>
        {/* METABNB NFTs ENDS */}
      </div>
      
    );
}

export default Section;