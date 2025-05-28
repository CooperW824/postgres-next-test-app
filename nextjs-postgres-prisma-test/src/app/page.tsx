"use client";

import TodoElement from "@/components/TodoItem";
import { TodoItem } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { useEffect, useState } from "react";

export default function Home() {
	

	const [items, setItems] = useState<TodoItem[]>([]);

	function refreshTodoList() {
		fetch("/api/todo-item", { method: "GET" }).then((res) => {
			res.json().then((value) => {
				const returnedItems = value as TodoItem[];
				returnedItems.sort((a, b) => b.priority - a.priority);
				setItems(returnedItems);
			});
		});
	}

	useEffect(refreshTodoList, []);

	return (
		<div>
			{items.map((item) => (
				<TodoElement
					todoItem={item}
					updateItem={async (updatedItem) => {
						let res = await fetch(`/api/todo-item/`, {
							method: "PUT",
							body: JSON.stringify(updatedItem),
						});

						refreshTodoList()

						return res.json() as Promise<TodoItem>;
					}}
					deleteItem={async (updatedItem) => {
						let res = await fetch(`/api/todo-item/`, {
							method: "DELETE",
							body: JSON.stringify(updatedItem),
						});

						refreshTodoList();

						return res.json() as Promise<TodoItem>;
					}}
					key={item.id}
				/>
			))}
			<button
				onClick={async () => {
					const res = await fetch(`/api/todo-item/`, {
						method: "POST",
					});

					const newItem = await res.json();

					const newItems = [...items, newItem];
					newItems.sort((a, b) => b.priority - a.priority);

					setItems(newItems);
				}}
			>
				Create New Item
			</button>
		</div>
	);
}
