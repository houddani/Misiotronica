import React, { useState } from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Mirá los productos que tenemos para vos!</h1>
      <input
            type="text"
            className="search-input"
            placeholder="Busca tus productos"
          />
      

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://http2.mlstatic.com/D_NQ_NP_617579-MLA40103563286_122019-O.webp"
              text="Disco sólido interno Kingston SA400S37/960G 960GB"
              
              label="$27.699"
              path="/venta"
              
            />
            <CardItem
              src="https://http2.mlstatic.com/D_NQ_NP_613531-MLA70589895065_072023-O.webp"
              text="Samsung Galaxy Book3 15.6 16gb 515gb"
              label="$609.999"
              path="/venta"
            />
            <CardItem
              src="https://http2.mlstatic.com/D_NQ_NP_962443-MLA54147001760_032023-O.webp"
              text="Joystick inalámbrico Microsoft Xbox Wireless Controller Series X|S shock blue"
              label="$40.999"
              path="/venta"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/1.jpg"
              text="AMD Ryzen 5 5600G 100-100000252BOX"
              label="$97.460"
              path="/venta"
            />
            <CardItem
              src="https://http2.mlstatic.com/D_NQ_NP_723310-MLA43397955785_092020-O.webp"
              text="Placa de video Nvidia Evga KO Gaming GeForce RTX 20 Series RTX 2060 06G-P4-2068-KR 6GB"
              label="$184.500"
              path="/venta"
            />
            <CardItem
              src="./images/2.jpg"
              text="Cooler Cpu Id-cooling Se-224-xts Argb Intel Amd 220w Tdp"
              label="$17.500"
              path="/venta"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/3.jpg"
              text="Auriculares Bluetooth M10 Pro Superior F9-5"
              label="$3.500"
              path="/venta"
            />
            <CardItem
              src="./images/4.jpg"
              text="Auriculares Stereo Sennheiser HD 206 Plateado"
              label="$29.632"
              path="/venta"
            />
            <CardItem
              src="./images/5.jpg"
              text="Parlante JBL Flip 6 portátil con bluetooth waterproof rojo"
              label="$74.799"
              path="/venta"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
