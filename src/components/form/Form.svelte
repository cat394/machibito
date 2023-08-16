<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import SubmitButton from "./SubmitButton.svelte";
</script>

<form 
  class="grid gap-10" 
  netlify 
  data-netlify-honeypot="bot-field" 
  name="feedback" 
  method="POST"
>
  <input type="hidden" name="form-name" value="feedback" />
  <Input 
    type="name" 
    fieldName="お名前（ニックネーム可）" 
    name="name" 
  />
  <Input 
    type="email" 
    fieldName="メールアドレス" 
    name="email" 
  />
  <Textarea fieldName="内容" />
  <p class="hidden">
    <label>
      あなたが人間である場合は、これに記入しないでください: <input name="bot-field" />
    </label>
  </p>
  <div class="flex justify-center">
    <SubmitButton />
  </div>
</form>