import logo from'../../assets/logoArnia.png';
import { ContainerHeader } from "./styles"

export default function Header(){
    return(
        <ContainerHeader>
            <img src={logo}/>
            <div>Loja Virtual</div>
        </ContainerHeader>
    )
}