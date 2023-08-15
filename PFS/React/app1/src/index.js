import React from 'react';
import ReactDOM from 'react-dom/client';
import { faker } from '@faker-js/faker';

import Evento from './Evento';



const App = () => {



  return (
    // <>
    //   <label htmlFor="nome">Nome: </label>
    //   <input id="nome"></input>
    // </>

    <div className="ui feed">
      {
        feeds.map(x => {
          return (
            <Evento
              key={x.id}
              usuario={x.usuario}
              tempo={x.tempo}
              likes={x.likes}
              imagem={x.imagem} />
          )
        })
      }


    </div>
  );
};

const feeds = [
  {
    id: 1,
    usuario: faker.person.firstName(),
    tempo: `Há ${faker.number.int(10)} hora(s)`,
    likes: faker.number.int(20),
    imagem: faker.image.avatar(),
  },
  {
    id: 2,
    usuario: faker.person.firstName(),
    tempo: `Há ${faker.number.int(10)} hora(s)`,
    likes: faker.number.int(20),
    imagem: faker.image.avatar(),
  },
  {
    id: 3,
    usuario: faker.person.firstName(),
    tempo: `Há ${faker.number.int(10)} hora(s)`,
    likes: faker.number.int(20),
    imagem: faker.image.avatar(),
  },

];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
