import prisma from "./database";

(async () => {
  try {
    const students = await prisma.student.groupBy({
      by: ["class"],
      _count: { id: true }
    });

    const students2 = await prisma.student.groupBy({
      by: ["class"],
      _count: { id: true },
      where: { jobId: null }
    });
    console.log(students);
    console.log(students2);
  } catch (error) {
    console.error("Erro ao consultar o banco de dados:", error);
  }
})();
