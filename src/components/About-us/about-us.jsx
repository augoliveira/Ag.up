import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AboutUs1Date from '../../data/sections/about-us1-vie.json'

const AboutUs = () => {
  return (
    <section className="about-us section-padding">
      <div className="container" style={{ marginTop: `160px` }}>
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {AboutUs1Date.title}
              </h3>
              <p>{AboutUs1Date.content}</p>
              <Link href="/about/about-dark">
                <a className="butn bord curve mt-30">
                  <span>Saiba mais</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <Image
              src={AboutUs1Date.image}
              alt=""
              width={500}
              height={579}
            />
            <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
