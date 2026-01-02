export const getUser = (name: string) => {
  // imagine uma chamada ao banco de dados aqui
  return {
    name: name,
    email: `${name}@example.com`,
    phone: "+1234567890",
    address: "Rua Principal 123, Cidade Qualquer, Brasil",
    role: "administrador",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastActive: new Date(),
    company: "Exemplo S.A.",
    department: "Engenharia",
    position: "Engenheiro de Software",
    status: "ativo",
    notes: "Esta e uma observacao sobre o usuario.",
  };
};

export const getUsers = () => {
  // imagine uma chamada ao banco de dados aqui
  return [
    getUser("Joao Silva"),
    getUser("Maria Souza"),
    getUser("Carlos Pereira"),
    getUser("Ana Costa"),
  ];
};
