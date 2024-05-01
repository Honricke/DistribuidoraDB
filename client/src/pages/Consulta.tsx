import { Select, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState, useCallback } from "react";
import api from "../request";
import "../styles/consultas.css";

enum TypeTable {
  p = "Produtos",
  v = "Vendedor",
  ve = "Venda",
  f = "Fornecedor",
  c = "Compra",
  cli = "Cliente",
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
    {
      title: "QTD Vendida",
      dataIndex: "quantidade_vendida",
      key: "quantidade_vendida",
      width: "10%",
    },
  ],
  [TypeTable.c]: [
    {
      title: "Fornecedor",
      dataIndex: "nome_forn",
      key: "nome_forn",
      width: "50%"
    },
    {
      title: "Item",
      dataIndex: "nome_item",
      key: "nome_item",
      width: "25%"
    },
    {
      title: "Data",
      dataIndex: "date_comp",
      key: "date_comp",
      render: (text) => stampToStr(text),
    },
  ],
  [TypeTable.f]: [
    { title: "Nome", dataIndex: "nome_forn", key: "nome_forn" },
    { title: "Salário", dataIndex: "salario", key: "salario" },
    { title: "Estado", dataIndex: "estado", key: "estado" },
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
  [TypeTable.cli]: [
    { title: "CPF", dataIndex: "cpf", key: "cpf" },
    {
      title: "Endereço",
      key: "numero_casa",
      render: (text, record) =>
        formatEndereco(record.numero_casa, record.rua, record.estado),
    },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
};

const toBRL = (number: number) =>
  number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

const stampToStr = (text: string) => {
  const date = new Date(text);
  const formatDate = date.toLocaleString();
  return `${formatDate.slice(0, 10)}`;
};

const formatEndereco = (nmr: string, rua: string, estado: string) => {
  return `${estado} | ${rua}, ${nmr}`;
};

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
              {
                label: "Todas Compras",
                value: "/get-compra",
                title: TypeTable.c,
              },
              {
                label: "10 Mais Comprados",
                value: "/C10Vend C",
                title: TypeTable.c,
              },
              {
                label: "Comprados Todos Meses",
                value: "/CVendMeses C",
                title: TypeTable.c,
              },
            ],
          },
          {
            title: "Vendas'",
            label: "Vendas",
            options: [
              { label: "Todos", value: "/get-venda", title: TypeTable.ve },
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
              { label: "Todos", value: "/get-vendedor", title: TypeTable.v },
              {
                label: "10 Mais Vendas",
                value: "/V10Vend",
                title: TypeTable.v,
              },
              {
                label: "Venderam Todos Meses",
                value: "/VVendMeses",
                title: TypeTable.v,
              },
            ],
          },
          {
            title: "Fornecedores'",
            label: "Fornecedores",
            options: [
              { label: "Todos", value: "/get-fornecedor", title: TypeTable.f },
              {
                label: "10 Mais Vendas",
                value: "/F10Vend",
                title: TypeTable.f,
              },
              {
                label: "Venderam Todos Meses",
                value: "/FVendMeses",
                title: TypeTable.f,
              },
            ],
          },
          {
            title: "Cliente'",
            label: "Cliente",
            options: [
              { label: "Todos", value: "/get-cliente", title: TypeTable.cli },
              {
                label: "10 Mais Compraram",
                value: "/cliente2",
                title: TypeTable.cli,
              },
              {
                label: "Compraram Todos Meses",
                value: "/cliente3",
                title: TypeTable.cli,
              },
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
