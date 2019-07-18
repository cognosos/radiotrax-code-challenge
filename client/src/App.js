import React from "react";
import "./App.css";
import { Login } from "./screens/Login";
import { Devices } from "./screens/Devices";

const url = "http://localhost:3000/devices";

const devices = [
  {
    id: 1,
    device_id: 2000002001,
    firmware_version: "v0.0.0.52",
    date_device_available: "2017-05-03T14:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002001",
    battery_level: 0.0,
    internal_temperature: 35.0,
    status: 10
  },
  {
    id: 2,
    device_id: 2000002002,
    firmware_version: "v0.0.0.52",
    date_device_available: "2017-05-13T14:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002002",
    battery_level: 80.0,
    internal_temperature: 45.0,
    status: 10
  },
  {
    id: 3,
    device_id: 2000002003,
    firmware_version: "v0.0.1.52",
    date_device_available: "2018-05-03T11:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002003",
    battery_level: 30.0,
    internal_temperature: 55.0,
    status: 10
  },
  {
    id: 4,
    device_id: 2000002004,
    firmware_version: "v0.0.1.52",
    date_device_available: "2019-06-03T12:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002004",
    battery_level: 20.0,
    internal_temperature: 65.0,
    status: 10
  },
  {
    id: 5,
    device_id: 2000002005,
    firmware_version: "v0.0.1.52",
    date_device_available: "2018-06-05T04:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002005",
    battery_level: 67.0,
    internal_temperature: 75.0,
    status: 10
  },
  {
    id: 6,
    device_id: 2000002006,
    firmware_version: "v0.0.0.52",
    date_device_available: "2019-05-04T14:27:40Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002006",
    battery_level: 61.0,
    internal_temperature: 35.0,
    status: 10
  },
  {
    id: 7,
    device_id: 2000002007,
    firmware_version: "v0.0.0.52",
    date_device_available: "2018-05-03T14:07:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002007",
    battery_level: 14.0,
    internal_temperature: 25.0,
    status: 10
  },
  {
    id: 8,
    device_id: 2000002008,
    firmware_version: "v0.0.0.52",
    date_device_available: "2017-05-03T04:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002008",
    battery_level: 91.0,
    internal_temperature: 35.0,
    status: 10
  },
  {
    id: 9,
    device_id: 2000002009,
    firmware_version: "v0.0.0.52",
    date_device_available: "2017-05-23T12:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002009",
    battery_level: 1.0,
    internal_temperature: 35.0,
    status: 10
  },
  {
    id: 10,
    device_id: 2000002010,
    firmware_version: "v0.0.0.52",
    date_device_available: "2019-05-03T14:27:30Z",
    manufacturer: "cognosos",
    application_code: "AAA",
    asset_identifier: "test-2000002010",
    battery_level: 100.0,
    internal_temperature: 35.0,
    status: 10
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Login url={url} />
        <Devices devices={devices} />
      </div>
    );
  }
}

export default App;
