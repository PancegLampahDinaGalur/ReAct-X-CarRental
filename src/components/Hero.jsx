import React from "react";
import Assets from "../assets";
import { Link, useLocation } from "react-router-dom";

export default function Hero() {
  const location = useLocation();
  const isSewaPage = location.pathname === "/Cari";

  return (
    <>
      <section id="hero" className="bg-red">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex align-items-center text-light">
              <div>
                <h1 className="mb-4">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="mb-4">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {!isSewaPage && (
                  <Link to="/Cari" className="btn btn-success">
                    Mulai Sewa Mobil
                  </Link>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={Assets.zenixCar}
                className="img-fluid"
                alt="Innova Zenix"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
