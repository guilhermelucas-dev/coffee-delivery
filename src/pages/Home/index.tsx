import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import { coffees } from '../../../data.json';

import { ContentHome, GridCoffeesList, SectionCoffees, SectionHero, WrapperInfo } from './styles';
import { ProductItem  } from '../../components/Product';

import herocoffee from './../../assets/copo-café.png';
import { Info } from '../../components/Info';
import { useTheme } from 'styled-components';

export function Home() {
  const theme = useTheme();
  return (
    <main>
      <ContentHome>
        <SectionHero>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>

            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
            <WrapperInfo>
              <Info backgroundIconColor={'orange'}>
                <span><ShoppingCart size={16} weight="fill" color={theme['white']} /></span>
                <p>Compra simples e segura</p>
              </Info>
              <Info backgroundIconColor={'black'}>
                <span> <Package size={16} weight="fill" color={theme['white']} /></span>
                <p>Embalagem mantém o café intacto</p>
              </Info>
              <Info backgroundIconColor={'yellow'}>
                <span>  <Timer size={16} weight="fill"color={theme['white']} /></span>
                <p>Entrega rápida e rastreada</p>
              </Info>
              <Info backgroundIconColor={'purple'}>
                <span><Coffee  size={16} weight="fill" color={theme['white']} /> </span>
                <p>O café chega fresquinho até você</p>
              </Info>
            </WrapperInfo>
          </div>

          <img src={herocoffee}  alt="Imbalagem do café caom alguns grãos e pó de café ao redor"/>
        </SectionHero>

      </ContentHome>  

      <SectionCoffees>
        <h2>Nossos cafés</h2>

      <GridCoffeesList>
        {coffees.map((coffee) => (
           <ProductItem key={coffee.id} coffee={coffee} />
        ))}
      </GridCoffeesList>

      </SectionCoffees>
      
    </main>
  );
}