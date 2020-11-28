import './App.css';
import NavBar from './components/NavBar/NavBar';
import FeedContainer from './containers/FeedContainer/FeedContainer';
import FeedContainerExtra from './containers/FeedContainerExtra/FeedContainerExtra';

function App() {
  return (
    <div className='App'>
      {/* NavBar */}
      <NavBar />
      {/* Contenedores */}
      <FeedContainer />

      {/* <FeedContainerExtra /> */}

      {/* Footer */}
    </div>
  );
}

export default App;

////////////////////////
// CLONE DE INSTAGRAM //
////////////////////////

// 00:00:00 ✔️ Explicación de los dos desafíos de la semana que viene
// 00:07:00 ✔️ Explicación de las funcionalidades del clone de Instagram
// 00:11:00 ✔️ Pensar / Organizar nuestras carpetas y componentes
// 00:15:00 ✔️ NavBar y Icon (usamos props de datos y eventos)
// 00:30:00 ✔️ FeedContainer (useState, useEffect, fetch a api propia)
// 00:39:00 ✔️ FeedList (map, props)
// 00:42:00 ✔️ Data Rendering
// 00:50:00 ✔️ Explicar nuevamente el desafío y lógica de contenedores
// 01:00:00 ✔️ setTimeout (delay), loading (conditional rendering)

/////////////////
// EXTRA CLASS //
/////////////////

// 👻 async/await y cleanup
// 01:05:00 ✔️ Emmets, Custom Snippets
// 01:10:00 💩 Consumir api de instagram (falló por autenticación...)
// 01:18:00 ✔️ Custom Hook "useFetch"
// 01:30:00 😖 Juli! Me la lié p/responderte si useFetch sirve para 1 producto
// 💪 La respuesta es sí: useFetch({}, url)
// 01:35:00 🍻 Trivialidades


//Index
//   App
//         HomeContainer  (Listado principal de produtos)
//                ItemList (map de todos los productps para renderizar una card)
//                     Item  (cada producto)

//         ItemDetailContainer (se activa cuando le hacen click a un producto)
//                ItemDetail (botón añadir al carrito)
//                       ItemCount

// ✔️ NavBar
// ✔️ Icon
// ✔️ Post
// ✔️ FeedContainer
// ✔️ FeedList

//npm i sass
