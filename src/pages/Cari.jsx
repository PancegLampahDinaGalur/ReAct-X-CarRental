import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { listCars } from "../utils/getCars";
import assets from "../assets";
import Overlay from "../components/DarkOverlay";

export default function Cari() {
  const [cars, setCars] = useState(null);
  const [inputData, setInputData] = useState({
    typeDriver: "",
    tanggal: "",
    jam: "",
    capacity: "",
  });
  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
    setShowOverlay(true); // Show overlay when any input changes
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    if (
      inputData.typeDriver === "" ||
      inputData.tanggal === "" ||
      inputData.jam === ""
    ) {
      return alert("Mohon dipilih Tipe Driver, Tanggal dan waktu jemput");
    }

    const data = await listCars((el) => {
      return inputData.capacity
        ? el.capacity >= inputData.capacity
        : true &&
            el.typeDriver === inputData.typeDriver &&
            el.availableAt >= new Date(inputData.tanggal) &&
            el.availableAt.getHours() >= Number(inputData.jam);
    });

    setCars(data);
    setShowOverlay(true);
  };

  return (
    <>
      <Navigation />
      <Hero />
      <section id="search" className="mt-n5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  <form
                    className="row g-3 align-items-end"
                    onSubmit={handleSearch}
                  >
                    <div className="col-auto">
                      <label className="form-label">
                        Tipe Driver<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select shadow-lg"
                        id="tipedriver"
                        name="typeDriver"
                        required
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Pilih Tipe Driver</option>
                        <option value="Dengan Supir">Dengan Sopir</option>
                        <option value="Lepas Kunci">
                          Tanpa Sopir (Lepas Kunci)
                        </option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <label className="form-label">
                        Tanggal<span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control shadow-lg"
                        placeholder="Pilih Tanggal"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="col-auto">
                      <label className="form-label">
                        Waktu / Jam Jemput<span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select shadow-lg"
                        id="jam"
                        name="jam"
                        required
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Pilih Jam Jemput</option>
                        <option value="8">08.00</option>
                        <option value="9">09.00</option>
                        <option value="10">10.00</option>
                        <option value="11">11.00</option>
                        <option value="12">12.00</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <label className="form-label">
                        Jumlah Penumpang(optional)
                      </label>
                      <input
                        type="number"
                        id="penumpang"
                        className="form-control shadow-lg"
                        placeholder="Jumlah Penumpang"
                        name="capacity"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="col-auto ms-auto">
                      <button
                        type="submit"
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
      <section id="search-result" className="my-5">
        <div className="container">
          <div className="row">
            {cars
              ? cars.map((e, index) => (
                  <div className="col-12 col-md-4 mb-4" key={index}>
                    <div className="card pb-2">
                      <img
                        src={e.image}
                        className="card-img-top img-fluid"
                        alt={e.name}
                      />
                      <div className="card-body">
                        <h6>{e.name}</h6>
                        <label>{e.price}</label>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempora, accusamus!
                        </p>
                        <ul>
                          <li>
                            <img src={assets.iconUsers} />
                            <span>{e.capacity} Orang</span>
                          </li>
                          <li>
                            <img src={assets.iconSettings} />
                            <span>Manual</span>
                          </li>
                          <li>
                            <img src={assets.iconCalendar} />
                            <span>Tahun 2020</span>
                          </li>
                        </ul>
                        <Link
                          to={"/cari/detail/" + e.id}
                          className="btn btn-success d-block"
                        >
                          Pilih Mobil
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : cars !== null && (
                  <p className="text-center">
                    Hasil Tidak Ditemukan, Silahkan Melakukan Pencarian Ulang!
                  </p>
                )}
          </div>
        </div>
      </section>
      <Footer />
      <Overlay isVisible={showOverlay} onClose={() => setShowOverlay(false)}>
        <h3>Form Data</h3>
        <p>Tipe Driver: {inputData.typeDriver || "Belum dipilih"}</p>
        <p>Tanggal: {inputData.tanggal || "Belum diisi"}</p>
        <p>Waktu Jemput: {inputData.jam || "Belum diisi"}</p>
        <p>Jumlah Penumpang: {inputData.capacity || "Belum diisi"}</p>
      </Overlay>
    </>
  );
}
