import { AxiosInstance } from "axios";
import { initiateAxios } from "./utils";

export default class ValorantAPI {
  private readonly axios: AxiosInstance;

  constructor(props: ValorantAPIProps) {
    this.axios = initiateAxios(props.apiKey);
  }

  // ...
}