import  React  from 'react';
import { withRouter } from 'next/router'
import { AspectRatio, Box,  Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { PriceTag } from '../../features/item/PriceTag';

interface WithRouterProps{
    router: any;
}

const BASE_URL = "http://placeimg.com/480/480/";

const Detail = ({router: {query}}: WithRouterProps) => {
    const item = JSON.parse(query.item);
    const { brandName, itemId, itemName, itemLink, ItemImages, strikeOutPrice, displayPrice } = item;
    
    console.log(`item`,item)
    return (
        <Box>
            <AspectRatio  ratio={1}>
                <Image src={`${BASE_URL}${itemId}`} layout="fill" alt={itemName} />
            </AspectRatio>
            <Stack spacing="1">
                <Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.400")}>
                    {brandName}
                </Text>
                <Text fontWeight="medium" color={useColorModeValue("gray.700", "gray.400")}>
                    {itemName}
                </Text>
                <PriceTag price={strikeOutPrice} salePrice={displayPrice} currency="KRW" />
            </Stack>
        </Box>
    )
}
//   export default Detail
export default withRouter(Detail)