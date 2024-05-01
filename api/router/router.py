from fastapi import APIRouter
from type.types import *
import sql.operations as op


router = APIRouter()

## Rotas - Item
@router.get("/get-items")
def get_itens():
    return op.get_items()

@router.get("/get-vendedor")
def get_vendedor():
    return op.get_vendedor()

@router.get("/get-fornecedor")
def get_fornecedor():
    return op.get_fornecedor()

@router.get("/get-venda")
def get_venda():
    return op.get_venda()

@router.get("/get-compra")
def get_compra():
    return op.get_compra()

@router.get("/get-cliente")
def get_cliente():
    return op.get_cliente()


@router.post("/insert-name", response_model=ItemType)
def insert_name(req: InsertType):
    return op.insert_item(req)


@router.put("/remove-name", response_model=ItemType)
def remove_item(req: ItemType):
    return op.remove_item(req)


@router.put("/update-name", response_model=ItemType)
def update_name(req: ItemType):
    return op.update_name(req)


@router.post("/update_estoque",response_model=ItemType)
def update_estoque(req: ItemType):
    return op.update_estoque(req)

@router.post("/update_price",response_model=ItemType)
def update_price(req: ItemType):
    return op.update_price(req)

@router.get("/mais-vendidos")
def mais_vendidos():
    return op.mais_vendidos()    


# Rotas- cliente
@router.put("/cadastro_cliente",response_model= Cliente)
def cadastro_cliente(req: Cliente):
    return op.cadastro_cliente()

@router.post("/update_cliente_cpf",response_model= Cliente)
def update_cliente_cpf(req: Cliente):
    return op.update_cliente_cpf()

@router.post("/update_cliente",response_model= Cliente)
def update_cliente(rep: Cliente):
    return op.update_cliente()



## rotas - forncedor
@router.post("/insert_fornecedor",response_model = Fornecedor)
def insert_fornecedor(req: Fornecedor):
    return op.insert_fornecedor(req)

@router.post("/update_fornecedor",response_model = Fornecedor)
def update_fornecedor(req: Fornecedor):
    return op.update_fornecedor(req)


## Rotas - vendedor
@router.post("/insert_vendedor", response_model= Vendedor)
def insert_fornecedor(req: Vendedor):
    return op.insert_vendedor(req)

@router.post("/upadate_vendedor", response_model= Vendedor)
def update_vendedor(req: Vendedor):
    return op.update_vendedor(req)


##Rotas - venda

@router.post("/insert_venda",response_model= Venda)
def insert_venda(req: Venda):
    return op.insert_venda(req)


##Rota - especifica

@router.get("/relatorio")
def relatorio(req1:str,req2:str):
    return op.relatorio(req1,req2)

@router.get("/poucos_itens")
def poucos_itens():
    return op.poucos_itens()

@router.get("/faixa_preco")
def faixa_preco(req1:int,req2:int):
    return op.faixa_preco(req1,req2)


@router.get("/pesquisa_completa")
def pesquisa_completa(req:str,re2:int,req3:int):
    return op.pesquisa_completa(req,re2,req3)