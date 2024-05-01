CREATE TABLE IF NOT EXISTS Cliente
(
	cpf varchar(20) NOT NULL,
	nome_cli varchar(40) NOT NULL,
	estado varchar(25),
	rua varchar(70),
	numero_casa integer,
	CONSTRAINT cpf_pk PRIMARY KEY (cpf)
);
CREATE TABLE IF NOT EXISTS Vendedor
(
	id_vend SERIAL NOT NULL,
	nome_vend varchar(40) NOT NULL,
	salario integer NOT NULL,
	estado varchar(25),
	rua varchar(70),
	numero_casa integer,
	telefone VARCHAR(20),
    email VARCHAR(100),
	CONSTRAINT id_vend_pk PRIMARY KEY (id_vend)
);
CREATE TABLE IF NOT EXISTS Item
(
	cod_item SERIAL NOT NULL,
	nome_item varchar(40) NOT NULL,
	preco integer NOT NULL,
	em_estoque integer NOT NULL,
	CONSTRAINT cod_item_pk PRIMARY KEY (cod_item)
);
CREATE TABLE IF NOT EXISTS Fornecedor
(
	id_forn SERIAL NOT NULL,
	nome_forn varchar(100) NOT NULL,	
	nome_empresa varchar(100),	
	telefone varchar(20),	
	email varchar(100),
	estado varchar(25),
	rua varchar(70),
	numero_casa integer,
	CONSTRAINT id_forn_pk PRIMARY KEY (id_forn)
);
CREATE TABLE IF NOT EXISTS Compra
(
	cod_comp SERIAL,
	cod_item INTEGER,
	valor_comp INTEGER,
	metodo_pagamento VARCHAR(50),
	id_forn INTEGER,
	date_comp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT full_pk PRIMARY KEY (cod_comp),
	CONSTRAINT cod_item_fk FOREIGN KEY (cod_item)
	REFERENCES Item (cod_item),
	CONSTRAINT id_forn_fk FOREIGN KEY (id_forn)
	REFERENCES Fornecedor (id_forn)
);
CREATE TABLE IF NOT EXISTS Venda
(
	cod_vend SERIAL,
	cod_item INTEGER,
	id_vend INTEGER,
	cpf_cli VARCHAR(20),
	valor_comp INTEGER,
	metodo_pagamento VARCHAR(50),
	date_vend TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT cod_vend_pk PRIMARY KEY (cod_vend),
	CONSTRAINT cod_item_fk FOREIGN KEY (cod_item)
	REFERENCES Item (cod_item),
	CONSTRAINT id_vend_fk FOREIGN KEY (id_vend)
	REFERENCES Vendedor (id_vend),
	CONSTRAINT cpf_cli_fk FOREIGN KEY (cpf_cli)
	REFERENCES Cliente (cpf)
);