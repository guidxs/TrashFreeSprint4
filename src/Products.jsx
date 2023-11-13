import { } from 'react'
import grupo1 from './assets/Group 1.png'
import imagem9 from './assets/image 9.png'
import imagem10 from './assets/image 10.png'
import './style.scss'


function Produtos(){
    return(
        <>
            <div>
                <h1 id="intro">Adquira Já O app TrashFree</h1>
                <h3 id="subintro">Nós te enviaremos um link, abra-o em seu telefone para baixar o app!</h3>
            </div>
            <div class="container1">  
                <form>
                    <div class="form-container">
                        <label>
                            <input type="radio" name="assunto" id="celular" value="celular"/>
                            <span class="ball-label">Celular</span>
                        </label>
                    </div>
                    <div class="form-container">
                        <label>
                            <input type="radio" name="assunto" id="email" value="email"/>
                            <span class="ball-label">E-mail</span>
                        </label>
                    </div>
                    <div class="form-container">
                        <input type="text" id="informacao" name="informacao" placeholder="Digite a informação"/>
                    </div>
                    <div class="form-container">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>

            <div id="img2">
                <img src={grupo1} alt="celular com o app"/>
            </div>

            <div>
                <h2 id="download">Download disponível em:</h2>
                <a id="app-store" href="https://www.apple.com/br/app-store/" target="_blank"><img src={imagem10} alt="app store"/></a>
                <a id="play-store" href="https://play.google.com/store/games?hl=pt_BR&gl=US" target="_blank"><img src={imagem9} alt="google play"/></a>
            </div>
        </>
    )
}
export default Produtos