import React from "react";
import { withTranslation } from "react-google-multi-lang";

const MyComponent = () => (
    <div>
        <h1>Hello, World!</h1>
        <p>ini bisa berubah bahasa loh</p>
    </div>
);

export default withTranslation(MyComponent);
