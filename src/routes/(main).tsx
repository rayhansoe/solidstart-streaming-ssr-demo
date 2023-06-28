import { Show, Suspense, type VoidComponent, createEffect } from "solid-js";
import { A, Outlet, refetchRouteData, useIsRouting, useLocation, useRouteData } from "solid-start";

import { useShoppingSession, useUser } from "./(main).data";

export function routeData() {
	const shoppingSession = useShoppingSession();

	const user = useUser();

	return { user, shoppingSession };
}

const Home: VoidComponent = () => {
	const { shoppingSession, user } = useRouteData<typeof routeData>();
	const isRouting = useIsRouting();
	const location = useLocation();

	createEffect(() => {
		if (isRouting()) {
			refetchRouteData("nav");
		}
	});

	return (
		<main class='full-width'>
			<div class='sticky top-0 z-10 flex w-full items-center justify-center overflow-hidden bg-white shadow-lg'>
				<nav class='container mx-auto  flex items-center justify-between p-4'>
					<ul class='flex items-center gap-6'>
						<li>
							<A
								class={`flex items-center justify-center text-xl transition-transform ${
									location.pathname === "/" ? "" : "text-gray-500"
								} hover:scale-105 `}
								href='/'
							>
								Home
							</A>
						</li>

						<li>
							<A
								class={`flex items-center justify-center text-xl transition-transform ${
									location.pathname === "/cart" ? "" : "text-gray-500"
								} hover:scale-105 `}
								href='/cart'
							>
								Cart
							</A>
						</li>
						<li>
							<A
								class={`flex items-center justify-center text-xl transition-transform ${
									location.pathname === "/profile" ? "" : "text-gray-500"
								} hover:scale-105 `}
								href='/profile'
							>
								Profile
							</A>
						</li>
					</ul>
					<A
						href='/cart'
						class='cart-button relative flex items-center justify-center rounded-full border border-gray-200 p-3 drop-shadow-md hover:drop-shadow-lg'
					>
						<svg
							class='h-6 w-6 text-blue-500 '
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
						</svg>
						<Suspense fallback={<h1>Loading...</h1>}>
							<Show when={user() && shoppingSession()}>
								{/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
								<div class='absolute -right-1 -top-1 flex min-h-[1.5rem] min-w-[1.5rem] -translate-y-[8%] translate-x-1/3 items-center justify-center rounded-3xl bg-red-600 px-2 text-xs font-extrabold text-white'>
									{shoppingSession()?.quantities}
									<span class='absolute inline-flex h-full w-full animate-ping rounded-3xl bg-red-600 opacity-25' />
								</div>
							</Show>
						</Suspense>
					</A>
				</nav>
			</div>
			<div class='container flex flex-col items-center justify-center gap-12 px-4 py-6'>
				<Outlet />
				{/* <Suspense fallback={<>Laoding</>}>
					<Show when={user()}>
						
					</Show>
				</Suspense> */}
			</div>
		</main>
	);
};

export default Home;
