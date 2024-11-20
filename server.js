import express from 'express';

const posts = [
    { id: 1, descricao: "Um gatinho curioso explorando o mundo", imagem: "https://placecats.com/200/300"
    },
    { id: 2, descricao: "Um gatinho sonolento tomando um cochilo", imagem: "https://placecats.com/300/200?sleepy"
    },
    { id: 3, descricao: "Um gatinho brincando com um novelo de lã", imagem: "https://placecats.com/400/300?yarn"
    },
    { id: 4,descricao: "Um gatinho com uma expressão muito fofa", imagem: "https://placecats.com/300/300?cute"
    },
    { id: 5, descricao: "Um gatinho se escondendo em uma caixa", imagem: "https://placecats.com/200/300?box"
    },
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);

});

function buscarPostPorID(id) {
    return posts.findIndex((post) => { 
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);

});
