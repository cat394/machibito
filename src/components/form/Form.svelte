<script>
  import Input from "./Input.svelte";
  import Textarea from "./Textarea.svelte";
  import SubmitButton from "./SubmitButton.svelte";
  import StickyNote from "../stickyNote/StickyNote.svelte";
  import Spacer from "../spacer/Spacer.svelte";
</script>

<StickyNote type="warn">
  <p>現在（2023/08/16）において、フォームが機能しない不具合が発生しているため、原因が解決するまでの間、お手数ですがページ下部に記載されているSNSアカウントよりご連絡ください。</p>
</StickyNote>
<Spacer />
<form 
  class="grid gap-10" 
  name="contact"
  method="POST"
  data-netlify="true"
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