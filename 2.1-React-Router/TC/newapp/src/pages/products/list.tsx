import React, { useEffect, useState } from 'react';
import { Table, Typography, notification, Space } from 'antd';
import {
    DeleteButton,
    EditButton,
    List,
    ShowButton,
    MarkdownField,
    DateField,
    useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";

const { Text } = Typography;

export const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<BaseRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://api.fake-rest.refine.dev/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                notification.error({ message: 'Failed to fetch products', description: error.message });
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text: string) => <MarkdownField value={text} />,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Material',
            dataIndex: 'material',
            key: 'material',
        },
        {
            title: 'Category ID',
            dataIndex: ['category', 'id'],
            key: 'category.id',
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (value: string) => <DateField value={value} />,
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record: BaseRecord) => (
                <Space>
                    <EditButton hideText size="small" recordItemId={record.id} />
                    <ShowButton hideText size="small" recordItemId={record.id} />
                    <DeleteButton hideText size="small" recordItemId={record.id} />
                </Space>
            ),
        },
    ];

    return (
        <List>
            <Table
                dataSource={products}
                columns={columns}
                loading={loading}
                rowKey="id"
                bordered
                title={() => <Text strong>Products</Text>}
            />
        </List>
    );
};

export default ProductsList;
