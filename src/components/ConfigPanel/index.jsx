import React, { useState } from 'react';
import { Drawer, Button, Form, Input, Switch } from 'antd';
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

  const handleOptionChange = (key, value) => {
    setOptions({
      ...options,
      [key]: value,
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
        open={visible}
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
            label="size"
          >
            <Input type="number" step={0.1} value={options.size} onChange={(event) => handleOptionChange('size', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="height"
          >
            <Input type="number" step={0.1} value={options.height} onChange={(event) => handleOptionChange('height', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="curveSegments"
          >
            <Input type="number" step={0.1} value={options.curveSegments} onChange={(event) => handleOptionChange('curveSegments', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="bevelEnabled"
          >
            <Switch checked={options.bevelEnabled} onChange={(event) => handleOptionChange('bevelEnabled', event)} />
          </Form.Item>
          <Form.Item
            label="bevelThickness"
          >
            <Input type="number" step={0.1} value={options.bevelThickness} onChange={(event) => handleOptionChange('bevelThickness', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="bevelSize"
          >
            <Input type="number" step={0.1} value={options.bevelSize} onChange={(event) => handleOptionChange('bevelSize', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="bevelSegments"
          >
            <Input type="number" step={0.1} value={options.bevelSegments} onChange={(event) => handleOptionChange('bevelSegments', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="Color"
          >
            <Input type="color" value={options.color} onChange={(event) => handleOptionChange('color', event.target.value)} />
          </Form.Item>

          <Form.Item
            label="X"
          >
            <Input type="number" step={0.1} value={options.x} onChange={(event) => handleOptionChange('x', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="Y"
          >
            <Input type="number" step={0.1} value={options.y} onChange={(event) => handleOptionChange('y', event.target.value)} />
          </Form.Item>
          <Form.Item
            label="Z"
          >
            <Input type="number" step={0.1} value={options.z} onChange={(event) => handleOptionChange('z', event.target.value)} />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default ParameterPanel;
