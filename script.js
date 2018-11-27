import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1000,
  duration: "60s",
  rps: 1000
};

export default function() {
  let res = http.get(`http://localhost:3000/projects/9000000/`);
  sleep(1);
};
