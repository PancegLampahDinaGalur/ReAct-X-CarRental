import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function sewa() {
  return (
    <>
      <Navigation />
      <Hero />
      <section id="search">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  {/* <form className="row g-3 align-items-end"> */}
                  <form className="row justify-content-center">
                    <div className="col-auto">
                      <label className="form-label">Type Supir</label>
                      <select className="form-select" id="tipedriver">
                        <option value="true">Dengan Supir</option>
                        <option value="false">Tanpa Supir (Lepas kunci)</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <label className="form-label">Tanggal</label>
                      <input
                        type="date"
                        id="tanggal"
                        className="form-control"
                        placeholder="Pilih Tanggal"
                      />
                    </div>
                    <div className="col-auto">
                      <label className="form-label">Waktu / Jam jemput</label>
                      <input
                        type="time"
                        id="waktu"
                        className="form-control"
                        placeholder="Pilih Waktu"
                      />
                    </div>
                    <div className="col-auto">
                      <label className="form-label">Penumpang</label>
                      <input
                        type="number"
                        id="penumpang"
                        className="form-control"
                        placeholder="Jumlah Penumpang"
                      />
                    </div>
                    <div className="col-auto d-flex align-items-end">
                      <label className="form-label invisible">Cari</label>
                      <button
                        type="button"
                        id="cari"
                        className="btn btn-success"
                      >
                        Cari Mobil
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="result">
        <div className="container">
          <div className="row" id="searchresult"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
