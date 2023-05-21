import Visa from'../../assets/visa1.png';
import Master from'../../assets/master_card1.png';
import Boleto from'../../assets/imgboleto.png';
import Hipercard from'../../assets/hipercard1.png';

import { ContainerPagto } from "./styles"
export default function Footer(){
    return(
        <ContainerPagto>
            Meios de Pagamento:
            <img src={Visa}/>
            <img src={Master}/>
            <img src={Boleto}/>
            <img src={Hipercard}/>
            
        </ContainerPagto>
    )
}