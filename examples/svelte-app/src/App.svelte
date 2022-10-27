<script lang="ts">
  import { request } from "tauri-plugin-reqwest-api";

  let response = "";

  function updateResponse(returnValue) {
    console.log(returnValue);
    response +=
      `[${new Date().toLocaleTimeString()}]` +
      (typeof returnValue === "string"
        ? returnValue
        : JSON.stringify(returnValue)) +
      "<br>";
  }

  function _execute() {
    request("https://api.apihubs.cn/holiday/get?cn=1&size=31")
      .then(updateResponse)
      .catch(updateResponse);
  }
</script>

<div>
  <button on:click={_execute}>Execute</button>
  <div>{@html response}</div>
</div>
