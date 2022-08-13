import React from 'react'
import "./Construi.css"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Gif from '../src/Imagen1.gif'
function Construi() {
  return (
    <Container className='inicio'>
            <Image className='img__gif1' src={Gif} fluid></Image>
        <Container className='inicio__texto'>
            <h1 className='tit_1'>¡Hola!</h1>
            <p className='text__1'>Estamos trabajando para brindarte una mejor experiencia.</p>
            <p className='text__2'>Puedes escribirnos para más información</p>
            <a href='https://wa.me/573016504630'><button >Contactanos </button></a>
        </Container>
        
    </Container>
  )
}

export default Construi
