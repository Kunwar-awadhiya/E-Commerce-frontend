// Orders component

import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";


type DataType = {
    _id: string;
    amount: number;
    quantity: number;
    discount: number;
    status: ReactElement;
    action: ReactElement;
};

const columns : Column <DataType>[] = [
    {
        Header: "Order ID",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    }
]; 


const orders = () => {

    const [rows] = useState<DataType[]>([
        {
            _id: "adfd",
            amount: 4565,
            quantity: 23,
            discount: 5666,
            status: <span className="red">Processing</span>,
            action: <Link to={`/order/adfd`}>View,</Link>
        }
    ])

    const Table = TableHOC<DataType>(
        columns,
        rows,
        "dashboard-product-box",
        "Orders",
        rows.length > 6 
    )();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {
        Table
      }
    </div>
  );
};

export default orders;
