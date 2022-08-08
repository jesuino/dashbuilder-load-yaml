// load the YAML files dinamically in Dashbuilder

// flag to indicate that dashbuilder is ready for content;
var ready = false;
window.addEventListener("message", (e) => {
  if (e.data === "ready") {
    ready = true;
  }
});

// Updates dashbuilder with the content (only if it is ready)
const send = (dashboardUrl) => {
    const dbFrame = document.getElementById("db");
    if (ready) {
        fetch(dashboardUrl).then(r  => r.text())
		           .then(ymlContent => {
	    dbFrame.contentWindow.postMessage(ymlContent, null);
	})
    }
};
