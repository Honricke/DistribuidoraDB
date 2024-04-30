from .connection import operator, connection
from type.types import ItemType, InsertType
import json
from timeit import default_timer as timer
from datetime import datetime, timezone



def get_itens():
    sql_code = "SELECT * FROM item"
    operator.execute(sql_code)
    response = operator.fetchall()
    names = [row['nome_item'] for row in response]
    return names

#query itens:
def insert_item(item: InsertType):
    sql_code = "INSERT INTO item (nome_item, preco, em_estoque) VALUES (%s, %s, %s) RETURNING cod_item"
    operator.execute(sql_code, (item.name, item.price, item.qtd))
    new_id = operator.fetchone()['cod_item']
    connection.commit()
    return {"id": new_id, "name": item.name,"price":item.price ,"quantity": item.qtd}


def remove_item(item_id: int):
    sql_code = "UPDATE item SET em_estoque = 0 WHERE cod_item = %s"
    operator.execute(sql_code, (datetime.now(), item_id))
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

def update_price(item_id: int,new_price: int):
    sql_code = "UPDATE item SET preco = %s WHERE cod_item = %s"
    operator.execute(sql_code,(new_price,item_id))
    connection.commit()
    return {"cod_item": item_id, "price":new_price}

def mais_vendidos():
    sql_code =  '''SELECT i.nome_item, COUNT(v.cod_item) AS quantidade_vendida
    FROM venda v
    JOIN item i ON v.cod_item = i.cod_item
    GROUP BY v.cod_item, i.nome_item
    ORDER BY quantidade_vendida DESC
    LIMIT 10;'''
    operator.execute(sql_code)
    connection.commit()
    
#query-cliente
def cadastro_cliente(cpf:int, nome_cli:str, estado:str, cidade:str, rua:str, numero_casa:int, is_flamengo:bool, see_op:bool):
    sql_code = "INSERT INTO cliente (cpf,nome_cli,rua,numero_casa,is_Flamengo,see_op,cidade) VALUES %s %s %s %s %s %s %s %s"
    operator.execute(sql_code,(cpf,nome_cli,estado,rua,numero_casa,is_flamengo,see_op,cidade))
    connection.commit
    
def update_cliente_cpf(old_cpf:int, new_cpf:int, nome_cli:str):
    sql_code = "UPDATE cliente SET cpf= %s WHERE cpf = %s AND nome_cli = %s"
    operator.execute(sql_code,(new_cpf,old_cpf,nome_cli))
    connection.commit()
    
def update_cliente(cpf:int, nome_cli:str, estado:str, cidade:str, rua:str, numero_casa:int, is_flamengo:bool, see_op:bool):
    sql_code = '''UPDATE cliente SET nome_cli = %s,
                  estado = %s,
                  rua = %s,
                  numero_casa = %s,
                  is_Flamengo = %s,
                  seer_op = %s,
                  cidade = %s
                  WHERE cpf = %s'''
    operator.execute(sql_code,(nome_cli,estado,rua,numero_casa,is_flamengo,see_op,cidade,cpf))
    connection.commit()
    
# query-fornecedor

def insert_fornecedor(nome_fornecedor:str, salario: int, estado: str):
    sql_code= "INSERT INTO forncedor (%s,%s,%s) RETURNING id_forn"
    operator.execute(sql_code,(nome_fornecedor,salario,estado))
    new_id= operator.fetchone()['id+forn']
    connection.commit()
    return {"id_forn": new_id,"nome_forn": nome_fornecedor,"salario": salario, "estado": estado}


    