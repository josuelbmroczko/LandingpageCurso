import { data } from "../data";
import { StyledServicos } from "./styledServicos";
import { adicionarServico } from '../adicionarServico'; 
import {Helmet} from 'react-helmet'
export function Servicos(){

    return(
        <StyledServicos>
            <a id="servicos"></a>
             <div className="content">
             <Helmet>
                        <title>{data.servicos.servico}</title>
                        <meta name='description' content={data.servicos.titulo} />
                        <meta name='keywords' content={data.servicos.texto}/>
                    </Helmet>
                <span>{data.servicos.servico}</span>
                <h2>{data.servicos.titulo}</h2>
                <p>{data.servicos.texto}</p>
            </div>
         
            <ul>
                {adicionarServico.map((produto,index)=>(
                 <li key={index}>
                    <img 
                    src={produto.imagem}
                    alt={`Imagem ${index}`}
                    className="imagem-produto"
                    />
                    <h2>{produto.nome} </h2>
                    <p>{produto.texto} </p>
                </li>
                ))}
            </ul> 
        </StyledServicos>
    )
}
