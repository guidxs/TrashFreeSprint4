import { } from 'react'
import imagem16 from './assets/image 16.png'
import imagem15 from './assets/image 15.png'
import imagem17 from './assets/image 17.png'

function About(){
    return(
        <>
        <div className='about'>
            <h1></h1>
            <p>  A TrashFree é uma startup inovadora que tem como objetivo transformar a forma como o lixo é coletado nas cidades.</p> <br />
            <p> A empresa criou um aplicativo que permite que os moradores informem quando há lixo para ser coletado em suas ruas e,</p><br />
            <p> com base nessa informação, o aplicativo gera a melhor rota para o caminhão de lixo,</p><br />
            <p> economizando tempo e combustível.</p><br />
            <p> Com a TrashFree, as cidades podem reduzir significativamente os custos de coleta de lixo, além de tornar o processo mais eficiente e sustentável.</p><br />
            <p> Isso também beneficia os moradores, que têm um serviço de coleta mais rápido e eficiente, reduzindo o tempo que o lixo permanece nas ruas e melhorando a qualidade de vida.</p><br />
            <p> Além disso, a TrashFree está sempre buscando novas soluções para melhorar ainda mais a coleta de lixo. Um exemplo disso é o seu produto, um lixo que abre a tampa automaticamente por sensor,</p><br />
            <p> evitando que os moradores precisem tocar na tampa suja do lixo e tornando o processo de descarte mais higiênico.</p><br />
            <p> A equipe por trás da TrashFree é formada por profissionais altamente qualificados e motivados, que estão comprometidos em criar soluções sustentáveis e eficientes para o futuro das cidades.</p><br />
            <p> Ajudando a tornar o mundo um lugar mais limpo e saudável.</p><br />
            <p> Com a TrashFree, o futuro da coleta de lixo parece muito mais promissor, e esperamos que outras empresas se inspirem em seu trabalho inovador</p><br />
            <p> para criar soluções ainda melhores para o meio ambiente e a sociedade como um todo.</p><br />
            
            <img className='fotos' src={imagem16} alt="" />
            <img className='fotos' src={imagem15} alt="" />
            <img className='fotos' src={imagem17} alt="" />
        </div>
        </>
    )
}
export default About