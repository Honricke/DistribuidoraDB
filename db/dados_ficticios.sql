INSERT INTO Cliente (cpf, nome_cli, estado, rua, numero_casa) VALUES
('11122233344', 'Ana Souza', 'SP', 'Rua D', 456),
('55566677788', 'José Lima', 'RJ', 'Rua E', 789),
('99988877766', 'Amanda Costa', 'MG', 'Rua F', 101),
('33322211100', 'Marcos Oliveira', 'SP', 'Rua G', 1213),
('77788899900', 'Laura Santos', 'RJ', 'Rua H', 1415),
('66655544433', 'Roberto Pereira', 'MG', 'Rua I', 1617),
('44433322211', 'Carla Fernandes', 'SP', 'Rua J', 1819),
('88899977766', 'Fernando Silva', 'RJ', 'Rua K', 2021),
('22211133344', 'Mariana Almeida', 'MG', 'Rua L', 2223),
('12345678999', 'Lucas Martins', 'SP', 'Rua M', 2425);

INSERT INTO Vendedor (nome_vend, salario, estado, rua, numero_casa) VALUES
('Aline Ferreira', 2800, 'SP', 'Avenida L', 2627),
('Bruno Costa', 2700, 'RJ', 'Avenida M', 2829),
('Camila Oliveira', 2600, 'MG', 'Avenida N', 3031),
('Daniel Santos', 2900, 'SP', 'Avenida O', 3233),
('Erika Lima', 3100, 'RJ', 'Avenida P', 3435),
('Felipe Pereira', 3200, 'MG', 'Avenida Q', 3637),
('Gabriela Fernandes', 3300, 'SP', 'Avenida R', 3839),
('Henrique Silva', 3400, 'RJ', 'Avenida S', 4041),
('Isabela Almeida', 3500, 'MG', 'Avenida T', 4243),
('Juliana Martins', 3600, 'SP', 'Avenida U', 4445);

-- Mais dados de inserção para a tabela Item
INSERT INTO Item (nome_item, preco, em_estoque) VALUES
('Mouse', 50, 50),
('Teclado', 80, 40),
('Monitor', 300, 30),
('Impressora', 200, 20),
('Câmera', 150, 25),
('Caixa de Som', 100, 35),
('Roteador', 120, 45),
('HD Externo', 180, 15),
('Pen Drive', 20, 60),
('Webcam', 70, 55);

-- Mais dados de inserção para a tabela Fornecedor
INSERT INTO Fornecedor (nome_forn, salario, estado) VALUES
('Fornecedor D', 4000, 'SP'),
('Fornecedor E', 3800, 'RJ'),
('Fornecedor F', 3700, 'MG'),
('Fornecedor G', 4200, 'SP'),
('Fornecedor H', 4100, 'RJ'),
('Fornecedor I', 3900, 'MG'),
('Fornecedor J', 4300, 'SP'),
('Fornecedor K', 4400, 'RJ'),
('Fornecedor L', 4500, 'MG'),
('Fornecedor M', 4600, 'SP');

-- Mais dados de inserção para a tabela Compra
INSERT INTO Compra (cod_item, id_forn, date_comp) VALUES
(4, 4, CURRENT_TIMESTAMP),
(5, 5, CURRENT_TIMESTAMP),
(6, 6, CURRENT_TIMESTAMP),
(7, 7, CURRENT_TIMESTAMP),
(8, 8, CURRENT_TIMESTAMP),
(9, 9, CURRENT_TIMESTAMP),
(10, 10, CURRENT_TIMESTAMP),
(1, 1, CURRENT_TIMESTAMP),
(2, 2, CURRENT_TIMESTAMP),
(3, 3, CURRENT_TIMESTAMP);

-- Mais dados de inserção para a tabela Venda com variação nos valores de id_vend e permitindo repetições
INSERT INTO Venda (cod_item, id_vend, cpf_cli, date_vend) VALUES
(31, 31, '11122233344', CURRENT_TIMESTAMP),
(32, 32, '55566677788', CURRENT_TIMESTAMP),
(33, 33, '99988877766', CURRENT_TIMESTAMP),
(34, 31, '33322211100', CURRENT_TIMESTAMP),
(35, 32, '77788899900', CURRENT_TIMESTAMP),
(36, 33, '66655544433', CURRENT_TIMESTAMP),
(37, 31, '44433322211', CURRENT_TIMESTAMP),
(38, 32, '88899977766', CURRENT_TIMESTAMP),
(39, 33, '22211133344', CURRENT_TIMESTAMP),
(40, 31, '12345678999', CURRENT_TIMESTAMP);