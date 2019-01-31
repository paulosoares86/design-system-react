import React from 'react';
import { Button } from '../../atoms';
import NavBar from '../NavBar';

export default function Header() {
  return (
    <main>
      <NavBar />
      <section className="section section-lg section-hero section-shaped">
        <div className="container d-flex align-items-center py-lg">
          <div className="col px-0">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-10 text-center">
                <h1 className="text-white text-with-black-border"><b>ScuBrasil Mergulhos</b></h1>
                <h4 className="text-white text-with-black-border">Agende seu próximo mergulho com comodidade e segurança</h4>
                <div className="btn-wrapper mt-5">
                  <Button title="Procurar Mergulho" size="lg" />
                </div>
              </div>
            </div>
            <div className="row mt-lg">
              <div className="col-md-4 text-white text-center">
                <img src="./assets/images/icons/circular_check.svg" alt="check icon" />
                <p className="mt-4">Menor preço 100% garantido</p>
              </div>
              <div className="col-md-4 text-white text-center">
                <img src="./assets/images/icons/support.svg" alt="check icon" />
                <p className="mt-4">Suporte online para tirar suas dúvidas</p>
              </div>
              <div className="col-md-4 text-white text-center">
                <img src="./assets/images/icons/credit_card_hand.svg" alt="check icon" />
                <p className="mt-4">Devolvemos seu dinheiro caso desista do mergulho</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}