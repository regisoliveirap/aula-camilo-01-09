import React from "react";
import { faker } from '@faker-js/faker';

const Evento = props => {

    return (

        <div className="event">
            <div className="label">
                <img src={props.imagem} />
            </div>
            <div className="content">
                <div className="summary">
                    <a className="user">
                        {props.usuario}
                    </a> Adicionou você como amigo
                    <div className="date">
                        {props.tempo}
                    </div>
                </div>
                <div className="meta">
                    <a className="like">
                        <i className="like icon"></i> {props.likes} Likes
                    </a>
                </div>
            </div>
        </div>

    );

};

export default Evento;