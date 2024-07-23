{
    key: 'action',
    render: (_, record) => (
        <Space size="middle">
            <Button onClick={() => handleManage(record)}>Manage</Button>
        </Space>
    ),
},