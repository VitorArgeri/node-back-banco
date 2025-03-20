import prisma from "../../prisma/client.js"

class TarefaModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  create = async (descricao) => {
    return await prisma.task.create({
      data: {
        descricao,
      },
    });
  };
  
  update = async (id, concluida) => {
    try {
      const tarefa = await prisma.task.update({
        where: { id },
        data: { concluida: concluida !== undefined ? concluida : true },
      })
      return tarefa
    } catch (error) {
      console.log("Error", error)
      throw error
    }
  };

  delete = async (id) => {
    try {
        const tarefa = await prisma.task.delete({
        where: { id }
      })
      return tarefa
    } catch (error) {
      console.log("Error", error)
      throw error
    }
  }
}

export default new TarefaModel();
