import { useState, useEffect } from 'react';
import api from '../../services/api';
import './card.css';


//https://api.weatherapi.com/v1/forecast.json?key=ad3af9df50d14975a23170555230109&q=São Paulo&days=1&aqi=no&alerts=no
//O componente esá recebendo uma props que é o nome da cidade para retornar as informações
//props recebe os parametros/ propriedades e os retorna

function Card(props){
    const [city, setCity] = useState([]); //declarar a variavel de estado

    useEffect(() => { 
        async function lerInformacoes(){

            const cidade = props.cidade;
            const path = "/forecast.json?key=ad3af9df50d14975a23170555230109&q=" + cidade + "&days=1&aqi=no&alerts=no";
            // pegar o resto da rota, para exibir junto com a URL
            // o '&q' é o que vai passar a localidade 
            // https://api.weatherapi.com/v1/
            
            const resposta = await api.get(path)
            setCity(resposta.data);

        };

        lerInformacoes(); // chamada da função
    }, [props.cidade]); //parametros da função

    if(city.length === 0){
        <h1>Lendo as informações...</h1>
    }
    else{ //os componentes que serão exibidos no card
        const local  = city.location.region;
        const temp_c = city.current.temp_c;
        const sens = city.current.feelslike_c;
        const previsao = city.forecast.forecastday[0].day.condition.text;
        const max = city.forecast.forecastday[0].day.maxtemp_c;
        const min = city.forecast.forecastday[0].day.mintemp_c;
        const uv = city.forecast.forecastday[0].day.uv;
        const umidade = city.forecast.forecastday[0].day.avghumidity;

        return(
            <div className="container-card">
                <h3 className="titulo">{ local }</h3>

                <div className="titulo_temp_atual">
                    <p className="temp_atual"> { temp_c }°C </p>
                </div>

                <div className="conteudo">
                    <p className="previsao"> <strong>Previsão: </strong> { previsao }</p>

                    <div className="max_min">
                        <p><strong>Min: </strong>{ min }</p>
                        <p><strong>Max: </strong>{ max }</p>
                    </div>

                    <div className="sensacao">
                        <p className="sensacaoTermica">  <strong>Sensação Térmica:</strong>{ sens }°C </p>
                    </div>

                    <div className="complemento">
                        <p className="uv"><strong>UV: </strong>{ uv }</p>
                        <p className="umidade"><strong>Umidade: </strong>{ umidade }%</p>
                    </div>


                </div>
            </div>
        );
    }
}

export default Card;