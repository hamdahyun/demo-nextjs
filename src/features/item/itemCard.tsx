import { AspectRatio, Box, Button, HStack, Link as ChakraLink, Stack, StackProps, Text, useColorModeValue } from "@chakra-ui/react";
import Image  from "next/image";
import Link from "next/link";
import { PriceTag } from "./PriceTag";
import { IItem } from "@/entities/item";

interface Props {
	item: IItem;
	rootProps?: StackProps;
}

const BASE_URL = "http://placeimg.com/480/480/"

export const ItemCard = (props: Props) => {
	const { item, rootProps } = props;
	const { brandName, itemId, itemName, itemLink, ItemImages, strikeOutPrice, displayPrice } = item;

	return (
		<Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
            {/* <Link href="/about"><a>About</a></Link> */}
            <Link href={{ 
                pathname: `/details/${itemId}`, 
                query: {item : JSON.stringify(item)} 
            }}
            as={`/details/${itemId}`}
            passHref>
                <a href="#">
                    <Box position="relative">
                        <AspectRatio  ratio={1}>
                            <Image src={`${BASE_URL}${itemId}`} layout="fill" alt={itemName} />
                        </AspectRatio>
                    </Box>
                    <Stack>
                        <Stack spacing="1">
                            <Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.400")}>
                                {brandName}
                            </Text>
                            <Text fontWeight="medium" color={useColorModeValue("gray.700", "gray.400")}>
                                {itemName}
                            </Text>
                            <PriceTag price={strikeOutPrice} salePrice={displayPrice} currency="KRW" />
                        </Stack>
                        <HStack>
                            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                                12 Reviews
                            </Text>
                        </HStack>
                    </Stack>
                </a>
            </Link>
			<Stack align="center">
				<Button colorScheme="blue" isFullWidth>
					Add to cart
				</Button>
				<Link href={itemLink ?? "#"} passHref>
					<ChakraLink textDecoration="underline" fontWeight="medium" color={useColorModeValue("gray.600", "gray.400")}>
						Quick shop
					</ChakraLink>
				</Link>
			</Stack>
		</Stack>
	);
};