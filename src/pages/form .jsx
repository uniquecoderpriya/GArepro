import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Radio, Select } from 'antd';
import '../style/form.scss';

const { TextArea } = Input;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddStudentForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  const onReset = () => {
    
    form.resetFields();
  };

  const [form] = Form.useForm();

  return (
    <>
     
    <div className="add-student-form">
      
    
      <Form
        {...layout}
        form={form}
        name="student-form"
        onFinish={onFinish}
       
        validateMessages={validateMessages}
        disabled={componentDisabled}
        className='from-wid'
        
      >
      <h2 className='title'>Add Student</h2>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Enter student name" />
        </Form.Item>

        <Form.Item
          name="age"
          label="Age"
          rules={[{ required: true, message: 'Please input the age!' }, { type: 'number', min: 0, message: 'Age must be at least 0' }]}
        >
          <InputNumber min={0} placeholder="Enter age" />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select your gender!' }]}
        >
          <Radio.Group>
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="other"> Other </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please input the address!' }]}
          className="address-field"
        >
          <TextArea rows={4} placeholder="Enter address" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input type="email" placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { pattern: /^[0-9]*$/, message: 'Please enter a valid phone number!' }
          ]}
        >
          <Input type="tel" placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item
          name="courses"
          label="Courses"
          rules={[{ required: true, message: 'Please select a course!' }]}
        >
          <Select placeholder="Select a course">
            <Select.Option value="mathematics">Mathematics</Select.Option>
            <Select.Option value="physics">Physics</Select.Option>
            <Select.Option value="chemistry">Chemistry</Select.Option>
            <Select.Option value="computer-science">Computer Science</Select.Option>
            <Select.Option value="history">History</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="gpa"
          label="GPA"
          rules={[
            { required: true, message: 'Please input the GPA!' },
            { type: 'number', min: 0, max: 4.0, message: 'GPA must be between 0 and 4.0' }
          ]}
        >
          <InputNumber 
            min={0} 
            max={4.0} 
            step={0.1} 
            formatter={(value) => `${value} / 4.0`} 
            parser={(value) => value.replace(' / 4.0', '')} 
            placeholder="Enter GPA"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 8,
        
          }}
        >
          <Button type="primary" htmlType="submit" className='sub'>Submit</Button>
          <Button type="default" onClick={onReset} className='sub'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};

export default AddStudentForm;
