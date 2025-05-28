"use client";

import { TodoItem } from "@/generated/prisma";
import { useState } from "react";

export default function TodoElement({
	todoItem,
	updateItem,
	deleteItem,
}: {
	todoItem: TodoItem;
	updateItem: (updatedItem: TodoItem) => Promise<TodoItem>;
	deleteItem: (itemToDelete: TodoItem) => Promise<TodoItem>;
}) {
	const [updatedItem, setUpdatedItem] = useState(todoItem);
	return (
		<div>
			<input
				type="checkbox"
				id="item-check"
				checked={updatedItem.completed}
				onChange={(event) => {
					setUpdatedItem({
						...updatedItem,
						completed: event.target.checked,
					});
				}}
				onBlur={() => updateItem(updatedItem)}
			/>
			<input
				type="number"
				id="item-priority"
				value={updatedItem.priority}
				onChange={(event) => {
					setUpdatedItem({
						...updatedItem,
						priority: event.target.valueAsNumber,
					});
				}}
				onBlur={() => updateItem(updatedItem)}
			/>
			<input
				type="text"
				id="item-text"
				value={updatedItem.item}
				onChange={(event) => {
					setUpdatedItem({
						...updatedItem,
						item: event.target.value,
					});
				}}
				onBlur={() => updateItem(updatedItem)}
			/>

			<button
				type="button"
				onClick={() => {
					if (!confirm("Are you sure you want to delete this item?"))
						return;

					deleteItem(todoItem);
				}}
			>
				Delete Item
			</button>
		</div>
	);
}
