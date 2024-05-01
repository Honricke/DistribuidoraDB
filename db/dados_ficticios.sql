-- Inserir 15 clientes
INSERT INTO Cliente (cpf, nome_cli, estado, rua, numero_casa)
VALUES
('111.111.111-11', 'João Silva', 'São Paulo', 'Rua A', 123),
('222.222.222-22', 'Maria Santos', 'Rio de Janeiro', 'Rua B', 456),
('333.333.333-33', 'Pedro Oliveira', 'Belo Horizonte', 'Rua C', 789),
('444.444.444-44', 'Ana Souza', 'Brasília', 'Rua D', 246),
('555.555.555-55', 'Lucas Pereira', 'Salvador', 'Rua E', 135),
('666.666.666-66', 'Juliana Ferreira', 'Curitiba', 'Rua F', 579),
('777.777.777-77', 'Marcos Almeida', 'Porto Alegre', 'Rua G', 357),
('888.888.888-88', 'Carla Lima', 'Recife', 'Rua H', 468),
('999.999.999-99', 'Fernanda Costa', 'Fortaleza', 'Rua I', 246),
('101.101.101-10', 'Rafael Martins', 'Manaus', 'Rua J', 135),
('202.202.202-20', 'Amanda Oliveira', 'Natal', 'Rua K', 357),
('303.303.303-30', 'Felipe Sousa', 'Porto Velho', 'Rua L', 579),
('404.404.404-40', 'Laura Pereira', 'João Pessoa', 'Rua M', 468),
('505.505.505-50', 'Gabriel Santos', 'Teresina', 'Rua N', 579),
('606.606.606-60', 'Isabela Lima', 'Vitória', 'Rua O', 135);

-- Inserir 15 vendedores
INSERT INTO Vendedor (nome_vend, salario, estado, rua, numero_casa, telefone, email)
VALUES
('Carlos Oliveira', 3000, 'São Paulo', 'Rua A', 123, '123456789', 'carlos@example.com'),
('Mariana Souza', 3200, 'Rio de Janeiro', 'Rua B', 456, '987654321', 'mariana@example.com'),
('Paulo Santos', 3100, 'Belo Horizonte', 'Rua C', 789, '111222333', 'paulo@example.com'),
('Ana Lima', 3300, 'Brasília', 'Rua D', 246, '444555666', 'ana@example.com'),
('Rodrigo Almeida', 3400, 'Salvador', 'Rua E', 135, '777888999', 'rodrigo@example.com'),
('Carolina Martins', 3500, 'Curitiba', 'Rua F', 579, '000111222', 'carolina@example.com'),
('Lucas Pereira', 3600, 'Porto Alegre', 'Rua G', 357, '333444555', 'lucas@example.com'),
('Juliana Oliveira', 3700, 'Recife', 'Rua H', 468, '666777888', 'juliana@example.com'),
('Pedro Costa', 3800, 'Fortaleza', 'Rua I', 246, '999000111', 'pedro@example.com'),
('Amanda Silva', 3900, 'Manaus', 'Rua J', 135, '222333444', 'amanda@example.com'),
('Gabriel Sousa', 4000, 'Natal', 'Rua K', 357, '555666777', 'gabriel@example.com'),
('Isabela Santos', 4100, 'Porto Velho', 'Rua L', 579, '888999000', 'isabela@example.com'),
('Marcos Lima', 4200, 'João Pessoa', 'Rua M', 468, '111222333', 'marcos@example.com'),
('Laura Almeida', 4300, 'Teresina', 'Rua N', 579, '444555666', 'laura@example.com'),
('Rafael Martins', 4400, 'Vitória', 'Rua O', 135, '777888999', 'rafael@example.com');

-- Inserir 15 itens
INSERT INTO Item (nome_item, preco, em_estoque)
VALUES
('Camiseta', 30, 100),
('Calça Jeans', 50, 150),
('Tênis', 80, 200),
('Vestido', 60, 120),
('Sapato Social', 70, 80),
('Saia', 40, 90),
('Blusa', 35, 110),
('Shorts', 25, 130),
('Jaqueta', 90, 160),
('Cinto', 20, 70),
('Bermuda', 45, 60),
('Chapéu', 25, 50),
('Gravata', 15, 40),
('Sapato Feminino', 65, 30),
('Meia', 10, 20);

