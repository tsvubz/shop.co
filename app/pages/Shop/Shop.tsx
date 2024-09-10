import Container from '@app/components/atoms/Container/Container';
import Grid from '@app/components/atoms/Grid/Grid';

import ShopProduct from '@app/components/molecules/ShopProduct/ShopProduct';
import { products } from '@app/data/products';

export const Shop = () => {
    return (
        <Container paddingDesktop='desktop-1' paddingTablet='tablet-1' paddingMobile='mobile-1' >
            <Grid columnsDesktop="desktop-4" columnsTablet="tablet-3" columnsMobile="mobile-2">
            {products.map((product) => (
                <ShopProduct 
                    id={product.id} 
                    imgUrl={product.imgUrl} 
                    title={product.title} 
                    rating={product.rating} 
                    price={product.price} 
                /> 
            ))}
            </Grid>
        </Container>
    )
}
