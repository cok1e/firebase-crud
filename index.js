import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.title}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`;
    });

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;

          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  try {
    if (!editStatus) {
      await saveTask(title.value, description.value);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Save";
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});


import {
  onGetProduto,
  saveProduto,
  deleteProduto,
  getProdutos,
  updateProduto,
  getProduto,
} from "./firebase.js";

const produtoForm = document.getElementById("produto-form");
const produtoContainer = document.getElementById("produto-container");

let editStatuses = false;
let ids = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getProdutos();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });

  onGetProduto((querySnapshot) => {
    produtoContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const produto = doc.data();

      produtoContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${produto.nome}</h3>
    <h3 class="h5">${produto.quantidade}</h3>
    <h3 class="h5">R$ ${produto.valor}</h3>
    <h3 class="h5">${produto.dataV}</h3>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`;
    });

    const btnsDelete = produtoContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteProduto(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = produtoContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getProduto(e.target.dataset.id);
          const produto = doc.data();
          produtoForm["produto-nome"].value = produto.nome;
          produtoForm["produto-quantidade"].value = produto.quantidade;
          produtoForm["produto-valor"].value = produto.valor;
          produtoForm["produto-dataV"].value = produto.dataV;

          editStatuses = true;
          ids = doc.id;
          produtoForm["btn-produto-form"].innerText = "Update";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

produtoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = produtoForm["produto-nome"];
  const quantidade = produtoForm["produto-quantidade"];
  const valor = produtoForm["produto-valor"];
  const dataV = produtoForm["produto-dataV"];

  try {
    if (!editStatuses) {
      await saveProduto(nome.value, quantidade.value, valor.value, dataV.value);
    } else {
      await updateProduto(ids, {
        nome: nome.value,
        quantidade: quantidade.value,
        valor: valor.value,
        dataV: dataV.value,
      });

      editStatuses = false;
      ids = "";
      produtoForm["btn-produto-form"].innerText = "Save";
    }

    produtoForm.reset();
    nome.focus();
  } catch (error) {
    console.log(error);
  }
});