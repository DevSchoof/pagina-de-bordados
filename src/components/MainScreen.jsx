import * as React from 'react';
import { Box } from "@mui/material";
import Header from "./Header";
import Carrossel from "./Carrossel";


export default function MainScreen() {
    const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  async function puxarDados() {
    try {
      const response = await fetch('http://127.0.0.1:5000/products');
      const dataJson = await response.json();
      setDados(dataJson);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    puxarDados();
  }, []);

  if (loading || !dados) {
    return (
      <div>
        Carregando...
      </div>
    );
  }

  const arrayDados = Array.isArray(dados.products) ? dados.products : Object.values(dados.products);
  console.log(arrayDados) 

  const toalhas = arrayDados.filter(item => item.categoria.toLowerCase() === 'toalhas')
  const necessaires = arrayDados.filter(item => item.categoria.toLowerCase() === 'necessaires')
  const fraldas = arrayDados.filter(item => item.categoria.toLowerCase() === 'fraldas')
  const kits = arrayDados.filter(item => item.categoria.toLowerCase() === 'kits')
  const uniformes = arrayDados.filter(item => item.categoria.toLowerCase() === 'uniformes')
  const cozinha = arrayDados.filter(item => item.categoria.toLowerCase() === 'cozinha')

  return (
    <>
    <Header />
      <Box sx={{ paddingTop: '80px' }}>
        {(toalhas.length > 0) && <Carrossel data={toalhas} name='Toalhas'/>}
        {(necessaires.length > 0) && <Carrossel data={necessaires} name='Necessaires'/>}
        {(fraldas.length > 0) && <Carrossel data={fraldas} name='Fraldas'/>}
        {(kits.length > 0) && <Carrossel data={kits} name='Kits'/>}
        {(uniformes.length > 0) && <Carrossel data={uniformes} name='Uniformes'/>}
        {(cozinha.length > 0) && <Carrossel data={cozinha} name='Cozinha'/>}
      </Box>
    </>
  );
}
