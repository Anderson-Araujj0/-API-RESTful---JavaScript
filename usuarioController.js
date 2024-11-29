// Dados de exemplo (um banco de dados simples em memória)
let usuarios = [
    { id: 1, nome: 'João', email: 'joao@example.com' },
    { id: 2, nome: 'Maria', email: 'maria@example.com' },
];

// Função para obter todos os usuários
exports.getUsuarios = (req, res) => {
    res.json(usuarios);
};

// Função para criar um novo usuário
exports.criarUsuario = (req, res) => {
    const { nome, email } = req.body;

    // Verificar se os dados foram enviados
    if (!nome || !email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios.' });
    }

    // Criar o novo usuário
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email
    };

    // Adicionar o novo usuário ao "banco de dados"
    usuarios.push(novoUsuario);

    res.status(201).json(novoUsuario);
};

// Função para atualizar um usuário existente
exports.atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;

    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    // Atualizar os dados do usuário
    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;

    res.json(usuario);
};

// Função para deletar um usuário
exports.deletarUsuario = (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex(u => u.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
    }

    // Remover o usuário do "banco de dados"
    usuarios.splice(index, 1);

    res.status(204).send(); // Retorna 204 sem conteúdo
};
