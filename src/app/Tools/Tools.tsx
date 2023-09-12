"use client"; 
import React, { useState, FC, ReactElement } from "react";
import './tools.css'
// import MonacoEditor from "react-monaco-editor";
interface Props {}
import { Menu, Source, Search, Version, Extension, People, Setting } from '../Icons'

const Tools: FC<Props> = (): ReactElement => {
    const [text, setText] = useState("");

    return (
        <div className="tools-wrap">
            <div><Menu/></div>
            <div><Source/></div>
            <div><Search/></div>
            <div><Version/></div>
            <div><Extension/></div>

            <div><People/></div>
            <div><Setting/></div>
        </div>
    );
  }
  export default Tools;