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
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Preco", dataIndex: "preco", key: "preco" },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
  [TypeTable.c]: [
    { title: "Código", dataIndex: "cod_compra", key: "cod_compra" },
    { title: "Fornecedor", dataIndex: "forncedo_comprar", key: "forncedor_compra" },
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
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Preco", dataIndex: "preco", key: "preco" },
    { title: "Estoque", dataIndex: "estoque", key: "estoque" },
  ],
};

const Consulta = () => {
  const [tableData, setTableData] = useState([]);
  const [tableType, setTableType] = useState<TypeTable>(TypeTable.p);

  const getTableData = useCallback(
    //@ts-ignore
    async (value: string, options) => {
      const res = await api.get(value);
      setTableType(options.title);
      setTableData(res.data.content);
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
                value: "/Ptodos P",
                title: "produtos",
              },
              {
                label: "10 Mais Vendidos",
                value: "/P10Vend P",
                title: "produtos",
              },
              {
                label: "Vendidos Todos Meses",
                value: "/PVendMeses P",
                title: "produtos",
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
              { label: "Todos", value: "/Vetodos Ve" },
              { label: "10 Mais Vendidos", value: "/Ve10Vend Ve" },
              { label: "Vendidos Todos Meses", value: "/VeVendMeses Ve" },
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
      />
    </>
  );
};

export default Consulta;
