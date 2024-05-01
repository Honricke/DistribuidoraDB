from .connection import operator, connection
from type.types import ItemType, InsertType
import json
from timeit import default_timer as timer
from datetime import datetime, timezone


def get_items():
    sql_code = "SELECT * FROM item"
    operator.execute(sql_code)
    return operator.fetchall()


def get_vendedor():
    sql_code = "SELECT * FROM vendedor"
    operator.execute(sql_code)
    return operator.fetchall()


def get_fornecedor():
    sql_code = "SELECT * FROM fornecedor"
    operator.execute(sql_code)
    return operator.fetchall()

def get_cliente():
    sql_code = "SELECT * FROM cliente"
    operator.execute(sql_code)
    return operator.fetchall()


def get_venda():
    sql_code = "SELECT * FROM venda"
    operator.execute(sql_code)
    return operator.fetchall()


def get_compra():
    sql_code = """
    select c.date_comp, i.nome_item, f.nome_forn
    from compra as c
    join item as i on i.cod_item = c.cod_item
    join fornecedor as f on f.id_forn = c.id_forn"""
    operator.execute(sql_code)
    return operator.fetchall()


# query itens:
def insert_item(item: InsertType):
    sql_code = "INSERT INTO item (nome_item, preco, em_estoque) VALUES (%s, %s, %s) RETURNING cod_item"
    operator.execute(sql_code, (item.name, item.price, item.qtd))
    new_id = operator.fetchone()["cod_item"]
    connection.commit()
    return {"id": new_id, "name": item.name, "price": item.price, "quantity": item.qtd}


def remove_item(item_id: int):
    sql_code = "UPDATE item SET em_estoque = 0 WHERE cod_item = %s"
    operator.execute(sql_code, (item_id))
    connection.commit()
    return {"id": item_id}


def update_name(item_id: int, new_name: str):
    sql_code = "UPDATE item SET nome_item = %s WHERE id = %s "
    operator.execute(sql_code, (new_name, item_id))
    connection.commit()
    return {"id": item_id, "name": new_name}


def update_estoque(item_id: int, new_quantity: int):
    sql_code = "UPDATE item SET em_estoque = %s WHERE id = %s"
    operator.execute(sql_code, (new_quantity, item_id))
    connection.commit()
    return {"id": item_id, "em estoque": new_quantity}


def update_price(item_id: int, new_price: int):
    sql_code = "UPDATE item SET preco = %s WHERE cod_item = %s"
    operator.execute(sql_code, (new_price, item_id))
    connection.commit()
    return {"cod_item": item_id, "price": new_price}


def mais_vendidos():
    sql_code = """
    SELECT i.nome_item, COUNT(v.cod_item) AS quantidade_vendida, i.preco, i.em_estoque
    FROM venda v
    JOIN item i ON v.cod_item = i.cod_item
    GROUP BY i.nome_item, i.preco, i.em_estoque
    ORDER BY quantidade_vendida DESC
    LIMIT 10;"""
    operator.execute(sql_code)
    connection.commit()
    return operator.fetchall()


# query-cliente
def cadastro_cliente(
    cpf: int,
    nome_cli: str,
    estado: str,
    cidade: str,
    rua: str,
    numero_casa: int,
    is_flamengo: bool,
    see_op: bool,
):
    sql_code = "INSERT INTO cliente (cpf,nome_cli,rua,numero_casa,is_Flamengo,see_op,cidade) VALUES %s %s %s %s %s %s %s %s"
    operator.execute(
        sql_code, (cpf, nome_cli, estado, rua, numero_casa, is_flamengo, see_op, cidade)
    )
    connection.commit()


def update_cliente_cpf(old_cpf: int, new_cpf: int, nome_cli: str):
    sql_code = "UPDATE cliente SET cpf= %s WHERE cpf = %s AND nome_cli = %s"
    operator.execute(sql_code, (new_cpf, old_cpf, nome_cli))
    connection.commit()


