import { Show } from "solid-js";
// import { useIsRouting } from "solid-start";

import type { shopping_session } from "@prisma/client";

const CartQuantity = (props: { shoppingSession: shopping_session | null | undefined }) => {
	// const isRouting = useIsRouting();

	return (
		<Show when={props.shoppingSession}>
			{/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
			<div class='absolute -right-1 -top-1 flex min-h-[1.5rem] min-w-[1.5rem] -translate-y-[8%] translate-x-1/3 items-center justify-center rounded-3xl bg-red-600 px-2 text-xs font-extrabold text-white'>
				{props.shoppingSession?.quantities}
				<span class='absolute inline-flex h-full w-full animate-ping rounded-3xl bg-red-600 opacity-25' />
			</div>
		</Show>
	);
};
export default CartQuantity;
