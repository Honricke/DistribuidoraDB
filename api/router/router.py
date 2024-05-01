from fastapi import APIRouter
from type.types import *
import sql.operations as op


router = APIRouter()

## Rotas - Item
@router.get("/get-items")
def get_itens():
    return op.get_items()


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
