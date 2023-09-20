import * as React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="link1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://math-assessement-project.vercel.app/"
        >
          Math-assesement
        </a>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://react-weather-app-blush-six.vercel.app/"
        >
          React Weather App
          {/* (disabled) */}
        </a>
      </div>
    ),
    icon: <SmileOutlined />,
    disabled: false,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://arjun-mavai.github.io/Responsive-Portfolio/"
      >
        My Portfolio
        {/* (disabled) */}
      </a>
    ),
    disabled: false,
  },
  // {
  //   key: "4",
  //   danger: true,
  //   label: "a danger item",
  // },
];

const Drops = () => {
  return (
    <div className="drop">
      <Dropdown menu={{ items }} className="bxDrop font-bold text-lg">
        <a onClick={(e) => e.preventDefault()}>
          <Space className=" bg-gradient-to-r from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent text-bold text-lg shadow-lg text font-extrabold">
            Check out My Projects
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Drops;
