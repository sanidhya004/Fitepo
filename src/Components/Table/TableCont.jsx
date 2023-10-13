import React from 'react'
import './Table.css'
import { Space, Table, Tag } from 'antd';
import { Select} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div className="P_name">
         <div className="img"><img src="https://plus.unsplash.com/premium_photo-1689247946399-c4f532fda0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"/>
          <div className="img_content"><h3>Abstract 3D</h3><p>Lorem Ipsum has been the industry's standard dumm</p></div>
         </div>
      </div>,
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'age',
      render:(text)=><b>{text}</b>
    },
    {
      title: 'Price',
      dataIndex: 'address',
      key: 'address',
    },
  
    {
      title: 'Total Sale',
      dataIndex: 'age',
      key: 'action',
      render:(text)=> <p>{text}</p>
      
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      stock:14,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
      stock:18,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
      stock:34,
    },
  ];
const TableCont = () => {
  return (
    <div className="table_wrapper">
      <div className="table_upper">
        <h1>Product Sell</h1>
        <div className="table_right">
        <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
     
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
      <Input size="small" placeholder="Search" prefix={<SearchOutlined />}  />
        </div>
       
      </div>
        <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default TableCont