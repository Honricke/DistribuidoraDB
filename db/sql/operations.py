from .connection import operator, connection
from type.types import ItemType, InsertType
import json
from timeit import default_timer as timer
from datetime import datetime, timezone



def get_names():
    sql_code = "SELECT name FROM item"
    operator.execute(sql_code)
    response = operator.fetchall()
    names = [row['name'] for row in response]
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
    
# query-fornecedor

def insert_fornecedor(nome_fornecedor:str, salario: int, estado: str):
    sql_code= "INSERT INTO forncedor (%s,%s,%s) RETURNING id_forn"
    operator.execute(sql_code,(nome_fornecedor,salario,estado))
    new_id= operator.fetchone()['id+forn']
    connection.commit()
    return {"id_forn": new_id,"nome_forn": nome_fornecedor,"salario": salario, "estado": estado}


    