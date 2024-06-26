from pydantic import BaseModel


class ItemType(BaseModel):
    id: int
    name: str
    price: int
    qtd: int


class InsertType(BaseModel):
    id: int
    name: str
    price: int
    qtd: int

class Cliente(BaseModel):
     cpf: int
     name: str
     estado: str
     cidade: str
     rua: str
     numero_casa: int
     is_Flamengo: bool
     see_op: bool
    
class Fornecedor(BaseModel):
    id_forn: int
    nome_forn: str
    salario: int
    estado: str
    
class Vendedor(BaseModel):
    id_vend: int
    nome_vendedor: str
    salario: int
    estado: str
    cidade: str
    rua: str
    num_casa: int

class Venda(BaseModel):
    cod_vendedor:int 
    cod_item:int 
    cpf_cliente:int 
    qtd_item:int 
    tipo_pagamento:int

class Mes(BaseModel):
    mesAtual: str

class Tipos(BaseModel):
    nomeItem: str
    minPreco: int
    maxPreco: int

