"use client";

import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<div className="max-w-4xl space-y-4">
			<h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
				Your Concepts, Papers, and Strategies. One. Unified. Greetings
				and welcome to <span className="underline">NoteWave</span>
			</h1>
			<h3 className="text-base sm:text-xl md:text-2xl">
				The connected workspace where improved, more efficient work is
				performed is NoteWave.
			</h3>
			{isLoading && (
				<div className="flex w-full items-center justify-center">
					<Spinner size="lg" />
				</div>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href="/documents">
						Enter NoteWave
						<ArrowRight className="h-4 w-4 ml-2" />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<SignInButton mode="modal">
					<Button>
						Get NoteWave free
						<ArrowRight className="h-4 w-4 ml-2" />
					</Button>
				</SignInButton>
			)}
		</div>
	);
};
