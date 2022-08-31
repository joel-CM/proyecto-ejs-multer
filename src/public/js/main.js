const formName = document.querySelector(".form__name");
const formDescription = document.querySelector(".form__description");
const formFile = document.querySelector(".form__file");
const sendBtn = document.querySelector(".form__send");

sendBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const serie = new FormData();
  serie.append("name", formName.value);
  serie.append("description", formDescription.value);
  serie.append("image", formFile.files[0]);

  const optionFetch = {
    method: "POST",
    body: serie,
  };
  try {
    const responseSendSerie = await fetch(
      "http://localhost:3001/api/series",
      optionFetch
    );
    const res = await responseSendSerie.json();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
});
