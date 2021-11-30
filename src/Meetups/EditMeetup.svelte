<script>
  import { createEventDispatcher } from "svelte";
  import TextInput from "../UI/TextInput.svelte";
  import Button from "../UI/Button.svelte";
  import Modal from "../UI/Modal.svelte";

  let title = "";
  let subtitle = "";
  let address = "";
  let imageUrl = "";
  let email = "";
  let description = "";

  const dispatch = createEventDispatcher();

  const submitForm = () => {
    dispatch("save", {
      title: title,
      subtitle: subtitle,
      address: address,
      imageUrl: imageUrl,
      email: email,
      description: description,
    });
  };

  const cancel = () => {
    dispatch("cancel");
  };
</script>

<Modal title="Edit Meetup Data" on:cancel>
  <form on:submit|preventDefault={submitForm}>
    <TextInput
      id="title"
      label="Title"
      value={title}
      on:input={(event) => (title = event.target.value)}
    />
    <TextInput
      id="subtitle"
      label="Subtitle"
      value={subtitle}
      on:input={(event) => (subtitle = event.target.value)}
    />
    <TextInput
      id="address"
      label="Address"
      value={address}
      on:input={(event) => (address = event.target.value)}
    />
    <TextInput
      id="imageUrl"
      label="Image URL"
      value={imageUrl}
      on:input={(event) => (imageUrl = event.target.value)}
    />
    <TextInput
      id="email"
      label="E-Mail"
      type="email"
      value={email}
      on:input={(event) => (email = event.target.value)}
    />
    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      rows="3"
      value={description}
      on:input={(event) => (description = event.target.value)}
    />
  </form>
  <div slot="footer">
    <Button mode="outline" on:click={cancel}>Cancel</Button>
    <Button on:click={submitForm}>Save</Button>
  </div>
</Modal>

<style>
  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>
