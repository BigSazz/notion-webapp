"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	if (isLoading) {
		return (
			<div className="h-full flex flex-col gap-y-3 items-center justify-center dark:bg-[#1f1f1f]">
				<Spinner size="lg" />
				<p className="text-xs capitalize font-medium">
					checking your Authorization status...
				</p>
			</div>
		);
	}

	if (!isAuthenticated) {
		return redirect("/");
	}

	return (
		<div className="h-full flex dark:bg-[#1f1f1f]">
			<Navigation />
			<main className="flex-1 h-full overflow-y-auto">{children}</main>
		</div>
	);
};

export default MainLayout;