-- Inserir 15 fornecedores com nomes fictícios de pessoas
INSERT INTO Fornecedor (nome_forn, nome_empresa, telefone, email, estado, rua, numero_casa)
VALUES
('João Silva', 'Empresa XPTO', '(11) 1111-1111', 'fornecedorA@example.com', 'São Paulo', 'Rua A', 123),
('Maria Santos', 'Indústria ABC', '(22) 2222-2222', 'fornecedorB@example.com', 'Rio de Janeiro', 'Rua B', 456),
('Pedro Oliveira', 'Comércio 123', '(33) 3333-3333', 'fornecedorC@example.com', 'Belo Horizonte', 'Rua C', 789),
('Ana Lima', 'Distribuidora YZ', '(44) 4444-4444', 'fornecedorD@example.com', 'Brasília', 'Rua D', 246),
('Rodrigo Almeida', 'Produtos Fantásticos', '(55) 5555-5555', 'fornecedorE@example.com', 'Salvador', 'Rua E', 135),
('Carolina Martins', 'Soluções Innovate', '(66) 6666-6666', 'fornecedorF@example.com', 'Curitiba', 'Rua F', 579),
('Lucas Pereira', 'Indústria Moderna', '(77) 7777-7777', 'fornecedorG@example.com', 'Porto Alegre', 'Rua G', 357),
('Juliana Oliveira', 'Empresa Eficiente', '(88) 8888-8888', 'fornecedorH@example.com', 'Recife', 'Rua H', 468),
('Pedro Costa', 'Comércio Global', '(99) 9999-9999', 'fornecedorI@example.com', 'Fortaleza', 'Rua I', 246),
('Amanda Silva', 'Distribuidora Veloz', '(10) 1010-1010', 'fornecedorJ@example.com', 'Manaus', 'Rua J', 135),
('Gabriel Sousa', 'Indústria Visionária', '(20) 2020-2020', 'fornecedorK@example.com', 'Natal', 'Rua K', 357),
('Isabela Santos', 'Produtos Premium', '(30) 3030-3030', 'fornecedorL@example.com', 'Porto Velho', 'Rua L', 579),
('Marcos Lima', 'Soluções Inovadoras', '(40) 4040-4040', 'fornecedorM@example.com', 'João Pessoa', 'Rua M', 468),
('Laura Almeida', 'Distribuidora Rápida', '(50) 5050-5050', 'fornecedorN@example.com', 'Teresina', 'Rua N', 579),
('Rafael Martins', 'Empresa de Qualidade', '(60) 6060-6060', 'fornecedorO@example.com', 'Vitória', 'Rua O', 135);


-- Rodar várias vezes
INSERT INTO Compra (cod_item, valor_comp, id_forn, metodo_pagamento)
SELECT 
    i.cod_item,
    i.preco,
    f.id_forn,
    'Cartão de Crédito' AS metodo_pagamento
FROM
    (SELECT cod_item, preco FROM Item ORDER BY RANDOM() LIMIT 50) AS i
CROSS JOIN
    (SELECT id_forn FROM Fornecedor ORDER BY RANDOM() LIMIT 15) AS f
limit 15;


-- Rodar várias vezes
INSERT INTO Venda (cod_item, id_vend, cpf_cli, valor_comp, metodo_pagamento)
SELECT 
    i.cod_item,
    v.id_vend,
    c.cpf,
    i.preco,
    'Cartão de Crédito' AS metodo_pagamento
FROM
    (SELECT cod_item, preco FROM Item ORDER BY RANDOM() LIMIT 50) AS i
CROSS JOIN
    (SELECT id_vend FROM Vendedor ORDER BY RANDOM() LIMIT 15) AS v
CROSS JOIN
    (SELECT cpf FROM Cliente ORDER BY RANDOM() LIMIT 15) AS c
	limit 15;