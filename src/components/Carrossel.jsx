// Importa as bibliotecas React e os componentes necessários do Material-UI Joy
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio'; // Componente para manter a proporção de imagens
import Box from '@mui/joy/Box'; // Componente para layout flexível
import Typography from '@mui/joy/Typography'; // Componente para texto estilizado
import Card from '@mui/joy/Card'; // Componente para criar cartões

// Dados estáticos para o carrossel, contendo imagens, títulos e descrições
const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236', // URL da imagem
    title: 'Night view', // Título da imagem
    description: '4.21M views', // Descrição da imagem
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: '3.98M views',
  },
];

// Função principal que renderiza o carrossel
export default function CarouselRatio() {
  return (
    <>
      {/* Título da seção */}
      <h2>
        Categoria
      </h2>

      {/* Container do carrossel */}
      <Box
        sx={{
          display: 'flex', // Define o layout como flexível
          gap: 1, // Espaçamento entre os itens
          py: 1, // Padding vertical
          overflow: 'auto', // Permite rolagem horizontal
          width: 343, // Largura do carrossel
          scrollSnapType: 'x mandatory', // Ativa o comportamento de snap na rolagem
          '& > *': {
            scrollSnapAlign: 'center', // Alinha os itens ao centro durante o snap
          },
          '::-webkit-scrollbar': { display: 'none' }, // Oculta a barra de rolagem no Webkit
        }}
      >
        {/* Mapeia os dados e cria um cartão para cada item */}
        {data.map((item) => (
          <Card
            orientation="horizontal" // Define a orientação do cartão
            size="sm" // Define o tamanho do cartão
            key={item.title} // Chave única para cada item
            variant="outlined" // Estilo do cartão
          >
            {/* Componente para manter a proporção da imagem */}
            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
              <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`} // Imagem em alta resolução
                src={`${item.src}?h=120&fit=crop&auto=format`} // Imagem padrão
                alt={item.title} // Texto alternativo para acessibilidade
              />
            </AspectRatio>

            {/* Conteúdo do cartão */}
            <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
              <Typography level="title-md">{item.title}</Typography> {/* Título */}
              <Typography level="body-sm">{item.description}</Typography> {/* Descrição */}
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
