<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import SubmitButton from "./SubmitButton.svelte";
</script>

<form 
  class="grid gap-10" 
  action="https://ssgform.com/s/fmGjPCLMYoFD"
  method="post"
>
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
  <div class="flex justify-center">
    <SubmitButton />
  </div>
</form>