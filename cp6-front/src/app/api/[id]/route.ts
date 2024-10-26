import { NextApiRequest, NextApiResponse } from "next";

import { NextApiRequest, NextApiResponse } from "next";

let assessments = [
  { id: 1, title: "Avaliação 1", category: "checkpoints", date: "2023-05-01", grade: 85, feedback: "Bom trabalho!" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      if (id) {
        const assessment = assessments.find(a => a.id === parseInt(id as string));
        if (assessment) {
          res.status(200).json(assessment);
        } else {
          res.status(404).json({ message: "Avaliação não encontrada" });
        }
      } else {
        res.status(200).json(assessments);
      }
      break;

    case "POST":
      const newAssessment = { id: Date.now(), ...req.body };
      assessments.push(newAssessment);
      res.status(201).json(newAssessment);
      break;

    case "PUT":
      const updatedAssessment = assessments.find(a => a.id === parseInt(id as string));
      if (updatedAssessment) {
        Object.assign(updatedAssessment, req.body); // Atualiza a avaliação com os novos dados
        res.status(200).json(updatedAssessment);
      } else {
        res.status(404).json({ message: "Avaliação não encontrada" });
      }
      break;

    case "DELETE":
      assessments = assessments.filter(a => a.id !== parseInt(id as string));
      res.status(204).end();
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(` Método${method} não permitido`);
  }
}