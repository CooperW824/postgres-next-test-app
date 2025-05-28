import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { TodoItem } from "@/generated/prisma";

export async function GET(_req: NextRequest) {
	const res = await prisma.todoItem.findMany();

	return NextResponse.json(res);
}

export async function POST(_req: NextRequest) {
	const res = await prisma.todoItem.create({
		data: {
			item: "",
		},
	});

	return NextResponse.json(res);
}

export async function PUT(req: NextRequest) {
	const body: TodoItem = await req.json();

	const res = await prisma.todoItem.update({
		where: {
			id: body.id,
		},
		data: {
			item: body.item,
			completed: body.completed,
			priority: body.priority,
		},
	});

	return NextResponse.json(res);
}

export async function DELETE(req: NextRequest) {
	const body: TodoItem = await req.json();

	const res = await prisma.todoItem.delete({
		where: {
			id: body.id,
		},
	});

	return NextResponse.json(body);
}
