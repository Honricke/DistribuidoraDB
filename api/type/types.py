from pydantic import BaseModel


class ItemType(BaseModel):
    id: int
    name: str
    qtd: int


class InsertType(BaseModel):
    name: str
    price: int
    qtd: int

# class InsertPerson(BaseModel):
#     name: str
#     salario: int
#     estado: str