def update_cliente(
    cpf: int,
    nome_cli: str,
    estado: str,
    cidade: str,
    rua: str,
    numero_casa: int,
    is_flamengo: bool,
    see_op: bool,
):
    sql_code = """UPDATE cliente SET nome_cli = %s,
                  estado = %s,
                  rua = %s,
                  numero_casa = %s,
                  is_Flamengo = %s,
                  seer_op = %s,
                  cidade = %s
                  WHERE cpf = %s"""
    operator.execute(
        sql_code, (nome_cli, estado, rua, numero_casa, is_flamengo, see_op, cidade, cpf)
    )
    connection.commit()


# query-fornecedor


def insert_fornecedor(nome_fornecedor: str, salario: int, estado: str):
    sql_code = "INSERT INTO forncedor (nome_forn,salario,estado) VALUES (%s,%s,%s) RETURNING id_forn"
    operator.execute(sql_code, (nome_fornecedor, salario, estado))
    new_id = operator.fetchone()["id+forn"]
    connection.commit()
    return {
        "id_forn": new_id,
        "nome_forn": nome_fornecedor,
        "salario": salario,
        "estado": estado,
    }


def update_fornecedor(id_forn: int, nome_forn: str, salario: int, estado: str):
    sql_code = "UPDATE fornecedor SET nome_forn = %s, salario = %s, estado = %s WHERE id_forn = %s"
    operator.execute(sql_code, (nome_forn, salario, estado, id_forn))
    connection.commit()
    return {"id_forn": id_forn, "nome_forn": nome_forn}


# query-vendedor


def insert_vendedor(
    nome_vendedor: str, salario: int, estado: str, cidade: str, rua: str, num_casa: int
):
    sql_code = "INSERT INTO vendedor (nome_vendedor,salario,estado,rua,num_casa,cidade) VALUES (%s, %s,%s,%s,%s,%s)"
    operator.execute(sql_code, (nome_vendedor, salario, estado, rua, num_casa, cidade))
    new_id = operator.fetchone()["id_vend"]
    connection.commit()
    return {
        "id_vend": new_id,
        "nome_vend": nome_vendedor,
        "salario": salario,
        "estado": estado,
        "cidade": cidade,
        "rua": rua,
        "num_casa": num_casa,
    }


def update_vendedor(
    id_vendedor: int,
    nome_vendedor: str,
    salario: int,
    estado: str,
    cidade: str,
    rua: str,
    num_casa: int,
):
    sql_code = """UPDATE vendedor SET nome_vendedor = %s,
                  salario = %s,
                  estado = %s,
                  rua = %s,
                  numero_casa = %s,
                  cidade = %s,
                  WHERE id_vend = %s"""
    operator.execute(
        sql_code, (nome_vendedor, salario, estado, rua, num_casa, cidade, id_vendedor)
    )
    connection.commit()

#query - vendas

def insert_venda(id_vendedor:int, cod_item:int, cpf_cliente:int, qtd_item:int, tipo_pagamento:int):
    sql_code = '''INSERT INTO venda (cod_item, cpf_cli,id_vend,data_vend, tipo_pagamento, qtd_item, preco_final) 
    VALUES (%s,%s,%s,%s,%s) 
    SELECT
        @id_vendedor,
        @id_item,
        cliente.cpf_cliente,
        @data_venda,
        @tipo_pagamento,
        @qtd_item,
        CASE
            WHEN cliente.is_Flamengo = TRUE OR cliente.see_op = TRUE OR cliente.endereco LIKE '%Souza%' THEN item.preco * @qtd_item * 0.9
            ELSE item.preco * @qtd_item
        END AS preco_final
    FROM
        cliente
    JOIN
        item ON item.id_item = @id_item
    WHERE
        cliente.cpf_cliente = @cpf_cliente
        AND item.em_estoque >= @qtd_item;
        '''
    operator.execute(sql_code,(cod_item,cpf_cliente,id_vendedor,qtd_item,datetime.now(),tipo_pagamento,qtd_item))
    new_id= operator.fetchone()['cod_vend']
    connection.commit()
    return {"cod_vend":new_id,"cpf_cliente":cpf_cliente,"id_vendedor":id_vendedor,"cod_item":cod_item,"qtd_item":qtd_item,"tipo_pagamento":tipo_pagamento}

    
