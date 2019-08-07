import * as React from "react";
import classNames from "classnames";
import "./HelloWorld.scss";

export interface UIHelloWorldProps {
    className?: string;
}

const HelloWorld: React.FC<UIHelloWorldProps> = ({ className }: UIHelloWorldProps) => (
    <div className={classNames("ui-hello-world", className)}>Hello, world!</div>
);

export default HelloWorld;