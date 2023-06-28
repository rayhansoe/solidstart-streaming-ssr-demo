import { Show, Suspense } from "solid-js";
import { refetchRouteData, useRouteData } from "solid-start";

import { useUser } from "~/services/useUser";

export function routeData() {
	const user = useUser();

	return user;
}

export default function home() {
	const user = useRouteData<typeof routeData>();
	return (
		<div class='flex flex-col items-center justify-center gap-12 rounded border border-slate-500 px-24 py-10'>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Show when={user()}>
					<h1 class='text-xl font-medium'>Hello {user()?.username}</h1>
				</Show>
			</Suspense>
			<h3 class='text-lg'>Message board</h3>
			<button onClick={() => refetchRouteData()}>Refresh</button>
		</div>
	);
}
