import Porta from "../components/Porta";
import Presente from "../components/Presente";


export default function Jogo({qPortas, lPresente}) {
  const listPortas = [];


  function gerarPortas(n){
    console.log(n)
    for (let i = 0; i < n; i++) {
      if(i==lPresente-1){
        listPortas.push(<Porta premiada={true} aberta={false} key={i}><Presente/></Porta>)
      }else{
        listPortas.push(<Porta premiada={false} aberta={false} key={i}></Porta>)
      }
      
    }
    return listPortas;
  }


  return (
    <>
      {gerarPortas(qPortas)}
      
    </>
  );
}
