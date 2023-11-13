import { } from 'react'
import banner from './assets/image 1.png'
import imagem20 from './assets/image 20.png'
import imagem19 from './assets/image 19.png'
import imagem18 from './assets/image 18.png'
import './style.scss'

function Home(){
    return(
        <>
        <img className='banner-scss' src={banner}/>

        <div className='container'>
            <img src={imagem20} className='image1' />
            <p>A maioria das pessoas enfrenta a dificuldade de encontrar maneiras eficazes e convenientes de descartar o lixo. O lixo frequentemente se acumula em locais inapropriados, levando a problemas de saúde e ambientais. Além disso, muitas pessoas não têm acesso a serviços de coleta de lixo adequados, o que pode levar a uma maior acumulação de lixo e ao surgimento de animais e insetos nocivos.</p>
        </div>

        <div className='container'>
            <p>Outro problema enfrentado pela sociedade é a poluição causada pela coleta de lixo inadequada. A queima de lixo e a disposição inadequada de resíduos podem levar à poluição do ar e do solo, o que pode ter impactos negativos na saúde humana e na qualidade de vida.</p>
            <img src={imagem19} className='image2' />
        </div>

        <div className='container'>
            <img src={imagem18} className='image1' />
            <p>Nós também usamos tecnologia inovadora para ajudar a tornar a coleta de lixo mais eficiente, reduzindo a quantidade de lixo que é descartada inadequadamente e minimizando os impactos negativos na saúde humana e no meio ambiente.</p>
        </div>
        </>
    )
}
export default Home