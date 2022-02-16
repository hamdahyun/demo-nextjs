import type { NextPage } from "next";
import { wrapper } from "@/store/store";
import { useAppSelector } from "@/hook/hook";
import { getItems, selectItem } from "@/features/item/itemSlice";
import { Box } from "@chakra-ui/react";
import { ItemGrid } from "@/features/item/itemGrid";
import { ItemCard } from "@/features/item/itemCard";
import { mapItem } from "@/entities/item";

const Home: NextPage = () => {
	const { itemList } = useAppSelector(selectItem);

	return (
		<Box>
			<ItemGrid>
				{itemList?.map(mapItem).map((item) => (
					<ItemCard key={item.itemId} item={item} />
				))}
			</ItemGrid>
		</Box>
	);
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
	await store.dispatch(getItems());

	return {
		props: {},
	};
});

export default Home;