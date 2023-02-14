import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

export default function Salones() {
  const [salones, setSalones] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSalones = async () => {

      const urlApi = "https://janoseventos.com/mc/bk/";
      const response = await fetch(urlApi, {
        method: "POST",
        header: {
          "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams({
          url : "http://bk01/janoseventos/api.php",
          method: "mc_salones",
        }),
      });
      const data = await response.json();

      //alert(Object.keys(data).length);

      if (data.error === 0) {
        setSalones(data.datos);
        setLoading(true);
      }

      return data;
    };

    getSalones();
  }, [loading]);

  return (
    <div id="salones" className="basic-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-12 mb-4">
            <div className="text-center">
              <h2>Nuestros Salones</h2>
              <p className="descripSalones" >
                Contamos con 40 salones ideales para llevar adelante el evento
                que estás planeando. Amplios espacios verdes, arquitectura de
                vanguardia y la técnica más sofisticada.
              </p>
            </div>
          </div>
          <div className="col-lg-12 col-xl-12">
            <div className="image-container">
              <Carousel salones={salones} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}