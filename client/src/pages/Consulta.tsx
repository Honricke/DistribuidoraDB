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
      title: "Cód Compra",
      dataIndex: "cod_comp",
      key: "cod_comp",
    },
    {
      title: "Fornecedor",
      dataIndex: "nome_forn",
      key: "nome_forn",
    },
    {
      title: "Item",
      dataIndex: "nome_item",
      key: "nome_item",
    },
    {
      title: "Estoque",
      dataIndex: "em_estoque",
      key: "em_estoque",
    },
    {
      title: "Endereço",
      dataIndex: "numero_cara",
      key: "numero_cara",
      render: (text, record) =>
        formatEndereco(record.numero_casa, record.rua, record.estado),
    },
    {
      title: "Método Pagamento",
      dataIndex: "metodo_pagamento",
      key: "metodo_pagamento",
    },
    {
      title: "Preço",
      dataIndex: "preco",
      key: "preco",
      render: (text) => toBRL(text),
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
    { title: "Cód Venda", dataIndex: "cod_vend", key: "cod_vend" },
    {
      title: "Data Venda",
      dataIndex: "date_vend",
      key: "date_vend",
      render: (text) => stampToStr(text),
    },
    {
      title: "Método Pagamento",
      dataIndex: "metodo_pagamento",
      key: "metodo_pagamento",
    },
    { title: "Nome Vendedor", dataIndex: "nome_vend", key: "nome_vend" },
    { title: "Nome Item", dataIndex: "nome_item", key: "nome_item" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Valor",
      dataIndex: "valor_comp",
      key: "valor_comp",
      render: (text) => toBRL(text),
    },
    {
      title: "Endereço",
      dataIndex: "numero_casa",
      key: "numero_casa",
      render: (text, record) =>
        formatEndereco(record.numero_casa, record.rua, record.estado),
    },
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
  const [mesAtual, setMesAtual] = useState("0");

  const getTableData = useCallback(
    //@ts-ignore
    async (value: string, options) => {
      try {
        let res;
        console.log(mesAtual)
        if (["/get-venda-mes"].includes(value)) {
          res = await api.post(value, {
            mesAtual: mesAtual,
          });
        } else {
          res = await api.get(value);
        }
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
            ],
          },
          {
            title: "Vendas'",
            label: "Vendas",
            options: [
              { label: "Todos", value: "/get-venda", title: TypeTable.ve },
              {
                label: "Vendas do Mês",
                value: "/get-venda-mes",
                title: TypeTable.ve,
              },
            ],
          },
          {
            title: "Vendedores'",
            label: "Vendedores",
            options: [
              { label: "Todos", value: "/get-vendedor", title: TypeTable.v },
            ],
          },
          {
            title: "Fornecedores'",
            label: "Fornecedores",
            options: [
              { label: "Todos", value: "/get-fornecedor", title: TypeTable.f },
            ],
          },
          {
            title: "Cliente'",
            label: "Cliente",
            options: [
              { label: "Todos", value: "/get-cliente", title: TypeTable.cli },
            ],
          },
        ]}
      ></Select>

      <Select
        style={{ width: "150px" }}
        defaultValue={"Selecione o Mês"}
        onChange={(value) => setMesAtual(value)}
        options={[
          {label: 'Janeiro', value: '1'},
          {label: 'Fervereiro', value: '2'},
          {label: 'Março', value: '3'},
          {label: 'Abril', value: '4'},
          {label: 'Maio', value: '5'},
          {label: 'Junho', value: '6'},
          {label: 'Julho', value: '7'},
          {label: 'Agosto', value: '8'},
          {label: 'Setembro', value: '9'},
          {label: 'Outubro', value: '10'},
          {label: 'Novembro', value: '11'},
          {label: 'Dezembro', value: '12'},
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
