import { createServerData$ } from "solid-start/server";

// import { db } from "~/db";
export const useUser = () =>
	createServerData$(
		async () => {
			// server
			console.log("user user inside server data, on server");

			// return new Promise;
			return new Promise(
				(
					resolve: (
						value: {
							id: string;
							username: string;
							first_name: string;
							last_name: string;
							avatar_url: string | null;
							bio: string | null;
							role: "Admin" | "User";
						} | null
					) => void
				) => {
					setTimeout(
						() =>
							resolve({
								id: "1",
								avatar_url: "asd",
								bio: "asd",
								first_name: "tara",
								last_name: "arts",
								role: "Admin",
								username: "taraarts",
							}),
						8000
					);
				}
			);
		},
		{
			deferStream: false,
		}
	);
