1. چرا این کار Effect است؟

چون document.title مربوط به Browser DOM است و خارج از React قرار دارد. ما با استفاده از useEffect، عنوان صفحه مرورگر را با مقدار count هماهنگ می‌کنیم. این کار یک Side Effect محسوب می‌شود، چون فقط محاسبه‌ی UI نیست و روی چیزی خارج از React تأثیر می‌گذارد.

2. چرا count یک Dependency است؟

چون Effect از مقدار count استفاده می‌کند و هر بار که count تغییر کند، عنوان صفحه هم باید تغییر کند. بنابراین count را در Dependency Array قرار می‌دهیم:
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])