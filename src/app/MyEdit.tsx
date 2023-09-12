"use client"; 
import React, { useState, FC, ReactElement } from "react";
import MonacoEditor from "react-monaco-editor";
interface Props {}
const MyEdit: FC<Props> = (): ReactElement => {
  const [text, setText] = useState("");
  function onChangeHandle(value: any) {
     setText(value);
  }
  return (
    <MonacoEditor
        width="100%"
        height='100vh'
        language="typescript"
        theme="vs-dark"
        value={text}
        onChange={onChangeHandle}
        options={{
            selectOnLineNumbers: true,
            matchBrackets: "near",
            minimap: { 
                enabled: true,
            },
            cursorStyle: 'line', // 光标样式
            automaticLayout: false, // 自动布局
            fontSize: 14, // 字体大小
            tabSize: 2, // tab缩进长度
            autoIndent: "full", // 自动布局
        }}
    />
  );
}
export default MyEdit;
