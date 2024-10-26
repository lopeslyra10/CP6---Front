import { NextRequest, NextResponse } from 'next/server';

let assessments = [
  { id: 1, title: "Avaliação 1", category: "checkpoints", date: "2023-05-01", grade: 85, feedback: "Bom trabalho!" },
  { id: 2, title: "Avaliação 2", category: "globalsolution", date: "2023-06-01", grade: 90, feedback: "Excelente!" },
];


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  const id = idParam ? parseInt(idParam, 10) : NaN;
  
  if (isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 });
  }
  
  const assessment = assessments.find((a) => a.id === id);
  if (assessment) {
    return NextResponse.json(assessment, { status: 200 });
  } else {
    return NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
}


export async function POST(req: NextRequest) {
  const newAssessment = await req.json();
  newAssessment.id = Date.now();
  assessments.push(newAssessment);
  return NextResponse.json(newAssessment, { status: 201 });
}


export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  const id = idParam ? parseInt(idParam, 10) : NaN;
  
  if (isNaN(id)) {
    return NextResponse.json({ message: "ID inválido" }, { status: 400 });
  }

  const initialLength = assessments.length;
  assessments = assessments.filter((a) => a.id !== id);

  return assessments.length < initialLength
    ? NextResponse.json({ message: "Avaliação excluída" }, { status: 204 })
    : NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
}
