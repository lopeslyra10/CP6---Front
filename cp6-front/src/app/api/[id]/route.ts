import { NextRequest, NextResponse } from "next/server";

let assessments = [
  { id: 1, title: "Avaliação 1", category: "checkpoints", date: "2023-05-01", grade: 85, feedback: "Bom trabalho!" },
];


export async function GET(req: NextRequest, { params }: { params: { id?: string } }) {
  if (params.id) {
    const assessment = assessments.find((a) => a.id === parseInt(params.id as string));
    return assessment
      ? NextResponse.json(assessment)
      : NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
  return NextResponse.json(assessments);
}


export async function POST(req: NextRequest) {
  const newAssessment = await req.json();
  newAssessment.id = Date.now();
  assessments.push(newAssessment);
  return NextResponse.json(newAssessment, { status: 201 });
}


export async function DELETE(req: NextRequest, { params }: { params: { id?: string } }) {
  if (params.id) {
    const initialLength = assessments.length;
    assessments = assessments.filter((a) => a.id !== parseInt(params.id as string));
    return assessments.length < initialLength
      ? NextResponse.json({ message: "Avaliação excluída" }, { status: 204 })
      : NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
  return NextResponse.json({ message: "ID inválido" }, { status: 400 });
}
