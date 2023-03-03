import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { VideoProvider } from "./context/VideoProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css"; // Ensure React UI libraries are styled correctly
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig) // Configures the Amplify libraries with the cloud backend set up via the Amplify CLI


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

