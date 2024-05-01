import { Select, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState, useCallback } from "react";
import api from "../request";
import "../styles/consultas.css";

enum TypeTable {
  p = "Produtos",
  v = "V",
  ve = "Ve",
  f = "F",
  c = "C",
}

const columns: { [key in TypeTable]: TableColumnsType } = {
  [TypeTable.p]: [
    {
      title: "Nome",
      dataIndex: "nome_item",
      key: "nome_item",
      sorter: (a, b) => a.nome_item.localeCompare(b.nome_item),
    },
    {
      title: "Preco",
      dataIndex: "preco",
      key: "preco",
      render: (text) => toBRL(text),
    },
    {
      title: "Estoque",
      dataIndex: "em_estoque",
      key: "em_estoque",
    },
  ],
  [TypeTable.c]: [
    { title: "Código", dataIndex: "cod_compra", key: "cod_compra" },
    {
      title: "Fornecedor",
      dataIndex: "forncedo_comprar",
      key: "forncedor_compra",
    },
    { title: "Data", dataIndex: "data_compra", key: "data_compra" },
  ],
  [TypeTable.f]: [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Preco", dataIndex: "preco", key: "preco" },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
  [TypeTable.v]: [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Preco", dataIndex: "preco", key: "preco" },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
  [TypeTable.ve]: [
    { title: "Data", dataIndex: "data", key: "data" },
    { title: "Preco", dataIndex: "preco", key: "preco" },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
};

const toBRL = (number: number) =>
  number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

const Consulta = () => {
  const [tableData, setTableData] = useState([]);
  const [tableType, setTableType] = useState<TypeTable>(TypeTable.p);

  const getTableData = useCallback(
    //@ts-ignore
    async (value: string, options) => {
      try {
        const res = await api.get(value);
        console.log(res.data);
        setTableType(options.title);
        setTableData(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <>
      <Select
        style={{ width: "500px" }}
        defaultValue={"Selecione o tipo de consulta"}
        onChange={(value, options) => getTableData(value, options)}
        options={[
          {
            title: "produtos",
            label: "Produtos",
            options: [
              {
                label: "Todos",
                value: "/get-items",
                title: TypeTable.p,
              },
              {
                label: "10 Mais Vendidos",
                value: "/mais-vendidos",
                title: TypeTable.p,
              },
              {
                label: "Vendidos Todos Meses",
                value: "/PVendMeses P",
                title: TypeTable.p,
              },
            ],
          },
          {
            title: "Compras'",
            label: "Compras",
            options: [
              { label: "Todas Compras", value: "/Ctodos C" },
              { label: "10 Mais Comprados", value: "/C10Vend C" },
              { label: "Comprados Todos Meses", value: "/CVendMeses C" },
            ],
          },
          {
            title: "Vendas'",
            label: "Vendas",
            options: [
              { label: "Todos", value: "/Vetodos", title: TypeTable.ve },
              {
                label: "10 Mais Vendidos",
                value: "/teste",
                title: TypeTable.ve,
              },
              {
                label: "Vendidos Todos Meses",
                value: "/VeVendMeses",
                title: TypeTable.ve,
              },
            ],
          },
          {
            title: "Vendedores'",
            label: "Vendedores",
            options: [
              { label: "Todos", value: "/Vtodos V" },
              { label: "10 Mais Vendas", value: "/V10Vend V" },
              { label: "Venderam Todos Meses", value: "/VVendMeses V" },
            ],
          },
          {
            title: "Fornecedores'",
            label: "Fornecedores",
            options: [
              { label: "Todos", value: "/Ftodos F" },
              { label: "10 Mais Vendas", value: "/F10Vend F" },
              { label: "Venderam Todos Meses", value: "/FVendMeses F" },
            ],
          },
        ]}
      ></Select>

      <Table
        style={{ width: "100%", marginTop: 100 }}
        columns={columns[tableType]}
        dataSource={tableData}
        pagination={{ hideOnSinglePage: true }}
      />
    </>
  );
};

export default Consulta;
