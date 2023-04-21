import React, { useState } from 'react';
import { Drawer, Button, Form, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import './index.css'

const ParameterPanel = ({ options, setOptions }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleOptionChange = (key, event) => {
    setOptions({
      ...options,
      [key]: event.target.value,
    })
  }

  return (
    <>

      <Button className="setting-button" type="primary" onClick={showDrawer}>
        <SettingOutlined />
      </Button>
      <Drawer
        title="参数面板"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: '20px' }}
      >
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.Item
            label="Color"
          >
            <Input type="color" value={options.color} onChange={(event) => handleOptionChange('color', event)} />
          </Form.Item>

          <Form.Item
            label="X"
          >
            <Input type="number" step={0.1} value={options.x} onChange={(event) => handleOptionChange('x', event)} />
          </Form.Item>
          <Form.Item
            label="Y"
          >
            <Input type="number" step={0.1} value={options.y} onChange={(event) => handleOptionChange('y', event)} />
          </Form.Item>
          <Form.Item
            label="Z"
          >
            <Input type="number" step={0.1} value={options.z} onChange={(event) => handleOptionChange('z', event)} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default ParameterPanel;
