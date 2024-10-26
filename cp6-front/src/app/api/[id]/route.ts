import { NextRequest, NextResponse } from "next/server";

let assessments = [
  { id: 1, title: "Avaliação 1", category: "checkpoints", date: "2023-05-01", grade: 85, feedback: "Bom trabalho!" },
];


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const assessment = assessments.find(a => a.id === parseInt(params.id));
  return assessment ? NextResponse.json(assessment) : NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const updatedData = await req.json();
  const index = assessments.findIndex(a => a.id === parseInt(params.id));

  if (index !== -1) {
    assessments[index] = { ...assessments[index], ...updatedData };
    return NextResponse.json(assessments[index]);
  } else {
    return NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
}


export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const initialLength = assessments.length;
  assessments = assessments.filter(a => a.id !== parseInt(params.id));

  if (assessments.length < initialLength) {
    return NextResponse.json({ message: "Avaliação excluída" }, { status: 204 });
  } else {
    return NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
}
