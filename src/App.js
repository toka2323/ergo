import { Spin } from 'antd';
import React, { Suspense } from 'react';
import Routers from './utils/Routers';
import 'antd/dist/antd.css';
import './App.css';
function App() {
  return (
    <Suspense fallback={
      <div className="spin">
        <Spin tip="Loading..." size="large" />
        </div> 
      }>
      <Routers />
    </Suspense>
  );
}

export default App;
