import React from "react";
import Card from '../../componentes/Card';
import EstruturaPagina from  "../../componentes/EstruturaPagina";
import "./style.css";


export default function Home(){
    return(
        <EstruturaPagina className="EstruturaPagina">
            <div className="container">

                <div className="row">
                    <Card cidade = "Sao Paulo" />
                </div>
                <div className="row">
                    <Card cidade = "Salvador" />
                </div>
                <div className="row">
                    <Card cidade = "Rio de Janeiro" />
                </div>

            </div>
        </EstruturaPagina>
    );
};