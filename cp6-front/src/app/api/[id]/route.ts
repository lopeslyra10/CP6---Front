import { NextRequest, NextResponse } from "next/server";

let assessments = [
  { id: 1, title: "Avaliação 1", category: "checkpoints", date: "2023-05-01", grade: 85, feedback: "Bom trabalho!" },
];


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  if (id) {
    const assessment = assessments.find(a => a.id === parseInt(id));
    return assessment ? NextResponse.json(assessment) : NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  } else {
    return NextResponse.json(assessments);
  }
}


export async function POST(req: NextRequest) {
  const newAssessment = await req.json();
  newAssessment.id = Date.now();
  assessments.push(newAssessment);
  return NextResponse.json(newAssessment, { status: 201 });
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const updatedData = await req.json();
  const index = assessments.findIndex(a => a.id === parseInt(id));

  if (index !== -1) {
    assessments[index] = { ...assessments[index], ...updatedData };
    return NextResponse.json(assessments[index]);
  } else {
    return NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const initialLength = assessments.length;
  assessments = assessments.filter(a => a.id !== parseInt(id));

  if (assessments.length < initialLength) {
    return NextResponse.json({ message: "Avaliação excluída" }, { status: 204 });
  } else {
    return NextResponse.json({ message: "Avaliação não encontrada" }, { status: 404 });
  }
}
