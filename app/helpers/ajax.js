export async function ajax(props) {
  let { url, method, headers, cbSuccess, cbError } = props;

  try {
    let res = await axios(url);
    cbSuccess(res);
  } catch (err) {
    cbError(err);
  }

  // await fetch(url)
  //   .then(res => (res.ok ? res.json() : Promise.reject(res)))
  //   .then(json => cbSuccess(json))
  //   .catch(err => {
  //     let message = err.statusText || "Ocurrió un error al acceder a la api";
  //     document.getElementById("main").innerHTML = `
  //     <div class="error">
  //       <p>Error ${err.status}: ${message}</p>
  //     </div>
  //     `;
  //     document.querySelector(".loader").style.display = "none";
  //     console.log(err);
  //   });
}
