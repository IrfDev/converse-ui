<script>
  // your script goes here
</script>

<style>
  .contact button {
    background-color: transparent;
    font-family: Cousine;
    padding: 1.5% 10%;
    border-color: #f4d316;
    color: #f4d316;
    border-radius: 1px;
    transition: all ease-in 0.5s;
  }

  .contact button:hover {
    transition: all ease-out 0.5s;
    border-color: #333;
    background-color: #f4d316;
    font-weight: bolder;
    text-decoration: underline;
    color: #333;
  }

  .contact input,
  textarea {
    border-radius: 1px;
    font-family: Open Sans;
  }
</style>

<form class="contact ">
  <div class="form-row">
    <div class="form-group col-md-6">
      <input
        placeholder="Nombre"
        type="name"
        class="form-control"
        id="inputName" />
    </div>
    <div class="form-group col-md-6">
      <input
        placeholder="E-mail"
        type="email"
        class="form-control"
        id="inputEmail" />
    </div>
    <div class="form-group col-md-12">
      <input
        placeholder="Teléfono"
        type="phone"
        class="form-control"
        id="inputPhone" />
    </div>

    <div class="form-group col-md-12">
      <textarea
        placeholder="Mensaje"
        class="form-control"
        name="inputMessage"
        id="inputMessage"
        cols="20"
        rows="3" />
    </div>
  </div>
  <button
    type="submit"
    on:click|preventDefault={(e) => console.log(e)}
    class="btn btn-primary">Enviar mensaje</button>
</form>
